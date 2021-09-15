<template>
  <div>
    <div class="container">


      <div class="form-container d-flex justify-content-center align-items-center">
          <form class="myform border rounded py-5 px-3" @submit.prevent="registerUser">
            
            <h1 class="text-center mb-3">Login</h1>
            
            <!-- Email -->
            <div class="mb-3">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" class="form-control" id="email" v-model="email" required>
            </div>

            <!-- Password -->
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" v-model="password" required>
            </div>

            <div class="mb-3" v-if="error">
              <p class="text-danger">You have entered an invalid username or password</p>
            </div>


            <button type="submit" class="btn btn-primary w-100">Login</button>
          </form>
      </div>


    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function(){
    return {
      email: '',
      password: '',
      error: false
    }
  },
  methods: {
    registerUser: function(){

      axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/login', {
        username: this.email,
        password: this.password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then( (response) => {
        
        //Set Authentication to true  if the request is succesful
        if(response.data.success ===  true){
          this.error = false;
          this.$store.commit("setAuthentication", true);
          this.$router.push('/success').catch(() => {});
        }

      })
      .catch( (err) => {
        this.error = true;
        console.log(err);
        console.log(this.error);
      });


    }
  }
}
</script>