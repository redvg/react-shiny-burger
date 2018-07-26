import React from 'react';
import styles from './Modal.css';

const modal = (props) => 
    <div className={styles.Modal}
         style={{
             transform: props.isShow ? 'translateY(0)' : 'translateY(-100vh)',
             opacity: props.isShow ? '1': ''
         }}>
        {props.children}
    </div>

export default modal;