import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './buildcontrol/BuildControl';

const controls = [
 {label:'Meat', type:'meat'},
 {label:'Cheese', type:'cheese'},
 {label:'Salad', type:'salad'},
 {label:'Bacon', type:'bacon'},
];

const buildControls = (props) => {
    return(
    <div className={classes.BuildControls}>
        <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(cntrl => <BuildControl 
        key={cntrl.label} 
        label={cntrl.label}
        added={()=>props.ingredientsAdded(cntrl.type)}
        removed={()=>props.ingredientsRemoved(cntrl.type)}
        disable={props.disabled[cntrl.type]}></BuildControl>)}
        <button className={classes.OrderButton} disabled={props.purchasable} onClick={props.ordered}>Order Now</button>
    </div>
    )};

export default buildControls;