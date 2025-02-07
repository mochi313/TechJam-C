"use client"
import { useEffect, useState } from "react"
import { StepsPer } from "./progress"
import { Lv, UserName } from "./view"

export const Header = () => {
    useEffect(() => {
        // キャッシュなどからUserのIDを取得
        const userID = "00192934"
        // IDからユーザーの情報を取得
        const res = {name:"サントリー",lv:21,point:51}
        setUser(res)
    },[Header])
    const [user,setUser] = useState<any>(null)
    return  <header style={{backgroundColor:"#fefefe",position:"fixed",top:"0px",width:"100%",height:"50px",boxShadow:"0px 1px 30px #fefefe",zIndex:10}}>
        <StepsPer style={{position:"absolute",top:"50%",transform: 'translate(0%, -50%)',left:"24px"}}/>
        <Lv style={{position:"absolute",top:"50%",transform: 'translate(-50%, -50%)',left:"50%"}} user={user}/>
        <UserName user={user} style={{position:"absolute",top:"50%",transform: 'translate(0%, -50%)',right:"24px",display:"flex",gap:"8px"}}/>
    </header>
}

export const Title = ({title}:{
    title:string
}) => {
    return <div>
        <h1 style={{
            margin:0
        }}>{title}</h1>
        <div style={{height:"2px",backgroundColor:"#fef",boxShadow:"0px 0px 10px #fef"}}></div>
    </div>
}