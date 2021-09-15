<template>
  <div id="nav" class="container d-flex justify-content-center g-5">
    <router-link to="/" class="d-block mx-2">Register</router-link>
    <router-link to="/Login" class="d-block mx-2">Login</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  data: function(){
    return {
      authenticated: false,
    }
  }
}
</script>

<style>

.myform {
  width: 500px;
}

.form-container {
  height: 90vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
