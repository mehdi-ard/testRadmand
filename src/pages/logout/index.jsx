import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { removeToken } from 'state';

function Logout({ isRemoveToken, isRemoveProfile }) {
  useEffect(() => {
    isRemoveToken('token');
  }, []);

  return <Redirect to={`/auth/login`} />;
}

const mapDispatchToProps = (dispatch) => ({
  isRemoveToken: (token) => dispatch(removeToken(token)),
});
export default connect(null, mapDispatchToProps)(withRouter(Logout));
