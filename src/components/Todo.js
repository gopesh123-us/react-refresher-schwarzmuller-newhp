function Todo(props) {
  const handleClick = () => {
    return <></>;
  };
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
