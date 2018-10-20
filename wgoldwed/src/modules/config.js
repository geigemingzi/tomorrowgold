import Vue from 'vue';

// 引入mint
import Mint from 'mint-ui';

// 注册插件
Vue.use(Mint);

import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);

// 单独引入样式
import 'mint-ui/lib/style.css';

import axios from './http';

// 用面向对象知识  增加成Vue属性  方便全局使用
Vue.prototype.$axios = axios;

// 全局组件
import './GlobalComponents';

// 字体图标
import 'font-awesome/css/font-awesome.min.css';

// 按需加载
import './load'

