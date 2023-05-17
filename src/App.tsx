import { useCallback, useState } from 'react';
import { Header } from './components/Header';

import styles from './App.module.scss';
import { Aside } from './components/Checkout';
import { RoutesWrapper } from './components/Routes';


function App() {
  const [isAsideOpen, setIsAsadeOpen] = useState(false);

  const asideToogle = useCallback(() => {
    setIsAsadeOpen(prev => !prev);
  }, [setIsAsadeOpen]);
  
  return (
    <div className={styles.app}>
      <Header toggle={asideToogle} />
      <Aside isOpen={isAsideOpen} />
      <RoutesWrapper />
    </div>
  );
}

export default App;
