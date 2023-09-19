import styles from './Counters.module.css';

interface CountersProps {
    totalTasks: number,
    checkedTasks: number
}

function Counters({ totalTasks, checkedTasks }: CountersProps) {
    return (
        <div className={styles.content}>
            <div>
                <p>Tarefas criadas<span>{totalTasks}</span></p>
                <p>Concluídas<span>{checkedTasks}</span></p>
            </div>
        </div>
    );
}

export { Counters };