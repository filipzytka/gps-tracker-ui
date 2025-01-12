"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { NavigationData } from "@/api/navigation"

const data: NavigationData[] = [
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:00:00",
    lat: 51.64953,
    lon: 16.11902,
    set: 1,
    prec: 2,
    alt: 30,
    course: 90,
    speed_kmph: 50,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:01:00",
    lat: 51.64954,
    lon: 16.11905,
    set: 2,
    prec: 2,
    alt: 35,
    course: 95,
    speed_kmph: 55,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:02:00",
    lat: 51.64956,
    lon: 16.11907,
    set: 3,
    prec: 3,
    alt: 40,
    course: 100,
    speed_kmph: 60,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:03:00",
    lat: 51.64955,
    lon: 16.11906,
    set: 4,
    prec: 3,
    alt: 45,
    course: 105,
    speed_kmph: 65,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:04:00",
    lat: 51.64954,
    lon: 16.11904,
    set: 5,
    prec: 4,
    alt: 50,
    course: 110,
    speed_kmph: 70,
  },
]


export const columns: ColumnDef<NavigationData>[] = [
  {
    accessorKey: "macAddress",
    header: "MAC Address",
    cell: ({ row }) => <div>{row.getValue("macAddress")}</div>,
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("date")}</div>,
  },
  {
    accessorKey: "lat",
    header: "Latitude",
    cell: ({ row }) => <div>{row.getValue("lat")}</div>,
  },
  {
    accessorKey: "lon",
    header: "Longitude",
    cell: ({ row }) => <div>{row.getValue("lon")}</div>,
  },
  {
    accessorKey: "set",
    header: "Set",
    cell: ({ row }) => <div>{row.getValue("set")}</div>,
  },
  {
    accessorKey: "prec",
    header: "Prec",
    cell: ({ row }) => <div>{row.getValue("prec")}</div>,
  },
  {
    accessorKey: "alt",
    header: "Altitude",
    cell: ({ row }) => <div>{row.getValue("alt")}</div>,
  },
  {
    accessorKey: "course",
    header: "Course",
    cell: ({ row }) => <div>{row.getValue("course")}</div>,
  },
  {
    accessorKey: "speed_kmph",
    header: "Speed (km/h)",
    cell: ({ row }) => <div>{row.getValue("speed_kmph")}</div>,
  },
];

const DataTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})

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
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex items-center py-4">
        {/* <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        /> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
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
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DataTable