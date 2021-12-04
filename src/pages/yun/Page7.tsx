import React, { useState, useEffect } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';
import { ShowImg } from './components/page7';
type Props = { handlePage: () => void };
export const Page7: React.FC<Props> = ({ handlePage }) => {
  const [curState, setCurState] = useState(0);
  const [nextButton, setNextButton] = useState(0);
  const imgData = [
    { name: 1, imgX: 45, imgY: 0, imgW: 10, imgH: 30, dTime: 0.1 },
    { name: 2, imgX: 28, imgY: 0, imgW: 17, imgH: 18, dTime: 0.2 },
    { name: 3, imgX: 55, imgY: 0, imgW: 20, imgH: 18, dTime: 0.3 },
    { name: 4, imgX: 13, imgY: 0, imgW: 15, imgH: 30, dTime: 0.4 },
    { name: 5, imgX: 75, imgY: 0, imgW: 25, imgH: 30, dTime: 0.5 },
    { name: 6, imgX: 0, imgY: 0, imgW: 13, imgH: 30, dTime: 0.6 },
    { name: 7, imgX: 83, imgY: 30, imgW: 17, imgH: 33, dTime: 0.7 },
    { name: 8, imgX: 0, imgY: 30, imgW: 15, imgH: 19, dTime: 0.8 },
    { name: 9, imgX: 86, imgY: 63, imgW: 14, imgH: 37, dTime: 0.9 },
    { name: 10, imgX: 0, imgY: 49, imgW: 20, imgH: 20, dTime: 1 },
    { name: 11, imgX: 71, imgY: 63, imgW: 15, imgH: 37, dTime: 1.1 },
    { name: 12, imgX: 0, imgY: 69, imgW: 15, imgH: 31, dTime: 1.2 },
    { name: 13, imgX: 54, imgY: 79, imgW: 17, imgH: 21, dTime: 1.3 },
    { name: 14, imgX: 15, imgY: 69, imgW: 14, imgH: 37, dTime: 1.4 },
    { name: 15, imgX: 29, imgY: 80, imgW: 17, imgH: 20, dTime: 1.5 },
  ];
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  useEffect(() => {
    const wait2 = async () => {
      await timeout(3000);
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
        <ImgWrapper
          animate={{
            opacity: curState === 0 ? [0, 1] : 0,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
            delay: 0,
          }}
        >
          {imgData.map(({ name, imgX, imgY, imgW, imgH, dTime }) => (
            <ShowImg key={name} name={name} imgX={imgX} imgY={imgY} imgW={imgW} imgH={imgH} dTime={dTime} />
          ))}
        </ImgWrapper>

        <TitleSection
          animate={{
            opacity: curState === 0 ? [0, 1] : 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: curState === 0 ? 3 : 0,
          }}
        >
          <MainTitle>음악과 함께 하다</MainTitle>
          <SubTitle>뮤지션들이 인정한 최고의 위스키</SubTitle>
        </TitleSection>
        <ArrowNext NextPage={NextPage} Color={'white'} Display={nextButton} />
        <SubBackground
          animate={{
            opacity: curState === 0 ? [0, 1] : 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: curState === 0 ? 2.5 : 0,
          }}
        />
      </Background>
    </LayoutContainer>
  );
};

const Background = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  background-color: white;

  overflow: hidden;
`;

const ImgWrapper = styled(motion.div)``;
const TitleSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  z-index: 5;
`;
const MainTitle = styled(motion.div)`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 50px;
`;
const SubTitle = styled(motion.div)`
  font-size: 40px;
  align-items: center;
  text-align: center;
  line-height: 70px;
`;

const SubBackground = styled(motion.div)`
  position: absolute;

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(244, 70, 70, 1);
  z-index: 3;
`;
