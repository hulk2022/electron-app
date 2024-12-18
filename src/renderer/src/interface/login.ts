//登录，后端给前端返回的数据
export interface ILoginRequest {
  code: number;
  msg: string;
  success: boolean;
  data?: string | null;
}

//账号登录
export interface UserRuleForm {
  username: string;
  password: string;
  captcha: string;
}

//发送验证码
export interface PhoneCodeForm {
  mobile: string;
}

//验证码登录
export interface PhoneRuleForm {
  mobile: string;
  captcha: string;
}
