import { request } from '@tarojs/taro';
import { REQUEST_BASE_URL } from '../utilities/Constants';

const ServerApi = {
  getHomeBanner: () => request({ url: `${REQUEST_BASE_URL}api/v1/banners`, method: 'POST' }),
  loginByPassword: (username, password) =>
    request({ url: `${REQUEST_BASE_URL}api/v1/login`, method: 'POST', data: { username, password }, dataType: 'json' }),
};

export default ServerApi;
