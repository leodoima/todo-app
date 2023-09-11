import { Counters } from './Counters';
import styles from './Tasks.module.css';

function Tasks() {
    return (
        <div className={styles.content}>
            <Counters />
        </div>
    );
}

export { Tasks };