import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useTransition, animated } from '@react-spring/web';

import styles from './Routes.module.scss';
const basename = '/web/animation';

const One = () => {
  return (
    <div className={styles.route}>
      <h1>One</h1>
    </div>
  );
};
const Two = () => {
  return (
    <div className={`${styles.route} ${styles.two}`}>
      <h1>Two</h1>
    </div>
  );
};
const Three = () => {
  return (
    <div className={`${styles.route} ${styles.three}`}>
      <h1>Three</h1>
    </div>
  );
};

const Main = () => {
  const location = useLocation();
  const transition = useTransition(
    location,
    {
      from: {opacity: 0, width: '100%', transform: 'translate3d(100%, 0%, 0)'},
      enter: {opacity: 1, transform: 'translate3d(0%, 0%, 0)'},
      leave: {opacity: 0, transform: 'translate3d(0%, 0%, 0)'},
    }
  );

  return transition((style, location) => (
    <animated.div style={style} className={styles.absolute}>
      <Routes location={location}>
        <Route path="/" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </Routes>
    </animated.div>
  ));
}

export const RoutesWrapper = () => {
  return (
    <div className={styles.routesWRapper}>
      <Router basename={basename}>
        <ul className={styles.routerNav}>
          <li><Link to="/">One</Link></li>
          <li><Link to="/two">Two</Link></li>
          <li><Link to="/three">Three</Link></li>
        </ul>
        <Main />
      </Router>
    </div>
  );
};