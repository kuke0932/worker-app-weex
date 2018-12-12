<template>
    <div class="container" :style="containerHeight">
      <wxc-minibar title="工作量明细"
                   background-color="#009ff0"
                   text-color="#FFFFFF"
                   :bar-style="headerStyle"
                   :left-button="leftButton"
                   @wxcMinibarLeftButtonClicked="$router.back()"></wxc-minibar>
      <list class="list" @loadmore="loadMore" loadmoreoffset="20">
        <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
          <text class="indicator-text" v-if="!refreshing">下拉刷新</text>
          <text class="indicator-text" v-if="refreshing">加载中</text>
          <loading-indicator class="indicator"></loading-indicator>
        </refresh>
        <cell class="row" v-for="(v, i) in detailList" :index="i" :key="i">
          <div class="item">
            <text class="text">开始时间：{{v.startTime}}</text>
            <text class="text">结束时间：{{v.endTime}}</text>
            <text class="text">产品型号：{{v.productContent}}</text>
            <text class="text">产品编号：{{v.productNo}}</text>
            <text class="text">生产类型：{{productType}}</text>
            <text class="text">订单编号：{{v.order}}</text>
          </div>
        </cell>
        <loading class="loading" @loading="onloading" :display="loading ? 'show' : 'hide'">
          <text class="indicator-text" v-if="!loading">加载更多</text>
          <text class="indicator-text" v-if="loading">加载中</text>
          <loading-indicator class="indicator"></loading-indicator>
        </loading>
        <div class="noticeDiv" v-if="noMoreData">
          <text class="nodataNotice">- 无更多数据 -</text>
        </div>
      </list>
    </div>
</template>

<script>
// import { listStatisticsDetail } from '@/api/mine'
import { WxcMinibar, Utils } from 'weex-ui'
import { RETURN_ICON } from '../type'
import Config from '../config'
// const modal = weex.requireModule('modal')
export default {
  name: 'detailList',
  components: {
    WxcMinibar
  },
  data () {
    return {
      leftButton: RETURN_ICON,
      headerStyle: Config.headerStyle,
      noData: false,
      noMoreData: false,
      refreshing: false,
      loading: false,
      pageNum: 1,
      pageSize: 10,
      detailList: [
        {
          startTime: '2018-12-07 18:23:22',
          endTime: '2018-12-07 18:23:22',
          productContent: '萨丁家乐福卡死了打飞机阿卡丽赛道减法拉盛肯',
          productNo: '123123sfsdfs234234',
          productType: '11102',
          order: '123weqwe123123123'
        },
        {
          startTime: '2018-12-07 18:23:22',
          endTime: '2018-12-07 18:23:22',
          productContent: '萨丁家乐福卡死了打飞机阿卡丽赛道减法拉盛肯',
          productNo: '123123sfsdfs234234',
          productType: '11102',
          order: '123weqwe123123123'
        },
        {
          startTime: '2018-12-07 18:23:22',
          endTime: '2018-12-07 18:23:22',
          productContent: '萨丁家乐福卡死了打飞机阿卡丽赛道减法拉盛肯',
          productNo: '123123sfsdfs234234',
          productType: '11102',
          order: '123weqwe123123123'
        },
        {
          startTime: '2018-12-07 18:23:22',
          endTime: '2018-12-07 18:23:22',
          productContent: '萨丁家乐福卡死了打飞机阿卡丽赛道减法拉盛肯',
          productNo: '123123sfsdfs234234',
          productType: '11102',
          order: '123weqwe123123123'
        },
        {
          startTime: '2018-12-07 18:23:22',
          endTime: '2018-12-07 18:23:22',
          productContent: '萨丁家乐福卡死了打飞机阿卡丽赛道减法拉盛肯',
          productNo: '123123sfsdfs234234',
          productType: '11102',
          order: '123weqwe123123123'
        },
        {
          startTime: '2018-12-07 18:23:22',
          endTime: '2018-12-07 18:23:22',
          productContent: '萨丁家乐福卡死了打飞机阿卡丽赛道减法拉盛肯',
          productNo: '123123sfsdfs234234',
          productType: '11102',
          order: '123weqwe123123123'
        },
        {
          startTime: '2018-12-07 18:23:22',
          endTime: '2018-12-07 18:23:22',
          productContent: '萨丁家乐福卡死了打飞机阿卡丽赛道减法拉盛肯',
          productNo: '123123sfsdfs234234',
          productType: '11102',
          order: '123weqwe123123123'
        },
        {
          startTime: '2018-12-07 18:23:22',
          endTime: '2018-12-07 18:23:22',
          productContent: '萨丁家乐福卡死了打飞机阿卡丽赛道减法拉盛肯',
          productNo: '123123sfsdfs234234',
          productType: '11102',
          order: '123weqwe123123123'
        }
      ],
      detailParams: {}
    }
  },
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    this.containerHeight = { minHeight: tabPageHeight + 'px' }
    this.detailParams = this.$route.query.detailParams
    this.loadMore()
  },
  mounted () {
  },
  methods: {
    fetchData (beginDate, endDate, processNo, fb, produceType, pageNum, pageSize) {
      // return listStatisticsDetail(beginDate, endDate, processNo, fb, produceType, pageNum, pageSize)
    },
    loadMore (type) {
      if (!this.noMoreData) {
        this.fetchData(this.detailParams.beginDate, this.detailParams.endDate, this.detailParams.processNo, this.detailParams.fb, this.detailParams.produceType, this.pageNum, this.pageSize).then(resp => {
          if (resp.data.data.length === 0) {
            this.noData = true
          }
          this.detailList = this.detailList.concat(resp.data.data)
          if (resp.data.data.length < this.pageSize) {
            this.noMoreData = true
          }
          this.refreshing = false
          this.loading = false
          this.pageNum++
        }).catch((e) => {
          this.refreshing = false
          this.loading = false
        })
      } else {
        return Promise.reject(new Error('no data'))
      }
    },
    onrefresh (event) {
      this.noMoreData = false
      this.pageNum = 1
      this.detailList = []
      this.refreshing = true
      return this.loadMore(event.type)
    },
    onloading (event) {
      this.loading = true
      this.loadMore(event.type)
    }
  }
}
</script>

<style scoped>
  .container {
    background-color: #f2f3f4;
  }
  .list{
    margin-left: 50px;
    margin-right: 50px;
    padding-top: 20px;
  }
  .row{
  }
  .item {
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    background-color: white;
    margin-bottom: 20px;
    border-radius: 20px;
  }
  .text{
    color: #333;
    font-size: 28px;
  }
  .refresh {
    width: 650px;
    padding-top: 20px;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .loading {
    width: 650px;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .indicator-text {
    color: #888888;
    font-size: 28px;
    text-align: center;
  }
  .indicator {
    margin-top: 16px;
    height: 60px;
    width: 60px;
    color: #999;
  }
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
</style>
