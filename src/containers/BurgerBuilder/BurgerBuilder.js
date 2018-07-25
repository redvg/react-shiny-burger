import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import Composer from '../../components/Burger/Composer/Composer';

const ingredientPrices = {

    salad: 5.5,

    cheese: 12.4,

    meat: 22.0,

    bacon: 8.9,
};

class BurgerBuilder extends Component{

    state = {
        
        ingredients: {

            salad: 0,

            cheese: 0,

            meat: 0,

            bacon: 0,
        },

        price: 0.0,

        isUpdated: true
    }    

    ingredientCountChangedHandler = (ingredient, isIncreased) => {        

        if (!isIncreased && this.state.ingredients[ingredient] === 0){

            this.setState({isUpdated: false});

            return;
        }

        const ingredientsRef = {...this.state.ingredients};

        this.setState({isUpdated: true});

        ingredientsRef[ingredient] += isIncreased ? 1 : -1;

        const newPrice = Object.keys(ingredientPrices)
                        .map(el => {return {'count':ingredientsRef[el], 'price':ingredientPrices[el]}; })
                        .reduce((cum, el) => cum + el.count*el.price, 0);

        this.setState({ingredients: ingredientsRef, price: newPrice})
    }

    ///shouldComponentUpdate = () => this.state.isUpdated;

    render () {

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <Composer clickHandler={(a, b) => this.ingredientCountChangedHandler.bind(this, a, b)}
                          price={this.state.price}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;