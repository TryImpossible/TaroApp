import { Config } from '@tarojs/taro';

export const RouteMap = {
  splash: 'pages/splash/splash',
  login: 'pages/login/login',
  home: 'pages/home/home',
  mine: 'pages/mine/mine',
};

export default {
  pages: Object.values(RouteMap),
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    backgroundColor: '#f5f5f5',
  },
  tabBar: {
    list: [
      {
        pagePath: RouteMap.home,
        text: '首页',
        iconPath: 'resources/images/ic_tabbar_home_normal.png',
        selectedIconPath: 'resources/images/ic_tabbar_home_selected.png',
      },
      {
        pagePath: RouteMap.mine,
        text: '我的',
        iconPath: 'resources/images/ic_tabbar_mine_normal.png',
        selectedIconPath: 'resources/images/ic_tabbar_mine_selected.png',
      },
    ],
  },
} as Config;
