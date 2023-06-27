import { useState } from "react";
import './CreateTaskForm.css';
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from '@mui/material';

function CreateTaskForm({ addTask }) {
    const [formData, setFormData] = useState({ title: '', description: '' });
    const [isExpanded, setExpanded] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (value) {
            setIsValid(true)
        }
        setFormData((prevFormData) => {
            return { ...prevFormData, [name]: value }
        })
    };

    const handleAddTask = (event) => {
        event.preventDefault();
        if (formData.title.trim().length === 0 || formData.description.trim().length === 0) {
            setIsValid(false);
            return;
        }
        addTask(formData);
        setFormData({ title: '', description: '' })
    };

    return (
        <div>
            <form className="create-task">
                {isExpanded &&
                    <input
                        name="title"
                        placeholder={"Task Title"}
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                }
                <textarea
                    onClick={() => setExpanded(true)}
                    name="description"
                    placeholder={isExpanded ? 'Task Content' : 'Create a task'}
                    rows={isExpanded ? '3' : '1'}
                    value={formData.description}
                    onChange={handleInputChange}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={handleAddTask}><AddIcon /></Fab>
                </Zoom>
            </form>
            {!isValid && <p className="not-valid-message">❗️Oh,no! Your task is not complete!</p>}
        </div>
    );
}

export default CreateTaskForm;
