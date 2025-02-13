import { Te, TeDCal, TeDelay } from "../../components/typingeffect";
import ms from "./page.module.css"

export default function DescriptionPage() {
    return (<div style={{margin:"0px 20px"}}>
        <h1 style={{color:"#00333c"}}>
            {/* <TeDCal texts={[
                "イヤホンと",
                "育成ゲームを組み合わせた",
                "健康管理アプリ"
            ]} speed={100}/> */}
            <TeDelay children="イヤホンと" /><br />
            <TeDelay children="育成ゲームを組み合わせた" delay={500}/><br />
            <TeDelay children="健康管理アプリ" delay={1700}/>
        </h1>
        <div className={ms.whiteBar} style={{left:"-900px"}}/>
        <div className={ms.whiteBar} style={{right:"-900px"}}/>
        <p></p>
    </div>)
}