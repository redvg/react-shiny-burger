import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import shortid from 'short-id';

const order = (props) =>{

    const parsedOrder = Object.keys(props.ingredients)
                        .map(el => { return {'name': [el], 'count':props.ingredients[el]} })
                        .filter(el => !(el['count'] === 0));
                        
    return(
        <Aux>
            <h3>your order</h3>
            <ul>
                {parsedOrder.map(el=><li key={shortid.generate()}>{el['name']} {el['count']}</li>)}
            </ul>
            <p>continue?</p>
            <Button buttonType='Success'
                    clickHandler={props.confirmClickHandler}>
                confirm
            </Button>
            <Button buttonType='Danger'
                    clickHandler={props.cancelClickHandler}>
                cancel
            </Button>
        </Aux>
    );
};

export default order;