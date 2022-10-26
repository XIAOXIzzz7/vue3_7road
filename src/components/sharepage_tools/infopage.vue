<template>

    <div class="rightmain">
        <el-card shadow="hover" class="card" @click="jump(0)">
            <div class="content">
                <h5 class="title">
                    手机覆盖率TOP榜单
                </h5>
                <h6 class="main">
                    基于大数据分析，展现市场移动设备的用户覆盖情况
                </h6>
            </div>
        </el-card>
        <el-card shadow="hover" class="card" @click="jump(1)">
            <div class="content">
                <h5 class="title">
                    质量管理白皮书
                </h5>
                <h6 class="main">
                    校准产品质量,分享最新标准，通过各阶段流程指标，规范产品需求
                </h6>
            </div>
        </el-card>
        <el-card shadow="hover" class="card" @click="jump(2)">
            <div class="content">
                <h5 class="title">
                    发行流程须知
                </h5>
                <h6 class="main">
                    查看发行项目提测流程及版本测试流程介绍
                </h6>
            </div>
        </el-card>
    </div>
</template>
<script>


export default {
    setup() {
        
    },
    data(){
        return{
            go:{
                0:"TOP榜",
                1:"白皮书",
                2:"发行流程"
            }
        }
    },
    methods:{
        test(){
           
        },
        jump(index){
            this.$router.push({path: '/share/zk_info/' + this.go[index]})
 
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