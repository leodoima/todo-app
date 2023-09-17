import styles from './Counters.module.css';

function Counters() {
    return (
        <div className={styles.content}>
            <div>
                <p>Tarefas criadas<span>0</span></p>
                <p>Concluídas<span>0</span></p>
            </div>
        </div>
    );
}

export { Counters };