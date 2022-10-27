<template>
    <div style="margin:0px 20px 20px 20px;">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="查询组" name="first" style="display:flex ;">
                <el-card class="box-card" style="width: 100%;">
                    <template #header>
                    <div class="card-header" style="display: flex;background-color: white;" >
                        <span style="font-size:17px">
                            查看组下成员
                        </span>
                        <div>
                            <el-select v-model="data_set.check_value" class="m-2" placeholder="Select" @click="check_select()">
                                <el-option
                                v-for="item in data_set.check_options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                />
                            </el-select>
                            <el-button type="primary" plain @click="check_mem()">查看</el-button>
                            <el-button type="primary" plain>提交</el-button>
                        </div>
                    </div>
                    </template>
                    <div style="display: flex">
                        <div style="flex:0 0 49%;padding-right:20px;">
                            <el-tag class="ml-2" style="float:left;margin-left:20px;width:100px;margin-bottom:20px" type="success">发送人</el-tag>
                            <el-divider content-position="left" style="margin-top:50px">receivers</el-divider>
                            <el-alert style="margin-bottom:10px" title="success alert" v-for="i in 5" type="success" @close="alert_success_close(i)"/>
                            
                            <!-- <h5 style="font-family:LiSong Pro Light;font-size:17px;text-align: left;margin-left: 20px;">发送人</h5> -->
                        </div>
                        <div style="flex:0 0 1%;border-left:1px solid #000">

                        </div>
                        <div style="flex:0 0 49%;">
                            <el-tag class="ml-2" style="float:left;margin-left:20px;width:100px;" type="warning">抄送人</el-tag>
                            <el-divider content-position="left" style="margin-top:50px">cc_receivers</el-divider>
                            <el-alert style="margin-bottom:10px" title="success alert" v-for="i in 5" type="warning" @close="alert_success_close(i)"/>
                            <!-- <h5 style="font-family:LiSong Pro Light;font-size:17px;text-align: left;margin-left: 20px;">抄送人</h5> -->
                        </div>
                    </div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="新增组" name="second">

            </el-tab-pane>
         
        </el-tabs>
    </div>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'
  import type { TabsPaneContext } from 'element-plus'
  import {hpaxios} from "../../utils/request.js"
import {hgaxios as axios} from "../../utils/request"
  import { reactive, toRefs } from '@vue/reactivity'

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
        check_res:[]
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
                for(var i in res.data.data.projects){
                    data_set.check_options.push(
                        {
                            value:i,
                            label:i
                        }
                    )
                    
                }
            })
  }
  function check_mem(){

  }
  function alert_success_close(res){
    console.log("close",res);
    
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

</style>
  