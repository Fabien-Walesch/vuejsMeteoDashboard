<template>
  <div id="app">
    <nav id="menu">
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/credits">Crédits</router-link></li>
      </ul>
    </nav>
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
@import "./scss/style.scss";
</style>
