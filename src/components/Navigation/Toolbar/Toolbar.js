import React from 'react';
import styles from './Toolbar.css';
import Logo from '../Logo/Logo';
import NavigationBar from '../NavigationBar/NavigationBar';
import HamburgerToggle from '../../Navigation/HamburgerToggle/HamburgerToggle';

const toolbar = (props) =>
    <header className={styles.Toolbar}>
        <div className={styles.MobileOnly}>
            <HamburgerToggle clickHandler={props.sidedrawerOpenedHandler} />
        </div>      
        <div className={styles.Logo}>
            <Logo />
        </div>        
        <nav className={styles.DesktopOnly}>
            <NavigationBar/>
        </nav>
    </header>


export default toolbar;