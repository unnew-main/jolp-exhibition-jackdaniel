import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

type Props = { sTop: string; sLeft: string; dTop: string; dLeft: string; Rotate: string; boxTop: string; boxLeft: string };
export const LineAction: React.FC<Props> = ({ sTop, sLeft, dTop, dLeft, Rotate, boxTop, boxLeft }) => {
  return (
    <LineWrapper boxTop={boxTop} boxLeft={boxLeft}>
      <Line
        animate={{
          top: dTop,
          left: dLeft,
        }}
        transition={{
          duration: 1,
          delay: 2.7,
        }}
        sTop={sTop}
        sLeft={sLeft}
        Rotate={Rotate}
      />
    </LineWrapper>
  );
};

type LineWrapperProps = { boxTop: string; boxLeft: string };
const LineWrapper = styled(motion.div)<LineWrapperProps>`
  position: absolute;
  top: ${({ boxTop }) => boxTop};
  left: ${({ boxLeft }) => boxLeft};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  overflow: hidden;
  transform: translate(-50%, -50%);
`;

type LineProps = { sTop: string; sLeft: string; Rotate: string };
const Line = styled(motion.hr)<LineProps>`
  position: absolute;
  width: 200px;
  border: 3px solid white;
  top: ${({ sTop }) => sTop};
  left: ${({ sLeft }) => sLeft};
  border-radius: 50px;
  background-color: white;
  transform: translate(-50%, -50%) rotate(${({ Rotate }) => Rotate});
  margin: 0;
  opacity: 1;
`;
