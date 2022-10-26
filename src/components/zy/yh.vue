<template>
<div class="master">
    <div style="float:right;margin-right:10px">
        
        <el-button @click="change()" size="small" style="padding:5px;border-style:none;min-width:127px " round ><svg t="1642062841874" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1936" width="30" height="30"><path d="M170.666667 392.533333L349.866667 213.333333l29.866666 29.866667-149.333333 149.333333h669.866667v42.666667H128l42.666667-42.666667z m682.666666 213.333334l-179.2 179.2-29.866666-29.866667 149.333333-149.333333H132.266667v-42.666667H896l-42.666667 42.666667z" fill="#8a8a8a" p-id="1937"></path></svg>切换至BUG界面</el-button>
    </div>
    <div class="title">
        <!-- <el-select v-model="value" placeholder="请选择迭代版本" @visible-change="iteration_date($event)"  class="select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            >
            </el-option>
        </el-select> -->
        <el-select v-model="value" placeholder="请选择迭代版本" @visible-change="iteration_date($event)"  class="select">
            <el-option-group
            v-for="group in options"
            :key="group.label"
            :label="group.label"
            >
            <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
            </el-option-group>
        </el-select>
    <div class="select">
        <el-date-picker v-model="timevalue1" type="date" placeholder="选择日期" :disabled-date="disabledDate" :shortcuts="shortcuts" :clearable="false" @change="query()">
        </el-date-picker>
    </div>
    <div class="select">
        <el-date-picker v-model="timevalue2" type="date" placeholder="选择日期" :disabled-date="disabledDate" :shortcuts="shortcuts" :clearable="false" @change="query()">
        </el-date-picker>
    </div>
    
    <!-- <el-button size="small" style="height:40px;margin-top:24px" @click="test()"><span>确认</span></el-button> -->
    </div>
    <div style="background-color:#C0C0C015;border-top:1px solid #C0C0C050;width:100%">
       <div class="ti1" >
           <h5 class="h5">当前选择迭代版本内数据</h5>
        </div>
        <div style="background-color:#fff;margin:0px 20px 0px 20px">
        <div style="margin:20px">
            <div style="display:flex">
                <div style="flex:0 0 50%"> 
                    <el-row :gutter="12" class="rowcard">
                <el-col :span="8">
                    <el-card shadow="hover">
                    <h4 class="h4card">总需求数:</h4>
                    <h5 class="h5card">迭代版本:{{this.value}}</h5>
                    <h4 class="h4card">总计：{{this.data_sum.all}}个</h4>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                    <h4 class="h4card">完成需求数:</h4>
                    <h5 class="h5card">迭代版本:{{this.value}}</h5>
                    <h4 class="h4card">总计：{{this.data_complete.all}}个</h4>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                    <h4 class="h4card">开发延期需求数:&nbsp;&nbsp;</h4>
                    <h5 class="h5card">迭代版本:{{this.value}}</h5>
                    <div style="display:flex">
                        <h4 class="h4card">总计：{{this.data_delay.all}}个</h4>
                        <el-button size="small" style="margin-left:10px" @click="dialogdelay = true">查看</el-button>
                    </div>
                    </el-card>
                </el-col>
                <el-dialog title="开发延期需求" v-model="dialogdelay">
                    <div style="display:flex">
                        <el-table :data="delay_bug_table" >
                            <el-table-column property="id" label="#" min-width="10"></el-table-column>
                            <el-table-column property="issue_id" label="id" min-width="20"></el-table-column>
                            <el-table-column property="title" label="标题" min-width="60"></el-table-column>
                            <el-table-column label="详情" min-width="10">
                                <template v-slot="scope">
                                    <el-button  ><a style="text-decoration: none" :href="scope.row.url"  target="_blank">详情</a></el-button>
                                    </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-dialog>
            </el-row >
            <el-row :gutter="12" class="rowcard">
                <el-col :span="8">
                    <el-card shadow="hover">
                    <h4 class="h4card">取消需求数:</h4>
                    <h5 class="h5card">迭代版本:{{this.value}}</h5>
                    <h4 class="h4card">总计：{{this.data_cancel.all}}个</h4>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                    <h4 class="h4card">进行中的需求:</h4>
                    <h5 class="h5card">迭代版本:{{this.value}}</h5>
                    <h4 class="h4card">总计：{{this.data_process.all}}个</h4>
                    
                    </el-card>
                </el-col>
               
            </el-row>
            </div>
            <!-- <div style="background-color:#C0C0C015;width:20px;margin-left:10px"></div> -->
            <div style="flex: 0 0 50%;border-left:10px solid #C0C0C015;">
                <div style="height:400px;width:100%;;margin-top:20px" id="issueall"></div>
            </div>
                
            </div>
        </div>
    </div>
    <div class="ti1" style="margin-top:0px">
           <h5 class="h5">当前选择时间区间内数据</h5>
    </div>
        <div style="background-color:#fff;margin:0px 20px 0px 20px">
        <div style="margin:20px">
            <div style="display:flex">
                <div style="flex:0 0 50%"> 
                <el-row :gutter="12" class="rowcard">
                <el-col :span="8">
                    <el-card shadow="hover">
                    <h4 class="h4card">总需求数:</h4>
                    <h5 class="h5card">日期:{{this.timevalue1}}/{{this.timevalue2}}</h5>
                    <h4 class="h4card">总计：{{this.data_sum.date}}个</h4>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                    <h4 class="h4card">完成需求数:</h4>
                    <h5 class="h5card">日期:{{this.timevalue1}}/{{this.timevalue2}}</h5>
                    <h4 class="h4card">总计：{{this.data_complete.date}}个</h4>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                    <h4 class="h4card">开发延期需求数:&nbsp;&nbsp;</h4>
                    <h5 class="h5card">日期:{{this.timevalue1}}/{{this.timevalue2}}</h5>
                    <h4 class="h4card">总计：{{this.data_delay.date}}个</h4>
                    </el-card>
                </el-col>
            </el-row >
            <el-row :gutter="12" class="rowcard">
                <el-col :span="8">
                    <el-card shadow="hover">
                    <h4 class="h4card">取消需求数:</h4>
                    <h5 class="h5card">日期:{{this.timevalue1}}/{{this.timevalue2}}</h5>
                    <h4 class="h4card">总计：{{this.data_cancel.date}}个</h4>
                     
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                    <h4 class="h4card">进行中的需求:</h4>
                   <h5 class="h5card">日期:{{this.timevalue1}}/{{this.timevalue2}}</h5>
                    <h4 class="h4card">总计：{{this.data_process.date}}个</h4>
                    
                    </el-card>
                </el-col>
               
            </el-row>
            </div>
            <!-- <div style="background-color:#C0C0C015;width:20px;margin-left:10px"></div> -->
            <div  style="flex: 0 0 50%;border-left:10px solid #C0C0C015;">
                <div style="height:400px;width:100%;margin-top:20px" id="issuetime"></div>
            </div>
                
            </div>
        </div>
    </div>
        <div class="ti1" style="margin-top:0px">
           <h5 class="h5">当前正在进行需求图</h5>
        </div>
        <div style="display:flex;background-color:#fff;margin:0px 20px 0px 20px">
            <div style="height:400px;width:100%" id="issueing"></div>
        </div>
    
    </div>
    
    

   
</div>
</template>
<script>
import * as echarts from 'echarts'
import moment from "moment"
import {hgaxios as axios} from "../../utils/request"
export default {
    setup() {
        
    },
    data(){
        return{
            value:"",
            options: [

            ],
            data_sum:{},
            data_complete:{},
            data_delay:{},
            data_cancel:{},
            data_process:{},
            timevalue1:"",
            timevalue2:"",
            delay_bug_table: [],
            dialogdelay: false,
            echarts_options:{
                title: {
                    text: '迭代版本数据',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    textStyle: { //图例文字的样式
                            fontSize: 12
                        },
                },
                series: [
                    {
                    
                    type: 'pie',
                    radius: '67%',
                    data: [
                        
                    ],
                    emphasis: {
                        itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                    }
                ]
                },
                echartstime_options:{
                                title: {
                                text: '时间区间数据',
                                
                                left: 'center'
                            },
                            tooltip: {
                                trigger: 'item'
                            },
                            legend: {
                                top: '10%',
                                left: 'center',
                                textStyle: { //图例文字的样式
                            fontSize: 12
                        },
                            },
                            series: [
                                {
                                
                                type: 'pie',
                                top: '10%',
                                radius: ['50%', '80%'],
                                avoidLabelOverlap: false,
                                itemStyle: {
                                    borderRadius: 10,
                                    borderColor: '#fff',
                                    borderWidth: 2
                                },
                                label: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    label: {
                                    show: true,
                                    fontSize: '40',
                                    fontWeight: 'bold'
                                    }
                                },
                                labelLine: {
                                    show: false
                                },
                                data: [
                                   
                                ]
                                }
                            ]
                            },
                echartsing_options:{
                      
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                            type: 'shadow'
                            }
                        },
                         
                          toolbox: {
                            show: true,
                            feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: { readOnly: false },
                            magicType: { type: ['line', 'bar'] },
                            restore: {},
                            saveAsImage: {}
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [
                            {
                            type: 'category',
                            data: ['设计（设计中、设计完成）', '开发（实现中）', '验收（联调中、联调完成）', '测试（测试中、转测试）'],
                            axisTick: {
                                alignWithLabel: true
                            }
                            }
                        ],
                        yAxis: [
                            {
                            type: 'value'
                            }
                        ],
                        series: [
                            {
                            name: '数量',
                            type: 'bar',
                            barWidth: '60',
                            color:"#409EFF90",
                            data: []
                            }
                        ]
                        },
                        disabledDate(time) {
                            return time.getTime() > Date.now()
                            },
                            shortcuts: [
                            {
                                text: '跳转至今日',
                                value: new Date(),
                            },
                        ],
            }
    },
    methods:{
        iteration_list(){
            var lis2 = []
            axios({
                url: '/api/v1/IterationList/',
                method:'get',
                params:{
                    project:this.$route.params.project,
                    }
                }).then(res => {
                    var iter_list = res.data.data.iteration_list
                    var iter_status = res.data.data.iteration_status
                    var dict_1 = {
                        label:"未关闭",
                        options:[

                        ]
                    }
                    var dict_2 = {
                        label:"已关闭",
                        options:[

                        ]
                    }
                    for (var status in iter_status){
                        if (iter_status[status] == "open"){
                            dict_1.options.push(
                                {
                                    value:iter_list[status],
                                    label:iter_list[status]
                                }
                            )
                        }
                        else{
                            dict_2.options.push(
                                {
                                    value:iter_list[status],
                                    label:iter_list[status]
                                }
                            )
                        }
                    }
                    lis2.push(dict_1)
                    lis2.push(dict_2)
                    console.log(lis2);
                    this.options = lis2
                    this.value = lis2[0].options[0]["value"]
                    this.iteration_date()
                   
                    
                })
        },
        iteration_date(){
             axios({
                url: '/api/v1/IterationDate/',
                method:'get',
                params:{
                    project:this.$route.params.project,
                    iteration:this.value
                    }
                }).then(res => {
                    this.timevalue1 = res.data.data.start
                    this.timevalue2 = res.data.data.end
                axios({
                url: '/api/v1/IssueInfo/',
                method:'get',
                params:{
                    project:this.$route.params.project,
                    iteration:this.value,
                    start:this.timevalue1,
                    end:this.timevalue2
                    }
                }).then(res => {
                    // var dic = {}
                    var lis = []
                    this.data_sum = res.data.data.sum
                    this.data_complete = res.data.data.complete
                    this.data_delay = res.data.data.delay
                    this.data_cancel = res.data.data.cancel
                    this.data_process = res.data.data.process
                    this.delay_bug_table = res.data.data.delay.info
                    this.ech1()
                    this.ech2()
                    // for(var i in res.data.data.echarts){
                    //     console.log(i);
                    //     if (i == "设计"){
                    //         dic["设计（设计中、设计完成）"] =[res.data.data.echarts[i]]
                    //     }
                    //     if (i == "开发"){
                    //         dic["开发（实现中）"] = [res.data.data.echarts[i]]
                    //     }
                    //     if (i == "验收"){
                    //         dic["验收（联调中、联调完成）"] = [res.data.data.echarts[i]]
                    //     }
                    //     if (i == "测试"){
                    //         dic["测试（测试中、转测试）"] = [res.data.data.echarts[i]]
                    //     }
                    // }
                    // this.ech3(dic)
                    for(var i in res.data.data.echarts){
                        lis.push(res.data.data.echarts[i])
                    }
                    this.ech3(lis)
                    })
                })
        },
        query(){    
            if (this.timevalue1 && this.timevalue2){
                let starttime = moment(this.timevalue1,"yyyy-MM-DD").format().split('T')[0]
                let endtime = moment(this.timevalue2,"yyyy-MM-DD").format().split('T')[0]
                this.timevalue1 = starttime
                this.timevalue2 = endtime
                axios({
                url: '/api/v1/IssueInfo/',
                method:'get',
                params:{
                    project:this.$route.params.project,
                    iteration:this.value,
                    start:this.timevalue1,
                    end:this.timevalue2
                    }
                }).then(res => {
                    var lis = []
                    this.data_sum = res.data.data.sum
                    this.data_complete = res.data.data.complete
                    this.data_delay = res.data.data.delay
                    this.data_cancel = res.data.data.cancel
                    this.data_process = res.data.data.process
                    this.ech1()
                    this.ech2()
                    for(var i in res.data.data.echarts){
                        lis.push(res.data.data.echarts[i])
                    }
                    // this.ech3(lis)
                    
                })
            }
        },
        echar(id, title, type, option, data, x, y ,color_,){
            var chartDom1= echarts.getInstanceByDom(document.getElementById(id))
            if (chartDom1 == null) { // 如果不存在，就进行初始化
            chartDom1 = echarts.init(document.getElementById(id));
            }
            axios({
                url: '/api/v1/Echarts/',
                method:'get',
                params:{
                    title:title,
                    echarts_type:type,
                    series_option:option,
                    series_data:data,
                    xAxis:JSON.stringify(x),
                    yAxis:y,
                    color:JSON.stringify(color_)
                    }
                })
                .then(res => {
                   chartDom1.setOption(res.data.data)
                })
        },
        ech1(){
            var chartDom1= echarts.getInstanceByDom(document.getElementById("issueall"))
            if (chartDom1 == null) { // 如果不存在，就进行初始化
                chartDom1 = echarts.init(document.getElementById("issueall"));
                }
            var data = [
                {value:this.data_sum.all,name:"总需求数"},
                {value:this.data_complete.all,name:"完成需求数"},
                {value:this.data_delay.all,name:"延期需求数"},
                {value:this.data_cancel.all,name:"取消需求数"},
                {value:this.data_process.all,name:"进行中的需求数"},
            ]
            this.echarts_options.series[0].data = data
            chartDom1.setOption(this.echarts_options)
       
        },
        ech2(){
            var chartDom2= echarts.getInstanceByDom(document.getElementById("issuetime"))
            if (chartDom2 == null) { // 如果不存在，就进行初始化
                chartDom2 = echarts.init(document.getElementById("issuetime"));
                }
            var data = [
                {value:this.data_sum.date,name:"总需求数"},
                {value:this.data_complete.date,name:"完成需求数"},
                {value:this.data_delay.date,name:"延期需求数"},
                {value:this.data_cancel.date,name:"取消需求数"},
                {value:this.data_process.date,name:"进行中的需求数"},
            ]
            this.echartstime_options.series[0].data = data
            chartDom2.setOption(this.echartstime_options)
        },
        ech3(data){
           
            
            var chartDom3 = echarts.getInstanceByDom(document.getElementById("issueing"))
            if (chartDom3 == null) { // 如果不存在，就进行初始化
                            chartDom3 = echarts.init(document.getElementById("issueing"));
                        }
            this.echartsing_options.series[0].data = data
            
        // axios({
        //     url: '/api/v1/Echarts/',
        //     method:'get',
        //     params:{
        //         title:"BUG情况",
        //         echarts_type:'bar',
        //         series_option:{"smooth": "True", "seriesLayoutBy": "row","barWidth" : 60},
        //         series_data:data,
        //         xAxis:JSON.stringify(["设计（设计中、设计完成）", "开发（实现中）", "验收（联调中、联调完成）", "测试（测试中、转测试）"]),
        //         yAxis:"个",
        //         color:JSON.stringify(['#409EFF90', '#F2CF61', '#318C80', "#51D9B5", '#A6E582'])
        //         }
        //     })
        //     .then(res => {
        //         chartDom3.setOption(res.data.data);
        //         console.log(res.data.data);
        //     })
            chartDom3.setOption(this.echartsing_options);
        },
        change(){
            console.log("yes");
            this.$router.push({path: '/qa/query_info/'+ this.$route.params.project + '/bug'})
        }
    },
    // methods(){
    //     let starttime = moment(this.timevalue1,"yyyy-MM-DD").format().split('T')[0]
    //     let endtime = moment(this.timevalue2,"yyyy-MM-DD").format().split('T')[0]
    //     this.timevalue1 = starttime
    //     this.timevalue2 = endtime
    // },
    created(){
       
    },
    // mounted(){
        
    //     // var chartDom2 = echarts.getInstanceByDom(document.getElementById("issuetime"))
    //     // if (chartDom2 == null) { // 如果不存在，就进行初始化
    //     //                 chartDom2 = echarts.init(document.getElementById("issuetime"));
    //     //             }
    //     // chartDom2.setOption(this.echartstime_options);
       
    //     this.iteration_list()
    //     console.log("this");
        
        

    // },
    watch:{
        $route:{
        handler(){
            if (this.$route.params.type == "issue"){
                console.log("change");
                console.log(this.$route.params);
                this.iteration_list()
            }
        },
        immediate:true
        } 
    },
}
</script>
<style scoped>
.master{
   
    margin-top:0px;
    padding: 0px;
    padding-top: 10px;
    /* padding-left:10px; */
    background-color: #ffffff;
}
.active{
  color: #3a8ee6;
  background-color: #ecf5ff;
  outline: 0;
}
.input{
    width:100px
}
.title{
    display: flex;
    justify-content: center;
    height: 100px;
}
.select{
    margin-top:25px;
    margin-right:40px
}
.ti1{
    background-color:#fff;
    height:40px;
    margin:20px;
    box-shadow: 5px 5px 2px #C0C0C050
    
    
}
.h5{
    font-weight: bolder;
    text-align: left;
    color:#00000097;
    margin-left:20px;
    padding:5px;
    
}
.ti2{
    background-color:#fff;
    height:300px;
    margin:20px 
}
.rowcard{
    margin: 20px;
}
.h4card {
      font-size: 20px;
      text-align: left;
      margin:5px;
      font-weight: normal;
  }
.h5card{
    font-size: 15px;
    text-align: left;
    margin:5px;
    font-weight: normal;
    
}
</style>