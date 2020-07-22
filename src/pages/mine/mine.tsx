import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import { ScrollView, View, Text, Image } from '@tarojs/components';
import globalData from '../../utilities/globalData';

import './mine.scss';

import ic_vip0 from '../../resources/images/bg_mine_vip0.png';
import ic_vip1 from '../../resources/images/bg_mine_vip1.png';
import ic_vip2 from '../../resources/images/bg_mine_vip2.png';
import ic_vip3 from '../../resources/images/bg_mine_vip3.png';
import ic_vip4 from '../../resources/images/bg_mine_vip4.png';
import ic_vip5 from '../../resources/images/bg_mine_vip5.png';

import ic_copy_code from '../../resources/images/ic_mine_copy_code.png';
import ic_invite_friend from '../../resources/images/ic_mine_invite_friend.png';
import ic_all_orders from '../../resources/images/ic_mine_all_orders.png';
import ic_wait_pay from '../../resources/images/ic_mine_wait_pay.png';
import ic_wait_send from '../../resources/images/ic_mine_wait_send.png';
import ic_wait_get from '../../resources/images/ic_mine_wait_get.png';

import ic_bills from '../../resources/images/ic_mine_bills.png';
import ic_news from '../../resources/images/ic_mine_news.png';
import ic_member_center from '../../resources/images/ic_mine_member_center.png';
import ic_goods_address from '../../resources/images/ic_mine_goods_address.png';

import ic_feedback from '../../resources/images/ic_mine_feedback.png';
import ic_about_us from '../../resources/images/ic_mine_about_us.png';

import ic_right_arrow from '../../resources/images/ic_right_arrow.png';

const ORDERS_DATA = [
  {
    icon: ic_all_orders,
    text: '全部订单',
  },
  {
    icon: ic_wait_pay,
    text: '待付款',
  },
  {
    icon: ic_wait_send,
    text: '待发货',
  },
  {
    icon: ic_wait_get,
    text: '待收货',
  },
];

const MANAGER_DATA = [
  {
    icon: ic_bills,
    text: '我的账单',
  },
  {
    icon: ic_news,
    text: '我的消息',
  },
  {
    icon: ic_member_center,
    text: '会员中心',
  },
  {
    icon: ic_goods_address,
    text: '收货地址管理',
  },
];

const SERVICES_DATA = [
  {
    icon: ic_feedback,
    text: '意见反馈',
  },
  {
    icon: ic_about_us,
    text: '关于我们',
  },
];

const VIP_IMAGE = [ic_vip0, ic_vip1, ic_vip2, ic_vip3, ic_vip4, ic_vip5];

const VIP_NAME = ['游客', '普通会员', '铜牌会员', '银牌会员', '金牌会员', '钻石会员'];

const Mine: React.FC = () => {
  const [user, setUser] = useState(globalData.user);
  return (
    <View className="container">
      <View className="navbar" style={`padding-top: ${Taro.getSystemInfoSync().statusBarHeight || 0}px;`}>
        <Text className="title">我的</Text>
      </View>
      <ScrollView
        className="content"
        style={`padding-top: calc(${Taro.getSystemInfoSync().statusBarHeight || 0}px + 51px);`}
      >
        <View>
          {/* 用户信息 */}
          <View className="user-info" style={`background-image: url(${VIP_IMAGE[user.level]});`}>
            <View className="top-section">
              <Text className="name">{user.nickName}</Text>
              <Text className="invite-code">{`邀请码 ${user.recommend}`}</Text>
              <Image className="icon" src={ic_copy_code} />
            </View>
            <View className="bottom-section">
              <Text className="identity">{VIP_NAME[user.level]}</Text>
              <View className="button">
                <Image className="icon" src={ic_invite_friend} />
                <Text className="invite-friend">邀请好友</Text>
              </View>
            </View>
          </View>
          {/* 我的订单 */}
          <View className="orders">
            <Text className="title">我的订单</Text>
            <View className="items">
              {ORDERS_DATA.map(({ icon, text }, index) => {
                return (
                  <View key={String(index)} className="item">
                    <Image className="icon" src={icon} />
                    <Text className="text">{text}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          {/* 我的管理 */}
          <View className="managers">
            <Text className="title">我的管理</Text>
            <View className="items">
              {MANAGER_DATA.map(({ icon, text }, index) => {
                return (
                  <View key={String(index)} className="item">
                    <Image className="icon" src={icon} />
                    <Text className="text">{text}</Text>
                    <Image className="arrow" src={ic_right_arrow} />
                  </View>
                );
              })}
            </View>
          </View>
          {/* 意见反馈 */}
          <View className="managers">
            <Text className="title">售后服务</Text>
            <View className="items">
              {SERVICES_DATA.map(({ icon, text }, index) => {
                return (
                  <View key={String(index)} className="item">
                    <Image className="icon" src={icon} />
                    <Text className="text">{text}</Text>
                    <Image className="arrow" src={ic_right_arrow} />
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Mine;
