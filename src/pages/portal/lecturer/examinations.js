import React from "react";
import LecturerPortalLayout from "@/components/e-learning/lecturer/LecturerPortalLayout";
import {
  LecturerExamsStatCards,
  LecturerExamTimetable,
  LecturerExamUploadedResults,
} from "@/components";

const Examinations = () => {
  return (
    <LecturerPortalLayout>
      <LecturerExamsStatCards />

      <LecturerExamTimetable />

      <LecturerExamUploadedResults />
    </LecturerPortalLayout>
  );
};

export default Examinations;
