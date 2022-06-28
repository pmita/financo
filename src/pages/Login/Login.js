import React, { useState } from 'react';
//HOOKS
import { useLogin } from '../../hooks/useLogin';
//STYLES
import styles from './Login.module.css';

const Login = () => {
    //STATE & VARIABLES
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, isPending, login } = useLogin();

    //EVENTS
    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
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
                />
            </label>
            <label>
                <span>Password</span>
                <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            {!isPending && <button className='btn'>Login</button>}
            {isPending && <button className='btn' disabled>Loading...</button>}
            {error && <p>{error}</p>}
        </form>
    );
}

export default Login;