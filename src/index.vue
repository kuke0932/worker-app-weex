<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  created () {
    let domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont', // 注意这里必须是驼峰命名，跟上面的css样式对照
      // eslint-disable-next-line
      'src': "url(\'http://at.alicdn.com/t/font_943580_tfykvvrhr.ttf\')"
    })
  }
}
</script>

<style>
</style>
