import React, { useState, useEffect } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';
import { NumberPlus } from './components';
import { useHistory } from 'react-router-dom';
import { pagesRoutes } from 'routes/pagesRoutes';
import { timeout } from 'utils/timeout';
export const Page2: React.FC = () => {
  const [curState, setCurState] = useState(0);
  const [nextButton, setNextButton] = useState(0);
  const history = useHistory();

  const NextPage = () => {
    setNextButton(0);
    setCurState((curState) => curState + 1);

    if (curState === 0) setTimeout(() => setNextButton(1), 4000);
  };
  useEffect(() => {
    const wait2 = async () => {
      await timeout(5000);
      setNextButton(1);
    };
    wait2();
  }, []);

  useEffect(() => {
    const wait = async () => {
      if (curState === 2) {
        await timeout(1000);
        history.push(pagesRoutes[2].pathName);
      }
    };

    wait();
  }, [curState, history]);

  return (
    <LayoutContainer>
      <Background
        animate={{
          opacity: curState === 0 ? [0, 1] : curState === 2 ? 0 : 1,
        }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          delay: curState === 0 ? 0 : curState === 2 ? 0 : 0,
        }}
      >
        <TitleWrapper>
          <LeftTitle
            animate={{
              opacity: curState === 0 ? [0, 1] : 0,
              y: '20px',

              transitionEnd: curState === 1 ? { display: 'none', width: '0%' } : undefined,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: curState === 0 ? 1 : 0,
            }}
          >
            테네시위스키의 자존심
          </LeftTitle>
          <RightTitle
            animate={{
              opacity: curState === 0 ? [0, 1] : [1, 0],
              y: '-20px',

              transitionEnd: curState === 1 ? { display: 'none', width: '0%' } : undefined,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: curState === 0 ? 1 : 0,
            }}
          >
            잭 다니엘 Old No.7
          </RightTitle>
        </TitleWrapper>

        <JackImg
          animate={{
            opacity: curState === 0 ? [0, 1] : curState === 2 ? 0 : 1,
            scale: curState === 0 ? 1.1 : 1,
            top: curState === 1 ? '100px' : curState === 2 ? '100px' : '50%',
            left: curState === 1 ? '50px' : curState === 2 ? '50px' : '50%',
            translateX: '-50%',
            translateY: '-50%',
            cursor: curState === 0 ? 'pointer' : 'default',
            rotate: curState === 1 ? 90 : curState === 2 ? 90 : undefined,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: 0,
          }}
          whileHover={{ scale: curState === 0 ? 1.2 : 1 }}
          onClick={() => curState === 0 && NextPage()}
        />
        {(curState === 1 || curState === 2) && (
          <Section>
            <HistoryWrapper>
              <NumberWrapper>
                <StartNumber
                  animate={{
                    opacity: curState === 1 ? [0, 1] : 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: 'easeOut',
                    delay: curState === 1 ? 1.8 : 0,
                  }}
                >
                  1866
                </StartNumber>
                <EndNumber
                  animate={{
                    opacity: curState === 1 ? [0, 1] : 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: 'easeOut',
                    delay: curState === 1 ? 1.8 : 0,
                  }}
                >
                  2021
                </EndNumber>
              </NumberWrapper>
              <LineWrapper>
                <Bar
                  animate={{
                    opacity: curState === 1 ? [0, 1] : curState === 2 ? 0 : 0,
                    width: '100%',
                  }}
                  transition={{
                    duration: 1,
                    ease: 'easeOut',
                    delay: curState === 1 ? 1.3 : 0,
                  }}
                />
                <UpBar
                  animate={{
                    opacity: curState === 1 ? [0, 1] : 0,
                    width: '30px',
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: curState === 1 ? 2.3 : 0,
                  }}
                />
                <DownBar
                  animate={{
                    opacity: curState === 1 ? [0, 1] : 0,
                    width: '30px',
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: curState === 1 ? 2.3 : 0,
                  }}
                />
              </LineWrapper>
            </HistoryWrapper>
            <Wrapper>
              <SecondTitle
                animate={{
                  opacity: curState === 1 ? [0, 1] : 0,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: curState === 1 ? 2 : 0,
                }}
              >
                <NumberPlus number={150} fontSize={'90px'} delayTime={2000} />
                <NomalFont
                  animate={{
                    opacity: curState === 1 ? [0, 1] : 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: 'easeOut',
                    delay: curState === 1 ? 3.5 : 0,
                  }}
                >
                  년의 역사
                </NomalFont>
              </SecondTitle>
              <SecondSubTitle
                animate={{
                  opacity: curState === 1 ? [0, 1] : 0,
                  y: '-20px',
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: curState === 1 ? 4.0 : 0,
                }}
              >
                시간이 증명한 완벽한 맛
              </SecondSubTitle>
            </Wrapper>
          </Section>
        )}

        {curState === 1 && <ArrowNext NextPage={NextPage} Color={'black'} Display={nextButton} />}
      </Background>
    </LayoutContainer>
  );
};

const Background = styled(motion.div)`
  position: relative;

  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  opacity: 0;
`;

const TitleWrapper = styled.div`
  position: absolute;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LeftTitle = styled(motion.div)`
  position: relative;
  font-size: 40px;
  color: black;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  top: -20px;
  font-weight: bold;

  cursor: default;
`;

const RightTitle = styled(motion.div)`
  position: relative;
  font-size: 40px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  width: 40%;
  top: 20px;
  opacity: 0;

  cursor: default;
`;

const JackImg = styled(motion.div)`
  background: url('${process.env.PUBLIC_URL}/yun/img/jack.png');
  position: absolute;
  object-fit: cover;
  width: 215px;
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  filter: drop-shadow(16px 16px 10px black);
  opacity: 0;
`;
/////////////////////////////////////////
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const HistoryWrapper = styled(motion.div)`
  position: absolute;
  top: 50px;
  left: 350px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const StartNumber = styled(motion.div)`
  font-size: 30px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  font-weight: bold;

  cursor: default;
`;
const EndNumber = styled(motion.div)`
  font-size: 30px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  font-weight: bold;
  margin-right: 50px;

  cursor: default;
`;
const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Bar = styled(motion.hr)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0%;
  border: 3px solid black;

  opacity: 0;
  background-color: black;
`;
const UpBar = styled(motion.hr)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0px;
  right: 0;
  border: 3px solid black;
  background-color: black;
  transform: translate(16%, -180%) rotate(45deg);
  opacity: 0;
`;
const DownBar = styled(motion.hr)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0px;
  right: 0;
  border: 3px solid black;

  opacity: 0;
  background-color: black;
  transform: translate(16%, 180%) rotate(-45deg);
`;

////////////////// second Title ////////////////////////
const Wrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;

  cursor: default;
`;
const SecondTitle = styled(motion.div)`
  position: relative;
  font-size: 50px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  opacity: 0;
  margin-bottom: 70px;
  font-weight: bold;
`;
const NomalFont = styled(motion.div)``;
const SecondSubTitle = styled(motion.div)`
  position: relative;
  font-size: 40px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
`;
