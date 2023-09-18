import { CreateTask, NewTask } from "./components/createTask/CreateTask";
import { Tasks } from "./components/tasks/Tasks";
import { Header } from "./components/header/Header";
import { NoContentTasks } from "./components/noContentTasks/NoContentTasks";
import { Counters } from "./components/counters/Counters";

import "./App.modules.css";
import { useState } from "react";

export interface TaskType {
  id: string,
  description: string,
  isResolved: boolean
}

function App() {

  const [tasks, setTasks] = useState<TaskType[]>([]);


  function deleteTask(deleteTask: string) {

    const tasksWithoutDeletedTask = tasks.filter(task => {
      return task.id != deleteTask;
    });

    setTasks(tasksWithoutDeletedTask);

  }


  function createTask(newTask: NewTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <Header />

      <div className="contentPage">
        <CreateTask onCreateTask={createTask} />
        <Counters />

        {(tasks.length === 0) ? <NoContentTasks /> : tasks.map(task => {
          return (
            <Tasks
              id={task.id}
              description={task.description}
              isResolved={task.isResolved}
              delete={deleteTask}
            />);
        })}
      </div>
    </>
  )
}

export default App;
