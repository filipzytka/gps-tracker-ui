"use client"

import Breadcrumb from "@/components/Breadcrumbs";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

const NavigationMap = dynamic(() => import("@/components/NavigationMap"), {
  ssr: false,
});
const devices = [
  {
    name: "ESP-8266",
    macAddress: "fe:5f:33:28:15:0a",
  },
];

const Dashboard = () => {

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Map" />
        <div className="flex items-center justify-between mb-6">
          <Button onClick={() => console.log()}>Refresh</Button>
          <Select>
            <SelectTrigger className="w-[180px] z-999">
              <SelectValue placeholder="Select Device" />
            </SelectTrigger>
            <SelectContent className="z-999">
              {devices.map((device, index) => {
                return (
                  <SelectItem key={index} value={device.macAddress}>
                    {device.name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-6">
          <div className="w-full h-[400px] sm:h-[600px]">
            <NavigationMap/>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Dashboard;
