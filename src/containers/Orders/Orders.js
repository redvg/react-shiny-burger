import React, {Component} from 'react';
//import styles from './Orders.css';
import Order from '../../components/Orders/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axiosForOrders';
import withAxiosErrorHandler from '../../hoc/withAxiosErrorHandler/withAxiosErrorHandler';


class Orders extends Component{

    state = {

        orders: [],

        isLoading: true,
    }

    componentDidMount() {

        axios.get('/orders.json')
        .then(response=>{

            if (!response.data){

                this.setState({isLoading: false});
            }

            else{

                this.setState({orders: response.data, isLoading: false})
            }
        }).catch(error=>{

            console.log(error);

            this.setState({isLoading: false});
        });
    }

    render(){

        let message = '';

        let orders = null;

        if (this.state.isLoading){

            message = 'Loading your orders..';

            orders = <Spinner />;
        }

        else {

            message = Object.keys(this.state.orders).length > 0 ? 'Your orders' : 'You have no orders';

            orders = <ul>{Object.keys(this.state.orders).map(el => <Order key={el} order={this.state.orders[el]}/>)}</ul>
        }

        return(
            <div>
                <h1>{message}</h1>
                {orders}
            </div>
        );
    }
}

export default withAxiosErrorHandler(Orders, axios);