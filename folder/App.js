/* import React, {Component} from 'react';
import Products from './Products';
import Rating from './Rating';
import Github from './Github';
import User from './User';
import UserForm from './UserForm';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/edit/:id" component={UserForm />}
              <Route path="/add" component={UserForm} />
              <Route exact path="/" component={User} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

class NotFound extends Component {
  render() {
    return <div> Not Found </div>
  }
}

/* class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}
export default App;

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/github">Github</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

          <Switch>
            <Route path ="/github" component={Github} />
            <Route exact path="/" component={Home} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowseRouter>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

class NotFound extends Component {
  render() {
    return <div> Not found </div>
  }
} */

/*class App extends Component {
  render() {

  return (
    <div>
      <h1> Hello </h1>
      <Products/>

      <Rating rating="1"/>
      <Rating rating="2"/>
      <Rating rating="3"/>
      <Rating rating="4"/>
      <Rating rating="5"/>

    </div>
    );
  }
}

export default App;
Changing to a function*/
/*

function App() {
  return (
    <div className="App">
      <Products/>
      <Github/>
    </div>
  );
}

export default App;

*/