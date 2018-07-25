import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Ingredient extends Component {

    render () {

        let ingredient = null;

        switch (props.ingredient){
    
            case 'breadBottom':
    
                ingredient = <div className={classes.BreadBottom}></div>;
    
                break;
    
            case 'breadTop':
    
                ingredient = 
                    <div>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>;
    
                break;
    
            case 'meat':
    
                ingredient = <div className={classes.BreadBottom}></div>;
    
                break;
    
            case 'cheese':
    
                ingredient = <div className={classes.Cheese}></div>;
    
                break;
    
            case 'bacon':
    
                ingredient = <div className={classes.Bacon}></div>;
    
                break;
    
            case 'salad':
    
                ingredient = <div className={classes.salad}></div>;
    
                break;
        }
    
        return ingredient;
    }
}

Ingredient.propTypes = {

    ingredient: PropTypes.string.isRequired
}

export default Ingredient;