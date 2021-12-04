import React, { useState, useEffect } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';
import { LineAction } from './components/page8';
type Props = { handlePage: () => void };
export const Page8: React.FC<Props> = ({ handlePage }) => {
  const [curState, setCurState] = useState(0);
  const [nextButton, setNextButton] = useState(0);

  const LinePosition = [
    { sTop: '-80px', sLeft: '280px', dTop: '280px', dLeft: '-80px', Rotate: '-45deg', boxTop: '100%', boxLeft: '0%' },
    { sTop: '100px', sLeft: '310px', dTop: '100px', dLeft: '-110px', Rotate: '0deg', boxTop: '50%', boxLeft: '-15%' },
    { sTop: '280px', sLeft: '280px', dTop: '-80px', dLeft: '-80px', Rotate: '45deg', boxTop: '0%', boxLeft: '0%' },
    { sTop: '310px', sLeft: '100px', dTop: '-110px', dLeft: '100px', Rotate: '90deg', boxTop: '-15%', boxLeft: '50%' },
    { sTop: '280px', sLeft: '-80px', dTop: '-80px', dLeft: '280px', Rotate: '-45deg', boxTop: '0%', boxLeft: '100%' },
    { sTop: '100px', sLeft: '-110px', dTop: '100px', dLeft: '310px', Rotate: '0deg', boxTop: '50%', boxLeft: '115%' },
    { sTop: '-80px', sLeft: '-80px', dTop: '280px', dLeft: '280px', Rotate: '45deg', boxTop: '100%', boxLeft: '100%' },
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
        <Section>
          <JackImgWrapper
            animate={{
              opacity: curState === 0 ? [0, 1] : 0,
              rotate: 40,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: curState === 0 ? 1 : 0,
            }}
          >
            <JackImg
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.1,
                ease: 'easeOut',
                delay: curState === 0 ? 0 : 0,
              }}
            />
          </JackImgWrapper>
          <TitleSection
            animate={{
              opacity: curState === 0 ? [0, 1] : 1,
            }}
            transition={{
              duration: 1,
              delay: curState === 0 ? 2 : 0,
            }}
          >
            <MainTitle
              animate={{
                opacity: curState === 0 ? [0, 1] : 1,
                scale: 2,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 2 : 0,
              }}
            >
              잭콕
            </MainTitle>
            <SubTitle
              animate={{
                opacity: curState === 0 ? [0, 1] : 1,
                scale: 2,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 2 : 0,
              }}
            >
              콜라의 만남, 색다른 맛
            </SubTitle>
          </TitleSection>

          <CockImgWrapper
            animate={{
              opacity: curState === 0 ? [0, 1] : 0,
              rotate: -40,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: curState === 0 ? 1 : 0,
            }}
          >
            <CockImg
              animate={{
                opacity: curState === 0 ? [0, 1] : 0,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 1 : 0,
              }}
            />
          </CockImgWrapper>
        </Section>
        <ArrowNext NextPage={NextPage} Color={'white'} Display={nextButton} />
        <ActionWrapper>
          <Circle
            animate={{
              opacity: curState === 0 ? [0, 1] : 1,
              transform: 'scale(2)',
            }}
            transition={{
              duration: 1,
              delay: curState === 0 ? 2 : 0,
            }}
          />
          {LinePosition.map(({ sTop, sLeft, dTop, dLeft, Rotate, boxTop, boxLeft }, index) => (
            <LineAction key={index} sTop={sTop} sLeft={sLeft} dTop={dTop} dLeft={dLeft} Rotate={Rotate} boxTop={boxTop} boxLeft={boxLeft} />
          ))}
        </ActionWrapper>
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
  background-color: black;
  overflow: hidden;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
`;

const JackImgWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;
const JackImg = styled(motion.div)`
  position: relative;
  background: url('${process.env.PUBLIC_URL}/yun/img/jack.png');
  object-fit: cover;
  width: 285px;
  height: 850px;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
`;

const TitleSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  width: 60%;
`;

const MainTitle = styled(motion.div)`
  font-size: 30px;
  margin-bottom: 50px;
`;
const SubTitle = styled(motion.div)`
  font-size: 20px;
`;

const CockImgWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;
const CockImg = styled(motion.div)`
  position: relative;
  background: url('${process.env.PUBLIC_URL}/yun/img/coca.png');
  object-fit: cover;
  width: 315px;
  height: 870px;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
`;

const ActionWrapper = styled(motion.div)`
  position: absolute;
  width: 560px;
  height: 560px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled(motion.div)`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  border: 3px solid white;
  border-radius: 100%;
`;
