const _globalData = {};

const _set = (key, value) => {
  _globalData[key] = value;
};

const _get = (key) => {
  return _globalData[key];
};

export default {
  set user(value) {
    _set('user', value);
  },
  get user() {
    return _get('user');
  },
};
