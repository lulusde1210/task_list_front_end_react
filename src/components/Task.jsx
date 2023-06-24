import './Task.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';

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
      <Checkbox
        checked={isComplete}
        onChange={handleMarkComplete}
        inputProps={{ 'aria-label': 'controlled' }}
        sx={{
          color: '#f5ba13',
          '&.Mui-checked': {
            color: '#f5ba13',
          },
        }} />
      <button id='delete-task' onClick={handleDeleteTask}><DeleteIcon /></button>
    </div >
  );
};

// Task.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   isComplete: PropTypes.bool.isRequired,
//   deleteTask: PropTypes.func.isRequired,
//   toggleIsComplete: PropTypes.func.isRequired,
// };


export default Task;
