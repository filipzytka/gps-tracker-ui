import { axiosObj } from "./axios";

export type Device = {
    macAddress: string
    name: string
    date: string
}

export const fetchDeviceData = async () => {
    const { data } = await axiosObj.get<Device[]>(
      `/device`
    );

    console.log(data)

    return data;
  };
