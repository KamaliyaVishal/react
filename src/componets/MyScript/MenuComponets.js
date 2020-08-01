import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from "reactstrap";
import Dishdetail from "./DishdetailComponent";

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelected(dish) {
        this.setState({ selectedDish: dish });
    }

    renderSelectedDish(dish) {
        if (dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 mt-1">
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle> {dish.name} </CardTitle>
                                    <CardText> {dish.description} </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 mt-1">
                            <Card>
                                <CardImg width="100%" />
                                <CardBody>
                                    <CardText> <Dishdetail dish={dish.comments} /> </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    <Card onClick={() => this.onDishSelected(dish)} >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle> {dish.name} </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderSelectedDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;