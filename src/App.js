import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"

function App() {

  

  return (
    <div className="App" style={{ height:"100vh" }}>
      <MapContainer center={[-1.286389, 36.817223]} zoom={12}>
        <TileLayer
          // attribution="&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors"
          url ="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default App;
