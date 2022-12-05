
  
<template>
<el-dialog style="width:70%;" v-model="data_set.dialogTableVisible" title="邮件日志">
          <div style="display: flex;flex-direction: column;">
            <el-button @click="deletelog()" style="float:left;margin:20px;width:200px">清空</el-button>
            <el-button @click="checklog()" style="float:left;margin:20px;width:200px">刷新</el-button>
        </div>
        <div v-html="data_set.log" style="text-align:left;padding:20px;">
            
        </div>
      </el-dialog>
<el-dialog style="width:70%;min-height:700px;" v-model="data_set.dialogTableVisibledraft">
  <template #header="{ close, titleId, titleClass }">
      <div style="float:left;padding:20px;display: flex;">
        <h5 style="font-size:15px;">草稿箱</h5>
      </div>
    </template>
    <el-table :data="data_set.tableDatadraft" style="width: 100%" >
    <el-table-column fixed prop="date" label="时间" min-width="20" />
    <el-table-column prop="title" label="收件组" min-width="30" />
    <el-table-column prop="text" label="标题" min-width="30" />
   
    <el-table-column fixed="right" label="操作" min-width="20">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="pulldraft(scope.row)"
        >
          使用
        </el-button>
        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="deletedraft(scope.row)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
      </el-dialog>
<el-button @click="check()">11</el-button>
  <div class="content">
    <div style="margin: 20px;">
      <div style="display:flex;">
        <el-card class="box-card" style="flex:0 0 100%">
          <template #header>
            <div class="card-header" style="background-color: white;">
              <div style="display:flex;">
                <el-button text disabled>配置发送内容</el-button>
                <el-button text @click="data_set.editorData=data_set.test_issue">
                    渠道测试需求
                </el-button>
                <el-button text @click="data_set.editorData=data_set.SDK">
                  SDK服务端更新
                </el-button>
                <el-button text @click="data_set.editorData=data_set.performance">
                  客户端性能测试
                </el-button>
                <el-button text @click="data_set.editorData=data_set.stage">
                  项目测试阶段报告
                </el-button>
              </div>
              <div>
                <el-button @click="push()" size="small" type="primary">发送邮件</el-button>
                <el-button @click="saveDraft()" size="small" type="primary">存草稿</el-button>
                <el-button @click="draft()" size="small" text type="primary">草稿箱</el-button>
                <el-button @click="log()" size="small" text type="primary">日志</el-button>
              </div>
            </div>
          </template>
          <div style="display:flex;flex-direction: column;float: left;">
            
              <div >
                  <div style="margin-left:10px;float: left;">
                <input type="file" id="fileupload" placeholder="选择excel" multiple @change="riverConfigImportexcel"/>
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
              <div style="margin-left:9px;float:left;margin-bottom: 20px;height: 32px;">
                <input type="text" style="outline-color:#d4d2d2;height: 32px;font-size: 14px;border:1px solid #e0e0e0;width: 777px;float:left;padding-left:8px;" v-model="data_set.projectinput1" placeholder="请输入标题"/>
                  <!-- <el-input autosize type="textarea" style="width: 777px;float:left;" v-model="data_set.projectinput1" placeholder="请输入标题">
                      <template #prepend>title</template>
                  </el-input> -->
              </div>
              <div style="display:flex;margin-left:10px">
                图片插入后点击右下角任意拉一下百分比大小完成自适应，不然图片将使用原生大小
              </div>
              <div style="margin-bottom:20px;margin-left:9px;">
              </div>
          </div>
        </el-card>
      </div>
      
      <div id="main-charts" style="margin-top:20px">
        <el-card class="box-card" style="width: 100%;">
         
          <ckeditor :editor="data_set.editor" @input="ckeditor_change()" @ready="onReady" v-model="data_set.editorData" :config="data_set.editorConfig"></ckeditor>
       
        </el-card>
        
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
    import { ref,onMounted} from 'vue'
    import type { TabsPaneContext } from 'element-plus'
    import { objectEach, objectMap } from 'xe-utils';
    import { List } from 'echarts';
    import {hdaxios} from "../../utils/request"
    
    const data_set = reactive(
      {
        tableDatadraft:[],
        dialogTableVisible:false,
        dialogTableVisibledraft:false,
        textData:"",
        SDK:`<p>Dear all,</p><p><span style="background-color:rgb(255,255,255);color:rgb(51,102,255);">一、服务端更新内容</span></p><p>&nbsp;</p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">二、 影响程度：</span></p><p>&nbsp;</p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">三、 影响的游戏:&nbsp;&nbsp;</span></p><p>&nbsp;</p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">四、更新时间：</span></p><p>&nbsp;</p><p><span style="color:#ff0000;">&nbsp; &nbsp; &nbsp; &nbsp; 请运营同学确认后回复！</span><br><br><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">&nbsp; &nbsp; &nbsp; &nbsp; 以上，如有问题请及时反馈，谢谢！</span></p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>胡俊</p><p>&nbsp; &nbsp; &nbsp; &nbsp; 上海第七大道科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;技术中心</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Mob:&nbsp;+86&nbsp;13524778793</p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span><a href="mailto:jun.hu@7road.com"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">mailto:jun.hu@7road.com</span></a></p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">&nbsp; &nbsp; &nbsp; &nbsp; Add：上海市闵行区合川路3111号2号楼7楼</span></p>`,
        stage:`<p><span style="font-size:30px;"><strong>Dear all,</strong></span></p><p>&nbsp;</p><p>&nbsp;</p><p><span style="background-color:hsl(240,75%,60%);color:hsl(0,0%,100%);font-size:21px;"><strong>一、S6阶段测试情况：</strong></span></p><p>&nbsp;</p><p>&nbsp;</p><p><span style="background-color:hsl(240,75%,60%);color:hsl(0,0%,100%);font-size:21px;"><strong>二、版本控制风险：</strong></span></p><p>&nbsp;</p><p><span style="background-color:hsl(240,75%,60%);color:hsl(0,0%,100%);font-size:21px;"><strong>三、测试详情：</strong></span></p><figure class="table" style="float:left;width:100%;"><table style="background-color:rgb(255, 255, 255);"><tbody><tr><td style="border-bottom-style:none;border-left:1pt solid rgb(189, 215, 238);border-right-style:none;border-top:1pt solid rgb(189, 215, 238);height:20.25pt;padding-left:1px;padding-right:1px;padding-top:1px;text-align:center;width:703pt;" colspan="5">功能专项验收详情如下：</td></tr><tr><td style="background-color:rgb(149, 179, 215);border-bottom:0.5pt solid windowtext;border-left:0.5pt solid windowtext;border-right-style:none;border-top:0.5pt solid windowtext;height:16.5pt;padding-left:1px;padding-right:1px;padding-top:1px;text-align:center;width:162pt;"><strong>测试类型</strong></td><td style="background-color:rgb(149, 179, 215);border-bottom-style:none;border-left:0.5pt solid windowtext;border-right:0.5pt solid windowtext;border-top:0.5pt solid windowtext;padding-left:1px;padding-right:1px;padding-top:1px;text-align:center;width:162pt;"><strong>当前状况</strong></td><td style="background-color:rgb(149, 179, 215);border-bottom-style:none;border-left:0.5pt solid windowtext;border-right-style:none;border-top-style:none;padding-left:1px;padding-right:1px;padding-top:1px;text-align:center;width:185pt;"><strong>问题详情</strong></td><td style="background-color:rgb(149, 179, 215);border-bottom-style:none;border-left:0.5pt solid windowtext;border-right:0.5pt solid windowtext;border-top:0.5pt solid windowtext;padding-left:1px;padding-right:1px;padding-top:1px;text-align:center;width:54pt;"><strong>质量风险</strong></td><td style="background-color:rgb(252, 228, 214);border-bottom-style:none;border-left:0.5pt solid windowtext;border-right-style:none;border-top:0.5pt solid windowtext;padding-left:1px;padding-right:1px;padding-top:1px;text-align:center;width:140pt;"><i><strong>S6评估标准</strong></i></td></tr><tr><td style="border:0.5pt solid windowtext;height:177.75pt;padding:10px;text-align:center;">游戏功能</td><td style="border:0.5pt solid windowtext;padding:10px;">&nbsp;</td><td style="border:0.5pt solid windowtext;padding:10px;">&nbsp;</td><td style="border:0.5pt solid windowtext;padding:10px;text-align:center;">&nbsp;</td><td style="border:0.5pt solid windowtext;padding:10px;width:140pt;" rowspan="5"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">功能测试结果所有S级、A级bug必须修复，遗留未处理的B级bug占比不高于10%</span></td></tr><tr><td style="border:0.5pt solid windowtext;height:33pt;padding:10px;text-align:center;width:162pt;">中断测试</td><td style="border:0.5pt solid windowtext;padding:10px;width:162pt;">&nbsp;</td><td style="border:0.5pt solid windowtext;padding:10px;text-align:center;width:185pt;">&nbsp;</td><td style="border:0.5pt solid windowtext;padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="border:0.5pt solid windowtext;height:33.6pt;padding:10px;text-align:center;width:162pt;">画质测试</td><td style="border:0.5pt solid windowtext;padding:10px;width:162pt;">&nbsp;</td><td style="border:0.5pt solid windowtext;padding:10px;text-align:center;width:185pt;">&nbsp;</td><td style="border:0.5pt solid windowtext;padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="border:0.5pt solid windowtext;height:24.95pt;padding:10px;text-align:center;width:162pt;">覆盖安装测试</td><td style="border:0.5pt solid windowtext;padding:10px;width:162pt;">&nbsp;</td><td style="border:0.5pt solid windowtext;padding:10px;text-align:center;width:185pt;">&nbsp;</td><td style="border:0.5pt solid windowtext;padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="border:0.5pt solid windowtext;height:36pt;padding:10px;text-align:center;width:162pt;">热更新测试</td><td style="border:0.5pt solid windowtext;padding:10px;width:162pt;">&nbsp;</td><td style="border:0.5pt solid windowtext;padding:10px;width:185pt;">&nbsp;</td><td style="border:0.5pt solid windowtext;padding:10px;">&nbsp;</td></tr></tbody></table></figure><figure class="table" style="float:left;width:100%;"><table style="background-color:rgb(255, 255, 255);"><tbody><tr><td style="border-bottom:0.5pt solid windowtext;border-left:0.5pt solid windowtext;border-right-color:initial;border-right-style:none;border-top:0.5pt solid windowtext;height:16.5pt;padding-left:1px;padding-right:1px;padding-top:1px;text-align:center;width:1169pt;" colspan="5">2、其他技术专项验收情况如下：</td></tr><tr><td style="background-color:rgb(149, 179, 215);border-bottom:0.5pt solid windowtext;border-left:0.5pt solid windowtext;border-right-style:none;border-top:0.5pt solid windowtext;height:15pt;padding-left:1px;padding-right:1px;padding-top:1px;text-align:center;width:122pt;"><strong>测试类型</strong></td><td style="background-color:rgb(149, 179, 215);border-bottom:0.5pt solid windowtext;border-left:0.5pt solid windowtext;border-right-style:none;border-top:0.5pt solid windowtext;padding-left:1px;padding-right:1px;padding-top:1px;text-align:center;width:572pt;"><strong>当前状况</strong></td><td style="background-color:rgb(149, 179, 215);border-bottom:0.5pt solid windowtext;border-left:0.5pt solid windowtext;border-right-style:none;border-top:0.5pt solid windowtext;padding-left:1px;padding-right:1px;padding-top:1px;text-align:center;width:221pt;"><strong>主要问题&amp;建议</strong></td><td style="background-color:rgb(149, 179, 215);border:0.5pt solid windowtext;padding-left:1px;padding-right:1px;padding-top:1px;text-align:center;width:54pt;"><strong>质量风险</strong></td><td style="background-color:rgb(252, 228, 214);border:0.5pt solid windowtext;padding-left:1px;padding-right:1px;padding-top:1px;width:200pt;"><i><strong>S6估标准</strong></i></td></tr><tr><td style="height:391.5pt;padding:10px;text-align:center;">前端性能</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;">Ø最高 PSS（Android）：<br>1 档机&lt;=1600M;<br>2 档机&lt;=1400M;<br>3 档机&lt;=1200M<br>最高 PSS（iOS）：<br>1 档机&lt;=1200M;<br>2 档机&lt;=1000M;<br>3档机&lt;=900M<br>Ø.CPU 使用率小于 60%占比（Android）：&gt;90%<br>CPU 使用率小于 80%占比（iOS）：&gt;90%;<br><br>Ø.85%FPS（Android）:<br>1 档机&gt;=25;<br>2 档机&gt;=25;<br>3档机&gt;=18；<br>90%FPS（iOS）:<br>1 档机&gt;=25;<br>2 档机&gt;=25;<br>3 档机&gt;=18</td></tr><tr><td style="height:115.5pt;padding:10px;text-align:center;">兼容性</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;"><p><span style="background-color:transparent;">1.第三方机型兼容通过率需达标&gt;=95%</span></p><p>2.Android&amp;iOS 市场<br>占有率 Top10 机型全部通过测试&amp;不得有 S、A 级兼容 bug</p></td></tr><tr><td style="height:99pt;padding:10px;text-align:center;">弱网</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;">在游戏设计支持的最大网络延迟、丢包率（不同游戏类型对弱网要求不同）、抖动的场景下，需对延时的有合理的提示</td></tr><tr><td style="height:105.75pt;padding:10px;text-align:center;">压力测试</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;"><p>承载、业务逻辑、稳定性压测</p><p>１.核心场景性能基线需达标：各事务95%响应时间&lt;800ms<br>２.综合场景稳定性测试：机器人无掉线，服务进程无Crash，无内存泄漏，运行24小时以上后各事务成功率&gt;99.9%，各节点负载要实现均衡<br><br>容错测试<br>１.被拉起节点或进程负载不能存在异常，玩家游戏数据尽可能少丢失，丢失数据时长不超过3分钟<br><br>动态扩容<br>1.分布式部署的服务进程需满足不停服新增节点服务器，新增节点加入后符合原先的负载均衡算法且新登录的用户流量会平滑的分流到新扩容的服务上<br><br>排队系统<br>在S5开新服阶段为预防出现爆发性新用户涌入及登录，需要设计并测试排队系统，控制用户流量，维护游戏服务正常运行，保障玩家游戏体验<br><br>容灾测试<br>项目组必须有容灾计划，在发生设备故障、网络故障等灾难，在保证玩家数据尽可能少丢失的前提下，尽快恢复正常服务<br>&nbsp;</p></td></tr><tr><td style="height:162pt;padding:10px;text-align:center;" rowspan="5">容错测试</td><td style="padding:10px;" rowspan="5">&nbsp;</td><td style="padding:10px;" rowspan="5">&nbsp;</td><td style="padding:10px;text-align:center;" rowspan="5">&nbsp;</td><td style="padding:10px;">1.在大压力下根据具体用例杀死相关服务进程，测试被杀进程是否可自动拉起</td></tr><tr><td style="height:14.25pt;padding:10px;">&nbsp;</td></tr><tr><td style="height:41.25pt;padding:10px;">2.拉起后是不能存在因为进程启动的异常顺序等原因引发的逻辑错误等问题</td></tr><tr><td style="height:14.25pt;padding:10px;">&nbsp;</td></tr><tr><td style="height:51pt;padding:10px;">3.被拉起节点或进程负载不能存在异常，玩家游戏数据尽可能少丢失，丢失数据时长不超过 5 分钟</td></tr></tbody></table></figure><p>&nbsp;</p><figure class="table"><table style="border:1px solid hsl(0, 0%, 100%);"><tbody><tr><td style="border:1px solid hsl(0, 0%, 100%);"><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">以上，有劳查阅，如有疑问，请随时联系，谢谢！</span></p><p>胡俊</p><p>上海第七大道科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;技术中心</p><p>Mob:&nbsp;+86&nbsp;13524778793</p><p><a href="mailto:jun.hu@7road.com"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">mailto:jun.hu@7road.com</span></a></p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">Add：上海市闵行区合川路3111号2号楼7楼</span></p></td></tr></tbody></table></figure>`,
        performance:`<p><strong>DEAR ALL</strong></p><p>&nbsp;</p><p><strong>PS：注意事项</strong></p><p>&nbsp;</p><figure class="table" style="float:left;width:100%;"><table class="ck-table-resized"><colgroup><col style="width:13.31%;"><col style="width:11.41%;"><col style="width:7.46%;"><col style="width:11.46%;"><col style="width:8.74%;"><col style="width:11.12%;"><col style="width:14.07%;"><col style="width:22.43%;"></colgroup><tbody><tr><td style="background-color:hsl(30, 75%, 60%);padding:10px;text-align:center;" colspan="8"><span style="font-size:21px;"><strong>客户端性能测试报告</strong></span></td></tr><tr><td style="padding:50px;text-align:center;"><strong>测试结论</strong></td><td style="padding:10px;" colspan="7">&nbsp;</td></tr><tr><td style="text-align:center;"><strong>问题总结</strong></td><td style="height:500px;padding:10px;" colspan="7">&nbsp;</td></tr><tr><td style="background-color:hsl(30, 75%, 60%);text-align:center;" colspan="8"><span style="font-size:21px;"><strong>测试环境</strong></span></td></tr><tr><td style="padding:10px;text-align:center;"><strong>游戏名称</strong></td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;text-align:center;"><strong>测试阶段</strong></td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;text-align:center;"><strong>客户端版本号</strong></td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;text-align:center;"><strong>数据共享地址（高端机）</strong></td><td style="padding:10px;">&nbsp;</td></tr><tr><td style="padding:10px;text-align:center;"><strong>测试类型</strong></td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;text-align:center;"><strong>测试标准</strong></td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;text-align:center;" rowspan="2"><strong>测试机型</strong></td><td style="padding:10px;" rowspan="2">&nbsp;</td><td style="padding:10px;text-align:center;"><strong>数据共享地址（中端机）</strong></td><td style="padding:10px;">&nbsp;</td></tr><tr><td style="padding:10px;text-align:center;"><strong>测试日期</strong></td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;text-align:center;"><strong>测试工具</strong></td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;text-align:center;"><strong>数据共享地址（低端机）</strong></td><td style="padding:10px;">&nbsp;</td></tr><tr><td style="padding:10px;text-align:center;"><strong>测试屈服</strong></td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;text-align:center;"><strong>测试网络</strong></td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;text-align:center;"><strong>MD5码</strong></td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr></tbody></table></figure><figure class="table" style="float:left;width:100%;"><table class="ck-table-resized"><colgroup><col style="width:19.24%;"><col style="width:4.17%;"><col style="width:11.08%;"><col style="width:10.47%;"><col style="width:3.92%;"><col style="width:10.61%;"><col style="width:11.25%;"><col style="width:4.24%;"><col style="width:10.69%;"><col style="width:10.56%;"><col style="width:3.77%;"></colgroup><tbody><tr><td style="background-color:hsl(30, 75%, 60%);padding:10px;text-align:center;"><span style="font-size:21px;"><strong>测试机型详情</strong></span></td><td>&nbsp;</td><td style="background-color:hsl(30, 75%, 60%);text-align:center;" colspan="2">&nbsp;</td><td style="background-color:hsl(0, 0%, 100%);">&nbsp;</td><td style="background-color:hsl(30, 75%, 60%);text-align:center;" colspan="2">&nbsp;</td><td>&nbsp;</td><td style="background-color:hsl(30, 75%, 60%);text-align:center;" colspan="2">&nbsp;</td><td>&nbsp;</td></tr><tr><td style="padding:10px;" rowspan="7">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;"><strong>info</strong></td><td style="padding:10px;"><strong>value</strong></td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;"><strong>info</strong></td><td style="padding:10px;"><strong>value</strong></td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;"><strong>info</strong></td><td style="padding:10px;"><strong>value</strong></td><td style="padding:10px;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">OS</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">OS</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">OS</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">CPU</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">CPU</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">CPU</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">GPU</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">GPU</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">GPU</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">Resolution</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">Resolution</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">Resolution</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">Screen Size</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">Screen Size</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">Screen Size</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">Ram Size</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">Ram Size</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">Ram Size</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr><tr><td colspan="11">&nbsp;</td></tr></tbody></table></figure><figure class="table" style="float:left;width:100%;"><table class="ck-table-resized"><colgroup><col style="width:11.58%;"><col style="width:4.31%;"><col style="width:6.44%;"><col style="width:7.26%;"><col style="width:7.52%;"><col style="width:3.79%;"><col style="width:6.62%;"><col style="width:7.01%;"><col style="width:7.97%;"><col style="width:3.92%;"><col style="width:33.58%;"></colgroup><tbody><tr><td style="background-color:hsl(30, 75%, 60%);text-align:center;"><span style="font-size:21px;"><strong>FPS</strong></span></td><td>&nbsp;</td><td style="background-color:hsl(30, 75%, 60%);text-align:center;" colspan="3"><strong>fps大于标准帧比率</strong></td><td style="background-color:hsl(0, 0%, 100%);text-align:center;">&nbsp;</td><td style="background-color:hsl(30, 75%, 60%);text-align:center;" colspan="3"><strong>平均FPS</strong></td><td style="background-color:hsl(0, 0%, 100%);text-align:center;">&nbsp;</td><td style="background-color:hsl(30, 75%, 60%);text-align:center;"><strong>备注</strong></td></tr><tr><td style="padding:10px;"><strong>机型</strong></td><td>&nbsp;</td><td style="padding:10px;text-align:center;"><strong>实际测试</strong></td><td style="padding:10px;text-align:center;"><strong>S6阶段标准</strong></td><td style="padding:10px;text-align:center;"><strong>是否通过</strong></td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;"><strong>实际结果</strong></td><td style="padding:10px;text-align:center;"><strong>S6阶段标准</strong></td><td style="padding:10px;text-align:center;"><strong>是否通过</strong></td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr><tr><td style="padding:10px;text-align:center;">&nbsp;</td><td style="text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="padding:10px;text-align:center;">&nbsp;</td><td style="text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="padding:10px;text-align:center;">&nbsp;</td><td style="text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td>&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr></tbody></table></figure><figure class="table" style="float:left;width:100%;"><table class="ck-table-resized"><colgroup><col style="width:11.43%;"><col style="width:4.49%;"><col style="width:6.29%;"><col style="width:7.33%;"><col style="width:7.59%;"><col style="width:3.79%;"><col style="width:59.08%;"></colgroup><tbody><tr><td style="background-color:hsl(30, 75%, 60%);text-align:center;"><span style="font-size:21px;"><strong>CPU</strong></span></td><td>&nbsp;</td><td style="background-color:hsl(30, 75%, 60%);text-align:center;" colspan="3"><strong>cpu低于%比率</strong></td><td style="background-color:hsl(0, 0%, 100%);text-align:center;">&nbsp;</td><td style="background-color:hsl(30, 75%, 60%);text-align:center;"><strong>备注</strong></td></tr><tr><td style="padding:10px;"><strong>机型</strong></td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;"><strong>实际测试</strong></td><td style="padding:10px;"><strong>S6阶段标准</strong></td><td style="padding:10px;"><strong>是否通过</strong></td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr></tbody></table></figure><figure class="table" style="float:left;width:100%;"><table class="ck-table-resized"><colgroup><col style="width:11.37%;"><col style="width:4.62%;"><col style="width:6.42%;"><col style="width:7.16%;"><col style="width:7.58%;"><col style="width:3.79%;"><col style="width:59.06%;"></colgroup><tbody><tr><td style="background-color:hsl(30, 75%, 60%);text-align:center;"><span style="font-size:21px;"><strong>内存</strong></span></td><td>&nbsp;</td><td style="background-color:hsl(30, 75%, 60%);text-align:center;" colspan="3"><strong>pss内存峰值</strong></td><td style="background-color:hsl(0, 0%, 100%);text-align:center;">&nbsp;</td><td style="background-color:hsl(30, 75%, 60%);text-align:center;"><strong>备注</strong></td></tr><tr><td style="padding:10px;"><strong>机型</strong></td><td>&nbsp;</td><td style="padding:10px;text-align:center;"><strong>实际测试</strong></td><td style="padding:10px;text-align:center;"><strong>S6阶段标准</strong></td><td style="padding:10px;text-align:center;"><strong>是否通过</strong></td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td>&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td>&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td>&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td>&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr></tbody></table></figure><figure class="table" style="float:left;width:100%;"><table class="ck-table-resized"><colgroup><col style="width:11.29%;"><col style="width:4.75%;"><col style="width:6.35%;"><col style="width:7.28%;"><col style="width:7.45%;"><col style="width:3.85%;"><col style="width:59.03%;"></colgroup><tbody><tr><td style="background-color:hsl(30, 75%, 60%);text-align:center;"><span style="font-size:21px;"><strong>流量</strong></span></td><td>&nbsp;</td><td style="background-color:hsl(30, 75%, 60%);text-align:center;" colspan="3"><strong>每10分钟平均流量</strong></td><td style="background-color:hsl(0, 0%, 100%);text-align:center;">&nbsp;</td><td style="background-color:hsl(30, 75%, 60%);text-align:center;"><strong>备注</strong></td></tr><tr><td style="padding:10px;"><strong>机型</strong></td><td>&nbsp;</td><td style="padding:10px;text-align:center;"><strong>实际测试</strong></td><td style="padding:10px;text-align:center;"><strong>S6阶段标准</strong></td><td style="padding:10px;text-align:center;"><strong>是否通过</strong></td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td>&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td>&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td>&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td>&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr></tbody></table></figure><figure class="table" style="float:left;width:100%;"><table class="ck-table-resized"><colgroup><col style="width:11.25%;"><col style="width:4.81%;"><col style="width:6.17%;"><col style="width:7.55%;"><col style="width:7.33%;"><col style="width:4.04%;"><col style="width:58.85%;"></colgroup><tbody><tr><td style="background-color:hsl(30, 75%, 60%);text-align:center;"><span style="font-size:21px;"><strong>流量</strong></span></td><td>&nbsp;</td><td style="background-color:hsl(30, 75%, 60%);text-align:center;" colspan="3"><strong>每10分钟平均流量</strong></td><td style="background-color:hsl(0, 0%, 100%);text-align:center;">&nbsp;</td><td style="background-color:hsl(30, 75%, 60%);text-align:center;"><strong>备注</strong></td></tr><tr><td style="padding:10px;"><strong>机型</strong></td><td>&nbsp;</td><td style="padding:10px;text-align:center;"><strong>实际测试</strong></td><td style="padding:10px;text-align:center;"><strong>S6阶段标准</strong></td><td style="padding:10px;text-align:center;"><strong>是否通过</strong></td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td>&nbsp;</td><td style="padding:10px;text-align:center;"><span style="background-color:rgb(255,255,255);color:rgb(255,0,0);"><strong>/</strong></span></td><td style="padding:10px;text-align:center;"><span style="background-color:rgb(255,255,255);color:rgb(47,117,181);"><strong>无明显发烫体感</strong></span></td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td>&nbsp;</td><td style="padding:10px;text-align:center;"><span style="background-color:rgb(255,255,255);color:rgb(255,0,0);"><strong>/</strong></span></td><td style="padding:10px;text-align:center;"><span style="background-color:rgb(255,255,255);color:rgb(47,117,181);"><strong>无明显发烫体感</strong></span></td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td>&nbsp;</td><td style="padding:10px;text-align:center;"><span style="background-color:rgb(255,255,255);color:rgb(255,0,0);"><strong>/</strong></span></td><td style="padding:10px;text-align:center;"><span style="background-color:rgb(255,255,255);color:rgb(47,117,181);"><strong>无明显发烫体感</strong></span></td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td><td style="padding:10px;text-align:center;">&nbsp;</td></tr><tr><td style="padding:10px;">&nbsp;</td><td>&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td><td style="padding:10px;">&nbsp;</td></tr></tbody></table></figure><figure class="table"><table style="border:1px solid hsl(0, 0%, 100%);"><tbody><tr><td style="border:1px solid hsl(0, 0%, 100%);"><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">以上，有劳查阅，如有疑问，请随时联系，谢谢！</span></p><p>胡俊</p><p>上海第七大道科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;技术中心</p><p>Mob:&nbsp;+86&nbsp;13524778793</p><p><a href="mailto:jun.hu@7road.com"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">mailto:jun.hu@7road.com</span></a></p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">Add：上海市闵行区合川路3111号2号楼7楼</span></p></td></tr></tbody></table></figure>`,
        test_issue:`<p>Dear all,</p><figure class="table" style="float:left;"><table><tbody><tr><td style="padding:5px;text-align:center;width:200px;"><strong>需求名称</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;text-align:center;width:200px;"><strong>测试时间</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;" rowspan="2"><strong>包体版本号</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;text-align:center;width:200px;"><strong>测试阶段</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;text-align:center;width:200px;"><strong>渠道SDK版本号</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="text-align:center;"><strong>测试类型</strong></td><td style="padding:5px;text-align:center;">&nbsp;</td><td style="padding:5px;text-align:center;"><strong>测试结果</strong></td><td style="padding:5px;text-align:center;">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>测试人员</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;text-align:center;width:200px;"><strong>附带文件</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="padding:5px;text-align:center;"><strong>下载地址</strong></td><td style="padding:5px;text-align:center;">&nbsp;</td><td style="padding:5px;text-align:center;"><strong>包体MD5码</strong></td><td style="padding:5px;text-align:center;">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>测试范围</strong></td><td style="height:100px;padding:20px;width:700px;" colspan="3">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>问题汇总</strong></td><td style="height:100px;padding:20px;width:700px;" colspan="3">&nbsp;</td></tr></tbody></table></figure><figure class="table"><table style="border:1px solid hsl(0, 0%, 100%);"><tbody><tr><td style="border:1px solid hsl(0, 0%, 100%);"><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">以上，有劳查阅，如有疑问，请随时联系，谢谢！</span></p><p>胡俊</p><p>上海第七大道科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;技术中心</p><p>Mob:&nbsp;+86&nbsp;13524778793</p><p><a href="mailto:jun.hu@7road.com"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">mailto:jun.hu@7road.com</span></a></p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">Add：上海市闵行区合川路3111号2号楼7楼</span></p></td></tr></tbody></table></figure>`,
        editorData:`<p>Dear all,</p><figure class="table" style="float:left;"><table><tbody><tr><td style="padding:5px;text-align:center;width:200px;"><strong>需求名称</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;text-align:center;width:200px;"><strong>测试时间</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;" rowspan="2"><strong>包体版本号</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;text-align:center;width:200px;"><strong>测试阶段</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;text-align:center;width:200px;"><strong>渠道SDK版本号</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="text-align:center;"><strong>测试类型</strong></td><td style="padding:5px;text-align:center;">&nbsp;</td><td style="padding:5px;text-align:center;"><strong>测试结果</strong></td><td style="padding:5px;text-align:center;">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>测试人员</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;text-align:center;width:200px;"><strong>附带文件</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="padding:5px;text-align:center;"><strong>下载地址</strong></td><td style="padding:5px;text-align:center;">&nbsp;</td><td style="padding:5px;text-align:center;"><strong>包体MD5码</strong></td><td style="padding:5px;text-align:center;">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>测试范围</strong></td><td style="height:100px;padding:20px;width:700px;" colspan="3">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>问题汇总</strong></td><td style="height:100px;padding:20px;width:700px;" colspan="3">&nbsp;</td></tr></tbody></table></figure><figure class="table"><table style="border:1px solid hsl(0, 0%, 100%);"><tbody><tr><td style="border:1px solid hsl(0, 0%, 100%);"><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">以上，有劳查阅，如有疑问，请随时联系，谢谢！</span></p><p>胡俊</p><p>上海第七大道科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;技术中心</p><p>Mob:&nbsp;+86&nbsp;13524778793</p><p><a href="mailto:jun.hu@7road.com"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">mailto:jun.hu@7road.com</span></a></p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">Add：上海市闵行区合川路3111号2号楼7楼</span></p></td></tr></tbody></table></figure>`,
        nowdata:``,
        // editorData:'<html><head><style>.tablec{width: 100%;}</style></head><body><figure class="table"><table class="tablec"><tbody><tr><td style="padding:5px;text-align:center;width:200px;"><strong>需求名称</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;text-align:center;width:200px;"><strong>测试时间</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>版本号</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;text-align:center;width:200px;"><strong>测试阶段</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>测试类型</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;text-align:center;width:200px;"><strong>测试结果</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>测试人员</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;text-align:center;width:200px;"><strong>附带文件</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>测试范围</strong></td><td style="height:100px;padding:20px;width:700px;" colspan="3">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>问题汇总</strong></td><td style="height:100px;padding:20px;width:700px;" colspan="3">&nbsp;</td></tr></tbody></table></figure></body></html>',
        // editorData:'<figure ><table style="width:100%"><tbody><tr><td style="padding:5px;text-align:center;width:200px;"><strong>需求名称</strong></td><td style="padding:5px;text-align:center;width:700px;"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">快手渠道接入测试需求</span></td><td style="padding:5px;text-align:center;width:200px;"><strong>测试时间</strong></td><td style="padding:5px;text-align:center;width:700px;"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">2022/10/31</span></td></tr><tr><td style="text-align:center;width:200px;"><strong>版本号</strong></td><td style="padding:5px;text-align:center;width:700px;"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">-</span></td><td style="padding:5px;text-align:center;width:200px;"><strong>测试阶段</strong></td><td style="padding:5px;text-align:center;width:700px;"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">demo测试</span></td></tr><tr><td style="text-align:center;width:200px;"><strong>测试类型</strong></td><td style="padding:5px;text-align:center;width:700px;"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">探索性测试</span></td><td style="padding:5px;text-align:center;width:200px;"><strong>测试结果</strong></td><td style="padding:5px;text-align:center;width:700px;"><span style="background-color:rgb(255,255,255);color:rgb(255,0,0);">测试未通过</span></td></tr><tr><td style="text-align:center;width:200px;"><strong>测试人员</strong></td><td style="padding:5px;text-align:center;width:700px;"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">李浩</span></td><td style="padding:5px;text-align:center;width:200px;"><strong>附带文件</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>测试范围</strong></td><td style="height:100px;padding:20px;width:700px;" colspan="3"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">1.基础注册登录</span><br><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">2.激励广告</span><br><span style="background-color:rgb(255,255,255);color:rgb(255,0,0);">ps:由于没有相应文档，测试采取盲测，探索性测试，bug如有歧义告知QA后，关闭即可</span></td></tr><tr><td style="text-align:center;width:200px;"><strong>问题汇总</strong></td><td style="height:100px;padding:20px;width:700px;" colspan="3"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">【ID1009895】【快手渠道测试 DEMO】【登录】 弹出登录界面后点击“《用户协议》”会直接登录游戏，且未能打开用户协议（未解决）</span><br><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">【ID1009898】【快手渠道测试 DEMO】【登录】用户未点击（未同意）自动登录的情况下杀进程重进游戏，账号会自动登录且无提示（已解决）</span><br><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">【ID1009899】【快手渠道测试 DEMO】【登录】用户登录后在个人中心内点击切换账号后游戏闪退（未解决）</span><br><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">【ID1009900】【快手渠道测试 DEMO】【登录】 个人中心内点击切换账号不能成功退出原有账号，不能重新弹出账号登陆界面（未解决）</span><br><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">【ID1009910】【快手渠道测试 DEMO】【个人中心】用户中心功能不完善（设计如此请忽略）（未解决）</span><br><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">【ID1009915】【快手渠道测试 DEMO】【登录】未成年人在非节假日时间注册登录被T出DEMO后重新进入DEMO，个人中心显示为游客正常登录状态且可以获得广告奖励（未解决）</span></td></tr></tbody></table></figure>',
        // editorData:'<figure class="table"><table><tbody><tr><td style="padding:5px;text-align:center;width:200px;"><strong>需求名称</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;text-align:center;width:200px;"><strong>测试时间</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>版本号</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;text-align:center;width:200px;"><strong>测试阶段</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>测试类型</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;text-align:center;width:200px;"><strong>测试结果</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>测试人员</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;text-align:center;width:200px;"><strong>附带文件</strong></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>测试范围</strong></td><td style="height:100px;padding:20px;width:700px;" colspan="3">&nbsp;</td></tr><tr><td style="text-align:center;width:200px;"><strong>问题汇总</strong></td><td style="height:100px;padding:20px;width:700px;" colspan="3">&nbsp;</td></tr></tbody></table></figure>',
        // editorData:'<table><tbody><tr><td style="padding:5px;width:200px;"><p style="margin-left:40px;"><strong>需求名称</strong></p></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;width:200px;"><p style="margin-left:40px;"><strong>测试时间</strong></p></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="padding:5px;width:200px;"><p style="margin-left:40px;"><strong>版本号</strong></p></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;width:200px;"><p style="margin-left:40px;"><strong>测试阶段</strong></p></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="padding:5px;width:200px;"><p style="margin-left:40px;"><strong>测试类型</strong></p></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;width:200px;"><p style="margin-left:40px;"><strong>测试结果</strong></p></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="padding:5px;width:200px;"><p style="margin-left:40px;"><strong>测试人员</strong></p></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td><td style="padding:5px;width:200px;"><p style="margin-left:40px;"><strong>附带文件</strong></p></td><td style="padding:5px;text-align:center;width:700px;">&nbsp;</td></tr><tr><td style="width:200px;"><p style="margin-left:40px;"><strong>测试范围</strong></p></td><td style="height:100px;padding:20px;width:700px;" colspan="3">&nbsp;</td></tr><tr><td style="width:200px;"><p style="margin-left:40px;"><strong>问题汇总</strong></p></td><td style="height:100px;padding:20px;width:700px;" colspan="3">&nbsp;</td></tr></tbody></table>',
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
          tableColor: {
            colors: [
                {
                    color: 'hsl(0, 0%, 0%)',
                    label: 'Black'
                },
                {
                    color: 'hsl(0, 0%, 30%)',
                    label: 'Dim grey'
                },
                {
                    color: 'hsl(0, 0%, 60%)',
                    label: 'Grey'
                },
                {
                    color: 'hsl(0, 0%, 90%)',
                    label: 'Light grey'
                },
                {
                    color: 'hsl(0, 0%, 100%)',
                    label: 'White',
                    hasBorder: true
                },

                // ...
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
        excel:[],
        excel_list:[] as any,
        img:{},
        log:{},
        projectinput1:"",
        projectinput2:" ",
        project_value:"",
        project_options:[
            {
                value:"test",
                label:"test"
            }
        ],
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
    function draft(){
      var data=[] as any
      axios({
              url: '/api/v1/EmailCache/',
              method:'get',
            })
            .then(res => {
               for(var i in res.data.data){
                console.log(res.data.data[i]);
                data.push(res.data.data[i])
               }
               console.log(data);
               data_set.tableDatadraft=data
            })

      data_set.dialogTableVisibledraft=true
    }
    function deletedraft(def){
      hdaxios("/api/v1/EmailCache",{
          data:{
             key:def.date
              }
          })
          .then(res => {
            if(res.data.msg == "删除草稿成功"){
            ElMessage({
              message: '删除草稿成功',
              type: 'success',
              })
            }
            else{
              ElMessage.error('删除草稿失败')
            }
            draft()
          })
    }
    function saveDraft(){
      
      var d=new Date();
      var n=d.toLocaleString();
      var save_title=""
      var save_text=""
      var save_data=""
      var save_date = n
      if(data_set.project_value==""){
        save_title="无收件组"
      }
      else{
        save_title = data_set.project_value
      }
      if(data_set.projectinput1==""){
        save_text="无主题"
      }
      else{
        save_text = data_set.projectinput1
      }
      if(data_set.editorData==""){
        save_data=""
      }
      else{
        save_data = data_set.editorData
      }
      hpaxios("/api/v1/EmailCache/",{
           
            key:save_date,
            value:{
              "title":save_title,
              "text":save_text,
              "data":save_data,
              "date":save_date
            }

        }).then(res=>{
          if(res.data.msg == "提交草稿成功"){
            ElMessage({
              message: '提高草稿成功',
              type: 'success',
            })
          }
          else{
            ElMessage.error('提交草稿失败')
          }
          
        })
    }
    function pulldraft(def){
      if(def.title == "无收件组"){
        data_set.project_value=""
      }
      else{
        data_set.project_value=def.title
      }
      if(def.text=="无主题"){
        data_set.projectinput1=""
      }
      else{
        data_set.projectinput1=def.text
      }
      data_set.editorData=def.data
      var input = document.getElementById("fileupload") as any;
      input.value='';
      data_set.dialogTableVisibledraft=false
      
    }
    function log(){
      checklog()
      data_set.dialogTableVisible=true
    }
    function checklog(){
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
    function  onReady( editor ) {
          // Insert the toolbar before the editable area.
          //     editor.ui.getEditableElement().parentElement.insertBefore(
          //     editor.ui.view.toolbar.element,
          //     editor.ui.getEditableElement(),
          //     editor.ui.componentFactory.names('bold')
          // );
      }
    function ckeditor_change(){
      // data_set.editorData = data_set.editorData.replace(/<p>/g,'<p style="margin:5px 40px 5px 40px">').replace(/<table/g,'<table border="1px" cellpadding="0" cellspacing="0" class="tablec"').replace(/class="ck-table-resized"/g,"")
       
       

    }
    
    const formData = new FormData();
  
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
            var datahtml = `<html><head><style>.tablec{width:100%;}.table{margin:0px}</style></head><body>${data_set.editorData}</body></html>`.replace(/<table/g,'<table border="1px" cellpadding="0" cellspacing="0" class="tablec"').replace(/class="ck-table-resized"/g,"")
            // const formData = new FormData();
            formData.append("html",datahtml)
            // formData.append("report","")
            formData.append("report_name","")
            formData.append("project",data_set.project_value)
            formData.append("title",data_set.projectinput1)
            formData.append("text",data_set.projectinput2)
            let config = {
              headers:{'Content-Type':'multipart/form-data'}
            }
            ElMessage(
            '开始发送发送邮件，请稍等'
            )
            hpaxios('/api/v1/SendReportEmail/', formData, config)
            .then(res => {
               
                data_set.log = res
                if(res.data.msg.indexOf("发送邮件成功")!= -1){
                  ElMessage({
                        duration:0,
                        showClose: true,
                        message: res.data.msg,
                        type: 'success',
                    })
                }
                else{
                  ElMessage({
                    showClose: true,
                    duration:0,
                    message: res.data.msg,
                    type: 'error',
                  })
                  ElMessage.error(res.data.msg)
                }
            })
            .catch(error => {
              ElMessage({
                    showClose: true,
                    duration:0,
                    message: error,
                    type: 'error',
                  })
                  ElMessage.error(error)
              })

        })
      }else{
        console.log(data_set.excel);
        
        var datahtml = `<html><head><style>.tablec{width:100%;}.table{margin:0px}</style></head><body>${data_set.editorData}</body></html>`.replace(/<table/g,'<table border="1px" cellpadding="0" cellspacing="0" class="tablec"').replace(/class="ck-table-resized"/g,"")
        
        formData.append("html",datahtml)
        // for (var i=0;i<data_set.excel.length;i++){
        //   formData.append("report",data_set.excel[i])
        // }
        formData.append("report_name",data_set.excel_list)
        for (var i=0;i<data_set.excel_list.length;i++){
          formData.append(data_set.excel_list[i], data_set.excel[i])
        }
        formData.append("project",data_set.project_value)
        formData.append("title",data_set.projectinput1)
        formData.append("text",data_set.projectinput2)
        let config = {
          headers:{'Content-Type':'multipart/form-data'}
        }
        ElMessage(
        '开始发送发送邮件，请稍等'
        )
        hpaxios('/api/v1/SendReportEmail/', formData, config)
        .then(res => {
            console.log(11111,res);
            console.log(1111111,res.data);
            data_set.log = res
            if(res.data.msg.indexOf("发送邮件成功")!= -1){
                  ElMessage({
                        duration:0,
                        showClose: true,
                        message: res.data.msg,
                        type: 'success',
                    })
                }
                else{
                  ElMessage({
                    showClose: true,
                    duration:0,
                    message: res.data.msg,
                    type: 'error',
                  })
                  ElMessage.error(res.data.msg)
                }
        })
        .catch(error => {
              ElMessage({
                    showClose: true,
                    duration:0,
                    message: error,
                    type: 'error',
                  })
                  ElMessage.error(error)
              })
      }
   }
   
  
   function riverConfigImportexcel(event){
    
    // if (event.target.files['name'].indexOf(",")!=-1){
    //   console.log("111");
      
    // }
    for(var i in event.target.files){
      if (typeof(event.target.files[i])=="object"){
        if (event.target.files[i]['name'].indexOf(",")!=-1){
          ElMessage.error('文件名称中请勿存在 ","')
          // var obj = document.getElementById('fileupload') as any;  
          // obj.outerHTML = obj.outerHTML;
          var input = document.getElementById("fileupload") as any;
          input.value='';
         
         
          
        }

      }
    }
    
    console.log(event.target.files);
    
    let lis = []
    let lis_name = [] as any
    // for (var i=0;i<event.target.files.length;i++){
    //   console.log(lis[i]);
      
    //   formData.append("report",lis[i])
    // }
    lis=event.target.files
    var data = event.target.files

    for(var j in data){
      if (typeof(data[j])=="object"){
        lis_name.push(data[j]["name"])
      }
    }
    data_set.excel=lis
    data_set.excel_list=lis_name
    
    
  }
  // function riverConfigImportexcel(event){
  //   data_set.excel=[]
  //   // data_set.excel = event.target.files
  //   // var lis = []
  //   var data = event.target.files
  //   for(var i in data){
  //     if (typeof(data[i])=="object"){
  //       data_set.excel.push(
  //         {
  //           "name":data[i]["name"],
  //           "file":data[i]
  //         }
  //       )
  //     }
  //   }
  //   console.log(data_set.excel);
    
  // }
  //  function riverConfigImportimg(event){
  //   console.log(event.target.files[0]);
  //   data_set.img = event.target.files[
  //   console.log(data_set.img[0]);
    
    
  //  }
  function check(){
  console.log(data_set.editorData);
    // console.log(data_set.excel);
    
 


    
    

    
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
  .table{
    width: 100%;
  }
  .demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
  </style>