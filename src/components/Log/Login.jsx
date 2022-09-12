import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) =>{

    }
    return (
        <form action="" onSubmit={handleLogin} id="loginForm">
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name='email' id='email' onChange={(e) =>setEmail(e.target.value)} value={email}/>
            <br />
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input type="text" name='password' id='password' onChange={(e) =>setPassword(e.target.value)} value={password}/>
            <br />
            <input type="submit" value="connection" />
        </form>
    );
};

export default Login;