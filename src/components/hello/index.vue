<!--
 * @Descripttion: 代码描述
 * @Author: yeonzhou
 * @Date: 2022-01-12 14:27:05
 * @LastEditors: yeonzhou
 * @LastEditTime: 2022-01-27 11:30:45
-->
<template>
  <view>test component2222: {{message}}</view>
</template>

<script>
import { hello } from '@/utils/tools';

export default {
  data() {
    return {
      message:'组件1 hello word',
    }
  },
  created() {
    this.message = hello();
  }
};
</script>