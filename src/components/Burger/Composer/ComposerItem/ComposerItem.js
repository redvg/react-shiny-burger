import React from 'react';
import styles from './ComposerItem.css';

const composerItem = (props) =>
    <div className={styles.ComposerItem}>
        <div className={styles.Label}>
            {props.label}
        </div>
        <button className={styles.Add}>
            +
        </button>
        <button className={styles.Remove}>
            -
        </button>
    </div>

export default composerItem;