<template>
  <div>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar 
            flat 
            dense 
            class="blue" 
            dark
          >
            <v-toolbar-title>注册</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              v-model="email"
              label="邮箱"
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="密码"
            ></v-text-field>
          
            <div class="error" v-html="error" />
            <br>
            <v-btn
              class="blue"
              block
              round
              dark
              @click="register">
              注册
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>
 <script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
.error { 
  color: red;
}
</style>