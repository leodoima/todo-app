import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";

import "./App.modules.css";

function App() {

  return (
    <>
      <Header />
        <div className="contentPage">
          <CreateTask></CreateTask>
        </div>
    </>
  )
}

export default App;
