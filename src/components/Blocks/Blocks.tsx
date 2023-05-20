import { useState } from 'react';
import { animated, useSpringRef, useSpring, useChain, useTransition } from '@react-spring/web';
import styles from './Blocks.module.scss';

const items = [1, 2, 3, 4, 5, 6, 7, 8];


export const Blocks = () => {
  const [on, toggle] = useState(false);

  const springRef = useSpringRef();
  const transitionRef = useSpringRef();

  const { size } = useSpring({
    ref: springRef,
    from: {size: '20%'},
    to: {size: on ? '100%' : '20%'},
  });

  const transition = useTransition(on ? items : [], {
    ref: transitionRef,
    trail: 400 / items.length,
    from: {
      opacity: 0,
      // transform: 'scale(0)',
    },
    enter: {
      opacity: 1,
      // transform:'scale(1)',
    },
    leave: {
      opacity: 0,
      // transform: 'scale(0)',
    },
  });

  useChain(on ? [springRef, transitionRef] : [transitionRef, springRef]);

  return (
    <div className={styles.fullHeight}>
      <animated.div style={{width: size, height: size}} className={styles.boxesGridTwo} onClick={() => toggle(prev => !prev)}>
        {!on && <h2 className={styles.title}>click</h2>}
        {transition((style, item) => <animated.div style={style} className={styles.boxTwo} >{item}</animated.div>)}
      </animated.div>
    </div>
  )
}
