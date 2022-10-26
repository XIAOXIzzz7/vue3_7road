<template>
<div class="title">
    <div class="title_l">

    </div>
    <div class="title_r">
        <span v-if="zgshow">
            <el-button
            style="margin-left: 20px;"
            :autofocus="true"
            key ="plain"
            type=""
            @click="title_name(0)"
            text>
            主观数据评价
            </el-button>
        </span>
        <span v-if="kgshow">
            <el-button
            style="margin-left: 20px;"
            :autofocus="true"
            key ="plain"
            type=""
            @click="title_name(1)"
            text>
            客观数据评价
            </el-button>
        </span>
        <span v-if="zhshow">
            <el-button
            style="margin-left: 20px;"
            :autofocus="true"
            key ="plain"
            type=""
            @click="title_name(2)"
            text>
            综合考评
            </el-button>
        </span>
    </div>
</div>
<el-divider content-position="left" style="margin-left:20px;margin-right:20px;width:97%;">{{titlename}}</el-divider>
<div class="main">
    <!-- 主观数据评价页面 -->
    <div v-show="titleshow1">
    <div style="display:flex ;flex-direction: column;">
        <el-cascader
        v-if="butshow3"
        v-model="time_value1"
        :options="time_options"
        :props="props1"
        style="float:left ;width: 250px;"
        @change="ztimechange"
        :class="butshow3class"
        
        />
        <div style="display: flex;align-items: center;">
            <h5 style="margin:0px 5px 0px 0px;font-weight:bolder;"  v-if="zgtable_show">{{time_value1[0]}}年{{time_value1[1]}}月-数据统计</h5>
            <el-popover
                v-if="zgtable_show"
                placement="right-start"
                :width="400"
                popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                >
                <template #reference>
                    <svg t="1659500581454" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2257" width="25" height="25"><path d="M544 789.333333h105.173333a10.666667 10.666667 0 0 0 10.666667-10.666666v-0.362667l-3.232-94.304a32 32 0 0 1 14.293333-27.765333C750.933333 603.189333 800 513.792 800 416c0-159.061333-128.938667-288-288-288S224 256.938667 224 416c0 97.813333 49.098667 187.232 129.141333 240.266667a32 32 0 0 1 14.314667 25.578666l3.338667 97.184a10.666667 10.666667 0 0 0 10.666666 10.304H480V572.693333l-76.64-81.429333a32 32 0 0 1 46.613333-43.861333l63.36 67.328 72.693334-68.661334a32 32 0 0 1 43.946666 46.528L544 573.792V789.333333z m320-373.333333a351.530667 351.530667 0 0 1-142.826667 283.146667l2.634667 76.96A74.666667 74.666667 0 0 1 649.173333 853.333333h-267.733333a74.666667 74.666667 0 0 1-74.624-72.106666l-2.784-81.194667A351.541333 351.541333 0 0 1 160 416C160 221.6 317.6 64 512 64s352 157.6 352 352zM416 960a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64H416z" p-id="2258" fill="#409EFF"></path></svg>
                </template>
                <template #default>
                    评价维度：
                    <hr style="margin:5px 0px 0px 0px ;"/>
                    1、积极主动性——自己选择的脑图用例模块是否过于简单、平时态度、责任心<br>
                    2、学习能力——新手文档完成度，脑图用例模板、BUG模板使用情况、其他知识吸收速度<br>
                    3、沟通能力——是否能提出想法、或是正确的说服你；第一次周会自我介绍时的发挥情况<br>
                    4、经验、常识——沟通中使用业内、游戏相关专业术语、黑话时的反应和理解能力<br>
                    5、业务能力——任务完成后，任务完成时间是否提前，是否提出需要新需求，完成质量<br>
                    6、创新性——提出各种建设意见均可加分<br>
                    <br>
                    打分规则：
                    <hr style="margin:5px 0px 0px 0px ;"/>
                    两个月一次
                    每项满分10分，总分50<br>
                    优秀：8~10——>40-50分<br>
                    良好：7~8——>35-40分<br>
                    及格：6~7——>30-35分<br>
                    不合格：6分以下——30分以下<br>
                    <br>
                    分数计算规则：
                    <hr style="margin:5px 0px 0px 0px ;"/>
                    1、只有一人评分时，直接获取分数<br>
                    2、大于一人评分时，去除最低分，其余分数相加取平均值<br>
                   
                    <br>

                </template>
                </el-popover>
        </div>
       
    </div>
        <span style="width:100%;display: flex;">
        <!-- <el-input
        v-model="group_leader"
        class="w-50 m-2"
        size="small"
        @input="groupleader()"
        @keyup.enter.native="create()"
        :disabled="group_input==false"
        placeholder="请输入组长姓名并且以 、分隔"
        
        /> -->
        <!-- <el-select
            v-model="group_leader"
            multiple
            
            collapse-tags
            placeholder="Select"
            style="width: 240px"
            >
            <el-option
                v-for="item in group_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select> -->
        
        <el-cascader @visible-change="groupchange($event)" :class="butshowclass" v-if="butshow" v-model="group_leader_1" :options="group_options" :props="props" collapse-tags clearable />
        <el-button style="margin:1px 0px 0px 5px" :class="butshowclass" v-if="butshow" :disabled="created_show==false"  @click="create();butshow=false;butshow2=true">确定</el-button>
        <el-button style="margin-top:4px" v-if="zgtable_show"  @click="add(1,1);">添加</el-button>
        <el-button style="margin-top:4px" v-if="zgtable_show"   @click="delet()">删除</el-button>
        <!-- <el-button style="margin-top:4px" v-if="butshow2"  @click="check()">上传/更新</el-button> -->
        <el-button style="margin-top:4px" v-if="zgtable_show"  @click="check()">上传/更新</el-button>
        <el-button style="margin-top:4px" v-if="zgtable_show1"  @click="piechart()"><svg t="1661399018327" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3118" width="20" height="20"><path d="M900.4 424.87c19.47 0 37.03-11.73 44.49-29.73 7.46-17.98 3.33-38.7-10.43-52.48L713.97 122.19c-7.3-7.3-19.12-7.3-26.42 0l-41.69 41.69c-7.3 7.3-7.3 19.13 0 26.42l138.28 138.27H86.32c-10.19 0-18.46 8.26-18.46 18.46v59.39c0 10.19 8.26 18.46 18.46 18.46H900.4zM937.65 598.72H123.8c-19.47 0-37.03 11.73-44.49 29.73-7.46 17.98-3.33 38.7 10.43 52.48l220.49 220.48c7.3 7.3 19.12 7.3 26.42 0l41.69-41.69c7.3-7.3 7.3-19.13 0-26.42L240.06 695.02h697.59c10.32 0 18.68-8.37 18.68-18.68v-58.93c0-10.32-8.36-18.69-18.68-18.69z" p-id="3119"></path></svg></el-button>
    </span>
    <el-table v-show="zgtable" @header-click="statistics" class="animate__animated animate__bounceInLeft" v-if="zgtable_show" :data="tableData" style="width: 100%;margin-top:20px" border 
            :row-style="{height:0+'px'}"
            :cell-style="{padding:0+'px'}"
            :header-cell-style="{'text-align':'center','font-weight':'bold'}"
           
           >
    
    <el-table-column label="姓名" min-width="15">
        <template v-slot="scope" >

            <div class="inp">
                <el-input
                style="padding:5px 0px 5px 0px;"
                
           
                
                
                v-model="scope.row.name"
                size="small" 
                />
            </div>
 
            
            
        </template>
    </el-table-column>
    <el-table-column label="积极主动性"  min-width="8" >
        <el-table-column
                v-for="(i,index) in prop_name.splice(1,name_length)"
                
                min-width="10"
               :label="i.label"
              
               >
               
              <template v-slot="scope" >
              <div class="inp">
                 <el-input

                    @change="input_change(scope.row)"
                    v-model="scope.row[i.prop]"
                    size="small" 
                 
                    />
              </div>
               
             
              </template>
              
        </el-table-column>
    </el-table-column>
    <el-table-column label="学习能力"  min-width="8" >
        <el-table-column
                v-for="(i,index) in prop_name.splice(1,name_length)"
                
                min-width="10"
               :label="i.label"
              
               >
               
              <template v-slot="scope" >
              <div class="inp">
                 <el-input
  
                    @change="input_change(scope.row)"
                    v-model="scope.row[i.prop]"
                    size="small" 
                    />

              </div>
               
             
              </template>
              
        </el-table-column>
    </el-table-column>
    <el-table-column label="沟通能力"  min-width="8" >
        <el-table-column
                v-for="(i,index) in prop_name.splice(1,name_length)"
                
                min-width="10"
               :label="i.label"
              
               >
               
              <template v-slot="scope" >
              <div class="inp">
                <el-input
            
                    @change="input_change(scope.row)"
                    v-model="scope.row[i.prop]"
                    size="small" 
                    />

              </div>
                
               
              </template>
              
        </el-table-column>
    </el-table-column>
    <el-table-column label="经验、常识"  min-width="8" >
        <el-table-column
                v-for="(i,index) in prop_name.splice(1,name_length)"
                
                min-width="10"
               :label="i.label"
              
               >
               
              <template v-slot="scope" >
              <div class="inp">
                <el-input
            
                    @change="input_change(scope.row)"
                    v-model="scope.row[i.prop]"
                    size="small" 
                    />
              </div>
                
                
              </template>
              
        </el-table-column>
    </el-table-column>
    <el-table-column label="业务能力"  min-width="8" >
        <el-table-column
                v-for="(i,index) in prop_name.splice(1,name_length)"
                
                min-width="10"
               :label="i.label"
              
               >
               
              <template v-slot="scope" >
              <div class="inp">
                <el-input
  
                    @change="input_change(scope.row)"
                    v-model="scope.row[i.prop]"
                    size="small" 
                    />

              </div>
                
               
              </template>
              
        </el-table-column>
    </el-table-column>
    <el-table-column label="创新性"  min-width="8" >
        <el-table-column
                v-for="(i,index) in prop_name.splice(1,name_length)"
                
                min-width="10"
               :label="i.label"
              
               >
               
              <template v-slot="scope" >
              <div class="inp">
                <el-input
            
                   @change="input_change(scope.row)"
                    v-model="scope.row[i.prop]"
                    size="small" 
                    :input-style="{'box-sizing':'inherit'}"
                    
                   
                    />
              </div>
                
               
              </template>
              
        </el-table-column>
    </el-table-column>
    <el-table-column :label="'综合得分'" min-width="16">
        <!-- 行数据项 -->    
        <template slot="header" #header="scope">
            <div style="display:flex ;">
                <span>综合得分  
                    
                    
                </span>
                <span style="margin-left: 2px;display:flex ;flex-direction:column;justify-content: center;">
                    <svg  v-if="icondown" t="1661250113490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1399" width="13" height="13"><path d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z" p-id="1400"></path></svg>
                    <svg v-if="iconup" t="1661250147826" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1577" width="13" height="13"><path d="M65.582671 735.208665l446.417329-446.41733 446.417329 446.41733z" p-id="1578"></path></svg>
                </span>
            </div>
        </template>
        <template v-slot="scope">
            <div style="display:flex;justify-content:center">
                <span v-if="scope.row.score>36" style="font-size:13px;">{{scope.row.score}}</span>
                <span v-if="scope.row.score<=36" style="font-size:13px;color: red;">{{scope.row.score}}</span>
            <!-- <el-input
                v-model="scope.row.score"
                size="small" 
                /> -->
            </div>
        </template>

        <!-- <template v-slot="scope" >
        <div class="inp">
            <el-input
                v-model="scope.row.score"
                size="small" 
                />
        </div>
            
           
        </template> -->
    </el-table-column>
    <el-table-column label="打分描述" min-width="40">
        <template v-slot="scope" >
            <el-input
               :autosize="{ minRows: 1, maxRows: 4 }"
                type="textarea"
                v-model="scope.row.info"
                size="small" 
                />
               
        </template>
    </el-table-column>
    </el-table>
     <div v-show="zgecharts">
     <el-affix style="float:right;margin-right:100px" :offset="200">
        <el-button v-show="show_333"  @click="piecharts_dialog=true;piecharts_contrast()" >对比查看</el-button>
    </el-affix>
     <!-- <el-button text @click="dialogTableVisible = true;te()"
    >open a Table nested Dialog</el-button>
     <el-dialog  v-model="dialogTableVisible" title="Shipping address">
    <div  style="height:400px;width:100%;z-index: 999;" id='piechart1'></div>
    </el-dialog> -->
        <el-checkbox-group v-model="checkList" style="width:100%">
        <el-row  class="animate__animated animate__bounceInRight " style="margin-top: 5%;" :gutter="20">
      
        <el-col  v-for="(i,item) in piechart_length" :span="12" style="display:flex ;height:400px;width:100%"   >
            
            <!-- <el-checkbox :v-model="checkbox[item]" label="Option 1" size="large" /> -->
            
            <!-- <el-checkbox style="height:400px;width:100%;" @click="piechartsclick(item)" :id="'piechart'+item" label="Option A" /> -->
            <el-checkbox :label="item">
            <div></div>
            </el-checkbox>
            <div style="height:400px;width:100%;" @click="piechartsclick(item)" :id="'piechart'+item"></div>
         
        </el-col>
       
    </el-row>
    </el-checkbox-group>
        
        <el-dialog width="70%" v-model="piecharts_dialog" title="OKR数据对比">
            <el-divider content-position="right">Pie chart</el-divider>
            <el-row  class="animate__animated animate__bounceInRight " style="margin-top: 5%;" :gutter="50">
        
            <el-col  v-for="(i,item) in checkList" :span="12" style="display:flex ;height:400px;width:100%"   >
            
                <div style="height:400px;width:100%;" :id="'pie'+i"></div>
                
            </el-col>
        
            </el-row>
        </el-dialog>
    
     </div>
     <!-- <div class="animate__animated animate__bounceInRight " v-show="zgecharts" style="display:flex;flex-wrap: wrap;margin-top: 3%;">
        <el-checkbox-group v-model="checkList" v-for="(i,item) in piechart_length" class="piechartsclass">
            <div style="height:100%;width:100%;" @click="piechartsclick(item)"   :id="'piechart'+item"></div>

        </el-checkbox-group> -->
        <!-- <el-checkbox v-for="(i,item) in piechart_length" v-model="checked1" :label="'Option'+'_'+item" size="large" /> -->
        <!-- <div  class="piechartsclass" v-for="(i,item) in piechart_length">
            <div style="height:400px;width:400px;" @click="piechartsclick(item)"   :id="'piechart'+item"></div>
        </div> -->
        
       
     <!-- </div> -->

  
    <!-- <el-dialog v-model="piecharts_dialog" title="OKR数据对比">
       
        <el-row  class="animate__animated animate__bounceInRight " v-show="zgecharts" style="margin-top: 5%;" :gutter="50">
      
        <el-col  v-for="(i,item) in checkList" :span="12" style="display:flex ;height:400px;width:100%"   >
           
            <div style="height:400px;width:100%;" :id="'piechart1'"></div>
            
        </el-col>
       
        </el-row>
    </el-dialog> -->
    </div>
    
  
    
    <!-- 客观数据评价页面 -->
    <div v-show="titleshow2">
        客观数据评价
    </div>
    <!-- 综合考评页面 -->
    <div v-show="titleshow3">
        综合考评
    </div>
</div>
</template>
<script>
import * as echarts from 'echarts';
import { reactive, toRefs } from '@vue/reactivity'
import {onMounted, onUpdated} from "vue"
import {hgaxios as axios} from "../../utils/request"
import { ElMessage } from 'element-plus'
// import { isDark } from '~/composables/dark'
import { setup } from 'xe-utils/ctor'
import {useStore} from 'vuex'
import {hpaxios} from "../../utils/request"
import {hputaxios} from "../../utils/request"
    export default{
        setup(){
            // 主观数据评价功能
            const store = useStore()

            const props1 = {
            expandTrigger: 'hover',
            }
            const props = { multiple: true }
            const get_data = reactive(
                    { 
                        dialogTableVisible:false,
                        piecharts_dialog:false,
                        checkList:[],
                        show_333:false,
                        datalist:[],
                        data_list:[],
                        data_down:[],
                        data_up:[],
                        iconup:false,
                        icondown:true,
                        group_title:["积极主动性", "学习能力", "沟通能力", "经验、常识", "业务能力", "创新性"],
                        group_leader:[],
                        group_leader_1:[],
                        name_length:[],
                        aa:[],
                        created_show:false,
                        add_show:false,
                        zgtable_show:false,
                        zgtable_show1:false,
                        zgtable_unshow:false,
                        delete_show:false,
                        group_input:true,
                        prop_name:[],
                        group_length:[],
                        table_dic:{},
                        // prop_name:[{"prop":"date、","label":"姓名"},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{"prop":"m","label":"描述"}],
                        tableData : [],
                        titlename:"主观数据评价",
                        titleshow1:true,
                        titleshow2:false,
                        titleshow3:false,
                        zg_loading:false,
                        group_options:[],
                        butshow:false,
                        butshow2:false,
                        butshow3:true,
                        zgshow:false,
                        kgshow:false,
                        zhshow:false,
                        time_value1:[],
                        shwb:[],
                        options: {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
},
                        butshow3class:"",
                        butshowclass:"",
                        time_options:[
                            {
                                value:"2022",
                                label:"2022",
                                children:[
                                    {value:"01",label: '1月'},
                                    {value:"02",label: '2月'},
                                    {value:"02",label: '3月'},
                                    {value:"04",label: '4月'},
                                    {value:"05",label: '5月'},
                                    {value:"06",label: '6月'},
                                    {value:"07",label: '7月'},
                                    {value:"08",label: '8月'},
                                    {value:"09",label: '9月'},
                                    {value:"10",label: '10月'},
                                    {value:"11",label: '11月'},
                                    {value:"12",label: '12月'},
                                ]
                            }
                        ],
                        piechart_length:0,
                        zgtable:true,
                        zgecharts:false,
                        piechart_options:{
                                title: {
                                    text: '',
                                    subtext: '',
                                    left: 'left',
                                    // top:"3%",
                                   
                                },
                                tooltip: {
                                    trigger: 'item'
                                },
                               
                                series: [
                                    {
                                    top:"20%",
                                    type: 'pie',
                                    radius: ['0%', '70%'],
                                    avoidLabelOverlap: false,
                                    label: {
                                        normal: {
                                        show:true,
                                        formatter: '{b}:{c}' + '\n\r' + '({d}%)'
                                        }
                                        
                                    },
                                    itemStyle: {
                                        borderRadius: 10,
                                        borderColor: '#fff',
                                        borderWidth: 2
                                    },
                                   
                                    emphasis: {
                                        label: {
                                        show: true,
                                        fontSize: '20',
                                        fontWeight: 'bold'
                                        }
                                    },
                                    labelLine: {
                                        show: true
                                    },
                                    data: [
                                       
                                    ]
                                    }
                                ]
                                }
                    }
                )
          
            function create(){
                get_data.group_input=false;
                get_data.created_show=false;
                get_data.zgtable_show=true;
                get_data.add_show=true;
                get_data.delete_show=true
                var first_prop = {"prop":"name","label":"姓名"}
                var last_prop = [{"prop":"score","label":"得分"},{"prop":"info","label":"描述"}]
                var group_name = get_data.group_leader
                var lis = []
                var nl = 0
                var gl = 0
                for (var i in get_data.group_title){
                    for(var j in group_name){
                        lis.push(
                            {
                                "prop":get_data.group_title[i]+"_"+ group_name[j],
                                "label":group_name[j]
                            }
                        )
                        gl = gl + 1
                    }
                }
                nl = get_data.group_leader.length
                get_data.name_length=nl
                get_data.group_length=gl
                lis.unshift(first_prop)
                const prop_list = lis.concat(last_prop)
                get_data.prop_name=prop_list 
                add(get_data.shwb.length,0)

                // get_data.zg_loading=false
            }
            function add(val,flag){
                
                if(flag == 0){
                    for (var item=0;item<val;item++){
                    var data = {"name":"","score":"","info":""}
                    var group_name = get_data.group_leader
                    for (var i in get_data.group_title){
                        for(var j in group_name){
                            data[get_data.group_title[i]+"_"+ group_name[j]]=[]
                        }
                        data["name"]=get_data.shwb[item]
                    }
                    console.log(data);
                        get_data.tableData.push(data)
                }
                }
                else{
                    for (var item=0;item<val;item++){
                    var data = {"name":"","score":"","info":""}
                    var group_name = get_data.group_leader
                    for (var i in get_data.group_title){
                        for(var j in group_name){
                            data[get_data.group_title[i]+"_"+ group_name[j]]=[]
                        }
                        // data["name"]=get_data.shwb[item]
                    }
                    console.log(data);
                        get_data.tableData.push(data)
                }
                }
                
                
                
            }
            function delet(){
                get_data.tableData.pop()
            }
            function check(){
                    hpaxios("/api/v1/SubjectiveKpi/",{
                    date:get_data.time_value1[0]+"-"+get_data.time_value1[1],
                    members:get_data.group_leader,
                    kpi:get_data.tableData
                
                    })
                    .then(res => {
                        
                        if(res.data.msg=="上传kpi数据成功"){
                            ElMessage({
                            message: res.data.msg,
                            type: 'success',
                        })
                        }
                        else if(res.data.msg=="上传kpi数据失败，上传的kpi数据已存在"){
                        hputaxios("/api/v1/SubjectiveKpi/",{
                            date:get_data.time_value1[0]+"-"+get_data.time_value1[1],
                            members:get_data.group_leader,
                            kpi:get_data.tableData
                        
                            }).then(res => {
                                if(res.data.msg=="更新kpi数据成功"){
                                    ElMessage({
                                    message: res.data.msg,
                                    type: 'success',
                                })
                                }
                            })
                        }
                        
                    })
            }
            function input_change(val){
                val["score"] = 0
                var score_1 = 0
                var score_2 = 0
                var len = get_data.group_leader.length
                var data_len = [
                    [],[],[],[],[],[]
                ]
                var flag=true
                for (var i in val){
                        if (i.indexOf("积极主动性") != -1 && val[i].length != 0 && val[i] != 0){
                            data_len[0].push(parseFloat(val[i]))
                        }
                        else if (i.indexOf("学习能力") != -1 && val[i].length != 0 && val[i] != 0) {
                            data_len[1].push(parseFloat(val[i]))
                        }
                        else if (i.indexOf("沟通能力") != -1 && val[i].length != 0 && val[i] != 0){
                            data_len[2].push(parseFloat(val[i]))
                        }
                        else if (i.indexOf("经验") != -1 && val[i].length != 0 && val[i] != 0){
                            data_len[3].push(parseFloat(val[i]))
                        }
                        else if (i.indexOf("业务") != -1 && val[i].length != 0 && val[i] != 0){
                            data_len[4].push(parseFloat(val[i]))
                        }
                        else if (i.indexOf("创新性") != -1 && val[i].length != 0 && val[i] != 0){
                            data_len[5].push(parseFloat(val[i]))
                            // if(val[i].length != 0){
                            //     data_len[5].push(parseFloat(val[i]))
                            // }
                            // else{
                            //     data_len[5].push(0)
                            // }
                            
                        }
                        
                }
                for(var i=0;i<6;i++){
                   
                    if (data_len[i].length==1){
                        score_1 += data_len[i][0]
                    }
                    else{
                        var temporary_len = data_len[i].length
                        data_len[i].sort(function(a,b){return a-b})
                        delete data_len[i][0]
                        var nums = 0
                        for (var num in data_len[i]){
                            nums += data_len[i][num]
                        }
                        score_1 += nums/(temporary_len-1)

                    }

                
                }
                val.score = score_1.toFixed(2)
                //  for (var i in data_len[5]){
                //     score_2+=data_len[5][i]
                // }
                //  console.log(score_2)
                // val.score = (score_1+score_2).toFixed(2)
                // if(len == 1){
                //     for (var i=0;i<5;i++){
                //         score_1 += data_len[i][0]
                //     }
                // }
                // else{
                //     for(var i in data_len){
                //         console.log(data_len[i]);
                        
                //     }
                // }

            //    for (var i in data_len){
            //         console.log(data_len[i].length,len);
            //         if (data_len[i].length != len){
            //             flag=false
            //             break
            //         }
            //    }
            // //    判断评分人不同时评分规则不同
            //    if (flag){
            //     for (var i=0;i<5;i++){
                  
            //         if (data_len[i].length==1){
            //             score_1 += data_len[i][0]
            //         }
            //         else{
            //             data_len[i].sort(function(a,b){return a-b})
            //             console.log(data_len[i]);
            //             delete data_len[i][0]
            //             var nums = 0
            //             for (var num in data_len[i]){
            //                 nums += data_len[i][num]
            //             }
            //             score_1 += nums/(len-1)
            //             console.log(score_1);
            //         }
            //     }
            //     for (var i in data_len[5]){
            //         score_2+=data_len[5][i]
            //     }
            //    }

            //    val.score = (score_1+score_2).toFixed(2)
               
            }
            onMounted(()=>{
              
                var first_prop = {}
                var last_prop = {}
                var group_name = []
                var lis = []
                // for (var i in group_name){
                //     // lis.push(
                //     //     {
                //     //         "prop":,
                //     //         "label":group_name[i]
                //     //     }
                //     // )
                // }
                get_data.aa = get_data.prop_name.length-1
                setTimeout(() => {
          
                    if(store.state.user_info["group"]=='游客组'){
                
                        get_data.zgshow=true
                    }
                    else{
                       
                        get_data.zgshow=true
                        get_data.kgshow=true
                        get_data.zhshow=true
                    }
                }, 200);
               
                groupname()
                
                
            })
            
            function title_name(val){
                // console.log(this.$store.state.user_info);
                if (val == 0){
                    get_data.titlename="主观数据评价"
                    get_data.titleshow1=true
                    get_data.titleshow2=false
                    get_data.titleshow3=false
                }
                else if(val == 1){
                    get_data.titlename="客观数据评价"
                    get_data.titleshow1=false
                    get_data.titleshow2=true
                    get_data.titleshow3=false
                }
                else{
                    get_data.titlename="综合考评"
                    get_data.titleshow1=false
                    get_data.titleshow2=false
                    get_data.titleshow3=true
                }
            }
            function groupleader(){
                if (get_data.group_leader.length != 0){
                    get_data.created_show=true
                    
                }
                else{
                    get_data.created_show=false
                }
            }
            function groupname(){
                var data = [
                    {
                        value:"上海正职",
                        label:"上海正职",
                        children:[
                            {
                                "value":"岳铠泽",
                                "label":"岳铠泽"
                            }
                        ]
                    },
                    {
                        value:"上海外包",
                        label:"上海外包",
                        children:[

                        ]
                    }
                ]
                var lis = []
                axios({
                    url: '/api/v1/AdminConfig/',
                    method:'get',
                    params:{
                            type:"member"
                        }
                    }).then(res => {
                        for (var i in res.data.data){
                            if(res.data.data[i]["group"]=="上海外包" && res.data.data[i]["status"]=="在职"){
                                data[1].children.push(
                                    {
                                        "value":i,
                                        "label":i
                                    }
                                )
                                lis.push(i)
                            }
                            else if (res.data.data[i]["group"]=="上海正职" && res.data.data[i]["status"]=="在职"){
                                data[0].children.push(
                                    {
                                        "value":i,
                                        "label":i
                                    }
                                )
                            }
                        }
                        get_data.group_options=data
                        get_data.shwb=lis
                    })
            }
            function groupchange(val){
                var data = []
                if(val==false){
                    for(var i in get_data.group_leader_1){
                        data.push(
                            get_data.group_leader_1[i][1]
                        )
                    }
                    get_data.group_leader=data
                    groupleader()
                }
                console.log(get_data.group_leader);
            }
            function ztimechange(){
                 axios({
                    url: '/api/v1/SubjectiveKpi/',
                    method:'get',
                    params:{
                            date:get_data.time_value1[0]+"-"+get_data.time_value1[1]
                        }
                    }).then(res => {
                        if (res.data.code==10296){
                            // get_data.butshow3=false
                            get_data.butshow3class= "animate__animated animate__backOutLeft"
                            get_data.butshow=true
                            get_data.butshowclass= "animate__animated animate__fadeInDown"
                            
                            // get_data.piechart_length=res.data.tableData.length
                        }
                        else if (res.data.code==10290){
                            get_data.butshow3class= "animate__animated animate__backOutLeft"
                            get_data.zgtable_show=true;
                            get_data.group_leader=res.data.data.members
                            get_data.zgtable_show1=true
                            var first_prop = {"prop":"name","label":"姓名"}
                            var last_prop = [{"prop":"score","label":"得分"},{"prop":"info","label":"描述"}]
                            var group_name = get_data.group_leader
                            var lis = []
                            var nl = 0
                            var gl = 0
                            for (var i in get_data.group_title){
                                for(var j in group_name){
                                    lis.push(
                                        {
                                            "prop":get_data.group_title[i]+"_"+ group_name[j],
                                            "label":group_name[j]
                                        }
                                    )
                                    gl = gl + 1
                                }
                            }
                            nl = get_data.group_leader.length
                            get_data.name_length=nl
                            get_data.group_length=gl
                            lis.unshift(first_prop)
                            const prop_list = lis.concat(last_prop)
                            get_data.prop_name=prop_list 
                            console.log(get_data.tableData);
                            var id_list = []
                            var count_list = []
                            for(var i in res.data.data.kpi){
                                if (res.data.data.kpi[i].score == "") {
                                    res.data.data.kpi[i].score = "0.00"
                                }
                                id_list.push(i)
                                count_list.push(res.data.data.kpi[i].score)
                            }
                            for(var i=0;i<count_list.length;i++){
                                for(var j=0;j<count_list.length-i-1;j++){
                                    if (count_list[j]>count_list[j+1]){
                                        var t1 = count_list[j]
                                        var t2 = count_list[j + 1]
                                        count_list[j] = t2
                                        count_list[j + 1] = t1
                                        var t3 = id_list[j]
                                        var t4 = id_list[j + 1]
                                        id_list[j] = t4
                                        id_list[j + 1] = t3
                                    }
                                }
                            }
                           
                            get_data.data_up = id_list
                            get_data.data_down = id_list.slice().reverse()
                             console.log(get_data.data_up);
                            console.log(get_data.data_down);
                            get_data.data_list=res.data.data.kpi
                            var data_list = []
                            for(var i in get_data.data_down){
                                for (var j in res.data.data.kpi){
                                    // console.log(j);
                                    if(j == get_data.data_down[i]){
                                        data_list.push(res.data.data.kpi[j])
                                    }
                                }
                            }
                            // console.log(get_data.data_up,get_data.data_down);
                            // console.log(id_list,count_list);
                            // console.log(id_list.reverse());
                            get_data.datalist=data_list
                            get_data.tableData=data_list
                            get_data.piechart_length=res.data.data.kpi.length
                           
                            console.log(res.data.data);
                             
                                
                            
                            
                        }
                        setTimeout(() => {
                            get_data.butshow3=false
                        }, 1000);
                    })
                    

            }
            function statistics(column, event){
               if (column.label == '综合得分'){
                    // console.log(get_data.data_up);
                    // console.log(get_data.data_down);
                    // console.log(get_data.datalist);
                    // var data_list = get_data.tableData
                    // var lis = []
                    // for(var i in data_list){
                    //     if (data_list[i].score == "") {
                    //         data_list[i].score = "0.00"
                    //     }
                    //     lis.push(data_list[i])
                    // }
                    if(get_data.icondown == true){
                        get_data.iconup = true
                        get_data.icondown = false
                        console.log(get_data.tableData);
                        var id_list = []
                        var count_list = []
                        for(var i in get_data.tableData){
                            if (get_data.tableData[i].score == "") {
                                get_data.tableData[i].score = "0.00"
                            }
                            id_list.push(i)
                            count_list.push(get_data.tableData[i].score)
                        }
                        for(var i=0;i<count_list.length;i++){
                            for(var j=0;j<count_list.length-i-1;j++){
                                if (count_list[j]>count_list[j+1]){
                                    var t1 = count_list[j]
                                    var t2 = count_list[j + 1]
                                    count_list[j] = t2
                                    count_list[j + 1] = t1
                                    var t3 = id_list[j]
                                    var t4 = id_list[j + 1]
                                    id_list[j] = t4
                                    id_list[j + 1] = t3
                                }
                            }
                        }
                       
                        var updata = []
                        for(var i in id_list){
                            for (var j in get_data.tableData){
                                if(j == id_list[i]){
                                    updata.push(get_data.tableData[j])
                                }
                            }
                            }
                        get_data.tableData=updata
                    }
                    else if(get_data.iconup == true){
                       
                        get_data.icondown = true
                        get_data.iconup = false
                        console.log(get_data.tableData);
                        var id_list = []
                        var count_list = []
                        for(var i in get_data.tableData){
                            if (get_data.tableData[i].score == "") {
                                get_data.tableData[i].score = "0.00"
                            }
                            id_list.push(i)
                            count_list.push(get_data.tableData[i].score)
                        }
                        for(var i=0;i<count_list.length;i++){
                            for(var j=0;j<count_list.length-i-1;j++){
                                if (count_list[j]>count_list[j+1]){
                                    var t1 = count_list[j]
                                    var t2 = count_list[j + 1]
                                    count_list[j] = t2
                                    count_list[j + 1] = t1
                                    var t3 = id_list[j]
                                    var t4 = id_list[j + 1]
                                    id_list[j] = t4
                                    id_list[j + 1] = t3
                                }
                            }
                        }
                       
                        var new_id_list = id_list.slice().reverse()
                        var updata = []
                       
                        for(var i in new_id_list){
                                for (var j in get_data.tableData){
                                    if(j == new_id_list[i]){
                                        updata.push(get_data.tableData[j])
                                    }
                                }
                            }
                        get_data.tableData=updata
                    }
                //    if(get_data.iconup == true){
                //       get_data.icondown = true
                //         get_data.iconup = false
                //         var data_list = []
                //         for(var i in get_data.data_down){
                //                 for (var j in data_list){
                //                     if(j == get_data.datadown[i]){
                //                         data_list.push(data_list[j])
                //                     }
                //                 }
                //             }
                //         get_data.tableData=data_list
                //    }


                }
              
                // get_data.icondown=true

            }
            function piechart(){
                if (get_data.zgtable_show == true){
                    get_data.zgecharts = true
                    get_data.show_333=true
                    get_data.zgtable_show = false
                    setTimeout(() => {
                        for(var i=0; i < get_data.piechart_length;i++){
                            console.log(i);
                    var chart = echarts.getInstanceByDom(document.getElementById("piechart"+i))
                    if (chart == null) { // 如果不存在，就进行初始化
                        chart = echarts.init(document.getElementById("piechart"+i));
                    }
                    var data = get_data.tableData[i]
                    var options = get_data.piechart_options
                    var name = get_data.tableData[i].name
                    var echartstitle =  get_data.tableData[i].info
                    var title = get_data.group_title
                    var lis = []
                    console.log(data);
                    console.log(i);
                    for (var t in title){
                        var templist = []
                        var nums = 0
                        var count = 0
                        for(var n in data){
                            if (n.split("_")[0] == title[t]){
                                if (data[n].length != 0 && data[n] != 0){
                                    count += 1
                                    templist.push(data[n])
                                }
                                
                            }
                        }
                    
                      
                        if (count == 1){
                            console.log(templist);
                            nums = parseFloat(templist[0])
                        }
                        
                        else if(count > 1){
                            console.log(templist);
                            templist.sort(function(a,b){

                                return a-b; // b-a从大到小，a-b从小到大

                            })
                            templist.shift()
                            count -= 1
                        
                            for(var num in templist){
                                nums += parseFloat(templist[num])
                            }
                            nums = (nums/count).toFixed(2)
                        }
                        console.log(nums);
                        lis.push(
                                {
                                    value:nums,
                                    name:title[t]
                                }
                            )
                    
                    }
                    options.series[0].data = lis
                    options.title.text=name
                    options.title.subtext=echartstitle
                    
                    chart.setOption(options,true)
                    
                }
                    }, 300);
                }
                else{
                    get_data.zgtable_show = true
                    get_data.show_333=false
                    get_data.zgecharts = false
                }
            }
            function piechartsclick(val){
                
                console.log(get_data.tableData[val]);
            }
            function piechartsstyle(){
                return "background-color:#e3e2e1"
            }
            function piecharts_contrast(){
    //               setTimeout(() => {
    //      var chart1 = echarts.getInstanceByDom(document.getElementById("pie1"))
    //                 if (chart1 == null) { // 如果不存在，就进行初始化
    //                     chart1 = echarts.init(document.getElementById("pie1"));
    //                 }
    //   chart1.setOption(this.options,true)
    //  }, 300);
                setTimeout(() => {
                for(var i in get_data.checkList){
                    var chart1 = echarts.getInstanceByDom(document.getElementById("pie"+get_data.checkList[i]))
                    if (chart1 == null) { // 如果不存在，就进行初始化
                        chart1 = echarts.init(document.getElementById("pie"+get_data.checkList[i]));
                    }
                    var data = get_data.tableData[get_data.checkList[i]]
                    var options = get_data.piechart_options
                    var name = get_data.tableData[get_data.checkList[i]].name
                    var echartstitle =  get_data.tableData[get_data.checkList[i]].info
                    var title = get_data.group_title
                    var lis = []
                    console.log(data);
                    console.log(name);
                    console.log(echartstitle);
                    
                    for (var t in title){
                        var templist = []
                        var nums = 0
                        var count = 0
                        for(var n in data){
                            if (n.split("_")[0] == title[t]){
                                if (data[n].length != 0 && data[n] != 0){
                                    count += 1
                                    templist.push(data[n])
                                }
                                
                            }
                        }
                    
                      
                        if (count == 1){
                          
                            nums = parseFloat(templist[0])
                        }
                        
                        else if(count > 1){
                           
                            templist.sort(function(a,b){

                                return a-b; // b-a从大到小，a-b从小到大

                            })
                            templist.shift()
                            count -= 1
                        
                            for(var num in templist){
                                nums += parseFloat(templist[num])
                            }
                            nums = (nums/count).toFixed(2)
                        }
                        lis.push(
                                {
                                    value:nums,
                                    name:title[t]
                                }
                            )
                    
                    }
                    options.series[0].data = lis
                    options.title.text=name
                    options.title.subtext=echartstitle
                    chart1.setOption(options,true)
                    
                }
                }, 300);
            }
            function te(){
     setTimeout(() => {
         var chart1 = echarts.getInstanceByDom(document.getElementById("piechart1"))
                    if (chart1 == null) { // 如果不存在，就进行初始化
                        chart1 = echarts.init(document.getElementById("piechart1"));
                    }
      chart1.setOption(this.options,true)
     }, 300);
    }
            return{
                ...toRefs(get_data),
                create,
                add,
                check,
                delet,
                input_change,
                title_name,
                groupleader,
                groupname,
                props,
                props1,
                groupchange,
                ztimechange,
                store,
                statistics,
                piechart,
                piechartsclick,
                piecharts_contrast,
                piechartsstyle,
                te
               
                
               
            }
        }
    }

</script>
<style scoped >
.title{
    height:40px;
    box-shadow:0 4px 12px rgb(31 45 61 / 5%);
    display: flex;
    margin:6px
}
.title_l{
    flex:0 0 40px
}
.title_r{
    display: flex;
    border-left:1px solid #e0e6ed;
     margin:6px
}
.main{
    margin-left: 20px;
    margin-right: 20px;
    height:700px;
    
}
.el-table>>>.cell{
    padding:0px;
}
.el-table--border>>>.el-table__cell:first-child .cell{
    padding-left:1px 
}
/* .inp{
    border-style:solid;
	border-width:1px;
    border-color:#00000070;

} */
.test{
    border:1px
}
div/deep/.el-textarea__inner{
    box-sizing:none;
    box-shadow:none
}

@keyframes mymove
{
	0%   {opacity:0.1;}
	25%  {opacity:0.3;}
	75%  {opacity:0.7;}
	100% {opacity:1.0;}
}
.el-popover:hover{
    color:#409EFF
}
/* .el-table--border>>>.el-table__cell{
    border-right:none
} */
.inp>>>.el-input__wrapper{
  box-shadow:none
}
.piechartsclass{
    flex:0 0 45% ;
    /* height:400px; 
    min-height:400px; */
    margin-bottom: 3%
}

</style>
