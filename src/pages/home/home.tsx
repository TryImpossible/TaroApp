import React, { useState, useEffect, useCallback } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components';
import ServerApi from '../../services/ServerApi';
import globalData from '../../utilities/globalData';

import './home.scss';
import ic_scan from '../../resources/images/ic_home_scan.png';
import ic_recharge from '../../resources/images/ic_home_recharge.png';
import ic_wallet from '../../resources/images/ic_home_wallet.png';
import ic_exchange from '../../resources/images/ic_home_exchange.png';
import bg_card1 from '../../resources/images/bg_home_card1.png';
import bg_card2 from '../../resources/images/bg_home_card2.png';
import bg_card3 from '../../resources/images/bg_home_card3.png';
import bg_card4 from '../../resources/images/bg_home_card4.png';
import bg_card5 from '../../resources/images/bg_home_card5.png';

const OPERATIONS_DATA = [
  { icon: ic_scan, text: '扫一扫' },
  { icon: ic_recharge, text: '充值' },
  { icon: ic_wallet, text: '钱包' },
  { icon: ic_exchange, text: '兑换 DC' },
];

const STATISTICS_DATA = [
  { title: '账户余额(DC)', amount: 0 },
  { title: '收益总额(USDT)', amount: 0 },
  { title: '今日收益(USDT)', amount: 0 },
];

const CARDS_DATA = [
  { icon: bg_card1, text: '普通卡' },
  { icon: bg_card2, text: '铜卡' },
  { icon: bg_card3, text: '银卡' },
  { icon: bg_card4, text: '金卡' },
  { icon: bg_card5, text: '钻石卡' },
];

const Home: React.FC = () => {
  const [refresh, setRefresh] = useState(false);
  const [banner, setBanner] = useState([]);
  const [statistics, setStatistics] = useState(() => [
    { title: '账户余额(DC)', amount: globalData.user.balance },
    { title: '收益总额(USDT)', amount: globalData.user.incomeTotal | 0 },
    { title: '今日收益(USDT)', amount: globalData.user.todayIncomeTotal | 0 },
  ]);
  const [goods, setGoods] = useState([]);

  const onRefresh = useCallback(async () => {
    setRefresh(true);
    await Promise.all([
      ServerApi.getHomeBanner().then((result) => {
        setBanner(result.data);
      }),
      ServerApi.getRecommendGoods(1).then((result) => {
        setGoods(result.data);
      }),
    ]);
    setRefresh(false);
  }, []);
  useEffect(() => {
    onRefresh();
  }, []);

  return (
    <ScrollView
      className="container"
      enableBackToTop
      refresherEnabled
      refresherTriggered={refresh}
      onScrollToLower={() => {}}
      // onScrollToUpper={() => {}}
      onRefresherRefresh={onRefresh}
    >
      <Swiper
        className={process.env.TARO_ENV === 'h5' ? 'swiper-h5' : 'swiper'}
        indicatorColor="#eee"
        indicatorActiveColor="#35ba9b"
        indicatorDots={banner.length > 1}
        circular
        autoplay
      >
        {banner.map((item: any, index) => {
          return (
            <SwiperItem className="swiper_item" key={String(index)}>
              <Image className="image" src={item.url} />
            </SwiperItem>
          );
        })}
      </Swiper>
      <View className="operations">
        {OPERATIONS_DATA.map(({ icon, text }, index) => {
          return (
            <View className="item" key={String(index)}>
              <Image className="icon" src={icon} />
              <Text className="text">{text}</Text>
            </View>
          );
        })}
      </View>
      <View className="statistics">
        {statistics.map(({ title, amount }, index) => {
          return (
            <View className="item" key={String(index)}>
              <Text className="title">{title}</Text>
              <Text className="amount">{amount}</Text>
            </View>
          );
        })}
      </View>
      <View className="cards">
        <Text className="tips">升级会员解锁更多权益</Text>
        <View className="box">
          {CARDS_DATA.map(({ icon, text }, index) => {
            return (
              <View className="item" key={String(index)}>
                <Image className="icon" src={icon} />
                <Text className="text">{text}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View className="section">
        <View className="badge" />
        <Text className="title">推荐商品</Text>
      </View>
      {goods.map((item: any, index) => {
        const {
          url,
          productName,
          dsProductStore: { realPrice },
        } = item;
        return (
          <View className="goods-item" key={String(index)}>
            <Image className="logo" src={url} />
            <View className="description">
              <Text className="title">{productName}</Text>
              <Text className="price">{`${realPrice} dc`}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Home;
