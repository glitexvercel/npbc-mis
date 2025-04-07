import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import unitServices from "@/services/lecturer/UnitServices";
import { useCallback, useMemo, useState } from "react";
import { makeRequest } from "@/services/AxiosServices";
import { GET_REQUEST } from "@/configs/Globals";
import endpoints from "@/services/endpoints";
import { getStudentScores } from "@/services/lecturer/exam";

interface IUploadResults {
  unit: number | undefined; //unit id
  studentCategory: number | undefined;
  year: number | undefined;
  examType: number | undefined;
}

export default function useUploadResults() {
  const session = useSession();
  const [state, setState] = useState<IUploadResults>({
    unit: undefined,
    studentCategory: undefined,
    year: undefined,
    examType: undefined,
  });

  const handleStateChange = useCallback((key: string, value: any) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  //     query to fetch units
  const fetchUnitsQuery = useQuery({
    queryKey: ["units"],
    // @ts-ignore
    queryFn: () => unitServices.getUnits(session?.data?.user?.id),
  });

  // fetch exam types
  const fetchExamTypesQuery = useQuery({
    queryKey: ["exam_types"],
    queryFn: () => makeRequest(GET_REQUEST, `${endpoints.exam_types}`, null),
  });

  const selectedUnit = useMemo(() => {
    if (!state.unit) return null;

    return fetchUnitsQuery.data?.data?.find((u: any) => state.unit === u.id);
  }, [fetchUnitsQuery.data, state.unit]);

  const selectedSemester = useMemo(() => {
    if (!state.studentCategory) return null;
    if (!selectedUnit) return null;

    return selectedUnit.semesters.find(
      (sem: any) => sem.id === state.studentCategory
    );
  }, [state.studentCategory, selectedUnit]);

  const fetchStudentScoresQuery = useQuery({
    queryKey: [
      "student_scores",
      state.studentCategory,
      state.year,
      selectedSemester?.course?.id,
      state?.examType,
    ],
    queryFn: () =>
      getStudentScores(
        state?.studentCategory,
        state?.year,
        selectedSemester?.course?.id
      ),
    enabled:
      !!state.studentCategory && !!state.year && !!selectedSemester?.course?.id,
  });

  return {
    selectedUnit,
    state,
    user: session?.data?.user,
    fetchUnitsQuery,
    fetchExamTypesQuery,
    fetchStudentScoresQuery,
    handleStateChange,
  };
}
