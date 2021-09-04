<template>
  <div>
    <h1> Show User</h1>
    <div>id : {{user.id }} </div>
    <div>ชื่อนามสกุล : {{user.name }} - {{user.lastname}}</div>
    <div>email : {{user.email}}</div>
    <div>password : {{user.password}}</div>
  </div>
</template>
<script>
import UserService from '@/services/UserService'

export default{
    data () {
      return {
        user: null,
      }
    },
    async created () {
      try{
      let userId = this.$route.params.userId
      this.user = (await UserService.show(userId)).data
      }
      catch (error) {
        console.log (error)
      }
  }
}
</script>
<style scoped>

</style>
