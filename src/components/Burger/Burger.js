import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import classes from './Burger.css';

const burger = () =>
    <div className={classes.Burger}>
        <Ingredient ingredient="breadTop"/>
        <Ingredient ingredient="salad"/>
        <Ingredient ingredient="cheese"/>
        <Ingredient ingredient="meat"/>
        <Ingredient ingredient="breadBottom"/>
    </div>

export default burger;