import { donutProps } from '@components/charts/option/Options';
import { seriesData } from '@components/charts/option/Series';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
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
/**
 * 시연 동영상 끝나면 데이터 다시 연결 필요!
 */
export const Charts = ({ date }: IDate) => {
  const statData = fetchStatMonth(formatDate(date, ''));
  const tempData = {
    statistics: {
      불만: 2,
      중립: 4,
      당혹: 2,
      기쁨: 4,
      걱정: 6,
      질투: 0,
      슬픔: 3,
      죄책감: 0,
    },
  };
  if (!statData) return <div> Loading...! </div>;
  return (
    <Container>
      <Box
        display={'flex'}
        justifyContent={'flex-start'}
        flexDirection={'column'}
      >
        <ApexChart
          options={donutProps(tempData)}
          series={seriesData(tempData)?.series}
          type="donut"
        />
      </Box>
    </Container>
  );
};
