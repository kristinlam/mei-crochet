import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { me } from './store';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={AllPatterns} />
          <Route path="/shop/:id" component={SinglePattern} />
          <Route path="/cart" component={CartPage} />
          <Route path="/login">
            {isLoggedIn ? <Redirect to="/admin" /> : <LoginPage />}
          </Route>
          <Route path="/signup" component={SignupPage} />
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

export default withRouter(connect(mapState, mapDispatch)(Routes));
