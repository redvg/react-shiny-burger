import React, {Component} from 'react';


const lazyComponent = (importComponent) => {

    return class extends Component{

        state = {

            component: null
        }

        componentDidMount(){

            importComponent()
            .then(component => (this.setState({component: component.default})));
        }

        render(){

            return this.state.component ? 
                    <this.state.component {...this.props} /> : 
                    this.state.component;
        }
    }
}

export default lazyComponent;