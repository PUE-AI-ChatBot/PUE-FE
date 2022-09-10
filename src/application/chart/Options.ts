import { ApexOptions } from 'apexcharts';

export const barOptions: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
    width: '50vw',
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
    categories: [
      '걱정',
      '기쁨',
      '당혹',
      '불만',
      '슬픔',
      '연민',
      '죄책감',
      '중립',
      '질투',
    ],
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
export const donutOptions: ApexOptions = {
  chart: {
    type: 'donut',
  },
  labels: [
    '걱정',
    '기쁨',
    '당혹',
    '불만',
    '슬픔',
    '연민',
    '죄책감',
    '중립',
    '질투',
  ],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
    },
  },
  responsive: [
    {
      options: {
        chart: {
          width: '300',
          height: '200',
        },
        legend: {
          position: 'right',
        },
      },
    },
  ],
};
