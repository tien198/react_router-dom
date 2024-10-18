import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './MainNavigation.module.css'

const urlList = [
    { url: '/', linkName: 'Home' },
    { url: '/products', linkName: 'Products' },
]
function MainNavigation(props) {
    return (
        <header className={styles['header']}>
            <nav>
                <ul className={styles['list']}>
                    {urlList.map((u, i) => (
                        <li key={i}>
                            <NavLink to={u.url}
                                className={({ isActive }) => isActive ? styles['active'] : undefined} >
                                {u.linkName}
                            </NavLink>
                        </li>))}
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;