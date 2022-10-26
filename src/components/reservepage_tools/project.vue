<template>
    <!-- {{$route.params.project}} -->
    <div class="rightmain">
        <div style="display:flex;">
            <h5  style="margin-left:20px;text-align:left;font-size:25px;font-weight:bold;margin-top:15px;width:240px">质量管理部项目排期</h5>
            <el-button @click="update()" text style="margin-top:15px"><svg t="1656902071729" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5215" width="30" height="30"><path d="M471 419.59a36.83 36.83 0 0 1-26.47-62.43l82.79-85.74-85.74-82.86a36.83 36.83 0 0 1 51.21-52.94l104.12 100.55a48.1 48.1 0 0 1 0.94 68.26L497.51 408.36A36.59 36.59 0 0 1 471 419.59zM545.63 289c0.14 0.07 0.22 0.22 0.29 0.29z m-0.5-36l-0.36 0.36z" fill="#409EFF" p-id="5216"></path><path d="M512 898.69c-185.79 0-336.91-151.12-336.91-336.91S326.25 224.88 512 224.88a36.83 36.83 0 0 1 0 73.65c-145.15 0-263.25 118.1-263.25 263.25S366.89 825 512 825s263.18-118.1 263.18-263.25a36.83 36.83 0 0 1 73.65 0c0.04 185.82-151.08 336.94-336.83 336.94z" fill="#409EFF" p-id="5217"></path></svg></el-button>
        </div>
        <div v-loading="loading" :element-loading-text="titl" class="gantt" >
            <FullCalendar
            class='demo-app-calendar'
            :options='calendarOptions'

            >
            </FullCalendar>
        </div>
   
    </div>
    <el-dialog
        :title="ganttdatatitle"
        v-model="dialogVisible"
        v-if="dialogVisible"
        width="50%"
    >
  <el-select v-model="page_size"   @change="optionchange()" style="float:left">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
     
    >
    </el-option>
  </el-select>



  <el-table :data="tableData" >
    <el-table-column prop="i_d" label="id" width="80"> </el-table-column>
    <el-table-column prop="name" label="任务内容" width="400"> </el-table-column>
    <el-table-column prop="begin" label="开始时间" width="180"> </el-table-column>
    <el-table-column prop="due" label="结束时间" width="180"> </el-table-column>
    <el-table-column prop="creator" label="创建人" width="80"> </el-table-column>
  </el-table>


  <div class="block">
  
    <el-pagination

      @current-change="handleCurrentChange"
      :currentPage="page"
      :page-size="page_size"
      layout="total, prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</el-dialog>
</template>
<script>


import {hgaxios as axios} from "../../utils/request"
import FullCalendar from "@fullcalendar/vue3";
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import interactionPlugin from '@fullcalendar/interaction'
import { ElMessage } from 'element-plus'
export default {
    setup() {
        
    },
    data(){
        return{
            calendarOptions: {
                buttonText: {
                    today: '今天',
                    month: '月视图',
                    prev: '上月排期',
                    next: '下月排期',
                },
                schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
                // now: this.time,
                plugins: [
                resourceTimelinePlugin,
                interactionPlugin
                ],
                locale: 'zh-cn',
                slotLabelFormat: [
                    // {month: "numeric"},
                    {day: 'numeric'},
                    {weekday: 'short'},
                ],
                dayMinWidth: 100,
                editable: true,
                selectable: true,
                
                
                aspectRatio: 1.88,
                scrollTime: '00:00',
                fixedWeekCount: false,
                initialView: 'resourceTimelineMonth',
                headerToolbar: {
                
                left: 'prev,next',
                center: 'title',
                right: ''
                },
                navLinks: false,
                resourceAreaWidth: '15%',
                resourceAreaHeaderContent: "项目",
                eventClick: this.handleEventClick, 
                resources: [],
                events: [],
                },
                loading:true,
                titl:"拼命加载中",
                ganttdatatitle:"",
                page:1,
                page_size:10,
                ganttdata:{},
                dialogVisible: false,
                options:[{
                    value:10,
                    label:'每页10条'},{
                    value:20,
                    label:'每页20条'},{
                    value:50,
                    label:'每页50条'}],
                tableData: [],
                total:0,

        }
    },
    mounted(){
        this.gantt()
    },
    methods:{
        test(){
           
        },
        update(){
            this.calendarOptions.resources=[]
            this.calendarOptions.events=[]
            this.loading=true
            this.titl="正在获取最新数据，请稍等"
            axios({
                url: '/api/v1/Gantt/',
                method:'get',
                params:{
                type:"project",
                refresh:true
                }
            }).then(res => {
            
                  this.calendarOptions.resources = res.data.data.resources
                  this.calendarOptions.events = res.data.data.events
                  
                  this.loading=false
           
              });
        },
        gantt(){
            axios({
            url: '/api/v1/Gantt/',
            method:'get',
            params:{
              type:"project"
                }
            }).then(res => {
            
                  this.calendarOptions.resources = res.data.data.resources
                  this.calendarOptions.events = res.data.data.events
                  
                  this.loading=false
           
              });
        },
        handleEventClick(clickInfo) {
            if (clickInfo.event.endStr == ""){
                this.dialogVisible=false
            }
            else{
           
                this.ganttdata = clickInfo.event
                this.ganttdatatitle = clickInfo.event._def.resourceIds["0"]
                this.checkinfo()
                
            }
         },
        checkinfo(){
        axios({
                url: '/api/v1/GanttChildIssue/',
                method:'get',
                params:{
                    project:this.ganttdatatitle,
                    page:this.page,
                    page_size:this.page_size,
                    issue_id:this.ganttdata._def.publicId
                    }
                }).then(res => {
                    
                    for (var i in res.data.data.page_data){
                        res.data.data.page_data[i]["i_d"] = Number(i)+Number(1)
                    
                        
                    }
                    
                    this.tableData = res.data.data.page_data
                    this.total = res.data.data.search_sum
                
                        if ( res.data.data.search_sum == 0){
                                ElMessage.warning({
                        message: '没有子需求',
                        type: 'warning',
                        })
                        }
                    else{
                        this.dialogVisible=true
                    }
                    
                    
                })
    },
        optionchange(){
    
            this.page=1
            this.checkinfo()
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`)
            this.page = val
            this.checkinfo()
        

         },
    },
    
    components: {
        FullCalendar
    },
  

}
</script>
<style scoped>
.rightmain{
    min-height:500px;
    width:100%;
    margin:0px 30px 30px 30px
}
.h5main{
    font-size:19px;
    text-align: left;
    margin:0px
}
.gantt{
    height: 1000px;
    background-color: #fff;
    margin-left: 20px;
    
}
</style>