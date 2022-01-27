<!--
 * @Descripttion: 代码描述
 * @Author: yeonzhou
 * @Date: 2022-01-13 11:45:30
 * @LastEditors: yeonzhou
 * @LastEditTime: 2022-01-21 10:08:11
-->
<template>
  <view>
    <xTest />
    <text>{{message}}</text>
  </view>
</template>

<script>
import { hello } from '@/utils/tools';
import { hi } from '@/utils/tools';
import xTest from '@/components/x-test/index.vue'


export default {
  components: {
    xTest
  },
  componentPlaceholder: {
    'xTest': 'view'
  },
  data() {
    return {
      message:'hello word',
    }
  },
  onLoad() {
    this.message = `${hello()} and ${hi()} `;
  }
};
</script>
<style lang="less">

</style>
