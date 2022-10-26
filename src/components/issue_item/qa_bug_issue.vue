<template>
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
           <div >
               <span>搜索：</span>
                <el-input style="width:200px" v-model="input" @input="inputchange()" placeholder="请输入内容"></el-input>
           </div>
       </div>
 
            
   <div style="display:flex">
         <el-table v-loading="loading"  element-loading-text="拼命加载中" stripe border :data="tableData">
    <el-table-column  label="id" min-width="50">
         <template v-slot="scope">
            <h6 style="text-align:left;width:70px;padding:5px;padding-top:9px;padding-bottom:9px;font-size:14px;margin:8px 0px 8px 0px;font-weight: normal;">{{scope.row.table_id}}</h6>
        </template>
    </el-table-column>
    <el-table-column  label="任务id" min-width="100">
         <template v-slot="scope">
            <h6 style="text-align:left;width:100px;padding:5px;font-size:14px;margin:8px 0px 8px 0px;font-weight: normal;">{{scope.row.bug_id}}</h6>
        </template>
    </el-table-column>
    <el-table-column label="标题" min-width="700">
         <template v-slot="scope">
            <span style="text-align:left;padding:5px;font-size:14px;margin:8px 0px 8px 0px;font-weight: normal;min-height:65px;max-height:65px">{{scope.row.title}}</span>
        </template>
    </el-table-column>
    
    <el-table-column label="优先级" min-width="100" >
        <template v-slot="scope">
            <h6 style="font-size:13px;border-radius: 7px;  background-color: #f85e5e;margin:8px 0px 8px 0px;font-weight: normal;
                padding:5px;
                padding-top:2px;
                padding-bottom:2px;
                padding-right:0px;
                width:24px;
                color:#f0f0f0" v-if="scope.row.priority=='high'">高
            </h6>
            <h6 style="font-size:13px;border-radius: 7px;  background-color: #d1d1d1;margin:8px 0px 8px 0px;font-weight: normal;
                padding:5px;
                padding-top:2px;
                padding-bottom:2px;
                padding-right:0px;
                width:24px;
                color:#f0f0f0" v-if="scope.row.priority=='low'">低
            </h6>
             <h6 style="font-size:13px;border-radius: 7px;   background-color: #93c36b;margin:8px 0px 8px 0px;font-weight: normal;
                padding:5px;
                padding-top:2px;
                padding-bottom:2px;
                padding-right:0px;
                width:39px;
                color:#f0f0f0" v-if="scope.row.priority=='medium'">一般
            </h6>
             <h6 style="font-size:13px;border-radius: 7px;   background-color: #d1d1d1;margin:8px 0px 8px 0px;font-weight: normal;
                padding:5px;
                padding-top:2px;
                padding-bottom:2px;
                padding-right:0px;
                width:62px;
                color:#f0f0f0" v-if="scope.row.priority=='insignificant'">无关紧要
            </h6>
            <h6 style="font-size:13px;border-radius: 7px;   background-color: #f85e5e;margin:8px 0px 8px 0px;font-weight: normal;
                padding:5px;
                padding-top:2px;
                padding-bottom:2px;
                padding-right:0px;
                width:39px;
                color:#f0f0f0" v-if="scope.row.priority=='urgent'">严重
            </h6>
            <h6 style="margin:8px 0px 8px 0px;font-weight: normal;" v-if="!(scope.row.priority)" >--</h6>
        </template>
    </el-table-column>
    <el-table-column label="严重程度" min-width="100">
         <template v-slot="scope">
             <h6 style="font-size:13px;border-radius: 7px;margin:8px 0px 8px 0px;font-weight: normal;" :class="(scope.row.severity_name=='严重')?'high':(scope.row.severity_name=='致命')?'high':(scope.row.severity_name=='一般')?'middle':(scope.row.severity_name=='提示')?'low':(scope.row.severity_name=='建议')?'low':'reselve'">{{scope.row.severity_name}}</h6>
        </template>
    </el-table-column>
      <el-table-column label="bug提交" min-width="130">
         <template v-slot="scope">
            <h6 style="font-size:14px;margin:8px 0px 8px 0px;font-weight: normal;">{{scope.row.reporter}}</h6>
        </template>
    </el-table-column>
     <el-table-column label="创建时间" min-width="200">
         <template v-slot="scope">
            <h6 style="font-size:14px;margin:8px 0px 8px 0px;font-weight: normal;">{{scope.row.created}}</h6>
        </template>
    </el-table-column>
     <el-table-column label="状态" min-width="120">
         <template v-slot="scope">
            <h6 style="font-size:13px;border-radius: 7px;margin:8px 0px 8px 0px;font-weight: normal;" :class="(scope.row.status_name=='实现中')?'ing':(scope.row.status_name=='审核未通过')?'fail':(scope.row.status_name=='接受/处理')?'accept':(scope.row.status_name=='重新打开')?'restart':(scope.row.status_name=='待测试')?'ing':(scope.row.status_name=='已验证')?'ing':(scope.row.status_name=='新')?'new':(scope.row.status_name=='已完成')?'ing':(scope.row.status_name=='已解决')?'ing':(scope.row.status_name=='完成中')?'ing':(scope.row.status_name=='提交审核')?'push':(scope.row.status_name=='核对需求+测试')?'isstest':(scope.row.status_name=='已关闭')?'closed':(scope.row.status_name=='规划中')?'plan':(scope.row.status_name=='挂起')?'up':(scope.row.status_name=='已拒绝')?'closed':(scope.row.status_name=='待完成')?'ing':'reselve'">{{scope.row.status_name}}</h6>
        </template>
    </el-table-column>
     <el-table-column label="详情" min-width="100">
         <template v-slot="scope">
            <el-button class="reselve" style="padding:3px;min-height:15px;margin:8px 0px 8px 0px;font-weight: normal;"><a type="button" :href="scope.row.url" style="color: white" target="_blank"><h6 style="color:#00000090;margin:8px 0px 8px 0px;font-size:14px">查看</h6></a></el-button>
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
    name:'qa_bug_zy',
    data(){
        return{
             loading: true,
             tableData:[],
             api_state:"",
             value:"",
             rankvalue:'',
             apipage:1,
             apipage_size:10,
             rankoptions:[{
            value:1,
            label:'难度：1'},{
            value:2,
            label:'难度：2'},{
            value:3,
            label:'难度：3'},{
            value:4,
            label:'难度：4'},
            {
            value:5,
            label:'难度：5'   
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
            projects:[]
        
        }
    },
    

    mounted(){
        
        this.apiresponse()
        

    },
    methods:{
        apiresponse(){
            axios({
              url: '/api/v1/sidebar/',
              method:'get',
              params:{
                  data_type	:"fx"
                  },
              }).then(res => {
                  console.log(res.data.data.projects);
                  hpaxios("/api/v1/DataTable/",{type:"bug",data_type:"fx",projects:res.data.data.projects,iteration:"所有迭代",page:this.apipage,page_size:this.apipage_size,search:this.input, fields:["id","priority","title","severity","reporter","created","closed","status", "url"] })
                    .then(res => {

                                this.tableData=res.data.data.page_data
                                console.log(this.tableData);
                                this.api_sum=res.data.data.search_sum 
                                this.loading = false
                        })
              })
                //  res.data.data.projects
                  
      
           
            },
         cellStyle({columnIndex}){
                if (columnIndex == 8){
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
            if (columnIndex == 8){
                    return "border-right:solid 1px #7d7d7d;border-left:solid 1px #7d7d7d;border-bottom:solid 1px #7d7d7d;border-top:solid 1px #7d7d7d;color:black"
                }
            return "color:black;border-top:solid 1px #7d7d7d;border-left:solid 1px #7d7d7d;border-bottom:solid 1px #7d7d7d;"
        },
        apichange(){
            this.apipage = 1
            console.log(this.apipage_size);
            this.loading=true
            this.apiresponse()
        },
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`)
            this.loading=true
            this.apiresponse()
        },
        inputchange(){
            this.apipage=1
            
            this.loading=true
            this.apiresponse()
        },
        rankchange(row){
            console.log(this.rankvalue);
            console.log(row);
        },
        getsidebar(){
            
        }
 
    },

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
    padding:0px
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
    width:40px;
    color:#f0f0f0
}
.low{
    background-color: #d1d1d1;
    padding:5px;
    padding-top:2px;
    padding-left: 6px;
    padding-bottom:2px;
    padding-right:0px;
    width:40px;
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
.accept{
    color: #2a66c7;
    border:1px solid #2a66c7;
    width:74px;
    padding-left:9px;
    padding-top:1px;
    padding-bottom:1px
}
.restart{
    color: #2a66c7;
    border:1px solid #2a66c7;
    width:71px;
    padding-left:9px;
    padding-top:1px;
    padding-bottom:1px
}
.new{
     color: #93c46b;
    border:1px solid #93c46b;
    width:33px;
    padding-left:9px;
    padding-top:1px;
    padding-bottom:1px
}
.up{
    color: #2a66c7;
    border:1px solid #2a66c7;
    width:47px;
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
/* .el-table{
    position:static;
} */
.block{
    display: flex;
    justify-content: center;
}
</style>