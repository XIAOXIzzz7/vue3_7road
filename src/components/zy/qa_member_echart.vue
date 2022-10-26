<template>
<!-- <el-button @click="memberchart()">test</el-button> -->
     <div v-loading="loading" element-loading-text="拼命加载中" style="display:flex;margin-top:100px;margin-left:20px">
        <div style="height:500px; min-height:500px;width:94%" id="memberinfo"></div>
    </div>
</template>
<script>
let mem

import * as echarts from 'echarts'
// import axios from "axios"
import {hgaxios as axios} from "../../utils/request"
// import axios from "axios"
// import {link} from "../../utils/interface"
export default {
    data(){
        return{
            data_list:[],
            member_info:{},
            loading:true
        }
    },
   watch:{
       
        $route:{
        handler(){
            this.memberchart()
            this.loading=true
        },
        immediate:true
        }
        
    },
    mounted(){
        mem = echarts.getInstanceByDom(document.getElementById("memberinfo"))
        if (mem == null) { // 如果不存在，就进行初始化
            mem = echarts.init(document.getElementById("memberinfo"))}
    },
    methods:{
        memberchart(){
        this.data_list=[]
        this.member_info=[]
        axios({
                url: '/api/v1/MemberScoreChartData/',
                method:'get',
                params:{
                    year:this.$route.params.year,
                    member:this.$route.params.name
                    }
                })
                .then(res => {
                   
                        this.member_info =res.data.data.member_info
                        this.data_list =res.data.data.date_list
              
                        console.log(this.member_info);
                    axios({
                        url: '/api/v1/Echarts/',
                        method:'get',
                        params:{
                            title:this.$route.params.name+" "+this.$route.params.year+"年度数据统计",
                            echarts_type:'line',
                            series_option:{"smooth": "True", "seriesLayoutBy": "row", "barWidth" : 60,label:{show: true,"formatter": '{c}'}},
                            series_data:this.member_info,
                            xAxis:JSON.stringify(this.data_list),
                            color:JSON.stringify(['#409EFF90', '#ff4242', '#318C80', "#51D9B5", '#A6E582'])
                            }
                        })
                        .then(res => {
                                this.loading=false
                                var dataa = res.data.data
                                mem.setOption(dataa,true) 
                                
                            })
                    
                })
        }
    }
}
</script>