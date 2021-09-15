<template>
  <div>
    <div class="container">
      

      <div class="form-container d-flex justify-content-center align-items-center">
          <form class="myform border rounded py-5 px-3" @submit.prevent="verifyUser">
            <div class="text-center">
              <h1 class="mb-4">Verify Your Email</h1>
              <p>Hi! Paste the verification code from your email and click the button to confirm your email. </p>
            </div>

            <!-- Enter Verification Code -->
            <div class="mb-3">
              <input type="text" class="form-control" id="fullname" v-model="verificationCode" placeholder="Enter Verification Code" required>
            </div>

            <div class="mb-3">
              <p class="text-danger" v-if="error">Wrong Verification code</p>
            </div>

            <button type="submit" class="btn btn-primary w-100">Verify</button>
          </form>
      </div>


    </div>
  </div>
</template>

<script>
import store from '../store/index'
import axios from 'axios'

export default {
  data: function(){
    return {
      store: store,
      verificationCode: '',
      error: ''
    }
  },
  methods: {

    verifyUser: function(){

      axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/verification/verify', {
        token: this.verificationCode,
        via: "email",
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.store.state.access_token
        }
      })
      .then( (response) => {

        if(response.data.success ===  true){
          this.error = false;
          this.$store.commit("setAuthentication", true);
          this.$router.push('/login').catch(() => {});
        }

      })
      .catch( (err) => {
        this.error = true;
        console.log(err);
      });


    }

  }

}
</script>