import {Marker, Popup} from "react-leaflet"
import MapIcon from "../assets/images/battery.png"
import {divIcon} from "leaflet"
import fullBattery from "../assets/images/charge_status/fullbat.png"
import mediumBattery from "../assets/images/charge_status/medium.png"
import emptyBattery from "../assets/images/charge_status/empty.png"
import noBattery from "../assets/images/charge_status/nobat.png"

import BatteryIndicator from "./batteryIndicator"

const MapMarker = ({mapdata}) => {



  const customIcon = (label, active, batteryNumber) =>{

    const borderColor = active ? "green" :"red"

    const iconHtml = `
        <div style="display: flex; flex-direction: column; justify-content: center;align-items: center;">
          <p style="border: 2px solid ${borderColor};display: flex; align-items: center;background-color: white; padding: 2px 5px; font-weight: bold; border-radius: 5px; width: fit-content;">
              <span style="white-space:nowrap;">${label}, 🔋${" "+batteryNumber}</span>
          </p>
          <img src="${MapIcon}" style="width: 40px; margin-top:-20px"/>

        </div>

    `

    const makeCustomIcon = divIcon({
      className:"custom-icon",
      html:iconHtml,
      iconSize: [40, 60]
    })

    return makeCustomIcon
  }


    const {position, label, active, stateOfCharge} = mapdata
    const batteryNumber = stateOfCharge.filter(x => x !== 0).length
  return (
        <Marker position={position} icon={customIcon(label,active, batteryNumber)}>
          <Popup>
            <div>
              {stateOfCharge.map((item, index)=>{
                const slotMarker = item === 0 ? "🔳" :"🟩"
                const slotStatus = item === 0 ? "EMPTY" :"OCCUPIED"

                const indicatorIcon = 
                item === 0 ? noBattery : 
                item >= 1 && item < 40 ? emptyBattery : 
                item >= 41 && item < 70 ? mediumBattery : 
                item >= 71 && item <= 100 ? fullBattery : 
                emptyBattery;

                const chargePercentage = item === 0 ? "" : `${String(item).slice(0,2)}%`

                return (
                  <p style={{display:"flex", alignItems:"center", gap:"10px"}}>
                    <span>{slotMarker}</span> 
                    <span >{slotStatus}</span>
                    <span style={{display:"flex", alignItems:"center"}}>
                      <BatteryIndicator indicatorIcon={indicatorIcon}/>
                      <span style={{marginLeft:"5px"}}>{chargePercentage}</span>
                    </span>
                  </p>
                )
              })}
            </div>
          </Popup>
        </Marker>
  )
}

export default MapMarker