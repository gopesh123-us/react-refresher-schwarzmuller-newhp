import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My ToDos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Master Next.js" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
