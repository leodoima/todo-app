import styles from './Counters.module.css';

function Counters() {
    return (
        <div className={styles.content}>
            <div>
                <p>Tarefas criadas<span>12</span></p>
                <p>Concluídas<span>8</span></p>
            </div>
        </div>
    );
}

export { Counters };