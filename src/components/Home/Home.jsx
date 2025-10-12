import React, { use } from 'react';
import Login from '../Login/Login';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Home = () => {
    const authInfo = use(AuthContext);
    console.log(authInfo);
    return (
        <div>
            <h2>This is Home</h2>
            
        </div>
    );
};

export default Home;