import React, {Component} from 'react';
//import styles from './Checkout.css';
import Summary from '../../components/Checkout/Summary/Summary';


class Checkout extends Component{

    render(){

        return(
            <div>
                <Summary ingredients={this.props.ingredients}/>
            </div>
        );
    }
}

export default Checkout;