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

            <button type="submit" class="btn btn-primary w-100">Register</button>
          </form>
      </div>


    </div>
  </div>
</template>