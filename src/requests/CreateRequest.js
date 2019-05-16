import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import FakeApi from '../fake-api/FakeApi';

export default class CreateRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      status: ''
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleChangeStatus(event) {
    this.setState({ status: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    FakeApi.createRequestAsync(this.state).then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    const containerStyle = {
      marginTop: '2em'
    };

    return (
      <Container style={containerStyle}>
        <Form onSubmit={this.handleSubmit}>
          <Card>
            <Card.Header className="text-center" as="h1">
              Create Request
            </Card.Header>
            <Card.Body>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChangeTitle}
                  required
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChangeDescription}
                  required
                />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  name="status"
                  value={this.state.status}
                  onChange={this.handleChangeStatus}
                  required
                >
                  <option value="" disabled>
                    Please select an option
                  </option>
                  <option value="REGISTERED">Registered</option>
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="PENDING_CUSTOMER">Pending Customer</option>
                  <option value="FULFILLED">Fulfilled</option>
                  <option value="CLOSED">Closed</option>
                </Form.Control>
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <Button type="submit">Create</Button>
            </Card.Footer>
          </Card>
        </Form>
      </Container>
    );
  }
}
