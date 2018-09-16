<template>
  <div>
    <h1>注册</h1>
     <input 
      type="email" 
      name="email"
      v-model="email"
      placeholder="邮箱" />
    <br>
    <input 
      type="password" 
      name="password"
      v-model="password"
      placeholder="密码" />
    <br>
    <button
      @click="register">
      注册
    </button>
  </div>
</template>
 <script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
<style scoped>
</style>