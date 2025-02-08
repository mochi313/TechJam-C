// export default function Setting() {
//     return <div>
//         kkkk
//     </div>
// }
"use client"

// pages/index.js
import { Doughnut } from 'react-chartjs-2'; // 円グラフを描画するコンポーネント
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import BarChart from '../../components/bar';
import { BaseLayout } from '../../components/baselayout';

// Chart.js を設定
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
    return <BaseLayout><div></div></BaseLayout>
}
