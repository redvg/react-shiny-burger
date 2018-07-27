import React from 'react';
import styles from './Toolbar.css';
import Logo from '../Logo/Logo';
import NavigationBar from '../NavigationBar/NavigationBar';
import Button from '../../UI/Button/Button';

const toolbar = (props) =>
    <header className={styles.Toolbar}>
        <Button clickHandler={props.sidedrawerOpenedHandler}>
            menu
        </Button>        
        <div className={styles.Logo}>
            <Logo />
        </div>        
        <nav className={styles.DesktopOnly}>
            <NavigationBar/>
        </nav>
    </header>


export default toolbar;