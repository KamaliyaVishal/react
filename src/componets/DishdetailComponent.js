import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}


const DishDetail = (props) => {
  if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
          </div>
        </div>
      </div>
    );
  else
    return (
      <div></div>
    );
}

function RenderComments({ comments }) {

  if (comments != null)
    return (
      <div className="col-12 col-md-12 m-1" >
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p> {comment.comment} </p>
                <p>-- {comment.author}, {new Date(comment.date.substring(0, 10).split('-')).toDateString().slice(3).replace(/ ([^ ]*)$/, ', $1')} </p>
              </li>
            );
          })}
        </ul>
        <CommentForm />
      </div>
    );
  else
    return (
      <div></div>
    );

}

export default DishDetail;

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

export class CommentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  handleSubmit(values) {
    this.toggleModal();
    alert(JSON.stringify(values));
  }

  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"> Submit comment</span>
        </Button>

        <div className="row">
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}> Submit comment</ModalHeader>
            <ModalBody>
              <div className="col-12">
                <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
                  <Row className="form-group">
                    <Label htmlFor="rating" sm={6}>Rating</Label>
                    <Col sm={12}>
                      <Control.select model=".rating" name="rating" className="form-control" >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Control.select>
                    </Col>
                  </Row>

                  <Row className="form-group">
                    <Label htmlFor="author" sm={6}>Your name</Label>
                    <Col sm={12}>
                      <Control.text model=".author" id="author" name="author" placeholder="Author" className="form-control" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                      <Errors className="text-danger" model=".author" show="touched" messages={{ required: "Can't  be blank and ", minLength: 'Must be greater than 3 characters', maxLength: 'Must be 15 charaters or less' }} />
                    </Col>
                  </Row>

                  <Row className="form-group">
                    <Label htmlFor="feedback" sm={6}>Your feedback</Label>
                    <Col sm={12}>
                      <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" validators={{ required }} />
                      <Errors className="text-danger" model=".comment" show="touched" messages={{ required: "Can't  be blank and " }} />
                    </Col>
                  </Row>

                  <Button type="submit" value="submit" color="primary">Submit</Button>
                </LocalForm>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}