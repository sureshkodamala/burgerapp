import React from 'react';
import BurgerIngredient from './burgeringredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(idkey => {
            return [...Array(props.ingredients[idkey])].map((_,i) => {
            return <BurgerIngredient key={idkey+i} type={idkey}></BurgerIngredient>;
            });
        }).reduce((arr, el)=>{
            return arr.concat(el);
        },[]);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please enter ingredients to burger!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )

}
export default burger;