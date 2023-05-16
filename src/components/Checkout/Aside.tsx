import { useSpring, animated, config} from '@react-spring/web';
import styles from './Aside.module.scss';

interface AsideProps {
  isOpen: boolean;
}

export const Aside = (props: AsideProps) => {
  const { isOpen } = props;
  const { x } = useSpring({ 
    x: isOpen ? 0 : 100,
    config: config.wobbly
  });
  return (
    <div 
      className={styles.Aside}
      style={{
        pointerEvents: isOpen ? 'all' : 'none'
      }}
    >
      <animated.div 
        className={styles.left} 
        style={{
          transform: x.to(x => `translate3d(${x * -1}%, 0, 0)`)
        }}
      >LEFT</animated.div>
      <animated.div 
        className={styles.right} 
        style={{
          transform: x.to(x => `translate3d(${x}%, 0, 0)`)
        }}
      >RIGHT</animated.div>
    </div>
  )
}
