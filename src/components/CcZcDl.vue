<template>
    <div>
          <header id="top">
            <div class="top">
            <router-link to="/">
                <img :src="`${$store.state.imgBUI}/img/header/logo.png`" alt="" />
            </router-link>
            <span>{{title}}</span>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        props:['title']
    }
</script>

<style lang="css" scoped src="../assets/css/login.css">
