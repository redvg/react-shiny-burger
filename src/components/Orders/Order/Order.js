import React from 'react';
//import styles from './Order.css';
import shortid from 'short-id';


const order = (props) => 
    <li>
        {Object.keys(props.order).map(el => <p key={shortid.generate()}>{el}: {props.order[el]} </p>)}
    </li>

export default order;