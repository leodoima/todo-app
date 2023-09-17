import { CreateTask } from "./components/createTask/CreateTask";
import { Tasks } from "./components/tasks/Tasks";
import { Header } from "./components/header/Header";
import { NoContentTasks } from "./components/noContentTasks/NoContentTasks";
import { Counters } from "./components/counters/Counters";

import "./App.modules.css";

export interface TasksType {
  id: string,
  description: string,
  isResolved: boolean
}

const tasks: TasksType[] = [];

function App() {

  return (
    <>
      <Header />

      <div className="contentPage">
        <CreateTask />
        <Counters />

        {(tasks.length === 0) ? <NoContentTasks /> : tasks.map(task => {
          return (
            <Tasks
              key={task.id}
              description={task.description}
              isResolved={task.isResolved} />);
        })}
      </div>
    </>
  )
}

export default App;
