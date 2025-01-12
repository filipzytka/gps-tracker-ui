"use client";

import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import { useQuery } from "@tanstack/react-query";
import { fetchNavigationData } from "@/api/navigation";

const NavigationMap = () => {
  const { data: navData, refetch: navDataRefetch } = useQuery({
    queryKey: ["navigationData"],
    select: (newData) => ({
      latLng: newData.map((nd): LatLngTuple => [nd.lat, nd.lon]),
    }),
    queryFn: () => fetchNavigationData(1, 20),
  });
  return (
    <MapContainer
      center={[51.64954, 16.11904]}
      zoom={13}
      className="w-full h-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Polyline positions={navData?.latLng ?? []}/>
    </MapContainer>
  );
};

export default NavigationMap;
