import './App.css';
import { useSelector, useDispatch } from "react-redux";
import Authentication from './component/Authentication';
import Task from "./component/Task";
import TaskList from "./component/TaskList";
import {
  decrement,
  increment,
  reset
} from "./Redux/actions/index";


function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.todo);
  console.log(tasks);

  return (
    <>
     <div className='container'>
      <div className='counter_box'>
      <h3>{counter}</h3>
      <button className="btn btn-primary" onClick={() => dispatch(increment())}>Increase</button>
      <button className="btn btn-primary" onClick={() => dispatch(reset())}>Reset</button>
      <button className="btn btn-primary" onClick={() => dispatch(decrement())}>Decrease</button>
      </div>
      <Authentication/>
      <Task/>
      <TaskList/>
     
      </div>
    </>
  );
}

export default App;
