import Taro, { request } from '@tarojs/taro';
import globalData from '../utilities/globalData';
import NavigateApi from '../navigators/NavigateApi';

const _baseOptions = {
  dataType: 'json',
  timeout: 3000,
  header: {
    'content-type': 'application/json', // 默认值
  },
};

const _request = (url, method, data) => {
  const user = globalData.user;
  if (user && user.token) {
    Object.assign(_baseOptions.header, { Authorization: user.token });
  }
  return request({
    url: `${REQUEST_BASE_URL}${url}`,
    method,
    data,
    ..._baseOptions,
  }).then((res) => {
    console.log(res);
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      switch (data.code) {
        case 200:
          return Promise.resolve(data);
        case 401:
          NavigateApi.startLogin();
        default:
          return Promise.reject(data);
      }
    } else {
      const errMsg = res.errMsg || data.msg;
      Taro.showToast({ title: errMsg });
      return Promise.reject(data);
    }
  });
};

const get = (url: string, query: object = {}) => {
  return _request(url, 'GET', query);
};

const post = (url: string, body: object = {}) => {
  return _request(url, 'POST', body);
};

export { get, post };
