<template>
  <div id="app">
    <v-app>
      <PageHeader/>
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header'
export default {
  name: 'App',
  components:{
    PageHeader
  }
}
</script>

<style>
/* .v-toolbar__title{
  color: white;
}
.v-toolbar__content{
  justify-content: center;
}
.v-btn__content{
  color: white; 
}
.v-btn{
  width: 300px;
  margin: 0 auto;
} */
.layout{
  display: flex;
  margin-top: 150px;
}
</style>
