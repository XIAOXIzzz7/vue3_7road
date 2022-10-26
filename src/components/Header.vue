<template>

      <!-- <el-menu class="el-menu-demo" mode="horizontal" style="display: flex;width: 100%;height:60px;justify-content:space-between" >
     
        <el-menu-item index="1" style="margin-left:10px">
        <span v-show="iconDisable">TAPD 最近同步时间：{{updatatime}}</span>
        <span v-show="is_lading"><el-icon class="is-loading">
          <Loading />
        </el-icon>
        正在更新数据，请稍后</span>
         
      </el-menu-item>
  
      <div style="display:flex">
        <el-sub-menu index="3" style="float:right">
            <template #title style="background-color:red">     
                <span style="font-size:16px;margin:0px 15px 0px 0px">{{username}}</span>
                
            </template>
            <el-menu-item index="3-1">
                <a type="button" @click="update_all"><i class="fa fa-database mr-2"></i>质控组 更新数据</a>
            </el-menu-item>
           
        </el-sub-menu>
        <el-menu-item index="2" style="float:right">
          <span @click="logout" type="primary" style="font-size:16px">登出</span>
        </el-menu-item>
      </div>
      
        </el-menu> -->
        <el-menu
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
        style="display:flex ;justify-content:space-between"
      >
        <div>
          <el-menu-item index="0">
          <span v-show="iconDisable">TAPD 最近同步时间：{{updatatime}}</span>
            <span v-show="is_lading"><el-icon class="is-loading">
              <Loading />
            </el-icon>
          正在更新数据，请稍后</span>
        </el-menu-item>
        </div>
        <!-- <div class="flex-grow">
     
        </div> -->
        <div style="display:flex ;">
          <el-sub-menu index="1">
          <template #title>
            <span style="font-size:16px;margin:0px 15px 0px 0px">{{username}}</span>
          </template>
          <el-menu-item index="1-1">
            <!-- <el-button @click="update_all">质控组 更新数据</el-button> -->
            <a type="button" @click="update_all"><i class="fa fa-database mr-2"></i>质控组 更新数据</a>
          </el-menu-item>
          <el-sub-menu index="1-3">
          <template #title>单项目更新</template> 
          <el-menu-item v-for="(i,item) in fxProjectOptions" @click="ZYindex(i)" :index="'1-3'+'-'+(item+1)">{{i}}</el-menu-item>
        </el-sub-menu>
          <!-- <el-sub-menu index="1-2">
          <template #title>自研项目更新</template>
          <el-menu-item v-for="(i,item) in zyProjectOptions" @click="ZYindex(i)" :index="'1-2'+'-'+(item+1)">{{i}}</el-menu-item>
        </el-sub-menu> -->
        
         
         
        </el-sub-menu>
        <el-menu-item index="2">
          <span @click="logout" type="primary" style="font-size:16px">登出</span>
        </el-menu-item>
        </div>
      </el-menu>
</template>

<script>
import axios from "axios"
export default {
  name: 'Header',
  data() {
    return {
      username: '',
      iconDisable: true,
      is_lading:false ,
      polling:'',
      update_over: '更新完成！',
      updatatime:"",
      zyProjectOptions:[],
      fxProjectOptions:[],
    }
  },
  mounted(){
    axios({
              url: '/api/v1/sidebar/',
              method:'get',
              params:{
                data_type:"fx"
              }
            }).then(res => {
              var lis = []
              lis = res.data.data.projects
              console.log(res.data.data.projects);
                axios({
                url: '/api/v1/sidebar/',
                method:'get',
                params:{
                  data_type:"zy"
                }
                  }).then(res => {
                    for (var i in res.data.data.projects){
                      if (lis.indexOf(res.data.data.projects[i])==-1){
                        lis.push(
                          res.data.data.projects[i]
                        )
                      }
                    }
                    this.fxProjectOptions=lis
                    console.log(res.data.data.projects);
                  })
            })
    
  },
  props: {},
  // beforeMount() {
  //   if(this.$data.is_set_time){
  //     setInterval(() => {
  //       setTimeout(() => {
  //         axios.get('/api/v1/UpdateStatusCheck/').then(res => {
  //           if (res.data.code === 10072) {
  //             this.$data.iconDisable = false;
  //             this.$data.is_set_time = false;
  //             this.$message({
  //               message: this.update_over,
  //               type: 'success'
  //             })
  //           } else {
  //             console.log('正在更新，请稍后');
  //           }
  //         }).catch(err => {
  //           console.log(err);
  //         })
  //       }, 0)
  //     }, 3000)
  //   }
  //
  //
  // },
  beforeCreate() {
      axios({
        url:'/api/v1/UserInfo/',
        method:'get'
      }).then(res =>{
        this.username=res.data.user.cn_name;
      }).catch(err=>{
        console.log(err);
      })
    axios.get('/api/v1/UpdateStatusCheck/').then(res=>{
      console.log('/api/v1/UpdateStatusCheck/',res);
      if(res.data.code===10072){
        // this.$store.state.iconDisable=true;
        // this.$store.state.is_lading=false;
        this.updatatime=res.data.data
        this.$data.iconDisable=true;
        this.$data.is_lading=false;
      }else{
        // this.$store.state.iconDisable=false;
        // this.$store.state.is_lading=true;
        this.$data.iconDisable=false;
        this.$data.is_lading=true;
      }
    }).catch(err=>{
      console.log(err);

    })


  },

  methods:{
    ZYindex(name){
      axios({
              url: '/api/v1/UpdateTapdData/',
              method:'get',
              params:{
                project:name
              }
            }).then(res => {
              if(res.data.code===10070){
                 this.$message({
                  message: '更新开始，请稍后！',
                  type: 'success'
                })
                // this.$store.state.iconDisable=false
                // this.$store.state.is_lading=true
                this.$data.iconDisable=false;
                this.$data.is_lading=true;
                console.log(this.$data.iconDisable);
                console.log(this.$data.is_lading);
                }else{
                this.$message({
                  message: res.data.msg,
                  type: 'error'
                })
              }
            }).catch(err=>{
              console.log(err);
            })
    },
    handleSelect(key,keyPath){
     console.log(key);
    },
    update_all( ){
      axios.get('/api/v1/UpdateTapdData/').then(res=>{
        if(res.data.code===10070){
          this.$message({
            message: '更新开始，请稍后！',
            type: 'success'
          })
          // this.$store.state.iconDisable=false
          // this.$store.state.is_lading=true
          this.$data.iconDisable=false;
          this.$data.is_lading=true;
          console.log(this.$data.iconDisable);
          console.log(this.$data.is_lading);
        }else{
          this.$message({
            message: res.data.msg,
            type: 'error'
          })
        }
      }).catch(err=>{
        console.log(err);
      })
      this.polling=setInterval(() => {
        axios.get('/api/v1/UpdateStatusCheck/').then(res => {
          if (res.data.code === 10072) {
            // this.$store.state.iconDisable=true;
            // this.$store.state.is_lading=false;
            this.$data.iconDisable=true;
            this.$data.is_lading=false;
            this.$message({
              message: this.update_over,
              type: 'success'
            })
            clearInterval(this.polling);
            this.polling=null;
          } else {
            console.log('正在更新，请稍后');
          }
        }).catch(err => {
          console.log(err);
        })
      }, 30000)
    },
      logout(){
        
          axios.get("/api/v1/auth/").then(Response=>{
              // if (Response.status == 200 && Response.data == 'delete_cookie'){
            if (Response.data.code === 10003){
                  console.log("logout");
                  // this.$store.state.zyshow=false
                  // this.$store.state.user_info=null
                  this.$store.state.user_info=null
                  this.$store.state.zyshow=false
                  this.$store.state.showlogin=true
                  this.$store.state.showname=false
                  this.$router.push({path: '/'})
              }
              else if(Response.data.code === 10004){
              //   this.$store.state.zyshow=false
              // this.$store.state.user_info=null
                this.$store.state.user_info=null
                this.$store.state.zyshow=false
                this.$store.state.showlogin=true
                this.$store.state.showname=false
                this.$router.push({path: '/'})
              }
              else if(Response.data.code === 10005){
                this.$store.state.user_info=null
                this.$store.state.zyshow=false
                this.$store.state.showlogin=true
                this.$store.state.showname=false
              //   this.$store.state.zyshow=false
              // this.$store.state.user_info=null
              alert(Response.data.msg)
            }
          }).catch(_err=>{
              console.log(_err);
          })

      },
    // update_times( timeout=50000){
    //           this.polling=setInterval(() => {
    //             axios.get('/api/v1/UpdateStatusCheck/').then(res => {
    //               if (res.data.code === 10072) {
    //                 this.$store.state.is_lading=false;
    //                 this.$store.state.iconDisable=true;
    //                 this.$message({
    //                   message: this.update_over,
    //                   type: 'success'
    //                 })
    //                 clearInterval(this.polling);
    //                 this.polling=null;
    //               } else {
    //                 console.log('正在更新，请稍后');
    //               }
    //             }).catch(err => {
    //               console.log(err);
    //             })
    //           }, timeout)
    // },
  }
}
</script>
<style scoped>
.te{
  display: flex;
  justify-content: flex-end;
}
.flex-grow{
  width:70%
}
</style>
