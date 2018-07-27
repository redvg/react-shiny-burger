import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component{

    state = {

        isShowSidedrawer: true,
    }

    sidedrawerClosedHandler = () => {

        this.setState({isShowSidedrawer: false});
    }

    render() {

        return(
            <Aux>
                <Toolbar/>
                <Sidedrawer isShow={this.state.isShowSidedrawer} 
                            clickHandler={() => this.sidedrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}


export default Layout;