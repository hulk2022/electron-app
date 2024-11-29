import { defineStore } from 'pinia';
import { getInfo } from '@api/user';
import { Role, IUserInfo } from '@interface/user';
export const useUserStore = defineStore('userId', {
  state: (): {
    roles: Role[];
    rolePerm: string;
    userInfo: Partial<IUserInfo>;
    permissions: any;
  } => {
    return {
      roles: [],
      rolePerm: '',
      userInfo: {},
      permissions: []
    };
  },
  getters: {},
  actions: {
    async getUserInfo() {
      const res = await getInfo();
      const { permissions, roles, units, userInfo } = res.data;

      //角色信息
      this.roles = roles;
      this.rolePerm = roles[0].rolePerm;

      //权限信息
      this.permissions = permissions;

      //用户信息
      this.userInfo = userInfo;
    }
  },
  persist: {
    enabled: true, //开启数据缓存
    strategies: [
      {
        storage: localStorage, //默认走session
        paths: ['rolePerm', 'userInfo', 'permissions']
      }
    ]
  }
});
