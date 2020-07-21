import React, { useState, useCallback } from 'react';
import { View, Image, Input, Button, Label } from '@tarojs/components';
import ServerApi from '../../services/ServerApi';
import CacheApi from '../../storage/CacheApi';
import NavigateApi from '../../navigators/NavigateApi';

import './login.scss';
import bg_login from '../../resources/images/bg_login.png';
import logo from '../../resources/images/logo.png';
import ic_user from '../../resources/images/ic_login_user.png';
import ic_password from '../../resources/images/ic_login_password.png';

const Login: React.FC = () => {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const loginByPassword = useCallback(async () => {
    try {
      setLoading(true);
      const result = await ServerApi.loginByPassword(username, password);
      await CacheApi.user.set(result.data.data);
      NavigateApi.startHome();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [username, password]);

  return (
    <View className="container">
      <Image className="bg" src={bg_login} mode="aspectFill" />
      <Image className="logo" src={logo} />
      <View className="inputBox">
        <Image className="icon" src={ic_user} />
        <Input
          className="input"
          placeholderStyle="color: #2F4D5F;"
          placeholder="手机号/邮箱"
          focus
          value={username}
          onInput={({ detail: { value } }) => {
            setUserName(value);
          }}
        />
      </View>
      <View className="inputBox">
        <Image className="icon" src={ic_password} />
        <Input
          className="input"
          placeholderStyle="color: #2F4D5F;"
          placeholder="密码"
          password
          value={password}
          onInput={({ detail: { value } }) => {
            setPassword(value);
          }}
        />
      </View>
      <Label className="forgetPwd">忘记密码?</Label>
      <Button className="login" loading={loading} onClick={loginByPassword}>
        登录
      </Button>
      <View className="btns">
        <Label className="verifyCodeLogin">验证码登录</Label>
        <Label className="register">立即注册</Label>
      </View>
    </View>
  );
};

export default Login;
