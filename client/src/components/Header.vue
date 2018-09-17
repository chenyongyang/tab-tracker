<template>
  <v-toolbar dark color="blue" fixed>
      <v-toolbar-title class="mr-4">
          <router-link to="/" class="register-btn">TabTracker</router-link>
      </v-toolbar-title>
			<v-spacer></v-spacer>
      <v-toolbar-items>
					<v-btn flat dark>
						<router-link to="/login" class="register-btn">登录</router-link>
					</v-btn>
					<v-btn flat dark>
						<router-link to="/register" class="register-btn">注册</router-link>
					</v-btn>
			</v-toolbar-items>
      
     
  </v-toolbar>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.register-btn{
	color: white;
	text-decoration: none;
}
</style>

