import React from 'react';
import styles from './Composer.css';
import ComposerItem from './ComposerItem/ComposerItem';
import shortid from 'short-id';

const ingredients = [
    'meat',
    'cheese',
    'bacon',
    'salad'
];

const composer = (props) => 
    <div className={styles.Composer}>
        {ingredients.map(el => <ComposerItem 
                                    key={shortid.generate()} 
                                    label={el} 
                                    clickHandler={props.clickHandler}/>)}
        <p>your shiny burger is worth {props.price.toString()}</p>
    </div>

export default composer;