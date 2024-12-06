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
        borderColor: 'rgba(75, 192, 192, 1)', 
        backgroundColor: 'rgba(75, 192, 192, 0.2)', 
        tension: 0.4, 
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    axios
      .get('http://157.230.181.125:3000/telemedicine_growth') 
      .then((response) => {
        const data = response.data;

        console.log('Fetched data:', data);

        const labels = data.map((item) => item.year); 
        const values = data.map((item) => item.num_of_clinicians); 

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Number of Clinicians Over Time',
              data: values,  
              borderColor: 'rgba(75, 192, 192, 1)',  
              backgroundColor: 'rgba(75, 192, 192, 0.2)',  
              tension: 0.4, 
              borderWidth: 2,
            },
          ],
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

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
