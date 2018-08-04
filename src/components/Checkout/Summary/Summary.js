import React from 'react';
import styles from './Summary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';


const summary = (props) =>
    <div className={styles.Summary}>
        <h1>summary</h1>
        <div>
            <Burger className={styles.Burger} 
                    ingredients={props.ingredients} />
        </div>
        <Button buttonType='Danger'>cancel</Button>
        <Button buttonType='Success'>buy</Button>
    </div>

export default summary;