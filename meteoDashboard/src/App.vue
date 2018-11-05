<template>
  <div id="app">
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox"/>
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li><router-link to="/"><button type="button"><i class="material-icons">home</i><p>Home</p></button></router-link></li>
          <li><router-link to="/credits"><button type="button"><i class="material-icons">insert_photo</i><p>Crédits</p></button></router-link></li>
          <li><router-link to="/contact"><button type="button"><i class="material-icons">email</i><p>Contact</p></button></router-link></li>
        </ul>
      </div>
    </nav>
    <header>
      <div id="logo">
        <img src="./assets/img/logo-weatherapp.png" alt="logo weatherapp dashboard"/>
        <h1>Weather App Dashboard</h1>
      </div>
    </header>
    <transition name="router-anim" enter-active-class="animated fadeIn faster">
      <router-view></router-view>
    </transition>
    <footer>
      <p>Fabien Walesch Design © 2018</p>
    </footer> 
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "./assets/scss/style.scss";

</style>
