<template>
<el-container style="min-height:1200px">
    <el-header style="padding:0px;height:600px">
      <div class="picture">
        <div style="margin-top:150px;margin-left:400px">
          <h5 style="color:white;text-align:left;font-weight:bolder;font-size:25px">
            项目排期&预约流程
        </h5>
        <br>
        <h5 style="color:white;text-align:left;font-size:19px;font-weight:normal">
            访问项目排期甘特图，查看项目接入必看文档，预约进行各类测试任务
        </h5>
        </div>
         <div class="carousel_" style="margin-top:100px">
           <div style="width:1500px">
              <el-carousel :interval="6000" type="card" height="280px" style="min-height:320px;max-height:320px;margin-top:50px">
                <el-carousel-item  style="background-color:#ffffff;box-shadow:0px 0px 10px 0px rgb(24 25 41 / 10%)">
                 <div style="display:flex;height:100%">
                   <div class="carousel_icon">
                      <svg style="margin-top:70px" t="1639365612929" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18808" width="90" height="90"><path d="M884.224 128h-232.448c-6.656 0-11.776 5.12-11.776 11.776v110.08c0 3.072-2.56 6.144-6.144 6.144H454.144c-3.072 0-6.144-2.56-6.144-6.144v-174.08c0-6.656-5.632-11.776-11.776-11.776H139.776c-6.656 0-11.776 5.632-11.776 11.776v871.936c0 6.656 5.632 11.776 11.776 11.776h743.936c6.656 0 11.776-5.632 11.776-11.776V139.776c0.512-6.656-4.608-11.776-11.264-11.776zM384 889.856c0 3.072-2.56 6.144-6.144 6.144H198.144c-3.072 0-6.144-2.56-6.144-6.144V133.632c0-3.072 2.56-6.144 6.144-6.144h180.224c3.072 0 6.144 2.56 6.144 6.144L384 889.856z m256-512c0 3.584-2.56 6.144-6.144 6.144h-115.712c-3.072 0-6.144 2.56-6.144 6.144v52.224c0 3.072 2.56 6.144 6.144 6.144h115.712c3.072 0 6.144 2.56 6.144 6.144V506.88c0 3.072-2.56 6.144-6.144 6.144h-115.712c-3.072 0-6.144 2.56-6.144 6.144v52.224c0 3.072 2.56 6.144 6.144 6.144h115.712c3.072 0 6.144 2.56 6.144 6.144v51.712c0 3.072-2.56 6.144-6.144 6.144h-115.712c-3.072 0-6.144 2.56-6.144 6.144v52.224c0 3.072 2.56 6.144 6.144 6.144h115.712c3.072 0 6.144 2.56 6.144 6.144v180.224c0 3.072-2.56 6.144-6.144 6.144H454.144c-3.072 0-6.144-2.56-6.144-6.144V325.632c0-3.072 2.56-6.144 6.144-6.144h179.712c3.072 0 6.144 2.56 6.144 6.144v52.224z m192-160.256v671.744c0 3.072-2.56 6.144-6.144 6.144h-116.224c-3.072 0-6.144-2.56-6.144-6.144V255.488h-0.512V197.632c0-3.072 2.56-6.144 6.144-6.144h116.224c3.072 0 6.144 2.56 6.144 6.144v19.968z" p-id="18809" fill="#1e2b3b"></path></svg>                   </div>
                  <div class="carousel_content">
                    <h5 class="carousel_title">质量管理白皮书</h5>
                    <h6 class="carousel_main">帮助公司所有产品进行质量改进，分阶段充分验证，在游戏类型上形成积累，注重产品品质，提高产品质量，推动质量流程</h6>
                 </div>
                 </div>
                </el-carousel-item>
                <el-carousel-item  style="background-color:#ffffff;box-shadow:0px 0px 10px 0px rgb(24 25 41 / 10%)">
                <div style="display:flex;height:100%">
                   <div class="carousel_icon">
                     <svg style="margin-top:70px" t="1639365850398" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20845" width="90" height="90"><path d="M898.133 481.711l-184.035 12.714c-4.434 0.306-8.869 0.613-13.15 3.136l5.315-310.041c-2.297-33.26-30.743-58.028-61.785-55.884l-298.486 65.179c-31.042 2.145-55.811 30.59-53.514 63.85l17.447 123.555c-4.434 0.306-9.022-1.604-13.457-1.298l-176.537 56.754c-33.26 2.299-58.028 30.744-55.731 64.002l80.78 330.828c2.298 33.259 30.59 55.811 61.633 53.666l654.099-45.189c31.042-2.144 55.811-30.59 53.666-61.632l45.541-243.756c-2.298-33.259-30.743-58.028-61.786-55.884zM373.666 823.162l-170.73 11.795c-2.218 0.153-2.37-2.065-2.37-2.065l-80.781-330.827c-0.153-2.217 2.064-2.37 2.064-2.37l187.623-57.52c2.217-0.153 2.37 2.064 2.37 2.064l61.824 378.923z m274.944-18.994l-219.512 15.164-83.407-562.343c-0.153-2.218 2.064-2.37 2.064-2.37l300.703-65.332c2.218-0.153 2.37 2.063 2.37 2.063l-2.218 612.818z m208.425-14.399l-152.993 10.569 0.888-245.127c-0.152-2.217 2.064-2.37 2.064-2.37l192.904-13.327c2.217-0.153 2.37 2.064 2.37 2.064L856.881 787.55c2.218-0.151 2.37 2.065 0.154 2.219z" p-id="20846" fill="#1e2b3b"></path><path d="M566.113 377.896l-40.273 146.69-46.34 3.201 40.251-150.664-40.464 2.796 14.74-33.596 49.91-3.45c6.642-0.458 12.086 1.09 16.349 4.64 4.543 3.788 7.045 9.13 7.522 16.025 0.305 4.343-0.263 9.131-1.695 14.358zM301.071 609.96c3.534 15.665-1.16 32.015-14.073 49.062-10.886 14.388-24.395 25.821-40.531 34.294l59.73-13.482-3.259 27.445-91.174 20.576 1.889-26.582c11.846-8.241 23.271-19.843 34.268-34.805 13.202-17.967 18.559-32.458 16.074-43.456-2.573-11.415-8.259-16.131-17.047-14.144l-1.133 0.257c0.662 1.565 1.084 2.783 1.284 3.654 1.342 5.943 0.054 11.491-3.858 16.661-3.663 4.92-8.579 8.081-14.748 9.472-6.055 1.37-11.793 0.614-17.216-2.262-5.694-3.001-9.21-7.469-10.553-13.407-2.191-9.722 0.867-17.296 9.188-22.72 5.588-3.711 15.568-7.188 29.952-10.437 15.021-3.391 26.427-4.645 34.21-3.775 14.804 1.623 23.801 9.505 26.997 23.649zM843.891 614.556l-31.156 39.643c5.508 3.387 10.086 8.059 13.719 14.029 3.938 6.369 5.716 12.597 5.325 18.691-0.837 12.945-6.37 23.031-16.59 30.25-8.539 6.009-19.709 9.637-33.507 10.895-8.767 0.804-18.724 0.604-29.885-0.609-5.796-0.653-10.717-2.956-14.763-6.909-4.249-4.178-6.187-9.103-5.822-14.757 0.373-5.699 2.929-10.33 7.672-13.878 4.517-3.347 9.628-4.831 15.337-4.472 5.814 0.383 10.748 2.521 14.789 6.419 4.254 4.125 6.201 9.051 5.828 14.758-0.169 2.632-0.818 5.018-1.951 7.139 6.165 0.072 11.389-2.24 15.656-6.921 4.147-4.525 6.441-10.131 6.872-16.83 0.503-7.788-2.524-14.655-9.086-20.59-5.525-4.925-11.611-7.907-18.265-8.948l25.755-27.6-44.941-2.899 10.566-22.879 84.447 5.468z" p-id="20847" fill="#1e2b3b"></path></svg>
                   </div> 
                  <div class="carousel_content">
                    <h5 class="carousel_title">主流手机top榜</h5>
                    <h6 class="carousel_main">查看市场中使用覆盖率最高的手机排行榜，了解当前用户的喜好机型分类</h6>
                  </div>
                </div>
                </el-carousel-item>
                <el-carousel-item  style="background-color:#ffffff;box-shadow:0px 0px 10px 0px rgb(24 25 41 / 10%)">
                <div style="display:flex;height:100%">
                   <div class="carousel_icon">
                    <svg style="margin-top:70px" t="1639365910980" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23399" width="90" height="90"><path d="M914.752 529.056c0.288-5.76 0.448-11.392 0.448-17.056 0-194.08-160.512-352-357.76-352-144.736 0-274.88 86.08-330.24 216.32-128.96 18.048-227.2 121.024-227.2 242.24C0 753.92 120 864 267.52 864h579.52c97.6 0 176.96-78.08 176.96-174.08 0-71.488-43.744-134.208-109.248-160.864zM847.04 800H267.52C155.328 800 64 718.592 64 618.56c0-94.08 82.624-173.344 188.096-180.544a32 32 0 0 0 27.936-21.12C321.28 301.472 432.736 224 557.44 224c161.952 0 293.76 129.184 293.76 288 0 11.424-0.768 23.168-2.336 35.744a32 32 0 0 0 24.416 35.104c51.072 12.032 86.72 56.064 86.72 107.072 0 60.704-50.688 110.08-112.96 110.08z" fill="#1e2b3b" p-id="23400"></path><path d="M630.624 425.376a32 32 0 0 0-45.248 0L512 498.752l-73.376-73.376a32 32 0 1 0-45.248 45.248L466.752 544l-73.376 73.376a32 32 0 1 0 45.248 45.248L512 589.248l73.376 73.376a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0-45.248L557.248 544l73.376-73.376a32 32 0 0 0 0-45.248z" fill="#1e2b3b" p-id="23401"></path></svg>
                   </div>
                  <div class="carousel_content">
                    <h5 class="carousel_title">弱网测试环境搭建</h5>
                    <h6 class="carousel_main">Windows端快速搭建一个简单且实用的网络模拟环境,可以模拟不同类型的网络,还可以设置网络延迟、可用带宽、排队方式、丢包率、数据包的重排和错误传播等参数</h6>
                  </div>
                </div>
                </el-carousel-item>
              </el-carousel>
           </div>
         </div>
        </div>
    </el-header>
    <el-main >
      <div class="maindiv"> 
          <div class="mainleft">
              <el-menu
                style="min-height:1000px"
                :default-openeds="showlist"
                class="el-menu-vertical-demo"
                
                >
                <el-sub-menu index="1" >
                    <template #title >
                        <div style="display:flex">
                            <span style="margin-left:15%;display: flex;
                                justify-content: center;
                                align-items: center;">
                                <svg t="1638868083918" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3315" width="20" height="20"><path d="M997.76 494.72l-133.12-76.8 128-72.32a32 32 0 0 0 0-55.68L704 123.52a32 32 0 0 0-32 0L512 213.76 346.88 118.4a32 32 0 0 0-32 0L26.24 284.8a32 32 0 0 0 0 55.68l133.76 76.8-128 72.32a32 32 0 0 0 0 55.68L192 635.52v114.56a32 32 0 0 0 16 27.52l288 166.4a32 32 0 0 0 32 0l288-166.4a32 32 0 1 0-32-55.68L512 880l-256-147.84v-59.52l64 39.04a32 32 0 0 0 32 0L512 620.8l166.4 96a32 32 0 0 0 32 0l106.24-64 181.12-105.6a32 32 0 0 0 0-55.68zM512 288l224 128L512 547.2l-224-128L384 362.88z m172.8-99.84l224 128-108.8 64L576 250.88z m-353.92-5.12L448 250.88l-91.52 53.12L224 380.16 106.24 312.32zM114.56 517.12l108.8-64L320 512l128 71.68-108.8 64z m579.2 135.04L576 583.68 700.16 512l99.84-57.6 117.12 67.84z" fill="#1e2b3b" p-id="3316"></path></svg>
                            </span>
                            <span style="margin-left:10%" class="leftname">资讯类</span>
                        </div>
                    
                    </template>
                    <el-menu-item-group>
                        <el-menu-item class="leftnameinfo" :class="{leftlist:show==0}" @click="leftlist(0);jump(info[0])" index="1-1">质控部信息分享</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="2" style="padding:0px">
                    <template #title style="padding:0px">
                  
                    <div style="display:flex">
                            <span style="margin-left:15%;display: flex;
                                  justify-content: center;
                                  align-items: center;">
                                <svg t="1638868380931" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4333" width="20" height="20"><path d="M512.0181274414062 140.7236328125c-125.93957519531247 0-228.48156738281247 102.50326538085938-228.48156738281247 228.48074340820312 0 125.90167236328126 102.46701049804688 228.44448852539062 228.48156738281247 228.44448852539062 125.97665405273438 0 228.517822265625-102.54199218749999 228.517822265625-228.44448852539062 0-125.97747802734375-102.54116821289061-228.48074340820312-228.517822265625-228.48074340820312z" fill="#1e2b3b" p-id="4334"></path><path d="M688.11962890625 592.4355773925781c-48.68206787109375 38.48208618164063-109.30682373046875 62.32461547851563-176.10150146484375 62.32461547851563-66.79550170898438 0-127.38153076171872-23.915863037109375-176.17565917968753-62.32461547851563C243.4666748046875 651.2484130859374 179.14804077148432 754.5303344726562 170.31338500976562 874.1483764648438c32.343475341796875 4.396728515625001 89.89892578124999 9.127990722656248 172.03436279296875 9.127990722656248h339.1916198730469c82.17333984375 0 139.7650451660156-4.731262207031249 172.14724731445312-9.127990722656248-8.762145996093748-119.69384765625-73.07995605468749-222.89996337890622-165.5669860839844-281.71279907226557z" fill="#1e2b3b" p-id="4335"></path></svg>
                            </span>
                            <span style="margin-left:10%" class="leftname">工具类</span>
                        </div>
                    </template>
                    <el-menu-item-group>
                    <el-menu-item class="leftnameinfo"  :class="{leftlist:show==1}" @click="leftlist(1);jump(tools[0])" index="2-1">质控部工具分享</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>                
                </el-menu>
          </div>
          <div class="mainright">
              <router-view></router-view>
          </div>
      </div>
    </el-main>
  </el-container>

</template>
<script>
import {adgaxios as axios} from "../../utils/request"
export default {
    name:'test',
    data(){
      return{
        shows:2,
        showlist:['1'],
        run:"1",
        show:0,
        info:{
            0:"zk_info"
        },
        tools:{
            0:"zk_tools"
        },
        leftmemnu:{
                "zk_info":0,
                "zk_tools":1,
                
                },
        leftmemnu_info:{
                "zk_info":["1"],
                "zk_tools":["2"],
             
        }

      }
    },

    methods:{
        leftlist(index){
            this.show=index
        },
        jump(row){
          console.log(row);
            this.$router.push({path: '/share'+"/"+row})
        }
    },
    created(){
      var path_ = this.$route.path.split("/")[2]
      this.show = this.leftmemnu[path_]
      this.showlist = this.leftmemnu_info[path_]
    }
    
}
</script>
<style  scoped>

.picture{
       position: absolute; 
       width: 100%;
       height:500px;
       background-image: url(../../assets/images/10-12-2.jpg);
       background-size: 100% 99%;
       z-index: -999
    }
 .box-card {
    width: 1100px;
    height:250px;
    box-shadow: 0px 0px 10px 0px rgb(24 25 41 / 10%);
    border-radius: 10px;
    margin-top:70px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
.carddiv{
  padding:35px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.maindiv{
  display:flex;
  flex-direction: row;
  margin-top:120px
}
.mainleft{
  flex: 0 0 13.5%;
  min-height: 1000px;
  
}
.mainright{
  flex: 0 0 85.5%;
  
}
.active{
    color: #409EFF;
    background-color: #ecf5ff

}
.leftlist{
    color: #409EFF;
    background-color: #ecf5ff
}
.leftname{
    font-size: 17px;
    
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.carousel_{
  display:flex;
  justify-content: space-around;
}
.carousel_content{
  display: flex;
  flex-direction: column;
  flex: 0 0 70%;
}
.carousel_title{
  font-size: 19px;
  margin-top:30px;
  font-weight: bold;
}
.carousel_icon{
  flex: 0 0 30%;
  border-right:2px solid #bfbfbf;
  margin:20px 0px 20px 0px
}
.carousel_main{
  font-size: 15px;
  text-indent:2em;
  text-align: left;
  margin: 20px 20px 0px 20px;
  line-height:170%
}
</style>