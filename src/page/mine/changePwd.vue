<template>
  <div class="container" :style="containerHeight">
    <wxc-minibar title="修改密码"
                 background-color="#009ff0"
                 text-color="#FFFFFF"
                 :bar-style="headerStyle"
                 :left-button="leftButton"></wxc-minibar>

    <!--<mt-field label="原密码" placeholder="请输入原密码" type="password" v-model="oldPwd"><span class="must">*</span></mt-field>-->
    <!--<mt-field label="新密码" placeholder="请确认新密码" type="password" v-model="newPwd"><span class="must">*</span></mt-field>-->
    <!--<mt-field label="确认密码" placeholder="请确认新密码" type="password" v-model="confirmNewPwd"><span class="must">*</span></mt-field>-->
    <div class="inputBox">
      <text class="inputLabel">原密码</text>
      <input type="password" class="inputItem"  placeholder="请输入原密码" :autofocus="true" v-model="oldPwd">
      <text class="must">*</text>
    </div>
    <div class="inputBox">
      <text class="inputLabel">新密码</text>
      <input type="password" class="inputItem"  placeholder="请输入新密码" v-model="newPwd">
      <text class="must">*</text>
    </div>
    <div class="inputBox">
      <text class="inputLabel">确认密码</text>
      <input type="password" class="inputItem"  placeholder="请确认新密码" v-model="confirmNewPwd">
      <text class="must">*</text>
    </div>
    <wxc-button text="确认修改"
                class="btn"
                type="blue"
                @wxcButtonClicked="confirmChange"></wxc-button>
  </div>
</template>

<script>
import { WxcMinibar, WxcSearchbar, Utils, WxcButton } from 'weex-ui'
import { RETURN_ICON } from '../type'
import Config from '../config'
// import { changePassword } from '@/api/login'
const modal = weex.requireModule('modal')
export default {
  components: {
    WxcMinibar,
    WxcSearchbar,
    WxcButton
  },
  data () {
    return {
      leftButton: RETURN_ICON,
      headerStyle: Config.headerStyle,
      oldPwd: '',
      newPwd: '',
      confirmNewPwd: '',
      containerHeight: ''
    }
  },
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    this.containerHeight = { minHeight: tabPageHeight + 'px' }
    // const needChangePwd = this.$route.query.needChangePwd
    // function plusReady () {
    //   window.plus.key.addEventListener('backbutton', function () {
    //     // 事件处理
    //     if (needChangePwd === true) {
    //       window.plus.runtime.quit()
    //     } else {
    //       window.history.go(-1)
    //     }
    //   }, false)
    // }
    // if (window.plus) {
    //   plusReady()
    // } else {
    //   document.addEventListener('plusready', plusReady, false)
    // }
  },
  activated () {
    this.oldPwd = ''
    this.newPwd = ''
    this.confirmNewPwd = ''
  },
  methods: {
    confirmChange () {
      // const that = this
      const reg = /^(?![^a-zA-Z]+$)(?!\D+$).{10,15}$/
      if (!this.oldPwd) {
        modal.toast({
          message: '请输入原密码',
          duration: 1
        })
        return
      }
      if (!this.newPwd) {
        modal.toast({
          message: '请输入新密码',
          duration: 1
        })
        return
      }
      if (!reg.test(this.newPwd)) {
        modal.toast({
          message: '密码格式错误',
          duration: 1
        })
        return
      }
      if (!this.confirmNewPwd) {
        modal.toast({
          message: '请确认密码',
          duration: 1
        })
        return
      }
      if (this.newPwd !== this.confirmNewPwd) {
        modal.toast({
          message: '两次输入不一致',
          duration: 1
        })
        return
      }
      modal.confirm({
        message: '确认能修改吗',
        okTitle: '确认',
        cancelTitle: '取消',
        duration: 0.3
      }, function (val) {
        if (val === '确认') {
          /*
          changePassword(this.oldPwd, this.newPwd).then(resp => {
            if (resp.status === 200) {
              modal.toast({
                message: '修改成功',
                duration: 1
              })
              setTimeout(() => {
                that.$store.dispatch('LogOut', {}).then(() => {
                  window.plus.storage.setItem('needChangePwd', 'false')
                  that.$router.replace({name: 'Index', params: {isLogin: this.$store.getters.loginStatus}})
                })
              }, 1000)
            } else {
              modal.alert({
                message: resp.message,
                okTitle: '确认'
              }, function (val) {
                console.log(val)
              })
            }
          })
          */
        }
      })
    }
  }
}
</script>

<style scoped>
  .container {
    background-color: #f2f3f4;
  }
  .inputBox {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: #fff;
    padding-left: 20px;
    margin-bottom: 2px;
  }
  .inputLabel {
    flex: 2;
    align-items: center;
    font-size: 32px;
  }
  .inputItem {
    flex:6;
    align-items: center;
    font-size: 32px;
    height: 50px;
    line-height: 50px;
  }
  .must {
    flex: 1;
    align-items: center;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 32px;
    color: #f00;
  }
  .btn {
    position: fixed;
    bottom: 0;
    width: 750px;
  }
</style>
