<template>
  <div id="app">
    <div id="nav-bar">
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/credits">Crédits</router-link></li>
      </ul>
    </div>
    <img src="./assets/logo.png">
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
