import { Condition, ProgressBar, StepsPer2 } from "../components/progress";
import Image from 'next/image';
import ms from "./page.module.css"
import { BaseLayout } from "../components/baselayout";

export default function Home() {
  return (<BaseLayout>
  <div className={ms.alert}>
    展示の際は<a href="/description">こちら</a>のページを展示してください。
  </div>
    <Image
    src="/LEAP_.png"
    alt="Description"
    width={500}
    height={300}
    layout="responsive"
    style={{boxShadow:"inset 0px 0px 100px #fef, 0px 0px 100px #fef"}}
  />
  <div className={ms.main}>
    <div className={ms.border}>
    </div>
    <Image
      src="/rabbit_clear.png"
      alt="Description"
      width={200}
      height={200}
      layout="responsive"
      // style={{boxShadow:"inset 0px 0px 100px #fef, 0px 0px 100px #fef"}}
    />
  </div>
  <div className={ms.name}>
    <p style={{fontSize:"18px",fontWeight:"bold"}}>Lv<span style={{color:"#f2bf19"}}>1</span>  うさぴょん</p>
    <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
      <Condition />
      <StepsPer2 />
    </div>
    <p style={{color:"#f2bf19"}}>不健康</p>
  </div>
</BaseLayout>);
}
