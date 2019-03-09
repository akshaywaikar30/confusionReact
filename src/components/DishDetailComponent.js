import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Button, Form, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';

    class CommentForm extends Component{
        constructor(props){
            super(props);
            this.state = {
            isModalOpen: false
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        }
        toggleModal() {
            this.setState({
            isModalOpen: !this.state.isModalOpen
            });
        }
        handleLogin(event) {
            this.toggleModal();
            alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
            event.preventDefault();
        }
        render(){
            return(
                <div>
                <Button outline onClick={this.toggleModal}><span className=""></span> Submit</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit COmment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Input type="text" id="username" name="username"
                                       innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="text">Your Name</Label>
                                <Input type="text" id="yourname" name="yourname"
                                       innerRef={(input) => this.yourname = input}  />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="text">Comment</Label>

                                <Input type="textarea" id="comment" name="comment" rows="6"
                                       innerRef={(input) => this.comment = input}  />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                </div>
                );
        }
        
    };
	function RenderComments({comments}) {
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
        <div class="container">
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>

                </div>
            </div>

        )
    }

    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    <CommentForm dishId={dish.name}/>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    const DishDetail = (props) => {
        const dish = props.dish
        if (props.dish == null) {
            return (<div></div>)
        }
        else{
        return(
        <div className="row">
        <RenderDish dish={props.dish}/>
        <RenderComments comments={props.dish.comments}/>
            </div>
        )
    }
    }


export default DishDetail;