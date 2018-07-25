import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import Composer from '../../components/Burger/Composer/Composer';


class BurgerBuilder extends Component{

    state = {
        
        ingredients: {

            salad: 0,

            cheese: 0,

            meat: 0,

            bacon: 0,
        },
    }

    ingredientCountChangedHandler = (ingredient, isIncreased) => {

        const ingredientsRef = {...this.state.ingredients};

        ingredientsRef[ingredient] += isIncreased ? 1 : ingredientsRef[ingredient] > 0 ? -1 : 0;

        this.setState({ingredients: ingredientsRef})
    } 

    render () {

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <Composer clickHandler={(a, b) => this.ingredientCountChangedHandler.bind(this, a, b)}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;