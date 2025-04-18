import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useExamResults from "@/hooks/useExamResults";
import { EmptyTableRow } from "../academics/Timetable";

const ResultsTable = () => {
  const { getExamResults, isFetching } = useExamResults();

  return (
    <Table className={""}>
      {/*<TableCaption>A list of your recent invoices.</TableCaption>*/}
      <TableHeader className={"bg-gray-50"}>
        <TableRow className={"text-red-500"}>
          {titles?.map(({ className, name }, key) => (
            <TableHead key={key} className={`text-black py-5 ${className}`}>
              {name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {!getExamResults()?.length ? (
          <EmptyTableRow key={"0"} isLoading={isFetching} results={results} />
        ) : (
          getExamResults()?.map((res, ind) => (
            <TableRow key={ind} className={"border-b border-gray-100"}>
              {Object.keys(res)?.map((cKey, index) => (
                <TableCell
                  key={index}
                  className=" text-[13px] text-gray-500 py-5"
                >
                  {res[cKey]}
                </TableCell>
              ))}
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default ResultsTable;

const titles = [
  {
    name: "Unit Code",
    className: "w-[150px]",
  },
  {
    name: "Unit",
    className: "",
  },
  {
    name: "Date",
    className: "",
  },
  {
    name: "Exam Type",
    className: "",
  },
  {
    name: "Marks %",
    className: "",
  },
  {
    name: "Grade",
    className: "",
  },
];

const results = [
  {
    code: "SIT 101",
    unit: "Contextual Exegesis",
    hours: "22",
    marks: "68",
    grade: "C",
  },
];
