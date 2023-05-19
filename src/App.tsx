import { useCallback, useState } from 'react';
import { Header } from './components/Header';

import styles from './App.module.scss';
import { Aside } from './components/Checkout';
import { RoutesWrapper } from './components/Routes';
import { Modal } from './components/Modal';
import { Waypoints } from './components/Waypoint';


function App() {
  const [isAsideOpen, setIsAsadeOpen] = useState(false);

  const asideToogle = useCallback(() => {
    setIsAsadeOpen(prev => !prev);
  }, [setIsAsadeOpen]);
  
  return (
    <div className={styles.app}>
      <Header toggle={asideToogle} />
      <Aside isOpen={isAsideOpen} />
      <Modal />
      <RoutesWrapper />
      <Waypoints />
    </div>
  );
}

export default App;
