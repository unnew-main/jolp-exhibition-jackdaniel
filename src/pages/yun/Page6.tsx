import React, { useState, useEffect } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';

type Props = { handlePage: () => void };
export const Page6: React.FC<Props> = ({ handlePage }) => {
  const [curState, setCurState] = useState(0);
  const [nextButton, setNextButton] = useState(0);
  const title = [
    { text: '기', dTime: 1.5 },
    { text: '본', dTime: 1.6 },
    { text: '부', dTime: 1.7 },
    { text: '터', dTime: 1.8 },
    { text: '\u00A0', dTime: 1.9 },
    { text: '다', dTime: 2.0 },
    { text: '르', dTime: 2.1 },
    { text: '다', dTime: 2.2 },
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

          backgroundPosition: '50% 50%',
        }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          delay: curState === 0 ? 0 : 0,
        }}
      >
        <TitleSection>
          <MainWrapper>
            {title.map(({ text, dTime }) => (
              <MainTitle
                key={dTime}
                animate={{
                  opacity: curState === 0 ? [0, 1] : 0,
                  y: '20px',
                }}
                transition={{
                  delay: dTime,
                }}
              >
                {text}
              </MainTitle>
            ))}
          </MainWrapper>
          <SubTitle
            animate={{
              opacity: curState === 0 ? [0, 1] : 0,
              y: '20px',
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: curState === 0 ? 2.5 : 0,
            }}
          >
            철분이 함유되어 있지 않고 <br />
            일년내내 <strong>13</strong>도를 유지하고 있는 동굴 속 샘물을 이용
          </SubTitle>
        </TitleSection>
        <ArrowNext NextPage={NextPage} Color={'white'} Display={nextButton} />
      </Background>
    </LayoutContainer>
  );
};

const Background = styled(motion.div)`
  background: url('${process.env.PUBLIC_URL}/yun/img/water.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;

  overflow: hidden;
`;

const TitleSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgba(0, 66, 165, 1);
`;
const MainWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
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
