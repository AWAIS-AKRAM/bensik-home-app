import React from 'react'

export default function Cards(props) {
  return (
    <div style={{
        height:181,
        width:271,
        backgroundColor:props.bgColor,
        textAlign:'center',
        }}>
            <img src={[props.house]} alt="" />
            <hr style={{height:2,width:60,}} />
            <h1 style={{color:props.textcolor}}>{[props.htag]}</h1>


    
    </div>
  )
}
