import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData
} from 'chart.js';

// Chart.js のコンポーネントを登録
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
    labels: string[];
    data: number[];
    label: string;
}

const BarChart: FC<BarChartProps> = ({ labels, data, label }) => {
    const chartData: ChartData<'bar'> = {
        labels, // X軸のラベル
        datasets: [
        {
            label, // グラフのラベル
            data, // 棒グラフのデータ
            backgroundColor: 'rgba(0, 0, 0, 0.2)', // 棒の色
            borderColor: '#000)', // 棒の枠線の色
            borderWidth: 0, // 枠線の太さ
            barThickness: 20,
            categoryPercentage: 1
        },
        ],
    };

    const options: ChartOptions<'bar'> = {
        responsive: true, // 画面幅に応じてリサイズ
        plugins: {
            legend: {
                display:false
                // position: 'top' as const, // position の型エラー回避: 'top' | 'left' | 'right' など
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem: any) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    },
                },
            }
        },
        scales: {
            x: {
                beginAtZero: true, // X軸を0から始める
            },
            y: {
                beginAtZero: true, // Y軸を0から始める
                // display:false
            },
        },
    };

    return (
        <div style={{ maxWidth: '300px', margin: '0 auto'}}>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default BarChart;
