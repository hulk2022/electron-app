import http from '@utils/request';
import { UserRuleForm, PhoneCodeForm, PhoneRuleForm, ILoginRequest } from '@interface/login';

//图形验证码
export const captchaImage = (): Promise<ILoginRequest> => {
  return http.post<ILoginRequest>('/bizApi/auth/getCaptcha', {});
};

//用户登录
export const loginByJson = (data: UserRuleForm): Promise<ILoginRequest> => {
  return http.post<ILoginRequest>('/bizApi/auth/login', data, {});
};

//登录动态验证码
export const loginCaptcha = (data: PhoneCodeForm): Promise<ILoginRequest> => {
  return http.get<ILoginRequest>('/bizApi/auth/getCaptcha', data);
};

//手机验证码登录
export const loginByMobile = (data: PhoneRuleForm): Promise<ILoginRequest> => {
  return http.post<ILoginRequest>('/bizApi/auth/login', data);
};
