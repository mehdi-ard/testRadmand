import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import fa_IR from 'antd/lib/locale-provider/fa_IR';
import store from 'state/store';
import App from './App';
import { Theme } from 'provider/theme';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import dayjs from 'dayjs';
import 'antd/dist/antd.css';
import jalali from 'jalaliday';
import moment from 'moment';
moment.locale('fa');
dayjs.extend(jalali);
dayjs.locale('fa');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <ConfigProvider locale={fa_IR} direction="rtl">
          <App />
        </ConfigProvider>
      </Theme>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.register();
reportWebVitals();
