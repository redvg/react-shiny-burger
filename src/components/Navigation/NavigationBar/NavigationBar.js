import React from 'react';
import styles from './NavigationBar.css';
//import NavigationItem from './NavigationItem/NavigationItem';
import {Link} from 'react-router-dom';

const navigationBar = () =>
    <ul className={styles.NavigationBar}>
        <Link to='/'>builder</Link>
        <Link to='/checkout'>checkout</Link>
        {/*<NavigationItem link ='/' isActive>builder</NavigationItem>
        <NavigationItem link='/checkout'>checkout</NavigationItem>*/}
    </ul>


export default navigationBar;