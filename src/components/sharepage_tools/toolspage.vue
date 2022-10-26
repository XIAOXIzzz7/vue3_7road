<template>

    <div class="rightmain">
        <el-card shadow="hover" class="card" @click="jump(0)">
            <div class="content">
                <h5 class="title">
                    PerfDog
                </h5>
                <h6 class="main">
                    移动全平台iOS/Android性能测试、分析工具平台。快速定位分析性能问题
                </h6>
            </div>
        </el-card>
        <el-card shadow="hover" class="card" @click="jump(1)">
            <div class="content">
                <h5 class="title">
                    QNET
                </h5>
                <h6 class="main">
                    无需ROOT手机，无需连接数据线，以独立app的方式，为用户提供给快捷、可靠、功能完善的弱网络模拟服务
                </h6>
            </div>
        </el-card>
        <el-card shadow="hover" class="card" @click="jump(2)">
            <div class="content">
                <h5 class="title">
                    Win端弱网环境搭建
                </h5>
                <h6 class="main">
                    可以精确模拟、带宽、延迟、丢包、抖动等状态
                </h6>
            </div>
        </el-card>
        <el-card shadow="hover" class="card" @click="jump(3)">
            <div class="content">
                <h5 class="title">
                    自动化脚本
                </h5>
                <h6 class="main">
                   节省人力、时间或硬件资源，提高测试效率，满足版本需求的快速迭代，提升产品测试质量
                </h6>
            </div>
        </el-card>
        <el-card shadow="hover" class="card" @click="jump(4)">
            <div class="content">
                <h5 class="title">
                    数据抓取工具
                </h5>
                <h6 class="main">
                    取代人工统计,一键获取全部测试内容详情
                </h6>
            </div>
        </el-card>
   
    </div>
</template>
<script>


import {axioss as axios} from "../../utils/request"

export default {
    setup() {
        
    },
    data(){
        return{
            go:{
                0:"PerfDog",
                1:"QNET",
                2:"Win弱网",
                3:"自动化",
                4:"数据抓取"
            }
        }
    },
    methods:{
        test(){
           
        },
        jump(index){
            this.$router.push({path: '/share/zk_tools/' + this.go[index]})
           
        }
    },
  

}
</script>
<style scoped>
.rightmain{
    min-height:500px;
    width:100%;
    margin:20px 30px 30px 30px;
    display: flex;
    flex-wrap: wrap;
}
.h5main{
    font-size:19px;
    text-align: left;
    margin:0px
}
.card{
    max-height:120px;
    min-height: 120px;
    width:350px;
    margin: 0px 20px 0px 20px;
}
.content{
    display: flex;
    flex-direction: column;
}
.title{
    margin-top:0px;
    font-size: 18px;
    margin-bottom: 20px;
}
.main{
    margin-top: 0px;
    font-size: 14px;
    font-weight:normal;
    text-align: left;
    text-indent:2em;
}
</style>