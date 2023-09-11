import styles from './Header.module.css';
import rocketLogo from '../assets/rocket-logo.svg';

function Header() {
    return (
        <header className={styles.content}>
            <img src={rocketLogo} alt="logotipo" />
            <div>
                <p>to</p>
                <p>do</p>
            </div>
        </header>
    )
}

export { Header };
