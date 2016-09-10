<template>
  <div>
    <g-header></g-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import gHeader from './components/header';
  export default {
    components: {
      gHeader
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
.container {
  width: 1100px;
  margin: 0 auto;
}
</style>
