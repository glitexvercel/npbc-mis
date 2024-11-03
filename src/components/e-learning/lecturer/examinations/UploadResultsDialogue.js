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
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
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
          <ResultInput
            id={"title"}
            placeholder={"Enter descriptive title"}
            label={"Results Title"}
          />

          <div className={"flex gap-5 w-full"}>
            <ResultSelector
              id={"unit"}
              placeholder={"Enter descriptive title"}
              label={"Unit"}
              selectItems={units}
            />
            <ResultSelector
              id={"exam-type"}
              placeholder={""}
              label={"Exam Type"}
              selectItems={exams}
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
                columns={studentScores}
                data={units || []}
                tableClassName={"border-0"}
                tableHeaderClassName={"bg-gray-50"}
              />
            </SkeletonWrapper>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadResultsDialogue;

const ResultInput = ({ id = "input", label, ...rest }) => {
  return (
    <div className={"flex flex-col gap-2 flex-1"}>
      <label htmlFor={id} className={"text-gray-700 text-sm font-semibold"}>
        {label}
      </label>
      <input
        id={id}
        className={"border border-gray-300 p-2 rounded-xl text-sm h-14 px-3"}
        {...rest}
      />
    </div>
  );
};

const ResultSelector = ({
  id = "input",
  label,
  placeholder,
  selectItems = [],
  ...rest
}) => {
  return (
    <div className={"flex flex-col gap-2 flex-1"}>
      <label htmlFor={id} className={"text-gray-700 text-sm font-semibold"}>
        {label}
      </label>
      <Select>
        <SelectTrigger className="w-full h-12 rounded-xl">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {selectItems.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

const exams = [
  {
    value: "final",
    label: "Final Exam",
  },
];

const units = [];

const studentScores = [
  {
    accessorKey: "registrationNumber",
    header: "Registration Number",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "score",
    header: "Exam Score",
    width: "w-[100px]",
  },
];
