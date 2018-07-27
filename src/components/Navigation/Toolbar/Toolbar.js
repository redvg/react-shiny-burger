import React from 'react';
import styles from './Toolbar.css';
import Logo from '../Logo/Logo';
import NavigationBar from '../NavigationBar/NavigationBar';

const toolbar = (props) =>
    <header className={styles.Toolbar}>
        <div>menu</div>        
        <div className={styles.Logo}>
            <Logo />
        </div>        
        <nav className={styles.DesktopOnly}>
            <NavigationBar/>
        </nav>
    </header>


export default toolbar;