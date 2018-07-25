import React from 'react';
import styles from './ComposerItem.css';

const composerItem = (props) =>
    <div className={styles.ComposerItem}>
        <div className={styles.Label}>
            {props.label}
        </div>
        <button className={styles.Add} 
                onClick={props.clickHandler(props.label, true)}>
            +
        </button>
        <button className={styles.Remove}
                onClick={props.clickHandler(props.label, false)}>
            -
        </button>
    </div>

export default composerItem;