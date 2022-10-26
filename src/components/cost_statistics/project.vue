<template>
<div class="master">
    <div style="padding-left:10px">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- <el-breadcrumb-item :to="{ path: '/cost_statistics' }">成本统计</el-breadcrumb-item> -->
        <el-breadcrumb-item>配置列表</el-breadcrumb-item>
        <el-breadcrumb-item>项目</el-breadcrumb-item>
        <!-- <el-breadcrumb-item v-if="$route.params.id =='member'">人员</el-breadcrumb-item>
        <el-breadcrumb-item v-if="$route.params.id =='project'">项目</el-breadcrumb-item> -->


    </el-breadcrumb>
    </div>
    <div style="padding-left:10px">
       
        <h6 style="text-align:left;margin-top:20px;font-size:14px">项目设置</h6>
    </div>
    <div style="display:flex;justify-content:space-between;padding-left:10px">
        <div style="display:flex;margin-top:20px">
            <el-button @click="adds()"  style="padding:7px;height:30px;margin-bottom:20px" type="primary" plain ><h6 style="margin:0px;font-size:12px">添加项目</h6></el-button>
        </div>
        <div style="text-align:right;margin-top:15px;margin-bottom:10px">
            <el-input style="width:130px;margin-right:50px;text-align:right" v-model="input" @input="inputchange()"  placeholder="搜索项目"  prefix-icon="el-icon-search"></el-input>
        </div>
    </div>
    <div style="background-color:#C0C0C015;height:50px;border-bottom:1px solid #C0C0C050;border-top:1px solid #C0C0C050">
        <div style="display:flex;padding-left:10px">
            <h6 style="margin:0px;font-size:13px;margin-top:18px">项目分类</h6>
            <el-button :class="{active:shows=1}" style="padding:5px;margin-left:30px;margin-top:9px;border:none">所有</el-button>
        </div>
    </div>
    <div style="display:flex">
        <el-table :data="tableData1" stripe border>
                    <el-table-column label="id" min-width="20">
                        <template v-slot="scope">
                            <h6 class="tablegroup">{{scope.row.id}}</h6>
                        </template>
                    </el-table-column>
                    <el-table-column  label="项目组别" min-width="25">
                        <template v-slot="scope">
                            <h6 class="tablegroup">{{scope.row.group}}</h6>
                        </template>
                    </el-table-column>
                    <el-table-column  label="项目内容" min-width="20">
                        <template v-slot="scope">
                            <h6 class="tablegroup">{{scope.row.content}}</h6>
                        </template>
                    </el-table-column>
                    <!-- <el-table-column  label="项目编号" min-width="20">
                        <template v-slot="scope">
                            <h6 class="tablegroup">{{scope.row.number}}</h6>
                        </template>
                    </el-table-column> -->
                    <el-table-column  label="操作" min-width="20">
                        <template v-slot="scope">
                            <el-popover
                                    placement="bottom-start"
                                
                                    :width="50"
                                    trigger="hover"
                                
                                >
                                <div><h6 style="font-size:13px;font-weight:bold;color:C0C0C015">项目操作</h6></div>
                                <div style="display:flex;flex-direction:column">
                                    <!-- <el-button @click="edits(scope.row)" size="small" style="border:none;padding:0px;width:100px"><h6 style="font-size:13px">编辑项目</h6></el-button> -->
                                    <el-button @click="dele(scope.row)"  style="border:none;padding:0px;width:100px;margin:0px"><h6 style="font-size:13px">移除项目</h6></el-button>
                                </div>
                                    <template #reference>
                                    <el-button style="padding:0px;border:none">
                                        <svg t="1636596983884" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2996" width="20" height="20"><path d="M512 814.545455c-39.563636 0-69.818182-30.254545-69.818182-69.818182s30.254545-69.818182 69.818182-69.818182 69.818182 30.254545 69.818182 69.818182-30.254545 69.818182-69.818182 69.818182z m0-232.727273c-39.563636 0-69.818182-30.254545-69.818182-69.818182s30.254545-69.818182 69.818182-69.818182 69.818182 30.254545 69.818182 69.818182-30.254545 69.818182-69.818182 69.818182z m0-232.727273c-39.563636 0-69.818182-30.254545-69.818182-69.818182s30.254545-69.818182 69.818182-69.818182 69.818182 30.254545 69.818182 69.818182-30.254545 69.818182-69.818182 69.818182z" fill="#C0C0C0" p-id="2997"></path></svg>
                                    </el-button>
                                    </template>
                                </el-popover>
                        
                            </template>
                    </el-table-column>
                    
                </el-table>
    </div>
    <!-- 各类弹窗 -->
    <el-dialog
        v-model="del.show"
        width="20%"
        
        >
        <div><h6><svg t="1636622032894" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3981" width="25" height="25"><path d="M1001.661867 796.544c48.896 84.906667 7.68 157.013333-87.552 157.013333H110.781867c-97.834667 0-139.050667-69.504-90.112-157.013333l401.664-666.88c48.896-87.552 128.725333-87.552 177.664 0l401.664 666.88zM479.165867 296.533333v341.333334a32 32 0 1 0 64 0v-341.333334a32 32 0 1 0-64 0z m0 469.333334v42.666666a32 32 0 1 0 64 0v-42.666666a32 32 0 1 0-64 0z" fill="#FAAD14" p-id="3982"></path></svg>&nbsp;&nbsp;&nbsp;&nbsp;警告&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6></div>
        <hr style="color:#C0C0C0">
        <div>是否删除--{{del.content.group}}--{{del.content.content}}</div>
        <div style="margin-top:30px;margin-left:150px">
                <span class="dialog-footer">
                    <el-button  @click="deleno()">取 消</el-button>
                    <el-button  type="primary" @click="deleyes()">确 定</el-button>
                </span>
            </div>
    </el-dialog>

    <!-- add -->
    <el-dialog
        v-model="add.show"
        width="30%"
        
        
        >
            <div><h6>添加项目</h6></div>
            <hr style="color:#C0C0C0">
                <!-- <div  style="margin-top:50px;display:flex">
                <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">项目归属：</h6> 
                <div style="margin-left:100px">
                    <div style="width:200px">
                        <el-select v-model="add.group" size="small" placeholder="请选择">
                        <el-option
                        v-for="item in add.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    </div>
                </div>
            </div> -->
            <div   style="margin-top:10px;display:flex">
                <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">项目归属：</h6> 
                <div style="margin-left:100px"><el-input v-model="add.group"  placeholder="项目归属"></el-input></div>
            </div>
            <div   style="margin-top:10px;display:flex">
                <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">项目名称：</h6> 
                <div style="margin-left:100px"><el-input v-model="add.name"  placeholder="项目名称"></el-input></div>
            </div>
                <!-- <div  style="margin-top:10px;display:flex">
                <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">项目id：</h6> 
                <div style="margin-left:118px"><el-input v-model="add.number" size="small" placeholder="项目id"></el-input></div>
            </div> -->
                <div style="margin-top:100px;margin-left:300px">
                    <span class="dialog-footer">
                        <el-button  @click="addsno()">取 消</el-button>
                        <el-button  type="primary" @click="addsyes()">确 定</el-button>
                    </span>
                </div>
    </el-dialog>
    <!-- edit -->
    <el-dialog
                v-model="edit1.show"
                width="30%"
               
                >
                <div><h6 style="min-height:20px">编辑项目</h6></div>
                <hr style="color:#C0C0C0">
                 <div style="margin-top:50px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">项目归属：</h6> 
                    <div style="margin-left:100px">
                        <div style="width:200px">
                            <el-select v-model="edit1.content.group" size="small" placeholder="请选择">
                            <el-option
                            v-for="item in edit1.options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            >
                            </el-option>
                        </el-select>
                        </div>
                    </div>
                </div>
                 <div style="margin-top:10px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">项目名称：</h6> 
                    <div style="margin-left:100px"><el-input v-model="edit1.content.content" ></el-input></div>
                </div>
                 <!-- <div  style="margin-top:10px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">项目编号：</h6> 
                    <div style="margin-left:100px"><el-input v-model="edit1.content.number" size="small" ></el-input></div>
                </div> -->
                    <div style="margin-top:100px;margin-left:300px">
                        <span class="dialog-footer">
                            <el-button  @click="editsno()">取 消</el-button>
                            <el-button type="primary" @click="editsyes()">确 定</el-button>
                        </span>
                    </div>
             </el-dialog>
   
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
            input:"",
            tableData1:[

            ],
            del:{
                content:{},
                show:false
            },
            add:{
                content:{},
                show:false,
                group:"",
                name:"",
                number:"",
                options:[

                ]
            },
            edit1:{
                content:{},
                show:false,
                group:"",
                name:"",
                number:"",
                options:[
                   
                ]
            }
        }
    },
    methods:{
        dele(row){
            this.del.show=true
            this.del.content=row
            // console.log(row);
        },
        deleno(){
            this.del.show=false
            this.del.content={}
        },
        deleyes(){
            hpaxios("/api/v1/CostStatistics/",{config_type:"project",edit_type:"del",group:this.del.content.group,project:this.del.content.content})
            .then(res => {
                if(res.data.msg){
                    ElMessage.warning({
                    message:res.data.msg ,
                    type: 'warning',
                })
                }
                else{
                    this.get_p_m()
                    ElMessage.success({
                    message: '项目删除成功',
                    type: 'success',
                })  
                    this.del.show=false
                }
            })
        },
        adds(){
            this.add.show=true
        },
        addsno(){
            this.add.show=false
        },
        addsyes(){
            hpaxios("/api/v1/CostStatistics/",{config_type:"project",edit_type:"add",group:this.add.group,project:this.add.name})
            .then(res => {
                if(res.data.msg){
                     ElMessage.warning({
                        message:res.data.msg ,
                        type: 'warning',
                    })
                    this.add.name=""
                    this.add.group=""
                }
                else{
                    this.get_p_m()
                    ElMessage.success({
                    message: '项目添加成功',
                    type: 'success',
                })
                    this.add.show=false
                    // this.add.name=""
                    // this.add.group=""
                }
            })
        },
        edits(row){
            this.edit1.show=true
            this.edit1.content=row
            // console.log(row);
        },
        editsno(){
            this.edit1.show=false
        },
        editsyes(){
            this.edit1.show=false
        },
        get_p_m(){
            axios({
                url: '/api/v1/CostStatistics/',
                method:'get',
                params:{
                       
                    }
                }).then(res => {
                    var count = 0
                    var project = res.data.data.project
                    var lis = []
                    // console.log(project);
                    for (var i in project){
                        for (var info in project[i]){
                            count = count + 1
                            lis.push(
                                {
                                    id:count,
                                    group:i,
                                    content:project[i][info]
                                }
                            )
                        }
                    }
                    this.tableData1=lis
                    
                })
        },
        inputchange(){
            if(this.input){
                var lis=[]
                var data = this.tableData1
                for (var item in data){
                    
                    if (data[item]['content'].indexOf(this.input) != -1 || data[item]['group'].indexOf(this.input) != -1) {
                        lis.push(data[item])
                    }
                }
                this.tableData1 = lis
            }
            else{
                this.get_p_m()
            }
        }
    },
    mounted(){
        this.get_p_m()
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
  background-color: #ecf5ff;
  outline: 0;
}
.input{
    width:100px
}
.tablegroup{
    font-size:14px;
    margin:0px
}
</style>