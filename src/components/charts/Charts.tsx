import { Box, Typography } from '@mui/material';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { DayEmotion, getDayEmotion } from '../../application/diary/DayResults';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
/**
 *
 *
 *  */

export const Charts = () => {
  const [emotions, setEmotions] = useState<DayEmotion[]>([]);
  useEffect(() => {
    setEmotions(getDayEmotion());
  }, []);
  const [setting, setSetting] = useState({
    series: [
      {
        data: [(3 / 7) * 100, (2 / 7) * 100, (1 / 7) * 100, (1 / 7) * 100],
      },
    ],
  });
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 3,
        opacity: 0.5,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 10,
        distributed: true,
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      categories: ['불안', '기쁨', '분노', '슬픔'],
    },
    colors: ['#33b2df', '#d4526e', '#f48024', '#546E7A'],

    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };
  return <ApexChart options={options} series={setting.series} type="bar" />;
};
