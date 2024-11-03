import React from "react";
import { Button } from "@/components/ui/button";
import { ReceiptSvg, UploadSvg } from "@/assets/icons";
import { Table, TableBody, TableRow } from "@/components/ui/table";
import ResourceCard from "@/components/e-learning/ResourceCard";
import Theme from "@/constants/Theme";
import { LecturerUploadResultsDialogue } from "@/components";

const UploadedResults = ({ hideUpload = false }) => {
  return (
    <>
      <h5 className={" text-c-red text-base font-semibold mt-7"}>
        Uploaded Exam Results
      </h5>

      <div className={"my-4 border border-gray-200 rounded-xl items-center"}>
        <div className={"px-5 py-3 pt-5"}>
          <div className={"flex_row justify-between items-center mb-2"}>
            <div className={"text-gray-700 "}>
              <h6 className={"font-medium text-15 mb-3"}>All Transcripts</h6>
            </div>

            {/*  upload button  */}

            {!hideUpload && (
              <LecturerUploadResultsDialogue>
                <Button
                  variant={"outlined"}
                  className={
                    "border bg-c-blue text-white gap-3 font-medium text-[13px]"
                  }
                >
                  Upload New Results
                  <UploadSvg />
                </Button>
              </LecturerUploadResultsDialogue>
            )}
          </div>

          <Table>
            <TableBody className={"gap-5"}>
              {files?.map((res, ind) => (
                <TableRow key={ind} className={"border-none"}>
                  <div className={"py-2"}>
                    <ResourceCard
                      icon={
                        <ReceiptSvg size={"40"} color={Theme.colors.c_blue} />
                      }
                      cardTitle={res?.title}
                      fileName={res?.fileName}
                      actionTitle={"Download Transcript"}
                    />
                  </div>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default UploadedResults;

const files = [
  {
    title: "2024 Semester 1 JAN - APR Examination Resluts.",
    fileName: "file_name_2024_Semester_exams_results.pdf",
  },
  {
    title: "2024 Semester 1 JAN - APR Examination Resluts.",
    fileName: "file_name_2024_Semester_exams_results.pdf",
  },
  {
    title: "2024 Semester 1 JAN - APR Examination Resluts.",
    fileName: "file_name_2024_Semester_exams_results.pdf",
  },
  {
    title: "2024 Semester 1 JAN - APR Examination Resluts.",
    fileName: "file_name_2024_Semester_exams_results.pdf",
  },
];
