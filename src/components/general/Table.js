"use client";

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";

export function CTable({
  columns = [],
  data = [],
  header,
  isLoading,
  tableClassName: containerTableClassName,
  tableCellClassName,
  tableHeaderClassName,
  refresh = () => {},
  renderCustomBody,
  renderCustomHeader,
}) {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      {/* table header */}
      {header}

      {/* table  */}
      <div className={`border rounded-md ${containerTableClassName}`}>
        <Table>
          <TableHeader className={tableHeaderClassName}>
            {table?.getHeaderGroups()?.map((headerGroup) =>
              renderCustomHeader ? (
                renderCustomHeader(headerGroup)
              ) : (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              )
            )}
          </TableHeader>

          {renderCustomBody ? (
            renderCustomBody()
          ) : (
            <TableBody>
              {isLoading && (
                <>
                  {new Array(3).fill(0).map((_, ind) => (
                    <TableLoader columnsLength={columns.length} key={ind} />
                  ))}
                </>
              )}
              {!!table.getRowModel().rows?.length &&
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell key={cell.id} className={tableCellClassName}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}

              {!isLoading && !table.getRowModel().rows?.length && (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="py-10 text-center"
                  >
                    <div className="flex flex-col items-center justify-center mx-auto ">
                      <p className="mt-2 mb-4 ">No Results Found</p>

                      <Button onClick={refresh} variant="default">
                        Refresh
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
      </div>
    </div>
  );
}

const TableLoader = ({ columnsLength }) => (
  <TableRow className="p-0 py-1 border-none">
    {new Array(columnsLength).fill(0).map((_, ind) => (
      <TableCell key={ind} className="h-5 text-center ">
        <Skeleton className=" h-9" />
      </TableCell>
    ))}

    {/* ))} */}
  </TableRow>
);
