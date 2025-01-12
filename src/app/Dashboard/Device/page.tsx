import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs";
import DataTable from "@/components/DataTable";
import DevicesDataTable from "@/components/DevicesDataTable";

export const metadata: Metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Device = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Devices" />
      <DevicesDataTable/>
    </DefaultLayout>
  );
};

export default Device;
