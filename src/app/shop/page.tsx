// pages/index.js
import { Doughnut } from 'react-chartjs-2'; // 円グラフを描画するコンポーネント
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import BarChart from '../../components/bar';
import { ShopList } from '../../components/shop';
import { Title } from '../../components/header';
import { BaseLayout } from '../../components/baselayout';

export default function Home() {
    return <BaseLayout>
    <Title title="ショップ"/>
    <div style={{display:"flex",flexWrap:"wrap",gap:"20px",marginTop:"10px"}}>
        <ShopList items={[
            {
                name:"キリッと果汁",
                path:"/MW5KN_R1_20240126.png",
                point:30
            },
            {
                name:"特茶",
                path:"/HE51Q_R1_20240816.png",
                point:20
            },
        ]} />
    </div>
</BaseLayout>
}
