
  
<template>
  <!-- <el-button @click="check()">11</el-button> -->
    <div class="content">
       <div style="margin: 20px;">
        <div style="display:flex;">
          <el-card class="box-card" style="flex:0 0 100%">
            <template #header>
              <div class="card-header" style="background-color: white;">
                <span>配置发送内容</span>
                <el-button @click="push()" size="small" type="primary">发送邮件</el-button>
              </div>
            </template>
            <div style="display:flex;flex-direction: column;float: left;">
              
                <div >
                    <div style="margin-left:10px;float: left;">
                  <input type="file" placeholder="选择excel" multiple @change="riverConfigImportexcel"/>
                  <!-- <input type="file" placeholder="选择png" multiple @change="riverConfigImportimg"/> -->
                    </div>
                </div>
                <div>
                    <div style="float: left;">
                    <el-select filterable v-model="data_set.project_value" class="m-2" placeholder="请选择项目" @click="projectchange()">
                        <el-option
                        v-for="item in data_set.project_options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                  </el-select>
                </div>
                </div>
                <div style="margin-left:9px">
                    <el-input style="width: 777px;" v-model="data_set.projectinput1" placeholder="请输入标题">
                        <template #prepend>title</template>
                    </el-input>
                </div>
                <div style="margin-left:9px;margin-top:10px;margin-bottom: 20px;">
                    <el-input type="textarea" style="width: 777px;" v-model="data_set.projectinput2" placeholder="请输入内容">
                        <template #prepend>text</template>
                    </el-input>
                </div>
             
            </div>
          </el-card>
        </div>
        <!-- <el-button @click="set_time();exportPNG();push()" size="small" type="primary">导出PNG</el-button>
        
        <el-button @click="log();set_time()" >查看内容</el-button> -->
        <div id="main-charts">
          <div id="app" style="margin-top:20px">
            <ckeditor :editor="data_set.editor" @ready="onReady" v-model="data_set.editorData" :config="data_set.editorConfig"></ckeditor>
           </div>
        </div>
       </div>
    </div>
  </template>
  
  <script lang="ts" setup>
    // 引入插件
    import html2canvas from 'html2canvas';
  
    import { reactive, toRefs } from '@vue/reactivity'
    import ClassicEditor from 'ckeditor5-custom-build-xi';
    import {hpaxios} from "../../utils/request.js"
    import {hgaxios as axios} from "../../utils/request"
    import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn';

    import { ElMessage,ElMessageBox } from 'element-plus'
    import { log } from 'console';
  
    
    const data_set = reactive(
      {
        editorData:'<figure class="table" style="width:1000px;"><table><tbody><tr><td style="padding:5px;width:200px;"><p style="margin-left:40px;"><strong>需求名称</strong></p></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;width:200px;"><p style="margin-left:40px;"><strong>测试时间</strong></p></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="padding:5px;width:200px;"><p style="margin-left:40px;"><strong>版本号</strong></p></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;width:200px;"><p style="margin-left:40px;"><strong>测试阶段</strong></p></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="padding:5px;width:200px;"><p style="margin-left:40px;"><strong>测试类型</strong></p></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;width:200px;"><p style="margin-left:40px;"><strong>测试结果</strong></p></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="padding:5px;width:200px;"><p style="margin-left:40px;"><strong>测试人员</strong></p></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;width:200px;"><p style="margin-left:40px;"><strong>附带文件</strong></p></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="width:200px;"><p style="margin-left:40px;"><strong>测试范围</strong></p></td><td style="height:100px;padding:20px;width:700px;" colspan="3">&nbsp;</td></tr><tr><td style="width:200px;"><p style="margin-left:40px;"><strong>问题汇总</strong></p></td><td style="height:100px;padding:20px;width:700px;" colspan="3">&nbsp;</td></tr></tbody></table></figure><p>&nbsp;</p>',
        // editorData:'<figure class="table" style="width:1000px;"><table><tbody><tr><td style="width:200px;"><p style="margin-left:40px;"><strong>需求名称</strong></p></td><td style="text-align:center;width:700px;">&nbsp;</td><td style="width:200px;"><p style="margin-left:40px;"><strong>测试时间</strong></p></td><td style="text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="width:200px;"><p style="margin-left:40px;"><strong>版本号</strong></p></td><td style="text-align:center;width:700px;">&nbsp;</td><td style="width:200px;"><p style="margin-left:40px;"><strong>测试阶段</strong></p></td><td style="text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="width:200px;"><p style="margin-left:40px;"><strong>测试类型</strong></p></td><td style="text-align:center;width:700px;">&nbsp;</td><td style="width:200px;"><p style="margin-left:40px;"><strong>测试结果</strong></p></td><td style="text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="width:200px;"><p style="margin-left:40px;"><strong>测试人员</strong></p></td><td style="text-align:center;width:700px;">&nbsp;</td><td style="width:200px;"><p style="margin-left:40px;"><strong>附带文件</strong></p></td><td style="text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="width:200px;"><p style="margin-left:40px;"><strong>测试范围</strong></p></td><td style="height:100px;padding:20px;width:700px;" colspan="3">&nbsp;</td></tr><tr><td style="width:200px;"><p style="margin-left:40px;"><strong>问题汇总</strong></p></td><td style="height:300px;padding:20px;width:700px;" colspan="3">&nbsp;</td></tr></tbody></table></figure><p>&nbsp;</p>',
        // editorData:'<figure class="table"><table><tbody><tr><td style="width:200px;"><p style="margin-left:40px;"><strong>需求名称</strong></p></td><td style="text-align:center;width:700px;">&nbsp;</td><td style="width:200px;"><p style="margin-left:40px;"><strong>测试时间</strong></p></td><td style="text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="width:200px;"><p style="margin-left:40px;"><strong>版本号</strong></p></td><td style="text-align:center;width:700px;">&nbsp;</td><td style="width:200px;"><p style="margin-left:40px;"><strong>测试阶段</strong></p></td><td style="text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="width:200px;"><p style="margin-left:40px;"><strong>测试类型</strong></p></td><td style="text-align:center;width:700px;">&nbsp;</td><td style="width:200px;"><p style="margin-left:40px;"><strong>测试结果</strong></p></td><td style="text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="width:200px;"><p style="margin-left:40px;"><strong>测试人员</strong></p></td><td style="text-align:center;width:700px;">&nbsp;</td><td style="width:200px;"><p style="margin-left:40px;"><strong>附带文件</strong></p></td><td style="text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="width:200px;"><p style="margin-left:40px;"><strong>测试范围</strong></p></td><td style="height:100px;width:700px;" colspan="3">&nbsp;</td></tr><tr><td style="width:200px;"><p style="margin-left:40px;"><strong>问题汇总</strong></p></td><td style="height:300px;width:700px;" colspan="3">&nbsp;</td></tr></tbody></table></figure>',
        // editorData:'<figure class="table"><table><tbody><tr><td><span class="text-big"><strong>需求名称</strong></span></td><td>快手渠道接入测试需求</td><td><span class="text-big"><strong>测试时间</strong></span></td><td>2011/11/3</td></tr><tr><td><span class="text-big"><strong>版本号</strong></span></td><td>-</td><td><span class="text-big"><strong>测试阶段</strong></span></td><td>demo测试</td></tr><tr><td><span class="text-big"><strong>测试类型</strong></span></td><td>探索性测试</td><td><span class="text-big"><strong>测试结果</strong></span></td><td><span style="background-color:rgb(255,255,255);color:rgb(255,0,0);">测试未通过</span></td></tr><tr><td><span class="text-big"><strong>测试人员</strong></span></td><td>李浩</td><td><span class="text-big"><strong>附带文件</strong></span></td><td>-</td></tr><tr><td><span class="text-big"><strong>测试范围</strong></span></td><td colspan="3"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">1.基础注册登录</span><br><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">2.激励广告</span><br><span style="color:#ff0000;">ps:由于没有相应文档，测试采取盲测，探索性测试，bug如有歧义告知QA后，关闭即可</span></td></tr><tr><td><span class="text-big"><strong>问题汇总</strong></span></td><td colspan="3"><br>【ID1009895】【快手渠道测试 DEMO】【登录】 弹出登录界面后点击“《用户协议》”会直接登录游戏，且未能打开用户协议（未解决）<br>【ID1009898】【快手渠道测试 DEMO】【登录】用户未点击（未同意）自动登录的情况下杀进程重进游戏，账号会自动登录且无提示（已解决）<br>【ID1009899】【快手渠道测试 DEMO】【登录】用户登录后在个人中心内点击切换账号后游戏闪退（未解决）<br>【ID1009900】【快手渠道测试 DEMO】【登录】 个人中心内点击切换账号不能成功退出原有账号，不能重新弹出账号登陆界面（未解决）<br>【ID1009910】【快手渠道测试 DEMO】【个人中心】用户中心功能不完善（设计如此请忽略）（未解决）<br>【ID1009915】【快手渠道测试 DEMO】【登录】未成年人在非节假日时间注册登录被T出DEMO后重新进入DEMO，个人中心显示为游客正常登录状态且可以获得广告奖励（未解决）</td></tr></tbody></table></figure>',
        // editorData:'<figure class="table"><table><tbody><tr><td><span class="text-big"><strong>需求名称</strong></span></td><td><p>&nbsp;</p></td><td><span class="text-big"><strong>测试时间</strong></span></td><td>&nbsp;</td></tr><tr><td><span class="text-big"><strong>版本号</strong></span></td><td><p>&nbsp;</p></td><td><span class="text-big"><strong>测试阶段</strong></span></td><td>&nbsp;</td></tr><tr><td><span class="text-big"><strong>测试类型</strong></span></td><td><p>&nbsp;</p></td><td><span class="text-big"><strong>测试结果</strong></span></td><td>&nbsp;</td></tr><tr><td><span class="text-big"><strong>测试人员</strong></span></td><td><p>&nbsp;</p></td><td><span class="text-big"><strong>附带文件</strong></span></td><td>&nbsp;</td></tr><tr><td><span class="text-big"><strong>测试范围</strong></span></td><td colspan="3"><p>&nbsp;</p></td></tr><tr><td><span class="text-big"><strong>问题汇总</strong></span></td><td colspan="3"><p>&nbsp;</p></td></tr></tbody></table></figure>',
        // editorData:'<figure class="table"><table><tbody><tr><td><strong>需求名称</strong></td><td>&nbsp;</td><td><strong>测试时间</strong></td><td>&nbsp;</td></tr><tr><td><strong>版本号</strong></td><td>&nbsp;</td><td><strong>测试阶段</strong></td><td>&nbsp;</td></tr><tr><td><strong>测试类型</strong></td><td>&nbsp;</td><td><strong>测试结果</strong></td><td>&nbsp;</td></tr><tr><td><strong>测试人员</strong></td><td>&nbsp;</td><td><strong>附带文件</strong></td><td>&nbsp;</td></tr><tr><td><strong>测试范围</strong></td><td colspan="3">&nbsp;</td></tr><tr><td><strong>问题汇总</strong></td><td colspan="3">&nbsp;</td></tr></tbody></table></figure>',
        editor: ClassicEditor,
        editorConfig: {
          fontSize: {
            options: [
                  9,
                  11,
                  13,
                  'default',
                  17,
                  19,
                  21,
                  30
              ]
          },
          fontFamily: {
              options: [
                  "Microsoft YaHei",
                  
                  "STKaiti",
                  "STHeiti",
                  "STSong"
              ]
          },
          language:"zh-cn"
              // The configuration of the editor.
          },
        datetime:"",
        excel:{},
        img:{},
        log:{},
        projectinput1:"",
        projectinput2:"",
        project_value:"",
        project_options:[
            {
                value:"test",
                label:"test"
            }
        ]
      }
    )
    function projectchange(){
        axios({
            url: '/api/v1/EmailConfig/',
            method:'get',
            })
            .then(res => {
                data_set.project_options=[]
                console.log(res.data.data.projects);
                for(var i in res.data.data.projects){
                    data_set.project_options.push(
                        {
                            value:i,
                            label:i
                        }
                    )
                    
                }
            })
    }

    function onReady(editor) {
        editor.ui
          .getEditableElement()
          .parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
          );
      }
    
    
  
   function push(){
      if(data_set.excel[0] == undefined){
        ElMessageBox.confirm(
          '是否不携带附件发送',
          '发送邮件',
          {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
          }
        )
        .then(() => {
            const formData = new FormData();
            formData.append("html",data_set.editorData)
            formData.append("report","")
            formData.append("project",data_set.project_value)
            formData.append("title",data_set.projectinput1)
            formData.append("text",data_set.projectinput2)
            let config = {
              headers:{'Content-Type':'multipart/form-data'}
            }
            ElMessage(
            '开始发送发送邮件，请稍等'
            )
            hpaxios('http://10.0.22.242:8081/api/v1/SendReportEmail/', formData, config)
            .then(res => {
                console.log(11111,res);
                console.log(1111111,res.data);
                data_set.log = res
                if(res.data.msg != "发送邮件成功"){
                    console.log("1111111111111");
                    
          
                    ElMessage.error(res.data.msg)
                }
                
                if (res.data.msg == "发送邮件成功"){
                    ElMessage({
                        message: '发送邮件成功',
                        type: 'success',
                    })
                }
            })
        })
        .catch(() => {
          
          
        })
      }else{
        const formData = new FormData();
      formData.append("html",data_set.editorData)
      formData.append("report",data_set.excel[0])
      formData.append("project",data_set.project_value)
      formData.append("title",data_set.projectinput1)
      formData.append("text",data_set.projectinput2)
      let config = {
        headers:{'Content-Type':'multipart/form-data'}
      }
      ElMessage(
      '开始发送发送邮件，请稍等'
      )
      hpaxios('http://10.0.22.242:8081/api/v1/SendReportEmail/', formData, config)
      .then(res => {
          console.log(11111,res);
          console.log(1111111,res.data);
          data_set.log = res
          if(res.data.msg != "发送邮件成功"){
              console.log("1111111111111");
              
    
              ElMessage.error(res.data.msg)
          }
          
          if (res.data.msg == "发送邮件成功"){
              ElMessage({
                  message: '发送邮件成功',
                  type: 'success',
              })
          }
      })
      }
   }
   
  
   function riverConfigImportexcel(event){
    data_set.excel={}
    data_set.excel = event.target.files
   }
  //  function riverConfigImportimg(event){
  //   console.log(event.target.files[0]);
  //   data_set.img = event.target.files[
  //   console.log(data_set.img[0]);
    
    
  //  }
  function check(){
    
   console.log(data_set.editorData);
   
  }
  </script>
  <style>
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