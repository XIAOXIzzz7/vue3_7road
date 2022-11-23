<template>
    <div style="display: flex;flex-direction: column;">
        <el-button @click="deletelog()" style="float:left;margin:20px;width:200px">delete</el-button>
        <el-button @click="check()" style="float:left;margin:20px;width:200px">check</el-button>
    </div>
    <div v-html="data_set.log" style="text-align:left;padding:20px;">
        
    </div>
  </template>
  
  <script lang="ts" setup>
    import {onMounted} from "vue"
    import { reactive, toRefs } from '@vue/reactivity'
    import {hdaxios} from "../../utils/request"
    import { ElMessage } from 'element-plus'
    import {hgaxios as axios} from "../../utils/request"
    const data_set = reactive(
                        {
                          log:""  
                        }
                    )
    onMounted(()=>{
         check()
                  
        })
    function check(){
        axios({
            url: '/api/v1/EmailLog/',
            method:'get',
            })
            .then(res => {
               data_set.log=res.data.data
              
               
            })
    }
    function deletelog(){
        hdaxios("/api/v1/EmailLog/",{
            })
                .then(res => {
                    console.log(res);
                    ElMessage({
                        message: '删除成功',
                        type: 'success',
                        
                    })
                    check()
                })
    }
   
  </script>
  