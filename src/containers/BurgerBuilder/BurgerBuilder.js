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

    render () {

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <Composer/>
            </Aux>
        );
    }
}

export default BurgerBuilder;