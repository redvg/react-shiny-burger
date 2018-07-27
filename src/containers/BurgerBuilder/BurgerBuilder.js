import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import Composer from '../../components/Burger/Composer/Composer';
import Modal from '../../components/UI/Modal/Modal';
import Order from '../../components/Burger/Order/Order';

const INGREDIENT_PRICES = {

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

        wasPurchased: false
    }    

    ingredientCountChangedHandler = (ingredient, isIncreased) => {        

        if (!isIncreased && this.state.ingredients[ingredient] === 0){

            return;
        }

        const ingredientsRef = {...this.state.ingredients};

        this.setState({isUpdated: true});

        ingredientsRef[ingredient] += isIncreased ? 1 : -1;

        const newPrice = Object.keys(INGREDIENT_PRICES)
                        .map(el => {return {'count':ingredientsRef[el], 'price':INGREDIENT_PRICES[el]}; })
                        .reduce((cum, el) => cum + el.count*el.price, 0);

        this.setState({ingredients: ingredientsRef, price: newPrice})
    }

    purchaseHandler = () => {

        this.setState({wasPurchased: true});
    }

    cancelHandler = () => {

        this.setState({wasPurchased: false});
    }

    confirmHandler = () => {

        alert('+');
    }

    render () {

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <Composer ingredientClickHandler={(a, b) => this.ingredientCountChangedHandler.bind(this, a, b)}
                          purchaseClickHandler={() => this.purchaseHandler}
                          price={this.state.price}/>
                <Modal isShow={this.state.wasPurchased}
                       cancelClickHandler={this.cancelHandler}>
                    <Order ingredients={this.state.ingredients}
                           price={this.state.price} 
                           cancelClickHandler={this.cancelHandler}
                           confirmClickHandler={this.confirmHandler} />
                </Modal>
            </Aux>
        );
    }
}

export default BurgerBuilder;