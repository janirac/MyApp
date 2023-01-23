import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './components/Users';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Profile from './components/Profile';
import { Switch } from 'react-router-dom';


function Example() {
  const params = useParams();
}

const Root = () => {

  const handleClick = () => {
    console.log('Thanks for clicking!')
  };

  return (
    <BrowserRouter>
      <div>
        <NavLink to="/" exact={true} activeStyle={{ fontWeight: "bold" }}>App</NavLink>
        <NavLink activeClassName="red" to="/users">Users</NavLink>
        <NavLink activeClassName='blue' to="/hello">Hello</NavLink>
        <NavLink activeClassName="green" to="/users/1">Andrew's Profile</NavLink>
        {}
        <NavLink to="/" exact onClick={handleClick}>App with click handler</NavLink>

        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route path="/users/:userId">
            <Profile />
          </Route>
          <Route>
            <h1>404: Page not found</h1>
          </Route>
        </Switch>

      </div>
      {/* <App /> */}
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
