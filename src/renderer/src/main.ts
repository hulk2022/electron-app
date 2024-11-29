import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

//路由
import router from './router';

//状态管理
import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';
const store = createPinia();
store.use(piniaPluginPersist);

//icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
import 'element-plus/theme-chalk/index.css';

//国际化
import i18n from './locales';

//全局混入
import useDicts from '@mixins/DIctsPlugin';

//全局组件-分页
import pagination from '@components/pagination/index.vue';
app.component('pagination', pagination);

//自定义指令
import { AuthDirectives } from './directives/auths.directives';
app.directive(AuthDirectives.name, AuthDirectives);

app.use(router);
app.use(store);
app.use(i18n);
app.use(useDicts);
app.mount('#app');
