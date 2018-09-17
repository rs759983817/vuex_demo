<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to='/count'>Count</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
      // this.axios.get('api/appointment/GetAppointmentList?queryValue='+ encodeURIComponent(queryValue)+ "&pageIndex=" + 1 + "&pageSize=" + 2).then((response)=>{console.log(response);}).catch((error)=>{console.log(error);});
  }
}
</script>
  
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
