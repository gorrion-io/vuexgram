<template>
  <div id="app">
    <main-photo />
    <photos-list />
  </div>
</template>

<script>
import PhotosList from './components/PhotosList'
import MainPhoto from './components/MainPhoto'

export default {
  name: 'App',
  components: { PhotosList, MainPhoto }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}
</style>
