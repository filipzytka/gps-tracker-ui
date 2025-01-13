import Breadcrumb from "@/components/Breadcrumbs";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import LogsContent from "./LogsContent";

const Logs = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Logs" />
      <LogsContent/>
    </DefaultLayout>
  );
};

export default Logs;
