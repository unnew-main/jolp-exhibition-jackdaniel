import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { IoMdWater } from 'react-icons/io';

type Props = { xPosition: number };
export const RainDrop: React.FC<Props> = ({ xPosition }) => {
  return (
    <RainDropWrapper
      xPosition={xPosition}
      animate={{ y: '60vh' }}
      transition={{
        duration: Math.random() + 1,
        ease: 'easeIn',
        repeat: Infinity,
        // repeatDelay: Math.random() * 15 + 3,
        delay: Math.random() * 5 + 1,
      }}
    >
      <RainDropIcon />
    </RainDropWrapper>
  );
};

type RainDropProps = { xPosition: number };

const RainDropWrapper = styled(motion.div)<RainDropProps>`
  position: absolute;
  display: inline;
  top: -20%;
  left: ${({ xPosition }) => xPosition.toString() + '%'};
`;

const RainDropIcon = styled(IoMdWater)`
  color: white;
  font-size: 50px;
`;
