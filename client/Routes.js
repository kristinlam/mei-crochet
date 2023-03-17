import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { me } from './store';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PatternsPage from './pages/PatternsPage';
import SinglePatternPage from './pages/SinglePatternPage';
import CartPage from './pages/CartPage';
import ConfirmationPage from './pages/ConfirmationPage';
import AccountPage from './pages/AccountPage';
import UserControlPage from './pages/admin/UserControlPage';
import PatternControlPage from './pages/admin/PatternControlPage';

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, isAdmin } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={PatternsPage} />
          <Route path="/shop/:id" component={SinglePatternPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/confirmation" component={ConfirmationPage} />
          <Route path="/login">
            {isLoggedIn ? <Redirect to="/account" /> : <LoginPage />}
          </Route>
          <Route path="/signup">
            {isLoggedIn ? <Redirect to="/account" /> : <SignupPage />}
          </Route>
          <Route path="/account">
            {!isLoggedIn ? <Redirect to="/login" /> : <AccountPage />}
          </Route>
        </Switch>

        {isLoggedIn && (
          <Switch>
            <Route path="/admin/users" component={UserControlPage} />
            <Route path="/admin/patterns" component={PatternControlPage} />
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
