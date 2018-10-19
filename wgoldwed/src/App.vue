<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Mint from 'mint-ui';
  // 注册插件
  Vue.use(Mint);
  // 单独引入样式
  import 'mint-ui/lib/style.css';
  // 引入请求框架
  import axios from 'axios';
  // 用面向对象知识  增加成Vue属性  方便全局使用
  Vue.prototype.$axios = axios;
export default {

  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
