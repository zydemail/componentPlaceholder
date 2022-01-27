/*
 * @Descripttion: 代码描述
 * @Author: yeonzhou
 * @Date: 2022-01-12 14:27:47
 * @LastEditors: yeonzhou
 * @LastEditTime: 2022-01-12 15:30:18
 */
// 1. 确保在声明补充的类型之前导入 'vue'
import Vue from 'vue';

// 2. 定制一个文件，设置你想要补充的类型
//    在 types/vue.d.ts 里 Vue 有构造函数类型
declare module 'vue/types/vue' {
// 3. 声明为 Vue 补充的东西
  interface VueApp extends Vue {
    globalData?: any;
  }
}

// ComponentOptions is declared in types/options.d.ts
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    externalClasses?: string | string[];
    behaviors?: string | string[];
    componentPlaceholder?: {[name: string]: string | typeof Vue};
    /*
    relations?: {
      [name: string]: {
        type: 'child' | 'parent' | 'ancestor' | 'descendant';
        linked?: (target: any) => void;
        linkChanged?: (target: any) => void;
        unlinked?: (target: any) => void;
        target?: string;
      };
    };
    */
  }
}
