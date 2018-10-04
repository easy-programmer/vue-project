<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css" media="screen" title="no title" charset="utf-8">
    <img src="./assets/logo.png">
    <ul>
      <li><router-link v-bind:to="{ name: 'HelloWorld' }">Main</router-link></li>
      <li><router-link v-bind:to="{ name: 'HelloGrid' }">Hello-Grid</router-link></li>
      <li><router-link v-bind:to="{ name: 'SmGrid' }">SM-Grid</router-link></li>
      <li><router-link v-bind:to="{ name: 'Movie' }">Movie</router-link></li>
    </ul>
    <ul>
      <li><router-link v-bind:to="{ name: 'HelloBoard' }">Main</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js" charset="utf-8"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.js" charset="utf-8"></script>

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
