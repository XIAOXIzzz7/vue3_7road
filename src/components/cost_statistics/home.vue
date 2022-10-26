<template>
    <div class="background1">
        <div style="display:flex;margin-top:50px;margin-left:170px">
            <div>
                <span style="margin-right:20px">年份</span>
                <el-select v-model="total_value.year_value" placeholder="请选择" @change="result()">
                    <el-option
                    v-for="item in total_options.year_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <div style="margin-left:100px">
                <span style="margin-right:20px">月份</span>
                <el-select :disabled="total_value.year_value!=''?false:true" @change="result()" v-model="total_value.month_value" placeholder="请选择" >
                    <el-option
                    v-for="item in total_options.month_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
        </div>
        <div style="display:flex;margin-top:50px;margin-left:170px">
            <el-button @click="allstat(0)" :disabled="total_value.month_value!=''?false:true">综合统计</el-button>
            <el-button @click="allstat(1)" :disabled="total_value.month_value!=''?false:true">项目统计</el-button>
            <el-button @click="allstat(2)" :disabled="total_value.month_value!=''?false:true">人员
                统计</el-button>
        </div>
        <div class="main1" id="main1" style="display:flex">
            <div class="table1">
                <div style="border-top:1px solid #ebeef5;border-left:1px solid #ebeef5;border-right:1px solid #ebeef5;display:flex">
                    <h5 v-if="total_value.month_value !=''" style="flex:0 0 69.9%;border-right:1px solid #ebeef5;margin:15px 0px 15px 0px">{{total_value.year_value}}年{{total_value.month_value}}月市场部人员汇总成本费用</h5>
                    <h5 v-if="total_value.month_value ==''" style="flex:0 0 69.9%;border-right:1px solid #ebeef5;margin:15px 0px 15px 0px">市场部人员汇总成本费用</h5>
                    <h5 style=";margin:15px 0px 15px 70px">总计：￥{{number}}</h5>
                </div>
            <div style="display:flex">
                <el-table :data="all_info" stripe border  >
                    <el-table-column label="组别" min-width="23.99">
                        <template v-slot="scope">
                            <h6 class="tablegroup">{{scope.row.group_name}}</h6>
                        </template>
                    </el-table-column>
                    <el-table-column  label="汇总成本" min-width="10">
                        <template v-slot="scope">
                            <h6 class="tablecost">￥{{scope.row.cost}}</h6>
                        </template>
                    </el-table-column>
                    
                </el-table>
            </div>
            </div>
        </div>
        <div class="main2" id="main2" style="display:none">
               <div class="table2">
                <div style="border-top:1px solid #ebeef5;border-left:1px solid #ebeef5;border-right:1px solid #ebeef5;display:flex;justify-content: center">
                    <h5 style=";border-right:1px solid #ebeef5;margin:15px 0px 15px 0px">市场部各组成本项目均摊总计</h5>
                </div>
            <div style="display:flex">
                <el-table :data="project_info" stripe border  >
                    <el-table-column label="所属组别" min-width="10">
                        <template v-slot="scope">
                            <h6 class="tablegroup">{{scope.row.group_name}}</h6>
                        </template>
                    </el-table-column>
                    <el-table-column  label="项目内容" min-width="25">
                        <template v-slot="scope">
                            <h6 class="tablegroup">{{scope.row.project_name}}</h6>
                        </template>
                    </el-table-column>
                    <el-table-column  label="工作汇总占比" min-width="20">
                        <template v-slot="scope">
                            <h6 class="tablegroup">{{scope.row.percent}}%</h6>
                        </template>
                    </el-table-column>
                    <el-table-column  label="成本均摊" min-width="20">
                        <template v-slot="scope">
                            <h6 class="tablegroup">￥{{scope.row.cost}}</h6>
                        </template>
                    </el-table-column>
                    
                </el-table>
            </div>
            </div>
        </div>
        <div class="main3" id="main3" style="display:none">
               <div class="table2">
                <div style="border-top:1px solid #ebeef5;border-left:1px solid #ebeef5;border-right:1px solid #ebeef5;display:flex;justify-content: center">
                    <h5 style=";border-right:1px solid #ebeef5;margin:15px 0px 15px 0px">个人总计</h5>
                </div>
            <div style="display:flex">
                <el-table :data="mem_info" stripe border  >
                                        <el-table-column  label="姓名" min-width="20">
                        <template v-slot="scope">
                            <h6 class="tablegroup">{{scope.row.member_name}}</h6>
                        </template>
                    </el-table-column>
                    <el-table-column label="所属组别" min-width="10">
                        <template v-slot="scope">
                            <h6 class="tablegroup">{{scope.row.group_name}}</h6>
                        </template>
                    </el-table-column>
                    <el-table-column  label="项目内容" min-width="25">
                        <template v-slot="scope">
                            <h6 class="tablegroup">{{scope.row.project_name}}</h6>
                        </template>
                    </el-table-column>

                    <el-table-column  label="占比" min-width="20">
                        <template v-slot="scope">
                            <h6 class="tablegroup">{{scope.row.percent}}%</h6>
                        </template>
                    </el-table-column>
                    
                </el-table>
            </div>
            </div>
        </div>
        
    </div>

</template>
<script>
import {hgaxios as axios} from "../../utils/request"
export default {
    setup() {
        
    },
    data(){
        return{
            number:"",
            total_button:{
                0:"main1",
                1:"main2",
                2:"main3"
            },
            all_info:[
                {},
                {},
                {},
                {},
                {},
                {}
            ],
            project_info:[],
            mem_info:[],
            total_value:{
                year_value:"",
                month_value:""
            },
            total_options:{
                year_options:[
                    {
                        value:"2021",
                        label:"2021年"
                    },
                ],
                month_options:[
                    {value:"01",label:"1月"},{value:"02",label:"2月"},{value:"03",label:"3月"},{value:"04",label:"4月"},{value:"05",label:"5月"},{value:"06",label:"6月"},{value:"07",label:"7月"},{value:"08",label:"8月"},{value:"09",label:"9月"},{value:"10",label:"10月"},{value:"11",label:"11月"},{value:"12",label:"12月"}
                ],
            }
        }
    },
    methods:{
        headstyle(){
            return "background-color:#3a8ee660;margin-left:30px"
                    },
        result(){
            var nums = 0
            if (this.total_value.year_value != "" && this.total_value.month_value != ""){
                var year = this.total_value.year_value
                var month = this.total_value.month_value
                axios({
                url: '/api/v1/CostStatisticsInfo/',
                method:'get',
                params:{
                       year:year,
                       month:month
                    }
                }).then(res => {
                    this.all_info = res.data.data.all_info
                    this.project_info = res.data.data.project_info
                    this.mem_info = res.data.member_info
                    for (var i in this.all_info){
                        if (this.all_info[i]["cost"] != 0 ){
                            nums = nums + parseInt(this.all_info[i]["cost"])
                        }
                    }
                    this.number = nums
                })
                
                // axios("/api/v1/CostStatisticsInfo/",{
                //     year:year,
                //     month:month
                //     }
                // ).then(res => {
                //     console.log(res);
                // })

            }
        },
        allstat(res){
            for (var i in this.total_button){
                if (i == res){
                    document.getElementById(this.total_button[i]).style.display = "flex";
                }
                else{
                    document.getElementById(this.total_button[i]).style.display = "none";
                }
            }
            
        }
    },
}
</script>
<style scoped>
.background1{
    margin:10px;
    margin-top:0px;
    padding: 0px;
    padding-top: 10px;
    /* padding-left:10px; */
    background-color: #ffffff;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center */

}
.active{
    color: #3a8ee6;
    background-color: #ecf5ff;
    outline: 0;
    width: 100%;
}
.main1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top:30px;
   
    
}
.main2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top:30px
}
.main3{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top:30px
}
.table1{
    margin:0px 25% 0px 10%
}
.table2{
    margin:0px 10% 0px 10%
}
.tablegroup{
    font-size:15px;
    margin:0px
}
</style>