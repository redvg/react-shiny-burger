import React from 'react';
import styles from './Sidedrawer.css';
import Logo from '../Logo/Logo';
import NavigationBar from '../NavigationBar/NavigationBar';

const sidedrawer = () => {


    return(

        <div className={styles.Sidedrawer}>
            <Logo />
            <nav>
                <NavigationBar/>
            </nav>
        </div>
    );
}

export default sidedrawer;


