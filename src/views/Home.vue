<template>
  <div class="home">
    <div class="diva">1111</div>
    <div>
      <div class="divi">11111111</div>
      <span class="diva">11111</span>
      <span class="divi">11111</span>
    </div>
    <div>
      <div class="divi">{{cc}}</div>
      <div class="divi" @click="jiajia">+++</div>
      <div class="divi" @click="about">about</div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { store, mutations } from '@/store/storeTo.ts';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    cc() {
      return store.count;
    }
  },
  methods: {
    jiajia() {
      mutations.setCount(this.cc + 1);
    },
    about() {
      this.$router.push('/about');
      https://b.pingan.com.cn/creditcard/life/marketing/uniMGM/uniMGM.html?MGMAD=https%3A%2F%2Fb.pingan.com.cn%2Fkuaizhan%2Fpage%2F20190201%2Fh2329.html%3Fcampaignid%3D201902001401%26activity_Id%3DV921010&source=2020cgMGM
      https://b.pingan.com.cn/creditcard/life/marketing/uniMGM/uniMGM.html?MGMAD=https%3A%2F%2Fb.pingan.com.cn%2Fkuaizhan%2Fpage%2Fccapply%2Fwx%2F20200913%2Fh34383.html%3Fcampaignid%3D202009013160%26ai_id%3Dkuaizhan_h34383%26activity_Id%3DV921010&source=2020cgMGM
    }
  }
};
</script>
<style>
  .divi {
    display: inline-block;
    height: 100px;
    width: 100px;
    line-height: 100px;
    background-color: #42b983;
  }
  .diva{
    height: 100px;
    width: 10px;
    line-height: 100px;
    background-color: bisque;
    margin: 0 auto;
  }
</style>
