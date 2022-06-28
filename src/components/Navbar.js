import React from 'react';
//ROUTER
import { Link } from 'react-router-dom';
//HOOKS
import { useLogOut } from '../hooks/useLogOut';
import { useAuthContext } from '../hooks/useAuthContext';
//STYLES
import styles from './Navbar.module.css';


const Navbar = () => {
    //STATE & VARIABLES
    const { logout } = useLogOut(); 
    const { user } = useAuthContext();

    return(
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>myMoney</li>

                {!user && (
                    <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                    </>
                )}

                {user && (
                    <>
                    <li>Hello, {user.displayName}</li>
                    <li>
                        <button className='btn' onClick={logout}>Log Out</button>
                    </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;