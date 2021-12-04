import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

type Props = { name: number; imgX: number; imgY: number; imgW: number; imgH: number; dTime: number };
export const ShowImg: React.FC<Props> = ({ name, imgX, imgY, imgW, imgH, dTime }) => {
  const [visible, setVisible] = useState(0);

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  useEffect(() => {
    const wait2 = async () => {
      await timeout(dTime);
      setVisible(1);
    };
    wait2();
  }, [dTime]);

  return (
    <Section
      animate={{
        opacity: [0, 1],
      }}
      transition={{
        duration: 1,
        ease: 'easeOut',
        delay: dTime,
      }}
    >
      <Wrapper
        animate={{
          opacity: visible === 1 ? [0, 1] : 0,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
        whileHover={{ scale: 1.3, zIndex: 6 }}
        name={name}
        imgX={imgX}
        imgY={imgY}
        imgW={imgW}
        imgH={imgH}
      />
    </Section>
  );
};

const Section = styled(motion.div)``;
type WrapperProps = { name: number; imgX: number; imgY: number; imgW: number; imgH: number };
const Wrapper = styled(motion.div)<WrapperProps>`
  position: absolute;
  background: url('${process.env.PUBLIC_URL}/yun/img/rock/${({ name }) => name.toString()}.jpg');
  width: ${({ imgW }) => imgW.toString() + '%'};
  height: ${({ imgH }) => imgH.toString() + '%'};
  top: ${({ imgY }) => imgY.toString() + '%'};
  left: ${({ imgX }) => imgX.toString() + '%'};
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 5;
`;
