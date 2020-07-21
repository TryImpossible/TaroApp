import React from 'react';
import { View, Text } from '@tarojs/components';
import CacheApi from '../../storage/CacheApi';
import './mine.scss';

const Mine: React.FC = () => {
  return (
    <View className="index">
      <Text
        onClick={() => {
          CacheApi.user.remove();
        }}
      >
        我的
      </Text>
    </View>
  );
};

export default Mine;
