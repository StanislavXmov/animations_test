import { useSpring, animated} from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import styles from './Header.module.scss';

interface HeaderProps {
  toggle: () => void;
};

export const Header = ({toggle}: HeaderProps) => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture({
    onDrag: (props) => {
      const { down, movement: [x, y], event } = props;
      event.preventDefault();
      set.start({xy: down ? [x, y] : [0, 0]});
    },
  });
  return (
    <header className={styles.Header}>
      <div>
        <animated.img 
          src="./xmov_icon.svg" 
          className={styles.avatar} 
          alt="logo icon" 
          {...bind()} 
          style={{
            transform: xy.to((x, y) => `translate3d(${x}px, ${y}px, 0)`),
          }}
        />
      </div>
      <button 
        className={styles.menuButton}
        onClick={() => toggle()}
      >
        Menu
      </button>
    </header>
  );
};
