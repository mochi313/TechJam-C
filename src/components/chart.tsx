// pages/index.js
import { Doughnut } from 'react-chartjs-2'; // 円グラフを描画するコンポーネント
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Chart.js を設定
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
  // 円グラフのデータ
  const data = {
    labels: ['Red', 'Blue', 'Yellow'], // セグメント名
    datasets: [
      {
        data: [300, 50, 100], // 各セグメントの値
        backgroundColor: ['red', 'blue', 'yellow'], // 各セグメントの色
        borderColor: ['white', 'white', 'white'], // セグメント間の境界線の色
        borderWidth: 2, // 境界線の太さ
      },
    ],
  };

  // 円グラフのオプション
  const options = {
    responsive: true, // 画面サイズに合わせてグラフを自動調整
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem: { label: any; raw: any; }) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>円グラフの例</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
}
