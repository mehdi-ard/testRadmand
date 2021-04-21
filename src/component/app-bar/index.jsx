import Icon from 'microcomponents/icon';
import style from './style';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

function AppBar({ classes, dataSource, isToken, history }) {
  return (
    isToken && (
      <header className={classes.root}>
        <div className={classes.count}>تعداد: {dataSource.length}</div>
        <div
          className={classes.logoutUser}
          onClick={() => history.push('/auth/logout')}
        >
          <Icon name="Logout1" style={{ fontSize: 20 }} />
        </div>
      </header>
    )
  );
}

const mapStateToProps = (state) => ({
  isToken: state.token,
  dataSource: state.list,
});

export default connect(mapStateToProps)(withRouter(style(AppBar)));
