<template>
<!-- <el-button @click="oo()">test</el-button> -->
<!-- <h5 class="h5title">自动化接口测试</h5> -->
<el-breadcrumb separator="/" style="margin-top:5px">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>测试服务</el-breadcrumb-item>
  <el-breadcrumb-item>接口测试</el-breadcrumb-item>
</el-breadcrumb>
<!-- <div class="border"></div> -->
<div class="background"> 
    
    <div class="master">
    <div style="flex:0 0 100%">
        <div style="text-align:left;margin-top:10px;margin-left:20px">
          <div style="display:flex;flex-direction: row">
            <div style="margin-top:20px;display:flex;">
                <h5 style="margin-top:8px;margin-right:30px;font-size:17px">请选择接口名</h5>
            <div class="block">
              <el-cascader
                v-model="value"
                :options="options"
            
                @change="apichange()"
                placeholder="请选择"
              ></el-cascader>
            </div>
           
            <!-- <el-select v-model="value" @change="test()" placeholder="请选择接口名" >
               <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
               
                >
                </el-option>
             </el-select> -->
            <h5 style="margin-top:8px;margin-right:30px;margin-left:30px;font-size:17px">失败重试次数</h5>
            <el-input
             
              v-model="input1"
              style="width:217px"
              type="number"
              onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)));"
              min="0"
            >
            </el-input>
             <h5 style="margin-top:8px;margin-right:30px;margin-left:30px;font-size:17px">最多错误次数</h5>
            <el-input

              v-model="input2"
              style="width:217px"
              type="number"
              onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)));"
              min="0"
            >
            </el-input>
            <el-button @click="start()" style="text-align:left;margin:0px 0px 0px 30px;height:20px">开始测试</el-button>
            </div>
             
          </div> 
       
        </div>
      
         <!-- <div class="demo-input-suffix" style="margin-top:50px;text-align:left"
         v-for="(item,i,index) in tableData2" :key="item">
         {{i}}
          <el-input
          :placeholder=item
          :v-model="'input'+index"
          style="width:200px"
        >
        </el-input>
        </div> -->
        <div v-if="show" style="margin-top:50px;display:flex;flex-direction: row;margin-top:20px;flex-wrap:wrap">
           <div class="demo-input-suffix" style="margin:10px" v-for="item in formTextList" :key="item">
             <h5 style="width:100px">{{item.title}}</h5><el-input style="width:200px" :placeholder="'请输入'+item.value" v-model="item.value"></el-input>
           </div>
        </div>
    </div>
    
</div>
</div>
</template>
<script>
import {hgaxios as axios} from "../../utils/request"
import {hpaxios} from "../../utils/request"
// import axios from "axios"
import { ElMessage } from 'element-plus'
export default {
    name:'apitest',
    data(){
        return{
            options: [
              {
                label:"全链路",
                value:"全链路",
              }
        ],
        tableData2:{
          appid:"3001",
          datetime:"2021-10-26",
          token:"455559656595"
        },
        formTextList:[
                      ],
        testinfo:[],
        value:[],
        summary:{
          title:"",
          value:""
        },
        jenkinsdata:{},
        input1:0,
        input2:0,
        msg:"",
        show:true
        }
    },
    mounted(){
      this.test()
    },
    watch:{
      value(){
        if(this.value[0] == "全链路"){
          this.show=false
        }
        else{
          this.show=true
        }
      }
    },
    methods:{
      start(){
        console.log(this.value);
        if (this.value[0] == "全链路"){
          hpaxios("/api/v1/JenkinsBuild/",{api_name:"",api_config:"",fail_again:String(this.input1),max_fail:String(this.input2)})
          this.$router.replace({path: '/test/automatic/_apireport'})
          ElMessage.success({
            message: '测试正常运行',
            type: 'success',
          })

        }
        else{
             if (this.value[1] == null){
                ElMessage.warning({
                          message: '请选择测试接口',
                          type: 'warning',
                        })
            }
              else{
                this.$store.state.jenkinsbuild = "1"
                this.ru()
                this.$router.replace({path: '/test/automatic/_apireport'})
                ElMessage.success({
                  message: '测试正常运行',
                  type: 'success',
                })
                }
              
    
        }

      },
      ru(){
        this.lo()
        hpaxios("/api/v1/JenkinsBuild/",{api_name:this.value[1],api_config:JSON.stringify(this.jenkinsdata),fail_again:String(this.input1),max_fail:String(this.input2)})
    },
       lo(){
         var dic = {}
         for(var i in this.formTextList){
           dic[this.formTextList[i]['title']] = this.formTextList[i]["value"]
         }

        this.jenkinsdata = {[this.summary.title]:this.summary.value,"body":dic}
       },
        test(){
        //  var list=[]
        //  var data_now=[]
           axios({
            url: '/api/v1/APIConfig/',
            method:'get',
            params:{
                config:1
                }
            })
            .then(res => {
              
              if (res.data.data){
                 for (var i in res.data.data){
                    var data = {
                        "value": i,
                        "label": i,
                        "children": []
                    }
        
                     for (var second in res.data.data[i]){
                         var data_two = {
                              "value": res.data.data[i][second],
                              "label": res.data.data[i][second],
                          }
                          data["children"].push(data_two)
                 }
                 this.options.push(data)
                // console.log("sdsdsd",res.data.data);
                // for(var first in res.data.data){
                //     var data = {
                //         "value": first,
                //         "label": first,
                //         "children": []
                //     }
                //     for (var second in res.data.data[first]){
                //          var data_two = {
                //               "value": second,
                //               "label": second,
                //               "children": []
                //           }
                //           data["children"].push(data_two)                    
                //           for (var info in data["children"]){                         
                //             if (data_now.indexOf(data['children'][info]) == -1){  
                //               data_now.push(data['children'][info])
                //               for (var i in res.data.data[first][second]){
                //                 console.log(res.data.data[first][second][i]);
                //                   var data_three = {
                //                       "value": res.data.data[first][second][i],
                //                       "label": res.data.data[first][second][i],
                //                   }
                //                   data['children'][info]["children"].push(data_three)
                //             }
                           
                //             }
                //           }
                         
                //     }
                //    list.push(data)
                //    this.options=list
                 
                // }
                
               
                // // this.formTextList=[]
                // // this.formTextList=res.data.data
              }
              }
              else{
                this.formTextList=[]
                 ElMessage.warning({
                    message: '警告，未查找到数据',
                    type: 'warning',
                  })
              } 
            // this.testinfo = list
      
            })

        },
        apichange(){
          if (this.value[0] != "全链路"){
            axios({
            url: '/api/v1/APIConfig/',
            method:'get',
            params:{
                server_name:this.value[0],
                // server_type:this.value[1],
                api_name:this.value[1]
                }
            })
            .then(res => {
              console.log("res",res);
              var infolist =[]
             
              var apiinfo = res.data.data[0]["body"]
              
              for (var i in apiinfo){
                if (i !='sign'){
                  infolist.push({"title":i,"value":apiinfo[i]})
                }
                
              }
              this.formTextList=infolist
          
              this.summary.title = "summary"
              this.summary.value = res.data.data[0]["summary"]
            })
        }
          }
    },
   
}
</script>
<style scoped>
.background{
   
}
.master{
    background-color: #fff;
    min-height: 975px;
    margin-left:10px;
    margin-bottom: 25px;
}
.h5title{
    text-align: left;
    font-size: 15px;
    margin:10px 0px 0px 15px;
    font-weight: normal;
    /* background-color: #f0f2f5; */
}
/* .border{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: 'tnum';
    background: #e8e8e8;
} */
</style>