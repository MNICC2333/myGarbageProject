<template>
    <div>
            <!-- banner部分-->
    <div class="store">
      <img :src="`${imgBUI}img/index/index_guild.png`" />
    </div>

    <!--笔记本电脑列表-->
    <div class="store_action">
      <div class="store_action_left">
        <div class="store_action_left_content">
          <div id="plist">
            <div class="salc_top">笔记本电脑</div>
            <div class="salc_content">
              <img
                class="loading"
                :src="`${imgBUI}img/loading.gif`"
                v-if="!data"
              />
              <template v-else>


                <cc-product 
                  v-for="item in data.data" 
                  :key="item.lid" 
                  :p="item"
                  />


              </template>
            </div>
            <!--分页条-->
            <div class="pager" v-if="data">
              <span  :class="{damie: data.pno==1}" @click="getData(data.pno-1)">上</span>
              <span v-for="i in data.pageCount" :key="i" 
                :class="{active: data.pno === i}"
                @click="getData(i)"
              >{{i}}</span>
              <span :class="{damie: data.pno==data.pageCount}" @click="getData(data.pno+1)">下</span>
            </div>

            
          </div>
        </div>
      </div>
      <div class="store_action_right rt">
        <div class="store_action_right_top">
          <p>
            <img
              :src="`${imgBUI}img/foodstore/foodstore_icon2.png`"
              alt=""
            />商家公告
          </p>
          <div>
            <p>``````````````````````````````````</p>
            <p>````````````````````````````````</p>
            <p>````````````````````````````````````</p>
          </div>
        </div>
        <div class="store_action_right_cart">
          <div class="store_action_right_cart_top">
            购物车 <span class="clear rt">清空</span>
          </div>
          <div class="store_action_right_cart_content">
            <div></div>
          </div>
          <div class="sarc">
            <div class="total_price lf">
              <img
                :src="`${imgBUI}img/foodstore/foodstore_car_2.png`"
                alt=""
              />
              
              <!-- 显示钱 -->
              ￥:<span>0.00</span>



            </div>
            <div class="settle lf">
              <a href="cart.html" style="color: #fff">去结算</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--商家-->
    </div>
</template>

<script>
import CcProduct from '@/components/CcProduct.vue'
import { mapState } from 'vuex'
    export default {
        components:{CcProduct },
        props:{
            kw:{
                default:'',
            }
        },
        computed:{ 
                ...mapState(['imgBUI'])
        },
        data() {
            return {
                data: null,
            }
        },
        mounted(){
            this.getData()
        },
        watch:{
            kw(){
                this.getData()
            },
        },
        methods:{
          // 默认第一页
            getData(pno=1){
                const url = `data/product/list.php?pno=${pno}&kw=${this.kw}`
                this.axios.get(url).then(res => {
                    this.data=res.data
                })
            }  
        }

    }
</script>
<style scoped src="../assets/css/products.css"></style>
<style lang="scss" scoped>
.pager{
   padding: 10px;
    background-image: linear-gradient(#eee,#ccc);
    color: rgb(117, 202, 255);
    user-select: none;
  span{
    display: inline-block; width: 35px;height: 35px;
    border: 1px solid #ccc;
    text-align: center;line-height: 35px;
    margin-left: 5px;
    font-size : 14px;

    &.active{
      background: rgb(117, 202, 255);
      color: white;
      border-color: rgb(117, 202, 255);


      pointer-events: none;

    }
    &.damie{
      pointer-events: none;
      color: gray;
    }
  }
}
</style>