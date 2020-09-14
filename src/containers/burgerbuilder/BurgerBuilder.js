import React, {Component} from 'react';
import Burger from '../../components/burger/Burger';
import Auxillar from '../../hoc/Auxillar';
import BuildControls from '../../components/burger/buildcontrols/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            cheese: 0,
            salad:0,
            bacon:0,
            meat:0
        },
        purchasable: true,
        totalPrice: 4,
        purchasing: false
    };

    updatePurchasable(incredients){
        const totalSum = Object.keys(incredients).map(keyid=>{
            return incredients[keyid]
        }).reduce((sum, el) =>{
            return sum+el;
        },0);
        this.setState({purchasable: totalSum <=0});
    }

    purchaseHandler = () => {
        this.setState({purchasing:true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type]=updatedCount;
        const oldPrice = this.state.totalPrice;
        const addPrice = INGREDIENT_PRICES[type];
        const newPrice = oldPrice + addPrice;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchasable(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type]=updatedCount;
        const oldPrice = this.state.totalPrice;
        const reducePrice = INGREDIENT_PRICES[type];
        const newPrice = oldPrice - reducePrice;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchasable(updatedIngredients);
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        return (
            <Auxillar>
                <Modal show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
                    <OrderSummary incredients={this.state.ingredients}></OrderSummary>
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls ingredientsAdded={this.addIngredientHandler}
                ingredientsRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}></BuildControls>
            </Auxillar>
        )
    }
}
export default BurgerBuilder;