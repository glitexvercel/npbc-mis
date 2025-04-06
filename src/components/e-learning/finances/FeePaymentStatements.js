import React from "react";
import { Button } from "@/components/ui/button";
import { LiaDownloadSolid } from "react-icons/lia";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useStatement from "@/hooks/usStatement";
import { EmptyTableRow } from "../academics/Timetable";

const FeePaymentStatements = () => {
  const { getStatement, isFetching } = useStatement();
  return (
    <div className={"my-3"}>
      <h5 className={" text-c-red mb-1 text-base font-semibold mt-7"}>
        Fee Payment Statements
      </h5>
      <p className={"text-sm text-gray-600"}>
        Find individual payment transaction records.
      </p>

      <div className={"my-4 border border-gray-200 rounded-xl items-center"}>
        <div className={"px-5 py-3"}>
          <div className={"flex_row justify-between"}>
            <div className={"text-gray-700 "}>
              <h6 className={"font-medium text-15 mb-3"}>
                All Previous Statements
              </h6>
            </div>

            <Button
              className={
                "text-xs text-c-blue border border-c-blue font-light gap-2"
              }
              variant={"outline"}
            >
              Download Statements
              <LiaDownloadSolid className={"text-lg"} />
            </Button>
          </div>
        </div>

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
            {!getStatement()?.length ? (
              <EmptyTableRow key={"0"} isLoading={isFetching} results={statements} />
            ) : getStatement()?.map((res, ind) => (
              <TableRow key={ind} className={"border-b border-gray-100"}>
                {Object.keys(res)?.map((cKey, index) => (
                  <TableCell
                    key={index}
                    className=" text-[13px] text-gray-600 py-5"
                  >
                    {res[cKey]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FeePaymentStatements;

const titles = [
  {
    name: "Paid By",
    className: "",
  },
  {
    name: "Payment Vendor",
    className: "",
  },
  {
    name: "Paid On",
    className: "",
  },
  {
    name: "Amount Paid",
    className: "",
  },
];

const statements = [
  {
    paidBy: "Claire Waithera",
    paidVia: "Mpesa",
    dop: "12 Jan 2023 08:40AM",
    amount: "20,200",
  },
];
