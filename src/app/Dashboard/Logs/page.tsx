import Breadcrumb from "@/components/Breadcrumbs";
import DataTable from "@/components/DataTable";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Logs = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Logs" />
      <div className="flex flex-col gap-10">
        <DataTable></DataTable>
      </div>
    </DefaultLayout>
  );
};

export default Logs;
