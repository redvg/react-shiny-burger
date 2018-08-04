import React from 'react';
import styles from './Summary.css';
import Button from '../../UI/Button/Button';
import Burger from '../../Burger/Burger';


const summary = (props) =>
    <div className={styles.Summary}>
        <h1>summary</h1>
        <div>
            <Burger className={styles.Burger} 
                    ingredients={props.ingredients? props.ingredients : {}} />
        </div>
        <Button buttonType='Danger' 
                clickHandler={props.cancelHandler}>
            cancel 
        </Button>
        <Button buttonType='Success'
                clickHandler={props.purchaseHandler}>
            buy
        </Button>
    </div>

export default summary;