<template>
  <div class="col-12 col-sm-6 col-md-4">
        <div class="small-box">
<!--            <div class="inner">-->
              <el-card>
                <template #header>
                  <div>
                    <h3>{{name}}:</h3>
                    <p>日期：{{start}} / {{end}}</p>
                  </div>
                </template>
                <div>
                  <h5 :style="h5_stytle">{{num}} 个
                    <span class="badge"  v-if="button" @click="openModal()">
                          <el-button type="text" style="padding:12px"  @click="dialogTableVisible = true" >
                              <a style="color:black" >详情</a>
                          </el-button>
                            <el-dialog :title="name" v-model="dialogTableVisible">
                                <div style="float: right;">
                                <el-input
                                    placeholder="请输入"
                                    prefix-icon="el-icon-search"
                                    v-model="input"
                                    @input="search">
                                </el-input>
                                </div>
                                <el-select v-model="page_size" placeholder="每页10条" style="float: left;margin-right:20px;" @change="changecard">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-table
                                :data="tableData"
                                style="width: 100%">
                                <el-table-column
                                        prop="table_id"
                                        label="#"
                                        width="55">
                                    </el-table-column>
                                    <el-table-column
                                        prop="issue_id"
                                        label="ID"
                                        width="80">
                                    </el-table-column>
                                    <el-table-column
                                        prop="name"
                                        label="标题"
                                        width="220">
                                    </el-table-column>
                                    <el-table-column
                                        label="优先级">
                                        <template v-slot="scope">
                                            <span v-if="scope.row.priority_name">{{scope.row.priority_name}}</span>
                                            <span v-if="!(scope.row.priority_name)" >--</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                        prop="creator"
                                        label="创建人">
                                    </el-table-column>
                                    <el-table-column
                                        prop="created"
                                        label="开始时间"
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
                                        prop="status_name"
                                        label="状态"
                                        width="100">
                                        <template v-slot="scope">
                                            <button  :class="(scope.row.status_name=='新')?'new':(scope.row.status_name=='已关闭')?'closed':'reselve'">{{scope.row.status_name}}</button>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                        label="详情">
                                        <template v-slot="scope">
                                        <button class="reselve"><a type="button" :href="scope.row.url" style="color: white">详情</a></button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                               <div class="block">
                                <span class="demonstration">数据取自{{start}}至{{end}}</span>
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
                    </span>
                  </h5>
                </div>
              </el-card>
                <div v-html="html_data">
                </div>
            </div>
        </div>
<!--    </div>-->
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
// //Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

// import {axioss as axios} from "../../utils/request"
import {hpaxios} from "../../utils/request"
// import axios from 'axios';
// import $ from 'jquery'

export default {
    components: {
        
    },
    data(){
        return {
            total:100,//默认数据总数
            page_size:10,//每页的数据条数
            currentPage:1,//默认开始页面
            endd:'',
            startt:'',
            is_tag: true,
            input:"",
            page:1,
            table_id:"",
            options: [{
           value:10,
          label:'每页10条'
        }, {
          value:20,
          label:'每页20条'
        }, {
           value:50,
          label:'每页50条'
        }],
        search_data: [],
        tableData: [],
        currentPage1: 5,
            h5_stytle:'',
            html_data:'',
            dialogVisible:false,
            
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
        }
    },
    props:["name", "start", "end", "num", "button", "color", 'html', 'table_dict', 'table_type', 'fields'],
    computed: {
        page_title:{
            get(){
                if(this.$props.table_type == 'issue'){
                    return "需求详细信息"
                }
                else{
                    return "BUG详细信息"
                }
            }
        }
    },
    watch: {
        html(){
            this.$data.html_data = this.$props.html
        }
    },
    methods: {
        openModal(){
            let table_dict = JSON.parse(this.$props.table_dict)
            let project_list = [table_dict.project]  
            console.log(this.$props.table_type)
            hpaxios.post("/api/v1/DataTable/",{type:this.$props.table_type, start:this.$props.start, end:this.$props.end, projects: project_list,iteration:table_dict.iteration,page:this.page,page_size:this.page_size,search:this.input,fields:["id","name","priority","creator","created","workspace_id","status","issue_id","modified","url"]})
            .then(res => {
                console.log(res)
                this.tableData=res.data.data.page_data
                console.log(this.$props.start)
                console.log(this.$props.end)
                this.total=res.data.data.page_sum
                this.input=""
                
            })
        },
        changecard(){
            let table_dict = JSON.parse(this.$props.table_dict)
            let project_list = [table_dict.project]
            hpaxios.post("/api/v1/DataTable/",{type:this.$props.table_type, start:this.$props.start,end:this.$props.end, projects: project_list,iteration:table_dict.iteration,page:this.page,page_size:this.page_size,search:this.input,fields:["id","name","priority","creator","created","workspace_id","status","issue_id","modified","url"]})
            .then(res => {
                console.log(res)
                this.total=res.data.data.page_sum
                this.tableData=res.data.data.page_data
                console.log(this.$props.start)
                this.currentPage=1
                
                console.log(this.$props.end)
            })
        },
        handleCurrentChange(val) {
            this.currentPage=val
            this.page=this.currentPage
            console.log(`当前页: ${val}`);
            let table_dict = JSON.parse(this.$props.table_dict)
                let project_list = [table_dict.project]
                console.log(this.$props.start)
                console.log(this.$props.end)
                console.log(this.$props.fields)
                hpaxios.post("/api/v1/DataTable/",{type:this.$props.table_type,start:this.$props.start,end:this.$props.end, projects: project_list,iteration:table_dict.iteration,page:this.page,page_size:this.page_size,search:this.input,fields:["id","name","priority","creator","created","workspace_id","status","modified","issue_id","url"]})
                .then(res => {
                    this.total=res.data.data.page_sum
                    console.log(res.data.data)
                    this.tableData=res.data.data.page_data
                    console.log(this.$props.start)
                    console.log(this.$props.end)
                })

        },
    
        search(){
            let table_dict = JSON.parse(this.$props.table_dict)
            let project_list = [table_dict.project]
            hpaxios.post("/api/v1/DataTable/",{type:this.$props.table_type, start:this.$props.start,end:this.$props.end,projects: project_list,iteration:table_dict.iteration,page:this.page,page_size:this.page_size,search:this.input,fields:["id","name","priority","creator","created","workspace_id","status","issue_id","modified","url"]})
                .then(res => {
                    console.log(res.data.data)
                    this.tableData=res.data.data.page_data
                    console.log(this.$props.start)
                    this.total=res.data.data.page_sum
                    console.log(this.$props.end)
                })
        },
        handleSizeChange(val) {
      this.pagesize=val
    },
        },
    

}
</script>

<style scoped>
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
    background-color:white;
    border:1px solid 	#DCDCDC;

}
</style>