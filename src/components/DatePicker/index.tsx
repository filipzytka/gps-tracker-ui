"use client"

import * as React from "react"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"

type Props = {
    title: string
}

export function CustomDatePicker({title}: Props) {
  const dateHandler = (currentDate: Date | undefined) => {
    if (!currentDate) {
      return
    }

    console.log(currentDate)
    setDate(currentDate)
  }

  const [date, setDate] = React.useState<Date>()
    return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{title}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 z-999">
        <Calendar
          mode="single"
          selected={date}
          onSelect={dateHandler}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
