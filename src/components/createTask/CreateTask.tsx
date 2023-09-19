import { useState, ChangeEvent, FormEvent } from 'react';
import { PlusCircle } from "@phosphor-icons/react";
import { v4 as uuidv4 } from 'uuid';

import styles from './CreateTask.module.css';

export interface NewTask {
    id: string,
    description: string,
    isResolved: boolean
}


interface CreateTaskProps {
    onCreateTask: (task: NewTask) => void;
}


function CreateTask({ onCreateTask }: CreateTaskProps) {
    const [newTaskText, setNewTaskText] = useState('');


    function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value);
    }

    function handlewCreateNewTask(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const newTask = {
            id: uuidv4(),
            description: newTaskText,
            isResolved: false
        }

        onCreateTask(newTask);
        setNewTaskText('');
    }


    return (
        <form onSubmit={handlewCreateNewTask} className={styles.createTask}>
            <input
                placeholder='Adicione uma nova tarefa'
                onChange={handleNewTaskText}
                type=''
                value={newTaskText}
                required
            />
            <button type='submit'>
                <p>Criar</p>
                <PlusCircle size={16} weight="bold" />
            </button>
        </form>
    );
}

export { CreateTask };