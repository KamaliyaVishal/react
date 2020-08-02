import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else
      return (
        <div></div>
      );
  }

  renderComments(comments) {
    const commentsList = comments.map((index) => {
      return (
        <div key={index.id}>
          <p>{index.comment}</p>
          <p>-- {index.author},
            {new Date(index.date.substring(0, 10).split('-')).toDateString().slice(3).replace(/ ([^ ]*)$/, ', $1')}
          </p>
        </div>
      );
    });

    if (comments != null)
      return (
        <div>
          <ul className="list-unstyled">
            <li><h4>Comments</h4></li>
            {commentsList}
          </ul>
        </div>
      );
    else
      return (
        <div></div>
      );
  }

  render() {
    if (this.props.dish != null)
      return (
        <div className='container'>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>

            <div className="col-12 col-md-5 m-1">
              {this.renderComments(this.props.dish.comments)}
            </div>
          </div>
        </div>
      );
    else
      return (
        <div></div>
      );
  }
}

export default DishDetail;