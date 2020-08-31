import React from 'react';
import Auxillar from '../../hoc/Auxillar';
import classes from './Layout.module.css';

const Layout = (props) =>{
    return (
        <Auxillar>
        <div>Toolbar, SideDrawer, backdrop</div>
        <main className={classes.content}>
        {props.children}
        </main>
        </Auxillar>
    )
};
export default Layout;