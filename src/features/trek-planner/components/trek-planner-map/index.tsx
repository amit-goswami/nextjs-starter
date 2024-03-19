'use client'

import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const TrekPlannerMapComponent = () => {
  return (
    <MapContainer
      style={{ height: '400px', width: '100%', overflow: 'hidden' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
