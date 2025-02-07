import Link from "next/link"
import { Food, Home, Quiz, Setting, Shop, User } from "./icon"

export const MenuBar = () => {
    return <div id="menu" style={{
        backgroundColor:"#fefefe",
        position:"fixed",
        bottom:"0px",
        width:"100%",
        height:"80px",
        boxShadow:"0px -1px 30px #fefefe",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
    }}>
        <Link href={"/"}>
            <Home size={30}/>
        </Link>
        <Link href={"/user"}>
            <User size={30}/>
        </Link>
        <Link href={"/quiz"}>
            <Quiz size={30}/>
        </Link>
        <Link href={"/shop"}>
            <Shop size={30}/>
        </Link>
        <Link href={"/setting"}>
            <Setting size={30}/>
        </Link>
    </div>
}