import { Counters } from './Counters';
import { NoContentTasks } from './NoContentTasks';
import styles from './Tasks.module.css';

function Tasks() {
    return (
        <div className={styles.content}>
            <Counters />
            <NoContentTasks />
        </div>
    );
}

export { Tasks };