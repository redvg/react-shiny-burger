import React from 'react';
import styles from './Backdrop.css';

const backdrop = (props) => 
    props.isShow ? 
    <div className={styles.Backdrop} onClick={props.clickHandler}></div> 
    : null; 


export default backdrop;