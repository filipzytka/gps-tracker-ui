import { axiosObj } from "./axios";

export type NavigationData = {
    macAddress: string,
    date: string,
    lat: number,
    lon: number,
    set: number,
    prec: number,
    alt: number,
    course: number,
    speed_kmph: number
}

export type NavigationDataResponse = {
  logs: NavigationData[];
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export const fetchNavigationData = async (pageNumber: number, pageSize: number) => {
    const { data } = await axiosObj.get<NavigationData[]>(
      `/gnss?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    console.log(data)
    return data;
  };