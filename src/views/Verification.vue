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

            <button type="submit" class="btn btn-primary w-100">Verify</button>
          </form>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  
  methods: {

    verifyUser: function(){
      console.log("Verified");
    }

  }

}
</script>