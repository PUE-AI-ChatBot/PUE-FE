import { donutOptions, barOptions } from '@application/chart/Options';
import { seriesData } from '@application/chart/Series';
import { MOCK_STATISTICS } from '@helper/mock';
import { getStaticsDay } from '@infra/chart/chartApi';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const Charts = () => {
  const data = getStaticsDay({ mode: '1day', oneDay: '20220910' });
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
