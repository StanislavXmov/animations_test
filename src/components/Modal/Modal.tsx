import { useState, MouseEvent } from 'react';
import { useTransition, useSpring, animated, SpringValue } from '@react-spring/web';

import styles from './Modal.module.scss';

interface ModalProps {
  closeModal: () => void;
  animationModal: {
    opacity: SpringValue<number>;
    transform: SpringValue<string>;
  }
  animationBg: {
    opacity: SpringValue<number>;
  }
}

export const Modal = ({closeModal, animationModal, animationBg}: ModalProps) => {
  const stopHandler = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.stopPropagation();
  }
  return (
    <animated.div style={animationBg} className={styles.modal} onClick={closeModal}>
      <animated.div style={animationModal} className={styles.modalCard} onClick={(e => stopHandler(e))}>
        <h1>Modal</h1>
        <img 
          src="./xmov_icon.svg" 
          className={styles.avatar} 
          alt="logo icon" 
        />
        <button className={styles.closeButton} onClick={closeModal}>close</button>
      </animated.div>
    </animated.div>
  )
}

export const ModalWrapper = () => {
  const [on, toggle] = useState(false);
  const transition = useTransition(on, {
    from: {opacity: 0, transform: 'translate3d(0, -200px, 0)'},
    enter: {opacity: 1, transform: 'translate3d(0, 0px, 0)'},
    leave: {opacity: 0, transform: 'translate3d(0, 200px, 0)'},
  });
  const animationBg = useSpring({
    opacity: on ? 1 : 0,
  });
  return (
    <div>
      {transition((animation, on) => on && (
        <Modal 
          animationModal={animation} 
          animationBg={animationBg}
          closeModal={() => toggle(false)} 
        />
      ))}
      <button className={styles.openButton} onClick={() => toggle(prev => !prev)}>open modal</button>
    </div>
  )
}