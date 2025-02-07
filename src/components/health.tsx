"use client"
import BarChart from "./bar"
import ms from "./health.module.css"

export const BodyTemp = ({num}:{num:number}) => {
    let color = "#000"
    if(num>=37.5||num<=34)color = "#ff0000"
    return <div className={ms.containerMiddle}>
        <p className={ms.title}>体温</p>
        <p className={ms.mainText} style={{color:color}}>{num}<span>C°</span></p>
    </div>
}

export const HeartRate = ({num}:{num:number}) => {
    let color = "#000"
    if(num>=140||num<=40)color = "#ff0000"
    return <div className={ms.containerMiddle}>
        <p className={ms.title}>心拍数(/分)</p>
        <p className={ms.mainText} style={{color:`${color}`}}>{num}<span>bpm</span></p>
    </div>
}

export const WorkNumWeek = () => {
    return <div className={`${ms.containerMiddle} ${ms.containerBig}`}>
        <p className={ms.title}>週間歩数</p>
        <BarChart labels={["1/28","1/29","1/30","1/31","2/1","2/2","2/3"]} data={[5000,2567,120,3451,2231,90,4807]} label={'テスト'} />
    </div>
}

export const WorkNum = ({num}:{num:number}) => {
    return <div className={ms.containerMiddle}>
        <p className={ms.title}>歩数</p>
        <p className={ms.mainText}>{num}<span>歩</span></p>
    </div>
}

export const BloodOxygen = ({num}:{num:number}) => {
    let color = "#000"
    if(num<=90)color = "#ff0000"
    return <div className={ms.containerMiddle}>
    <p className={ms.title}>血中酸素飽和度</p>
    <p className={ms.mainText} style={{color:color}}>{num}<span>%</span></p>
</div>
}