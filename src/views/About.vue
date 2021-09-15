<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="postreq">Post Request</button>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function(){
    return {
      
    }
  },
  methods: {
    postreq: function(){

      axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/login', {
        username: "jonard.ninja34@gmail.com",
        password: 'qwerty12345',
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        if(response.data.success ===  true){
          console.log("Success")
        }

      })
      .catch(function (error) {
        console.log(error);
      });


    }
  }
}
</script>
