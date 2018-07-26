import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const order = (props) =>{

    const parsedOrder = Object.keys(props.ingredients)
                        .map(el => { return {'name': [el], 'count':props.ingredients[el]} })
                        .filter(el => !(el['count'] === 0));
                        
    return(
        <Aux>
            <h3>your order</h3>
            <ul>
                {parsedOrder.map(el=><li>{el['name']} {el['count']}</li>)}
            </ul>
        </Aux>
    );
};

export default order;