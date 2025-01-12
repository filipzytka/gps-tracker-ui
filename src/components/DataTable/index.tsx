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
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:05:00",
    lat: 51.64957,
    lon: 16.11909,
    set: 6,
    prec: 4,
    alt: 55,
    course: 115,
    speed_kmph: 75,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:06:00",
    lat: 51.64958,
    lon: 16.11911,
    set: 7,
    prec: 5,
    alt: 60,
    course: 120,
    speed_kmph: 80,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:07:00",
    lat: 51.64960,
    lon: 16.11913,
    set: 8,
    prec: 5,
    alt: 65,
    course: 125,
    speed_kmph: 85,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:08:00",
    lat: 51.64961,
    lon: 16.11914,
    set: 9,
    prec: 6,
    alt: 70,
    course: 130,
    speed_kmph: 90,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:09:00",
    lat: 51.64963,
    lon: 16.11916,
    set: 10,
    prec: 6,
    alt: 75,
    course: 135,
    speed_kmph: 95,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:10:00",
    lat: 51.64964,
    lon: 16.11918,
    set: 11,
    prec: 7,
    alt: 80,
    course: 140,
    speed_kmph: 100,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:11:00",
    lat: 51.64965,
    lon: 16.11920,
    set: 12,
    prec: 7,
    alt: 85,
    course: 145,
    speed_kmph: 105,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:12:00",
    lat: 51.64966,
    lon: 16.11922,
    set: 13,
    prec: 8,
    alt: 90,
    course: 150,
    speed_kmph: 110,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:13:00",
    lat: 51.64968,
    lon: 16.11924,
    set: 14,
    prec: 8,
    alt: 95,
    course: 155,
    speed_kmph: 115,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:14:00",
    lat: 51.64969,
    lon: 16.11926,
    set: 15,
    prec: 9,
    alt: 100,
    course: 160,
    speed_kmph: 120,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:15:00",
    lat: 51.64971,
    lon: 16.11928,
    set: 16,
    prec: 9,
    alt: 105,
    course: 165,
    speed_kmph: 125,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:16:00",
    lat: 51.64972,
    lon: 16.11930,
    set: 17,
    prec: 10,
    alt: 110,
    course: 170,
    speed_kmph: 130,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:17:00",
    lat: 51.64973,
    lon: 16.11932,
    set: 18,
    prec: 10,
    alt: 115,
    course: 175,
    speed_kmph: 135,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:18:00",
    lat: 51.64975,
    lon: 16.11934,
    set: 19,
    prec: 11,
    alt: 120,
    course: 180,
    speed_kmph: 140,
  },
  {
    macAddress: "C4:D8:D5:14:28:DF",
    date: "2025-01-01 12:19:00",
    lat: 51.64976,
    lon: 16.11936,
    set: 20,
    prec: 11,
    alt: 125,
    course: 185,
    speed_kmph: 145,
  },
];


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