<template>
  <div id="app">
    <img @click="mumuxe()" src="./assets/logo.png">
    <hello></hello>
    <camera></camera>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Camera from './components/Camera'

export default {
  name: 'app',
  components: {
    Hello,
    Camera
  }
}
</script>

<style>
body {
  background-color: #fff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
