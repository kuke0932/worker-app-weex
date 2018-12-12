<template>
  <div :style="containerHeight">
    <Home v-if="isLogin" @loginStatus="judgeLogin"></Home>
    <Login v-else @loginStatus="judgeLogin"></Login>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import { Utils } from 'weex-ui'
const modal = weex.requireModule('modal')
export default {
  name: 'Index',
  components: {
    Login,
    Home
  },
  data () {
    return {
      isLogin: false
    }
  },
  activated () {
    if (this.$route.params.isLogin !== undefined) {
      this.isLogin = this.$route.params.isLogin
    }
    const that = this
    function plusReady () {
      const token = window.plus.storage.getItem('token')
      const startTime = parseInt(window.plus.storage.getItem('startTime'))
      const needChangePwd = window.plus.storage.getItem('needChangePwd') === 'true'
      if (needChangePwd) {
        this.$router.replace({path: '/mine/changePwd.vue', query: {needChangePwd: true}})
        modal.toast({
          message: '密码为初始密码，请先修改密码！',
          duration: 1
        })
      }
      if (token && startTime) {
        const date = new Date()
        const endTime = date.getTime()
        const time = Math.floor((endTime - startTime) / 86400000)
        if (time > 30) {
          modal.toast({
            message: '登录信息已过期，请重新登录',
            duration: 1
          })
          that.isLogin = false
        } else {
          that.isLogin = true
        }
      } else {
        that.isLogin = false
      }
    }
    if (window.plus) {
      plusReady()
    } else {
      document.addEventListener('plusready', plusReady, false)
    }
  },
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    this.containerHeight = { minHeight: tabPageHeight + 'px' }
  },
  mounted () {
  },
  methods: {
    judgeLogin (isLogin) {
      this.isLogin = isLogin
    }
  }
}
</script>
