import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, Modal } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            showDeleteDialog: false,
            selectedUser: {}
        };
        this.add = this.add.bind(this);
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
        this.delete = this.delete.bind(this);
    }

    add(e) {
        this.props.history.push("/add");
    }

    componentDidMount() {
        firebase.database().ref('/')
            .on('value', snapshot => {
                let returnArr = [];
                snapshot.forEach(data => {
                    var user = data.val();
                    user['key'] = data.key;
                    returnArr.push(user);
                    /*console.log(snapshot.val()) */
                });
                this.setState({
                    users: returnArr
                })
            });
    }

    render() {
        const listUsers = this.state.users.map((user) => 
            <tr key={user.key}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <Link to={`/edit/${user.key}`}>
                        Edit
                    </Link>
                </td>
               /* <td>Edit</td> */
                <td>
                    <Button onClick={this.openDeleteDialog.bind(this,user)}>Remove</Button>
                </td>
                /* <td>Remove</td> */
            </tr>
        );

        return (
            <div>
                <Button variant="primary" onClick={this.add}>Add</Button>
                <Table striped bordered hover>
                    <thread>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thread>
                    <tbody>
                        {listUsers}
                    </tbody>
                </Table>
            <Modal show={this.state.showDeleteDialog} onHide={this.closeDeleteDialog}>
                 <Modal.Header closeButton>
                     <Modal.Title>Delete User</Modal.Title>
                        </Modal.Header>
                            <Modal.Body>            
                                 <p>Are you sure you want to delete 
                                 {this.state.selectedUser.username}?
                                 </p>
                                 <hr />
                            </Modal.Body>
                        <Modal.Footer>
                 <Button onClick={this.delete}>Delete</Button>
                 <Button onClick={this.closeDeleteDialog}>Close</Button>
                </Modal.Footer>
            </Modal>  
            </div>
        );
    }
}

export default User;