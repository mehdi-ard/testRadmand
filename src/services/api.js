import urls from 'config/urls';
import { convertObjectToQueryString } from 'utils/convert-object';
import { connect } from 'react-redux';
import store from 'state/store';
import { getToken } from 'state';
import { notification } from 'antd';

export const getHeaders = () => {
  store.dispatch(getToken('token'));
  const token = store.getState('token').token;
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': 'http://core.khubsho.com/',
    'Access-Control-Allow-Headers': 'Content-type',
    ...(token ? { Authorization: token } : {}),
  };
};

const request = async (url, options) => {
  let result;
  try {
    result = await fetch(url, {
      headers: getHeaders(),
      ...options,
    });

    if (result.status === 401) {
      window.location.replace('/auth/login');
    } else {
      return await result.json();
    }
  } catch (e) {
    notification.error({
      message: 'لطفا دسترسی اینترنت خود را بررسی نمایید',
      placement: 'bottomRight',
      bottom: 50,
      duration: 3,
      rtl: true,
    });
  }
};

export const post = ({ api, model } = {}) => {
  return request(`${urls.endPointAdmin}${api}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify(model),
  });
};

export const get = ({ api, model } = {}) => {
  const query = convertObjectToQueryString(model);
  return request(`${urls.endPointAdmin}${api}${query}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  });
};

export const remove = ({ api, id } = {}) => {
  return request(`${urls.endPointAdmin}${api}`, {
    method: 'DELETE',
  });
};

//FIXME: need determine entity id
export const put = ({ api, model } = {}) => {
  return request(`${urls.endPointAdmin}${api}`, {
    method: 'PUT',
    body: JSON.stringify(model),
  });
};

//FIXME: need determine entity id
export const patch = ({ api, model } = {}) => {
  return request(`${urls.endPointAdmin}${api}`, {
    method: 'PATCH',
    body: JSON.stringify(model),
  });
};

const mapStateToProps = (state) => ({
  token: getHeaders(state.token),
});

connect(mapStateToProps)(getHeaders);
