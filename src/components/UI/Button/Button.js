import React from 'react';
import styles from './Button.css';

const button = (props) =>
    <button onClick={props.clickHandler}
            className={[styles.Button, styles[props.buttonType]].join(' ')}>
        {props.children}
    </button>

export default button;