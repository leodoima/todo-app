import styles from './CreateTask.module.css';
import { PlusCircle } from "@phosphor-icons/react";

function CreateTask() {
    return (
        <div className={styles.createTask}>
            <input placeholder='Adicione uma nova tarefa' />
            <button>
                <p>Criar</p>
                <PlusCircle size={16} weight="bold" />
            </button>
        </div>
    );
}

export { CreateTask };