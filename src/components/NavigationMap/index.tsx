'use client'

import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";

const NavigationMap = () => {
  return (
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
      </MapContainer>
  )
}

export default NavigationMap