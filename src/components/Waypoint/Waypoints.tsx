import { useState } from 'react';
import { useSpring, animated, config} from '@react-spring/web';
import { Waypoint } from 'react-waypoint';
import styles from './Waypoints.module.scss';

export const Waypoints = () => {
  const [onRight, toggleRight] = useState(false);
  const animationRight = useSpring({
    opacity: onRight ? 1 : 0,
    transform: onRight ? 'translate3d(0%, 0, 0)' : 'translate3d(50%, 0, 0)',
    config: config.molasses,
  });

  const [onLeft, toggleLeft] = useState(false);
  const animationLeft = useSpring({
    opacity: onLeft ? 1 : 0,
    transform: onLeft ? 'translate3d(0%, 0, 0)' : 'translate3d(-50%, 0, 0)',
    config: config.molasses,
  });

  return (
    <div className={styles.waypoints}>
      <div className={styles.tempBlock} />
      <div className={styles.tempBlock} />
      <div>
        <Waypoint
          bottomOffset={'30%'}
          onEnter={() => {if(!onRight) toggleRight(true)}}
        />
        <animated.p style={animationRight} className={styles.animBlock}>
          right
        </animated.p>
      </div>
      <div className={styles.tempBlock} />
      <div className={styles.tempBlock} />
      <div>
        <Waypoint
          bottomOffset={'30%'}
          onEnter={() => {if(!onLeft) toggleLeft(true)}}
        />
        <animated.p style={animationLeft} className={styles.animBlock}>
          left
        </animated.p>
      </div>
      <div className={styles.tempBlock} />
      <div className={styles.tempBlock} />
    </div>
  )
}
