<template>
    <div>
    <!-- 页面顶部-->
    <cc-zc-dl title="登录"/>
    <div id="container">
      <div id="cover" class="rt">
        <form id="form-login">
          <div class="txt">
            <p>
              登录学子商城
              <span>
                <router-link to="/register">新用户注册</router-link>
              </span>
            </p>
            <div class="text">
              <input
                type="text"
                placeholder="请输入您的用户名"
                name="uname"
                id="uname"
                required
                autofocus
                v-model="uname"
              />
              <span
                ><img src="http://www.codeboy.com:9999/img/login/yhm.png"
              /></span>
            </div>
            <div class="text">
              <input
                type="password"
                id="upwd"
                placeholder="请输入您的密码"
                name="upwd"
                required
                minlength="6"
                maxlength="15"
                v-model="upwd"
              />
              <span
                ><img :src="`${$store.state.imgBUI}/img/login/mm.png`"
              /></span>
            </div>
            <div class="chose">
              <input
                type="checkbox"
                class="checkbox"
                id="ck_rmbUser"
                value="0"
              />自动登录
              <span>忘记密码？</span>
            </div>
            <input
              class="button_login"
              type="button"
              value="登录"
              id="bt-login"
              @click="buttonL"
            />
          </div>
        </form>
      </div>
    </div>
    <!--错误提示-->
    <div id="showResult"></div>
    </div>
</template>

<script>
import CcZcDl from '@/components/CcZcDl.vue'
    export default {
  components: { CcZcDl },
        data() {
            return {
                uname: '',
                upwd:''
            }
        },
        methods:{
            buttonL(){
                const params = `uname=${this.uname}&upwd=${this.upwd}`
                const url = 'data/user/login.php'
                this.axios.post(url,params).then(res => {
                    console.log(res);
                    if (res.data.code == 200) {
                        // 成功需要将用户名全局分享，存入vuex，并跳转首页
                        this.$store.commit("updataUname",this.uname)
                        this.$router.push('/')
                    } else {
                        alert('用户或密码错误')
                    }
                })
            }
        }
    }
</script>

<style lang="css" scoped src="../assets/css/login.css"></style>