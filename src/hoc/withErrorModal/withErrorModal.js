import React from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorModal = (WrappedComponent) => {

    return (props) => {

        return(
            <Aux>
                <Modal isShow>
                    oops
                </Modal>
                <WrappedComponent {...props} />
            </Aux>            
        );
    }
}

export default withErrorModal;