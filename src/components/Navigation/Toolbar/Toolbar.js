import React from 'react';
import styles from './Toolbar.css';
import Logo from '../Logo/Logo';

const toolbar = (props) =>
    <header className={styles.Toolbar}>
        <div>menu</div>
        <Logo />
        <nav>
            ul goes here
        </nav>
    </header>


export default toolbar;