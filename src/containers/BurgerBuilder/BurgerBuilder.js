import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import withAxiosErrorHandler from '../../hoc/withAxiosErrorHandler/withAxiosErrorHandler';
import Burger from '../../components/Burger/Burger';
import Composer from '../../components/Burger/Composer/Composer';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axiosForOrders';


class BurgerBuilder extends Component{

    state = {

        ingredientPrices: null,

        ingredients: {},

        price: 0.0,

        isLoading: false
    }

    componentDidMount () {

        if (!this.state.ingredientPrices){

            axios.get('/ingredients.json').then(response => {

                const ingredientPrices = response.data.slice(1);

                const ingredients = ingredientPrices.map(el=>{return {[el.name]: 0}})
                                                    .reduce((acc, el)=>({...acc, [Object.keys(el)[0]]: el[Object.keys(el)[0]]}));

                this.setState({ingredientPrices: ingredientPrices, ingredients: ingredients});

            }).catch(error =>{
                //TODO: update UI here (hide spinner, retry button or smth)
            })
        }        
    }

    ingredientCountChangedHandler = (ingredient, isIncreased) => {        

        if (!isIncreased && this.state.ingredients[ingredient] === 0){

            return;
        }

        const ingredientsRef = {...this.state.ingredients};

        this.setState({isUpdated: true});

        ingredientsRef[ingredient] += isIncreased ? 1 : -1;

        const newPrice = this.state.ingredientPrices
                        .map(el => {return {'count':ingredientsRef[el.name], 'price':el.price}; })
                        .reduce((cum, el) => cum + el.count*el.price, 0);

        this.setState({ingredients: ingredientsRef, price: newPrice})
    }

    checkoutHandler = () => {

        this.props.history.push({
            pathname: '/checkout',
            state: this.state.ingredients
        });
    }

    render () {

        let composer = this.state.ingredientPrices ? 
        <Composer ingredientClickHandler={(a, b) => this.ingredientCountChangedHandler.bind(this, a, b)}
                  checkoutHandler={this.checkoutHandler}
                  price={this.state.price} 
                  ingredients={this.state.ingredientPrices}/> 
        :
        <Spinner />;

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                {composer}
            </Aux>
        );
    }
}

export default withAxiosErrorHandler(BurgerBuilder, axios);
