<!--
 * @Descripttion: 代码描述
 * @Author: yeonzhou
 * @Date: 2022-01-12 14:27:05
 * @LastEditors: yeonzhou
 * @LastEditTime: 2022-01-27 11:33:20
-->
<template>
  <view>
    UNIAPP 分包优化测试
    <navigator url="/packages/helloworld/pages/index">分包页面</navigator>
    <xTest />
    <hello />
    <tabBar ref="tabbar" selected="sampler" />
  </view>
</template>

<script>
import xTest from '@/components/x-test/index.vue';
import hello from '@/components/hello/index.vue';  // components作为分包页面引入，必须使用占位

import tabBar from '@/components/tabBar/index.vue';

export default {
  components: {
    xTest,
    hello,
    tabBar
  },
  componentPlaceholder: {
    'xTest': 'view',
    'hello': 'view',
    'tabBar': 'view'
  },
  data() {
    return {};
  },
  onLoad() {
    console.log(1111)
  },
    onShow() {
    if (this.$refs.tabbar && this.$refs.tabbar.onShowFun) {
      this.$refs.tabbar.onShowFun();
    }

  },
  methods: {},
};
</script>

<style lang="less">

</style>
