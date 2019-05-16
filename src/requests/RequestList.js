import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import FakeApi from '../fake-api/FakeApi';

export default class RequestList extends Component {
  constructor() {
    super();
    this.state = {
      requests: []
    };
  }

  componentDidMount() {
    FakeApi.getAllRequestsAsync().then(requests => {
      this.setState({ requests });
    });
  }

  render() {
    return (
      <Container>
        <h1>Request List</h1>

        <Table responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Created By</th>
            </tr>
          </thead>
          <tbody>
            {this.state.requests.map(request => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.title}</td>
                <td>{request.description}</td>
                <td>{request.status}</td>
                <td>{request.createdAt.toString()}</td>
                <td>{request.createdBy.toString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}
