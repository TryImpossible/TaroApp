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
      }).catch(() => {});
    },
    get: () => {
      return new Promise((resolve, reject) => {
        Taro.getStorage({
          key: 'user',
          success: (res) => {
            if (res && res.data) {
              return resolve(JSON.parse(res.data));
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
