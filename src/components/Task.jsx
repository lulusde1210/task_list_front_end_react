import './Task.css';

const Task = ({ id, title, description, isComplete, deleteTask, toggleIsComplete }) => {
  const styles = {
    textDecoration: isComplete ? 'line-through' : 'none',
  };

  const handleMarkComplete = () => {
    toggleIsComplete(id);
  };

  const handleDeleteTask = () => {
    deleteTask(id);
  };

  return (
    <div className='Task'>
      <h1 style={styles}>{title}</h1>
      <p style={styles}>{description}</p>
      <div className='buttons'>
        <button onClick={handleMarkComplete}>DONE</button>
        <button onClick={handleDeleteTask}>DELETE</button>
      </div>
    </div >
  );
};

export default Task;
