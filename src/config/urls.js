import evn from './env';

const common = {};

const development = {
  endPointAdmin: '',
};

const production = {
  endPointAdmin: '',
};

// eslint-disable-next-line
export default {
  ...common,
  ...evn(
    () => production,
    () => development
  ),
};
