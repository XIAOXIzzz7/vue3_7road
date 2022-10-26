<template>

  <router-view/>
</template>
<script>

import {hgaxios as axios} from "./utils/request"
import loginVue from './views/mainpage/login.vue'
export default {
  name: 'App',
  components: {
  },
  
  beforeCreate(){
    // console.log("app");
    // axios({
    //   url: '/api/v1/UserInfo/'
    // })                
    // .then(res => {
    //   if (res.data.code===10000){
       
    //     this.$store.state.user_info=res.data.user
    //     this.$store.state.adname = res.data.user.cn_name
    //     // this.$store.state.showname = true
    //     // this.$store.state.showlogin = false
     
    //   }
    //   else{
    //     this.$store.state.user_info=null
    //     // this.$store.state.showname = false
    //     // this.$store.state.showlogin = true
    //   }
    // })
  },
  watch:{
        $route:{
        handler(){
          // console.log("router");
          axios({
            url: '/api/v1/UserInfo/'
          }).then(res => {
            this.$store.state.noadminurl=["/","reserve","share","auth","7roadlogin","login"]
            if (res.data.code == 10000){
                this.$store.state.user_info=res.data.user
                console.log(this.$store.state.user_info,"121212");
                this.$store.state.login_status = true
                
                // axios({
                // url: '/api/v1/AdminConfig/',
                // method:'get',
                // params:{
                //         type:"admin"
                //     }
                // }).then(res => {
                //   if(res.data.code===10210){
                //         this.$store.state.adminlist=res.data.data
                //         this.$store.state.noadminurl=["/","reserve","share","auth","7roadlogin","login"]
                //     }
                // })
                // axios({
                // url: '/api/v1/SetAuth/',
                // method:'get',
                // params:{
                //         type:"admin"
                //     }
                // }).then(res => {
                //     if(res.data.code===10006){
                //         this.$store.state.userlist=res.data.data
                //     }
                   
                // })
                
            }
            else{
              this.$store.state.login_status = false
              this.$store.state.user_info=null
            }
          })
          // console.log(this.$route.path.split("/")[1]);
          if (this.$route.path.split("/")[1]=="qa"){
            // console.log("1");
            this.$store.state.path_=this.$route.path
            
          }
          else if(this.$route.path != "/" ){
            // console.log("2");
            this.$store.state.path_=this.$route.path.split("/")[1]
          }
          else{
            // console.log("3");
            this.$store.state.path_="/"
          }
          
        }
      }
        
    },
  
}
</script>


<style lang="scss">
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {


  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
html,body,#app{
    height: 100%;
  }

</style>
