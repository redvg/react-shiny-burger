import React from 'react';
import styles from './Composer.css';
import ComposerItem from './ComposerItem/ComposerItem';
import shortid from 'short-id';


const composer = (props) => 
    <div className={styles.Composer}>
        {props.ingredients.map(el => <ComposerItem 
                                    key={shortid.generate()} 
                                    label={el.name} 
                                    clickHandler={props.ingredientClickHandler}/>)}
        <p>your shiny burger is worth {props.price.toFixed(2)}</p>
        <button className={styles.OrderButton}
                disabled={props.price === 0}
                onClick={props.purchaseClickHandler}>
            PURCHASE NOW!
        </button>
    </div>

export default composer;