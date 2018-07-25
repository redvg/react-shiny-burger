import React from 'react';
import styles from './Composer.css';
import ComposerItem from './ComposerItem/ComposerItem';
import shortid from 'short-id';

const ingredients = [
    'meat',
    'cheese'
];

const composer = (_) => 
    <div className={styles.Composer}>
        {ingredients.map(el => <ComposerItem key={shortid.generate()} label={el} />)}
    </div>

export default composer;