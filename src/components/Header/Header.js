import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import logo from '../../assets/images/logo.png'
import './Header.css';

export const Header = () => {
    const [searchKey, setSearchKey] = useState('');

    const handleChange = (event) => {
        setSearchKey(event.target.value);
    };

    return (
        <div className="header">
            <img className="logo" src={logo} width="150" alt='logo' />
            <TextField className="search" style={{ width: '500px', marginLeft: '300px' }} id="outlined-basic"
                label="Type a thing to search..." 
                variant="outlined" 
                value={searchKey}
                onChange={handleChange} />
        </div>
    );
}