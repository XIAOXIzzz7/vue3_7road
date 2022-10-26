
  
<template>
  <div class="content">
    
      <el-button @click="set_time();exportPNG();push()" size="small" type="primary">导出PNG</el-button>
      <el-button @click="log();set_time()" >查看内容</el-button>
      <div id="main-charts">
        <div>
          <input type="file" placeholder="选择excel" multiple @change="riverConfigImportexcel"/>
          <!-- <input type="file" placeholder="选择png" multiple @change="riverConfigImportimg"/> -->
        </div>
        <div id="app">
          <ckeditor :editor="data_set.editor" @ready="onReady" v-model="data_set.editorData" :config="data_set.editorConfig"></ckeditor>
         </div>
      </div>
  </div>
  </template>

<script lang="ts" setup>
  // 引入插件
  import html2canvas from 'html2canvas';

  import { reactive, toRefs } from '@vue/reactivity'
  import ClassicEditor from '@ckeditor/ckeditor5-build-decoupled-document';

  import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn';
  import axios from 'axios';


  
  const data_set = reactive(
    {
      editorData:"",
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
        table: {
            contentToolbar: [
                'tableColumn', 'tableRow', 'mergeTableCells',
                'tableProperties', 'tableCellProperties'
            ],

            // Configuration of the TableProperties plugin.
            tableProperties: {
                // ...
            },

            // Configuration of the TableCellProperties plugin.
            tableCellProperties: {
                // ...
            }
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
      img:{}
    }
  )
  function log(){
    console.log(data_set.editorData);
    
  }
  function onReady(editor) {
      editor.ui
        .getEditableElement()
        .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        );
    }
  
  

  // data_set.editor.execute( 'textPartLanguage', { languageCode: 'es' } );
  // 导出png
  
  const exportPNG = () => {
    const ele: HTMLElement | null = document.getElementById('main-charts');
    html2canvas(ele as HTMLElement).then((canvas: any) => {
      const contentWidth = canvas.width;
      const contentHeight = canvas.height;
      const ctx: any = canvas.getContext('2d');
      // 添加水印
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.rotate((25 * Math.PI) / 180);
      ctx.font = '20px Microsoft Yahei';
      ctx.fillStyle = 'rgba(184, 184, 184, 0.8)';
      // for (let i = contentWidth * -1; i < contentWidth; i += 240) {
    //     for (let j = contentHeight * -1; j < contentHeight; j += 100) {
    //       // 填充文字，x 间距, y 间距
    //       ctx.fillText('水印名', i, j);
    //     }
    //   }
      const imgUrl = canvas.toDataURL('image/png');
      const tempLink = document.createElement('a'); // 创建一个a标签
      tempLink.style.display = 'none';
      tempLink.href = imgUrl;
      tempLink.setAttribute('download', data_set.datetime+'测试结果'); // 给a标签添加下载属性
      if (typeof tempLink.download === 'undefined') {
        tempLink.setAttribute('target', '_blank');
      }
      document.body.appendChild(tempLink); // 将a标签添加到body当中
      tempLink.click(); // 启动下载
      document.body.removeChild(tempLink); // 下载完毕删除a标签
      window.URL.revokeObjectURL(imgUrl);
    })
  }
  function set_time(){
    let nowDate = new Date()
    let date = {
      year: nowDate.getFullYear(),
      month: nowDate.getMonth() + 1,
      date: nowDate.getDate(),
      second:nowDate.getSeconds(),
    }
    var datetime = date.year + '-' + date.month + '-' + date.date + '-' + date.second
    
    data_set.datetime = datetime
    console.log(data_set.datetime);
  }

 function push(){

  const formData = new FormData();
  formData.append("html",data_set.editorData)
  formData.append("report",data_set.excel[0])
  formData.append("project","test")
  formData.append("title","test")
  formData.append("text","test")
  let config = {
    headers:{'Content-Type':'multipart/form-data'}
  }
  axios.post('http://10.0.22.242:8081/api/v1/SendReportEmail/', formData, config)
 }

 function riverConfigImportexcel(event){
  console.log(event.target.files[0]);
  data_set.excel = event.target.files
  console.log(data_set.excel[0]);
  
 }
//  function riverConfigImportimg(event){
//   console.log(event.target.files[0]);
//   data_set.img = event.target.files[
//   console.log(data_set.img[0]);
  
  
//  }
</script>