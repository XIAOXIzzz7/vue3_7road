<template>
    <div style="display:flex;justify-content:space-between;width:100%">
        <div style="display:flex">
            <el-button class="el-button-link8" @click="home()" ><h6 class="H6header" style="font-size:25px !important;">第七大道</h6></el-button>
            
            <el-button class="el-button-link8" @mouseenter="over()" @mouseleave="out()" style="margin:0px;padding:30px 30px 40px 30px"><h6 class="H6header">内部服务</h6></el-button>
            
            <el-button class="el-button-link8" @click="reserve()"><h6 class="H6header">内部预约</h6></el-button>
            <el-button class="el-button-link8" @click="share()"><h6 class="H6header">技术分享</h6></el-button>
            <el-button class="el-button-link8" @click="file()"><h6 class="H6header">文档</h6></el-button>
            <!-- <el-button class="el-button-link8" v-if="this.$store.state.zyshow" @click="test()"><h6 class="H6header">测试服务</h6></el-button> -->
            <!-- <el-button class="el-button-link8" v-if="this.$store.state.zyshow" @click="apitest()">
                    <el-dropdown >
                    <h6 class="H6header">
                        测试服务
                    </h6> -->
                    <!-- <template #dropdown>
                        <el-dropdown-menu  @click="apitest()">
                        <el-dropdown-item>接口测试</el-dropdown-item>
                        </el-dropdown-menu>
                    </template> -->
                    <!-- </el-dropdown>
            </el-button> -->
            <!-- <el-button v-if="this.$store.state.zyshow"  class="el-button-link8">
            <el-dropdown style="margin:0px" >
                <span class="el-dropdown-link">
                    <h6 style="font-family:微软雅黑;font-size:17px">测试服务</h6>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                    <el-dropdown-item @click="apitest()">接口测试</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            </el-button> -->


            <el-button v-if="this.$store.state.zyshow" class="el-button-link8" @click="getinto()"><h6 class="H6header">质控数据后台</h6></el-button>
            <el-button v-if="this.$store.state.zyshow && show == 1" class="el-button-link8" @click="cost()"><h6 class="H6header">成本统计</h6></el-button>
            <el-button v-if="this.$store.state.zyshow && show == 1" class="el-button-link8" @click="configinfo()"><h6 class="H6header">配置信息</h6></el-button>
        </div>
        <div style="display:flex">
            <!-- <el-button class="el-button-link8"><h6 class="H6header">English</h6></el-button> -->
            <el-button class="el-button-link8" v-if="this.$store.state.showlogin" @click="login()"><h6 class="H6header">登录</h6></el-button>
            <el-button class="el-button-link8" v-if="this.$store.state.showname" ><h6 class="H6header">{{$store.state.adname}}</h6></el-button>
            <el-button v-if="this.$store.state.showname" @click="logout()" class="el-button-link8"><h6 class="H6header">登出</h6></el-button>
        </div>
    </div>
    <!-- 下拉栏组件 -->
    <downpage ref="child"> 
    </downpage>
    
    
           
</template>
<script>
import axios from "axios"
import downpage from "./down_page.vue"
// import { ElMessage } from 'element-plus'
export default {
  name:"loginheader",
  data(){
      return{
          showvideo:true,
          showlogin:"",
          showname:"",
          usernameinfo:"",
          serviceshow:false,
          show:"",
          adminlist:[],
          serviceshow:false,
          showcard1:true,
          showcard2:false,
          show :1
  
      }
    },
    components:{
        downpage
    },
    mounted(){
        setTimeout(() => {
            // console.log(this.$store.state.user_info);
            console.log("user1");
            if(this.$store.state.user_info){
                if (this.$store.state.user_info["group"] != "测试") {
                this.show = 0
            }
            }
            else{
                this.show = 1
            }
        }, 100);
        // console.log("this.$store.state.zyshow",this.$store.state.zyshow);
    },
  methods:{
    home(){
          this.$router.push({path: '/'})
      },
    over(){
        this.$refs.child.over();
        // this.$store.state.shows=1
        
        },
    out(){  
        this.$refs.child.out();  
        },
    card1(){
          this.showcard2=false
          this.showcard1=true
      },
    card2(){
        this.showcard1=false
        this.showcard2=true
        
    },
    cost(){
        this.$router.push({path: '/cost_statistics'})
    },
    test(){
        this.$router.push({path: '/test/automatic/_apitest'})
    },
    reserve(){
        this.$router.push({path: '/reserve/zk_project'})
    },
    share(){
        this.$router.push({path: '/share/zk_info'})
    },
    configinfo(){
        this.$router.push({path: '/qa_config/qa_config_info/project'})
    },
    getinto(){
        this.$router.push({path: '/qa'})
    },
    logout(){
         axios.get("/api/v1/auth/").then(Response=>{
            if (Response.data.code === 10003 || Response.data.code === 10004 ||Response.data.code === 10005){
                this.$store.state.user_info=null
                this.$store.state.zyshow=false
                this.$store.state.showlogin=true
                this.$store.state.showname=false
                this.$router.push({path: '/'})
                this.$notify({
                    title: '提示',
                    message: '账号已退出',
                    type: 'success',
                    duration:1000
                    })
            }
         })
    },
    login(){
        this.$router.push({path: '/auth/login'})
    },
    file(){
        window.open('http://doc.sh7road.com/pages/viewpage.action?pageId=9700190')
    }
  }

}
</script>

<style scoped>
.el-button-link8 {

    color: white !important;
    border:0px !important;
    background: transparent !important;
    font-family:微软雅黑 !important;
    margin:15px 30px 20px 10px;
    padding:0px
    
  }

video{
    position:fixed;
    top: 0px;
    left:0px;
    width:100%;
    height: 80%;
    object-fit:fill; 
    object-position: left top !important;
    z-index: -1 !important
}
.headernewdrop{
    background-color:rgba(7,17,34,.6) !important;
    padding: 0px !important;


}


.H6header{
    font-size: 17px !important;
    margin:0px;
    font-weight:normal;
    padding-top:5;
    color:#ffffff

}
h6:hover{
    color:#FFFFFF90 ;
}

.el-dropdown-link {
cursor: pointer;
color: #ffffff;
}
.el-icon-arrow-down {
font-size: 12px;
}
.el-dropdown-menu{
    background-color: rgb(33, 48, 65);

}
.el-dropdown__popper{
    border: none;
}
.el-dropdown-menu__item{
   color: #ffffff;
    /* background-color:rgba(48,61,92,.6) */
}
h6{
    font-family:微软雅黑 !important
}
.router-link-active {
  text-decoration: none;
}
</style>
