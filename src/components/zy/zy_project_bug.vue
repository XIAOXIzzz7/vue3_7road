<template>
<div class="master">
    <div style="float:right;margin-right:10px">
        
        <el-button @click="change()" size="small" style="padding:5px;border-style:none;min-width:127px " round ><svg t="1642062841874" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1936" width="30" height="30"><path d="M170.666667 392.533333L349.866667 213.333333l29.866666 29.866667-149.333333 149.333333h669.866667v42.666667H128l42.666667-42.666667z m682.666666 213.333334l-179.2 179.2-29.866666-29.866667 149.333333-149.333333H132.266667v-42.666667H896l-42.666667 42.666667z" fill="#8a8a8a" p-id="1937"></path></svg>切换至需求界面</el-button>
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
        <h5 class="h5">{{value}}--BUG总数统计</h5>
    </div>
    <div style="margin:20px" >
        <el-row :gutter="12">
            <el-col :span="8" >
                <el-card shadow="always" class="card_1">
                    <h4 class="h4card">BUG总数:</h4>
                    <h5 class="h5card">日期:{{timevalue1}}/{{timevalue2}}</h5>
                    <h4 class="h4card">总计：{{allbugnumber.sum}}个</h4>
                    <div class="cardbo">
                        <h5 class="cardboh5"><h5 class="cardboh52">S级:{{allbugnumber.fatal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">A级:{{allbugnumber.serious}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">B级:{{allbugnumber.normal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">C级:{{allbugnumber.prompt}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">D级:{{allbugnumber.advice}}</h5></h5>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8" >
                <el-card shadow="always" class="card_1">
                    <h4 class="h4card">新增BUG数:</h4>
                    <h5 class="h5card">日期:{{timevalue1}}/{{timevalue2}}</h5>
                    <h4 class="h4card">总计：{{addbugnumber.sum}}个</h4>
                    <div class="cardbo">
                        <h5 class="cardboh5"><h5 class="cardboh52">S级:{{addbugnumber.fatal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">A级:{{addbugnumber.serious}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">B级:{{addbugnumber.normal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">C级:{{addbugnumber.prompt}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">D级:{{addbugnumber.advice}}</h5></h5>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8" >
                <el-card shadow="always" class="card_1">
                    <h4 class="h4card">遗留BUG数:  (包含挂起)</h4>
                    <h5 class="h5card">日期:{{timevalue1}}/{{timevalue2}}</h5>
                    <h4 class="h4card">总计：{{staybugnumber.sum}}个</h4>
                    <div class="cardbo">
                        <h5 class="cardboh5"><h5 class="cardboh52">S级:{{staybugnumber.fatal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">A级:{{staybugnumber.serious}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">B级:{{staybugnumber.normal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">C级:{{staybugnumber.prompt}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">D级:{{staybugnumber.advice}}</h5></h5>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
    <div style="margin:20px" >
        <el-row :gutter="12">
            <el-col :span="8" >
                <el-card shadow="always" class="card_1">
                    <h4 class="h4card">关闭BUG数:</h4>
                    <h5 class="h5card">日期:{{timevalue1}}/{{timevalue2}}</h5>
                     <h4 class="h4card">总计：{{closebugnumber.sum}}个</h4>
                     <div class="cardbo">
                         <h5 class="cardboh5"><h5 class="cardboh52">S级:{{closebugnumber.fatal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">A级:{{closebugnumber.serious}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">B级:{{closebugnumber.normal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">C级:{{closebugnumber.prompt}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">D级:{{closebugnumber.advice}}</h5></h5>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8" >
                <el-card shadow="always" class="card_1">
                    <h4 class="h4card">BUG回归失败:</h4>
                    <h5 class="h5card">日期:{{timevalue1}}/{{timevalue2}}</h5>
                    <h4 class="h4card">总计：{{failbugnumber.sum}}个</h4>
                     <div class="cardbo">
                        <h5 class="cardboh5"><h5 class="cardboh52">S级:{{failbugnumber.fatal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">A级:{{failbugnumber.serious}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">B级:{{failbugnumber.normal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">C级:{{failbugnumber.prompt}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">D级:{{failbugnumber.advice}}</h5></h5>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8" >
                <el-card shadow="always" class="card_1">
                    <h4 class="h4card">BUG重启:</h4>
                    <h5 class="h5card">日期:{{timevalue1}}/{{timevalue2}}</h5>
                    <h4 class="h4card">总计：{{restartbugnumber.sum}}个</h4>
                    <div class="cardbo">
                        <h5 class="cardboh5"><h5 class="cardboh52">S级:{{restartbugnumber.fatal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">A级:{{restartbugnumber.serious}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">B级:{{restartbugnumber.normal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">C级:{{restartbugnumber.prompt}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">D级:{{restartbugnumber.advice}}</h5></h5>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
    <div style="display:flex"> 
        <div style="width:100%;height:400px; min-height:400px;margin:20px;margin-top:20px;background-color:white;" id="BUGStatistics"></div>
    </div>
    <!-- 今日bug分析 -->
    <div class="ti1" style="margin-top:0px;display:flex">
        <h5 class="h5">当前遗留BUG分析</h5>
        <div style="flex: 0 0 78%;margin-top:3px">
            <el-button type="info" size="small" style="width:140px" plain @click="today_bug()" >功能模块分布</el-button>
            <el-button type="info" size="small" style="width:140px" plain @click="today_level()">严重等级分布</el-button>
            <el-button type="info" size="small" style="width:140px" plain @click="today_status()">当前状态分布</el-button>
        </div>
    </div>
    <div style="display:flex">
        <div style="width:100%;height:400px; min-height:400px;margin:0px 20px 20px 20px;background-color:white;" id="Bug_today"></div>
    </div>        
    <div class="ti1" style="margin-top:0px;display:flex" >
            <h5 class="h5">{{value}}--每日BUG趋势分析
            </h5>
            <div style="flex: 0 0 65%;margin-top:3px">
                <el-button type="info" size="small" style="width:140px" plain @click="Legacybug()" >查看BUG趋势分布</el-button>
                <el-button type="info" size="small" style="width:140px" plain @click="buglevel()">查看BUG等级</el-button>
                <el-button type="info" size="small" style="width:140px" plain @click="buginfo()">查看BUG遗留分析</el-button>
            </div>
            
    </div>
    <div style="display:flex">
        <div style="width:100%;height:400px; min-height:400px;margin:20px;background-color:white;" id="Legacybug"></div>
    </div>
       
    <div class="ti1" style="margin-top:0px;display:flex">
        <h5 class="h5">{{timevalue1}}/{{timevalue2}}:{{value}}--BUG统计</h5>
        <div style="flex: 0 0 49%;margin-top:3px">
            <el-button type="info" size="small" style="width:140px" plain @click="mem_bug()" >创建缺陷单数量</el-button>
            <el-button type="info" size="small" style="width:140px" plain @click="RD_bug()">查看研发名下BUG</el-button>
            <el-button type="info" size="small" style="width:140px" plain @click="Legacy_bug()">查看长期未解决BUG</el-button>
        </div>
    </div>
    <div style="height:40px;display:flex;justify-content:space-between" >
        <el-select @change="Legacy_bug_change()" v-if="legacy_show==1" v-model="Legacy_bug_value"  placeholder="请选择" style="float:left;margin-left:20px">
            <el-option
            v-for="item in Legacy_bug_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            >
            </el-option>
        </el-select>
         <el-input size="small" @input="bug_mem_input_change()" v-if="bug_mem_show==1" style="width:200px;margin-right:20px" v-model="bug_mem_input" placeholder="请输入"></el-input>
    </div>
    <div style="display:flex" v-if="bugman_show==1">
        <div style="width:100%;height:400px; min-height:400px;margin:0px 20px 20px 20px;background-color:white;" id="Bugman"></div>
    </div>
    <div style="display:flex;flex-direction:column" v-if="bugtable_show==1">
        <div style="height:350px; min-height:350px;margin:0px 20px 20px 20px;background-color:white;">
            <el-table :data="bugman_tableData" >
                <!-- <el-table-column prop="#" label="#" min-width="10"> </el-table-column> -->
                <el-table-column prop="id" label="id" min-width="10"> </el-table-column>
                <el-table-column prop="title" label="标题" min-width="50"> </el-table-column>
                <el-table-column prop="member" label="姓名" min-width="7"> </el-table-column>
                <el-table-column prop="created" label="创建时间" min-width="13"> </el-table-column>
                <el-table-column prop="status" label="状态" min-width="10"> </el-table-column>
                <el-table-column prop="severity" label="严重程度" min-width="10"> </el-table-column>
                <el-table-column label="详情" min-width="10">
                    <template v-slot="scope">
                        <el-button  ><a  style="text-decoration: none" :href="scope.row.url"  target="_blank">详情</a></el-button>
                        </template>
                </el-table-column>
            </el-table>
            
        </div>
        <div class="block" style="margin:0px 20px 0px 20px">
                <!-- <span class="demonstration">  </span> -->
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                v-model:currentPage="currentPage1"
                :page-size="bug_mem_pagesize"
                layout="total, prev, pager, next, jumper"
                :total="bug_mem_total"
                >
                </el-pagination>
            </div>
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
            timevalue1:"",
            timevalue2:"",
            data_sum:{},
            data_complete:{},
            data_delay:{},
            data_cancel:{},
            data_process:{},
            allbugnumber:{},
            addbugnumber:{},
            staybugnumber:{},
            closebugnumber:{},
            failbugnumber:{},
            restartbugnumber:{},
            reqnum:{},
            charobjname:[],
            membername:[],
            memberdata:{},
            Legacy_bug_value:"",
            Legacy_bug_options:[],
            legacy_show:0,
            bugman_show:1,
            bug_mem_show:0,
            bugtable_show:0,
            bugman_tableData:[],
            bugman_tableData_all:[],
            bug_men_dict1:{},
            currentPage1: 1,
            bug_mem_total:10,
            bug_mem_pagesize:5,
            bug_mem_input:"",
            options: [

            ],
            disabledDate(time) {
                return time.getTime() > Date.now()
                },
                shortcuts: [
                {
                    text: '跳转至今日',
                    value: new Date(),
                },
            ],
            bug1:{
                title: {text: "xxx迭代Bug数量"},
                xAxis: {
                    type: 'category',
                    data: ['李xxx', '刘xxx', 'xxx', 'xxx', 'xxx', 'xxxx', 'xxx']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {formatter: "{value} 个"}
                },
                toolbox:{
                        "show":"true","feature":{"dataZoom":{"yAxisIndex":"none"},"dataView":{"readOnly":"false"},"magicType":{"type":["line","bar"]},"restore":{},"saveAsImage":{}}
                        },
                tooltip: {trigger: "axis"},
                color:["#409EFF90", "#409EFF", "#318C80", "#51D9B5", "#A6E582"],
                
                grid: {left: "3%", right: "4%", bottom: "7%", },
                
                series: [
                    {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                    color: ["#409EFF90", "#F2CF61", "#318C80", "#51D9B5", "#A6E582"],
                    name: "数量",
                    seriesLayoutBy: "row",
                    smooth: "True",
                    barWidth: 60
                    
                    }
                ]
            },
            bug2:{
                title: {text: "xxx迭代Bug数量"},
                xAxis: {
                    type: 'category',
                    data: ['王xxx', '黄xxx', 'xxx', 'xxx', 'xxx', 'xxxx', 'xxx']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {formatter: "{value} 个"}
                },
                toolbox:{
                        "show":"true","feature":{"dataZoom":{"yAxisIndex":"none"},"dataView":{"readOnly":"false"},"magicType":{"type":["line","bar"]},"restore":{},"saveAsImage":{}}
                        },
                tooltip: {trigger: "axis"},
                color:["#409EFF90", "#409EFF", "#318C80", "#51D9B5", "#A6E582"],
                
                grid: {left: "3%", right: "4%", bottom: "7%", },
                
                series: [
                    {
                    data: [70, 100, 250, 60, 110, 210, 800],
                    type: 'bar',
                    color: ["#409EFF90", "#F2CF61", "#318C80", "#51D9B5", "#A6E582"],
                    name: "数量",
                    seriesLayoutBy: "row",
                    smooth: "True",
                    barWidth: 60
                    
                    }
                ]
            },
            queryinfo:{
                   }
            }
    },
    methods:{
        change(){
            this.$router.push({path: '/qa/query_info/'+this.$route.params.project + '/issue'})
        },
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
                    this.bug_3_list()
                    this.bug_card()
                    this.bug_member("qa","创建缺陷单数量分布")
                    this.today_bug_info_module("module","功能模块分析",["#f85e5e","#93c36b"])
                    this.legacy_show = 0
                    this.bugman_show = 1
                    this.bugtable_show = 0
                    this.bug_mem_show = 0
                })
        },
        today_bug_info(nums,title,color){
            var data = []
            var name = []
            axios({
            url: '/api/v1/IterationStatisticsBug/',
            method:'get',
            params:{
                project:this.$route.params.project,
                iteration:this.value,
                type:nums
                }
            }).then(res => {
                var dic = {}
                for (var i in res.data.data){
                    name.push(i)
                    dic[i]=[res.data.data[i]]
                }
                // if(nums == "level"){
                
                // }
                this.echar(dic,["今日BUG"],title,color)
                
            })
            
        },
         today_bug_info_module(nums,title,color){
            var data = {
                // "总数":[],
                "严重":[],
                "一般":[]
            }
            var name = []
            axios({
            url: '/api/v1/IterationStatisticsBug/',
            method:'get',
            params:{
                project:this.$route.params.project,
                iteration:this.value,
                type:nums
                }
            }).then(res => {
                // console.log("33",res.data.data);
                var list_key = []
                var list_sum = []
                for(var index=0;index<Object.keys(res.data.data).length;index++){
                    // console.log(index);
                    // console.log(Object.keys(res.data.data)[index]);
                    if (index == 0){
                        list_key.push(Object.keys(res.data.data)[index])
                        list_sum.push(res.data.data[Object.keys(res.data.data)[index]]["sum"])
                    }
                    else{
                        var left = 0
                        var right = list_sum.length
                        while(left<right){
                            if(res.data.data[Object.keys(res.data.data)[index]]["sum"] < list_sum[left]){
                                left = left + 1
                            }
                            else{
                                list_sum.splice(left,0,res.data.data[Object.keys(res.data.data)[index]]["sum"])
                                list_key.splice(left,0,Object.keys(res.data.data)[index])
                                break
                            }
                            if (left == right){
                                // console.log(res.data.data[Object.keys(res.data.data)[index]]["sum"]);
                                list_sum.push(res.data.data[Object.keys(res.data.data)[index]]["sum"])
                                list_key.push(Object.keys(res.data.data)[index])
                                // break
                            }
                        }
                    }
                }
                // console.log(list_key);
                // console.log(list_sum);
                // var dic = {}
                for(var i in list_key){
                    name.push(list_key[i])
                    data["严重"].push(res.data.data[list_key[i]]["severity"])
                    data["一般"].push(res.data.data[list_key[i]]["normal"])
                }
                // console.log("123",data);
                this.echar_module(data,name,title,color)
                
            })
            
        },

        today_bug(){
            this.today_bug_info_module("module","功能模块分析",["#f85e5e","#93c36b"])
        },
        today_level(){
            this.today_bug_info("level","严重等级分布",["#f85e5e","#f85e5e","#93c36b","#8c95a8","#8c95a8"])
        },
        today_status(){
            this.today_bug_info("status","当前状态分布",["#93c36b","#2a66c7","#fce303","#8c95a8"])
        },
        echar(data,name,title,color){
            var chartDom_t= echarts.getInstanceByDom(document.getElementById("Bug_today"))
            if (chartDom_t == null) { // 如果不存在，就进行初始化
                chartDom_t = echarts.init(document.getElementById("Bug_today"));
                }
            // chartDom1.setOption(this.bugstatistics)
            axios({
                url: '/api/v1/Echarts/',
                method:'get',
                params:{
                    title:title,
                    echarts_type:'bar',
                    series_option:{"smooth": "True", "seriesLayoutBy": "row","barWidth" : 60,"barGap":'180%',"barCategoryGap":'70%',"label":{"show": true},"barMinHeight": 10,},
                    series_data:data,
                    xAxis:JSON.stringify(name),
                    yAxis:"个",
                    color:JSON.stringify(color)
                    }
                })
                .then(res => {
                  
                    chartDom_t.setOption(res.data.data,true);
                })
        },
        echar_module(data,name,title,color){
            var chartDom_t= echarts.getInstanceByDom(document.getElementById("Bug_today"))
            if (chartDom_t == null) { // 如果不存在，就进行初始化
                chartDom_t = echarts.init(document.getElementById("Bug_today"));
                }
            // chartDom1.setOption(this.bugstatistics)
            axios({
                url: '/api/v1/Echarts/',
                method:'get',
                params:{
                    title:title,
                    echarts_type:'bar',
                    series_option:{"smooth": "True", "seriesLayoutBy": "row","barWidth" : 50,"barGap":'20%',"barCategoryGap":'20%',"label":{"show": true},"stack": 'total',"barMinHeight": 10,},
                    series_data:data,
                    xAxis:JSON.stringify(name),
                    yAxis:"个",
                    color:JSON.stringify(color)
                    }
                })
                .then(res => {
                    // console.log(res.data.data);
                    // res.data.data["series"][0]["stack"]=""
                    chartDom_t.setOption(res.data.data,true);
                })
        },
        bug_3_list(){
            axios({ 
                url: '/api/v1/BugStatisticsDay/',
                method:'get',
                params:{
                    project:"银魂",
                    start:this.timevalue1,
                    end:this.timevalue2,
                    _type:"zy",
                    member:"all",
                    iteration:this.value
                    }
                }).then(res => {
                    this.queryinfo=res.data.data
                    this.Legacybug()
                })
        },
        bug_card(){
            axios({
            url: '/api/v1/BugStatistics/',
            method:'get',
            params:{
                project:"银魂",
                start:this.timevalue1,
                end:this.timevalue2,
                _type:"zy",
                member:"all",
                iteration:this.value
                }
            }).then(res => {
                // var reqnum = {"数量":[res.data.data.BUG总数.sum,res.data.data.新增BUG数.sum,res.data.data.遗留BUG数.sum,res.data.data.关闭BUG数.sum,res.data.data.BUG回归失败.sum,res.data.data.BUG重启.sum]}
                // this.reqnum = reqnum
                var dic = {}
                var charobjname = []
                var lis_ = ["总数",""]
                var lis_2 = {"致命":[],"严重":[],"一般":[],"提示":[],"建议":[],}
                for (var i in res.data.data){
                    dic[i]=[
                            res.data.data[i]["sum"],
                    ]
                    // lis_2["致命"].push(res.data.data[i]["fatal"])
                    // lis_2["严重"].push(res.data.data[i]["serious"])
                    // lis_2["一般"].push(res.data.data[i]["normal"])
                    // lis_2["提示"].push(res.data.data[i]["prompt"])
                    // lis_2["建议"].push(res.data.data[i]["advice"])
                    charobjname.push(i)
                }
                this.reqnum=dic
                this.charobjname = charobjname
                this.allbugnumber=res.data.data.BUG总数
                this.addbugnumber=res.data.data.新增BUG数
                this.staybugnumber=res.data.data.遗留BUG数
                this.closebugnumber=res.data.data.关闭BUG数
                this.failbugnumber=res.data.data.BUG回归失败
                this.restartbugnumber=res.data.data.BUG重启
                this.ech1()
            })
        },
        bug_member(status,name){
            axios({
                url: '/api/v1/IterationMemberBug/',
                method:'get',
                params:{
                    project:"银魂",
                    start:this.timevalue1,
                    end:this.timevalue2,
                    iteration:this.value,
                    type:status
                    }
                }).then(res => {
                    var membername = []
                    var bug_mem_dict = {}
                    var legacy_list = [

                        {
                            value:"全部",
                            label:"全部"
                        }
                    ]
                    var memberdata = {
                        "数量":[

                        ]
                    }
                    for (var i in res.data.data){
                        membername.push(i)
                        memberdata["数量"].push(
                            res.data.data[i]
                        )
                        if(name=="长期未解决BUG"){
                        legacy_list.push(
                            {
                                value:i,
                                label:i
                            }
                        )
                    }
                    }
                    this.Legacy_bug_options=legacy_list
                    this.memberdata=memberdata
                   
                    this.membername=membername
                    if(name=="长期未解决BUG"){
                        bug_mem_dict = res.data.bugs
                        this.bug_mem_dict1 = bug_mem_dict
                    }
                    this.ech2(name)
                })
        },
        query(){    
            if (this.timevalue1 && this.timevalue2){
                let starttime = moment(this.timevalue1,"yyyy-MM-DD").format().split('T')[0]
                let endtime = moment(this.timevalue2,"yyyy-MM-DD").format().split('T')[0]
                this.timevalue1 = starttime
                this.timevalue2 = endtime
                this.bug_3_list()
                this.bug_card()
                this.ech1()
                this.today_bug_info_module("module","今日BUG模块",["#f85e5e","#93c36b"])
                this.bug_member("qa","创建缺陷单数量分布")
                this.legacy_show = 0
                this.bugman_show = 1
                this.bugtable_show = 0
                this.bug_mem_show = 0
            }
        },
        ech1(){
            var chartDom1= echarts.getInstanceByDom(document.getElementById("BUGStatistics"))
            if (chartDom1 == null) { // 如果不存在，就进行初始化
                chartDom1 = echarts.init(document.getElementById("BUGStatistics"));
                }
            // chartDom1.setOption(this.bugstatistics)
            
            axios({
                url: '/api/v1/Echarts/',
                method:'get',
                params:{
                    title:"BUG情况",
                    echarts_type:'bar',
                    series_option:{"smooth": "True", "seriesLayoutBy": "row","barWidth" : 60,"barGap":'180%',"barCategoryGap":'70%',"label":{"show": true},"barMinHeight": 10,},
                    series_data:this.reqnum,
                    xAxis:JSON.stringify(['BUG情况']),
                    yAxis:"个",
                    color:JSON.stringify(['#409EFF90', '#F2CF61', '#318C80', "#51D9B5", '#A6E582'])
                    }
                })
                .then(res => {
                    chartDom1.setOption(res.data.data,true);
                    
                })
        },
        ech2(name){
            var chartDom2= echarts.getInstanceByDom(document.getElementById("Bugman"))
            if (chartDom2 == null) { // 如果不存在，就进行初始化
                chartDom2 = echarts.init(document.getElementById("Bugman"));
                }
            // chartDom2.setOption(this.bugman)
                axios({
                    url: '/api/v1/Echarts/',
                    method:'get',
                    params:{
                        title:name,
                        echarts_type:'bar',
                        series_option:{"smooth": "True", "seriesLayoutBy": "row","barWidth" : 40,"barGap":'180%',"barCategoryGap":'70%',"label":{"show": true},"barMinHeight": 10,},
                        series_data:this.memberdata,
                        xAxis:JSON.stringify(this.membername),
                        yAxis:"个",
                        color:JSON.stringify(['#409EFF90', '#F2CF61', '#318C80', "#51D9B5", '#A6E582'])
                        }
                    })
                    .then(res => {
                        chartDom2.setOption(res.data.data,true);
                    })
        },
        mem_bug(){
            this.bug_member("qa","创建缺陷单数量分布")
            this.currentPage1 = 1
            this.legacy_show = 0
            this.bugman_show = 1
            this.bugtable_show = 0
            this.bug_mem_show = 0
            this.Legacy_bug_value=""
            this.bug_mem_input="null"
        },
        RD_bug(){
            this.bug_member("dev","研发名下BUG分布")
            this.currentPage1 = 1
            this.legacy_show = 0
            this.bugman_show = 1
            this.bugtable_show = 0
            this.bug_mem_show = 0
            this.Legacy_bug_value=""
            this.bug_mem_input="null"
        },
        Legacy_bug(){
            this.bug_member("long_term","长期未解决BUG")
            this.currentPage1 = 1
            this.legacy_show = 1
            this.bugman_show = 1
            this.bugtable_show = 0
            this.bug_mem_show = 0
            this.Legacy_bug_value=""
            this.bug_mem_input=""
        },
        Legacy_bug_change(){
            this.currentPage1 = 1
            this.get_table()
            
            this.bugman_show = 0
            this.bugtable_show = 1
            this.bug_mem_show = 1

        },
        get_table(){
            this.bug_mem_input=""
            var bugman_table = []
            if (this.Legacy_bug_value == "全部"){
                for (var i in this.bug_mem_dict1){
                    for (var info in this.bug_mem_dict1[i]){
                        // console.log(this.bug_mem_dict1[i][info]);
                        bugman_table.push(this.bug_mem_dict1[i][info])
                    }
                }


            }
            else{
                bugman_table = this.bug_mem_dict1[this.Legacy_bug_value]
            }
            // console.log(bugman_table);
            this.bug_mem_total = bugman_table.length
            this.bugman_tableData_all = bugman_table
            this.bug_info(this.currentPage1)
        },
        bug_info(nums){
            var dp=[0]
            var co = Math.ceil(this.bugman_tableData_all.length/4)
            for (var i=0;i<co;i++){
                dp.push(0)
            }
            dp[0]=0
            dp[1]=5
            for(var i=2;i<(co+1);i++){
                dp[i]=dp[i-1]+5
            }
            
            var count = dp[nums]
            this._count = count
            var bug = []
            var start = dp[nums - 1]
            for(var i=start;i<count;i++){
                if (this.bugman_tableData_all[i]){
                    bug.push(this.bugman_tableData_all[i])
                }
            }
            this.bugman_tableData = bug
        },
        bug_mem_input_change(){
            var lis = []
            var data = this.bugman_tableData_all
            for (var item in data){
                if (data[item]["member"].indexOf(this.bug_mem_input) != -1 || data[item]["title"].indexOf(this.bug_mem_input) != -1) {
                    lis.push(data[item])
                }
            }
            this.bugman_tableData_all = lis
            this.bug_info(this.currentPage1)
            this.bug_mem_total = lis.length
            // this.bugman_tableData = lis
            if(this.bug_mem_input == ""){
                this.get_table()
            }
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`)
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`)
            this.currentPage1 = val
            this.bug_info(this.currentPage1)
        },
        today_bug_echars(){
            var chartDom_t= echarts.getInstanceByDom(document.getElementById("Bug_today"))
            if (chartDom_t == null) { // 如果不存在，就进行初始化
                chartDom_t = echarts.init(document.getElementById("Bug_today"));
                }
            chartDom_t.setOption(this.queryinfo.bug_day_chart,true);
        },
        ech3(data){
            var chartDom3 = echarts.getInstanceByDom(document.getElementById("issueing"))
            if (chartDom3 == null) { // 如果不存在，就进行初始化
                            chartDom3 = echarts.init(document.getElementById("issueing"));
                        }
            this.echartsing_options.series[0].data = data
            chartDom3.setOption(this.echartsing_options);
        },
        Legacybug(){
            var chartDom2= echarts.getInstanceByDom(document.getElementById("Legacybug"))
            if (chartDom2 == null) { // 如果不存在，就进行初始化
                chartDom2 = echarts.init(document.getElementById("Legacybug"));
                }
            chartDom2.setOption(this.queryinfo.bug_day_chart,true);
        },
        buglevel(){
            var chartDom2= echarts.getInstanceByDom(document.getElementById("Legacybug"))
            if (chartDom2 == null) { // 如果不存在，就进行初始化
                chartDom2 = echarts.init(document.getElementById("Legacybug"));
                }
            chartDom2.setOption(this.queryinfo.bug_day_level_chart,true);
        },
        buginfo(){
            var chartDom2= echarts.getInstanceByDom(document.getElementById("Legacybug"))
            if (chartDom2 == null) { // 如果不存在，就进行初始化
                chartDom2 = echarts.init(document.getElementById("Legacybug"));
                }
            chartDom2.setOption(this.queryinfo.bug_day_yl_chart,true);
        },
    },
    watch:{
        $route:{
        handler(){
            if (this.$route.params.type != "issue" && this.$route.path.split("/")[2] == "query_info"){
                console.log("change2");
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
.card_1{
    height: 150px;
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
.cardbo{
    margin-top: 10px;
    display: flex;
}
.cardboh5{
    margin:0px 10px 0px 5px;
    display: flex;
    font-weight: normal;
}
.cardboh52{
    color:#666666;
    font-weight: normal;
    margin:0px;
    font-size: 18px;
}
</style>