<template>
  <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="iconFont">
    <div class="item-container" :style="contentStyle">
      <wxc-minibar title="首页"
                   background-color="#009ff0"
                   text-color="#FFFFFF"
                   :bar-style="headerStyle"
                   left-button=""></wxc-minibar>
      <div class="bigBox">
        <div class="boxItem">
          <div class="iconBox" style="backgroundColor: #89c47d"><image src="/src/assets/LL.png" style="width: 80px;height: 80px;"></image></div>
          <text class="appName">领料</text>
        </div>
        <div class="boxItem" v-if="isShow(item.code)" v-for="(item, index) in processList" :key="index">
          <div class="iconBox" :style="{backgroundColor: background[item.code]}"><image :src="'/src/assets/' + item.code + '.png'" style="width: 80px;height: 80px;"></image></div>
          <text class="appName">{{item.name}}</text>
        </div>
        <div class="boxItem">
          <div class="iconBox" style="backgroundColor: #db7164"><image src="/src/assets/WX.png" style="width: 80px;height: 80px;"></image></div>
          <text class="appName">维修</text>
        </div>
      </div>
    </div>
    <div class="item-container" :style="contentStyle">
      <div class="demo">
        <wxc-minibar title="我的"
                     background-color="#009ff0"
                     text-color="#FFFFFF"
                     :bar-style="headerStyle"
                     left-button=""></wxc-minibar>
      </div>
      <div class="personInfo">
        <div class="headImgBox"><image src="/src/assets/workerHead.jpg" style="width: 200px;height: 200px;"></image></div>
        <div class="infoDetail"><text style="font-size: 32px;">账号：jiuyangadmin</text></div>
      </div>
      <wxc-cell label="修改密码"
                :has-arrow="true"
                @wxcCellClicked="changePwd"
                :has-top-border="false"></wxc-cell>
      <wxc-cell label="工作量统计"
                :has-arrow="true"
                @wxcCellClicked="workloadAccount"
                :has-top-border="false"></wxc-cell>
      <wxc-cell label="帮助"
                :has-arrow="true"
                @wxcCellClicked="help"
                :has-top-border="false"></wxc-cell>
      <wxc-cell label="设置"
                :has-arrow="true"
                @wxcCellClicked="set"
                :has-top-border="false"></wxc-cell>
      <wxc-cell label="退出登录"
                :has-arrow="true"
                @wxcCellClicked="loginOut"
                :has-top-border="false"></wxc-cell>
    </div>
  </wxc-tab-bar>
</template>
<script>
import { WxcTabBar, Utils, WxcMinibar, WxcCell, WxcDialog } from 'weex-ui'
import Config from './config'

// const navigator = weex.requireModule('navigator')
// import { listProcessByLoginName } from '@/api/process'

const modal = weex.requireModule('modal')
export default {
  components: {
    WxcTabBar,
    WxcMinibar,
    WxcCell,
    WxcDialog
  },
  data () {
    return {
      tabTitles: Config.tabIconFontTitles,
      tabStyles: Config.tabIconFontStyles,
      headerStyle: {height: '120px', alignItems: 'flex-end', paddingBottom: '20px'},
      userName: '',
      processList: [
        {
          name: '拼接',
          code: 'PJ'
        },
        {
          name: '包边',
          code: 'BB'
        },
        {
          name: '去边',
          code: 'QB'
        },
        {
          name: '钉扣',
          code: 'DK'
        },
        {
          name: '发货',
          code: 'FH'
        },
        {
          name: '裁剪',
          code: 'CJ'
        }
      ],
      background: {
        PJ: '#f0a45d',
        BB: '#3498db',
        QB: '#f3bc33',
        DK: '#D57AE8',
        FH: '#8ed9cc',
        CJ: '#25C9A9'
      }
    }
  },
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    const { tabStyles } = this
    console.log(tabStyles)
    this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' }
    // const that = this
    // function plusReady () {
    //   const token = window.plus.storage.getItem('token')
    //   if (token) {
    //     listProcessByLoginName().then(resp => {
    //       that.processList = resp.data.data
    //     }).catch((e) => {
    //       if (e.response.status === 500) {
    //         that.$store.dispatch('LogOut', {}).then(() => {
    //           this.$emit('loginStatus', this.$store.getters.loginStatus)
    //           modal.toast({
    //             message: '退出成功',
    //             duration: 1
    //           })
    //         })
    //       }
    //     })
    //   }
    //   setTimeout(() => {
    //     window.plus.navigator.closeSplashscreen()
    //   }, 1)
    // }
    // if (window.plus) {
    //   plusReady()
    // } else {
    //   document.addEventListener('plusready', plusReady, false)
    // }
  },
  mounted () {
    // this.userName = this.$store.getters.name
  },
  methods: {
    goLL () {
      this.$router.push({name: 'QrCode', query: {code: 'LL', title: '领料', content: '领料'}})
    },
    goWX () {
      this.$router.push({name: 'QrCode', query: {code: 'WX', title: '维修', content: '维修'}})
    },
    openProcess (item) {
      this.$router.push({name: 'QrCode', query: {code: item.code, processSort: item.processSort, title: item.name}, params: {content: item.content}})
    },
    isShow (code) {
      let codeList = []
      let flag = false
      this.processList.forEach(v => {
        codeList.push(v.code)
      })
      codeList.forEach(v => {
        if (code === v) {
          flag = true
        }
      })
      return flag
    },
    changePwd (e) {
      this.$router.push({path: '/page/mine/changePwd'})
      // navigator.push({
      //   url: '/page/mine/changePwd',
      //   animated: 'true'
      // }, e => {
      //   console.log(e)
      // })
    },
    workloadAccount () {
      this.$router.push({path: '/page/mine/workloadAccount'})
    },
    help (e) {
      this.$router.push({path: '/page/mine/help'})
    },
    set () {},
    loginOut () {
      // const that = this
      modal.confirm({
        message: '您确认退出吗',
        okTitle: '确认',
        cancelTitle: '取消',
        duration: 0.2
      }, function (val) {
        if (val === '确认') {
          // that.$store.dispatch('LogOut', {}).then(() => {
          //   this.$emit('loginStatus', this.$store.getters.loginStatus)
          modal.toast({
            message: '退出成功',
            duration: 1
          })
          // })
        }
      })
    }
  }
}
</script>
<style scoped>
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
  }
  /* 主页页面 */
  .bigBox {
    flex-flow: row;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 20px;
  }
  .boxItem {
    width: 230px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    background-color: #fff;
    padding-bottom: 30px;
  }
  .iconBox {
    flex-direction: row;
    justify-content: center;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 25px;
    padding-bottom: 25px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 50px;
    margin-right: 50px;
    border-radius: 80px;
  }
  .appName{
    text-align: center;
    font-size: 32px;
    color: #333;
  }
  /* 我的页面 */
  .personInfo {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 240px;
    margin-top: 20px;
    margin-bottom: 30px;
    background-color: #fff;
  }
  .headImgBox {
    flex: 1;
    align-items: center;
  }
  .infoDetail {
    flex: 2;
  }
</style>
