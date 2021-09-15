<template>
  <div>
    <div class="container">


      <div class="form-container d-flex justify-content-center align-items-center">
          <form class="myform border rounded py-5 px-3" @submit.prevent="registerUser">
            
            <h1 class="text-center mb-3">Register</h1>

            <!-- Full Name -->
            <div class="mb-3">
              <label for="fullName" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="fullname" v-model="fullName" required>
              <div v-if="error.fullName" class="text-danger">Please input a valid full name</div>
            </div>

            <!-- Email -->
            <div class="mb-3">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" class="form-control" id="email" v-model="email" required>
              <div v-if="error.email" class="text-danger">Please input valid email</div>
            </div>

            <!-- Password -->
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" v-model="password" required>
              <div v-if="error.password" class="text-danger">Password must be at least 8 characters, at least one letter and one number</div>
            </div>

            <!-- Confirm Password -->
            <div class="mb-3">
              <label for="confirmPassword" class="form-label">Confirm Password</label>
              <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required>
              <div v-if="error.confirmPassword" class="text-danger">This must be the same with the password</div>
            </div>

            <div  class="mb-3">
              <div v-if="errorRequest" class="text-danger">The email  is already registered</div>
            </div>

            <button type="submit" class="btn btn-primary w-100">Register</button>
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
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: {
        fullName: false,
        email: false,
        password: false,
        confirmPassword: false,
      },
      errorRequest: false
    }
  },
  methods: {

    registerUser: function(){

      var fullnameregexp = new RegExp(/^[a-z]+\s[a-z ]+$/i);
      var emailregexp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      var passwordregexp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
      
      //Full Name validation
      if(this.fullName === '' || this.fullName === null || this.fullName.length <= 4 || fullnameregexp.test(this.fullName) === false){
        this.error.fullName = true;
      } else {
        this.error.fullName = false;
      }

      //Email Validation
      if(this.email === '' || this.email === null || emailregexp.test(this.email) === false){
        this.error.email = true;
      } else {
        this.error.email = false;
      }

      //Password Validation
      if(this.password === '' || this.password === null || passwordregexp.test(this.password) === false){
        this.error.password = true;
      } else {
        this.error.password = false;

        //Confirm Password  Validation
        if(this.confirmPassword !== this.password || this.confirmPassword === '' || this.confirmPassword === null || passwordregexp.test(this.confirmPassword) === false){
          this.error.confirmPassword = true;
        } else {
          this.error.confirmPassword = false;
        }
      }


      //Validate Form if error exists
      if(this.error.fullName === false && this.error.email === false && this.error.password === false && this.error.confirmPassword === false && this.password === this.confirmPassword){

          axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/register', {
            email: this.email,
            full_name: this.fullName,
            password: this.password,
            password_confirmation: this.confirmPassword
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then( (response) => {
            
            //Store the access token and { email is optional } for the verification page to access
            if(response.data.success ===  true){
              this.$store.commit("setUseremail", this.email);
              this.$store.commit("setAccessToken", response.data.data.access_token);
              this.$router.push('/verification');
            }

          })
          .catch( (err) => {
            this.errorRequest =  true;
            console.log(err);
          });

      }

    }

  }
}
</script>