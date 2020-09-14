import React from 'react';
import Auxillary from '../../../hoc/Auxillar'

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
            <p>Continue to Checkout!</p>
        </Auxillary>
    )
};
export default orderSummary;