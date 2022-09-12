import { MOCK_STATISTICS } from '@helper/mock';
import { ApexOptions } from 'apexcharts';
import { seriesData } from './Series';

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
    categories: seriesData(MOCK_STATISTICS)?.option,
  },
  colors: seriesData(MOCK_STATISTICS)?.color,

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
  labels: seriesData(MOCK_STATISTICS)?.option,
  colors: seriesData(MOCK_STATISTICS)?.color,

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
