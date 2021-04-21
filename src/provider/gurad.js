import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SHOULD_NOT_AUTH, SHOULD_AUTH } from 'config/enums';
import store from 'state/store';
import { getToken } from 'state';

function GuradRoute(props) {
  store.dispatch(getToken('token'));
  const token = store.getState('token').token;

  switch (props.guard) {
    case SHOULD_NOT_AUTH: {
      if (token !== null && props.path === '/login') return <Redirect to="/" />;
      else return <Route {...props} />;
    }
    case SHOULD_AUTH: {
      if (token !== null) return <Route {...props} />;
      else return <Redirect to="/auth/login/" />;
    }
    default: {
      return <Route {...props} />;
    }
  }
}

export default GuradRoute;
