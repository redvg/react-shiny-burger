import React from 'react';
import styles from './NavigationItem.css';
import {NavLink} from 'react-router-dom';

const navigationItem = (props) =>
    <li className={styles.NavigationItem}>
        <NavLink to={props.path}>{props.title}</NavLink>
    </li>


export default navigationItem;