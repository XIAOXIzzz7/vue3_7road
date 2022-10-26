<template>
    <div style="display:flex">
       <div type="primary" v-loading.fullscreen.lock="fullscreenLoading">

       </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
  name: '7roadlogin',
  data(){
      return{
          fullscreenLoading: true,
      }
  },
  methods:{
      julogin(){
            let user = this.$route.query.username
            let token = this.$route.query.token
           
            let param = new URLSearchParams()
            param.append('username', user)
            param.append('password', token)

        
            axios.post('/api/v1/auth/',param)
            .then(res=>{
                // let msg=res.data.msg;
                
                this.$store.state.user_info=res.data.user;
                if(res.data.code ===10000){
                    // console.log(res.data.user.cn_name);
                //     this.$message({
                //     message: msg,
                //     type: 'success'
                // })
                this.$store.state.showlogin=false
             
                this.$router.push({path:"/"})
                }else if (res.data.code===10001){
                // this.$message({
                //     message: msg,
                //     type: 'error'
                // })
                 this.$router.push({path:"/"})
                }else if(res.data.code===10002){
                // this.$message({
                //     message: msg,
                //     type: 'error'
                // })
                 this.$router.push({path:"/"})
                }else if(res.data.code===10003){
                // this.$message({
                //     message: msg,
                //     type: 'error'
                // })
                 this.$router.push({path:"/"})
                }
            })
         
      }
  },
  mounted(){
      this.julogin()
  }

}
</script>
