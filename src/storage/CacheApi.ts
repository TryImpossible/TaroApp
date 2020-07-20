import Taro from '@tarojs/taro';

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
          success: (res) => resolve(res),
          fail: (res) => reject(res),
        });
      });
    },
    get: () => {
      return new Promise((resolve, reject) => {
        Taro.getStorage({
          key: 'user',
          success: (res) => resolve(JSON.parse(res.data)),
          fail: (res) => reject(res),
        });
      });
    },
    remove: () => {
      return new Promise((resolve, reject) => {
        Taro.removeStorage({
          key: 'user',
          success: (res) => resolve(res),
          fail: (res) => reject(res),
        });
      });
    },
  },
};

export default CacheApi;
