import { ChangeEvent, MouseEvent } from "react";
import { Trash } from "@phosphor-icons/react";

import { TaskType } from '../../App.tsx';

import styles from './Tasks.module.css';

interface TaskProps {
    taskType: TaskType,
    onDeleteTask: (id: string) => void
    onChangeStatusTask: (id: string, status: boolean) => void
}

function Tasks({ taskType, onDeleteTask, onChangeStatusTask }: TaskProps) {


    function handlewChangeStatusTask(event: ChangeEvent<HTMLInputElement>) {
        const idTask = event.target.id;
        const statusTask = event.target.checked;

        onChangeStatusTask(idTask, statusTask);
    }

    function handleDeleteTask(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault;
        onDeleteTask(event.currentTarget.id);
    }

    return (
        <div className={styles.content}>

            <input id={taskType.id} type="checkbox" checked={taskType.isResolved} onChange={handlewChangeStatusTask} />

            {(taskType.isResolved) ? <s>{taskType.description}</s> : <p>{taskType.description}</p>}

            <button id={taskType.id} className={styles.trash} onClick={handleDeleteTask}>
                <Trash size={20} weight="bold" />
            </button>
        </div>
    );
}

export { Tasks };