import React from 'react';
import classes from './Modal.module.css';
import BackDrop from '../BackDrop/BackDrop';
import Auxillar from '../../../hoc/Auxillar';

const modal = (props) => (
    <Auxillar>
        <BackDrop show={props.show} clicked={props.modelClosed}></BackDrop>
    <div className={classes.Modal}
        style={{
            transform:props.show?'translateY(0)':'translateY(-100vh)',
            opacity:props.show?'1':'0'
        }}>
        {props.children}
    </div>
    </Auxillar>
);
export default modal;