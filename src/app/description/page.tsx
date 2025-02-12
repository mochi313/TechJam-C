import { Te, TeDelay } from "../../components/typingeffect";

export default function DescriptionPage() {
    return (<div style={{margin:"0px 20px"}}>
        <h1 style={{color:"#00333c"}}>
            <TeDelay children="イヤホンと" /><br />
            <TeDelay children="育成ゲームを組み合わせた" delay={500}/><br />
            <TeDelay children="健康管理アプリ" delay={1700}/>
        </h1>
        <p></p>
    </div>)
}