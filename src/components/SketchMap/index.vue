<template>
  <div>
    <text style="font-size: 40px;text-align: center;margin-top: 20px;">生产类型图解</text>
    <div class="sketchMap">
      <div class="div1">
        <div class="driver" :style="mainDriverSelected ? matSelected : ''">
          <text class="driverItem coil" :style="mainDriverCoilSelected ? CoilSelected : ''">主驾丝圈</text>
          <text class="driverItem title" :style="mainDriverSelected ? matSelected : ''">主驾</text>
        </div>
        <div style="width: 30px;"></div>
        <div class="driver" :style="copilotSelected ? matSelected : ''">
          <text class="driverItem coil" :style="copilotCoil ? CoilSelected : ''">副驾丝圈</text>
          <text class="driverItem title" :style="copilotSelected ? matSelected : ''">副驾</text>
        </div>
      </div>
      <div class="div2" :style="backRow ? matSelected : ''">
        <div class="semiCircle"></div>
        <div class="backRowDiv">
          <text class="backRowCoil" :style="backRowLeftCoil ? CoilSelected : ''">后排左丝圈</text>
          <div style="width: 30px;"></div>
          <text class="backRowCoil" :style="backRowRightCoil ? CoilSelected : ''">后排右丝圈</text>
        </div>
        <text class="backRowTitle" :style="backRow ? matSelected : ''">后排</text>
      </div>
      <div class="div3" :style="backRow7 ? matSelected : ''">
        <div style="height: 30px;"></div>
        <text class="backRow7Coil" :style="backRow7Coil ? CoilSelected : ''">丝圈</text>
        <text class="backRow7Title" :style="backRow7 ? matSelected : ''">后排7座</text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    produceType: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      arrayProductType: [],
      mainDriverSelected: false,
      mainDriverCoilSelected: false,
      copilotSelected: false,
      copilotCoil: false,
      backRow: false,
      backRowLeftCoil: false,
      backRowRightCoil: false,
      backRow7: false,
      backRow7Coil: false,
      matSelected: {
        backgroundColor: '#22885a',
        color: '#fff'
      },
      CoilSelected: {
        backgroundColor: '#42b983',
        color: '#fff'
      }
    }
  },
  mounted () {
    this.arrayProductType = this.produceType.split('')
    // 主驾
    if (this.arrayProductType[0] === '0') {
      this.mainDriverSelected = false
      this.mainDriverCoilSelected = false
    }
    if (this.arrayProductType[0] === '1') {
      this.mainDriverSelected = true
      this.mainDriverCoilSelected = false
    }
    if (this.arrayProductType[0] === '2') {
      this.mainDriverSelected = false
      this.mainDriverCoilSelected = true
    }
    if (this.arrayProductType[0] === '3') {
      this.mainDriverSelected = true
      this.mainDriverCoilSelected = true
    }
    // 副驾
    if (this.arrayProductType[1] === '0') {
      this.copilotSelected = false
      this.copilotCoil = false
    }
    if (this.arrayProductType[1] === '1') {
      this.copilotSelected = true
      this.copilotCoil = false
    }
    if (this.arrayProductType[1] === '2') {
      this.copilotSelected = false
      this.copilotCoil = true
    }
    if (this.arrayProductType[1] === '3') {
      this.copilotSelected = true
      this.copilotCoil = true
    }
    // 后排左
    if (this.arrayProductType[2] === '0') {
      this.backRow = false
      this.backRowLeftCoil = false
    }
    if (this.arrayProductType[2] === '1') {
      this.backRow = true
      this.backRowLeftCoil = false
    }
    if (this.arrayProductType[2] === '2') {
      this.backRow = false
      this.backRowLeftCoil = true
    }
    if (this.arrayProductType[2] === '3') {
      this.backRow = true
      this.backRowLeftCoil = true
    }
    // 后排右
    if (this.arrayProductType[3] === '0') {
      this.backRow = false
      this.backRowRightCoil = false
    }
    if (this.arrayProductType[3] === '1') {
      this.backRow = true
      this.backRowRightCoil = false
    }
    if (this.arrayProductType[3] === '2') {
      this.backRow = false
      this.backRowRightCoil = true
    }
    if (this.arrayProductType[3] === '3') {
      this.backRow = true
      this.backRowRightCoil = true
    }
    // 后排7座
    if (this.arrayProductType[4] === '0') {
      this.backRow7 = false
      this.backRow7Coil = false
    }
    if (this.arrayProductType[4] === '1') {
      this.backRow7 = true
      this.backRow7Coil = false
    }
    if (this.arrayProductType[4] === '2') {
      this.backRow7 = false
      this.backRow7Coil = true
    }
    if (this.arrayProductType[4] === '3') {
      this.backRow7 = true
      this.backRow7Coil = true
    }
  }
}
</script>

<style scoped>
  .sketchMap{
    height: 700px;
    align-items: center;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 30px;
    margin-left: 100px;
    margin-right: 100px;
    border-width: 1px;
    border-style: solid;
    border-color: #bcbcbc;
    background-color: whitesmoke;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .div1 {
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .driver{
    flex: 1;
    height: 180px;
    width: 220px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #dddddd;
    border-radius: 10px;
  }
  .driverItem{
    color: #6b6b6b;
    font-size: 32px;
  }
  .coil{
    border-radius: 10px;
    background-color: #bcbcbc;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .title{
    margin-top: 20px;
  }
  /*后排*/
  .div2 {
    flex: 1;
    width: 470px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #dddddd;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .semiCircle{
    flex: 1;
    width: 60px;
    background-color: whitesmoke;
    border-bottom-left-radius: 26px;
    border-bottom-right-radius: 26px;
  }
  .backRowDiv {
    flex: 3;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .backRowCoil {
    flex: 1;
    font-size: 32px;
    color: #6b6b6b;
    border-radius: 10px;
    background-color: #bcbcbc;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .backRowTitle{
    flex: 2;
    margin-top: 30px;
    font-size: 32px;
    color: #6b6b6b;
  }
  /*后排七座*/
  .div3{
    flex: 1;
    width: 470px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #dddddd;
    border-radius: 10px;
  }
  .backRow7Coil{
    flex: 1;
    font-size: 32px;
    color: #6b6b6b;
    background-color: #bcbcbc;
    border-radius: 10px;
    text-align: center;
    width: 400px;
    line-height: 80px;
  }
  .backRow7Title{
    flex: 1;
    font-size: 32px;
    color: #6b6b6b;
    margin-top: 20px;
  }
</style>
