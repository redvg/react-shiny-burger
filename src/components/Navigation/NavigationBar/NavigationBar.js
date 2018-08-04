import React from 'react';
import styles from './NavigationBar.css';
import {Link} from 'react-router-dom';

const navigationBar = () =>
    <ul className={styles.NavigationBar}>
        <Link to='/'>builder</Link>
        <Link to='/orders'>orders</Link>
    </ul>


export default navigationBar;