import styles from './Header.module.scss';

interface HeaderProps {
  toggle: () => void;
};

export const Header = ({toggle}: HeaderProps) => {

  return (
    <header className={styles.Header}>
      <div>
        <img src="./xmov_icon.svg" alt="logo icon" />
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
