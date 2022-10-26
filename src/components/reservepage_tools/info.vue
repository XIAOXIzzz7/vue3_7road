<template>
<div style="min-height:1000px;margin-top:20px;margin-left:50px">
    <div>
        <h5 style="margin:20px;font-weight:bolder;font-size:20px">项目接入测试需求细则</h5>
    </div>
        <div style="display:flex">
            <el-table :data="tableData" border   :cell-style="cellStyle" :header-cell-style="{color:'#000000'}">
            <el-table-column prop="ID" label="ID" min-width="5"> 
                <template v-slot="scope" >
                     <p style="padding:0px;margin-bottom:0px;margin-left:10px">{{scope.row.ID}}</p> 
                </template>
            </el-table-column>
            <el-table-column  label="研发侧需要给出文档和配合" min-width="30"> 
                 <template v-slot="scope" >
                      <p style="padding:0px;margin-bottom:2px">{{scope.row.file}}</p> 
                      <p  v-if="scope.row.file_add5_1!=''" style="color:red;margin-bottom:2px !important">{{scope.row.file_add5_1}}</p>   
                      <p v-if="scope.row.file_add11_1!=''" style="margin-bottom:2px !important">{{scope.row.file_add11_1}} </p>   
                      <p v-if="scope.row.file_add11_2!=''" style="margin-bottom:2px !important">{{scope.row.file_add11_2}}</p>   
                      <p v-if="scope.row.file_add11_3!=''" style="margin-bottom:2px !important">{{scope.row.file_add11_3}}</p>   
                      <p v-if="scope.row.file_add11_4!=''" style="color:red;margin-bottom:2px !important">{{scope.row.file_add11_4}}</p>   
                      <p v-if="scope.row.file_add11_5!=''" style="margin-bottom:2px !important">{{scope.row.file_add11_5}}</p>   
                      <p v-if="scope.row.file_add11_6!=''" style="margin-bottom:2px !important">{{scope.row.file_add11_6}}</p>  
                      <p v-if="scope.row.file_add12_1!=''" style="color:red;margin-bottom:2px !important">{{scope.row.file_add12_1}}</p> 
                      <p v-if="scope.row.file_add13_1!=''" style="color:red;margin-bottom:2px !important">{{scope.row.file_add13_1}}</p>  
                    <!-- <h6 style="text-align:center;width:100px;padding:5px" :class="(scope.row.result=='成功')?'success':(scope.row.result=='失败')?'failuer':(scope.row.result=='不稳定')?'unstable':(scope.row.result=='中止')?'aborted':'reselve'">{{scope.row.result}}</h6> -->
                </template>
            </el-table-column>
            <el-table-column prop="mode" label="给包方式" min-width="30"> 
                 <template v-slot="scope" >
                     <p style="padding:0px;margin-bottom:0px">{{scope.row.mode}}</p> 
                     <p  v-if="scope.row.mode_add_4_1!=''" style="color:red;margin-bottom:0px !important">{{scope.row.mode_add_4_1}}</p>
                </template>
            </el-table-column>
            <el-table-column prop="server" label="需求服务器" min-width="30"> 

            </el-table-column>
            <el-table-column prop="servertest" label="服务器测试需求" min-width="30"> 
                <template v-slot="scope" >
                      <p style="padding:0px;margin-bottom:0px">{{scope.row.servertest}}</p> 
                      <p  v-if="scope.row.servertest_add8_1!=''" style="color:red;margin-bottom:0px !important">{{scope.row.servertest_add8_1}}</p>   
                </template>
            </el-table-column>
        </el-table>
        </div>
</div>
</template>
<script>
export default {
    name:'overview',
    methods:{
       cellStyle({rowIndex, columnIndex}){
                //设置表格每行间隔颜色
                for (var i = 0;i < 12;i++){
                   if (rowIndex===i && columnIndex===2){
                    return "border-bottom:none"
                }
                }
              
                // if (rowIndex===1){
                //     return "background:#2E335E;border:none;color: #FFFFFF;"
                // }
            },
     
          },
    data(){
        return{
            tableData: [
          { 
            ID:"1",
            file: '游戏测试大纲',
            mode: '1、研发侧给出的包需要自测（能安装、能运行、进游戏后无卡点）',
            server: '测试服',
            servertest:'测试自由调时间、用gm，最好能改配置边界'
          },
         {  
            ID:"2",
            file: '所有测试项涉及的配置表',
            mode: '2、在一轮测试未完成时，如非必要不换包，热更解决，如果问题较多，都解决完毕后重新出包',
            server: '灰度服',
            servertest:''
          },
         {
            ID:"3",
            file: '测试用例',
            mode: '3、给包位置推荐固定',
            server: '提审服',
            servertest:''
          },
          {
            ID:"4",
            file: '策划案',
            mode: '注意事项：',
            server: '线上服',
            servertest:'',
            mode_add_4_1:"用来做性能的包、提审包不能带debug，其他测试包需要带debug"
          },
          {
            ID:"5",
            file: 'GM文档(gm命令+命令说明),gm必须项 :',
            mode: '',
            server: '临时中断测试服',
            servertest:'',
            file_add5_1:'在游戏内使用，加道具，开功能，升级,跳关，充值，转盘类、抽卡类抽奖概率、次数修改'
          },
          {
            ID:"6",
            file: '断线重连机制文档',
            mode: '',
            server: 'IOS测试服',
            servertest:'Android和IOS数据不互通，需要单独搭个iOS服'
          },
          {
            ID:"7",
            file: '充值项+直购列表',
            mode: '',
            server: 'Android测试服',
            servertest:'Android和IOS数据不互通，需要单独搭个Android服'
          },
          {
            ID:"8",
            file: '兼容测试基线（即对外测试最低机型和系统兼容标准基线）',
            mode: '',
            server: '兼容测试服',
            servertest:'第一版投放或大版本需要准备',
            servertest_add8_1:"（注意此服的客户端不要热更新）"
          },
          {
            ID:"9",
            file: '接入bugly',
            mode: '',
            server: '压力测试服',
            servertest:'第一版投放或大版本需要准备'
            
          },
          {
            ID:"10",
            file: 'TAPDbug跟进（新建接入项目，发行这边会将所有的bug提交到TAPD上，研发侧可以挪移到内网修复后，打出热更包更新到发行测试服后，在TAPD上修改状态已解决，发行进行验收和其他功能测试，直至项目能投放）',
            mode: '',
            server: '跨服组',
            servertest:'若有跨服需求'
          },
          {
            ID:"11",
            file: '热更：',
            mode: '',
            server: '合服组',
            servertest:'若有合服测试需求',
            file_add11_1:"1、修改版本号，更新后正常更新到修改的版本号，弹框",
            file_add11_2:"2、修改配置，更新后正常更新到修改的配置",
            file_add11_3:"4、修改代码，更新后正常更新到修改的代码",
            file_add11_4:"以上都需要在给到更新包的同时，提供详细的修改下和表现方式",
            file_add11_5:"强更：",
            file_add11_6:"提升大版本号，拉起后弹框链接下载地址"
          },
          {
            ID:"12",
            file: '压力测试：',
            mode: '',
            server: '',
            servertest:'',
            file_add12_1:"研发提供合适的（不同项目机器人需要做的动作）机器人"
          },
          {
            ID:"13",
            file: '注意事项：',
            mode: '',
            server: '',
            servertest:'',
            file_add13_1:"活动表配置需要单独列出来什么时间开启，内容是什么，相关配置"
          },
        ],
    
        }
    }
}
</script>
<style scoped>

</style>