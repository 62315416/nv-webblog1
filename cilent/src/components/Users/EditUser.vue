<template>
  <div>
    <h1> Edit User</h1>
      <form v-on:submit = "editUser">
        <div>name : <input type="text" v-model = "user.name"></div>
        <div>lastname : <input type="text" v-model = "user.lastname"></div>
        <div>email : <input type="text" v-model = "user.email"></div>
        <div>password : <input type="text" v-model = "user.password"></div>
        <div><button type="submit">Edit User</button></div>
      </form>
    <hr>
      <div>
        <div>name : {{user.name}}</div>
        <div>lastname : {{user.lastname}}</div>
        <div>email : {{user.email}}</div>
        <div>password : {{user.password}}</div>
      </div>
  </div>
</template>
<script>
import UserService from '@/services/UserService'

export default {
  data (){
    return {
      user: {
        name: '',
        lastname:'',
        email:'',
        password:'',
        status:'active'
      }
    }
  },
  methods: {
    async editUser (){
      try{
        await UserService.put(this.user)
        this.$router.push({
          name: 'users'
        })
      }catch(error){
        console.log(error)
      }
    }
  },async created() {
    try {
      let userId = this.$route.params.userId
      this.user = (await UserService.show(userId)).data
    }catch(error){
      console.log(error)
    }
  },
}

</script>
<style scoped>

</style>
