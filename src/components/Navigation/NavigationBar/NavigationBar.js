import React from 'react';
import styles from './NavigationBar.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationBar = () =>
    <ul className={styles.NavigationBar}>
        <NavigationItem link ='/' isActive>here</NavigationItem>
        <NavigationItem link='/'>there</NavigationItem>
    </ul>


export default navigationBar;