import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ReportsPage() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Number of Clinicians Over Time',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',  // Line color
        backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Line fill color
        tension: 0.4,  // Smooth curve
        borderWidth: 2,
      },
    ],
  });

  // Fetch data from backend API
  useEffect(() => {
    axios
      .get('http://157.230.181.125:3000/telemedicine_growth')  // Replace with your actual API URL
      .then((response) => {
        const data = response.data;

        // Log data for debugging
        console.log('Fetched data:', data);

        // Map data into the chart's expected format
        const labels = data.map((item) => item.year);  // Use 'year' as labels
        const values = data.map((item) => item.num_of_clinicians);  // Use 'num_of_clinicians' as values

        // Update chart data
        setChartData({
          labels: labels,  // years as labels
          datasets: [
            {
              label: 'Number of Clinicians Over Time',
              data: values,  // values for the line chart
              borderColor: 'rgba(75, 192, 192, 1)',  // Line color
              backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Line fill color
              tension: 0.4,  // Smooth curve
              borderWidth: 2,
            },
          ],
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Number of Telemedicine Clinicians Over Time</h2>
      <Line style={{margin: "20px"}}data={chartData} options={options} />
      <p>Telemedicine has seen significant growth in the number of clinicians over the years, enabling more patients to access remote healthcare services. The pandemic caused a boom in the transition/addition of telehealth resources provided by clinicians, but has not slowed down yet. With more demand for remote positions, telemedicine provides a great opportunity for this to happen.</p>
      <p>Source: <a style={{ color: 'blue', textDecoration: 'underline' }} href="https://www.singleaimhealth.com/news/the-state-of-telemedicine-in-2024">The State of Telemedicine in 2024</a></p>
    </div>
  );
}

export default ReportsPage;
