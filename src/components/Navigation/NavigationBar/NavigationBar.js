import React from 'react';
import styles from './NavigationBar.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationBar = () =>
    <ul className={styles.NavigationBar}>
        <NavigationItem path='/' title='builder'/>
        <NavigationItem path='/orders' title='orders'/>
    </ul>


export default navigationBar;