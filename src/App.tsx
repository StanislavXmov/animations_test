import { useCallback, useState } from 'react';
import { Header } from './components/Header';

import styles from './App.module.scss';
import { Aside } from './components/Checkout';


function App() {
  const [isAsideOpen, setIsAsadeOpen] = useState(false);

  const asideToogle = useCallback(() => {
    setIsAsadeOpen(prev => !prev);
  }, [setIsAsadeOpen]);
  
  return (
    <div className={styles.app}>
      <Header toggle={asideToogle} />
      <Aside isOpen={isAsideOpen} />
    </div>
  );
}

export default App;
