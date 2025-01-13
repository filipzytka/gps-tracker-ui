"use client";

import DataTable from "@/components/DataTable";
import { navigationColumns } from "./data";
import { fetchPaginatedData, NavigationData } from "@/api/navigation";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { PaginationState } from "@tanstack/react-table";

const LogsContent = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const { data, isLoading } = useQuery({
    queryKey: ["navigationLogs", pagination],
    queryFn: () => fetchPaginatedData(pagination.pageIndex, pagination.pageSize),
    placeholderData: keepPreviousData,
  });
  if (isLoading) {
    return;
  }

  return (
    <div className="flex flex-col gap-10">
      <DataTable<NavigationData>
        columns={navigationColumns}
        data={data?.logs ?? []}
        rowCount={data?.totalCount ?? 0}
        pageCount={data?.totalPages ?? 0}
        pagination={pagination}
        setPagination={setPagination}
      />
    </div>
  );
};

export default LogsContent;
