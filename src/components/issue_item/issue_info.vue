<template>
<!-- <el-button @click="handleDown()">test</el-button> -->
<div class="background">
  <el-affix :offset="100" style="float: right;">
    <el-button @click="drawer = true"   style="padding:10px;margin-left:20px;z-index:999">
    <el-icon><Setting /></el-icon>
  </el-button>
  </el-affix>
<!-- <div style="position:fixed;
            top:80px;
            left:230px;">
  <el-button @click="drawer = true"   style="padding:10px;margin-left:20px;z-index:999">
    <el-icon><Setting /></el-icon>
  </el-button>
</div> -->
<div class="drawer">
  <el-drawer
  v-model="drawer"
  :direction="direction">
  <div style="display:flex;justify-content:left">
    <el-date-picker style="margin:20px"
      v-model="timevalue1"
      type="date"
      @change="time1change()"
      placeholder="开始时间">
    </el-date-picker>
    <el-date-picker style="margin:20px;margin-left:10px"
      v-model="timevalue2"
      @change="time2change()"
      placeholder="结束时间">
    </el-date-picker>
  </div>
</el-drawer>
</div>

<br>
<div class="divtitle1"  @click="ganttshow =!ganttshow">
    <h5 class="h5title">工作排期甘特图:</h5>
</div>

<div v-if="ganttshow" v-loading="loading" element-loading-text="拼命加载中" class="gantt">
    <FullCalendar
    class='demo-app-calendar'
    :options='calendarOptions'
    style="max-height: 700px;"
    >
    </FullCalendar>
</div>

  <h5 class="h5title2">{{timevalue1}}/{{timevalue2}}:需求统计</h5>
  <div style="display:flex ">
    <div style="flex: 0 0 50%;margin-left:20px;background-color: white;display: flex;flex-wrap: wrap;">
        <el-row :gutter="70" class="rowcard" style="margin-left:20px">
        <el-col :span="8">
            <el-card shadow="hover">
            <h4 class="h4card">原有需求数:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{funbase+filebase}}个</h4>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card shadow="hover">
            <h4 class="h4card">新增需求数:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{funadd+fileadd}}个</h4>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card shadow="hover">
            <h4 class="h4card">需求Delay数:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{fundelay+filedelay}}个</h4>
            </el-card>
        </el-col>
        
    </el-row >
    <el-row :gutter="70" style="margin-bottom:20px ;margin-left:20px">
      <el-col :span="8">
            <el-card shadow="hover">
            <h4 class="h4card">需求取消数:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{funcancel+filecancel}}个</h4>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card shadow="hover">
            <h4 class="h4card">需求已完成数:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{funclose+fileclose}}个</h4>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card shadow="hover">
            <h4 class="h4card">进行中的需求:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{(funbase+funadd-funcancel-funclose)+(filebase+fileadd-filecancel-fileclose)}}个</h4>
            </el-card>
        </el-col>
      </el-row >
    </div>
    <div style="flex:0 0 2%;">

    </div>
    <div style="flex: 0 0 45%;margin-right:20px;background-color: white;">
      <div  style="height:400px; min-height:400px;width:100%" id="allechars"></div>
    </div>
  </div>
<el-collapse accordion style="margin:20px">
  <el-collapse-item>
    <template #title>
      <h5 style="margin:0px;width:200px;font-family:方正粗黑宋简体;font-size:20px">文档类需求总数:{{filecount}} </h5>
    </template>
    
    <el-row :gutter="12" class="rowcard">
        <el-col :span="4">
            <el-card shadow="hover">
            <h4 class="h4card">原有需求数:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{filebase}}个</h4>
            </el-card>
        </el-col>
        <el-col :span="4">
            <el-card shadow="hover">
            <h4 class="h4card">新增需求数:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{fileadd}}个</h4>
            </el-card>
        </el-col>
        <el-col :span="4">
            <el-card shadow="hover">
            <h4 class="h4card">需求Delay数:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{filedelay}}个</h4>
            </el-card>
        </el-col>
        <el-col :span="4">
            <el-card shadow="hover">
            <h4 class="h4card">需求取消数:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{filecancel}}个</h4>
            </el-card>
        </el-col>
        <el-col :span="4">
            <el-card shadow="hover">
            <h4 class="h4card">需求已完成数:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{fileclose}}个</h4>
            </el-card>
        </el-col>
        <el-col :span="4">
            <el-card shadow="hover">
            <h4 class="h4card">进行中的需求:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{filebase+fileadd-filecancel-fileclose}}个</h4>
            </el-card>
        </el-col>
    </el-row >
  </el-collapse-item>
</el-collapse>
<el-collapse accordion style="margin:20px">
  <el-collapse-item>
    <template #title>
      <h5 style="margin:0px;width:200px;font-family:方正粗黑宋简体;font-size:20px">功能类需求总数:{{funcount}} </h5>
    </template>
    <el-row :gutter="12" class="rowcard">
        <el-col :span="4">
            <el-card shadow="hover">
            <h4 class="h4card">原有需求数:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{funbase}}个</h4>
            </el-card>
        </el-col>
        <el-col :span="4">
            <el-card shadow="hover">
            <h4 class="h4card">新增需求数:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{funadd}}个</h4>
            </el-card>
        </el-col>
        <el-col :span="4">
            <el-card shadow="hover">
            <h4 class="h4card">需求Delay数:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{fundelay}}个</h4>
            </el-card>
        </el-col>
        <el-col :span="4">
            <el-card shadow="hover">
            <h4 class="h4card">需求取消数:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{funcancel}}个</h4>
            </el-card>
        </el-col>
        <el-col :span="4">
            <el-card shadow="hover">
            <h4 class="h4card">需求已完成数:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{funclose}}个</h4>
            </el-card>
        </el-col>
        <el-col :span="4">
            <el-card shadow="hover">
            <h4 class="h4card">进行中的需求:</h4>
            <h5 class="h5card">{{timevalue1}}/{{timevalue2}}</h5>
            <h4 class="h4card">{{funbase+funadd-funcancel-funclose}}个</h4>
            </el-card>
        </el-col>
    </el-row >
  </el-collapse-item>
</el-collapse>
<h5 class="h5title2" style="margin-top:30px">{{timevalue1}}/{{timevalue2}}:数据折线图展示</h5>
<div style="margin:20px;background-color:white">
  <el-button @click="echartsline()" style="font-family:'方正粗黑宋简体';font-size:20px;text-align:left;margin:15px">新增需求数据（时间轴）</el-button>
  <el-button @click="echartsline2()" style="font-family:'方正粗黑宋简体';font-size:20px;text-align:left;margin:15px">新增需求数据（人均）</el-button>
  <div style="display:flex">
    <div style="height:400px; min-height:400px;width:100%" id="mastercharts"></div>
  </div>
</div>

<div class="divtitle2">
    <h5 class="h5title">{{timevalue1}}/{{timevalue2}}:需求数量TOP5项目</h5>
</div>

<div style="z-index:-10 ;">
<!-- <div style="width:10px">
<div @click="top5chart();top5showbutton()">
  <el-button @click="top5show =! top5show;notclosedtop5 =!notclosedtop5" style="margin:10px;margin-left:0px">
    Top5/未关闭Top5
  </el-button></div>
</div> -->
<el-row :gutter="20" style="margin:10px">
<el-col  :span="8" style="margin-right:50px">
 <el-card style="height:508.622px">
  <template #header>
    <h5 style="width:120px">TOP5需求</h5>
  </template>
    <el-table :data="top5project" style="width: 100%">
    <el-table-column prop="count" label="#" width="50"> </el-table-column>
    <el-table-column prop="project" label="项目名称" width="180"> </el-table-column>
    <el-table-column prop="number" label="数量" width="70"> </el-table-column>
    <el-table-column label="Top5操作" width="100">   
      <template #default="scope">
      <el-button  @click="dialogTableVisible = true;top5button(scope)">详情</el-button>
      </template>
  </el-table-column>
  </el-table>
 </el-card>
</el-col>
<!-- <el-col v-if="top5show" :span="17">
 <el-card >
  <template #header>
    <h5 style="width:120px">趋势折线图</h5>
  </template>
    <div>
        <div style="height:400px; min-height:400px;width:100%" id="top5"></div>
    </div>
 </el-card>
</el-col> -->
<el-col  :span="8">
 <el-card style="height:508.622px">
  <template #header>
    <h5 style="width:120px">未关闭Top5</h5>
  </template>
    <el-table :data="notclosedtop5project" style="width: 100%">
    <el-table-column prop="count" label="#" width="50"> </el-table-column>
    <el-table-column prop="project" label="项目名称" width="180"> </el-table-column>
    <el-table-column prop="number" label="数量" width="70"> </el-table-column>
    <el-table-column label="未关闭Top5操作" width="150">   
      <template #default="scope">
      <el-button  @click="dialogTableVisible = true;top5button(scope)">详情</el-button>
      </template>
  </el-table-column>
  </el-table>
 </el-card>
</el-col>
<!-- <el-col v-if="notclosedtop5" :span="17">
 <el-card >
  <template #header>
    <h5 style="width:120px">趋势折线图</h5>
  </template>
    <div>
        <div style="height:400px; min-height:400px;width:100%" id="top5"></div>
    </div>
 </el-card>
</el-col> -->
</el-row>
</div>
<el-dialog
title="需求详情界面"
v-model="dialogTableVisible"
width="70%"

>
<div>
    <el-select
        v-model="page_size"
        @change="changecard()"
        style="float: left;margin:30px">
        <el-option
            v-for="item in page_size_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
    </el-select>
    <el-input
        placeholder="请输入"
        prefix-icon="el-icon-search"
        v-model="input"
        @input="searchh"
        style="max-width:300px;float: right;margin:30px">
    </el-input>
</div>
<el-table v-loading="loading22" :data="tableData" style="width: 100%">
        <el-table-column
            prop="table_id"
            label="#"
            width="55">
        </el-table-column>
        <el-table-column
            prop="issue_id"
            label="ID"
            sortable
            width="80">
        </el-table-column>
        <el-table-column
            prop="name"
            label="标题"
            width="400">
        </el-table-column>
        <el-table-column
            label="优先级">
            <template v-slot="scope">
                <span v-if="scope.row.priority_name">{{scope.row.priority_name}}</span>
                <span v-if="!(scope.row.priority_name)" >--</span>
            </template>
        </el-table-column>
        <el-table-column
            sortable
            prop="creator"
            label="创建人"
            width="100">
        </el-table-column>
        <el-table-column
            prop="created"
            label="开始时间"
            sortable
            width="100">    
        </el-table-column>
       <el-table-column
          prop="modified"
          label="最后修改时间"
          width="120">
          <template v-slot="scope">
              <span v-if="scope.row.modified">{{scope.row.modified}}</span>
              <span v-if="!(scope.row.modified)" >-- -- -- --</span>
          </template>
      </el-table-column>
        <el-table-column
            label="状态"
            width="150">
            <template v-slot="scope">
                <button  :class="(scope.row.status_name=='新')?'new':(scope.row.status_name=='已关闭')?'closed':'reselve'">{{scope.row.status_name}}</button>
            </template>
        </el-table-column>
        <el-table-column
            label="详情">
            <template v-slot="scope">
            <button class="reselve"><a  :href="scope.row.url" style="color: white" target="_blank">详情</a></button>
            </template>
        </el-table-column>
    </el-table>
    <div class="block">
        <span class="demonstration">数据来自{{timevalue1}}至{{timevalue2}}合计{{bugdetails}}条数据</span>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="page_size"
        layout=" prev, pager, next, jumper"
        :total="total"
        background>
    </el-pagination>
    </div>
</el-dialog>
<div class="divtitle2">
    <h5 class="h5title">{{timevalue1}}/{{timevalue2}}:需求数量图
      <span style="margin-left: 20px;">
      <el-button-group class="ml-4">
      <el-button :disabled="status_button_0" @click="status_button_change(0)">在职</el-button>
      <el-button :disabled="status_button_1" @click="status_button_change(1)">全部</el-button>
      <el-button :disabled="status_button_2" @click="status_button_change(2)">离职</el-button>
    </el-button-group>
    </span>
    </h5>
    
   
</div>
<div style="display:flex"> 
    <div style="width:100%;height:400px; min-height:400px;margin:20px;margin-top:20px;background-color:white;" id="issue_table"></div>
</div>
</div>
<el-dialog  v-model="issue_table_info" title="成员名下需求详情">
    <el-table  :data="issue_tableData">
      <el-table-column property="id" label="id" min-width="20" />
      <el-table-column property="name" label="需求名" min-width="90" />
      <el-table-column property="member" label="姓名" min-width="30" />
      <el-table-column property="begin" label="开始时间" min-width="30"/>
      <el-table-column property="due" label="结束时间" min-width="30"/>
      <el-table-column property="status" label="状态" min-width="30"/>
      <el-table-column
            label="详情"
            min-width="20">
            <template v-slot="scope">
            <button class="reselve"><a  :href="scope.row.url" style="color: white" target="_blank">详情</a></button>
            </template>
        </el-table-column>

    </el-table>
  </el-dialog>
</template>
<script>
import moment from "moment"
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import interactionPlugin from '@fullcalendar/interaction'
import {hgaxios as axios} from "../../utils/request"
import {hpaxios} from "../../utils/request"
// import axios from "axios"
import FullCalendar from '@fullcalendar/vue3'
import * as echarts from 'echarts'
// import htmlToPdf from '@/unit/htmlToPdf'
let myChart
let leChart

export default {
  name:'issue_demand',
  data(){
     return{
      // tabPosition: 'left',
      status_button:"全部",
      status_button_map:["在职","全部","离职"],
      status_button_0:false,
      status_button_1:true,
      status_button_2:false,
      echarsinfo:[],
      issue_tableData:[],
      issue_table_info:false,
      loading22:false,
      timevalue1:"",
      timevalue2:"",
      demandnumber:"",
      demand:"",
      adddemand:"",
      delaydemand:"",
      canceldemand:"",
      completedemand:"",
      top5show:true,
      notclosedtop5:false,
      page:1,
      page_size:10,
      input:"",
      tableData:[],
      total:"",
      show:true,
      weekcount:"",
      testcount:1,
      filedelay:"",
      fileclose:"",
      filecancel:"",
      fileadd:"",
      filebase:"",
      fundelay:"",
      funclose:"",
      funcancel:"",
      funadd:"",
      funbase:"",
      testgannt:"3",
      cache:"",
      loading:true,
      dialogTableVisible: false,
      ganttshow:true,
      top5project:[],
      notclosedtop5project:[],
      calendarOptions: {
        buttonText: {
            today: '今天',
            month: '月视图',
            prev: '上月排期',
            next: '下月排期',
        },
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        now: this.timevalue1,
        plugins: [
        resourceTimelinePlugin,
        interactionPlugin
        ],
        locale: 'zh-cn',
        slotEventOverlap: false,
        slotLabelFormat: [
            // {month: "numeric"},
            {day: 'numeric'},
            {weekday: 'short'},
        ],
        dayMinWidth: 100,
        editable: true,
        selectable: true,
        aspectRatio: 3,
        scrollTime: '00:00',
        fixedWeekCount: false,
        initialView: 'resourceTimelineMonth',
        headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: ''
        },
        navLinks: false,
        resourceAreaWidth: '8%',
        resourceAreaHeaderContent: '成员',
        resources: [],
        events: [],
        },
        drawer: false,
        direction: 'ltr',
        search:"",
        bugdetails:"",
        top5cache:"",
        option :{},
        option2 :{},
        echartsdata:[],
        echartsdatatime:"",
        echartsdata2:[],
        echartsdatatime2:"",
        currentPage:1, //默认的页数
        page_size_options:[{
            value:10,
            label:'每页10条'},{
            value:20,
            label:'每页20条'},{
            value:50,
            label:'每页50条'},{
            value:100,
            label:'每页100条'}],
          all_options:{
              title: {
                text: '需求统计饼图',
                subtext: '',
                left: 'center',
                top:"20px"
              },
              tooltip: {
                trigger: 'item'
              },
              legend: {
                orient: 'vertical',
                left: 'left',
                top:"20px"
              },
              
              series: [
                {
                  name: 'Access From',
                  type: 'pie',
                  radius: '50%',
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
            }
    }
},
    components: {
        FullCalendar
    },
    computed:{
      filecount:{
        get(){
          return this.filebase+this.fileadd
        }
      },
      funcount:{
        get(){
          return this.funbase+this.funadd
        }
      }
    },
    mounted(){
         axios({
            url: '/api/v1/Gantt/',
            method:'get',
            params:{
              type:"member"
                }
            }).then(res => {
             
                  this.calendarOptions.resources = res.data.data.resources
                  this.calendarOptions.events = res.data.data.events
                  this.loading=false
           
                 
              })
       myChart = echarts.getInstanceByDom(document.getElementById("mastercharts"))
                  if (myChart == null) { // 如果不存在，就进行初始化
                            myChart = echarts.init(document.getElementById("mastercharts"));
                          }
         leChart = echarts.getInstanceByDom(document.getElementById("mastercharts"))
                  if (leChart == null) { // 如果不存在，就进行初始化
                            leChart = echarts.init(document.getElementById("mastercharts"));
                          }
        this.echartsline()
        // this.timechange()
         setTimeout(() => {
          this.allecharschange()
         }, 500);
    },
    
    methods:{
      status_button_change(val){
        var status = this.status_button_map[val]
        this.status_button=status
        this.issue_echars(status)
        if (status=="在职"){
          this.status_button_0 = true
          this.status_button_1 = false
          this.status_button_2 = false
        }
        else if (status=="全部"){
          this.status_button_0 = false
          this.status_button_1 = true
          this.status_button_2 = false
        }
        else if(status =="离职"){
          this.status_button_0 = false
          this.status_button_1 = false
          this.status_button_2 = true
        }

        
      },
      allecharschange(){
            var chart = echarts.getInstanceByDom(document.getElementById("allechars"))
            if (chart == null) { // 如果不存在，就进行初始化
                chart = echarts.init(document.getElementById("allechars"));
            }
            var lis = []
            // var name = ["原有需求数", "新增需求数", "需求Delay数", "需求取消数", "需求已完成数", "进行中的需求"]
            // va value =[]
            // for
            lis.push(
              {
                value:this.funbase+this.filebase,name:"原有需求数"
              }
            )
            lis.push(
              {
                value:this.funadd+this.fileadd,name:"新增需求数"
              }
            )
            lis.push(
              {
                value:this.fundelay+this.filedelay,name:"需求Delay数"
              }
            )
            lis.push(
              {
                value:this.funcancel+this.filecancel,name:"需求取消数"
              }
            )
            lis.push(
              {
                value:this.funclose+this.fileclose,name:"需求已完成数"
              }
            )
            lis.push(
              {
                value:this.funbase+this.funadd-this.funcancel-this.funclose+
                this.filebase+this.fileadd-this.filecancel-this.fileclose,name:"进行中的需求"
              }
            )
            
            console.log(lis,"111");
            this.all_options.series[0].data=lis
            console.log();
            chart.setOption(this.all_options,true) 
      },
      handleDown(){
                //导出PDF
                setTimeout(() => {
                    htmlToPdf.downloadPDF( document.querySelector('#demo'),"项目排期甘特图");
                }, 2000);
                
                
            },
      searchh(){
        this.page=1
        this.currentPage=1
        var statusdict=[]
          if(this.cache.column.label=="Top5操作"){
            statusdict.push('-all-','-空-','已关闭','规划中','待测试','核对需求+测试','集成测试','提审测试','灰度服已完成','线上测试','已完成','实际完成时间','需求取消','待完成','完成中','提交审核','审核未通过','可提交')
          }
          else{
            statusdict.push('-all-','-空-','规划中','待测试','核对需求+测试','集成测试','提审测试','灰度服已完成','线上测试','已完成','实际完成时间','需求取消','待完成','完成中','提交审核','审核未通过','可提交')
          }
              hpaxios("/api/v1/DataTable/",{type:"issue",start:this.timevalue1,end:this.timevalue2,projects:["七道测试业务"],category:this.cache.row.project,iteration:"所有迭代",page:this.page,page_size:this.page_size,search:this.input,data_type:"fx",status:statusdict, fields:["id","name","priority","creator","created","workspace_id","status","issue_id","modified","url"]})
                  .then(res => {
                          // this.bugnumberrank=row['rank']
                          this.tableData=res.data.data.page_data
                          // this.total=res.data.data.search_sum
                          this.total=res.data.data.search_sum 
                        console.log(res);
                  })
      },
      time1change(){
        let starttime = moment(this.timevalue1,"yyyy-MM-DD").format().split('T')[0]
        let endtime = moment(this.timevalue2,"yyyy-MM-DD").format().split('T')[0]
        this.timevalue1 = starttime
        this.timevalue2 = endtime
        this.timechange()
        this.alltop5()
        this.closedtop5()
        this.echartsline()
        this.echartsline2()
        this.issue_echars(this.status_button)
        this.allecharschange()

      },
      time2change(){
        let starttime = moment(this.timevalue1,"yyyy-MM-DD").format().split('T')[0]
        let endtime = moment(this.timevalue2,"yyyy-MM-DD").format().split('T')[0]
        this.timevalue1 = starttime
        this.timevalue2 = endtime
        this.timechange()
        this.alltop5()
        this.closedtop5()
        this.echartsline()
        this.echartsline2()
        this.issue_echars(this.status_button)
        this.allecharschange()

      },
      // top5chart(){
      //   myChart = echarts.getInstanceByDom(document.getElementById("top5"))
      //     if (myChart == null) { // 如果不存在，就进行初始化
      //                     myChart = echarts.init(document.getElementById("top5"));
      //                 }
      //     myChart.setOption(this.option);
      // },
      addedissue(i){
        axios({
            url: '/api/v1/AddedIssue/',
            method:'get',
            params:{
               project:"七道测试业务",
               issue_type:i,
               start:this.timevalue1,
               end:this.timevalue2
                }
            }).then(res => {
              this.echartsdata.push(res.data.data.added_data)
            })
      },
      issue_member(dic,name){
       console.log(name);
       console.log(dic);
       var chartDom1= echarts.getInstanceByDom(document.getElementById("issue_table"))
       if (chartDom1 == null) { // 如果不存在，就进行初始化
       chartDom1 = echarts.init(document.getElementById("issue_table"));
        chartDom1.on('click',(params)=>{
          console.log(params);
          this.issue_table_info=true
          var lis = []
          for(var i in this.echarsinfo){
           
            if(params.name==this.echarsinfo[i][0]){
              lis = this.echarsinfo[i][2]
            }
          }
          var data1 = []
          var data2 = []
          for(var i in lis){
            if(lis[i].status !="已关闭" && lis[i].status !="需求取消"){
              data1.push(lis[i])
            }
            else{
              data2.push(lis[i])
            }
          }
          var data3 =data1.concat(data2)
          this.issue_tableData=data3
            })
       }
       
       axios({
        url: '/api/v1/Echarts/',
        method:'get',
        params:{
        title:"成员名下需求数量",
        echarts_type:'bar',
        series_option:{"smooth": "True", "seriesLayoutBy": "row","barWidth" : 40,"barGap":'50%',"barCategoryGap":'10%',"label":{"show": true},"barMinHeight": 10,},
        series_data:dic,
        xAxis:JSON.stringify(name),
        yAxis:"个",
        color:JSON.stringify(['#409EFF90', '#F2CF61', '#318C80', "#51D9B5", '#A6E582'])
        }
        })
        .then(res => {
        console.log(res.data.data,"111");
        chartDom1.setOption(res.data.data,true);
       })
        },
      addedIssueMember(){
        axios({
            url: '/api/v1/AddedIssueMember/',
            method:'get',
            params:{
               project:"七道测试业务",
               start:this.timevalue1,
               end:this.timevalue2
                }
            }).then(res => {
              this.echartsdata2.push(res.data.data.added_data)
              this.echartsdatatime2=res.data.data.date_list
            })
      },
      addedissuetime(){
        axios({
            url: '/api/v1/AddedIssue/',
            method:'get',
            params:{
               project:"七道测试业务",
               issue_type:'总计',
               start:this.timevalue1,
               end:this.timevalue2
                }
            }).then(res => {
              this.echartsdatatime=res.data.data.date_list
              // console.log("sssssssssssssssssssss",this.echartsdatatime);
            })
      },
      echartsline(){
         myChart = echarts.getInstanceByDom(document.getElementById("mastercharts"))
                  if (myChart == null) { // 如果不存在，就进行初始化
                            myChart = echarts.init(document.getElementById("mastercharts"));
                          }
        this.addedissue('合计')
        this.addedissue('文档需求')
        this.addedissue('游戏版本测试需求')
        this.addedissuetime()   
        setTimeout(() => {  
        var dic ={}
        for (var i in this.echartsdata){
        for (var o in this.echartsdata[i])
            dic[o] = this.echartsdata[i][o]
      }
        axios({
              url: '/api/v1/Echarts/',
              method:'get',
              params:{
                  title:"时间轴",
                  echarts_type:'line',
                  series_option:{"smooth": "True", "seriesLayoutBy": "row"},
                  series_data:dic,
                  xAxis:JSON.stringify(this.echartsdatatime),
                  yAxis:"%"
                  },
              }).then(res => {
                  
                  this.option=res.data.data 
               
                  // myChart = echarts.getInstanceByDom(document.getElementById("mastercharts"))
                  // if (myChart == null) { // 如果不存在，就进行初始化
                  //           myChart = echarts.init(document.getElementById("mastercharts"));
                  //         }
                  myChart.setOption(this.option,true);         
              })
        console.log(dic);
     }, 1000);
      },
      echartsline2(){
         leChart = echarts.getInstanceByDom(document.getElementById("mastercharts"))
                  if (leChart == null) { // 如果不存在，就进行初始化
                            leChart = echarts.init(document.getElementById("mastercharts"));
                          }
        this.addedIssueMember()
        setTimeout(() => {  
        var dic ={}
        for (var i in this.echartsdata2){
        console.log("ooooooooooo",this.echartsdata2[i]);
        for (var o in this.echartsdata2[i])
            dic[o] = this.echartsdata2[i][o]
      }
        axios({
              url: '/api/v1/Echarts/',
              method:'get',
              params:{
                  title:"人均",
                  echarts_type:'line',
                  series_option:{"smooth": "True", "seriesLayoutBy": "row"},
                  series_data:dic,
                  xAxis:JSON.stringify(this.echartsdatatime2),
                  yAxis:"个"
                  },
              }).then(res => {
                  // console.log(res.data.data);
                  this.option2=res.data.data    
                  // leChart = echarts.getInstanceByDom(document.getElementById("mastercharts"))
                  // if (leChart == null) { // 如果不存在，就进行初始化
                  //           leChart = echarts.init(document.getElementById("mastercharts"));
                  //         }
                  leChart.setOption(this.option2,true);
              })
        console.log(dic);
     }, 400);
      },
      
      changecard(){
          this.page=1
          this.currentPage=1
          var statusdict=[]
          if(this.cache.column.label=="Top5操作"){
            statusdict.push('-all-','-空-','已关闭','规划中','待测试','核对需求+测试','集成测试','提审测试','灰度服已完成','线上测试','已完成','实际完成时间','需求取消','待完成','完成中','提交审核','审核未通过','可提交')
          }
          else{
            statusdict.push('-all-','-空-','规划中','待测试','核对需求+测试','集成测试','提审测试','灰度服已完成','线上测试','已完成','实际完成时间','需求取消','待完成','完成中','提交审核','审核未通过','可提交')
          }
              hpaxios("/api/v1/DataTable/",{type:"issue",start:this.timevalue1,end:this.timevalue2,projects:["七道测试业务"],category:this.cache.row.project,iteration:"所有迭代",page:this.page,page_size:this.page_size,search:this.input,data_type:"fx",status:statusdict, fields:["id","name","priority","creator","created","workspace_id","status","issue_id","modified","url"]})
                  .then(res => {
                          // this.bugnumberrank=row['rank']
                          this.tableData=res.data.data.page_data
                          // this.total=res.data.data.search_sum
                          this.total=res.data.data.search_sum 
                        console.log(res);
                  })
      },
      alltop5(){
        axios({
            url: '/api/v1/IssueCount/',
            method:'get',
            params:{
                project:"七道测试业务",
                start:this.timevalue1,
                end:this.timevalue2,
                data_type: "fx",
                status:"['-all-','-空-','已关闭','规划中','待测试','核对需求+测试','集成测试','提审测试','灰度服已完成','线上测试','已完成','实际完成时间','需求取消','待完成','完成中',提交审核','审核未通过','可提交']"
                }
                
            }).then(res => {
                var dic=[]             
                for (var i=0;i<5;i++){
                  for (var o in res.data.data[i]){
                    dic.push({"count":i+1,"project":o,"number":res.data.data[i][o]})
                  }
                }
                this.top5project=dic
            })
      },
      closedtop5(){
        axios({
            url: '/api/v1/IssueCount/',
            method:'get',
            params:{
                project:"七道测试业务",
                start:this.timevalue1,
                end:this.timevalue2,
                data_type: "fx",
                status:"['-all-','-空-','规划中','待测试','核对需求+测试','集成测试','提审测试','灰度服已完成','线上测试','已完成','实际完成时间','需求取消','待完成','完成中',提交审核','审核未通过','可提交']"
                }
                
            }).then(res => {
                var dic=[]             
                for (var i=0;i<5;i++){
                  for (var o in res.data.data[i]){
                    dic.push({"count":i+1,"project":o,"number":res.data.data[i][o]})
                  }
                }
                this.notclosedtop5project=dic
            })
      },
      top5showbutton(){
        this.alltop5()
        this.closedtop5()
      },
      
      top5button(row){
        this.tableData=[]
        this.loading22=true
        var statusdict=[]
        if(row.column.label=="Top5操作"){
          statusdict.push('-all-','-空-','已关闭','规划中','待测试','核对需求+测试','集成测试','提审测试','灰度服已完成','线上测试','已完成','实际完成时间','需求取消','待完成','完成中','提交审核','审核未通过','可提交')
        }
        else{
          statusdict.push('-all-','-空-','规划中','待测试','核对需求+测试','集成测试','提审测试','灰度服已完成','线上测试','已完成','实际完成时间','需求取消','待完成','完成中','提交审核','审核未通过','可提交')
        }
            hpaxios("/api/v1/DataTable/",{type:"issue",start:this.timevalue1,end:this.timevalue2,projects:["七道测试业务"],category:row.row.project,iteration:"所有迭代",page:this.page,page_size:this.page_size,search:this.input,data_type:"fx",status:statusdict, fields:["id","name","priority","creator","created","workspace_id","status","issue_id","modified","url"]})
                .then(res => {
                        // this.bugnumberrank=row['rank']
                        this.tableData=res.data.data.page_data
                        this.loading22=false
                        // this.total=res.data.data.search_sum
                        this.total=res.data.data.search_sum 
                        this.bugdetails=res.data.data.search_sum 
                })
        this.cache=row
        },
      
      handleSizeChange(val){
            this.hanguppagesize=val
        },
      handleCurrentChange(val) {
            this.currentPage=val
            this.page=this.currentPage
            console.log(`当前页: ${val}`);
            // let project_list = [this.value]
            var statusdict=[]
          if(this.cache.column.label=="Top5操作"){
            statusdict.push('-all-','-空-','已关闭','规划中','待测试','核对需求+测试','集成测试','提审测试','灰度服已完成','线上测试','已完成','实际完成时间','需求取消','待完成','完成中','提交审核','审核未通过','可提交')
          }
          else{
            statusdict.push('-all-','-空-','规划中','待测试','核对需求+测试','集成测试','提审测试','灰度服已完成','线上测试','已完成','实际完成时间','需求取消','待完成','完成中','提交审核','审核未通过','可提交')
          }
              hpaxios("/api/v1/DataTable/",{type:"issue",start:this.timevalue1,end:this.timevalue2,projects:["七道测试业务"],category:this.cache.row.project,iteration:"所有迭代",page:this.page,page_size:this.page_size,search:this.input,data_type:"fx",status:statusdict, fields:["id","name","priority","creator","created","workspace_id","status","issue_id","modified","url"]})
                  .then(res => {
                          // this.bugnumberrank=row['rank']
                          this.tableData=res.data.data.page_data
                          // this.total=res.data.data.search_sum
                          this.total=res.data.data.search_sum 
                  })
                },
      issue_echars(status){
        axios({url: '/api/v1/IssueQuery/',method:'get',params:{
            data_type:"fx",
            start:this.timevalue1,
            end:this.timevalue2,
            member_status:status,
            project:"七道测试业务",
             member_sort:"true"
            }}).then(res =>{
            var dic = {}
            var lis_data = []
            var lis_data_name = []
             var lis = res.data.data
             for (var i in lis){
            lis_data.push(lis[i][1])
             lis_data_name.push(lis[i][0])
             }
            
            dic["需求数量"] = lis_data
            this.echarsinfo=res.data.data
            this.issue_member(dic,lis_data_name)
            })
      },
      timechange(){
        axios({url: '/api/v1/IssueQuery/',method:'get',params:{
                  data_type:"fx",
                  start:this.timevalue1,
                  end:this.timevalue2,
                  project:"七道测试业务",
                  issue_type:"文档需求",
                  query_dict:{"需求规划":"原有需求"}}})
              .then(res => {
                
                this.filebase=res.data.data})
        axios({url: '/api/v1/IssueQuery/',method:'get',params:{
                    data_type:"fx",
                    start:this.timevalue1,
                    end:this.timevalue2,
                    project:"七道测试业务",
                    issue_type:"文档需求",
                    query_dict:{"需求规划":"新增需求"}}})
                .then(res => {
                  this.fileadd=res.data.data})
        axios({url: '/api/v1/IssueQuery/',method:'get',params:{
                    data_type:"fx",
                    start:this.timevalue1,
                    end:this.timevalue2,
                    project:"七道测试业务",
                    issue_type:"文档需求",
                    query_dict:{"delay":"true"}}})
                .then(res => {
                  this.filedelay=res.data.data})
        axios({url: '/api/v1/IssueQuery/',method:'get',params:{
                    data_type:"fx",
                    start:this.timevalue1,
                    end:this.timevalue2,
                    project:"七道测试业务",
                    issue_type:"文档需求",
                    query_dict:{"status_name":"需求取消"}}})
                .then(res => {
                  this.filecancel=res.data.data})
        axios({url: '/api/v1/IssueQuery/',method:'get',params:{
                    data_type:"fx",
                    start:this.timevalue1,
                    end:this.timevalue2,
                    project:"七道测试业务",
                    issue_type:"文档需求",
                    query_dict:{"status_name":"已关闭"}}})
                .then(res => {
                  this.fileclose=res.data.data})
        // 功能类
        axios({url: '/api/v1/IssueQuery/',method:'get',params:{
                    data_type:"fx",
                    start:this.timevalue1,
                    end:this.timevalue2,
                    project:"七道测试业务",
                    issue_type:"游戏版本测试需求",
                    query_dict:{"需求规划":"原有需求"}}})
                .then(res => {
                  this.funbase=res.data.data})
        axios({url: '/api/v1/IssueQuery/',method:'get',params:{
                    data_type:"fx",
                    start:this.timevalue1,
                    end:this.timevalue2,
                    project:"七道测试业务",
                    issue_type:"游戏版本测试需求",
                    query_dict:{"需求规划":"新增需求"}}})
                .then(res => {
                  this.funadd=res.data.data})
        axios({url: '/api/v1/IssueQuery/',method:'get',params:{
                    data_type:"fx",
                    start:this.timevalue1,
                    end:this.timevalue2,
                    project:"七道测试业务",
                    issue_type:"游戏版本测试需求",
                    query_dict:{"delay":"true"}}})
                .then(res => {
                  this.fundelay=res.data.data})
        axios({url: '/api/v1/IssueQuery/',method:'get',params:{
                    data_type:"fx",
                    start:this.timevalue1,
                    end:this.timevalue2,
                    project:"七道测试业务",
                    issue_type:"游戏版本测试需求",
                    query_dict:{"status_name":"需求取消"}}})
                .then(res => {
                  this.funcancel=res.data.data})
        axios({url: '/api/v1/IssueQuery/',method:'get',params:{
                    data_type:"fx",
                    start:this.timevalue1,
                    end:this.timevalue2,
                    project:"七道测试业务",
                    issue_type:"游戏版本测试需求",
                    query_dict:{"status_name":"已关闭"}}})
                .then(res => {
                  this.funclose=res.data.data})
      
      },        
      
  },
  // 页面进入后直接显示内容请求
    created(){
      
      var myDate = new Date();
      this.timevalue2=myDate.toLocaleDateString()
      let year1=this.timevalue2.split('/')[0]
      let month1=this.timevalue2.split('/')[1]
      if (month1<10){
        month1 = "0"+month1
      }
      let day1=this.timevalue2.split('/')[2]
      if (day1<10){
        day1 = "0"+day1
      }
      this.timevalue2 = year1+"-"+month1+"-"+day1
      this.timevalue1 = myDate.toLocaleDateString()
    
      var a = myDate.setDate(myDate.getDate() - 6)
      console.log("sdsadada",a);
      var dateArray = ""
      var dateTemp
      var flag = 1
      for (var i = 0; i < 7; i++) {
      dateTemp = (myDate.getMonth() + 1) + '-' + myDate.getDate()
      if (i == 0){
        dateArray = dateTemp
      }
      myDate.setDate(myDate.getDate() + flag)
      }
      
      let year=this.timevalue1.split('/')[0]
      let time = year+"-"+dateArray
      this.timevalue1=time
     
      // let day=this.timevalue1.split('/')[2]-6
      //  if (day<10){
      //   day = "0"+day
      // }
      // let year=this.timevalue1.split('/')[0]
      // let month=this.timevalue1.split('/')[1]
      //  if (month<10){
      //   month = "0"+month
      // }
      // let time = year+"-"+month+"-"+day
      // this.timevalue1=time
      //  axios({
      //       url: '/api/v1/Gantt/',
      //       method:'get',
      //       params:{
      //         type:"member"
      //           }
      //       }).then(res => {
      //           setTimeout(() => {
      //              this.calendarOptions.resources = res.data.data.resources
      //             this.calendarOptions.events = res.data.data.events
      //             this.loading=false
      //           }, 1700);
                 
      //         })
      // axios({
      //       url: '/api/v1/QueryInfo/',
      //       method:'get',
      //       params:{
      //           project:"Hellokitty",
      //           start:this.timevalue1,
      //           end:this.timevalue2,
      //           iteration: "last_week",
      //           }
      //       }).then(res => {
      //         setTimeout(() => {
      //             this.calendarOptions.resources = res.data.data.full_calendar_data.resources
      //             this.calendarOptions.events = res.data.data.full_calendar_data.events
      //             this.loading=false
      //         }, 700);
      //           // this.$data.page_info = res.data.data
                
      //       })
      this.timechange()

        // axios({
        //     url: '/api/v1/QueryInfo/',
        //     method:'get',
        //     params:{
        //         project:"Hellokitty",
        //         start:this.timevalue1,
        //         end:this.timevalue2,
        //         iteration: "last_week",
        //         }
        //     }).then(res => {
        //         // this.$data.page_info = res.data.data
        //         this.calendarOptions.resources = res.data.data.full_calendar_data.resources
        //         this.calendarOptions.events = res.data.data.full_calendar_data.events
        //     })
      this.alltop5()
      this.closedtop5()
      this.issue_echars(this.status_button)
     
      
      
    },

}
</script>
<style scoped>
.h5title2{
    color:#00000097;
    text-align: left;
    font-size:18px;
    padding: 15px;
    margin: 20px;
    background:#fff;
    font-weight:bolder

}
.h5title{
    color:#00000097;
    text-align: left;
    font-size:18px;
    padding: 15px;
    margin: 20px;
    background:#fff;
    font-weight:bolder

}
.rowcard{
    margin: 20px;
}
.h4card {
      font-size: 18px;
      text-align: left;
      margin:0px;
      font-weight: normal;
  }
.h5card{
    font-size: 15px;
    text-align: left;
    margin:0px;
      font-weight: normal;
}
.gantt{
    height: 700px;
    background-color: #fff;
    margin: 20px;
    margin-top: 30px;
    max-height: 700px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 350px;
  }

  .topcard>>>.el-card__header{
    padding: 0px;
    margin-top: 10px;
  }
    .topcard>>>.el-card__body{
    padding: 0px;
    margin-top: 10px;
  }
.drawer>>>.el-drawer__header{
  margin:0px;
  padding:0px
}
.my_class{
    color:black;
}
.fl{
    float: left;
    margin-right:20px;
}
.fr{
  float: left;
  margin-left: 1150px;
}
.fy{
  text-align:right;
  margin-top:30px;
}
.title{
  height:100%;
}
.new{
background-color: #00bfff;
  color: white;
  border-radius: 30px;
  border: none;
}
.closed{
  background-color: #5d6974;
  color: white;
  border-radius: 30px;
  border: none;
}
.reselve{
  background-color: #00b44e;
  color: white;
  border-radius: 30px;
  border: none;
}
.badge{
    padding:0px;
    background-color:#00b44e
}
.background{
  background-color:	#C0C0C020	;
}
</style>

