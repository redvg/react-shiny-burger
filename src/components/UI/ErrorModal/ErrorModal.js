import React, {Component} from 'react';
import styles from './ErrorModal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState){
             
        return nextProps.isShow !== this.props.isShow || nextProps.children !== this.props.children;
    }

    render(){

        return(
            <Aux>
                <Backdrop isShow={this.props.isShow} 
                        clickHandler={this.props.cancelClickHandler}/>
                <div className={styles.ErrorModal}
                    style={{
                        transform: this.props.isShow ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.isShow ? '1': ''
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}


export default Modal;