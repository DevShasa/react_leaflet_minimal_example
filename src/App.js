import { divIcon, Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import MapMarker from "./components/MapMarker";



function App() {

  const markers = [
    {
        position: [-1.299630, 36.795050],
        label: "Lexo Station",
        active: true,
        stateOfCharge: [52.9, 31.3, 14.2, 11.1, 0, 50.8, 0, 0],
    }, 
    {
        position: [-1.317593, 36.718051],
        label: "Karen (Kabwagi)",
        active: true,
        stateOfCharge: [25.4, 67.2, 83.1, 12.8, 45.0, 90.5, 3.3, 74.1],
    }, 
    {
        position: [-1.263123, 36.802511],
        label: "West View Station",
        active: true,
        stateOfCharge: [10.0, 55.5, 40.2, 85.7, 0, 78.9, 29.4, 99.0],
    }, 
    {
        position: [-1.265385, 36.740930],
        label: "Mountain View Station",
        active: false,
        stateOfCharge: [60.1, 22.3, 88.8, 15.5, 35.7, 50.0, 0, 66.4],
    }, 
    {
        position: [-1.257927, 36.827216],
        label: "Limuru Rd",
        active: true,
        stateOfCharge: [34.6, 71.2, 12.5, 56.9, 81.0, 40.3, 15.8, 27.4],
    },
    {
        position: [-1.304486, 36.828083],
        label: "Lusaka Rd",
        active: true,
        stateOfCharge: [78.1, 64.9, 91.2, 20.3, 49.5, 55.4, 0, 92.6],
    },
    {
        position: [-1.322788, 36.801820],
        label: "Langata",
        active: true,
        stateOfCharge: [44.7, 18.2, 75.4, 11.0, 60.8, 9.9, 88.1, 33.3],
    },
    {
        position: [-1.341343, 36.753610],
        label: "Bomas",
        active: false,
        stateOfCharge: [27.3, 66.6, 93.1, 37.4, 12.8, 25.0, 5.0, 46.9],
    },
    {
        position: [-1.272464, 36.835544],
        label: "Pangani",
        active: true,
        stateOfCharge: [12.0, 34.5, 61.0, 48.0, 19.9, 83.4, 27.1, 95.2],
    },
    {
        position: [-1.293142, 36.821586],
        label: "Haile Selassie",
        active: true,
        stateOfCharge: [56.3, 73.5, 48.1, 19.7, 72.9, 11.5, 34.0, 62.3],
    },
    {
        position: [-1.152172, 36.961895],
        label: "Ruiru Station",
        active: true,
        stateOfCharge: [88.5, 44.2, 55.6, 23.4, 70.1, 29.9, 8.8, 14.7],
    },
    {
        position: [-1.358870, 36.656750],
        label: "Ngong Town",
        active: false,
        stateOfCharge: [21.0, 79.8, 22.2, 92.0, 45.3, 67.7, 40.0, 31.4],
    },
    {
        position: [-1.321808, 36.870019],
        label: "Enterprise",
        active: true,
        stateOfCharge: [50.0, 33.3, 89.9, 16.4, 61.2, 48.7, 70.5, 28.0],
    }
];


    // const createCustomCLusterFunction = (cluster) =>{
    //   return new divIcon({
    //     html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`
    //   })
    // }

  return (
    <div className="App" style={{ height:"100vh" }}>
      <MapContainer center={[-1.286389, 36.817223]} zoom={12}>
        <TileLayer
          // attribution="&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors"
          url ="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      <MarkerClusterGroup
        // chunkedLoading
        // iconCreateFunction={createCustomCLusterFunction}
      >
        {markers.map(marker =>(
            <MapMarker mapdata={marker}/>
          ))}
      </MarkerClusterGroup>


      </MapContainer>
    </div>
  );
}

export default App;
