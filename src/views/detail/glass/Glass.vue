<template>
  <div class="spec-preview">
    <img :src="bookInfo.imgUrl" />
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <img :src="bookInfo.imgUrl" ref="bigImg"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'glass',
  props: ['bookInfo'],
  methods: {
    // 实现放大镜效果
    handler(event){
      // 获取遮挡层以及放大后的图片
      let mask = this.$refs.mask;
      let big = this.$refs.bigImg;
      // 遮挡层移动的距离
      let left = event.offsetX - mask.offsetWidth/2
      let top  = event.offsetY - mask.offsetHeight/2
      // console.log(left,top)
      // 对遮挡层移动的边界进行限制
      if(left<=0) left = 0
      if(left>mask.offsetWidth) left = mask.offsetWidth
      if(top<=0) top = 0
      if(top>mask.offsetHeight) top = mask.offsetHeight
      mask.style.left = left + 'px'
      mask.style.top = top + 'px'

      big.style.left = (-2*left) + 'px'
      big.style.top = (-2*top) + 'px'
    }
  }
}
</script>

<style scoped>
  .spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
}
.spec-preview img {
  width: 100%;
  height: 100%;
}
.spec-preview .event {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
}
.spec-preview .mask {
  width: 50%;
  height: 50%;
  background-color: rgba(0, 255, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  display: none;
}
.spec-preview .big {
  width: 100%;
  height: 100%;
  position: absolute;
  top: -1px;
  left: 100%;
  border: 1px solid #aaa;
  overflow: hidden;
  z-index: 998;
  display: none;
  background: white;
}
.spec-preview .big img {
  width: 200%;
  max-width: 200%;
  height: 200%;
  position: absolute;
  left: 0;
  top: 0;
}
.spec-preview .event:hover ~ .mask,
.spec-preview .event:hover ~ .big {
  display: block;
}
</style>