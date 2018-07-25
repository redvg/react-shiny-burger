import React from 'react';
import Ingredient from './Ingredient/Ingredient';

const burger = () =>
    <div>
        <Ingredient ingredient="breadTop"/>
        <Ingredient ingredient="salad"/>
        <Ingredient ingredient="cheese"/>
        <Ingredient ingredient="meat"/>
        <Ingredient ingredient="breadBottom"/>
    </div>;

export default burger;