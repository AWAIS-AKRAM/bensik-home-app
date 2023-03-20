import React from 'react'

export default function ServicesCard(props) {
  return (
    <div style={{
        height:197,
        width:292,
        backgroundColor:props.backgroundColor,
    }}>
        <img src={[props.Vector]} alt="" />

        <h3 style={{color:props.textcolor}}>{[props.text]}</h3>
        <p style={{color:props.pcolor}}>{[props.p]}</p>


    </div>
  )
}
