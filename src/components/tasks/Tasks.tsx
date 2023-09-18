import { Trash } from "@phosphor-icons/react";
import styles from './Tasks.module.css';
import { TaskType } from '../../App.tsx';

function Tasks({ id, description, isResolved }: TaskType) {
    return (
        <div className={styles.content} key={id}>

            <input type="checkbox" checked={isResolved} />
            <p>{description}</p>
            <div className={styles.trash}>
                <Trash size={20} weight="bold" />
            </div>

        </div>
    );
}

export { Tasks };