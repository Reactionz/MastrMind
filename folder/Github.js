import React, {Component} from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import {Media, Form, Button} from 'react-bootstrap';
import { render } from 'react-dom';

class Github extends Component {
   constructor() {
        super();
        this.state = {
            data : [],
            searchTerm: '',
            isLoading : true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isLoading : true
        })

        this.getGithubData(this.state.searchTerm);
    }

    componentDidMount() {
       /* this.getGithubData('A'); */
    }

    getGithubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q="+_searchTerm)
            .then(res => {
                this.setState({
                    isLoading : false,
                    data: res.data.items
                })
                console.log(res.data.items);
            });
    }

    render() {
        const listUsers = this.state.data.map((user) => 
            <Media key ={user.id}>
                <a href={user.html_url}>
                    <img
                        width={65}
                        height={65}
                        className="mr-3"
                        src={user.avatar_url}
                        alt="Generic placeholder"
                    />
                </a>
                <Media.Body>
                    <h5>Login: {user.login} </h5>
                    <p>Id: (user.id} </p>
                </Media.Body>
            </Media> 
        );

        return (
            <div>
                <Form inline onSubmit={this.handleSubmit}>
                    <Form.Group constrolId="formInlineName">
                        <FormData.Control
                             type="text"
                             value={this.state.searchTerm}
                             placeholder="type search term"
                             onChange={this.handleChange}
                        />
                    </Form.Group>
                     {' '}
                     <Button type="submit">
                        Search
                     </Button>
                </Form>
             <h3>Github User Results</h3>
                { this.state.isLoading &&
                    <ReactLoading type="spinningBubbles" color="#444" />
                }
                {listUsers}
            </div>
        );
    }
}

export default Github;