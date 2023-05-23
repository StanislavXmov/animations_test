import React, { useCallback, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

import styles from './List.module.scss';

const data = [
  {id: 0, item: '1', isActive: true},
  {id: 1, item: '2', isActive: true},
  {id: 2, item: '3', isActive: true},
  {id: 3, item: '4', isActive: true},
  {id: 4, item: '5', isActive: true},
  {id: 5, item: '6', isActive: true},
];


export const List = () => {
  const [items, setItems] = useState(data);
  const transition = useTransition(
    items,
    {
      from: {opacity: 0, transform: 'translate3d(100%, 0%, 0)'},
      enter: {opacity: 1, transform: 'translate3d(-50%, 0%, 0)'},
      leave: {opacity: 0, transform: 'translate3d(-100%, 0%, 0)'},
    }
  );

  const changeHandler = useCallback((i: number) => {
    setItems(state => state.filter(item => item.id !== i));
  }, [items, setItems]);

  return (
    <div className={styles.listWrapper}>
      <ul className={styles.list} style={{height: `${items.length * 92}px`}}>
        {transition((style, item, _, i) => (
          item.isActive &&
        <animated.li 
          style={{...style, top: `${i * 92}px`}}  
          className={styles.item} 
        >
          {item.item}
          <button 
            className={styles.closeButton}
            onClick={() => changeHandler(item.id)}
          >X</button>
        </animated.li>))}
      </ul>
    </div>
  )
}
