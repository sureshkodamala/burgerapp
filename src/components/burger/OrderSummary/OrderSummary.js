import React from 'react';
import Auxillary from '../../../hoc/Auxillar';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const elements = Object.keys(props.incredients)
    .map(keyId => {
        return <li key={keyId}>
            <span style={{textTransform:"capitalize"}}>{keyId}</span> : {props.incredients[keyId]}
        </li>
    });
    return(
        <Auxillary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following incredients:</p>
            <ul>
                {elements}
            </ul>
            <p><strong>Total price:{props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout!</p>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType='Success' clicked={props.purchaseContinue}>Checkout</Button>
        </Auxillary>
    )
};
export default orderSummary;