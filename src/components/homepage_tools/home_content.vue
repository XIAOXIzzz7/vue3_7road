<template>
 <video  muted="muted" autoplay="autoplay" controls="controls" loop="loop">
        <source  src="../../assets/images/10-11-2.mp4" type="video/mp4" >
    </video>
          <h5 class="mainh5">
           Quality Management & Technical Support
          </h5>
          <h5 class="mainh52">
              第七大道
          </h5>
          <h5 class="mainh53">
              这里有你想知道的一切
          </h5>
           <div style="margin-left:10%;margin-right:5%;display:flex;margin-bottom:150px;margin-top:222px">
              <div style="margin-top:100px;width:60%">
                <div><h5 style="text-align:left;font-size:30px;margin-bottom:50px;font-weight:bold">为您提供全方面的产品测试服务</h5></div>
              <div style="padding:0px;display:flex;margin-bottom:40px">
                <el-button :class="{active:shows==0}" class="product" @click="test(0)">性能</el-button>
                <el-button :class="{active:shows==1}" class="product" @click="test(1)">功能</el-button>
                <el-button :class="{active:shows==2}" class="product" @click="test(2)">弱网</el-button>
                <el-button :class="{active:shows==3}" class="product" @click="test(3)">API</el-button>  
              </div>
              <div id="pro0" style="display:flex;justify-content:row;align-content:centent;flex-wrap:wrap;height:150px">
                <h5 class="mainproduct" >
                  性能
                </h5>
                <br>
                <h5 class="product_content">
                  性能测试在软件的质量保证中起着重要的作用，我们将为您提供专业以的客户端性能测试，检测客户端运行是否顺畅、排查是否容易出现崩溃闪退等问题等，并提供准确明了的性能测试报告
                </h5>
              </div>
              <div id="pro1" style="display:none;justify-content:row;align-content:centent;flex-wrap:wrap;height:150px">
                 <h5 class="mainproduct">
                  功能
                </h5>
                <br>
                <h5 class="product_content">
                  功能测试中将对产品的各功能进行验证，根据功能测试用例，逐项测试，检查产品是否达到用户要求的功能。
                </h5>
              </div>
              <div id="pro2" style="display:none;justify-content:row;align-content:centent;flex-wrap:wrap;height:150px">
                <h5 class="mainproduct">
                  弱网
                </h5>
                <br>
                <h5 class="product_content">
                  弱网测试作为健壮性测试的重要部分，对于移动端测试来说必不可少，在测试过程中不仅会考虑各类型网络最低速率，并且还将结合业务场景和应用类型去划分，模拟高延迟、高丢包的异常网络下进行健壮性测试。
                </h5>
              </div>
              <div id="pro3" style="display:none;justify-content:row;align-content:centent;flex-wrap:wrap;height:150px">
                <h5 class="mainproduct">
                  API
                </h5>
                <br>
                <h5 class="product_content">
                 接口测试是测试系统组件间接口的一种测试，测试中主要针对于测试系统与外部其他系统之间的接口，以及系统内部各个子模块之间的接口。重点检查接口参数传递的正确性、接口功能实现的正确性、输出结果的正确性、以及对各种异常情况的容错处理的完整性和合理性。
                </h5>
              </div>
            </div>
              <div style="margin-top:100px">
                <img id="pro_p_0" src="../../assets/images/智能2-05.png" style="display:none;margin-top:50px" height="400">
                <img id="pro_p_1" src="../../assets/images/智能2-02.png" style="display:none;margin-top:50px" height="400">
                <img id="pro_p_2" src="../../assets/images/智能2-04.png" style="display:none;margin-top:50px" height="400">
                <img id="pro_p_3" src="../../assets/images/智能1-01.png" style="display:none;margin-top:50px" height="400">
              </div>
          </div>
          <div style="margin-left:10%;margin-right:10%;display:flex;margin-bottom:100px;margin-top:120px;">
             <el-card id="testprice_b_0" class="box-card" style="flex: 0 0 30%;margin-right:20%;margin-top:50px;min-height:350px">
               <div style="margin-left:20px">
                 <h5 style="text-align:left;font-size:17px;font-weight:bold">客户端全功能测试</h5>
                  <h5 style="text-align:left;margin:20px">￥xxx</h5>
                  <div >
                    <h5 style="text-align:left;font-size:15px"><svg t="1634872832822" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5005" width="20" height="20"><path d="M939.36 218.912a32 32 0 0 1 45.856 44.672l-538.016 552a32 32 0 0 1-43.776 1.92L63.872 526.048a32 32 0 1 1 41.696-48.544l316.768 271.936L939.36 218.88z" p-id="5006" fill="#14c4ff"></path></svg>&nbsp;&nbsp;制作可追溯性的文档</h5>
                    <h5 style="text-align:left;font-size:15px"><svg t="1634872832822" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5005" width="20" height="20"><path d="M939.36 218.912a32 32 0 0 1 45.856 44.672l-538.016 552a32 32 0 0 1-43.776 1.92L63.872 526.048a32 32 0 1 1 41.696-48.544l316.768 271.936L939.36 218.88z" p-id="5006" fill="#14c4ff"></path></svg>&nbsp;&nbsp;执行设计的测试用例。</h5>
                    <h5 style="text-align:left;font-size:15px"><svg t="1634872832822" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5005" width="20" height="20"><path d="M939.36 218.912a32 32 0 0 1 45.856 44.672l-538.016 552a32 32 0 0 1-43.776 1.92L63.872 526.048a32 32 0 1 1 41.696-48.544l316.768 271.936L939.36 218.88z" p-id="5006" fill="#14c4ff"></path></svg>&nbsp;&nbsp;进行覆盖率分析</h5>
                    <h5 style="text-align:left;font-size:15px"><svg t="1634872832822" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5005" width="20" height="20"><path d="M939.36 218.912a32 32 0 0 1 45.856 44.672l-538.016 552a32 32 0 0 1-43.776 1.92L63.872 526.048a32 32 0 1 1 41.696-48.544l316.768 271.936L939.36 218.88z" p-id="5006" fill="#14c4ff"></path></svg>&nbsp;&nbsp;完成缺陷管理以管理缺陷解决。</h5>
                  </div>
               </div>
              <el-button style="margin-top:15px;" type="primary" plain @click="testnow()">立即测试</el-button>
            </el-card>
            <el-card id="testprice_b_1" class="box-card" style="flex: 0 0 30%;margin-right:20%;margin-top:50px;display:none;min-height:350px">
              <div style="margin-left:20px">
               <h5 style="text-align:left;font-size:17px;font-weight:bold">专项测试</h5>
               <h5 style="text-align:left;margin:20px">￥xxx</h5>
              <div >
                <h5 style="text-align:left;font-size:15px"><svg t="1634872832822" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5005" width="20" height="20"><path d="M939.36 218.912a32 32 0 0 1 45.856 44.672l-538.016 552a32 32 0 0 1-43.776 1.92L63.872 526.048a32 32 0 1 1 41.696-48.544l316.768 271.936L939.36 218.88z" p-id="5006" fill="#14c4ff"></path></svg>&nbsp;&nbsp;保障软件质量。</h5>
                <h5 style="text-align:left;font-size:15px"><svg t="1634872832822" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5005" width="20" height="20"><path d="M939.36 218.912a32 32 0 0 1 45.856 44.672l-538.016 552a32 32 0 0 1-43.776 1.92L63.872 526.048a32 32 0 1 1 41.696-48.544l316.768 271.936L939.36 218.88z" p-id="5006" fill="#14c4ff"></path></svg>&nbsp;&nbsp;提供风险评估。</h5>
              </div>
              </div>
               <el-button style="margin-top:113px" type="primary" plain @click="testnow()">立即测试</el-button>          
            </el-card>
              <div>
                <div><h5 style="text-align:left;font-size:30px;margin-bottom:50px;font-weight:bold">产品价格</h5></div>
              <div style="padding:0px;display:flex;margin-bottom:40px;width:40%">
                <el-button :class="{active:showss==0}"  style="border:none;font-size:23px;width:200px;outline:none"  @click="testprice(0)">游戏全功能测试</el-button>
                <el-button :class="{active:showss==1}" style="border:none;font-size:23px;width:200px" @click="testprice(1)">专项测试</el-button>
              </div>
              <div id="testprice0" style="justify-content:row;align-content:centent;flex-wrap:wrap;height:150px">
                <h5 class="mainproduct">
                  游戏全功能测试
                </h5>
                <br>
                <h5 style="width:100%;line-height: 2em;text-indent: 2em;text-align:left;font-size:18px;font-weight:normal">
                  找寻不正确或遗漏的功能，验证功能实现是否满足用户需求和系统设计的隐藏需求，保障业务流程的正确、合理
                </h5>
              </div>
              <div id="testprice1" style="justify-content:row;align-content:centent;flex-wrap:wrap;height:150px;display:none">
                 <h5 class="mainproduct">
                  专项测试
                </h5>
                <br>
                <h5 style="width:100%;line-height: 2em;text-indent: 2em; text-align:left;font-size:18px;font-weight:normal">
                  针对软件产品的性能效率，信息安全性，易用性，可靠性，可移植性，维护性、兼容性等某个专项指标进行的测评。
                </h5>
              </div>
            </div>

          </div>
          <div style="margin-bottom:150px">
            <h5 style="font-size: 30px;font-weight:bold;margin-bottom:50px">产品展示</h5>
            <div style="display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around">
               <div class="elcard">
                <el-card class="box-card" style="width:400px;height:250px">
                <div style="height:200px;width:400px">
                  <img src="../../assets/images/10-11-7.jpg" width="400" height="200">
                </div>
                <div style="height:50px">
                  <h4 style="font-size:16px;margin-top:10px;cursor: pointer" @click="contractor()"> 7ROAD</h4>
                </div>
              </el-card>
              </div>
              <div class="elcard">
                <el-card class="box-card" style="width:400px;height:250px">
                <div style="height:200px;width:400px">
                  <img src="../../assets/images/dbds2.jpg" width="400" height="200">
                </div>
                <div style="height:50px">
                  <h4 style="font-size:16px;margin-top:10px;cursor: pointer" @click="contractor()"> 7ROAD</h4>
                </div>
              </el-card>
              </div>
               <div class="elcard">
                <el-card class="box-card" style="width:400px;height:250px">
                <div style="height:200px;width:400px">
                  <img src="../../assets/images/10-11-8.jpg" width="400" height="200">
                </div>
                <div style="height:50px">
                  <h4 style="font-size:16px;margin-top:10px;cursor: pointer" @click="contractor()"> 7ROAD</h4>
                </div>
              </el-card>
              </div>
            </div>              
         </div>
</template>
<script>
export default {
    name:'homecontent',
  
    data(){
        return{
            shows:0,
            showss:0,

        }
    },
    methods:{
        testnow(){
          this.$router.push({path: '/reserve/zk_project'})
        },
        test(index){
          this.shows=index
          document.getElementById("pro"+index).style.display = "";
          document.getElementById("pro_p_"+index).style.display = "";
          for(var i=0;i<4;i++){
            
            if (i != index){
            
              document.getElementById("pro"+i).style.display = "none";
              document.getElementById("pro_p_"+i).style.display = "none";
            }
          }
          
         
        },
      testprice(index){
       
        this.showss=index
        document.getElementById("testprice"+index).style.display = "";
        document.getElementById("testprice_b_"+index).style.display = "";
        for(var i=0;i<2;i++){
              if (i != index){
                document.getElementById("testprice"+i).style.display = "none";
                document.getElementById("testprice_b_"+i).style.display = "none";
          
              }
            }
      }
          
      }
    
}
</script>

<style scoped>
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
  margin-top: 100px;
}
.mainproduct{
  text-align: left;
  font-weight:bolder;
  width:100%;
  font-size: 20px;
  
}
/* .box-card {
    height: 300px;
  } */
.el-icon-arrow-down {
    font-size: 12px;
  }

.product{
    border:none !important;
    font-size:23px;
    width:200px;
    /* outline:none; */
    background-color: #ffffff;
    font-weight:normal
}
.product_content{
    width:85%;
    line-height: 2em;
    text-indent: 2em;
    text-align:left;
    font-size: 18px;
    font-weight:normal
}
.active{
  color: #3a8ee6;
  background-color: #ecf5ff;
  outline: 0;
}
.elcard>>>.el-card__body{
  padding:0px
}
video::-webkit-media-controls{ 

display:none !important;

}

video{
    position:absolute;
    top: 0px;
    left:0px;
    width:100%;
    height:730px;
    object-fit:fill; 
    object-position: left top !important;
    z-index: -99999 !important
}

</style>