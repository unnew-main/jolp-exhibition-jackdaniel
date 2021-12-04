import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

type Props = { number: number; fontSize: string; delayTime: number };
export const NumberPlus: React.FC<Props> = ({ number, fontSize, delayTime }) => {
  const [num, setNum] = useState(0);
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  useEffect(() => {
    (async () => {
      await timeout(delayTime);
      for (let i = 1; i <= number; ++i) {
        setNum(i);
        await timeout(7);
      }
    })();
  }, [number, delayTime]);

  return (
    <div>
      <Number fontSize={fontSize}>{num}</Number>
    </div>
  );
};

type NumberProps = { fontSize: string };
const Number = styled(motion.div)<NumberProps>`
  font-size: ${({ fontSize }) => fontSize};
`;
