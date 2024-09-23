import React from 'react'

const BatteryIndicator = ({indicatorIcon}) => {
  return (
    <img src={indicatorIcon} style={{width:"12px", height:"15px"}} alt='Battery indicator'/>
  )
}

export default BatteryIndicator