import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import ErrorModal from '../../components/UI/ErrorModal/ErrorModal';


const withAxiosErrorHandler = (WrappedComponent, axios) => {
    
    return class extends Component{

        state ={

            hasError: false,

            errorMessage: '',
        }

        componentDidMount(){

            axios.interceptors.response.use(response => response, error => {

                this.setState({hasError: true, errorMessage: error.message})
            });
        }

        modalClosedHandler = () => {

            this.setState({hasError: false, errorMessage: ''})
        }

        render (){

            return(
                <Aux>
                    <ErrorModal isShow={this.state.hasError}
                                cancelClickHandler={this.modalClosedHandler}>
                        {this.state.errorMessage}
                    </ErrorModal>
                    <WrappedComponent {...this.props} />
                </Aux>            
            );
        }
    }  
}

export default withAxiosErrorHandler;