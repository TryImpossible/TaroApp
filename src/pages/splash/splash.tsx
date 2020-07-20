import React, { useEffect } from 'react';
import { Image } from '@tarojs/components';
import CacheApi from '../../storage/CacheApi';
import NavigateApi from '../../navigators/NavigateApi';
import './splash.scss';
import launch from '../../resources/images/launch.png';

const Splash: React.FC = () => {
  useEffect(() => {
    CacheApi.user
      .get()
      .then(() => {
        NavigateApi.startHome();
      })
      .catch(() => {
        NavigateApi.startLogin();
      });
  }, []);

  return <Image className="index" src={launch} />;
};

export default Splash;
