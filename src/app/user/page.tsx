import { BaseLayout } from "../../components/baselayout";
import { Title } from "../../components/header";
import { BloodOxygen, BodyTemp, HeartRate, WorkNum, WorkNumWeek } from "../../components/health";

export default function User() {
    return <BaseLayout>
    <Title title="健康情報"/>
    <div style={{display:"flex",flexWrap:"wrap",gap:"20px",marginTop:"10px"}}>
        <BodyTemp num={36.5}/>
        <HeartRate num={160}/>
        <WorkNum num={4801}/>
        <BloodOxygen num={89}/>
        <WorkNumWeek />
    </div>
</BaseLayout>}