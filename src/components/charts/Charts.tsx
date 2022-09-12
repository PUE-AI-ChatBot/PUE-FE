import { donutOptions, barOptions } from '@application/chart/Options';
import { seriesData } from '@application/chart/Series';
import { MOCK_STATISTICS } from '@helper/mock';
import { fetchStat1Day, getStaticsDay } from '@infra/chart/chartApi';
import { Box } from '@mui/material';
import axios from 'axios';
import dynamic from 'next/dynamic';
import useSWR from 'swr';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const Charts = () => {
  const fetcher = (url: string) => axios.get(url).then(res => res.data);
  const { data, error } = useSWR('stat/allday', fetcher);
  console.log(data);
  return (
    <Box
      display={'flex'}
      justifyContent={'flex-start'}
      flexDirection={'column'}
      mt={4}
    >
      <ApexChart
        options={donutOptions}
        series={seriesData(MOCK_STATISTICS)?.series}
        type="donut"
      />
      <Box sx={{ height: '10vh' }} />
    </Box>
  );
};
