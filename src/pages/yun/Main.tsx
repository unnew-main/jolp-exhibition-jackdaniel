import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import { pagesRoutes } from 'routes/pagesRoutes';

export default function Main() {
  const location = useLocation();

  return (
    <Section
      animate={{
        background:
          location.pathname === pagesRoutes[1].pathName ||
          location.pathname === pagesRoutes[3].pathName ||
          location.pathname === pagesRoutes[4].pathName ||
          location.pathname === pagesRoutes[5].pathName
            ? 'white'
            : location.pathname === pagesRoutes[2].pathName
            ? 'rgb(240, 240, 240)'
            : 'black',
      }}
      transition={{ delay: 2 }}
    >
      <Switch>
        {pagesRoutes.map((item) => (
          <Route path={item.pathName} component={item.component} key={item.pathName} />
        ))}
      </Switch>
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
