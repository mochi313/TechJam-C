"use client"
import BarChart from "./bar"
import ms from "./shop.module.css"
import Image from 'next/image';

export const ShopBox = ({item}:{item:{path:string,name:string,point:number}}) => {
    return <div className={ms.containerMiddle}>
        <div className={ms.title}>
            <p>{item.name}</p>
            <p style={{fontSize:"10px",marginBottom:"2px"}}>{item.point}pt</p>
        </div>
        <Image
            src={item.path}
            alt="Description"
            width={20}
            height={20}
            layout="responsive"
            // style={{boxShadow:"inset 0px 0px 100px #fef, 0px 0px 100px #fef"}}
        />
    </div>
}

export const ShopList = ({items}:{items:Array<{path:string,name:string,point:number}>}) => {
    return <>
        {items.map((i,n) => <ShopBox item={i} key={n}/>)}
    </>
}

// export const WorkNumWeek = () => {
//     return <div className={`${ms.containerMiddle} ${ms.containerBig}`}>
//         <p className={ms.title}>週間歩数</p>
//         <BarChart labels={["1/28","1/29","1/30","1/31","2/1","2/2","2/3"]} data={[5000,2567,120,3451,2231,90,4807]} label={'テスト'} />
//     </div>
// }

// export const WorkNum = ({num}:{num:number}) => {
//     return <div className={ms.containerMiddle}>
//         <p className={ms.title}>歩数</p>
//         <p className={ms.mainText}>{num}<span>歩</span></p>
//     </div>
// }

// export const BloodOxygen = ({num}:{num:number}) => {
//     let color = "#000"
//     if(num<=90)color = "#ff0000"
//     return <div className={ms.containerMiddle}>
//     <p className={ms.title}>血中酸素飽和度</p>
//     <p className={ms.mainText} style={{color:color}}>{num}<span>%</span></p>
// </div>
// }