<template>
<div class="background">
<div class="master">
    <!-- {{error_msg}} -->
    <div >
        <div style="margin-left:10px">
            <h5 style="text-align:left;font-size:18px;font-weight:bolder">质控 成员列表</h5>
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

         <el-table v-loading="loading" :default-sort="{prop: 'date', order: 'descending'}"  element-loading-text="拼命加载中" :data="tableData"  stripe border>
    <el-table-column  label="id" min-width="100">
         <template v-slot="scope">
            <h6 style="height:34px;padding-top:12px;padding-left:6px;font-size:14px;margin:8px 0px 8px 0px;font-weight: normal;">{{scope.row.id}}</h6>
        </template>
    </el-table-column>
    <el-table-column  label="姓名" min-width="200" >
         <template v-slot="scope">
            <h6 style="height:34px;padding-top:12px;padding-left:6px;font-size:14px;margin:8px 0px 8px 0px;font-weight: normal;">{{scope.row.name}}</h6>
        </template>
    </el-table-column>
    <el-table-column label="所属组" min-width="200">
         <template v-slot="scope">
            <h6 style="height:34px;padding-top:12px;padding-left:6px;font-size:14px;margin:8px 0px 8px 0px;font-weight: normal;">{{scope.row.group}}</h6>
        </template>
    </el-table-column>
    <el-table-column label="完成需求总分" sortable min-width="250" prop="all_score">
         <template v-slot="scope">
             <h6 :style="allscore(scope.row.all_score)" style="font-size:14px;margin-left:20px;border-radius: 7px; background-color: #93c36b;width:45px;color:#f0f0f0;margin:8px 0px 8px 0px;font-weight: normal;" >{{scope.row.all_score}}</h6>
        </template>
    </el-table-column>
    <el-table-column label="完成需求年度分数" min-width="250" sortable prop="year_score">
        <template v-slot="scope">
            <h6  :style="yearscore(scope.row.year_score)" style="font-size:14px;margin-left:20px;border-radius: 7px; background-color: #69b9fa; width:45px;color:#f0f0f0;margin:8px 0px 8px 0px;font-weight: normal;" >{{scope.row.year_score}}</h6>
        </template>
    </el-table-column>
    
      <el-table-column label="完成需求总数" min-width="250" sortable prop="issue_count">
         <template v-slot="scope">
            <h6  style="font-size:14px;margin-left:20px;border-radius: 7px;margin:8px 0px 8px 0px;font-weight: normal;" :class="(scope.row.issue_count<=10)?'allcount1':(scope.row.issue_count<=99)?'allcount2':(scope.row.issue_count<=999)?'allcount3':(scope.row.issue_count<=9999)?'allcount4':'reselve'">{{scope.row.issue_count}}</h6>
        </template>
    </el-table-column>
     <el-table-column label="需求延迟次数" min-width="250" sortable prop="delay_count">
         <template v-slot="scope">
             
            <h6 v-if="scope.row.delay_count > 0" style="font-size:14px;margin-left:20px;border-radius: 7px;margin:8px 0px 8px 0px;font-weight: normal;" :class="(scope.row.delay_count<=10)?'delaycount1':(scope.row.delay_count<=99)?'delaycount2':'reselve'">{{scope.row.delay_count}}</h6>
            <h6 v-if="scope.row.delay_count == 0" style="font-size:14px;margin-left:20px;border-radius: 7px;margin:8px 0px 8px 0px;font-weight: normal;" class="delaycount3">{{scope.row.delay_count}}</h6>
        </template>
    </el-table-column>
     <el-table-column label="详情" min-width="100">
         <template v-slot="scope">
            <el-button class="reselve" @click="memberinfo(scope.row.name)" style="padding:3px;min-height:15px;margin:8px 0px 8px 0px;font-weight: normal;"><a type="button" style="color: white" ><h6 style="color:#00000090;margin:8px 0px 8px 0px;font-size:14px">查看</h6></a></el-button>
        </template>
    </el-table-column>
  </el-table>
   </div>
    <div  style="text-align:left;margin-top:20px">
         <el-select v-model="year" @change="yearchange()" >
        <el-option
        
        v-for="item in yearoptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        >
        </el-option>
    </el-select>
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
import {hgaxios as axios} from "../../utils/request"
export default {
    name:'qa_bug_zy',
    data(){
        return{
             error_msg:"",
             loading: true,
             tableData:[],
             api_state:"",
             value:"",
             rankvalue:'',
             apipage:1,
             apipage_size:10,
             year:2022,
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
            projects:[],
            yearvalue:2021,
            yearoptions:[{
            value:2020,
            label:'2020年度'},
            {
            value:2021,
            label:'2021年度'
            },
            {
            value:2022,
            label:'2022年度'
            }
            ],
        
        }
    },
    

    mounted(){
        
        this.apiresponse()
        

    },
    computed:{
        
    },
    methods:{
        apiresponse(){
             axios({
              url: '/api/v1/MemberScoreTable/',
              method:'get',
              params:{
                  year:JSON.stringify(this.year),
                  page:JSON.stringify(this.apipage),
                  page_size:JSON.stringify(this.apipage_size),
                  search:this.input
                  
                  },
              }).then(res => {
                    // console.log(res);
                    this.tableData=res.data.data.page_data
                    this.api_sum=res.data.data.search_sum 
                    this.loading = false
                    // console.log(this.tableData,"12");
                    this.error_msg = res.data.data.error_msg
                    console.log(res.data.data.error_msg);
                    console.log(res.data.data.page_data);
                   
                //  res.data.data.projects
                //   axios.post("/api/v1/DataTable/",{type:"bug",data_type:"zy",projects:res.data.data.projects,iteration:"所有迭代",page:this.apipage,page_size:this.apipage_size,search:this.input,fields:["id","priority","title","severity","reporter","created","closed","status", "url"] })
                //     .then(res => {

                //                 this.tableData=res.data.data.page_data
                //                 console.log(this.tableData);
                //                 this.api_sum=res.data.data.search_sum 
                //                 this.loading = false
                //         })
                    })
      
           
            },
       
        cellStyle({columnIndex}){
                if (columnIndex == 7){
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
            if (columnIndex == 7){
                    return "border-right:solid 1px #7d7d7d;border-left:solid 1px #7d7d7d;border-bottom:solid 1px #7d7d7d;border-top:solid 1px #7d7d7d;color:black"
                }
            return "color:black;border-top:solid 1px #7d7d7d;border-left:solid 1px #7d7d7d;border-bottom:solid 1px #7d7d7d;"
        },
        allscore(row){
            var reg = /.*\..*/
            if (row < 10){
                if (reg.test(row)) {
                    return "padding-left:12px"
                }
                return "padding-left:18px"
            }
            if(row< 100){
                 if (reg.test(row)) {
                    return "padding-left:9px"
                }
                    return "padding-left:14px"
            }
             if(row< 1000){
                 if (reg.test(row)) {
                    return "padding-left:5px"
                }
                    return "padding-left:10px"
            }
             if(row < 10000){
                 if (reg.test(row)) {
                    return "padding-left:0px"
                }
                    return "padding-left:6px"
            } 
        },
        yearscore(row){
            var reg = /.*\..*/
            if (row < 10){
                if (reg.test(row)) {
                    return "padding-left:12px"
                }
                return "padding-left:18px"
            }
            if(row< 100){
                 if (reg.test(row)) {
                    return "padding-left:9px"
                }
                    return "padding-left:14px"
            }
             if(row< 1000){
                 if (reg.test(row)) {
                    return "padding-left:5px"
                }
                    return "padding-left:10px"
            }
             if(row < 10000){
                 if (reg.test(row)) {
                    return "padding-left:0px"
                }
                    return "padding-left:6px"
            } 
        },

        memberinfo(row){
        
            this.$router.push({path:"/qa/qa_member_chart/"+row +"/"+this.year})
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
        yearchange(){
            this.loading=true
            this.apipage=1
            setTimeout(() => {
                this.apiresponse()
            }, 1000);
            
            
        },
        rankchange(row){
            // console.log(this.rankvalue);
            // console.log(row);
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

.delaycount1{
    background-color: #ff3c00;
    padding-left:15px;
    /* padding:0px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px; */
    width:40px;
    color:#f0f0f0
}
.delaycount2{
    background-color: #ff3c00;
    padding-left:11px;
    /* padding:2px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px; */
    width:40px;
    color:#f0f0f0
}
.delaycount3{
    background-color: #93c36b;
    padding-left:15px;
    /* padding:2px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px; */
    width:40px;
    color:#f0f0f0
}
.allscore1{
    background-color: #409EFF;
    padding-left:15px;
    /* padding:2px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px; */
    width:50px;
    color:#f0f0f0
}
.allscore2{
    background-color: #409EFF;
    padding-left:10px;
    /* padding:2px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px; */
    width:50px;
    color:#f0f0f0
}
.allscore3{
    background-color: #409EFF;
    padding-left:9px;
    /* padding:2px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px; */
    width:50px;
    color:#f0f0f0
}
.allscore4{
    background-color: #409EFF;
    padding-left:4.5px;
    /* padding:2px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px; */
    width:50px;
    color:#f0f0f0
}
.yearscore1{
    background-color: #69b9fa;
    padding-left:15px;
    /* padding:2px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px; */
    width:40px;
    color:#f0f0f0
}.yearscore2{
    background-color: #69b9fa;
    padding-left:11px;
    /* padding:2px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px; */
    width:40px;
    color:#f0f0f0
}
.yearscore3{
    background-color: #69b9fa;
    padding-left:8px;
    /* padding:2px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px; */
    width:40px;
    color:#f0f0f0
}
.yearscore4{
    background-color: #69b9fa;
    padding-left:3.5px;
    /* padding:2px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px; */
    width:40px;
    color:#f0f0f0
}
.allcount1{
    background-color: #93c36b;
    padding-left:15px;
    /* padding:2px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px; */
    width:40px;
    color:#f0f0f0
}
.allcount2{
    background-color: #93c36b;
    padding-left:11px;
    /* padding:2px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px; */
    width:40px;
    color:#f0f0f0
}
.allcount3{
    background-color: #93c36b;
    padding-left:8px;
    /* padding:2px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px; */
    width:40px;
    color:#f0f0f0
}
.allcount4{
    background-color: #93c36b;
    padding-left:3.5px;
    /* padding:2px;
    padding-top:2px;
    padding-bottom:2px;
    padding-right:0px; */
    width:40px;
    color:#f0f0f0
}
/* .el-table{
    position:static;
} */
.block{
    display: flex;
    justify-content: center;
}
</style>