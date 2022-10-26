<template>
<div class="auto">
    <div  class="autoleft">
        <img class="autoleft" src="../../assets/images/bj-45.png" >
    </div>
    <div class="autoright">
      <div class="rightmain">
        <el-card shadow="always">
          <h5 style="font-family:微软雅黑;font-size:36px;margin:35px">开始使用后台管理系统</h5>
            <div>
              <el-input v-model="information.username"
                type="text"
                placeholder="域账号"
                style="width: 310px;height: 40px">
              </el-input>
            </div>
            <div>
              <el-input v-model="information.password"
                type="password"
                placeholder="密码"
                style="width: 310px;height: 40px;margin-top:20px">
              </el-input>
            </div>
            <div>
              <el-button type="primary" @click="login_result" style="width: 250px;height:30px;margin:30px!important">
                  登录
              </el-button>
               
            </div>
             <!-- <el-checkbox v-model="information.remember">
                记住密码
              </el-checkbox> -->
        </el-card>
      </div>
    </div>
    <!-- <div class="autoright">
        <div class="rightmain">
      <el-card class="el-card">
        
        <el-form ref="form" :model="information" >
          <el-row type="flex" justify="right">
            <el-col :span="23">
              <el-form-item>
                <h5 style="font-family:微软雅黑;font-size:36px;margin:35px">开始使用后台管理系统</h5>
                <el-input v-model="information.username"
                          type="text"
                          prefix-icon="el-icon-user-solid"
                          placeholder="域账号"
                          style="width: 310px;height: 20px">
                </el-input>
              </el-form-item>

            </el-col>
          </el-row>
          <br>
          <el-row type="flex" justify="left">
            <el-col :span="23">
              <el-form-item>
                <el-input v-model="information.password"
                          type="password"
                          placeholder="密码"
                          style="width: 310px;height: 20px"
                          prefix-icon="fas fa-lock">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>

          
           
            
            <div>
                <el-button type="primary" @click="login_result" style="width: 250px;height:20px;margin:30px!important">
                  登录
                </el-button>
                 <el-checkbox v-model="information.remember">
                  记住密码
                </el-checkbox>
            </div>

          </el-form>
      </el-card>
    </div>
</div> -->
</div>

</template>
<script>
// import {axioss as axios} from "../../utils/request"
// import axios from "axios"
import {hpaxios as axios} from "../../utils/request"
// import {hadgaxios as axios} from "../../utils/request"
export default {
    name:'autologin',
    data(){
        return{
            heightnow:"",
            information:{
                username: '',
                password: '',
                remember: false,
                        },
            error: false,
            msg: '',
            from:""
        }
    },
//     mounted(){
//         onBeforeRouteUpdate(to => {
//         console.log(to);
//         console.log("yes");
// })
//     },

    beforeRouteEnter(to, from, next) {
    // console.log(from, '组件独享守卫beforeRouteEnter第二个参数');

    next(vm => {
      //因为当钩子执行前，组件实例还没被创建
      // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
      vm.from=from.fullPath
    });
  },
    methods:{
        login_result() {
          let user = this.$data.information.username
          let pwd = this.$data.information.password
          let remember = this.$data.information.remember
          let param = new URLSearchParams()
          param.append('username', user)
          param.append('password', pwd)
          param.append('remember', remember)
     
        axios('/api/v1/auth/',param)
          .then(res=>{
            let msg=res.data.msg;
            // this.$store.state.user_info=res.data.user;
            if(res.data.code ===10000){
                this.$message({
                message: msg,
                type: 'success'
              })
            // console.log("xczxcz",res.data.user.cn_name);
            //   this.$store.state.adname = res.data.user.cn_name
              //   this.$store.state.showlogin=false
            //   this.$store.state.showname=true
              this.$router.push({path:this.from})
              
            }else if (res.data.code===10001){
              this.$message({
                message: msg,
                type: 'error'
              })
            }else if(res.data.code===10002){
              this.$message({
                message: msg,
                type: 'error'
              })
            }else if(res.data.code===10003){
              this.$message({
                message: msg,
                type: 'error'
              })
            }
          }).catch(_err=>{
              console.log(_err);
          })
      }
    },
}
</script>
<style scoped>
.auto{
    display: flex;
    flex-direction: row ;
    height: 100%
}
.autoleft{
    position:relative;
    width: 500px;
    height: 100%;
}

.autoright{
    flex: 1 1 auto;
}
.el-card{
    margin:300px;
    border:none
}

</style>