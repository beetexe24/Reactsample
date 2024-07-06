import React, { useEffect, useLayoutEffect, useState } from "react"
import {
    MapContainer,
    TileLayer,
    Marker,
  } from 'react-leaflet';
  import "leaflet/dist/leaflet.css";
  import axios from "axios";

export default function Geo({latitude, longitude})
{

    return (
        <MapContainer center={[latitude, longitude]} zoom={17} scrollWheelZoom={false} style={{ height: "310px" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]}></Marker>
            </MapContainer>
    )
}