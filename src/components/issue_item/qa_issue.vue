<template>
<div id="pronbit" ref="pronbit"></div>
<div class="background">
<div class="master">
    <div >
        <div style="margin-left:10px">
            <h5 style="text-align:left;font-size:18px;font-weight:bolder">质控 发行项目测试需求列表</h5>
        </div>
        <hr>
       <div style="margin-bottom:20px;margin-left:10px;display:flex;justify-content:space-between">
          
           <div>
               <span>显示&nbsp;</span>
            <el-select v-model="apipage_size" placeholder="每页十条" style="width:110px" @change="apichange()">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            
            >
            </el-option>
            </el-select>
           </div>
           <div>
               <span>搜索：</span>
                <el-input style="width:200px" v-model="input" @input="inputchange()" placeholder="请输入内容"></el-input>
           </div>
       </div>
 
            
   <div style="display:flex">
         <el-table @header-click="delay_sort" v-loading="loading" element-loading-text="拼命加载中" stripe border :data="tableData">
    <el-table-column  label="id" min-width="55">
         <template v-slot="scope">
            <h6 style="text-align:left;width:70px;padding:5px;font-size:14px;margin:8px 0px 8px 0px;font-weight: normal">{{scope.row.table_id}}</h6>
        </template>
    </el-table-column>
    <el-table-column  label="任务id" min-width="100">
         <template v-slot="scope">
            <h6 style="text-align:left;width:100px;padding:5px;font-size:14px;margin:8px 0px 8px 0px;font-weight: normal">{{scope.row.ancestor_id.substring(scope.row.ancestor_id.length - 7)}}</h6>
        </template>
    </el-table-column>
    <el-table-column label="标题" min-width="300">
         <template v-slot="scope">
            <span style="text-align:left;padding:5px;font-size:14px;margin:8px 0px 8px 0px;font-weight: normal;min-height:50px">{{scope.row.name}}</span>
        </template>
    </el-table-column>
    <el-table-column label="优先级" min-width="100" >
        <template v-slot="scope">
            <h6 v-if="scope.row.priority_name" style="font-size:13px;border-radius: 7px;margin:8px 0px 8px 0px;font-weight: normal" :class="(scope.row.priority_name=='High')?'high':(scope.row.priority_name=='Middle')?'middle':(scope.row.priority_name=='Low')?'low':(scope.row.priority_name=='Nice To Have')?'nth':'reselve'">{{scope.row.priority_name}}</h6>
                <h6 v-if="!(scope.row.priority_name)" >--</h6>
        </template>
    </el-table-column>
    <el-table-column label="处理人" min-width="100">
         <template v-slot="scope">
            <h6 style="font-size:13px;margin:8px 0px 8px 0px;font-weight: normal">{{scope.row.测试执行人}}</h6>
        </template>
    </el-table-column>
      <el-table-column label="预计开始" min-width="130">
         <template v-slot="scope">
            <h6 style="font-size:14px;margin:8px 0px 8px 0px;font-weight: normal">{{scope.row.begin}}</h6>
        </template>
    </el-table-column>
     <el-table-column label="预计结束" min-width="130">
         <template v-slot="scope">
            <h6 style="font-size:14px;margin:8px 0px 8px 0px;font-weight: normal">{{scope.row.due}}</h6>
        </template>
    </el-table-column>
     <el-table-column  :label="'是否延期'+delay_state" min-width="130">
         <template v-slot="scope">
           <h6  :style="delay(scope.row.Delay)" style="font-size:14px;border-radius: 7px;margin:8px 0px 8px 0px;font-weight: normal">{{scope.row.Delay}}</h6>
        </template>
    </el-table-column>
     <el-table-column label="状态" min-width="150">
         <template v-slot="scope">
            <h6 style="font-size:13px;border-radius: 7px;margin:8px 0px 8px 0px;font-weight: normal" :class="(scope.row.status_name=='实现中')?'ing':(scope.row.status_name=='审核未通过')?'fail':(scope.row.status_name=='待测试')?'ing':(scope.row.status_name=='已完成')?'ing':(scope.row.status_name=='完成中')?'ing':(scope.row.status_name=='提交审核')?'push':(scope.row.status_name=='核对需求+测试')?'isstest':(scope.row.status_name=='已关闭')?'closed':(scope.row.status_name=='规划中')?'plan':(scope.row.status_name=='已拒绝')?'closed':(scope.row.status_name=='待完成')?'ing':'reselve'">{{scope.row.status_name}}</h6>
        </template>
    </el-table-column>
     <!-- <el-table-column label="任务进度" width="100">
         
    </el-table-column>
     <el-table-column label="完成度" width="100">
        
    </el-table-column> -->
     <el-table-column label="任务难度" min-width="150">
         <template v-slot="scope">
             <h6 v-if="!(scope.row.difficulty)" style="font-size:14px;background-color:#7d7d7d;width:62px;color:#ffffff;padding-left:2px;width:66px;border-radius: 7px;padding-left:4px;margin:8px 0px 8px 0px;font-weight: normal">未设难度</h6>
             <h6 v-if="(scope.row.difficulty)" style="font-size:13px;background-color:#b0f2ff90;padding:2px;margin-top:6px;width:90px;border-radius: 7px;padding-left:5px;margin:8px 0px 8px 0px;font-weight: normal">需求难易度:{{scope.row.difficulty}}</h6>
        </template>
    </el-table-column>
     <el-table-column label="修改难度" min-width="150">
        <template v-slot="scope">
             <!-- <div v-if="(scope.row.difficulty)"> -->
                 <el-select v-model="scope.row.rankvalue" :placeholder="'难易度：'+scope.row.difficulty" style="margin-bottom:2px;border:none;margin:0px;font-weight: normal" @change="rankchange(scope.row)">
                    <el-option
                    v-for="item in rankoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                   
                    >
                    </el-option>
                </el-select>
             <!-- </div> -->
              <!-- <h6 v-if="!(scope.row.difficulty)">-- -- -- --</h6> -->
        </template>
    </el-table-column>
     <el-table-column label="详情" min-width="70">
         <template v-slot="scope">
            <el-button class="reselve" style="padding:3px;min-height:15px;margin:8px 0px 8px 0px;font-weight: normal"><a type="button" :href="scope.row.url" style="color: white" target="_blank"><h6 style="color:#00000090;margin:8px 0px 8px 0px;font-size:14px">查看</h6></a></el-button>
        </template>
    </el-table-column>
  </el-table>
   </div>
  <div class="block" style="margin-top:20px">
 
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:currentPage="apipage"
      :current-page= apipage
      :page-size= apipage_size
      layout="total, prev, pager, next"
      :total= api_sum
    >
    </el-pagination>
  </div>
    </div>
</div>
</div>
</template>
<script>
import {hpaxios} from "../../utils/request"
import {hgaxios as axios} from "../../utils/request"
// import axios from "axios"
export default {
    name:'qa_zy',
    data(){
        return{
            delay_state:"",
            flag:0,
            loading: true,
            tableData:[],
            api_state:"",
            value:"",
            rankvalue:'',
            apipage:1,
            apipage_size:10,
            rankoptions:[{
            value:1,
            label:'难易度：1'},{
            value:2,
            label:'难易度：2'},{
            value:3,
            label:'难易度：3'},{
            value:4,
            label:'难易度：4'},
            {
            value:5,
            label:'难易度：5'   
            }],
              options: [{
            value:10,
            label:'每页10条'},{
            value:20,
            label:'每页20条'},{
            value:50,
            label:'每页50条'},{
            value:100,
            label:'每页100条'}],
            api_sum:0,
            input:'',
             adminlist:[]
        
        }
    },
    

    beforeMount(){
         this.apiresponse()
         console.log(this.flag);
    },
    methods:{
        apiresponse(){
        
        hpaxios("/api/v1/DataTable/",{type:"issue",data_type:"fx",projects:["七道测试业务"],iteration:"所有迭代",page:this.apipage,page_size:this.apipage_size,search:this.input, fields:["id","name","priority","begin","due","workspace_id","difficulty","status","issue_id","url","测试执行人"]})
                .then(res => {
                            console.log(res,"123");
                            var data= res.data.data.page_data
                            for (var i in data){
                                // data[i]['rankoptions'] = [{
                                //                             value:1,
                                //                             label:'难度：1'},{
                                //                             value:2,
                                //                             label:'难度：2'},{
                                //                             value:3,
                                //                             label:'难度：3'},{
                                //                             value:4,
                                //                             label:'难度：4'},
                                //                             {
                                //                             value:5,
                                //                             label:'难度：5'   
                                //                             }]
                                data[i]['rankvalue']=""
                                if(data[i]["Delay"] == 'false'){
                                    data[i]["Delay"] = "未延期"
                                }
                                else if (data[i]["Delay"] == 'true'){
                                    data[i]["Delay"] = "延期"
                                }
                            }
                            
                            this.tableData = data
                            this.api_sum=res.data.data.search_sum 
                            this.loading = false
                    })
            
            },
        delay(row){
            if(row == "未延期"){
                return " background-color: #93c36b;padding:5px;padding-top:2px;padding-bottom:2px;padding-right:0px;width:55px;color:#f0f0f0"
            }
            else if(row == "延期"){
                return " background-color: #f85e5e;padding:5px;padding-left:12px;padding-top:2px;padding-bottom:2px;padding-right:0px;width:55px;color:#f0f0f0"
            }
        },
        run(){
            document.getElementById("pronbit").scrollIntoView({
            behavior: "smooth",  // 平滑过渡
            block:    "start"  // 上边框与视窗顶部平齐。默认值
            })
        },
        delay_sort(column){
            if (column.label === '是否延期' ||column.label === '是否延期(延期)'||column.label === '是否延期(未延期)'){
                this.delay_sort_change()
                
            }
            // console.log("121s");
            
        },
        delay_sort_change(){
                var data_1 = []
                var data_2 = []
                console.log(this.tableData);
                for (var i in this.tableData){
                   if(this.tableData[i]["Delay"]=="延期"){
                       data_1.push(
                           this.tableData[i]
                       )
                   }
                   else{
                       data_2.push(
                           this.tableData[i]
                       )
                   }
                }
                console.log(data_1,"data_1");
                
                if(this.flag % 2 == 0){
                    this.delay_state = "(延期)"
                  
                    var data_3=data_1.concat(data_2)
                    
                }
                else{
                    this.delay_state = "(未延期)"
                    var data_3=data_2.concat(data_1)
                }
                this.flag +=1
                this.tableData = data_3
        },
        cellStyle({columnIndex}){
                if (columnIndex == 11){
                    return "border-right:solid 1px #7d7d7d;;border-left:solid 1px #7d7d7d;;border-bottom:solid 1px #7d7d7d"
                }
                return "border-bottom:solid 1px #7d7d7d;border-left:solid 1px #7d7d7d"
        },
        rowstyle({rowIndex}){
           for (var i = 0;i < 12;i++){
                if (rowIndex%2==0){
                    return "background-color:rgba(0,0,0,.05)"
                }
            }
        },
        headstyle({columnIndex}){
            if (columnIndex == 11){
                    return "border-right:solid 1px #7d7d7d;border-left:solid 1px #7d7d7d;border-bottom:solid 1px #7d7d7d;border-top:solid 1px #7d7d7d;color:black"
                }
            return "color:black;border-top:solid 1px #7d7d7d;border-left:solid 1px #7d7d7d;border-bottom:solid 1px #7d7d7d;"
        },
        checkadmin(){
        axios({
                url: '/api/v1/AdminConfig/',
                method:'get',
                params:{
                        type:"admin"
                    }
                }).then(res => {
                    this.adminlist=res.data.data
                    
                })
       
    },
        apichange(){
            this.apipage = 1
            console.log(this.apipage_size);
            this.loading=true
            this.apiresponse()
            this.delay_state=""
        },
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
        handleCurrentChange(val) {
            
            console.log(`当前页: ${val}`)
            this.loading=true
            this.apiresponse()
            this.delay_state=""
            setTimeout(() => {
                this.run()
            }, 500);
            
        },
        inputchange(){
            this.apipage=1
            
            this.loading=true
            this.apiresponse()
            this.delay_state=""
        },
        rankchange(row){
           hpaxios("/api/v1/SetIssueDifficulty/",{id:row.id,difficulty:row.rankvalue,cache_check:{type:"issue",data_type:"fx",projects:["七道测试业务"],iteration:"所有迭代"}})
                  .then(res => {
                    //   console.log(res);
                    //   console.log("row.rankvalue",row.rankvalue);
                      row.difficulty =row.rankvalue
                    //   this.loading=true
                    //   this.apiresponse()
                  })
        }
 
    },
    mounted(){
     
       
        
    }
}
</script>
<style scoped>
.master{
    margin:10px;
    margin-top:0px;
    padding: 10px;
    background-color: #ffffff;
    height:98%;

}
.success{
    background-color:#73ff8290;
    border-radius: 30px;
    border: none;
    
}
.failuer{
    background-color:#ff4d4d90;
    border-radius: 30px;
    border: none;
    
}
.unstable{
    background-color:#ff9b4a90;
    border-radius: 30px;
    border: none;
}
.aborted{
    background-color:#9c9c9c90;
    border-radius: 30px;
    border: none;
}
.has-gutter>>>.el-table_9_column_52{
    padding:0px;
   
}
.background{
  background-color:	#C0C0C020	;
}
.high{
    background-color: #f85e5e;
    padding:5px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px;
    width:37px;
    color:#f0f0f0
}
.middle{
    background-color: #93c36b;
    padding:5px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px;
    width:48px;
    color:#f0f0f0
}
.low{
    background-color: #d1d1d1;
    padding:5px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px;
    width:48px;
    color:#f0f0f0
}
.nth{
    background-color: #d1d1d1;
    padding:5px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px;
    width:78px;
    color:#f0f0f0
}
.ing{
    color: #2a66c7;
    border:1px solid #2a66c7;
    width:57px;
    padding-left:9px;
    padding-top:1px;
    padding-bottom:1px
}
.closed{
    color: #8c95a8;
    border:1px solid #8c95a8;
    width:57px;
    padding-left:9px;
    padding-top:1px;
    padding-bottom:1px
} 
.plan{
    color: #93c46b;
    border:1px solid #93c46b;
    width:57px;
    padding-left:9px;
    padding-top:1px;
    padding-bottom:1px
}
.isstest{
     color: #2a66c7;
    border:1px solid #2a66c7;
    width:105px;
    padding-left:9px;
    padding-top:1px;
    padding-bottom:1px
}
.push{
    color: #2a66c7;
    border:1px solid #2a66c7;
    width:72px;
    padding-left:9px;
    padding-top:1px;
    padding-bottom:1px
}
.failwei{
    color: #2a66c7;
    border:1px solid #2a66c7;
    width:79px;
    padding-left:9px;
    padding-top:1px;
    padding-bottom:1px
}
.el-select>>>.el-input__inner{
    border:none
}
/* .el-table{
    position:static;
} */
.block{
    display: flex;
    justify-content: center;
}
</style>