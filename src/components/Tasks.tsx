import { Counters } from './Counters';
import { ListTasks } from './ListTasks';
import { NoContentTasks } from './NoContentTasks';
import styles from './Tasks.module.css';

function Tasks() {
    return (
        <div className={styles.content}>
            <Counters />
            <NoContentTasks />
            <ListTasks />
        </div>
    );
}

export { Tasks };