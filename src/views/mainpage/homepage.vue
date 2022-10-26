<template>
    <div id="pronbit" ref="pronbit"></div>
    <div class="top">
        <el-container>
            <el-header class="el-head" id="head" style="background-color:rgba(7,17,34,.6)" >
                <!-- 背景组件 -->
                <!-- <background :showvideo="this.showvideo">
                </background> -->
                <!-- 导航栏 -->
                <mainheader>
                </mainheader>
            </el-header>
            <el-main class="el-mai">
                <router-view></router-view>
            </el-main>
            <el-footer style="padding:0px;margin:0px;max-height:0px !important">
              <mainfooter>
              </mainfooter>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
import mainheader from "../../components/homepage_tools/main_page_header.vue"
// import background from '../../components/homepage_tools/background.vue'
import mainfooter from "../../components/homepage_tools/main_page_footer.vue"
export default {
    name:'homepage',
    data(){
        return{
            showvideo:true
        }
    },
    components:{
        // background,
        mainheader,
        mainfooter,
    },
watch:{
       
        $route:{
        handler(){
          setTimeout(() => {
            var lis = ["qa","auth"]
             if(lis.indexOf(this.$route.path.split("/")[1]) == -1){
               if(this.$route.path == "/"){
             document.getElementById("head").style.backgroundColor="rgba(7,17,34,.6)"
           }
           else{
             document.getElementById("head").style.backgroundColor="#213041"
           }
             }
          }, 0);  
        },
        immediate:true
        }
        
    },
}
</script>
<style scoped>
.wenzi{
    position: relative;
    float: left;
    top: 100px;
    color: #f00;
    width: 320px;
    height: 30px;
    text-align: center;
    z-index:1;
}
.top{
  position: relative;
  z-index:1;
  min-height: 100% !important
}
.el-container{
  height: 100% !important;
}
/* .el-header{
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction:row;
  flex: 0 0 70px !important;
} */
.el-mai{
  display: flex !important;
  padding: 0px !important;
  flex-direction:column;
}
.el-head{

  display: flex;
  flex-direction:row;
  flex: 0 0 70px !important;
  display:flex;
  flex-wrap:wrap;
  padding:0px
}
.el-dropdown-menu header-new-drop {
  background-color: rgba(0, 0, 0, 0.5)
}
.el-dropdown-link {
    cursor: pointer;
    color: white;
    text-align: center!important;
  }

.el-dropdown{
  flex:0 0 200px
}
.el-icon-arrow-down {
    font-size: 12px;
  }
.mainh5{
  color: white ;
  margin-top: 190px;
  font-size: 50px;
  font-family:微软雅黑

}
.mainh52{
  color: white ;
  margin-top: 30px;
  font-size: 50px;
  font-family:微软雅黑

}
.mainh53{
  color: white ;
  margin-top: 40px;
  font-size: 26px;
  font-family:微软雅黑
}
.homepage{
  margin-top: 280px;
}
.mainproduct{
  text-align: left;
  font-weight:bolder;
  width:100%
}
.footer{
  background-color: #20262b;
  height: 340px !important;
  padding: 0px !important;
}
.footercard{
  display: flex;
  flex-direction: row;
  height: 240px;
}
.fcs{
  flex: 0 0 33%;
}
.footitle{
  font-weight:bolder;
  color:#cfd4d2;
  margin-top:20px ;
  text-align: left;
  margin-left:90px
}
.footmain{
  color:#ebebeb;
  text-align: left;
  margin-left: 100px;
  font-size: 16px;
}
.footbu{
  margin:0px !important;
  padding:0px !important;
  border:none !important;
  background: none !important; 
}
.elcard>>>.el-card__body{
  padding:0px
}
.active{
  color: #3a8ee6;
  background-color: #ecf5ff;
  outline: 0;
}
h6:hover{
  color:#ebebeb90
}
h4:hover{
  color:#8a8a8a
}
.box-card {
    height: 300px;
  }
</style>