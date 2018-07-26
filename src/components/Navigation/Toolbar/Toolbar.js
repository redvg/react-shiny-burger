import React from 'react';
import styles from './Toolbar.css';
import Logo from '../Logo/Logo';
import NavigationBar from '../NavigationBar/NavigationBar';

const toolbar = (props) =>
    <header className={styles.Toolbar}>
        <div>menu</div>
        <Logo />
        <nav>
            <NavigationBar/>
        </nav>
    </header>


export default toolbar;