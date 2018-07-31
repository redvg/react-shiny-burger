import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import Composer from '../../components/Burger/Composer/Composer';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import Order from '../../components/Burger/Order/Order';
import axios from '../../axiosForOrders';

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

        wasPurchased: false,

        isLoading: false
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

        this.setState({isLoading: true});

        axios.post('/orders.json', this.state.ingredients)
        .then(response=>{

            this.setState({isLoading: false});

            console.log(response);
        })
        .catch(error => {

            this.setState({isLoading: false});

            console.log(error)
        });
    }

    render () {

        let order = null;

        if (this.state.isLoading){

            order = <Spinner />;       
        }

        else {

            order = <Order ingredients={this.state.ingredients}
                           price={this.state.price} 
                           cancelClickHandler={this.cancelHandler}
                           confirmClickHandler={this.confirmHandler} />;
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <Composer ingredientClickHandler={(a, b) => this.ingredientCountChangedHandler.bind(this, a, b)}
                          purchaseClickHandler={() => this.purchaseHandler}
                          price={this.state.price}/>
                <Modal isShow={this.state.wasPurchased}
                       cancelClickHandler={this.cancelHandler}>
                       {order}                    
                </Modal>
            </Aux>
        );
    }
}

export default BurgerBuilder;