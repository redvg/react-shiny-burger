import React, {Component} from 'react';
//import styles from './Checkout.css';
import Summary from '../../components/Checkout/Summary/Summary';


class Checkout extends Component{

    //TODO: this will be passed in
    state = {
        ingredients: {
            cheese: 1,
            salad: 1
        }
    }

    render(){

        return(
            <div>
                <Summary ingredients={this.state.ingredients}/>
            </div>
        );
    }
}

export default Checkout;