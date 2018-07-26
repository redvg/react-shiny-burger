import React from 'react';
import styles from './Toolbar.css';

const toolbar = (props) =>
    <header className={styles.Toolbar}>
        <div>menu</div>
        <div>logo</div>
        <nav>
            ul goes here
        </nav>
    </header>


export default toolbar;