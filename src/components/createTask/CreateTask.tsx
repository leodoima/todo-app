import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './CreateTask.module.css';
import { PlusCircle } from "@phosphor-icons/react";
import { v4 as uuidv4 } from 'uuid';


interface ITask {
    id: string,
    description: string,
    isResolved: boolean
}


function CreateTask() {
    const [tasks, setTasks] = useState<ITask[]>([]);
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

        setTasks([...tasks, newTask]);
        setNewTaskText('');
    }


    return (
        <form onSubmit={handlewCreateNewTask} className={styles.createTask}>
            <input
                placeholder='Adicione uma nova tarefa'
                onChange={handleNewTaskText}
                type=''
                value={newTaskText}
            />
            <button type='submit'>
                <p>Criar</p>
                <PlusCircle size={16} weight="bold" />
            </button>
        </form>
    );
}

export { CreateTask };