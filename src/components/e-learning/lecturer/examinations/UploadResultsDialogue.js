import UploadExamsTableBody from "@/components/e-learning/lecturer/examinations/UploadExamsTableBody";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import useUploadResults from "@/hooks/useUploadResults";
import { cn, getYears } from "@/lib/utils";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SkeletonWrapper from "@/components/general/SkeletonWrapper";
import { CTable } from "@/components/general/Table";

const UploadResultsDialogue = ({ children }) => {
  const {
    selectedUnit,
    state,

    fetchUnitsQuery,
    fetchExamTypesQuery,
    fetchStudentScoresQuery,
    handleStateChange,
  } = useUploadResults();
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <div
          className={"flex flex-col space-y-5 overflow-y-scroll max-h-[93vh]"}
        >
          <DialogHeader className={"py-3 border-b border-gray-300"}>
            <DialogTitle className={"text-c-red text-xl"}>
              Upload Exams Results
            </DialogTitle>
            <DialogDescription>
              Upload the complete results for all students who sat for a
              particular unit for students and the administration to view
            </DialogDescription>
          </DialogHeader>

          {/*  body  */}
          <div className={"flex flex-col gap-5"}>
            <div className={"flex gap-5 w-full px-1"}>
              <ResultSelector
                id={"unit"}
                placeholder={
                  fetchUnitsQuery.isFetching
                    ? "Fetching units..."
                    : "Enter descriptive title"
                }
                label={"Unit"}
                selectItems={fetchUnitsQuery?.data?.data || []}
                disabled={fetchUnitsQuery.isFetching}
                labelKey={"name"}
                valueKey={"id"}
                value={state?.unit}
                onValueChange={(value) => handleStateChange("unit", value)}
              />

              <div
                className={`flex flex-1 ${
                  !selectedUnit?.id ? "opacity-50" : ""
                }`}
              >
                <ResultSelector
                  id={"student-category"}
                  placeholder={""}
                  label={"Student Category"}
                  selectItems={selectedUnit?.semesters}
                  disabled={!selectedUnit?.id}
                  labelKey={null}
                  getLabelKey={(semester) => `
                  ${semester?.course?.name}, Year ${semester?.year}, Semester ${semester?.number}
                  `}
                  valueKey={"id"}
                  value={state?.studentCategory}
                  onValueChange={(value) =>
                    handleStateChange("studentCategory", value)
                  }
                />
              </div>
            </div>

            <div className={"px-1 gap-5 flex w-full "}>
              <div
                className={`flex flex-1 ${
                  !state.studentCategory ? "opacity-50" : ""
                }`}
              >
                <ResultSelector
                  id={"year"}
                  placeholder={"Select the student's year of study"}
                  label={"Year"}
                  selectItems={getYears() || []}
                  disabled={!state.studentCategory}
                  labelKey={"_"}
                  valueKey={null}
                  value={state.year}
                  onValueChange={(value) => handleStateChange("year", value)}
                />
              </div>

              <ResultSelector
                id={"exam-type"}
                placeholder={""}
                label={"Exam Type"}
                selectItems={fetchExamTypesQuery?.data?.data || []}
                disabled={fetchExamTypesQuery.isFetching}
                labelKey={"name"}
                valueKey={"id"}
                value={state?.examType}
                onValueChange={(value) => handleStateChange("examType", value)}
              />
            </div>

            <div
              className={
                "flex-1 my-4 border border-gray-200 rounded-xl items-center"
              }
            >
              <div className={"px-5 py-3"}>
                <div className={"flex_row justify-between"}>
                  <div className={"text-gray-700 "}>
                    <h6 className={"font-medium text-15 mb-3 text-c-red"}>
                      Edit the student&apos;s Scores
                    </h6>
                  </div>
                </div>
              </div>

              <SkeletonWrapper>
                <CTable
                  renderCustomHeader={() => renderTableHeader()}
                  renderCustomBody={() => (
                    <UploadExamsTableBody
                      data={fetchStudentScoresQuery.data?.data?.data || []}
                      isLoading={fetchStudentScoresQuery?.isFetching}
                      currentState={state}
                    />
                  )}
                  data={units || []}
                  tableClassName={"border-0"}
                  tableHeaderClassName={"bg-gray-50"}
                />
              </SkeletonWrapper>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadResultsDialogue;

export const ResultInput = ({ id = "input", label, ...rest }) => {
  return (
    <div className={"flex flex-col gap-2 flex-1"}>
      <label htmlFor={id} className={"text-gray-700 text-sm font-semibold"}>
        {label}
      </label>
      <input
        id={id}
        className={"border border-gray-300 p-2 rounded-xl text-sm h-12 px-3"}
        {...rest}
      />
    </div>
  );
};
export const ResultTextArea = ({ id = "input", label, ...rest }) => {
  return (
    <div className={"flex flex-col gap-2 flex-1"}>
      <label htmlFor={id} className={"text-gray-700 text-sm font-semibold"}>
        {label}
      </label>
      <textarea
        id={id}
        className={"border border-gray-300 p-2 rounded-xl text-sm px-3 "}
        rows={3}
        {...rest}
      />
    </div>
  );
};

export const ResultSelector = ({
  id = "input",
  label,
  placeholder,
  selectItems = [],

  labelKey = "label",
  getLabelKey,
  valueKey = "value",
  ...rest
}) => {
  return (
    <div className={"flex flex-col gap-2 flex-1"}>
      <label htmlFor={id} className={"text-gray-700 text-sm font-semibold"}>
        {label}
      </label>
      <Select {...rest}>
        <SelectTrigger className="w-full h-12 rounded-xl">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {selectItems?.map((item, index) => (
            <SelectItem key={index} value={valueKey ? item[valueKey] : item}>
              {labelKey === "_"
                ? item
                : !!labelKey
                ? item[labelKey]
                : getLabelKey(item)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

const units = [];

const renderTableHeader = () => {
  return (
    <TableRow className={"overflow-hidden"}>
      <TableHead className="w-[100px]">#</TableHead>
      <TableHead>Registration No.</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Marks(%)</TableHead>
      <TableHead>Remarks</TableHead>
      <TableHead className="w-[120px] text-center">Action</TableHead>
    </TableRow>
  );
};
