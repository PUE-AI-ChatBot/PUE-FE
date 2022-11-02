import { Avatar, Chip, Paper, Typography } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import InfoIcon from '@mui/icons-material/Info';
import { Box } from '@mui/system';
import type { NextPage } from 'next';
import Layout from '@components/navigation/layout';
import styled from 'styled-components';
import { HalfBoxWrapper, MainBox } from '@components/main/boxs';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Charts } from '@components/charts/Charts';
import { toStringByFormatting, dayName } from '@components/main/date';
import { useSession } from 'next-auth/react';

const GrayFullDivider = styled.div`
  border-top: 2px solid #e0e0e0;
  width: 100vw;
`;

const Main: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const toDay = new Date();
  if (status === 'unauthenticated') {
    router.replace('/enter');
    return null;
  }

  return (
    <Layout hasHeaderBar profileButton hasQuickButton>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        margin={'1rem'}
        gap={1}
      >
        <Box display={'flex'} gap={5}>
          <Avatar
            src={'/profile.jpg'}
            variant={'rounded'}
            sx={{
              width: '120px',
              height: '120px',
              boxShadow: '1',
            }}
          />
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={1}
          >
            <Chip
              icon={<FaceIcon />}
              variant={'outlined'}
              color={'primary'}
              label={
                <Typography color={'text.primary'} fontSize={12}>
                  안녕하세요. 저는 PUE라고 해요!
                </Typography>
              }
            ></Chip>
            <MainBox flexDirection={'column'} width={'100px'}>
              <Typography sx={{ fontWeight: '400' }}> 오늘 기분 </Typography>
              <WbSunnyIcon
                color={'primary'}
                sx={{ width: '30px', height: '30px' }}
              />
            </MainBox>
          </Box>
        </Box>
        <GrayFullDivider />
        <Box display={'flex'} flexDirection={'column'}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            주요 기능
          </Typography>
          <HalfBoxWrapper>
            <MainBox
              width={1}
              height={'100px'}
              sx={{
                background: 'linear-gradient(90deg, #8D9EFF, #B9E0FF)',
                cursor: 'click',
              }}
            >
              <Link href={'/chat'}>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'white',
                  }}
                >
                  대화하기
                </Typography>
              </Link>
            </MainBox>
            <MainBox
              width={1}
              height={'100px'}
              sx={{ background: 'linear-gradient(90deg, #B3FFAE, #F0FF42)' }}
            >
              <Link href={'/calendar'}>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: '600',
                  }}
                >
                  감정 달력
                </Typography>
              </Link>
            </MainBox>
          </HalfBoxWrapper>
        </Box>

        <GrayFullDivider />

        <Box>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            한달간 나의 감정
          </Typography>
          <MainBox width={'90vw'}>
            <Box display={'flex'} justifyContent={'space-between'} width={1}>
              <Box>
                <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
                  감정기록
                </Typography>
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: 'gray',
                    marginTop: '-4px',
                  }}
                >
                  {toStringByFormatting(toDay)}.({dayName(toDay)})
                </Typography>
              </Box>
              <InfoIcon />
            </Box>

            <Paper
              variant="outlined"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '80vw',
                height: '280px',
                borderColor: 'primary.light',
                marginTop: '10px',
                paddingBottom: '20px',
              }}
            >
              <Charts date={toDay} />
            </Paper>
          </MainBox>
        </Box>

        <GrayFullDivider />
      </Box>
    </Layout>
  );
};

export default Main;
