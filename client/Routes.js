import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { me } from './store';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import About from './components/About';
import AllPatterns from './components/AllPatterns';
import SinglePattern from './components/SinglePattern';
import AdminHome from './components/admin/AdminHome';
import UserDashboard from './components/admin/UserDashboard';
import PatternDashboard from './components/admin/PatternDashboard';

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={AllPatterns} />
          <Route path="/shop/:id" component={SinglePattern} />
          <Route path="/login">
            {isLoggedIn ? <Redirect to="/admin" /> : <Login />}
          </Route>

          <Route path="/signup" component={Signup} />
        </Switch>
        {isLoggedIn && (
          <Switch>
            <Route path="/admin" exact component={AdminHome} />
            <Route path="/admin/users" component={UserDashboard} />
            <Route path="/admin/patterns" component={PatternDashboard} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
