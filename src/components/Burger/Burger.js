import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import classes from './Burger.css';

const burger = (props) => {

    let parsedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <Ingredient key={igKey + i} ingredient={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        
    if (parsedIngredients.length === 0) {

        parsedIngredients = <p>Please start adding ingredients!</p>;
    }

    return <div className={classes.Burger}>
                <Ingredient ingredient="breadTop" />
                {parsedIngredients}
                <Ingredient ingredient="breadBottom" />
           </div>

}    

export default burger;