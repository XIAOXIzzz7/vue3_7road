<template>
<div class="footer">
    <div id="pronbit" ref="pronbit"></div>
     <div style="border-bottom:1px solid #a1a6a370;display:flex;justify-content:center;width:100%">
        <h5 style="color:#cfd4d2;font-weight:bolder;height:20px;margin-top:5px">联系我们&nbsp;</h5>  <svg style="cursor: pointer;" @click="qq()" t="1634529923422" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7054" width="32" height="32"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="7055" fill="#bfbfbf"></path></svg>&nbsp;
    </div>
        <div class="footercard" style="border-bottom:1px solid #a1a6a370">
          <div class="fcs">
            <h5 class="footitle">关于我们</h5><br>
            
            <div style="display:flex;flex-direction:row;flex-wrap:wrap">
              <el-button class="footbu" @click="road7()"><h6 class="footmain" >友情链接</h6></el-button>
            </div> 
          </div>
          <div class="fcs" style="border-left:1px solid #a1a6a370;border-right:1px solid #a1a6a370">
            <h5 class="footitle">测试服务</h5><br>
            <div style="display:flex;flex-direction:row;flex-wrap:wrap">
              <!-- <el-button class="footbu" @click="xn()"><h6 class="footmain" >性能测试</h6></el-button>
              <el-button class="footbu" @click="gn()"><h6 class="footmain" >功能测试</h6></el-button>
              <el-button class="footbu" @click="rw()"><h6 class="footmain" >弱网测试</h6></el-button> -->
              <el-button class="footbu" @click="jk()"><h6 class="footmain" >接口测试</h6></el-button>
              <!-- <el-button class="footbu" @click="sdk()"><h6 class="footmain" >SDK测试</h6></el-button> -->
            </div>
            
          </div>
          <div class="fcs">
            <h5 class="footitle">帮助文档</h5><br>
            <div style="display:flex;flex-direction:row;flex-wrap:wrap">
              <el-button class="footbu" @click="bps()"><h6 class="footmain" >质量管理白皮书</h6></el-button>
            </div>
            
          </div>
        </div>
</div>
   
</template>
<script>
export default {
    name:'foo',
    data(){
        return{
         
        }
    },
    methods:{
        road7(){
            window.open("http://www.7road.com/")
        },
        bps(){
          this.$router.push({path: "/share/zk_info/白皮书"})
          document.getElementById("pronbit").scrollIntoView({
          behavior: "smooth",  // 平滑过渡
          block:    "start"  // 上边框与视窗顶部平齐。默认值
    })
        },
        qq(){
          window.open("tencent://message/?uin=1023842607&Site=&Menu=yes")
        },
        jk(){
          this.$router.push({path: "/test/automatic/_apitest"})
          document.getElementById("pronbit").scrollIntoView({
          behavior: "smooth",  // 平滑过渡
          block:    "start"  // 上边框与视窗顶部平齐。默认值
            })
        }
    }
}
</script>

<style scoped>
.footbu{
  margin:0px !important;
  padding:0px !important;
  border:none !important;
  background: none !important; 
}
.fcs{
  flex: 0 0 33%;
}
.footercard{
  display: flex;
  flex-direction: row;
  height: 240px;
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
  
  font-size: 13px;
  margin:0px;
  width: 100px;
  margin-left:95px;
  height:40px
}
.footer{
  background-color: #20262b;
  height: 340px !important;
  padding: 0px !important;
}
</style>