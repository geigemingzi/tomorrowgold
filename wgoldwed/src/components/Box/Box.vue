<template>
  <div id="box">    
        <mt-tabbar>
            <router-link active-class="active" class="nav" v-for = "nav in navs" :key = "nav.id" :to = "nav.path" exact >
                <i class="icon" :class="'fa fa-' + nav.icon"></i>
                <p>{{nav.title}}</p>
            </router-link>
        </mt-tabbar>
		<router-view />
  </div>
</template>

<script>
    import Vue from 'vue';
    import { Tabbar, TabItem } from 'mint-ui';
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabItem.name, TabItem);
    export default {
        name: 'Box',
        data () {
            return {
                navs: [
                    { id: 1, title: '首页', icon: 'home', path: '/box/'},
                    { id: 2, title: '分类', icon: 'book', path: '/box/list'},
                    { id: 3, title: '购物车', icon: 'car', path: '/box/cart'},
                    { id: 4, title: '会员', icon: 'user-circle-o', path: '/box/member'}
                ]
            }
        },
        methods: {
            // 实现路由跳转
            ToLink(){
               console.log(11)
            },
        }
    }
</script>

<style scoped lang = 'scss'>
    #box {
        .nav {
            padding-top: .375rem;
            width: 5rem;
            height: 2.625rem;
            padding-bottom: .3125rem; 
            overflow: hidden;
            color: #1a1a1a;
            .icon {
                display: block;
                line-height: 1.25rem;
                font-size: 1.25rem;
            }
            p {
                font-size: .75rem;
                line-height: .75rem;
            }
            &.active {
                color: #c52437;
            }
        }
    }
</style>
