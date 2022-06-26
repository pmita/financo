import React, { useState } from 'react';
//STYLES
import styles from './Login.module.css';

const Login = () => {
    //STATE & VARIABLES
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //EVENTS
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }

    return(
        <form className={styles['login-form']} onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
                <span>Email</span>
                <input
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
            </label>
            <label>
                <span>Password</span>
                <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
            </label>
            <button className='btn'>Login</button>
        </form>
    );
}

export default Login;