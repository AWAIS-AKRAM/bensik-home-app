import React from 'react'

export default function ProjectsCards(props) {
  return (
    <div style={{
        height:332,
        width:384,
        backgroundColor:props.bgColor
    }}>
        
        <img src={[props.building]} alt="" />
        <h3 style={{color:props.textColor}}>{[props.htag]}</h3>
        <p style={{color:props.textColor}}>{[props.ptag]}</p>

    </div>
  )
}
