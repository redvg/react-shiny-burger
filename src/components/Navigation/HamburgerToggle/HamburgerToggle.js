import React from 'react';
import styles from './HamburgerToggle.css';

const hambugerToggle = (props) => 
    <div onClick={props.clickHandler}
         className={styles.HamburgerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>

export default hambugerToggle;