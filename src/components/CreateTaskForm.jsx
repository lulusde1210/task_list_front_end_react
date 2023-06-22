import { useState } from "react";
import './CreateTaskForm.css';

function CreateTaskForm({ addTask }) {
    const [formData, setFormData] = useState({ title: '', description: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => {
            return { ...prevFormData, [name]: value }
        })
    };

    const handleAddTask = (event) => {
        event.preventDefault();
        addTask(formData);
        setFormData({ title: '', description: '' })
    };

    return (
        <div>
            <form className="create-task">
                <input
                    name="title"
                    placeholder="Task Title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    placeholder="Task description"
                    rows="3"
                    value={formData.description}
                    onChange={handleInputChange}

                />
                <button onClick={handleAddTask}>Add</button>
            </form>
        </div>
    );
}

export default CreateTaskForm;
