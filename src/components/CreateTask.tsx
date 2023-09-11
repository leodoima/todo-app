import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './CreateTask.module.css';
import { PlusCircle } from "@phosphor-icons/react";


interface ITask {
    id: number,
    description: string,
    resolved: boolean
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
            id: tasks.length + 1,
            description: newTaskText,
            resolved: false
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