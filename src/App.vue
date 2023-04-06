<template>
  <div>
    <cc-hearder v-show="!this.$route.meta.hideH"/>
    <router-view/>
    <cc-footer/>
  </div>
</template>

<script>
import CcFooter from './components/CcFooter.vue'
import CcHearder from './components/CcHearder.vue'
  export default {
  components: { CcHearder, CcFooter },
    watch:{
      $route(){
        console.log(this.$route);
      }
    }
  }
</script>


<style>
@import url('./assets/css/base.css');
@import url('./assets/css/animate.css');
</style>