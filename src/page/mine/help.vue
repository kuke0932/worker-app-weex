<template>
  <div :style="containerHeight">
    <wxc-minibar title="帮助"
                 background-color="#009ff0"
                 text-color="#FFFFFF"
                 :bar-style="headerStyle"
                 :left-button="leftButton"></wxc-minibar>
    <wxc-cell v-for="(item, index) in processList"
              :key="index"
              :label="item.name"
              :has-arrow="true"
              @wxcCellClicked="getHelpDetail(item)"
              :has-top-border="false"></wxc-cell>
  </div>
</template>

<script>
// import { listProcess } from '@/api/mine'
import { WxcMinibar, WxcCell, Utils } from 'weex-ui'
import { RETURN_ICON } from '../type'
import Config from '../config'
export default {
  components: {
    WxcMinibar,
    WxcCell
  },
  data () {
    return {
      leftButton: RETURN_ICON,
      headerStyle: Config.headerStyle,
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
      ]
    }
  },
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    this.containerHeight = { minHeight: tabPageHeight + 'px' }
  },
  mounted () {
    // this.fetchData()
  },
  methods: {
    // fetchData () {
    //   listProcess().then(resp => {
    //     this.processList = resp.data.data
    //   })
    // }
    getHelpDetail (item) {
      this.$router.push({path: '/page/mine/helpDetails', query: {code: item.code, title: item.name}})
    }
  }
}
</script>

<style scoped>
</style>
