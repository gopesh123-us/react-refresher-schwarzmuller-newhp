import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const onCancelHandler = () => {
    setIsModalOpen(false);
  };

  const onConfirmHandler = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={handleClick}>
            Delete
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Modal onCancel={onCancelHandler} onConfirm={onConfirmHandler} />
      )}
      {isModalOpen && <Backdrop onClick={closeModalHandler} />}
    </>
  );
}

export default Todo;
