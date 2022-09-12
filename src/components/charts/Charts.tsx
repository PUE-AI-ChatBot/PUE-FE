import { donutProps } from '@components/charts/option/Options';
import { seriesData } from '@components/charts/option/Series';
import { MOCK_STATISTICS } from '@helper/mock';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { fetchStatMonth } from 'pages/api/chart/chartApi';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type IDate = { date: Date };
function formatDate(date: Date, separator: string) {
  const year = '' + date.getFullYear();
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  return [year, month, day].join(separator);
}
export const Charts = ({ date }: IDate) => {
  const statData = fetchStatMonth(formatDate(date, ''));
  const { data: session, status } = useSession();
  if (!statData) return <div> Loading...! </div>;
  return (
    <Container>
      <Box
        display={'flex'}
        justifyContent={'flex-start'}
        flexDirection={'column'}
        mt={4}
      >
        <Typography color={'GrayText'} variant={'subtitle2'} sx={{ mb: 2 }}>
          최근 한달동안 {session?.user?.name}님의 감정기록
        </Typography>
        <ApexChart
          options={donutProps(statData)}
          series={seriesData(statData)?.series}
          type="donut"
        />
        <Box sx={{ height: '10vh' }} />
      </Box>
    </Container>
  );
};
