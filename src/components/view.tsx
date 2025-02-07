"use client"
import { CSSProperties, useEffect, useState } from "react"

export const Lv = ({style,user}:{
    style?:CSSProperties,
    user:any
}) => {
    return <div style={{...{textAlign:"center"},...style}}>
        <p style={{fontSize:"10px",fontWeight:"bold"}}>LV</p>
        <p style={{fontSize:"24px",fontWeight:"bold",color:"#83d3e2",textShadow:"2px 2px 1px #ddd",marginTop:"-10px"}}>{user?user.lv:0}</p>
    </div>
}

export const UserName = ({user,style}:{
    user:any,
    style?:CSSProperties
}) => {
    return <div style={style}>
        <p style={{fontWeight:"bold"}}>{user?user.point:""}<span style={{fontSize:"10px"}}>pt</span></p><p style={{fontWeight:"bold",borderBottom:"1px solid #83d3e2"}}>{user?user.name:""}</p>
    </div>
}
