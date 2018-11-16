<template>
  <div id="app">
    <router-view/>

    <tabbar v-model="select" v-show="$store.state.tabbar">
      <tabbarItem flag="index"></tabbarItem>
      <tabbarItem flag="shop"></tabbarItem>
      <tabbarItem flag="news"></tabbarItem>
      <tabbarItem flag="company"></tabbarItem>
    </tabbar>  
  </div>
</template>

<script>
  import tabbar from './components/Tabbar'
  import tabbarItem from './components/Tabbar-item'
  export default {
    name: 'App',
    data(){
      return {
        select:'index'
      }
    },
    components:{
      tabbar,
      tabbarItem
    }
  }
</script>

<style>
html ,body{
  height: 100%;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  padding-bottom: 63px;
} 
</style>
