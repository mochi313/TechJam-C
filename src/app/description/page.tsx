import { Te, TeDCal, TeDelay } from "../../components/typingeffect";
import ms from "./page.module.css"
import Image from "next/image";

export default function DescriptionPage() {
    return (<div className={ms.main}>
        <div style={{width:"800px",height:"auto",position:"fixed",left:"20px", top:"35%",transform:"translateY(-50%)"}}>
            <Image
                src="/LOGO.png"
                alt="Description"
                width={50}
                height={50}
                layout="responsive"
                // style={{width:"100px !important",aspectRatio:"1/1"}}
            />
        </div>
        <div style={{color:"#00333c",position:"fixed",bottom:"60px",left:"60px"}}>
            <h1 style={{fontSize:"90px",lineHeight:"100px"}}>
                キャラと一緒に<br />
                スマートな自分を実現<br />
            </h1>
            <p style={{fontSize:"30px",marginLeft:"8px",borderBottom:"2px solid #00333c"}}>Achieve a smarter you, alongside your character.</p>
        </div>
        <div style={{width:"200px",height:"auto",position:"fixed",bottom:"60px",right:"17%",transform:"translateX(50%)",textAlign:"center"}}>
            <p style={{marginLeft:"-14px",fontWeight:"bold"}}>DEMO</p>
            <Image
                src="/QR_image.png"
                alt="Description"
                width={50}
                height={50}
                layout="responsive"
                // style={{width:"100px !important",aspectRatio:"1/1"}}
            />
        </div>
        <div style={{width:"420px",height:"auto",position:"fixed",top:"100px",right:"17.5%",transform:"translateX(50%)",textAlign:"center"}}>
            <Image
                src="/mobile_views_2.png"
                alt="Description"
                width={50}
                height={50}
                layout="responsive"
                // style={{width:"100px !important",aspectRatio:"1/1"}}
            />
        </div>
        {/* <div className={ms.whiteBar} style={{left:"-900px"}}/>
        <div className={ms.whiteBar} style={{right:"-900px"}}/> */}
        <p></p>
    </div>)
}