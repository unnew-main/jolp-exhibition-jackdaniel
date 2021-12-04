import React, { useState } from 'react';
import { VscDebugBreakpointLog } from 'react-icons/vsc';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type Props = { NextPage: () => void; Color: string; Display: number };
export const ArrowNext: React.FC<Props> = ({ NextPage, Color, Display }) => {
  const [PageLock, setPageLock] = useState(0);
  const NextPageHandle = () => {
    if (PageLock === 0) {
      setPageLock(1);
      NextPage();
    }
  };
  return (
    <Wrapper
      animate={{
        opacity: Display === 1 ? 1 : 0,
        display: Display === 1 ? 'flex' : 'none',
      }}
      transition={{
        delay: 0,
      }}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.8 }}
      onTap={NextPageHandle}
    >
      <VscDebugBreakpointLog style={ButtonStyle} color={Color} />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10px;
  opacity: 0;
  z-index: 5;
`;

const ButtonStyle = { fontSize: '60px', cursor: 'pointer' };
