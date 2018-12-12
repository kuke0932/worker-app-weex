<template>
<div class="container">
  <scroller class="scroller">
    <div class="header">
      <text class="title">欢迎使用生产管理系统</text>
    </div>
    <div class="logo">
      <image class="logoImg" style="width:520px;height:420px" src="/src/assets/product.jpg"></image>
    </div>
    <div class="login">
      <div class="input-wrapper">
        <input class="input" type="text" placeholder="请输入工号" v-model="form.workerNumber"/>
        <text class="iconfont input-img">&#xe600;</text>
      </div>
      <div class="input-wrapper">
        <input class="input" type="password" placeholder="请输入密码" v-model="form.password"/>
        <text class="iconfont input-img">&#xe6d1;</text>
      </div>
    </div>
    <div class="btn_box">
    <wxc-button text="立即登录"
                class="btn"
                type="blue"
                @wxcButtonClicked="loginSystem"></wxc-button>
    </div>
  </scroller>
</div>
</template>

<script>
import { WxcButton } from 'weex-ui'
// const modal = weex.requireModule('modal')
export default {
  components: {
    WxcButton
  },
  data () {
    return {
      scrollerWidth: 0,
      scrollerHeight: 0,
      form: {
        workerNumber: '',
        password: ''
      }
    }
  },
  created () {
    function plusReady () {
    }
    if (window.plus) {
      plusReady()
    } else {
      document.addEventListener('plusready', plusReady, false)
    }
  },
  mounted () {
    // this.scrollerHeight = document.documentElement.clientHeight
    // this.scrollerWidth = document.documentElement.clientWidth
  },
  methods: {
    loginSystem () {
      // if (!this.form.workerNumber) {
      //   modal.toast({
      //     message: '请输入工号',
      //     duration: 1
      //   })
      //   return
      // }
      // if (!this.form.password) {
      //   modal.toast({
      //     message: '请输入密码',
      //     duration: 1
      //   })
      //   return
      // }
      this.$emit('loginStatus', true)
      // this.$store.dispatch('LoginByUsername', this.form).then(() => {
      //   this.$emit('loginStatus', this.$store.getters.loginStatus)
      //   if (window.plus.storage.getItem('needChangePwd') === 'true') {
      //     this.$router.replace({path: '/mine/changePwd.vue', query: {needChangePwd: true}})
      //     modal.toast({
      //       message: '密码为初始密码，请先修改密码！',
      //       duration: 1
      //     })
      //   } else {
      //     modal.toast({
      //       message: '登录成功',
      //       duration: 1
      //     })
      //   }
      // }).catch((e) => {
      //   console.log(e)
      // })
    }
  }
}
</script>

<style scoped>
  .iconfont {
    font-family:iconfont;
  }
  .scroller{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .header {
    margin-top: 120px;
    margin-bottom: 30px;
  }
  .title{
    color: #444;
    text-align: center;
    font-weight: bold;
    font-size: 56px;
  }
  .logo{
    flex-direction: row;
    justify-content: center;
    margin-bottom: 60px;
  }
  .login{
  }
  .input-wrapper{
    margin-top: 0;
    margin-bottom: 20px;
    margin-left: 60px;
    margin-right: 60px;
  }
  .input {
    font-size: 30px;
    height: 80px;
    padding-left: 90px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-width:1px;
    border-color: #26a2ff;
    border-radius:10px;
    outline: none;
  }
  .input-img{
    position: absolute;
    top:22px;
    left: 30px;
    width: 35px;
    height: 35px;
    color: #999;
    font-size: 35px;
  }
  .btn_box {
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 60px;
  }
  .btn{
    width: 650px;
  }
</style>
