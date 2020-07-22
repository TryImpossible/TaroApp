import Taro from '@tarojs/taro';
import globalData from '../utilities/globalData';

/**
 * 缓存Api
 */
const CacheApi = {
  user: {
    set: (user: object) => {
      return new Promise((resolve, reject) => {
        Taro.setStorage({
          key: 'user',
          data: JSON.stringify(user),
          success: (res) => {
            globalData.user = user;
            return resolve(res);
          },
          fail: (res) => reject(res),
        });
      }).catch(() => {});
    },
    get: () => {
      return new Promise((resolve, reject) => {
        Taro.getStorage({
          key: 'user',
          success: (res) => {
            if (res && res.data) {
              const user = JSON.parse(res.data);
              globalData.user = user;
              return resolve(user);
            }
            return reject(res);
          },
          fail: (res) => {
            return reject(res);
          },
        }).catch(() => {});
      });
    },
    remove: () => {
      return new Promise((resolve, reject) => {
        Taro.removeStorage({
          key: 'user',
          success: (res) => resolve(res),
          fail: (res) => reject(res),
        });
      }).catch(() => {});
    },
  },
};

export default CacheApi;
