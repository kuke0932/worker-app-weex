<template>
  <div class="container" :style="containerHeight">
    <wxc-minibar title="工作量统计"
                 background-color="#009ff0"
                 text-color="#FFFFFF"
                 :bar-style="headerStyle"
                 :left-button="leftButton"></wxc-minibar>
    <div class="dataContainer" @click="pickDate">
      <div class="div1">
        <text class="text1">{{selectedDate[0].substring(0, 4) + '年' + selectedDate[0].substring(5, 7) + '月' + selectedDate[0].substring(8, 10) + '日'}}</text>
      </div>
      <div class="div2">
        <text class="text2">开始日期</text>
      </div>
      <div class="div3">
        <text class="text3">{{selectedDate[1].substring(0, 4) + '年' + selectedDate[1].substring(5, 7) + '月' + selectedDate[1].substring(8, 10) + '日'}}</text>
      </div>
      <div class="div4">
        <text class="text4">结束日期</text>
      </div>
    </div>
    <wxc-page-calendar :date-range="dateRange"
                       animationType="push"
                       :selected-date="selectedDate"
                       :selected-note="selectedNote"
                       :is-range="true"
                       :minibar-cfg="minibarCfg"
                       @wxcPageCalendarDateSelected="wxcPageCalendarDateSelected"
                       ref="wxcPageCalendar"></wxc-page-calendar>
    <div class="noticeDiv" v-if="noData">
      <text class="nodataNotice">- 暂无工作量 -</text>
    </div>
    <list class="list">
      <cell v-for="(item, index) in statisticsList" :key="index">
        <div class="cell">
          <wxc-cell label="生产类型："
                    :title="item.produceType"
                    @wxcCellClicked="lookDetail(item.produceType)">
            <text class="iconfont">&#xe603;</text>
          </wxc-cell>
          <div class="infoDiv" v-if="item.CJ1">
            <text class="info info1">裁剪下层：</text>
            <text class="info info2">{{item.CJ1}}</text>
            <div class="info info3">
              <wxc-button text="明细"
                          size="small"
                          type="white"
                          @wxcButtonClicked="goToDetail('CJ1', 'BFB', item.produceType)"></wxc-button>
            </div>
          </div>
          <div class="infoDiv" v-if="item.CJ2">
            <text class="info info1">裁剪上层：</text>
            <text class="info info2">{{item.CJ2}}</text>
            <div class="info info3">
              <wxc-button text="明细"
                          size="small"
                          type="white"
                          @wxcButtonClicked="goToDetail('CJ2', 'BFB', item.produceType)"></wxc-button>
            </div>
          </div>
          <div class="infoDiv" v-if="item.CJ1F">
            <text class="info info1">裁剪下层（翻边）：</text>
            <text class="info info2">{{item.CJ1F}}</text>
            <div class="info info3">
              <wxc-button text="明细"
                          size="small"
                          type="white"
                          @wxcButtonClicked="goToDetail('CJ1F', 'FB', item.produceType)"></wxc-button>
            </div>
          </div>
          <div class="infoDiv" v-if="item.PJ">
            <text class="info info1">拼接：</text>
            <text class="info info2">{{item.PJ}}</text>
            <div class="info info3">
              <wxc-button text="明细"
                          size="small"
                          type="white"
                          @wxcButtonClicked="goToDetail('PJ', 'BFB', item.produceType)"></wxc-button>
            </div>
          </div>
          <div class="infoDiv" v-if="item.PJF">
            <text class="info info1">拼接（翻边）：</text>
            <text class="info info2">{{item.PJF}}</text>
            <div class="info info3">
              <wxc-button text="明细"
                          size="small"
                          type="white"
                          @wxcButtonClicked="goToDetail('PJF', 'FB', item.produceType)"></wxc-button>
            </div>
          </div>
          <div class="infoDiv" v-if="item.QB">
            <text class="info info1">去边：</text>
            <text class="info info2">{{item.QB}}</text>
            <div class="info info3">
              <wxc-button text="明细"
                          size="small"
                          type="white"
                          @wxcButtonClicked="goToDetail('QB', 'BFB', item.produceType)"></wxc-button>
            </div>
          </div>
          <div class="infoDiv" v-if="item.BB">
            <text class="info info1">包边：</text>
            <text class="info info2">{{item.BB}}</text>
            <div class="info info3">
              <wxc-button text="明细"
                          size="small"
                          type="white"
                          @wxcButtonClicked="goToDetail('BB', 'BFB', item.produceType)"></wxc-button>
            </div>
          </div>
          <div class="infoDiv" v-if="item.BBF">
            <text class="info info1">包边（翻边）：</text>
            <text class="info info2">{{item.BBF}}</text>
            <div class="info info3">
              <wxc-button text="明细"
                          size="small"
                          type="white"
                          @wxcButtonClicked="goToDetail('BBF', 'FB', item.produceType)"></wxc-button>
            </div>
          </div>
          <div class="infoDiv" v-if="item.DK">
            <text class="info info1">钉扣：</text>
            <text class="info info2">{{item.DK}}</text>
            <div class="info info3">
              <wxc-button text="明细"
                          size="small"
                          type="white"
                          @wxcButtonClicked="goToDetail('DK', 'BFB', item.produceType)"></wxc-button>
            </div>
          </div>
        </div>
      </cell>
    </list>
    <!--<mt-popup-->
      <!--v-model="popupVisible" style="border-radius: 6px">-->
      <!--<SketchMap :produceType="selProduceType" style="margin: 0 auto;"></SketchMap>-->
    <!--</mt-popup>-->
    <wxc-popup popup-color="#fff"
               :show="showDetail"
               @wxcPopupOverlayClicked="popupOverlayBottomClick"
               pos="top">
      <SketchMap :produceType="selProduceType"  ></SketchMap>
    </wxc-popup>
  </div>
</template>

<script>
import { WxcMinibar, Utils, WxcPageCalendar, WxcCell, WxcButton, WxcPopup } from 'weex-ui'
import { RETURN_ICON } from '../type'
import Config from '../config'
import SketchMap from '@/components/SketchMap/index'
// const modal = weex.requireModule('modal')
// import { listStatistics } from '@/api/mine'
export default {
  components: {
    // SketchMap,
    WxcMinibar,
    Utils,
    WxcPageCalendar,
    WxcCell,
    WxcButton,
    WxcPopup,
    SketchMap
  },
  data () {
    return {
      leftButton: RETURN_ICON,
      headerStyle: Config.headerStyle,
      dateRange: [],
      selectedDate: [],
      selectedNote: ['开始日期', '结束日期'],
      minibarCfg: {
        title: '日期选择'
      },
      beginDate: new Date(),
      endDate: new Date(),
      defaultBeginDate: '',
      defaultEndDate: '',
      noData: false,
      statisticsList: [
        {
          produceType: '11101',
          CJ1: 10,
          CJ2: 5,
          CJ1F: 1,
          PJ: 2,
          PJF: 1,
          QB: 2,
          BB: 4,
          BBF: 1,
          DK: 6
        },
        {
          produceType: '10101',
          CJ1: 10,
          CJ2: 5,
          CJ1F: 1,
          PJ: 2,
          PJF: 1,
          QB: 2,
          BB: 4,
          BBF: 1,
          DK: 6
        }
      ],
      selProduceType: '',
      showDetail: false
    }
  },
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    this.containerHeight = { minHeight: tabPageHeight + 'px' }
    const time = new Date()
    const year = time.getFullYear()
    const month = time.getMonth() + 1
    const date = time.getDate()
    this.defaultBeginDate = year + '-' + this.isTen(month) + '-' + '01'
    this.defaultEndDate = year + '-' + this.isTen(month) + '-' + this.isTen(date)
    this.$set(this.selectedDate, 0, this.defaultBeginDate)
    this.$set(this.selectedDate, 1, this.defaultEndDate)
    this.$set(this.dateRange, 0, (year + '-01-01'))
    this.$set(this.dateRange, 1, this.defaultEndDate)
    this.fetchData(this.defaultBeginDate, this.defaultEndDate)
  },
  mounted () {
  },
  methods: {
    fetchData (beginDate, endDate) {
      // listStatistics(beginDate, endDate).then(resp => {
      //   if (resp.data.data.length === 0) {
      //     this.noData = true
      //   } else {
      //     this.statisticsList = resp.data.data
      //   }
      // })
    },
    pickDate () {
      this.$refs['wxcPageCalendar'].show()
    },
    wxcPageCalendarDateSelected (e) {
      this.selectedDate = e.date
      this.fetchData(this.selectedDate[0], this.selectedDate[1])
    },
    isTen (num) {
      return num < 10 ? '0' + num : num
    },
    goToDetail (processNo, fb, produceType) {
      const detailParams = {
        processNo: processNo,
        fb: fb,
        produceType: produceType,
        beginDate: this.selectedDate[0],
        endDate: this.selectedDate[1]
      }
      this.$router.push({ path: '/page/mine/workloadDetails', query: {detailParams: detailParams} })
    },
    lookDetail (type) {
      this.selProduceType = type
      this.showDetail = true
    },
    popupOverlayBottomClick () {
      this.showDetail = false
    }
  }
}
</script>

<style scoped>
  .iconfont {
    font-family: iconfont;
    font-size: 40px;
    color: #db615b;
  }
  .container {
    background-color: #f2f3f4;
  }
  /* 日期选择 */
  .dataContainer{
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: #fff;
    padding-left: 20px;
  }
  .div1 {
    flex: 4;
  }
  .text1 {
    font-size: 32px;
  }
  .div2 {
    flex: 2;
    margin-top: 10px;
  }
  .text2 {
    color: #555;
  }
  .div3 {
    flex: 4;
  }
  .text3 {
    font-size: 32px;
  }
  .div4 {
    flex: 2;
    margin-top: 10px;
  }
  .text4 {
    color: #555;
  }
  /* 工作量展示 */
  .noticeDiv {
    flex-direction: row;
    justify-content: center;
    height: 80px;
    align-items: center;
  }
  .nodataNotice{
    font-size: 32px;
    color: #999;
  }
  .list{
    padding-left: 40px;
    padding-right: 40px;
  }
  .cell {
    background-color: #fff;
    border-radius: 8px;
    margin-top: 30px;
  }
  .infoDiv{
    flex-direction: row;
    justify-content: center;
    height: 80px;
    align-items: center;
  }
  .info {
    align-self: center;
    font-size: 30px;
  }
  .info1 {
    flex:4;
    text-align: left;
    padding-left: 20px;
  }
  .info2 {
    flex: 2;
  }
  .info3 {
    flex: 2;
  }
  /* 弹出详情 */
  </style>
