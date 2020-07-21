import Taro from '@tarojs/taro';
// import { RouteMap } from '../app.config';

const RouteMap = {
  splash: 'pages/splash/splash',
  login: 'pages/login/login',
  home: 'pages/home/home',
  mine: 'pages/mine/mine',
};

class NavigateApi {
  static startSplash() {
    Taro.reLaunch({
      url: `/${RouteMap.splash}`,
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
