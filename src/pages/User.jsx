import React from 'react';
import { useLocation } from 'react-router-dom';

const User = () => {
    const location = useLocation();
    const username = new URLSearchParams(location.search).get('username');

    return (
        <div className='container'>
            <p>Welcome {username}</p>
        </div>
    )
};

export default User;