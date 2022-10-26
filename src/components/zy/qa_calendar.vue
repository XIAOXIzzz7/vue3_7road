<template>
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

</template>
<script>

import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import interactionPlugin from '@fullcalendar/interaction'
import {hgaxios as axios} from "../../utils/request"
// import axios from "axios"
import FullCalendar from '@fullcalendar/vue3'
import htmlToPdf from '@/unit/htmlToPdf'

export default {
    name:'v1',
    data(){
        return{
            titl:"拼命加载中",
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
        slotLabelFormat: [
            // {month: "numeric"},
            {day: 'numeric'},
            {weekday: 'short'},
        ],
        dayMinWidth: 100,
        editable: true,
        selectable: true,
        aspectRatio: 2.5,
        scrollTime: '00:00',
        fixedWeekCount: false,
        initialView: 'resourceTimelineMonth',
        headerToolbar: {
        
        left: 'prev,next',
        center: 'title',
        right: ''
        },
        navLinks: false,
        resourceAreaWidth: '12.5%',
        resourceAreaHeaderContent: '项目',
        resources: [],
        events: [],
        },
        loading:true
        }
    },
    components:{
        FullCalendar
    },
    methods:{
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
        //  handleDown(){
        //         //导出PDF
        //         setTimeout(() => {
        //             htmlToPdf.downloadPDF( document.querySelector('#demo'),"项目排期甘特图");
        //         }, 2000);
                
                
        //     },
    },
     created(){
    
        axios({
            url: '/api/v1/Gantt/',
            method:'get',
            params:{
               type:"project"
                }
            }).then(res => {
              setTimeout(() => {
                  this.calendarOptions.resources = res.data.data.resources
                  this.calendarOptions.events = res.data.data.events
                  this.loading=false
              }, 700);
            })
    }
    
}
</script>
<style scoped>
.gantt{
    height: 1000px;
    background-color: #fff;
    margin: 20px;
    margin-top: 30px;
}
.element.style{
    display: flex !important;
}
.fc-event{
    color: black;
}

</style>