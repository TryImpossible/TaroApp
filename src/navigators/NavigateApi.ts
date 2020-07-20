import Taro from '@tarojs/taro';
import { RouteMap } from '../app.config';

class NavigateApi {
  static startSplash() {
    Taro.navigateTo({
      url: `/pages/${RouteMap.splash}`,
    });
  }
  static startLogin() {
    Taro.navigateTo({ url: `/${RouteMap.login}` });
  }
  static startHome() {
    Taro.switchTab({ url: `/${RouteMap.home}` });
  }
}

export default NavigateApi;
