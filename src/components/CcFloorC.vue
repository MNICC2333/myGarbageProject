<template>
     <!--楼梯3f-->
    <div class="floor" id="f3">
      <div class="floor_top">
        <img
          :src="`${imgBUI}img/index/computer_icon.png`"
          alt=""
        />
        {{t}}
      </div>

      
      <div class="floor_content">
        <div class="food">
          <div class="desc">
            <p class="name"> {{fdata[0].title}} </p>
            <p class="details">
              {{fdata[0].details}}
            </p>
            <p class="price">￥{{fdata[0].price}}</p>
            <div id="one" class="view" @click="goPDetail(0)">查看详情</div>
          </div>
          <img
            :src="imgBUI+fdata[0].pic"
            alt=""
          />
        </div>
        <div class="food">
          <div class="desc">
            <p class="name">{{fdata[1].title}}</p>
            <p class="details">
              酷睿双核i5处理器|256GB SSD| 8GB内存<br />英特尔HD显卡620含共享显卡内存
            </p>
            <p class="price">￥{{fdata[1].price}}</p>
            <div id="two" class="view" @click="goPDetail(1)" >查看详情</div>
          </div>
          <img
            :src="imgBUI+fdata[1].pic"
          />
        </div>
        <div class="food">
          <div class="desc">
            <p class="name">{{fdata[2].title}}</p>
            <p class="price">￥{{fdata[2].price}}</p>
            <div id="three" class="view" @click="goPDetail(2)" >查看详情</div>
          </div>
          <img
            :src="imgBUI+fdata[2].pic"
            alt=""
          />
        </div>
        <div class="product">
          <img
            :src="imgBUI+fdata[3].pic"
            alt=""
          />
          <h2>{{fdata[3].title}}</h2>
          <p>￥{{fdata[3].price}}</p>
          <a id="four" @click="goPDetail(3)" >查看详情</a>
        </div>
        <div class="product">
          <img
            :src="imgBUI+fdata[4].pic"
            alt=""
          />
          <h2>{{fdata[4].title}}</h2>
          <p>￥{{fdata[4].price}}</p>
          <a id="five" @click="goPDetail(4)" >查看详情</a>
        </div>
        <div class="product">
          <img
            :src="imgBUI+fdata[5].pic"
            alt=""
          />
          <h2>{{fdata[5].title}}</h2>
          <p>￥{{fdata[5].price}}</p>
          <a id="fix" @click="goPDetail(5)" >查看详情</a>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        props:['fdata','t'],
        computed:{
            ...mapState(['imgBUI'])
        },
        methods:{
          goPDetail(index){
              console.log(this.fdata[index]);
              const path="/pdetails?"+this.fdata[index].href.split('?')[1]
              console.log(path);
              this.$router.push(path)

          }
        }
    }
</script>
<style scoped src="../assets/css/item_cat.css"></style>
<style lang="scss" scoped>

</style>