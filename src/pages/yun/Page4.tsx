import React, { useState, useEffect } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';
import { Doughnut } from 'react-chartjs-2';
import { NumberPlus } from './components';
const options: object = {
  plugins: {
    legend: {
      display: false, // label 숨기기
      reverse: true,
    },
  },
  maintainAspectRatio: false, // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
};

type Props = { handlePage: () => void };
export const Page4: React.FC<Props> = ({ handlePage }) => {
  const [curState, setCurState] = useState(0);
  const [nextButton, setNextButton] = useState(0);
  const ChartColor = ['#E05D5D', ' #FFB344'];
  const data = {
    labels: ['맥아, 밀, 기타등등', '옥수수'],
    datasets: [
      {
        backgroundColor: ChartColor,
        borderColor: ChartColor,
        borderWidth: 3,
        hoverBackgroundColor: ChartColor,
        hoverBorderColor: ['grey', 'grey'],
        data: [49, 51],
      },
    ],
  };

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  useEffect(() => {
    const wait2 = async () => {
      await timeout(4500);
      setNextButton(1);
    };
    wait2();
  }, []);

  const NextPage = async () => {
    await timeout(200);
    setCurState(1);
    setNextButton(0);
    await timeout(1000);
    handlePage();
  };

  return (
    <LayoutContainer>
      <Background
        animate={{
          opacity: curState === 0 ? [0, 1] : 0,
        }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          delay: curState === 0 ? 0 : 0,
        }}
      >
        <ChartWrapper>
          <Chart data={data} options={options} />
        </ChartWrapper>

        <TitleSection>
          <Title
            animate={{ opacity: curState === 0 ? [0, 1] : 0, y: '-50px ' }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: curState === 0 ? 1.5 : 0,
            }}
          >
            자신있는 완벽한 {'\u00A0'}
            <SizeText
              animate={{ opacity: curState === 0 ? [0, 1] : 0 }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 2 : 0,
              }}
            >
              비율
            </SizeText>
          </Title>
          <SubTitle
            animate={{ opacity: curState === 0 ? [0, 1] : 0 }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: curState === 0 ? 3 : 0,
            }}
          >
            <ColorText color={ChartColor[1]}>
              옥수수{'\u00A0'}
              <strong>
                <NumberPlus number={51} fontSize={'70px'} delayTime={3300} />
              </strong>
              %,{'\u00A0'}
            </ColorText>
            {'\u00A0'}
            <ColorText color={ChartColor[0]}>맥아, 밀, 기타등등.</ColorText>
          </SubTitle>
        </TitleSection>

        <ArrowNext NextPage={NextPage} Color={'black'} Display={nextButton} />
      </Background>
    </LayoutContainer>
  );
};

const Background = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 248, 229);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`;
const ChartWrapper = styled(motion.div)`
  width: 40%;
  height: 100%;
`;
const Chart = styled(Doughnut)``;

///////////// title //////////////
const TitleSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;

  margin-top: 50px;
`;

const Title = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 50px;
  font-weight: bold;
  opacity: 0;
`;
const SubTitle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 45px;

  opacity: 0;
`;

type ColorTextProps = { color: String };
const ColorText = styled(motion.div)<ColorTextProps>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: ${({ color }) => color};
`;

const SizeText = styled(motion.div)`
  font-size: 80px;

  color: rgb(0, 161, 157);
  opacity: 0;
`;
