/*
 * @Descripttion: 代码描述
 * @Author: yeonzhou
 * @Date: 2022-01-11 16:11:36
 * @LastEditors: yeonzhou
 * @LastEditTime: 2022-01-12 17:29:14
 */
import esverify from './utils/es-shim';
import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;
// es shim info
esverify();
// $app() mixin
Vue.mixin({
    methods: {
        $app() {
            return app;
        },
    }
});
const app = new App();
app.$mount();