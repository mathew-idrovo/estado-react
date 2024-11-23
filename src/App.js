import "./App.css";
import { ClassState } from "./classState";
import UseState from "./useState";

function App() {
  return (
    <div className="App">
      <UseState name="Use State" />
      <ClassState name="Class State" />
    </div>
  );
}

export default App;
