<template>
  <div class="wrap m">
    <!--banner轮播-->
    <div class="swiper-container" id="mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="//static.winxuancdn.com/topic/subject/202109/rms/2000-480.jpg"/>
        </div>
        <div class="swiper-slide">
          <img src="//static.winxuancdn.com/topic/subject/202110/tfsz/d/2000-480.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="//static.winxuancdn.com/topic/subject/202109/zp/2000-480-1.jpg"/>
        </div>
        <div class="swiper-slide">
          <img src="//static.winxuancdn.com/topic/subject/202109/rms/2000-480.jpg"/>
        </div>
        <div class="swiper-slide">
          <img src="//static.winxuancdn.com/topic/subject/card/2000-480-1.jpg"/>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  mounted() {
    let mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>

<style scoped>
/* 轮播图组件的上外边距 */
.m{
  margin-top: 10px;
}
/* 设置轮播图图片大小 */
  .wrap .swiper-slide img{
    width: 1280px;
    height: 480px;
  }
</style>