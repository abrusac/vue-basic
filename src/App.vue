<template>
  <div id="app">
    <div class="container">
      <b-navbar nav class="navbar fixed-top navbar-dark bg-dark">
       <b-navbar-nav>
        <b-navbar-brand :to="{ path: '/' }"><a class="navbar-brand" href="#">
           <img src="./assets/logo.png" width="35" height="35" class="d-inline-block align-top" alt="">
            Earthbox design
         </a></b-navbar-brand>
        <b-navbar-brand :to="{ path: '/proizvodi' }">Proizvodi</b-navbar-brand>
        <b-navbar-brand :to="{ path: '/info' }">Info</b-navbar-brand>
       </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view/>
    <img src="./assets/logo.png">
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
  color: #266db3;
  margin-top: 60px;
  background-image: url(https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
}
</style>
