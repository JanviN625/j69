import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function SummaryPage() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Fetch data from the API
    fetch('157.230.181.125:3000/innovation_value')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Prepare chart data
  const chartData = {
    labels: data.map(item => item.innovation),  // Use "innovation" as labels
    datasets: [
      {
        label: 'Innovation Value (in billions)',
        data: data.map(item => parseFloat(item.value)),  // Use "value" for the data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ]
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Innovation Value as of 2024',
      }
    }
  };

  return (
    <div style={{margin: "20px"}}>
      <h2>Summary</h2>
      <Bar data={chartData} options={chartOptions} />
      <p>There is not a lot of data about the values of these healthcare innovations in the past 6 months specifically. However, the evaluations of them during the year 2024 are presented to represent the scale and current popularity of each. While some are very small, they are set to have large growth in coming years.</p>
      <p>Sources:</p>
      <ul>
        <li><a style={{ color: 'blue', textDecoration: 'underline' }} href="https://finance.yahoo.com/news/23-3-cagr-telehealth-telemedicine-111000913.html">At 23.3% CAGR, Telehealth and Telemedicine Market Share Will be Worth USD 813.7 Billion by 2034</a></li>
        <li><a style={{ color: 'blue', textDecoration: 'underline' }} href="https://www.globenewswire.com/news-release/2024/08/12/2928598/0/en/Artificial-Intelligence-AI-in-Healthcare-Market-Size-Expected-to-Reach-USD-613-81-Bn-by-2034.html#:~:text=The%20global%20artificial%20intelligence%20(AI,36.83%25%20between%202024%20and%202034.">Artificial Intelligence (AI) in Healthcare Market Size Expected to Reach USD 613.81 Bn by 2034</a></li>
        <li><a style={{ color: 'blue', textDecoration: 'underline' }} href="https://www.futuremarketinsights.com/reports/wearable-healthcare-devices-market#:~:text=The%20global%20sales%20of%20wearable,period%20between%202024%20and%202034.">Wearable Healthcare Devices Market Outlook from 2024 to 2034</a></li>
        <li><a style={{ color: 'blue', textDecoration: 'underline' }} href="https://www.thebusinessresearchcompany.com/report/robotic-surgery-devices-global-market-report#:~:text=Robotic%20Surgery%20Devices%20Market%20Size,(CAGR)%20of%2014.0%25.">Robotic Surgery Devices Global Market Report 2024</a></li>
        <li><a style={{ color: 'blue', textDecoration: 'underline' }} href="https://www.globenewswire.com/news-release/2024/09/03/2939849/0/en/Healthcare-Digital-Twins-Market-Expected-25-70-CAGR-Growth-to-Reach-US-8-8-Billion-by-2034-Prophecy-Market-Insights.html#:~:text=Covina%2C%20Sept.,25.70%25%20over%20the%20forecast%20period.">Healthcare Digital Twins Market Expected 25.70% CAGR Growth, to Reach US$ 8.8 Billion by 2034: Prophecy Market Insights</a></li>
      </ul>
    </div>
  );
}

export default SummaryPage;
