import React, { useState, useEffect } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';
import { useHistory } from 'react-router-dom';
import { pagesRoutes } from 'routes/pagesRoutes';
import { timeout } from 'utils/timeout';

export const Page3: React.FC = () => {
  const [curState, setCurState] = useState(0);
  const [nextButton, setNextButton] = useState(0);
  const [quizA, setQuizA] = useState(0);
  const [quizB, setQuizB] = useState(0);

  const history = useHistory();

  useEffect(() => {
    const wait2 = async () => {
      await timeout(3500);
      setNextButton(1);
    };
    wait2();
  }, []);

  const NextPage = async () => {
    await timeout(200);
    setCurState(1);
    setNextButton(0);
    await timeout(1000);
    history.push(pagesRoutes[3].pathName);
  };

  return (
    <LayoutContainer>
      <Background
        animate={{
          opacity: curState === 0 ? 1 : 0,
        }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          delay: curState === 0 ? 0 : 0,
        }}
      >
        <MapWrapper
          animate={{ scale: [100, 1] }}
          transition={{
            duration: 1.5,
            ease: 'easeOut',
            delay: curState === 0 ? 0 : 0,
          }}
        />
        <TitleWrapper
          animate={{ display: 'flex', opacity: curState === 0 ? [0, 1] : 0 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: curState === 0 ? 2.5 : 0,
          }}
        >
          <MainTitle>세계 160개국 수출</MainTitle>
          <SubTitle1>
            연간 생산량 1년에{' '}
            <QuizBox variants={quizButton} initial="rest" whileHover="hover" whileTap="pressed" Width={110} onClick={() => setQuizA(1)}>
              {quizA ? '2억' : '?'}
            </QuizBox>
            병
          </SubTitle1>

          <SubTitle2>
            매출 약{' '}
            <QuizBox variants={quizButton} initial="rest" whileHover="hover" whileTap="pressed" Width={200} onClick={() => setQuizB(1)}>
              {quizB ? '4조 6천억' : '?'}
            </QuizBox>
            원
          </SubTitle2>
        </TitleWrapper>

        <ArrowNext NextPage={NextPage} Color={'white'} Display={nextButton} />
      </Background>
    </LayoutContainer>
  );
};
const quizButton = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.9 },
};

const Background = styled(motion.div)`
  position: relative;

  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgba(15, 176, 211, 1);
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: 0;
`;

const MapWrapper = styled(motion.div)`
  background: url('${process.env.PUBLIC_URL}/yun/img/map.png');

  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  width: 800px;
  height: 480px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TitleWrapper = styled(motion.div)`
  color: white;

  opacity: 0;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: default;
`;
const MainTitle = styled(motion.div)`
  font-size: 50px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const SubTitle1 = styled(motion.div)`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

type QuizBoxType = { Width: number };
const QuizBox = styled(motion.div)<QuizBoxType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ Width }) => Width + 'px'};
  height: auto;
  cursor: pointer;
  color: rgba(15, 176, 211, 1);
  background-color: white;
  border-radius: 15px;
  margin-left: 10px;
  margin-right: 10px;
`;

const SubTitle2 = styled(motion.div)`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
