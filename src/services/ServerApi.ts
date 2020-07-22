import { get, post } from './HttpClient';

const ServerApi = {
  loginByPassword: (username, password) => post('api/v1/login', { username, password }),
  getHomeBanner: () => post('api/v1/banners'),
  getRecommendGoods: (pageNum, pageSize = 20) =>
    post('api/v1/products', { commodityType: 1, isRecommend: 1, productType: 0, branchID: 0, pageSize, pageNum }),
};

export default ServerApi;
