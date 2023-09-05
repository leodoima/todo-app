import styles from './Header.module.css';
import rocketLogo from '../assets/rocket-logo.svg';

function Header() {
    return (
        <header className={styles.header}>
            <img src={rocketLogo} alt="logotipo" />
            <div className={styles.description}>
                <p className={styles.first}>to</p>
                <p className={styles.last}>do</p>
            </div>
        </header>
    )
}

export default Header;
