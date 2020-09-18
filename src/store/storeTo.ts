import Vue from 'vue';

// 创建一个小型的 store，里面的数据可以实现多组件共享
export const store = Vue.observable({ count: 0 });

// 模糊VueX 的 mutation
export const mutations = {
  setCount(count: number) {
    store.count = count;
  }
};
