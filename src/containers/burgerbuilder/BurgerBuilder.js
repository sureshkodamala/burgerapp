import React, {Component} from 'react';
import Burger from '../../components/burger/Burger';
import Auxillar from '../../hoc/Auxillar';

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            cheese: 1,
            salad:1,
            bacon:2,
            meat:2
        }
    };
    render () {
        return (
            <Auxillar>
                <Burger ingredients = {this.state.ingredients}/>
                <div>BurgerBuilder</div>
            </Auxillar>
        )
    }
}
export default BurgerBuilder;