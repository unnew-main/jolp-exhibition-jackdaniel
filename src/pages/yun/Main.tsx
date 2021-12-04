import React, { useState } from 'react';
import { Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9 } from './index';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export default function Main() {
  const [pageNumber, setPageNumber] = useState(1);
  const handlePage = () => {
    pageNumber === 9 ? setPageNumber((pageNumber) => (pageNumber = 1)) : setPageNumber((pageNumber) => pageNumber + 1);
  };
  return (
    <Section
      animate={{
        background: pageNumber === 2 || pageNumber === 5 || pageNumber === 4 || pageNumber === 6 ? 'white' : pageNumber === 3 ? 'rgb(240, 240, 240)' : 'black',
      }}
      transition={{ delay: 2 }}
    >
      {pageNumber === 1 && <Page1 handlePage={handlePage} />}
      {pageNumber === 2 && <Page2 handlePage={handlePage} />}
      {pageNumber === 3 && <Page3 handlePage={handlePage} />}
      {pageNumber === 4 && <Page4 handlePage={handlePage} />}
      {pageNumber === 5 && <Page5 handlePage={handlePage} />}
      {pageNumber === 6 && <Page6 handlePage={handlePage} />}
      {pageNumber === 7 && <Page7 handlePage={handlePage} />}
      {pageNumber === 8 && <Page8 handlePage={handlePage} />}
      {pageNumber === 9 && <Page9 handlePage={handlePage} />}
    </Section>
  );
}

const Section = styled(motion.div)`
  background: black;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  cursor: default;
`;
