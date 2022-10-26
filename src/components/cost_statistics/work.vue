<template>
    <div class="master">
    <div style="padding-left:10px">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- <el-breadcrumb-item :to="{ path: '/cost_statistics' }">成本统计</el-breadcrumb-item> -->
        <el-breadcrumb-item>配置列表</el-breadcrumb-item>
        <el-breadcrumb-item>个人工作占比</el-breadcrumb-item>
        <!-- <el-breadcrumb-item v-if="$route.params.id =='member'">人员</el-breadcrumb-item>
        <el-breadcrumb-item v-if="$route.params.id =='project'">项目</el-breadcrumb-item> -->


    </el-breadcrumb>
    </div>
    <div style="padding-left:10px">
       
        <h6 style="text-align:left;margin-top:20px;font-size:14px">分配设置</h6>
    </div>
    <div style="display:flex;justify-content:space-between;padding-left:10px">
        <div style="display:flex;margin-top:20px;min-height:50px">
            <!-- <div class="block">
                <span class="demonstration" style="margin-right:20px">请选择人员\项目</span>
                <el-cascader
                    v-model="pminfo"
                    :options="pmoptions"
                    @change="handleChange()"
                ></el-cascader>
                </div> -->
               <div>
                <span class="demonstration" style="margin-right:20px">年份</span>
                <el-select v-model="year_value"  placeholder="请选择" @change="refresh">
                    <el-option
                    v-for="item in total_options.year_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                    </el-option>
                </el-select>
               </div>
               <div style="margin-left:50px">
                <span class="demonstration" style="margin-right:20px">月份</span>
                <el-select :disabled="year_value!=''?false:true" @change="refresh" v-model="month_value" placeholder="请选择">
                    <el-option
                    v-for="item in total_options.month_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                    </el-option>
                </el-select>
               </div>
               <div style="margin-left:50px;display:flex">
                <h6 class="demonstration" style="margin-right:20px;width:50px;margin-top:10px">姓名</h6>
                <!-- <el-input v-model="total_value.name_value" placeholder="请输入"></el-input> -->
                <el-select :disabled="month_value!=''?false:true" @change="refresh" v-model="name_value" placeholder="请选择" >
                    <el-option
                    v-for="item in total_options.name_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                    </el-option>
                </el-select>
               </div>
               <!-- <div style="margin-left:50px">
                   <el-button @click="query()">查询</el-button>
               </div> -->
               <div style="margin-left:70px">
                   <el-button :disabled="name_value!=''?false:true" @click="pushData()">提交</el-button>
               </div>
               <div style="margin-left:20px">
                   <el-button :disabled="name_value!=''?false:true" @click="get_last_member()">获取上次提交数据</el-button>
               </div>
                <div style="margin-left:20px">
                   <el-button :disabled="name_value!=''?false:true" @click="get_last_month()">获取上月数据</el-button>
               </div>
               <div style="margin-left:70px">
                   <h6 v-if="this.count != 0" style="margin-top:8px">{{count}}%</h6>
               </div>
            <!-- <el-button @click="adds()" size="mini" style="padding:7px;height:30px;margin-bottom:20px" type="primary" plain ><h6 style="margin:0px;font-size:12px">添加项目</h6></el-button> -->
        </div>
        <!-- <div style="text-align:right;margin-top:15px;margin-bottom:10px">
            <el-input style="width:130px;margin-right:50px;text-align:right" v-model="input" @input="inputchange()"  placeholder="搜索项目"  prefix-icon="el-icon-search"></el-input>
        </div> -->
    </div>
    <div style="background-color:#C0C0C015;height:50px;border-bottom:1px solid #C0C0C050;border-top:1px solid #C0C0C050">
        <div style="display:flex;padding-left:10px">
            <!-- <h6 style="margin:0px;font-size:13px;margin-top:18px">项目分类</h6> -->
            <!-- <el-button size="small" :class="{active:shows=1}" style="padding:5px;margin-left:30px;margin-top:9px;border:none">所有</el-button> -->
        </div>
    </div>
    <div style="display:flex">
        <el-table  :row-style="row" :data="table_list"  border>
                    <el-table-column label="id" min-width="20">
                        <template v-slot="scope">
                            <h6 class="tablegroup">{{scope.row.id}}</h6>
                        </template>
                    </el-table-column>
                    <!-- <el-table-column  label="姓名" min-width="25">
                        <template v-slot="scope">
                            <h6 class="tablegroup">{{scope.row.name}}</h6>
                        </template>
                    </el-table-column> -->
                    <el-table-column  label="项目组别" min-width="20">
                        <template v-slot="scope">
                            <h6 class="tablegroup">{{scope.row.group}}</h6>
                        </template>
                    </el-table-column>
                    <el-table-column  label="项目内容" min-width="20">
                        <template v-slot="scope">
                            <h6 class="tablegroup">{{scope.row.content}}</h6>
                        </template>
                    </el-table-column>
                    <el-table-column  label="占比" min-width="20">
                        <template v-slot="scope">
                            <h6 class="tablegroup" style="font-size:18px;"><el-input :disabled="name_value!=''?false:true" @change="get_proportion()" oninput="value=value.replace(/[^\d]/g,'')" min="0" max="100"  type="number" v-model="scope.row.proportion"  style="width:100px;margin-right:10px"></el-input>%</h6>
                        </template>
                    </el-table-column>
                    <!-- <el-table-column  label="操作" min-width="20">
                        <template v-slot="scope">
                            <el-popover
                                    placement="bottom-start"
                                
                                    :width="50"
                                    trigger="hover"
                                
                                >
                                <div><h6 style="font-size:13px;font-weight:bold;color:C0C0C015">项目操作</h6></div>
                                <div style="display:flex;flex-direction:column">
                                   
                                    <el-button @click="dele(scope.row)" size="small" style="border:none;padding:0px;width:100px;margin:0px"><h6 style="font-size:13px">移除项目</h6></el-button>
                                </div>
                                    <template #reference>
                                    <el-button style="padding:0px;border:none">
                                        <svg t="1636596983884" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2996" width="20" height="20"><path d="M512 814.545455c-39.563636 0-69.818182-30.254545-69.818182-69.818182s30.254545-69.818182 69.818182-69.818182 69.818182 30.254545 69.818182 69.818182-30.254545 69.818182-69.818182 69.818182z m0-232.727273c-39.563636 0-69.818182-30.254545-69.818182-69.818182s30.254545-69.818182 69.818182-69.818182 69.818182 30.254545 69.818182 69.818182-30.254545 69.818182-69.818182 69.818182z m0-232.727273c-39.563636 0-69.818182-30.254545-69.818182-69.818182s30.254545-69.818182 69.818182-69.818182 69.818182 30.254545 69.818182 69.818182-30.254545 69.818182-69.818182 69.818182z" fill="#C0C0C0" p-id="2997"></path></svg>
                                    </el-button>
                                    </template>
                                </el-popover>
                        
                            </template>
                    </el-table-column> -->
                    
                </el-table>
    </div>
    </div>
</template>
<script>
import {hgaxios as axios} from "../../utils/request"
import {hpaxios} from "../../utils/request"
import { ElMessage } from 'element-plus'
export default {
    setup() {
        
    },
    data(){
        return{
            // pminfo:"",
            count:0,
            total_options:{
                year_options:[
                    {
                        value:"2021",
                        label:"2021年"
                    },
                     {
                        value:"2022",
                        label:"2022年"
                    },
                ],
                month_options:[
                    {value:"01",label:"1月"},{value:"02",label:"2月"},{value:"03",label:"3月"},{value:"04",label:"4月"},{value:"05",label:"5月"},{value:"06",label:"6月"},{value:"07",label:"7月"},{value:"08",label:"8月"},{value:"09",label:"9月"},{value:"10",label:"10月"},{value:"11",label:"11月"},{value:"12",label:"12月"}
                ],
                name_options:[
                    
                ]
            },
            year_value:"",
            month_value:"",
            name_value:"",
            table_list:[],
            all:{},
            tableData1:[],
            tableData2:[],
            postinfo:{},
            project_dcit:{
                old:{},
                new:{}
            },
            code:"",
            prop_status:0
            }
    },
    methods:{

        row({row}){
            // var lis = []
            if (row.proportion>0){
                // lis.push(
                //     row.group
                // )
                return "background-color:#ebf9ff80 !important"
            }
            // this.postinfo=lis
            // console.log(this.postinfo);
            
        },
        pla(scope){
            var nums = scope.proportion + ""
            return nums
        },
        updateData(info){
            for(var index in this.table_list){
                // console.log(this.table_list[index]);
                var group_name = this.table_list[index]["group"]
                var project_name = this.table_list[index]["content"]
                if (info[group_name] != undefined){
                    if (info[group_name][project_name] == undefined){
                        this.table_list[index]["proportion"] = 0
                    }
                    else{
                        this.table_list[index]["proportion"] = info[group_name][project_name]
                    }
                }
                else{
                    this.table_list[index]["proportion"] = 0
                }
                var count = 0
                for(var i in info){
                    for(var nums in info[i]){
                        count = count + info[i][nums]
                    }
                }
                this.count=count
                // for(var group_name in info){
                //     for(var project_name in info[group_name]){
                //         if(this.table_list[index]["group"] == group_name && this.table_list[index]["content"] == project_name){
                //             this.table_list[index]["proportion"] = info[group_name][project_name]
                //         }
                //         else{
                //             this.table_list[index]["proportion"] = 0
                //         }
                //     }
                // }
            }
        },
        pushData(){
            // console.log(this.table_list);
           
            var result = this.checkSum()
            if(result == true){
                var params = {}
                for(var index in this.table_list){
                    if(this.table_list[index]["proportion"] != 0){
                        if(params[this.table_list[index]["group"]] == undefined){
                            params[this.table_list[index]["group"]] = {}
                        }
                        if(params[this.table_list[index]["group"]][this.table_list[index]["content"]] == undefined){
                            params[this.table_list[index]["group"]][this.table_list[index]["content"]] = 0
                            
                        }
                        params[this.table_list[index]["group"]][this.table_list[index]["content"]] = parseInt(this.table_list[index]["proportion"])
                    }
                }
                hpaxios("/api/v1/CostStatisticsData/",{
                    year:this.year_value,
                    month:this.month_value,
                    member:this.name_value,
                    cost_data:params
                    }
                )
                .then(res => {
                    this.$store.state.work_last_member = params
                    if (res.data.code == 10280){
                            ElMessage.success({
                            message: '工作占比修改成功',
                            type: 'success',
                        })
                    }
                    
                })
            }
        },
        reset(){
            for(var index in this.table_list){
                this.table_list[index]["proportion"] = 0
            }
        },
        refresh(){
            // this.table_list=[]
            if(this.year_value!= "" && this.month_value!="" && this.name_value != "")
            axios({
                url: '/api/v1/CostStatisticsData/',
                method:'get',
                }).then(res => {
                   
                    var info = res.data.data[this.year_value][this.month_value][this.name_value]
                    // console.log(info);
                    if(info != undefined){
                    this.updateData(info)
                    }
                    else{
                        this.count=0
                        this.reset()
                    }
                })
            },
        checkSum(){
            var count = 0
            for(var index in this.table_list){
                count = count + parseInt(this.table_list[index]["proportion"])
            }
            if(count != 100){
                ElMessage.warning({
                    message: '工作占比总数必须为100%',
                    type: 'warning'
                })
                axios({
                url: '/api/v1/CostStatisticsData/',
                method:'get',
                }).then(res => {
                    var info = res.data.data[this.year_value][this.month_value][this.name_value]
                    if(info != undefined){
                    this.updateData(info)
                    }
                    else{
                        this.count=0
                        this.reset()
                    }
                })
                // console.log(count);
                return false
            }
            else{
                return true
                }
            },
        get_last_member(){
            var data = this.$store.state.work_last_member
            this.updateData(data)
            
        },
        get_proportion(){
            var count = 0
            var data = this.table_list
            for (var i in data){
               if(data[i]["proportion"] != 0){
                   count = count + parseInt(data[i]["proportion"])
               }
            }
            this.count = count
        },
        get_last_month(){
            if(this.month_value == "01"){
               var month = "12"
               var year = parseInt(this.year_value) - 1           
            }
            else{
                var month = ""
                var year = parseInt(this.year_value)
                if (this.month_value <= 10){
                    month = "0" + (parseInt(this.month_value) - 1).toString()  
                }
                else{
                    month = parseInt(this.month_value) - 1    
                }
            }
            var name = this.name_value
            // console.log(month);
            // console.log(year);
            // console.log(name);
            axios({
                url: '/api/v1/CostStatisticsData/',
                method:'get',
                }).then(res => {
                    var info = res.data.data[year][month][name]
                    if(info != undefined){
                    this.updateData(info)
                    }
                    else{
                        this.count=0
                        ElMessage.warning({
                            message: '选择的人员上月并无数据',
                            type: 'warning'
                        })
                        this.reset()
                    }
                })
        }
            
        },
    created(){
             axios({
                url: '/api/v1/CostStatistics/',
                method:'get',
                params:{
                    config_type:"member",
                    }
                }).then(res => {
                    // console.log(res);
                    for(var member in res.data.data.member){
                        this.total_options.name_options.push(
                            {
                                label:member,
                                value:member
                            }
                        )
                    }
                    var count = 0
                    for (var group in res.data.data.project){
                        for(var project_index in res.data.data.project[group]){
                            count = count + 1 
                            this.table_list.push(
                                {
                                    id:count,
                                    group:group,
                                    content:res.data.data.project[group][project_index],
                                    proportion:0
                                }
                            )
                        }
                    }
                // console.log(this.table_list);
                })
    },
    mounted(){
    }
}
</script>
<style scoped>
.master{
    margin:10px;
    margin-top:0px;
    padding: 0px;
    padding-top: 10px;
    /* padding-left:10px; */
    background-color: #ffffff;
    min-height: 900px;
    width: 100%;
}
.active{
  color: #3a8ee6;
  background-color: #ecf5ff ;
  outline: 0;
}
.input{
    width:100px
}
.tablegroup{
    font-size:14px;
    margin:0px
}
/* .el-input>>>.el-input__inner{
    color:red
} */
</style>