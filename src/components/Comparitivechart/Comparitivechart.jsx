import React from 'react';
import { Bar } from 'react-chartjs-2';

import styles from './Comparitivechart.module.css';

const Comparitivechart = ({ data: { confirmed, recovered, deaths }, country, 
    CompData: { confirmed: confirmedComp, recovered: recoveredComp, deaths: deathsComp }, CompCountry }) => {
   
    console.log(CompCountry);
    console.log(confirmed);
    
    const barChart = (
        confirmedComp ? (
          <Bar
            data={{
              labels: [`${country}_Confirmed`,`${country}_recovered`,`${country}_deaths`,
              `${CompCountry}_Confirmed`,`${CompCountry}_recovered`,`${CompCountry}_deaths` ],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)',
                  'rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [confirmed.value,recovered.value,deaths.value,confirmedComp.value,recoveredComp.value, deathsComp.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Compared with ${CompCountry}` },
            }}
          />
        ) : null
      );
      return (
        <div className={styles.container}>
          {barChart }
        </div>
      );
    };



export default Comparitivechart;