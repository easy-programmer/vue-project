<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li><router-link v-bind:to="{ name: 'HelloWorld' }">Main</router-link></li>
      <li><router-link v-bind:to="{ name: 'HelloGrid' }">Hello-Grid</router-link></li>
      <li><router-link v-bind:to="{ name: 'SmGrid' }">SM-Grid</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
