import { useState } from "react";
import { Reorder } from "framer-motion"

import { CreateTask, NewTask } from "./components/createTask/CreateTask";
import { Tasks } from "./components/tasks/Tasks";
import { Header } from "./components/header/Header";
import { NoContentTasks } from "./components/noContentTasks/NoContentTasks";
import { Counters } from "./components/counters/Counters";

import "./App.modules.css";

export interface TaskType {
  id: string,
  description: string,
  isResolved: boolean
}

function App() {

  const [tasks, setTasks] = useState<TaskType[]>([]);
  const hasTasks = tasks.length > 0;


  function deleteTask(deleteTask: string) {
    const tasksWithoutDeletedTask = tasks.filter(task => {
      return task.id != deleteTask;
    });

    setTasks(tasksWithoutDeletedTask);
  }


  function createTask(newTask: NewTask) {
    setTasks([...tasks, newTask]);
  }

  function changeStatusTask(id: string, status: boolean) {
    const newTasksWithChangeStatus = tasks.map(task => {
      if (task.id == id) {
        task.isResolved = status;
        return task;
      }
      return task;
    });

    setTasks(newTasksWithChangeStatus);
  }

  return (
    <>
      <Header />

      <div className="contentPage">
        <CreateTask onCreateTask={createTask} />
        <Counters totalTasks={tasks.length} checkedTasks={tasks.filter(task => task.isResolved == true).length} />


        {hasTasks ? (
          <Reorder.Group axis="y" as="ul" values={tasks} onReorder={setTasks}>
            {tasks.map(task => (

              <Reorder.Item key={task.id} value={task}>
                <Tasks
                  key={task.id}
                  taskType={task}
                  onDeleteTask={deleteTask}
                  onChangeStatusTask={changeStatusTask}
                />
              </Reorder.Item>

            ))}
          </Reorder.Group>
        ) : (
          <NoContentTasks />
        )}

      </div >
    </>
  )
}

export default App;
