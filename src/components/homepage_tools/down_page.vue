<template>
    <div @mouseenter="over()" @mouseleave="out()" v-if="showdown" class="down" >
        <div class="left">
            <h6 class="h6title" style="margin-top:70px" :class="{active:shows==0}" @mouseenter="left_button(0)">游戏测试 <svg  style="float:right;padding-right:5px" t="1638859229363" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2201" width="21" height="21"><path d="M709.845333 250.346667a22.4 22.4 0 0 1 0.533334-30.848 20.48 20.48 0 0 1 29.717333 0.64l272.426667 292.693333-272.426667 292.650667a20.458667 20.458667 0 0 1-29.717333 0.64c-8.32-8.32-8.746667-21.973333-0.533334-30.848l242.346667-262.464-242.346667-262.464z" fill="#5f748c" p-id="2202"></path></svg></h6>
            <h6 class="h6title" :class="{active:shows==1}" @mouseenter="left_button(1)">工具使用 <svg  style="float:right;padding-right:5px" t="1638859229363" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2201" width="21" height="21"><path d="M709.845333 250.346667a22.4 22.4 0 0 1 0.533334-30.848 20.48 20.48 0 0 1 29.717333 0.64l272.426667 292.693333-272.426667 292.650667a20.458667 20.458667 0 0 1-29.717333 0.64c-8.32-8.32-8.746667-21.973333-0.533334-30.848l242.346667-262.464-242.346667-262.464z" fill="#5f748c" p-id="2202"></path></svg></h6>
        </div>
        <div class="right" id="right0" >
           <!-- <el-card class="card" @click="apitest()">
                <h5 class="h5title">
                    接口测试
                </h5>
                <h6 class="h6ma">
                    检查接口参数传递的正确性，接口功能实现的正确性，输出结果的正确性，以及对各种异常情况的容错处理的完整性和合理性。
                </h6>
            </el-card>    -->
            <el-card class="card" @click="reserve()">
                <h5 class="h5title">
                    性能测试
                </h5>
                <h6 class="h6ma">
                    识别系统的弱点，评估系统能力，发现系统性能瓶颈，提高系统可靠性能和稳定性。
                </h6>
            </el-card>
            <el-card class="card" @click="reserve()">
                <h5 class="h5title">
                    兼容测试
                </h5>
                <h6 class="h6ma">
                    在产品面对海量用户之前，可以通过兼容测试尽量筛选出并解决所有影响用户体验的问题。
                </h6>
            </el-card>
            <el-card class="card" @click="reserve()">
                <h5 class="h5title">
                    弱网测试
                </h5>
                <h6 class="h6ma">
                    针对不同场景，关注一下软件的运行状态。以及弱网环境下，出现丢包、延时软件的处理机制。避免造成用户的流失。
                </h6>
            </el-card>
            <el-card class="card" @click="reserve()">
                <h5 class="h5title">
                    功能测试
                </h5>
                <h6 class="h6ma">
                    对不同类型手机进行测试，确保功能可以正常运行，保障项目的质量达到要求。
                </h6>
            </el-card>
            <el-card class="card" @click="reserve()">
                <h5 class="h5title">
                    SDK测试
                </h5>
                <h6 class="h6ma">
                    针对不同的平台进行专业的针对性测试。
                </h6>
            </el-card>
        </div>
        <div class="right" id="right1" style="display:none">
                <el-card class="card" v-for="index of 5" :key="index" style="margin:10px" @click="infogo(index)">
                    <div v-if="index==1" @click="file(0)">
                        <h5 class="h5title">PerfDog
                            <h6 class="h6ma">
                                移动全平台iOS/Android性能测试、分析工具平台。快速定位分析性能问题，提升APP应用及游戏性能和品质。
                            </h6>
                        </h5>
                    </div>
                     <div v-if="index==2" @click="file(1)">
                        <h5 class="h5title">QNET
                            <h6 class="h6ma">
                                无需ROOT/越狱手机，无需连接数据线，以独立app的方式，为用户提供快捷、可靠、功能完善的弱网模拟服务。
                            </h6>
                        </h5>
                    </div>
                     <div v-if="index==3" @click="file(2)">
                        <h5 class="h5title">Win端弱网测试工具
                            <h6 class="h6ma">
                                Windows端快速搭建可自定义的弱网环境，支持各类弱网测试内容。
                            </h6>
                        </h5>
                    </div>
                     <div v-if="index==4" @click="file(3)">
                        <h5 class="h5title">自动化脚本
                            <h6 class="h6ma">
                                更好地利用资源，将繁琐的任务自动化，极大提高测试效率。
                            </h6>
                        </h5>
                    </div>
                     <div v-if="index==5" @click="file(4)">
                        <h5 class="h5title">数据抓取工具
                            <h6 class="h6ma">
                                用于前端性能测试工具（PerfDog）相关测试数据从web端自动抓取生成excel文件。
                            </h6>
                        </h5>
                    </div>
                </el-card>
    
        </div>
    </div>
</template>
<script>
export default {
    name:'downpage',
    data(){
        return{
            showdown:false,
            shows:0,
            test:"#5f748c",
            toolsbutton:{
                        1:"PerfDog",
                        2:"QNET",
                        3:"Win弱网",
                        4:"自动化",
                        5:"数据抓取"
            },
            filego:{
                0:"/share/zk_tools/PerfDog",
                1:"/share/zk_tools/QNET",
                2:"/share/zk_tools/Win弱网",
                3:"/share/zk_tools/自动化",
                4:"/share/zk_tools/数据抓取"
            }
            
        }
    },
    methods:{
        over(){
          this.showdown=true
      },
        out(){  
        this.showdown=false
      },
        apitest(){
            this.$router.push({path: '/test/automatic/_apitest'})
        },
        infogo(index){
            this.$router.push({path: "/share/zk_tools/"+this.toolsbutton[index]})
            
        },
        left_button(index){
            this.shows=index
            document.getElementById("right"+index).style.display = "";
            for (var i=0;i<2;i++){
                if (i != index){
                    document.getElementById("right"+i).style.display = "none";
                }
            }
        },
        file(res){
            this.$router.push({path: this.filego[res]})
        },
        reserve(){
            this.$router.push({path:"/reserve/zk_project"})
        }
    
    }
}
</script>

<style scoped>
.down{
    position: absolute;
    top:70px;
    background-color:#1e2b3b;
    width:100%;
    left:0px;
    height:400px;
    display:flex;
    flex-direction: row;
    z-index: 999;
}
.left{
    flex:0 0 20%;
    display: flex;
    flex-direction: column;

}
.lebutton{
    width:250px;
    text-align: left;
    margin:10px 0px 0px 130px;
    background-color:#1e2b3b;
    height:70px;
    border:none
}
.right{
    flex:0 0 80%;
    width:100%;
    background:#213041;
    display: flex;
    flex-wrap: wrap;
   
}
.el-button:hover {
  background-color: #213041 !important;
  
}
.active{
    background-color:#213041;
    color: #3a8ee6 !important;
}

.card{
    background-color: #213041;
    width:32%;
    margin:20px 0px 0px 10px;
    height:150px;
    box-shadow:none;
    border: none;
}
.card>>>.el-card__body{
    background-color: #213041;
    box-shadow:none;
    height:150px;
    padding: 0px;
   
}
.card>>>.el-card{
    border: none;
    box-shadow:none;
    width: 400px;
    height:120px;
    background-color: #213041;
   
}
.card>>>.el-card__body:hover{
    background-color: #334961
   
}
.h6icon{
    fill:#3a8ee6 !important
}
.h6title{
    color:#ffffff;
    font-size: 15px;
    font-weight:normal;
    padding: 30px 0px 30px 0px;
    margin:0px 0px 0px 100px
}
.h5title{
    font-size:17px;
    color:white;
    margin-top:20px
}
.h6ma{
    color:#D3D3D3;
    font-size:15px;
    cursor:pointer;
    margin:25px 10px 0px 10px
}
</style>