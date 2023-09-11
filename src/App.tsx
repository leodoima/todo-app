import { CreateTask } from "./components/CreateTask";
import { Tasks } from "./components/Tasks";
import { Header } from "./components/Header";

import "./App.modules.css";

function App() {

  return (
    <>
      <Header />
      <div className="contentPage">
        <CreateTask />
        <Tasks />
      </div>
    </>
  )
}

export default App;
