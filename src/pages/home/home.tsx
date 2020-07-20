import React, { useEffect } from 'react';
import { View, Swiper, SwiperItem } from '@tarojs/components';
import './home.scss';
import ServerApi from '../../services/ServerApi';

const Home: React.FC = () => {
  useEffect(() => {
    const reuslt = ServerApi.getHomeBanner();
    console.log(reuslt);
  }, []);

  return (
    <View className="index">
      <Swiper className="test-h" indicatorColor="#FFF" indicatorActiveColor="#35ba9b" circular indicatorDots autoplay>
        <SwiperItem>
          <View className="demo-text-1">1</View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-2">2</View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-3">3</View>
        </SwiperItem>
      </Swiper>
    </View>
  );
};

export default Home;
