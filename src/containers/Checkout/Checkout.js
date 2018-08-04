import React, {Component} from 'react';
//import styles from './Checkout.css';
import Summary from '../../components/Checkout/Summary/Summary';


class Checkout extends Component{

    cancelHandler = () => {

        this.props.history.goBack();
    }

    purchaseHandler = () =>{

        console.log('purchased')
    }

    render() {

        return(<Summary cancelHandler={this.cancelHandler}
                        purchaseHandler={this.purchaseHandler}/>);
    }
}

export default Checkout;