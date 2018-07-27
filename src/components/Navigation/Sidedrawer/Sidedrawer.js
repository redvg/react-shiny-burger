import React from 'react';
import styles from './Sidedrawer.css';
import Logo from '../Logo/Logo';
import NavigationBar from '../NavigationBar/NavigationBar';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';


const sidedrawer = (props) => {

    let sidedrawerStyles = [styles.Sidedrawer];

    sidedrawerStyles.push(props.isShow ? styles.Open : styles.Close);

    return(
        <Aux>
            <Backdrop isShow={props.isShow}
                      clickHandler={props.clickHandler()} />
            <div className={sidedrawerStyles.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>            
                <nav>
                    <NavigationBar/>
                </nav>
            </div>
        </Aux>
    );
}

export default sidedrawer;


