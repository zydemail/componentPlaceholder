<!--
 * @Descripttion: 代码描述
 * @Author: yeonzhou
 * @Date: 2022-01-12 14:27:05
 * @LastEditors: yeonzhou
 * @LastEditTime: 2022-01-27 11:30:39
-->
<template>
  <view>test component1111: {{message}}</view>
</template>

<script>
import { hello } from '@/utils/tools';

export default {
  data() {
    return {
      message:'hello word',
    }
  },
  created() {
    this.message = hello();
  }
};
</script>