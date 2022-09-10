import { donutOptions, barOptions } from '@application/chart/Options';
import { seriesData } from '@application/chart/Series';
import { MOCK_STATISTICS } from '@helper/mock';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

/**
 *
 *
 *  */

export const Charts = () => {
  console.log(seriesData(MOCK_STATISTICS));
  return (
    <Box
      display={'flex'}
      justifyContent={'flex-start'}
      flexDirection={'column'}
      mt={4}
    >
      <ApexChart
        options={donutOptions}
        series={seriesData(MOCK_STATISTICS)}
        type="donut"
      />
      <Box sx={{ height: '10vh' }} />
    </Box>
  );
};
