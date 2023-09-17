import styles from './NoContentTasks.module.css';
import { ClipboardText } from "@phosphor-icons/react";

function NoContentTasks() {
    return (
        <div className={styles.content}>
            <ClipboardText size={56} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    );
}

export { NoContentTasks };