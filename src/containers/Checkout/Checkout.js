import React, {Component} from 'react';
//import styles from './Checkout.css';
import Summary from '../../components/Checkout/Summary/Summary';
import axios from '../../axiosForOrders';
import withAxiosErrorHandler from '../../hoc/withAxiosErrorHandler/withAxiosErrorHandler';


class Checkout extends Component{

    cancelHandler = () => {

        this.props.history.goBack();
    }

    purchaseHandler = () =>{

        const ingredients = this.props.history.location.state;      

        axios.post('/orders.json', ingredients).then(response => {

            if (response && response.status === 200) this.props.history.push('/orders');

        }).catch(error => {

            console.log(error);
        })
    }

    render() {

        const ingredients = this.props.history.location.state;

        return(<Summary cancelHandler={this.cancelHandler}
                        purchaseHandler={this.purchaseHandler}
                        ingredients={ingredients}/>);
    }
}

export default withAxiosErrorHandler(Checkout, axios);