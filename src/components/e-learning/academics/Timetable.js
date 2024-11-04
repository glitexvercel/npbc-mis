import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LiaDownloadSolid } from "react-icons/lia";
import { ImFilesEmpty } from "react-icons/im";
import { usePDF } from "react-to-pdf";

import SkeletonWrapper from "@/components/general/SkeletonWrapper";
import useSemesterDetails from "@/hooks/useSemesterDetails";
import { generateCourseName, groupUnitsByDay } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getSemesterTimetable } from "@/services/TimetableServices";
import { CTable } from "@/components/general/Table";

const Timetable = () => {
  const { data: semester, isPending } = useSemesterDetails();
  const { toPDF, targetRef } = usePDF();

  /**
   * Query to fetch timetable for the semester
   */
  const { data, isPending: isFetching } = useQuery({
    queryKey: ["semester_timetable", semester?.id],
    queryFn: () => getSemesterTimetable(semester?.id),
    enabled: !!semester?.id,
  });

  const generatePDF = () => {
    toPDF();
  };

  // const groupedUnits =
  const groupedUnits = groupUnitsByDay(data || []);

  return (
    <div className={"col-span-2"}>
      <h5 className={" text-c-red text-base font-semibold mt-7"}>
        Semester Timetable
      </h5>

      <div className={"my-4 border border-gray-200 rounded-xl items-center"}>
        <div className={"px-5 py-3"}>
          <div className={"flex_row justify-between"}>
            <SkeletonWrapper fullWidth={false} isLoading={isPending}>
              <div className={"text-gray-700 "}>
                <h6 className={"font-medium text-15 mb-3"}>
                  {generateCourseName(
                    semester?.course?.name,
                    semester?.course?.type?.name
                  )}
                </h6>
                <h6 className={"text-sm"}>
                  Results for Year {semester?.year} Semester {semester?.number}
                </h6>
              </div>
            </SkeletonWrapper>

            <Button
              className={
                "text-13 text-c-blue border border-c-blue font-light gap-2"
              }
              variant={"outline"}
              onClick={generatePDF}
            >
              Download
              <LiaDownloadSolid className={"text-lg"} />
            </Button>
          </div>
        </div>
        <div className="p-3" ref={targetRef}>
          <CTable
            columns={timeTableColumns}
            data={groupedUnits}
            isLoading={isFetching}
            tableCellClassName={"border-r"}
          />
        </div>
      </div>
    </div>
  );
};

export default Timetable;

const renderCell = (props) => {
  const { row, column } = props;

  return (
    <div className={"text-gray-600 text-sm text-center font-medium md:text-sm"}>
      <span>{row?.getValue(column?.id)?.time}</span>
      <br />
      <span>{row?.getValue(column?.id)?.unit}</span>
    </div>
  );
};

const timeTableColumns = [
  {
    accessorKey: "Monday",
    header: "Monday",
    cell: renderCell,
  },
  {
    accessorKey: "Tuesday",
    header: "Tuesday",
    cell: renderCell,
  },
  {
    accessorKey: "Wednesday",
    header: "Wednesday",
    cell: renderCell,
  },
  {
    accessorKey: "Thursday",
    header: "Thursday",
    cell: renderCell,
  },
  {
    accessorKey: "Friday",
    header: "Friday",
    cell: renderCell,
  },
  {
    accessorKey: "Saturday",
    header: "Saturday",
    cell: renderCell,
  },
];

export const EmptyTableRow = ({ results = [], isLoading }) => (
  <>
    <div className={`absolute inset-0 rounded-2xl bg-white z-20 mt-16 `}>
      <SkeletonWrapper isLoading={isLoading}>
        <div className={"p-10 flex flex-col items-center justify-center"}>
          <div className="mb-3">
            <ImFilesEmpty className="text-3xl text-gray-400" />
          </div>
          <p className="italic text-slate-400">No records to display</p>
        </div>
      </SkeletonWrapper>
    </div>
    <TableRow className={"border-b relative border-gray-100 "}>
      {Object.keys(results?.at(0))?.map((cKey, index) => (
        <TableCell key={index} className=" text-[13px] text-gray-600 py-12">
          {results?.at(0)[cKey]}
        </TableCell>
      ))}
    </TableRow>
  </>
);
