import './Header.css';
import React from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
const Header = () => {
    return (
        <header className="Header">
            <h1><AddTaskIcon />Task Keeper</h1>
        </header>
    );
};


export default Header;
