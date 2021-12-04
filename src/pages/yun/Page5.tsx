import React, { useState, useEffect } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';
import { FaArrowRight } from 'react-icons/fa';
type Props = { handlePage: () => void };
export const Page5: React.FC<Props> = ({ handlePage }) => {
  const [curState, setCurState] = useState(0);
  const [nextButton, setNextButton] = useState(0);
  const [eventState, setEventState] = useState(0);
  const [eventLock, setEventLock] = useState(0);
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  useEffect(() => {
    const wait2 = async () => {
      await timeout(5000);
      setNextButton(1);
    };
    if (eventState === 2) wait2();
  }, [eventState]);

  const NextPage = async () => {
    await timeout(200);
    setCurState(1);
    setNextButton(0);
    await timeout(1000);
    handlePage();
  };
  const EventHandle = () => {
    if (eventLock === 0) {
      setEventLock(1);
      setEventState((value) => value + 1);
      setTimeout(() => setEventLock(0), 1500);
    }
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
        <IMGSection>
          {eventState >= 0 && (
            <DistillSection>
              <DistillImg
                animate={{
                  opacity: eventState === 0 ? [0, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 0,
                }}
              />
              <Cover
                animate={{
                  opacity: eventState === 0 ? [0, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 1,
                }}
              />
              <Title
                animate={{
                  opacity: eventState === 0 ? [0, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 2,
                }}
              >
                증류
              </Title>
              <Wrapper
                eventLock={eventLock}
                animate={{
                  opacity: eventState === 0 ? [0, 1] : 0,
                  display: eventState === 0 ? 'default' : 'none',
                }}
                transition={{
                  delay: 2.5,
                }}
              >
                <NextButtonWrapper
                  animate={{
                    opacity: eventState === 0 ? [0, 1] : 0,
                  }}
                  transition={{
                    delay: 0,
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onTap={EventHandle}
                >
                  <NextButton />
                </NextButtonWrapper>
              </Wrapper>
            </DistillSection>
          )}
          {eventState >= 1 && (
            <MellowingSection>
              <MellowingImg
                animate={{
                  opacity: eventState === 1 ? [0, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 0,
                }}
              />
              <Cover
                animate={{
                  opacity: eventState === 1 ? [0, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 1,
                }}
              />
              <Title
                animate={{
                  opacity: eventState === 1 ? [0, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 1.5,
                }}
              >
                여과
              </Title>
              <Wrapper
                eventLock={eventLock}
                animate={{
                  opacity: eventState === 1 ? [0, 1] : 0,
                  display: eventState === 1 ? 'default' : 'none',
                }}
                transition={{
                  delay: 2,
                }}
              >
                <NextButtonWrapper
                  animate={{
                    opacity: eventState === 1 ? [0, 1] : 0,
                  }}
                  transition={{
                    delay: 0,
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onTap={EventHandle}
                >
                  <NextButton />
                </NextButtonWrapper>
              </Wrapper>
            </MellowingSection>
          )}
          {eventState >= 2 && (
            <RipenSection>
              <RipenImg
                animate={{
                  opacity: eventState === 2 ? [0, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 0,
                }}
              />
              <Cover
                animate={{
                  opacity: eventState === 2 ? [0, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 1,
                }}
              />
              <Title
                animate={{
                  opacity: eventState === 2 ? [0, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 1.5,
                }}
              >
                숙성
              </Title>
            </RipenSection>
          )}
        </IMGSection>
        {eventState >= 2 && (
          <TitleSection
            animate={{ y: '-90%' }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: 3,
            }}
          >
            <MainTitle>특별한 제조과정</MainTitle>
            <SubTitle>
              다른 위스키 제조과정에는 없는 {'\u00A0'}
              <SizeText>여과</SizeText>
              {'\u00A0'}를 거쳐 거친 맛을 부드럽게 만듬{' '}
            </SubTitle>
          </TitleSection>
        )}
        <ArrowNext NextPage={NextPage} Color={'black'} Display={nextButton} />
      </Background>
    </LayoutContainer>
  );
};

const Background = styled(motion.div)`
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
`;
const IMGSection = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;
type WrapperType = { eventLock: number };
const Wrapper = styled(motion.div)<WrapperType>`
  position: absolute;
  right: -25px;
  cursor: ${({ eventLock }) => (eventLock === 0 ? 'pointer' : 'default')};
  z-index: 5;
  opacity: 0;
`;
const NextButtonWrapper = styled(motion.div)`
  background-color: black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextButton = styled(FaArrowRight)`
  position: relative;
  color: white;
  font-size: 30px;
`;
const DistillSection = styled(motion.div)`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 33%;
  height: 100%;
`;
const MellowingSection = styled(motion.div)`
  position: relative;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 34%;
  height: 100%;
`;
const RipenSection = styled(motion.div)`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 100%;
`;
const Cover = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  filter: opacity(35%);
`;

const Title = styled(motion.div)`
  position: absolute;
  font-size: 60px;
  font-weight: bold;
  margin-top: 20px;
  color: white;
  height: 50%;
`;
const DistillImg = styled(motion.div)`
  background: url('${process.env.PUBLIC_URL}/yun/img/distill.jpg');
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
const MellowingImg = styled(motion.div)`
  background: url('${process.env.PUBLIC_URL}/yun/img/mellowing.jpg');
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
const RipenImg = styled(motion.div)`
  background: url('${process.env.PUBLIC_URL}/yun/img/ripen.png');
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TitleSection = styled(motion.div)`
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  bottom: -40%;
`;
const MainTitle = styled(motion.div)`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 100px;
`;
const SubTitle = styled(motion.div)`
  display: flex;

  align-items: flex-end;
  font-size: 30px;
  margin-bottom: 80px;
  margin-left: 100px;
`;
const SizeText = styled(motion.div)`
  font-size: 50px;
  font-weight: bold;
  color: #fa6690;
`;
