<template>
  <div>
    <h1>Contact Page</h1>
    <button class="btn" @click="goHome">Go to home</button>
    <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
<input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">

  </div>
</template>

<script>
export default {
  methods: {
    goHome: function(){
      console.log("I will go home");
      this.$router.push("/")
    }
  }
}
</script>