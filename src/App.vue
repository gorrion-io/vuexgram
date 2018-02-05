<template>
  <div id="app">
    <main-photo />
    <photos-list />
  </div>
</template>

<script>
import  { Component } from 'vue-property-decorator'
import PhotosList from './containers/PhotosList'
import MainPhoto from './containers/MainPhoto'

@Component({
  name: 'App',
  components: { PhotosList, MainPhoto}
})
export default class App {}
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
