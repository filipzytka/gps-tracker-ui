import { NavigationData } from "@/api/navigation";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const navigationColumns: ColumnDef<NavigationData>[] = [
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
  ]
  
  export const data: NavigationData[] = [
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
      lon: 16.11903,
      set: 2,
      prec: 2,
      alt: 31,
      course: 91,
      speed_kmph: 51,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:02:00",
      lat: 51.64955,
      lon: 16.11904,
      set: 3,
      prec: 3,
      alt: 32,
      course: 92,
      speed_kmph: 52,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:03:00",
      lat: 51.64956,
      lon: 16.11905,
      set: 4,
      prec: 3,
      alt: 33,
      course: 93,
      speed_kmph: 53,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:04:00",
      lat: 51.64957,
      lon: 16.11906,
      set: 5,
      prec: 4,
      alt: 34,
      course: 94,
      speed_kmph: 54,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:05:00",
      lat: 51.64958,
      lon: 16.11907,
      set: 6,
      prec: 4,
      alt: 35,
      course: 95,
      speed_kmph: 55,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:06:00",
      lat: 51.64959,
      lon: 16.11908,
      set: 7,
      prec: 5,
      alt: 36,
      course: 96,
      speed_kmph: 56,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:07:00",
      lat: 51.64960,
      lon: 16.11909,
      set: 8,
      prec: 5,
      alt: 37,
      course: 97,
      speed_kmph: 57,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:08:00",
      lat: 51.64961,
      lon: 16.11910,
      set: 9,
      prec: 6,
      alt: 38,
      course: 98,
      speed_kmph: 58,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:09:00",
      lat: 51.64962,
      lon: 16.11911,
      set: 10,
      prec: 6,
      alt: 39,
      course: 99,
      speed_kmph: 59,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:10:00",
      lat: 51.64963,
      lon: 16.11912,
      set: 11,
      prec: 7,
      alt: 40,
      course: 100,
      speed_kmph: 60,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:11:00",
      lat: 51.64964,
      lon: 16.11913,
      set: 12,
      prec: 7,
      alt: 41,
      course: 101,
      speed_kmph: 61,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:12:00",
      lat: 51.64965,
      lon: 16.11914,
      set: 13,
      prec: 8,
      alt: 42,
      course: 102,
      speed_kmph: 62,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:13:00",
      lat: 51.64966,
      lon: 16.11915,
      set: 14,
      prec: 8,
      alt: 43,
      course: 103,
      speed_kmph: 63,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:14:00",
      lat: 51.64967,
      lon: 16.11916,
      set: 15,
      prec: 9,
      alt: 44,
      course: 104,
      speed_kmph: 64,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:15:00",
      lat: 51.64968,
      lon: 16.11917,
      set: 16,
      prec: 9,
      alt: 45,
      course: 105,
      speed_kmph: 65,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:16:00",
      lat: 51.64969,
      lon: 16.11918,
      set: 17,
      prec: 10,
      alt: 46,
      course: 106,
      speed_kmph: 66,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:17:00",
      lat: 51.64970,
      lon: 16.11919,
      set: 18,
      prec: 10,
      alt: 47,
      course: 107,
      speed_kmph: 67,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:18:00",
      lat: 51.64971,
      lon: 16.11920,
      set: 19,
      prec: 11,
      alt: 48,
      course: 108,
      speed_kmph: 68,
    },
    {
      macAddress: "C4:D8:D5:14:28:DF",
      date: "2025-01-01 12:19:00",
      lat: 51.64972,
      lon: 16.11921,
      set: 20,
      prec: 11,
      alt: 49,
      course: 109,
      speed_kmph: 69,
    },
  ];