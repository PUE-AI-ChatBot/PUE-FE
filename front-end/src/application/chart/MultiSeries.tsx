import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function ChartSample() {
  const [dataSample, setDataSample] = useState({
    series: [
      {
        name: '불안',
        data: [80],
      },
      {
        name: '분노',
        data: [70],
      },

      {
        name: '슬픔',
        data: [40],
      },

      {
        name: '당혹',
        data: [30],
      },
      {
        name: '기쁨',
        data: [30],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        stacked: true,
        stackType: '100%',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'bottom',
          },
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        axisTicks: { show: false },
        labels: { show: false },
        axisBorder: { show: false },
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        dropShadow: {
          enabled: true,
        },
      },
    },
  });

  return (
    <div>
      <ApexChart
        series={dataSample.series}
        type="bar"
        width="350"
        height="150"
      />
    </div>
  );
}
