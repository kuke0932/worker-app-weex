<template>
  <div class="container" :style="containerHeight">
    <wxc-minibar :title="title"
                 background-color="#009ff0"
                 text-color="#FFFFFF"
                 :bar-style="headerStyle"
                 :left-button="leftButton"
                 right-text="选择车型"
                 @wxcMinibarRightButtonClicked="pickCarType"></wxc-minibar>
    <wxc-searchbar ref="wxc-searchbar"
                   v-model="carCode"
                   placeholder="请输入车型编码"
                   cancel-label="搜索"
                   :always-show-cancel="true"
                   @wxcSearchbarCancelClicked="gotoSearch"
                   @wxcSearchbarInputOnInput="inputValue" ></wxc-searchbar>
    <div class="textContainer">
      <text v-if="!details && !noData"  class="text1">-- 请选择或搜索车型 --</text>
      <text v-if="noData" class="text2">-- 无此帮助详情 --</text>
      <text class="details">{{details}}</text>
    </div>
  </div>
</template>

<script>
// import { listAllCarType } from '@/api/process'
// import { getHelp } from '@/api/mine'
import { WxcMinibar, WxcCell, Utils, WxcSearchbar } from 'weex-ui'
import { RETURN_ICON } from '../type'
import Config from '../config'
const picker = weex.requireModule('picker')
const modal = weex.requireModule('modal')
export default {
  components: {
    WxcMinibar,
    WxcCell,
    WxcSearchbar
  },
  data () {
    return {
      leftButton: RETURN_ICON,
      headerStyle: Config.headerStyle,
      title: '',
      processCode: '',
      carCode: '',
      noData: false,
      details: '',
      allCarList: [
        {
          name: '宝马',
          code: 'BM',
          carTypeList: [
            {
              name: '宝马X1',
              code: 'BM23',
              carTypeList: null
            },
            {
              name: '宝马X3',
              code: 'BM23',
              carTypeList: null
            },
            {
              name: '宝马X5',
              code: 'BM23',
              carTypeList: null
            }
          ]
        },
        {
          name: '奥迪',
          code: 'AD',
          carTypeList: [
            {
              name: '奥迪A4',
              code: 'ADA4',
              carTypeList: null
            },
            {
              name: '奥迪A6',
              code: 'ADA6',
              carTypeList: null
            },
            {
              name: '奥迪A6L',
              code: 'ADA6L',
              carTypeList: null
            }
          ]
        }
      ],
      parentCarList: [],
      childCarList: []
    }
  },
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    this.containerHeight = { minHeight: tabPageHeight + 'px' }
    this.processCode = this.$route.query.code
    this.title = this.$route.query.title
    // listAllCarType().then(resp => {
    //   this.allCarList = resp.data.data
    // })
    this.allCarList.forEach(e => {
      this.parentCarList.push(e.name)
    })
  },
  mounted () {
  },
  methods: {
    fetchData (processCode, carCode) {
      // getHelp(processCode, carCode).then(resp => {
      //   if (resp.data.data) {
      //     this.noData = false
      //     this.details = resp.data.data.helpContent
      //   } else {
      //     this.details = ''
      //     this.noData = true
      //   }
      // })
    },
    inputValue (e) {
      this.carCode = e.value
    },
    gotoSearch () {
      this.fetchData(this.processCode, this.carCode)
      modal.toast({
        message: this.carCode,
        duration: 2
      })
    },
    pickCarType () {
      picker.pickDate({
        value: ''
      }, function (val) {
        modal.toast({
          message: val,
          duration: 4
        })
      })
      // const that = this
      // picker.pick({
      //   index: 0,
      //   items: this.parentCarList,
      //   selectionColor: '#69D2FF',
      //   confirmTitleColor: '#589FDB',
      //   cancelTitleColor: '#589FDB',
      //   title: '选择品牌'
      // }, function (val) {
      //   that.childCarList = []
      //   if (val.result === 'success') {
      //     const childCarListInfo = that.allCarList[val.data].carTypeList
      //     childCarListInfo.forEach(e => {
      //       that.childCarList.push(e.name)
      //     })
      //     picker.pick({
      //       index: 0,
      //       items: that.childCarList,
      //       selectionColor: '#69D2FF',
      //       confirmTitleColor: '#589FDB',
      //       cancelTitleColor: '#589FDB',
      //       title: '选择型号'
      //     }, function (val) {
      //       that.carCode = childCarListInfo[val.data].code
      //       modal.toast({
      //         message: '您选择的事' + that.carCode,
      //         duration: 3
      //       })
      //     })
      //   }
      // })
    }
  }
}
</script>

<style scoped>
  .container {
    background-color: #f2f3f4;
  }
  .textContainer {
    align-items: center;
  }
  .text1 {
    font-size: 32px;
    margin-top: 30px;
    color: #999;
  }
  .text2 {
    font-size: 32px;
    margin-top: 30px;
    color: #999;
  }
  .details{
    text-align: left;
    font-size: 32px;
    color: #333;
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
