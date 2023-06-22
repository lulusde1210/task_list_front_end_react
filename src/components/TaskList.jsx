import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks, deleteTask, toggleIsComplete }) => {
  return (
    <div className='TaskList'>
      {tasks.map((task) =>
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          isComplete={task.isComplete}
          deleteTask={deleteTask}
          toggleIsComplete={toggleIsComplete}
        />
      )}
    </div>
  )
};

export default TaskList;
