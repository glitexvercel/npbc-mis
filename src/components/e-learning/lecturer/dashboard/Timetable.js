import { Button } from "@/components/ui/button";
import { LiaDownloadSolid } from "react-icons/lia";
import unitServices from "@/services/lecturer/UnitServices";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { groupUnitsByDay } from "@/lib/utils";
import { CTable } from "@/components/general/Table";
import { usePDF } from "react-to-pdf";

const Timetable = () => {
  const session = useSession();
  const { toPDF, targetRef } = usePDF();
  /**
   * Query to fetch timetable for the semester
   */
  const { data: timetable, isPending: isFetching } = useQuery({
    queryKey: ["timetable", session?.data?.user?.id],
    queryFn: () => unitServices.getUserTimetable(session?.data?.user?.id),
    enabled: !!session?.data?.user?.id,
  });

  // const groupedUnits =
  const groupedUnits = groupUnitsByDay(timetable || []);
  const generatePDF = () => {
    toPDF();
  };

  return (
    <div className={"col-span-2"}>
      <div className={"my-4 border border-gray-200 rounded-xl items-center"}>
        <div className={"px-5 py-3"}>
          <div className={"flex_row justify-between"}>
            <div className={"text-gray-700 "}>
              <h6 className={"font-medium text-15 mb-3"}>
                Your Semester Time table
              </h6>
              {/* <h6 className={"text-sm"}>Timetable for Current </h6> */}
            </div>

            <Button
              className={
                "text-13 border border-c-blue bg-c-blue text-white font-medium gap-2"
              }
              variant={"outline"}
              onClick={generatePDF}
            >
              Download Timetable
              <LiaDownloadSolid className={"text-lg text-white"} />
            </Button>
          </div>
        </div>

        <CTable
          columns={timeTableColumns}
          data={groupedUnits}
          isLoading={isFetching}
          tableCellClassName={"border-r"}
          tableClassName={"border-0 border-t rounded-none"}
        />
      </div>
    </div>
  );
};

export default Timetable;

export const renderCell = (props) => {
  const { row, column } = props;

  return (
    <div className={"text-gray-600 text-sm text-center font-medium md:text-sm"}>
      <span>{row?.getValue(column?.id)?.time}</span>
      <br />
      <span>{row?.getValue(column?.id)?.unit}</span>
    </div>
  );
};

export const timeTableColumns = [
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

const data = [
  {
    code: "8:00AM - 10:00AM",
    mon: "SIT 101 Room 3A",
    tue: " ",
    wed: "SIT 101 Room 3A",
    thur: "",
    fri: "SIT 101 Room 3A",
  },
  {
    code: "11:00AM - 01:00PM",
    mon: "",
    tue: " SIT 101 Room 3A",
    wed: "",
    thur: "SIT 101 Room 3A",
    fri: "",
  },
  {
    code: "2:00PM - 4:00PM",
    mon: "SIT 101 Room 3A",
    tue: " ",
    wed: "SIT 101 Room 3A",
    thur: "",
    fri: "SIT 101 Room 3A",
  },
  {
    code: "5:00PM - 07:00PM",
    mon: "",
    tue: " SIT 101 Room 3A",
    wed: "",
    thur: "SIT 101 Room 3A",
    fri: "",
  },
];
// order request card photo
// removing exact stock location
// notifications screen opening
// manage stock rename to sell
