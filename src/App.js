import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'config/routes';
import Router from 'provider/router';
import style from './style';
import AppBar from 'component/app-bar';
import { notification } from 'antd';

notification.config({
  placement: 'bottomRight',
  bottom: 50,
  duration: 3,
  rtl: true,
});

function App({ classes }) {
  return (
    <>
      <BrowserRouter>
        <main className={classes.app}>
          <AppBar />
          <div className={classes.wrapper}>
            <Router routes={Routes} />
          </div>
        </main>
      </BrowserRouter>
      <div id="offlineMode"></div>
    </>
  );
}

export default connect(null)(style(App));
