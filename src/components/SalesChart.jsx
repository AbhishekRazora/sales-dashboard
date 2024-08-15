import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function SalesChart({ data, title }) {
  const chartData = {
    labels: data.labels,
    datasets: Array.isArray(data.values[0])
      ? [
          {
            label: 'Date 1 Sales',
            data: data.values[0],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Date 2 Sales',
            data: data.values[1],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          },
        ]
      : [
          {
            label: title,
            data: data.values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
  };

  return (
    <div className="mb-8 ">
      <h2 className="text-lg font-medium mb-2">{title}</h2>
      <Bar className='' data={chartData} />
    </div>
  );
}

export default SalesChart;
