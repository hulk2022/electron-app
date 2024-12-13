<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, computed, getCurrentInstance, ComponentInternalInstance } from 'vue';

import { VueI18n } from 'vue-i18n';
const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const locale = computed(() => {
  const i18n = proxy?.$i18n as VueI18n;
  return i18n.messages[i18n.locale].el;
});

onBeforeMount(() => {
  const dark = ref<string | null>(localStorage.getItem('dark'));
  const element = document.querySelector('html') as HTMLElement | null;
  if (element) {
    if (dark.value == 'dark') {
      element.className = 'dark';
    } else {
      element.className = '';
    }
  }
});
</script>

<style lang="scss">
@use './assets/css/style.scss';
</style>
