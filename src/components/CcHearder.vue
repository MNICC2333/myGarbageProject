<template>
    <div>
        <!-- 页面顶部-->
<header id="top">
  <div id="logo" class="lf">
    <router-link to="/">
      <img
        class="animated jello"
        :src="`${imgBUI}img/header/logo.png`"
        alt="logo"
      />
    </router-link>
  </div>
  <div id="top_input" class="lf">
    <input
      id="input"
      class="input-kw"
      type="text"
      placeholder="请输入您要搜索的内容"
      v-model="kw"
      @keyup.enter="souSuo"
    />
    <div class="seek" tabindex="-1">
      <div class="actived">
        <span>分类搜索</span>
        <img
          :src="`${imgBUI}img/header/header_normal.png`"
          alt=""
        />
      </div>
      <div class="seek_content">
        <div id="xxyp">学习用品</div>
        <div id="srdz">私人订制</div>
      </div>
    </div>
    <router-link :to="`/products/${this.kw}`">
    <img
        id="search"
        :src="`${imgBUI}img/header/search.png`"
        alt="搜索"
    /></router-link>
  </div>
  <div class="rt">
    <ul class="lf">
      <li>
        <a href="my_collect.html" title="我的收藏"
          ><img
            class="care"
            :src="`${imgBUI}img/header/care.png`"
            alt="" /></a
        ><b>|</b>
      </li>
      <li>
        <a href="lookforward.html" title="用户中心"
          ><img
            class="order"
            :src="`${imgBUI}img/header/order.png`"
            alt="" /></a
        ><b>|</b>
      </li>
      <li>
        <a href="cart.html" title="我的购物车"
          ><img
            class="shopcar"
            :src="`${imgBUI}img/header/shop_car.png`"
            alt="" /></a
        ><b>|</b>
      </li>
    </ul>
    <!-- 用户名不存在时，显示此列表 -->
    <ul class="lf login_info" v-show="!uname">
      <li><router-link to="/register" title="注册新用户">&nbsp;注册</router-link><b>|</b></li>
      <li><router-link to="/login" title="用户登录">登录</router-link></li>
    </ul>
    <!-- 用户名存在时，点击退出，用户名消失 -->
    <ul class="lf login_info" v-show="uname">
      <li>欢迎【{{uname}}】<b>|</b>&nbsp;<span @click="updataUname(null)">&nbsp;退出</span></li>
      <li><router-link to="/login" title="用户中心">用户中心</router-link></li>
    </ul>
  </div>
</header>
<!-- nav主导航-->
<nav id="nav">
  <ul>
    <li><router-link to="/">首页</router-link>
    <li><a href="lookforward.html" class="activ">学习用品</a></li>
    <li><a href="lookforward.html">私人定制</a></li>
  </ul>
</nav>

    </div>
</template>

<script>
import router from '@/router'
import { mapMutations, mapState } from 'vuex'
    export default {
        computed:{
            ...mapState(['imgBUI','uname'])
        },
        data() {
            return {
                kw: ''
            }
        },
        methods:{
          ...mapMutations(['updataUname']),
            souSuo(){
                const path = "/products/"+this.kw
                if (this.$route.path == path) {
                    return 
                }
                this.$router.push(path)
            }
        }
    }
</script>
<style lang="scss" scoped></style>
<style lang="scss" scoped>

</style>