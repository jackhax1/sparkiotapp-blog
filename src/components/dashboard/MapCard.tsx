import { useEffect } from "react";
import { Card } from "antd";
import { MapContainer, TileLayer, Marker, Popup,useMap } from 'react-leaflet'
import L from 'leaflet'
import {Control} from "leaflet";
import "leaflet/dist/leaflet.css";


const Legend = () => {
    const map = useMap();

    useEffect(() => {
        const legend = new Control({ position: "bottomright" });

        legend.onAdd = function () {
            const div = L.DomUtil.create("div", "info legend");
            div.innerHTML = `
        <strong>Water Level Indicator</strong><br>
        <div style="display: flex; align-items: center;">
          <div style="width: 12px; height: 12px; background-color: green; border-radius: 50%; margin-right: 5px;"></div> Normal
        </div>
        <div style="display: flex; align-items: center;">
          <div style="width: 12px; height: 12px; background-color: yellow; border-radius: 50%; margin-right: 5px;"></div> Alert
        </div>
        <div style="display: flex; align-items: center;">
          <div style="width: 12px; height: 12px; background-color: orange; border-radius: 50%; margin-right: 5px;"></div> Warning
        </div>
        <div style="display: flex; align-items: center;">
          <div style="width: 12px; height: 12px; background-color: red; border-radius: 50%; margin-right: 5px;"></div> Danger
        </div>
        <div style="display: flex; align-items: center;">
          <div style="width: 12px; height: 12px; background-color: black; border-radius: 50%; margin-right: 5px;"></div> Error
        </div>
      `;
            div.style.background = "white";
            div.style.padding = "8px";
            div.style.borderRadius = "5px";
            div.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
            return div;
        };

        legend.addTo(map);
        return () => {
            legend.remove();
        };
    }, [map]);

    return null;
};



// Function to get marker icon based on water level indicator
const getMarkerIcon = (indicator: string) => {
    let color;
    switch (indicator) {
        case "Normal":
            color = "green";
            break;
        case "Alert":
            color = "yellow";
            break;
        case "Warning":
            color = "orange";
            break;
        case "Danger":
            color = "red";
            break;
        case "Error":
            color = "black";
            break;
        default:
            color = "blue"; // Default color
    }

    return L.divIcon({
        className: "custom-marker",
        html: `<div style="
        background-color: ${color};
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
      "></div>`,
    });
};


interface MapComponentProps {
    data: any[];
    peninsular: boolean;
    title: String;
}

const MapCard = ({ data, peninsular ,title}: MapComponentProps) => {

    const time_shift = 8 * 60 * 60 * 1000;

    const filteredData = data.filter((station) =>
        peninsular ? station[2] < 105 : station[2] >= 105
      );

    return (
        <Card
            title={title}
            style={{
                width: "100%",
                height: window.innerWidth * 0.35
            }}
        >
            <MapContainer
                center={peninsular ? [3.697998, 102.1169] : [3.56134, 114.56491]}
                zoom={6}
                scrollWheelZoom={false}
                style={{ width: "100%", height: window.innerWidth * 0.28 }} // Ensuring it gets height
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filteredData.map((station, index) => (
                    <Marker key={index} position={[station[1], station[2]]} icon={getMarkerIcon(station[4])}>
                        <Popup>
                            <b>{station[0]}</b> <br />
                            Water Level: {station[3]}m <br />
                            Status: {station[4]} <br />
                            Trend: {station[6]} <br />
                            Updated On: {new Date(station[5] - time_shift).toLocaleString()}
                        </Popup>
                    </Marker>
                ))}
                <Legend />
            </MapContainer>
        </Card>



    );
};

export default MapCard;
