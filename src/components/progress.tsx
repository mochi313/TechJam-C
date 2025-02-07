"use client"
import { useState, useEffect, CSSProperties } from 'react';

// const ProgressBar = () => {
//   const [progress, setProgress] = useState(0); // プログレスの初期値

//   // プログレスバーを進める処理（例: 目標に向かって進行する）
//     const simulateProgress = () => {
//     let currentProgress = 0;

//     const interval = setInterval(() => {
//         if (currentProgress >= 100) {
//             clearInterval(interval);
//         } else {
//             currentProgress += 1; // 進行度を1ずつ増加
//             setProgress(currentProgress); // 進行度を更新
//         }
//     }, 50); // 50msごとに進行度を更新
// };

export const ProgressBar = ({progress,style,title,des,height,color,fontSize}:{
    progress:number,
    style?:CSSProperties,
    title?:string,
    des?:string,
    height?:number,
    color:string,
    fontSize?:string
}) => {
    useEffect(() => {
        console.log(color)
    },[color])
    return <div style={style}>
    <div style={{ width: '30vw', backgroundColor: '#f3f3f3', borderRadius: '4px',position:"relative",boxShadow:"inset 1px 1px 5px #d5d5d5"}}>
        <div
        style={{
            width: `${progress}%`,
            height: `${height||16}px`,
            backgroundColor: `${color}`,
            borderRadius: '4px',
            transition: 'width 0.1s ease-out',
        }}
        ></div>
        <div style={{
            fontSize:`${fontSize||10}px`,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#000',
            fontWeight: 'bold',
        }}
        >
            {des}
        </div>
    </div>
</div>}


export const StepsPer = ({style}:{
    style?:CSSProperties
}) => {
    useEffect(() => {
        // apiなどでデータベースから歩いた距離と目標の距離を取得する
        const req = {step:2261,stepPurpose:10000}
        setPercent(Math.floor((req.step / req.stepPurpose) * 100))
        setRest(Math.floor(req.stepPurpose - req.step))
    },[])
    const [rest,setRest] = useState<number>(0)
    const [percent,setPercent] = useState<number>(0)
    return <ProgressBar progress={percent} style={style} title='歩数' des={"残り"+rest+"歩"} color='#83d3e2'/>
}

export const StepsPer2 = ({style}:{
    style?:CSSProperties
}) => {
    useEffect(() => {
        // apiなどでデータベースから歩いた距離と目標の距離を取得する
        const req = {step:51,stepPurpose:1000}
        setPercent(Math.floor((req.step / req.stepPurpose) * 100))
        setRest(Math.floor(req.stepPurpose - req.step))
    },[])
    const [rest,setRest] = useState<number>(0)
    const [percent,setPercent] = useState<number>(0)
    return <ProgressBar progress={percent} style={style} title='歩数' des={"残り"+rest+"歩"} height={10} color="#83d3e2" fontSize='8'/>
}

export const Condition = () => {
    useEffect(() => {
        // apiなどでデータベースから歩いた距離と目標の距離を取得する
        const req = {step:40,stepPurpose:100}
        setPercent(Math.floor((req.step / req.stepPurpose) * 100))
    },[])
    const [percent,setPercent] = useState<number>(0)
    const color = colorMath(percent)
    return <ProgressBar progress={percent} title='健康状態' des={"健康状態"} height={10} color={color} fontSize='8'/>
}

export const colorMath = (percent:number):string=> {
    console.log(percent)
    if(percent > 50){
        return "#32cd32"
    } if(percent <= 50 && percent >= 20){
        return "#ffd700	"
    } else{
        return "#ff0000"
    }
}