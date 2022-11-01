<template>
    <el-button @click="check()">1</el-button>
    <div style="margin:0px 20px 20px 20px;">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="邮件发送配置" name="first" style="display:flex ;">
                <el-card class="box-card" style="width: 100%;">
                    <template #header>
                    <div class="card-header" style="display: flex;background-color: white;" >          
                        <div>
                            <span style="font-size:17px">
                                查看项目下成员
                            </span>
                            <el-tag
                                v-if="data_set.check_value!=''"
                                class="mx-1"
                                closable
                                type="success"
                                @close="group_delete()"
                            >
                                {{data_set.check_value}}
                            </el-tag>
                        </div>
                        <div style="display:flex;flex-direction:column">
                            <el-select filterable style="width:250px;margin:0px 0px 0px 0px;" v-model="data_set.check_value" class="m-2" placeholder="查询组项目下成员" @change="check_select()">
                                <el-option
                                v-for="item in data_set.check_options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                />
                            </el-select>

                            <el-input style="width:250px;margin:0px 0px 0px 8px;" v-model="data_set.project_input" placeholder="组名">
                                <template #append>
                                    <el-button @click="project_add()">新增项目</el-button>
                                </template>
                            </el-input>
                            <!-- <el-button type="primary" plain @click="check_mem()">查看</el-button> -->
                            <!-- <el-button type="primary" plain @click="up()">提交</el-button> -->
                        </div>
                    </div>
                    </template>
                    <div style="display: flex">
                        <div style="flex:0 0 49%;padding-right:20px;">
                            <div style="display: flex;flex-direction: column;">
                                <el-tag class="ml-2" style="float:left;width:100px" type="success">接收人</el-tag>
                                <el-input v-if="data_set.check_value!=''" :disabled="data_set.check_value==''" style="width:300px;margin:20px 0px 0px 0px;" v-model="data_set.receivers_input" placeholder="Please input">
                                    <template #append>
                                        <el-button :disabled="data_set.check_value==''" @click="receivers_add()">新增接收人</el-button>
                                    </template>
                                </el-input>
                            </div>
                            <el-divider content-position="left" style="margin-top:30px">receivers</el-divider>
                            <el-alert v-if="data_set.receivers!=null" style="margin-bottom:10px;height:60px;" v-for="i in data_set.receivers.length" type="success" :closable="false">
                                <div style="display:flex;align-content:space-between;">
                                    <h5 style="flex:0 0 90% ;font-size: 18px;">{{data_set.receivers[i -1]}}</h5>
                                    <h5 style="flex: 0 0 10%;font-size: 16px;color: #8f8e8c;cursor:pointer;text-align: right;" @click="alert_success_close(i-1)">×</h5>
                                </div>
                            </el-alert>
                            <div style="font-size:17px" v-if="data_set.check_value!='' && data_set.receivers.length==0">该组当前没有发送人</div>
                           
                        </div>
                        <div style="flex:0 0 1%;border-left:1px solid #000">

                        </div>
                        <div style="flex:0 0 49%;">
                            <div style="display: flex;flex-direction: column;">
                                <el-tag class="ml-2" style="float:left;margin-left:20px;width:100px;" type="warning">抄送人</el-tag>
                                <el-input v-if="data_set.check_value!=''" :disabled="data_set.check_value==''" style="width:300px;margin:20px 0px 0px 0px;" v-model="data_set.cc_receivers_input" placeholder="Please input">
                                    <template #append>
                                        <el-button :disabled="data_set.check_value==''" @click="cc_receivers_add()">新增抄送人</el-button>
                                    </template>
                                </el-input>
                            </div>
                            
                            <el-divider content-position="left" style="margin-top:30px">cc_receivers</el-divider>
                            <el-alert v-if="data_set.cc_receivers!=null" style="margin-bottom:10px;height:60px;" v-for="i in data_set.cc_receivers.length" type="warning" :closable="false">
                                <div style="display:flex;align-content:space-between;">
                                    <h5 style="flex:0 0 90% ;font-size: 18px;">{{data_set.cc_receivers[i -1]}}</h5>
                                    <h5 style="flex: 0 0 10%;font-size: 16px;color: #8f8e8c;cursor:pointer;text-align: right;" @click="alert_warning_close(i-1)">×</h5>
                                </div>
                            </el-alert>
                            <div style="font-size:17px" v-if="data_set.check_value!='' && data_set.cc_receivers.length==0">该组当前没有抄送人</div>
                        </div>
                    </div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="页面2" name="second">

            </el-tab-pane>
         
        </el-tabs>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref,onMounted } from 'vue'
    import type { TabsPaneContext } from 'element-plus'
    import {hpaxios} from "../../utils/request.js"
    import {hgaxios as axios} from "../../utils/request"
    import { reactive, toRefs } from '@vue/reactivity'
    import { log } from 'console'
    import { range } from 'lodash'
    import { ElMessage,ElMessageBox } from 'element-plus'
    import {hdaxios} from "../../utils/request"
    import type { Action } from 'element-plus'

    const activeName = ref('first')
    const data_set = reactive(
    {
        check_value:"",
        check_options:[
            {
                value:"test",
                label:"test"
            }
        ],
        check_res:[],
        cc_receivers:[] as Array<string>,
        receivers:[] as Array<string>,
        receivers_input:"",
        cc_receivers_input:"",
        project_input:""
    }
  )
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
  }
  function check_select(){
    axios({
            url: '/api/v1/EmailConfig/',
            method:'get',
            })
            .then(res => {
                data_set.check_options=[]
                data_set.check_res = res.data.data.projects
                data_set.cc_receivers = res.data.data.projects[data_set.check_value].cc_receivers
                data_set.receivers = res.data.data.projects[data_set.check_value].receivers
                for(var i in res.data.data.projects){
                    data_set.check_options.push(
                        {
                            value:i,
                            label:i
                        }
                    )
                    
                }
            })
    console.log(data_set.check_value);
    
  }

    function alert_success_close(res){
        
        var data = data_set.receivers[res]
        data_set.receivers.splice(res,1)
        hdaxios("/api/v1/EmailConfig/",{
                data:{
                    project:data_set.check_value,
                    receivers:[data],
                    cc_receivers:["1"] as Array<string>,
                    type:"receivers"
                    }
            })
                .then(res => {
                    if (res.data.msg=="删除配置成功"){
                        ElMessage({
                        message: res.data.msg,
                        type: 'success',
                    })
                    }
                    else{
                        ElMessage.error("删除配置失败")
                    }
                    
                })
        
    }
    function alert_warning_close(res){
        var data = data_set.cc_receivers[res]
        data_set.cc_receivers.splice(res,1)
        hdaxios("/api/v1/EmailConfig/",{
                data:{
                    project:data_set.check_value,
                    receivers:["1"] as Array<string>,
                    cc_receivers:[data],
                    type:"receivers"
                    }
            })
                .then(res => {
                    if (res.data.msg=="删除配置成功"){
                        ElMessage({
                        message: res.data.msg,
                        type: 'success',
                    })
                    }
                    else{
                        ElMessage.error("删除配置失败")
                    }
                    
                })
        
    }
    onMounted(()=>{
        axios({
            url: '/api/v1/EmailConfig/',
            method:'get',
            })
            .then(res => {
                data_set.check_options=[]
                data_set.check_res = res.data.data.projects
                for(var i in res.data.data.projects){
                    data_set.check_options.push(
                        {
                            value:i,
                            label:i
                        }
                    )
                    
                }
            })
        })
    function receivers_add(){
       
        if(data_set.receivers_input != ""){
            if (data_set.receivers == null){
            data_set.receivers = []
        }
        if (data_set.cc_receivers == null){
            data_set.cc_receivers = []
        }
        console.log(data_set.receivers);
        data_set.receivers.push(
            data_set.receivers_input
        )
        data_set.receivers_input=""
        hpaxios("/api/v1/EmailConfig/",{
                    project:data_set.check_value,
                    receivers:data_set.receivers,
                    cc_receivers:data_set.cc_receivers
            
                })
                .then(res => {
                    if (res.data.msg=="新增收件人成功"){
                        ElMessage({
                        message: res.data.msg,
                        type: 'success',
                    })
                    }
                    else{
                        ElMessage.error("新增收件人失败")
                    }
                })
        }
        
        
        
    }
    function cc_receivers_add(){
        if(data_set.cc_receivers_input != ""){
            if (data_set.receivers == null){
            data_set.receivers = []
        }
        if (data_set.cc_receivers == null){
            data_set.cc_receivers = []
        }
        data_set.cc_receivers.push(
            data_set.cc_receivers_input
        )
        data_set.cc_receivers_input=""
        hpaxios("/api/v1/EmailConfig/",{
                    project:data_set.check_value,
                    receivers:data_set.receivers,
                    cc_receivers:data_set.cc_receivers
            
                })
                .then(res => {
                    if (res.data.msg=="新增收件人成功"){
                        ElMessage({
                        message: res.data.msg,
                        type: 'success',
                    })
                    }
                    else{
                        ElMessage.error("新增收件人失败")
                    }
                })
        }
    }
    function project_add(){
        hpaxios("/api/v1/EmailConfig/",{
                    project:data_set.project_input,
                    receivers:[],
                    cc_receivers:[] 
            
                })
                .then(res => {
                    console.log(res.data.msg);
                    
                    if (res.data.msg=="新增项目成功"){
                        ElMessage({
                        message: res.data.msg,
                        type: 'success',
                    })
                    }
                    else{
                        ElMessage.error("新增项目失败")
                    }
                    axios({
                        url: '/api/v1/EmailConfig/',
                        method:'get',
                        })
                        .then(res => {
                            data_set.check_options=[]
                            data_set.check_res = res.data.data.projects
                            for(var i in res.data.data.projects){
                                data_set.check_options.push(
                                    {
                                        value:i,
                                        label:i
                                    }
                                )
                                
                            }
                        })
                    data_set.project_input=""
                })
        
    }
    function group_delete(){
        ElMessageBox.confirm(
            `是否删除项目:'${data_set.check_value}`,
            `删除项目`,
            {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
            }
        )
            .then(() => {
                hdaxios("/api/v1/EmailConfig/",{
                data:{
                    project:data_set.check_value,
                    receivers:[],
                    cc_receivers:[],
                    type:"project"
                    }
                })
                .then(res => {
                    if(res.data.msg == "删除配置成功"){
                        ElMessage({
                        message: res.data.msg,
                        type: 'success',
                    })
                    }
                    else{
                        ElMessage.error("删除项目失败")
                    }
                    data_set.cc_receivers=[]
                    data_set.receivers=[]
                    data_set.check_value=""
                    axios({
                        url: '/api/v1/EmailConfig/',
                        method:'get',
                        })
                        .then(res => {
                            data_set.check_options=[]
                            data_set.check_res = res.data.data.projects
                            for(var i in res.data.data.projects){
                                data_set.check_options.push(
                                    {
                                        value:i,
                                        label:i
                                    }
                                )
                                
                            }
                        })
                })
                
            })
            .catch(() => {
                console.log(2);
                
            })
        
    }
    function check(){
        console.log(data_set.cc_receivers);
        
    }
  </script>
  <style>
  .demo-tabs > .el-tabs__content {
    padding: 10px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
.el-alert__content{
    width: 100%;
}
</style>
  