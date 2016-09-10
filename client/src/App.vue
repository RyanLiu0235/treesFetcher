<template>
  <div>
    <side-menu></side-menu>
    <div class="main_content">
      <g-header></g-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import store from './vuex/store';
  import gHeader from './components/header';
  import sideMenu from './components/sideMenu';
  export default {
    store,
    components: {
      gHeader, sideMenu
    }
  }
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: 'Microsoft Yahei';
  font-size: 14px;
  color: #333;
}
html {
  height: 100%;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.main_content {
  margin-left: 260px;
}
.container {
  width: 1100px;
  margin: 0 auto;
}
</style>
