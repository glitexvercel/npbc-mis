"use client";
import SkeletonWrapper from "@/components/general/SkeletonWrapper";
import { Button } from "@/components/ui/button";
import { GET_REQUEST, POST_REQUEST } from "@/configs/Globals";
import { makeRequest } from "@/services/AxiosServices";
import endpoints from "@/services/endpoints";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useMemo, useState } from "react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  ResultInput,
  ResultTextArea,
} from "@/components/e-learning/lecturer/examinations/UploadResultsDialogue";
import { ImDropbox } from "react-icons/im";
import { toast } from "sonner";

const UploadExamsTableBody = ({
  data = [],
  isLoading = false,
  currentState,
}) => {
  return (
    <>
      <TableBody>
        {isLoading ? (
          <LoadingTable numRows={10} />
        ) : data?.length === 0 ? (
          <EmptyTable />
        ) : (
          data?.map((data, index) => (
            <CTableRow
              currentState={currentState}
              data={data}
              index={index}
              key={index}
            />
          ))
        )}
      </TableBody>
    </>
  );
};

export default UploadExamsTableBody;

export const CTableRow = ({ data, currentState, index }) => {
  const [state, setState] = useState({
    marks: null,
    remarks: null,
  });
  const queryClient = useQueryClient();

  // fetch exam types
  const {
    data: scores,
    isFetching,
    isSuccess,
  } = useQuery({
    queryKey: ["scores", data?.id, currentState?.unit, currentState?.examType],
    queryFn: () =>
      makeRequest(
        GET_REQUEST,
        `${endpoints.exam_results}?user=${data?.id}&unit=${currentState?.unit}&type=${currentState?.examType}`,
        null
      ),
    enabled: !!data?.id && !!currentState?.unit && !!currentState?.examType,
  });

  const handleStateChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const currentStudentScores = useMemo(
    () => scores?.data?.data?.at(0) || {},
    [scores?.data?.data]
  );

  useEffect(() => {
    if (isSuccess) {
      setState({
        marks: currentStudentScores?.total,
        remarks: currentStudentScores?.remarks,
      });
    } else {
      setState({
        marks: null,
        remarks: null,
      });
    }
  }, [isSuccess, currentStudentScores]);

  const hasValues = useMemo(() => !!state.marks && !!state.remarks, [state]);

  const saveScoresMutation = useMutation({
    mutationKey: ["save_scores"],
    mutationFn: async () => {
      const url = currentStudentScores?.id
        ? `${endpoints.exam_results}${currentStudentScores?.id}`
        : `${endpoints.exam_results}`;
      const formData = new FormData();
      if (currentStudentScores?.id) formData.append("_method", "patch");

      formData.append("student", data?.id);
      formData.append("unit", currentState?.unit);
      formData.append("type", currentState?.examType);
      formData.append("total", Number(state.marks));
      formData.append("remarks", state.remarks);

      return await makeRequest(POST_REQUEST, url, formData);
    },
    onSuccess: async () => {
      toast.success(`${data?.name}'s Scores saved successfully`);
      await queryClient.invalidateQueries({
        queryKey: [
          "scores",
          data?.id,
          currentState?.unit,
          currentState?.examType,
        ],
      });
    },
    onError: (error) => {
      toast.error(
        "Failed to save scores" + error?.response?.data?.message ||
          error?.message
      );
    },
  });

  return (
    <TableRow className={""}>
      <TableCell className={"mt-0"}>{index + 1}</TableCell>
      <TableCell>{data?.reg_no}</TableCell>
      <TableCell>{data?.name}</TableCell>
      <TableCell>
        <ResultInput
          id={"marks"}
          label={""}
          type={"number"}
          placeholder={"Enter marks"}
          name={"marks"}
          value={state.marks}
          onChange={handleStateChange}
        />
      </TableCell>
      <TableCell>
        <ResultTextArea
          id={"remarks"}
          label={""}
          placeholder={"Enter remarks"}
          name={"remarks"}
          value={state.remarks}
          onChange={handleStateChange}
        />
      </TableCell>
      <TableCell className="text-center">
        <Button
          disabled={saveScoresMutation?.isPending || isFetching || !hasValues}
          className={"bg-c-blue w-full"}
          onClick={() => saveScoresMutation.mutate()}
        >
          {saveScoresMutation?.isPending
            ? "Saving..."
            : isFetching
            ? "Loading..."
            : "Save"}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export const LoadingTable = ({ numRows = 3 }) => (
  <>
    {new Array(numRows).fill(0).map((_, ind) => (
      <TableRow key={ind}>
        {new Array(6).fill(0).map((_, index) => (
          <TableCell className={"p-2 "} key={index}>
            <SkeletonWrapper
              isLoading={true}
              className={"h-8 rounded-none w-full"}
            />
          </TableCell>
        ))}
      </TableRow>
    ))}
  </>
);

export const EmptyTable = () => (
  <TableRow>
    <TableCell className={" h-48 relative"} colSpan={6}>
      <div
        className={
          "flex flex-col gap-y-3 justify-center items-center absolute inset-0 bg-white"
        }
      >
        <ImDropbox className={"text-5xl text-gray-400"} />
        <div className={"text-center"}>
          <p className={"text-sm text-gray-400 font-medium"}>List Empty</p>
          <p className={"text-sm text-gray-400 "}>
            Select a unit to upload results
          </p>
        </div>
      </div>
    </TableCell>
  </TableRow>
);
