<template>
     <div class="product" :id="p.lid">
        <router-link :to="`/pdetails?lid=${p.lid}`">
            <img :src="imgBUI+p.pic" :alt="p.title"/>
        </router-link>
        <div>
            <p>
                <span class="price">￥{{p.price}}</span>
               
                    <router-link :to="`/pdetails?lid=${p.lid}`">
                        {{p.title}}
                    </router-link>
              
            </p>
            <div>
            <span class="reduc lf" @click="num--" >-</span>
            <input type="text" value="1" class="lf" v-model="num" />
            <span class="add lf" @click="num++">+</span>

            <div class="addcart" @click="getMoney()">
                加入购物车
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        data() {
            return {
                num: 1,
            }
        },
        props:['p'],
        computed:{
            ...mapState(['imgBUI'])
        },
        watch:{
            num(to,from){
                console.log('to',to,'from',from);
                const zz = /^[1-9]\d*$/
                if (!zz.test(to)) {
                    this.num=from
                }

            }
        },
        mounted(){this.getMoney()},
        methods:{
            getMoney(val){
               val=this.p.price*this.num
               let money = {
                    cm:val
               }
                this.$emit('showMoney',money)
                console.log(money.cm);
            }
        }
    }
</script>
<style lang="css" scoped src="../assets/css/products.css"></style>
<style lang="css" scoped src="../assets/css/login.css"></style>

<style lang="scss" scoped>

</style>