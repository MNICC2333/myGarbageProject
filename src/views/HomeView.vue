<template>
  <div v-if="data">
     <!-- banner部分-->
    
    <div>
      <swiper
          ref="mySwiper"
          @mouseover.native="mouseover"
          @mouseout.native="mouseout"
          class="swiper"
          :options="swiperOption"
        >
      <swiper-slide v-for="c in data.carouselItems" :key="c.cid">
        <!-- vuex中的state读取分两种方案 -->
        <!-- 1. 直接从 $store读 适合使用次数少-->
        <!-- 2. 辅助函数: 先引入 再使用 -->
        <img :src="$store.state.imgBUI + c.img" alt="" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    </div>
    <cc-floor-c  :fdata="data.recommendedItems" t="|1 / 首页推荐"/>
    <cc-floor-c  :fdata="data.newArrivalItems" t="|2 / 最新上架"/>
    <cc-floor-c  :fdata="data.topSaleItems" t="|3 / 热销单品"/>

   
  </div>
</template>

<script>
import CcFloorC from '@/components/CcFloorC.vue'
  export default {
    components: { CcFloorC },
   
    data() {
      return {
        data:null,

         swiperOption: {
   
            autoplay: {
              delay: 1000,    
              disableOnInteraction: false,
            },
            loop: true, //是否循环滚动
            pagination: {
              el: '.swiper-pagination',
              clickable: true, //可以点击
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        },
      }
    },
    mounted(){this.getData()},
    methods:{
      getData(){
        const url=`data/product/index.php`
        this.axios.get(url).then(res => {
          this.data=res.data
          console.log(this.data);

        })
      },
      mouseover() {
        console.log('1')
        console.log(this.$refs)
        this.$refs.mySwiper.$swiper.autoplay.stop()
      },
      mouseout() {
        console.log('0')
        this.$refs.mySwiper.$swiper.autoplay.start()
      },
    }
  }
</script>
<style src="../assets/css/item_cat.css" scoped></style>
<style lang="scss" scoped>
.swiper {
  width: 1000px;
  margin: 20px auto;
}
</style>