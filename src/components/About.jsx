import React from "react";
import { Bar } from 'react-chartjs-2';
import '../components/About.css'


function About(){
  
   return(
    <div>
      <div className="description">
        <img src="https://t3.ftcdn.net/jpg/02/25/16/92/240_F_225169285_4qupC1G3GGnE8XdqolsI6wg3FPpV7HS1.jpg" alt="" width="40%" height="20%" />

      <div className="mission">
        <button>WHAT WE DO</button>

      </div>
      <div className="mission">
        <button>OUR MISSION</button>

      </div>
      <div className="mission">
        <button>OUR VISION</button>

      </div>


      </div>
      
    </div>

   )
   const data = {
    labels: ['Inbound', 'Outbound', 'Business Outsourcing'],
    datasets: [
      {
        label: 'Number of Calls',
        data: [150, 200, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Inbound, Outbound, and Business Outsourcing Calls',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Calls',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Call Types',
        },
      },
    },
  };

}

export default About;