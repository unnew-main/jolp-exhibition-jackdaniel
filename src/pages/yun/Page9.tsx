import React, { useState } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { BsCircleFill } from 'react-icons/bs';
import { ImExit } from 'react-icons/im';

type Props = { handlePage: () => void };

export const Page9: React.FC<Props> = ({ handlePage }) => {
  const [curState, setCurState] = useState(0);
  const [handleSection, setHandleSection] = useState(0);
  const [PageLock, setPageLock] = useState(0);
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const NextPage = async () => {
    if (curState === 0) {
      setCurState(1);
    } else if (curState === 1) {
      setCurState(2);
      await timeout(1000);
      setHandleSection(1);
    } else {
      await timeout(200);
      setCurState(3);
      await timeout(1000);
      handlePage();
    }
  };
  const NextPageHandle = () => {
    if (PageLock === 0) {
      setPageLock(1);
      NextPage();
      setTimeout(() => setPageLock(0), 1500);
    }
  };
  const NextPageHandle2 = () => {
    if (PageLock === 0 && curState === 2) {
      setPageLock(0);
      NextPage();
    }
  };
  return (
    <LayoutContainer>
      <Background
        animate={{
          opacity: curState === 0 ? [0, 1] : curState === 1 ? 1 : curState === 2 ? 1 : 0,
        }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          delay: 0,
        }}
      >
        {handleSection === 0 ? (
          <Section1
            animate={{
              opacity: curState === 0 ? [0, 1] : curState === 1 ? [0, 1] : curState === 2 ? 1 : 0,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: 0,
            }}
          >
            <TextWrapper
              animate={{
                opacity: curState === 0 ? 0 : curState === 1 ? [0, 1] : curState === 2 ? 1 : 0,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 0 : curState === 1 ? 0 : curState === 2 ? 0 : 0,
              }}
            >
              150년의 역사
            </TextWrapper>
            <TextWrapper
              animate={{
                opacity: curState === 0 ? 0 : curState === 1 ? [0, 1] : curState === 2 ? 1 : 0,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 0 : curState === 1 ? 0.5 : curState === 2 ? 0 : 0,
              }}
            >
              세계 160개국 수출
            </TextWrapper>
            <WrapperHandle
              animate={{
                opacity: curState === 0 ? [0, 1] : curState === 1 ? 1 : curState === 2 ? 1 : 0,
                scale: curState === 0 ? 1 : curState === 1 ? 1 : curState === 2 ? 100 : 0,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: 0,
              }}
            >
              <NextSectionButtonWrapper
                animate={{
                  opacity: curState === 0 ? [0, 1] : curState === 1 ? 1 : curState === 2 ? 1 : 0,
                  scale: curState === 0 ? 1 : curState === 1 ? 1 : curState === 2 ? 100 : 0,
                }}
                transition={{
                  delay: 0,
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onTap={NextPageHandle}
              >
                <NextButton curState={curState} />
              </NextSectionButtonWrapper>
            </WrapperHandle>
            <TextWrapper
              animate={{
                opacity: curState === 0 ? 0 : curState === 1 ? [0, 1] : curState === 2 ? 1 : 0,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 0 : curState === 1 ? 1 : curState === 2 ? 0 : 0,
              }}
            >
              자신있는 완벽한 비율
            </TextWrapper>
            <TextWrapper
              animate={{
                opacity: curState === 0 ? 0 : curState === 1 ? [0, 1] : curState === 2 ? 1 : 0,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 0 : curState === 1 ? 1.5 : curState === 2 ? 0 : 0,
              }}
            >
              기본부터 다르다
            </TextWrapper>
          </Section1>
        ) : (
          <Section2
            animate={{
              opacity: curState === 0 ? 0 : curState === 1 ? 0 : curState === 2 ? 1 : 0,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: 0,
            }}
          >
            <Logo
              animate={{
                opacity: curState === 0 ? 0 : curState === 1 ? 0 : curState === 2 ? [0, 1] : 0,
              }}
              transition={{
                duration: 2,
                ease: 'easeOut',
                delay: curState === 0 ? 0 : curState === 1 ? 0 : curState === 2 ? 1 : 0,
              }}
            />
            <WrapperHandle2
              animate={{
                opacity: curState === 0 ? 0 : curState === 1 ? 0 : curState === 2 ? [0, 1] : 0,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 0 : curState === 1 ? 0 : curState === 2 ? 3 : 0,
              }}
            >
              <NextSectionButtonWrapper2
                animate={{
                  opacity: curState === 0 ? 0 : curState === 1 ? 0 : curState === 2 ? [0, 1] : 0,
                }}
                transition={{
                  delay: 0,
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onTap={NextPageHandle2}
              >
                <NextButton2 curState={curState} />
              </NextSectionButtonWrapper2>
            </WrapperHandle2>
          </Section2>
        )}
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

const Section1 = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
`;
const WrapperHandle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`;
const NextSectionButtonWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  margin-top: 20px;
  margin-bottom: 20px;
`;

type NextButtonProps = { curState: Number };
const NextButton = styled(BsCircleFill)<NextButtonProps>`
  font-size: 60px;
  cursor: ${({ curState }) => (curState === 0 ? 'pointer' : curState === 1 ? 'pointer' : 'default')};
  color: white;
`;

const TextWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  opacity: 0;
`;
///////////////////
const Section2 = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const Logo = styled(motion.div)`
  background: url('${process.env.PUBLIC_URL}/yun/img/logo.png');
  object-fit: cover;
  width: 525px;
  height: 305px;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
`;

const WrapperHandle2 = styled(motion.div)`
  position: absolute;
  bottom: 10px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`;
const NextSectionButtonWrapper2 = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  margin-top: 20px;
  margin-bottom: 20px;
`;
type NextButton2Props = { curState: Number };
const NextButton2 = styled(ImExit)<NextButton2Props>`
  font-size: 50px;
  cursor: ${({ curState }) => (curState === 1 ? 'default' : curState === 2 ? 'pointer' : 'default')};
  color: black;
`;
