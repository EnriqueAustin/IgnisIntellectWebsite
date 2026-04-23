"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LOCATIONS = [
    {
        name: "Vredenburg Office",
        description: "Saldanha Bay District, Western Cape",
        lat: -33.0167,
        lng: 17.9925,
    },
    {
        name: "V&A Waterfront",
        description: "Cape Town, Western Cape",
        lat: -33.9036,
        lng: 18.4208,
    },
];

// Fit both markers with some padding
const CENTER_LAT = (LOCATIONS[0].lat + LOCATIONS[1].lat) / 2;
const CENTER_LNG = (LOCATIONS[0].lng + LOCATIONS[1].lng) / 2;

function createOrangeIcon() {
    return L.divIcon({
        className: "",
        html: `
            <div style="position:relative;width:32px;height:42px;">
                <svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0C7.163 0 0 7.163 0 16c0 12 16 26 16 26s16-14 16-26C32 7.163 24.837 0 16 0z" fill="#ff6b00"/>
                    <circle cx="16" cy="15" r="7" fill="#001f3d"/>
                    <circle cx="16" cy="15" r="3" fill="#ff6b00"/>
                </svg>
                <div style="position:absolute;top:-4px;left:-4px;width:40px;height:40px;border-radius:50%;background:rgba(255,107,0,0.25);animation:markerPulse 2s ease-out infinite;pointer-events:none;"></div>
            </div>
        `,
        iconSize: [32, 42],
        iconAnchor: [16, 42],
        popupAnchor: [0, -44],
    });
}

export default function LocationMap() {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapContainerRef.current || mapRef.current) return;

        // Inject pulse animation
        if (!document.getElementById("leaflet-marker-pulse")) {
            const style = document.createElement("style");
            style.id = "leaflet-marker-pulse";
            style.textContent = `
                @keyframes markerPulse {
                    0% { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(2.2); opacity: 0; }
                }
                .leaflet-popup-content-wrapper {
                    background: #0f1923 !important;
                    color: #fff !important;
                    border: 1px solid rgba(255,107,0,0.3) !important;
                    border-radius: 12px !important;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.5) !important;
                }
                .leaflet-popup-tip {
                    background: #0f1923 !important;
                    border: 1px solid rgba(255,107,0,0.3) !important;
                    border-top: none !important;
                    border-left: none !important;
                }
                .leaflet-popup-close-button {
                    color: #ff6b00 !important;
                }
                .leaflet-popup-close-button:hover {
                    color: #fff !important;
                }
            `;
            document.head.appendChild(style);
        }

        const map = L.map(mapContainerRef.current, {
            center: [CENTER_LAT, CENTER_LNG],
            zoom: 9,
            zoomControl: false,
            attributionControl: false,
            scrollWheelZoom: false,
        });

        // Dark-themed tiles (CartoDB Dark Matter)
        L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
            {
                maxZoom: 18,
            }
        ).addTo(map);

        // Add zoom control bottom-right
        L.control.zoom({ position: "bottomright" }).addTo(map);

        // Attribution bottom-left (small)
        L.control.attribution({ position: "bottomleft", prefix: false }).addTo(map);

        const icon = createOrangeIcon();

        const markers: L.Marker[] = [];
        LOCATIONS.forEach((loc) => {
            const marker = L.marker([loc.lat, loc.lng], { icon }).addTo(map);
            marker.bindPopup(
                `<div style="font-family:Inter,sans-serif;padding:4px 2px;">
                    <div style="font-size:14px;font-weight:700;margin-bottom:4px;color:#ff6b00;">${loc.name}</div>
                    <div style="font-size:12px;color:#94a3b8;">${loc.description}</div>
                </div>`,
                { closeButton: true, className: "" }
            );
            markers.push(marker);
        });

        // Fit map bounds to show both markers
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.35));

        // Draw a subtle dashed line between the two locations
        L.polyline(
            LOCATIONS.map((loc) => [loc.lat, loc.lng] as [number, number]),
            {
                color: "#ff6b00",
                weight: 1.5,
                opacity: 0.3,
                dashArray: "8, 8",
            }
        ).addTo(map);

        mapRef.current = map;

        return () => {
            map.remove();
            mapRef.current = null;
        };
    }, []);

    return (
        <div
            ref={mapContainerRef}
            className="w-full h-full rounded-2xl relative z-10"
            style={{ minHeight: "100%" }}
        />
    );
}
