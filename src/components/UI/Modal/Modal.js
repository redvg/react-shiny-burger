import React from 'react';
import styles from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const modal = (props) =>
    <Aux>
        <Backdrop isShow={props.isShow} 
                  clickHandler={props.cancelClickHandler}/>
        <div className={styles.Modal}
            style={{
                transform: props.isShow ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.isShow ? '1': ''
            }}>
            {props.children}
        </div>
    </Aux>

export default modal;