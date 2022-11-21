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
            <div style="display: flex;align-items: center;margin-bottom: 20px;">
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
            <el-button style="margin-top:4px" v-if="zgtable_show"  @click="piechart()"><svg t="1661399018327" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3118" width="20" height="20"><path d="M900.4 424.87c19.47 0 37.03-11.73 44.49-29.73 7.46-17.98 3.33-38.7-10.43-52.48L713.97 122.19c-7.3-7.3-19.12-7.3-26.42 0l-41.69 41.69c-7.3 7.3-7.3 19.13 0 26.42l138.28 138.27H86.32c-10.19 0-18.46 8.26-18.46 18.46v59.39c0 10.19 8.26 18.46 18.46 18.46H900.4zM937.65 598.72H123.8c-19.47 0-37.03 11.73-44.49 29.73-7.46 17.98-3.33 38.7 10.43 52.48l220.49 220.48c7.3 7.3 19.12 7.3 26.42 0l41.69-41.69c7.3-7.3 7.3-19.13 0-26.42L240.06 695.02h697.59c10.32 0 18.68-8.37 18.68-18.68v-58.93c0-10.32-8.36-18.69-18.68-18.69z" p-id="3119"></path></svg></el-button>
            <el-button style="margin-top:4px" v-if="zgtable_show"  @click="refresh()"><svg t="1661756659056" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3721" width="20" height="20"><path d="M289.6384 256H614.4a307.2 307.2 0 1 1 0 614.4H204.8a51.2 51.2 0 0 1 0-102.4h409.6a204.8 204.8 0 1 0 0-409.6H286.0032l59.2384 59.2384A51.2 51.2 0 1 1 272.7936 489.984L128 345.2416a51.2 51.2 0 0 1 0-72.448L272.7936 128a51.2 51.2 0 0 1 72.448 72.3968L289.6384 256z" fill="#666666" p-id="3722"></path></svg></el-button>
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
                    <span v-if="scope.row.score>37" style="font-size:13px;">{{scope.row.score}}</span>
                    <span v-if="scope.row.score<=37" style="font-size:13px;color: red;">{{scope.row.score}}</span>
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
         <el-affix style="float:right;margin-right:80px" :offset="67">
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
                <el-row  class="animate__animated animate__fadeIn " style="margin-top: 5%;" :gutter="50">
            
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
            <div class="animate__animated animate__backInRight">
                <el-card class="box-card">
                <template #header>
                <div class="card-header">
                    <span style="display:flex ;">
                        <el-cascader size="default" @visible-change="kg_member_choice()" :options="kgoptions" :show-all-levels="false" v-model="kgselect"/>
                        <!-- <div class="block" style="margin-left:20px;">      
                            <el-date-picker
                            v-model="kg_datetime"
                            type="dates"
                            placeholder="选择时间"
                            />
                        </div> -->
                        <div class="block" style="margin-left:20px">
                            <el-date-picker
                                @change="kg_datatime_choice()"
                                v-model="kg_datetime"
                                type="daterange"
                                range-separator="To"
                                start-placeholder="开始时间"
                                end-placeholder="结束时间"
                                style="height:32px"
                                size="default"
                            />
                            </div>
                        <el-tag  type="success" style="margin-left:20px;padding:5px;height:33px;" v-if="kg_tag" class="animate__animated animate__fadeInRightBig">{{kgselect[2]}}---个人信息总览</el-tag>
                    </span>
                    <el-button class="button" text @click="kg_member_check()">查询</el-button>
                </div>
                </template>
                <div v-if="kg_show" class="animate__animated animate__fadeIn" >
                    <div style="display:flex">
                        <el-row style="flex:0 0 50%;display:flex;flex-wrap: wrap;box-shadow:0px -5px 5px #88888830,-5px 0px 5px #88888830,5px 0px 5px #88888830,0px 5px 5px #88888830;"> 
                            <div class="box" style="height:140px;">
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">总需求数</span>
                                </div>
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">
                                        {{kg_starttime}} | {{kg_endtime}}    
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <span style="font-size:30px">
                                        {{kg_issue_pie.all}}
                                    </span>
                                    <span style="color:#5f6e82;font-size:14px;height: 20px;margin-top: 17px;">
                                        个
                                    </span>
                                </div>
                                <div style="display:flex">
                                    <el-progress
                                        style="flex: 0 0 100%"
                                        :text-inside="true"
                                        :stroke-width="24"
                                        :show-text="false"
                                        :percentage="100"
                                        status="success"
                                        :indeterminate="true"
                                        color="#95d475"
                                        />
                                </div>
                                
                            </div>
                            <div class="box" style="height:140px;">
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">完成需求数</span>
                                </div>
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">
                                        {{kg_starttime}} | {{kg_endtime}}    
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <span style="font-size:30px">
                                        {{kg_issue_pie.completed}}
                                    </span>
                                    <span style="color:#5f6e82;font-size:14px;height: 20px;margin-top: 17px;">
                                        个
                                    </span>
                                </div>
                                <div style="display:flex">
                                    <el-progress
                                        style="flex: 0 0 100%"
                                        :text-inside="true"
                                        :stroke-width="24"
                                        :percentage="kg_issue_pie.completed_percentage"
                                        status="success"
                                        color=" #95d475"
                               
                                        />
                                </div>
                            </div>
                            <div class="box" style="height:140px;">
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">延期需求数</span>
                                </div>
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">
                                        {{kg_starttime}} | {{kg_endtime}}    
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <span style="font-size:30px">
                                        {{kg_issue_pie.delay}}
                                    </span>
                                    <span style="color:#5f6e82;font-size:14px;height: 20px;margin-top: 17px;">
                                        个
                                    </span>
                                </div>
                                <div style="display:flex">
                                    <el-progress
                                        style="flex: 0 0 100%"
                                        :text-inside="true"
                                        :stroke-width="24"
                                        :percentage="kg_issue_pie.delay_percentage"
                                        status="exception"
                                        color=" #f89898"
                                        />
                                </div>
                            </div>
                            <div class="box" style="height:140px;">
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">取消需求数</span>
                                </div>
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">
                                        {{kg_starttime}} | {{kg_endtime}}    
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <span style="font-size:30px">
                                        {{kg_issue_pie.cancel}}
                                    </span>
                                    <span style="color:#5f6e82;font-size:14px;height: 20px;margin-top: 17px;">
                                        个
                                    </span>
                                </div>
                                <div style="display:flex">
                                    <el-progress
                                        style="flex: 0 0 100%"
                                        :text-inside="true"
                                        :stroke-width="24"
                                        :percentage="kg_issue_pie.cancel_percentage"
                                        status="warning"
                                        color=" #eebe77"
                                        />
                                </div>
                            </div>
                            <div class="box" style="height:140px;">
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">进行中的需求</span>
                                </div>
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">
                                        {{kg_starttime}} | {{kg_endtime}}    
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <span style="font-size:30px">
                                        {{kg_issue_pie.ongoing}}
                                    </span>
                                    <span style="color:#5f6e82;font-size:14px;height: 20px;margin-top: 17px;">
                                        个
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <el-progress
                                        style="flex: 0 0 100%"
                                        :text-inside="true"
                                        :stroke-width="24"
                                        :percentage="kg_issue_pie.ongoing_percentage"
                                        
                                        color=" #79bbff"
                                        />
                                </div>
                            </div>
                           
                        </el-row>
                        <div style="flex: 0 0 2%"></div>
                        <div style="height:400px;min-height:400px;padding:20px;flex: 0 0 48%;box-shadow:0px -5px 5px #88888830,-5px 0px 5px #88888830,5px 0px 5px #88888830,0px 5px 5px #88888830;" id="kg_echars_1"></div>
                    </div>
                    <el-divider content-position="left">Annual statistics</el-divider>
                    <div style="display:flex;">
                        <div style="width:100%;height:400px;padding:20px;min-height:400px;box-shadow:0px -5px 5px #88888830,-5px 0px 5px #88888830,5px 0px 5px #88888830,0px 5px 5px #88888830;" id="kg_echars_2"></div>
                    </div>
                    <el-divider content-position="left">Histogram</el-divider>
                    <div style="display:flex;">
                        <div style="width:100%;height:400px;min-height:400px;padding:20px;box-shadow:0px -5px 5px #88888830,-5px 0px 5px #88888830,5px 0px 5px #88888830,0px 5px 5px #88888830;" id="kg_echars_3"></div>
                    </div>
                    <el-divider content-position="left">Bug Info</el-divider>
                    <div style="display:flex">
                        <el-row style="flex:0 0 50%;display:flex;flex-wrap: wrap;box-shadow:0px -5px 5px #88888830,-5px 0px 5px #88888830,5px 0px 5px #88888830,0px 5px 5px #88888830;"> 
                            <div class="box">
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">BUG总数</span>
                                </div>
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">
                                        {{kg_starttime}} | {{kg_endtime}}    
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <div @click="kg_bug_table_check('kg_member_bugdata_all','sum_list')" style="font-size:30px;cursor:pointer;" class="kg_bug_stageinfo_title">
                                        {{kg_member_bugdata_all["sum"]}}
                                    </div>
                                    <span style="color:#5f6e82;font-size:14px;height: 20px;margin-top: 17px;">
                                        个
                                    </span>
                                </div>
                                <div style="display:flex;">                                    
                                    <span @click="kg_bug_table_check('kg_member_bugdata_all','fatal_list')" class="kg_bug_stageinfo">
                                        S:{{kg_member_bugdata_all["fatal"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_all','serious_list')" class="kg_bug_stageinfo">
                                        A:{{kg_member_bugdata_all["serious"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_all','normal_list')" class="kg_bug_stageinfo">
                                        B:{{kg_member_bugdata_all["normal"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_all','prompt_list')" class="kg_bug_stageinfo">
                                        C:{{kg_member_bugdata_all["prompt"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_all','advice_list')" class="kg_bug_stageinfo">
                                        D:{{kg_member_bugdata_all["advice"]}}&nbsp
                                    </span>
                                </div>
                            </div>
                            <div class="box">
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">新增BUG数</span>
                                </div>
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">
                                        {{kg_starttime}} | {{kg_endtime}}    
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <span @click="kg_bug_table_check('kg_member_bugdata_add','sum_list')" style="font-size:30px;cursor:pointer;" class="kg_bug_stageinfo_title">
                                        {{kg_member_bugdata_add["sum"]}}
                                    </span>
                                    <span style="color:#5f6e82;font-size:14px;height: 20px;margin-top: 17px;">
                                        个
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <span @click="kg_bug_table_check('kg_member_bugdata_add','fatal_list')" class="kg_bug_stageinfo">
                                        S:{{kg_member_bugdata_add["fatal"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_add','serious_list')" class="kg_bug_stageinfo">
                                        A:{{kg_member_bugdata_add["serious"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_add','normal_list')" class="kg_bug_stageinfo">
                                        B:{{kg_member_bugdata_add["normal"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_add','prompt_list')" class="kg_bug_stageinfo">
                                        C:{{kg_member_bugdata_add["prompt"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_add','advice_list')" class="kg_bug_stageinfo">
                                        D:{{kg_member_bugdata_add["advice"]}}&nbsp
                                    </span>
                                </div>
                            </div>
                            <div class="box">
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">遗留BUG数(包含挂起)</span>
                                </div>
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">
                                        {{kg_starttime}} | {{kg_endtime}}    
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <div @click="kg_bug_table_check('kg_member_bugdata_delay','sum_list')" style="font-size:30px;cursor:pointer;" class="kg_bug_stageinfo_title">
                                        {{kg_member_bugdata_delay["sum"]}}
                                    </div>
                                    <span style="color:#5f6e82;font-size:14px;height: 20px;margin-top: 17px;">
                                        个
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <div @click="kg_bug_table_check('kg_member_bugdata_delay','fatal_list')" class="kg_bug_stageinfo">
                                        S:{{kg_member_bugdata_delay["fatal"]}}&nbsp
                                    </div>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_delay','serious_list')" class="kg_bug_stageinfo">
                                        A:{{kg_member_bugdata_delay["serious"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_delay','normal_list')" class="kg_bug_stageinfo">
                                        B:{{kg_member_bugdata_delay["normal"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_delay','prompt_list')" class="kg_bug_stageinfo">
                                        C:{{kg_member_bugdata_delay["prompt"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_delay','advice_list')" class="kg_bug_stageinfo">
                                        D:{{kg_member_bugdata_delay["advice"]}}&nbsp
                                    </span>
                                </div>
                            </div>
                            <div class="box">
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">关闭BUG数</span>
                                </div>
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">
                                        {{kg_starttime}} | {{kg_endtime}}    
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <span @click="kg_bug_table_check('kg_member_bugdata_close','sum_list')" style="font-size:30px;cursor:pointer;" class="kg_bug_stageinfo_title">
                                        {{kg_member_bugdata_close["sum"]}}
                                    </span>
                                    <span style="color:#5f6e82;font-size:14px;height: 20px;margin-top: 17px;">
                                        个
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <span @click="kg_bug_table_check('kg_member_bugdata_close','fatal_list')" class="kg_bug_stageinfo">
                                        S:{{kg_member_bugdata_close["fatal"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_close','serious_list')" class="kg_bug_stageinfo">
                                        A:{{kg_member_bugdata_close["serious"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_close','normal_list')" class="kg_bug_stageinfo">
                                        B:{{kg_member_bugdata_close["normal"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_close','prompt_list')" class="kg_bug_stageinfo">
                                        C:{{kg_member_bugdata_close["prompt"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_close','advice_list')" class="kg_bug_stageinfo">
                                        D:{{kg_member_bugdata_close["advice"]}}&nbsp
                                    </span>
                                </div>
                            </div>
                            <div class="box">
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">BUG回归失败</span>
                                </div>
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">
                                        {{kg_starttime}} | {{kg_endtime}}    
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <span @click="kg_bug_table_check('kg_member_bugdata_return','sum_list')" style="font-size:30px;cursor:pointer;" class="kg_bug_stageinfo_title">
                                        {{kg_member_bugdata_return["sum"]}}
                                    </span>
                                    <span style="color:#5f6e82;font-size:14px;height: 20px;margin-top: 17px;">
                                        个
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <div style="display:flex;">
                                        <span @click="kg_bug_table_check('kg_member_bugdata_return','fatal_list')" class="kg_bug_stageinfo">
                                            S:{{kg_member_bugdata_return["fatal"]}}&nbsp
                                        </span>
                                        <span @click="kg_bug_table_check('kg_member_bugdata_return','serious_list')" class="kg_bug_stageinfo">
                                            A:{{kg_member_bugdata_return["serious"]}}&nbsp
                                        </span>
                                        <span @click="kg_bug_table_check('kg_member_bugdata_return','normal_list')" class="kg_bug_stageinfo">
                                            B:{{kg_member_bugdata_return["normal"]}}&nbsp
                                        </span>
                                        <span @click="kg_bug_table_check('kg_member_bugdata_return','prompt_list')" class="kg_bug_stageinfo">
                                            C:{{kg_member_bugdata_return["prompt"]}}&nbsp
                                        </span>
                                        <span @click="kg_bug_table_check('kg_member_bugdata_return','advice_list')" class="kg_bug_stageinfo">
                                            D:{{kg_member_bugdata_return["advice"]}}&nbsp
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="box">
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">BUG重启</span>
                                </div>
                                <div style="display:flex;">
                                    <span style="color:#5f6e82;font-size:14px">
                                        {{kg_starttime}} | {{kg_endtime}}    
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <span @click="kg_bug_table_check('kg_member_bugdata_restart','sum_list')" style="font-size:30px;cursor:pointer;" class="kg_bug_stageinfo_title">
                                        {{kg_member_bugdata_restart["sum"]}}
                                    </span>
                                    <span style="color:#5f6e82;font-size:14px;height: 20px;margin-top: 17px;">
                                        个
                                    </span>
                                </div>
                                <div style="display:flex;">
                                    <span @click="kg_bug_table_check('kg_member_bugdata_restart','fatal_list')" class="kg_bug_stageinfo">
                                        S:{{kg_member_bugdata_restart["fatal"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_restart','serious_list')" class="kg_bug_stageinfo">
                                        A:{{kg_member_bugdata_restart["serious"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_restart','normal_list')" class="kg_bug_stageinfo">
                                        B:{{kg_member_bugdata_restart["normal"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_restart','prompt_list')" class="kg_bug_stageinfo">
                                        C:{{kg_member_bugdata_restart["prompt"]}}&nbsp
                                    </span>
                                    <span @click="kg_bug_table_check('kg_member_bugdata_restart','advice_list')" class="kg_bug_stageinfo">
                                        D:{{kg_member_bugdata_restart["advice"]}}&nbsp
                                    </span>
                                </div>
                            </div>
           
                           
                        </el-row>
                        <div style="flex: 0 0 2%"></div>
                        <div style="height:400px;min-height:400px;padding:20px;flex: 0 0 48%;box-shadow:0px -5px 5px #88888830,-5px 0px 5px #88888830,5px 0px 5px #88888830,0px 5px 5px #88888830;" id="kg_echars_4"></div>
                        
                    </div>
                    <!-- <el-button @click="kg_test()">test</el-button> -->
                    <div id="kg_titleid" v-show="kg_titleshow">
                        <el-divider content-position="left" style="cursor:pointer" @click="kg_test()">Shanghai Data Comparison <el-icon><Switch /></el-icon></el-divider>

                    
                    
                    <div style="display:flex">
                        <el-row style="flex:0 0 50%;display:flex;flex-wrap: wrap;box-shadow:0px -5px 5px #88888830,-5px 0px 5px #88888830,5px 0px 5px #88888830,0px 5px 5px #88888830;"> 
                           
                                <div style="width: 100%;;height:400px;min-height:400px;padding:20px" id="kg_echars_5"></div>
                         
                       
                        </el-row>
                        <div style="flex: 0 0 2%"></div>
                        <el-row style="flex:0 0 48%;display:flex;flex-wrap: wrap;box-shadow:0px -5px 5px #88888830,-5px 0px 5px #88888830,5px 0px 5px #88888830,0px 5px 5px #88888830;"> 
                            
                            <div style="width: 100%;height:400px;min-height:400px;padding:20px" id="kg_echars_6"></div>
                               
                               
                        </el-row>
                    </div>
                    
                    <el-divider content-position="left" ><span>Shenzhen Data comparison</span> </el-divider>
                    <div style="display:flex">
                        <el-row style="flex:0 0 50%;display:flex;flex-wrap: wrap;box-shadow:0px -5px 5px #88888830,-5px 0px 5px #88888830,5px 0px 5px #88888830,0px 5px 5px #88888830;"> 
                           
                                <div style="width: 100%;;height:400px;min-height:400px;padding:20px" id="kg_echars_7"></div>
                         
                       
                        </el-row>
                        <div style="flex: 0 0 2%"></div>
                        <el-row style="flex:0 0 48%;display:flex;flex-wrap: wrap;box-shadow:0px -5px 5px #88888830,-5px 0px 5px #88888830,5px 0px 5px #88888830,0px 5px 5px #88888830;"> 
                            
                            <div style="width: 100%;height:400px;min-height:400px;padding:20px" id="kg_echars_8"></div>
                               
                               
                        </el-row>
                    </div>
                </div>
                <div id="kg_titleid_all" v-show="kg_titleshow_all">
                    <el-divider content-position="left" style="cursor:pointer" @click="kg_test()">Shenzhen|Shanghai Data Comparison <el-icon><Switch /></el-icon></el-divider>
                    <div style="display:flex;width: 100%;">
                        <el-row style="flex:0 0 50%;display:flex;flex-wrap: wrap;box-shadow:0px -5px 5px #88888830,-5px 0px 5px #88888830,5px 0px 5px #88888830,0px 5px 5px #88888830;"> 
                           
                                <div style="width: 100%;;height:400px;min-height:400px;padding:20px" id="kg_echars_9"></div>
                         
                       
                        </el-row>
                        <div style="flex: 0 0 2%"></div>
                        <el-row style="flex:0 0 48%;display:flex;flex-wrap: wrap;box-shadow:0px -5px 5px #88888830,-5px 0px 5px #88888830,5px 0px 5px #88888830,0px 5px 5px #88888830;"> 
                            
                            <div style="width: 100%;height:400px;min-height:400px;padding:20px" id="kg_echars_10"></div>
                               
                               
                        </el-row>
                    </div>
                </div>
                </div>
    
            </el-card>
            </div>
            <el-dialog
                :lock-scroll="true"
                v-model="kg_dialogVisible"
                width="70%"
                :modal="false"
                style="margin-left:20%;min-height:700px;height:700px;display:flex;flex-direction: column;"

            >
                <div style="width:200px;float:left;margin-left:20px">
                    <el-input
                    v-model="kg_bugtable_input"
                    placeholder="请输入搜索内容"
                    @keyup.enter.native="kg_handleEnterKeyFilter()"
                    />   
                </div>
                <el-table :data="kg_bugtableData" stripe style="min-height: 440px;height:440px;width:97%;margin:40px 20px 20px 20px">
                    <el-table-column label="#" prop="list_id" width="50"/>
                    <el-table-column prop="id" label="ID" width="100"/>
                    <el-table-column prop="title" label="标题" width="700"/>
                    <el-table-column prop="severity_name" label="严重程度" width="100"/>
                    <el-table-column prop="reporter" label="创始人" width="100"/>
                    <el-table-column prop="created" label="开始时间" width="200"/>
                    <el-table-column prop="closed" label="结束时间" width="200"/>
                    <el-table-column prop="status_name" label="状态" width="100"/>
                    <el-table-column fixed="right" label="详情" width="50">
                        <template #default="scope">
                            <el-button
                            link
                            type="primary"
                            size="small"
                            @click.prevent="kg_deleteRow(scope.row)"
                            >
                            <span>查看</span>
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="margin-top:50px;display:flex;align-items:center;">
                    
                    <el-pagination
                    style="align-items:center;"
                    :page-size="10"
                    :current-page="kg_bug_current_page"
                    layout="total, prev, pager, next"
                    :total=kg_bug_list_cache_length
                    @size-change="kg_bughandleSizeChange"
                    @current-change="kg_bughandleCurrentChange"
                    />
                </div>
          
            </el-dialog>
        </div>
            
        <!-- 综合考评页面 -->
        <div v-show="titleshow3">
            <!-- <el-button @click="zh_test()">11</el-button> -->
            <div class="animate__animated animate__fadeInRight">
                <el-card class="box-card">
                <template #header style="padding:10px">
                    <div style="display:flex;justify-content: space-between;">
                        <div></div>
                     
                        <div>
                            <el-cascader v-if="zh_close_show" size="default" @visible-change="zh_member_choice()" placeholder="请选择成员" :options="zh_kgoptions" v-model="zh_select"/>
                            <el-date-picker
                            v-if="zh_close_show"
                                v-model="zh_month_select"
                                type="month"
                                placeholder="请选择月份"
                                />
                            <el-button v-if="zh_close_show" text @click="zh_close()"><el-icon><Close /></el-icon></el-button>
                            <el-button v-if="zh_setting_show" @click="zh_setting()" style="width:20px;"><el-icon><Setting /></el-icon></el-button>
                        </div>

                    </div>
                </template>
                <div style="display:flex">
                        <el-card shadow="hover" style="flex:0 0 50%;"> 
                            <el-table :data="zh_rule" style="width: 100%" >
                                <el-table-column fixed prop="level" label="OKR评级" width="90" />
                                <el-table-column prop="data" label="评级定义" width="200" />
                                <el-table-column prop="gule" label="评级规则" width="220" />
                                <el-table-column prop="rank" label="排名" width="60" />
                                <el-table-column prop="issue" label="需求分" width="100" />
                                <el-table-column prop="bug" label="BUG分" width="100" />
                            </el-table>

                        </el-card>
                        <div style="flex: 0 0 2%"></div>
                        <el-card shadow="hover" style="height:400px;min-height:400px;padding:20px;flex: 0 0 48%;" id="zh_rank_echars"></el-card>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
    </template>
    <script>
    import * as echarts from 'echarts';
    import moment from "moment"
    import { reactive, toRefs } from '@vue/reactivity'
    import {onMounted, onUpdated} from "vue"
    import {hgaxios as axios} from "../../utils/request"
    import { ElMessage,ElMessageBox } from 'element-plus'
    // import { isDark } from '~/composables/dark'
    import { setup } from 'xe-utils/ctor'
    import {useStore} from 'vuex'
    import {hpaxios} from "../../utils/request"
    import { StarFilled } from '@element-plus/icons-vue'
    import {hputaxios} from "../../utils/request"
    import {
         useRouter } from "vue-router";
            export default{
            setup(){
                // 综合评价
                const zhget_data = reactive(
                    {
                        zh_rule:[
                        {
                            level: 'S',
                            data: '优秀以上、超出预期',
                            gule: '客观最终分值+主观分值：90+',
                            rank: '1',
                            issue: '20',
                            bug: '30',
                        },
                        {
                            level: 'A',
                            data: '优秀人员、达到预期值',
                            gule: '客观最终分值+主观分值：80+',
                            rank: '2-5',
                            issue: '17',
                            bug: '25',
                        },
                        {
                            level: 'B',
                            data: '业务能力OK、有小缺点但不影响业务',
                            gule: '客观最终分值+主观分值：70+',
                            rank: '6-12',
                            issue: '13',
                            bug: '20',
                        },
                        {
                            level: 'C',
                            data: '及格、业务能力一般、有小遗漏但不影响大方面',
                            gule: '客观最终分值+主观分值：60+',
                            rank: '13-20',
                            issue: '13',
                            bug: '20',
                        },
                        {
                            level: 'D',
                            data: '不及格、业务能力各方面达不到预期、勉强能用',
                            gule: '客观最终分值+主观分值：60-',
                            rank: '----------',
                            issue: '10',
                            bug: '15',
                        },
                        ],
                        zh_rank_echars_data:{
                            title: {
                                text: 'World Population'
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                type: 'shadow'
                                }
                            },
                            
                            legend: {},
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'value',
                                boundaryGap: [0, 0.01]
                            },
                            yAxis: {
                                type: 'category',
                                
                                data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
                            },
                            series: [
                                {
                                name: '2011',
                                label: {
                                    normal: {
                                        show: true,
                                        formatter: '{c}'
                                    },
                                  
                                    position: 'right'
                                },
                                type: 'bar',
                                data: [18203, 23489, 29034, 104970, 131744, 630230]
                                },
                            
                            ]
                        },
                        zh_kgoptions:[],
                        zh_select:"",
                        zh_month_select:"",
                        zh_setting_show:true,
                        zh_close_show:false

                    }
                )
                function zh_test(){
                    
                }
                function zh_setting(){
                    zhget_data.zh_setting_show=false
                    zhget_data.zh_close_show=true
                }
                function zh_close(){
                    zhget_data.zh_setting_show=true
                    zhget_data.zh_close_show=false
                }
                function zh_member_choice(){
                    axios({
                        url: '/api/v1/AdminConfig/',
                        method:'get',
                        params:{
                                type:"member"
                            }
                        }).then(res => {
                            var member_list = [
                            {
                                value:"所有在职",
                                label:"在职",
                                children:[
                                    {
                                        value:"上海正职",
                                        label:"上海正职",
                                        children:[
                                            
                                        ]
                                    },
                                    {
                                        value:"上海外包",
                                        label:"上海外包",
                                        children:[
    
                                        ]
                                    },
                                   
                                ]
                            },
                            {
                                value:"所有离职",
                                label:"离职",
                                children:[
                                    {
                                        value:"上海正职",
                                        label:"上海正职",
                                        children:[
                                            
                                        ]
                                    },
                                    {
                                        value:"上海外包",
                                        label:"上海外包",
                                        children:[
    
                                        ]
                                    },
                                   
                                ]
                            }
                        
                        ]
                        for (var i in res.data.data){
                            var info = res.data.data[i]
                        
                            if (info['group'] == '上海外包' && info['status'] == "在职"){
                                member_list[0]["children"][1]["children"].push(
                                    {
                                        value:i,
                                        label:i
                                    }
                                )
                            }
                            else if(info['group'] == '上海正职' && info['status'] == "在职"){
                                member_list[0]["children"][0]["children"].push(
                                    {
                                        value:i,
                                        label:i
                                    }
                                )
                            }
                            
                            else if(info['group'] == '上海正职' && info['status'] == "离职"){
                                member_list[1]["children"][0]["children"].push(
                                    {
                                        value:i,
                                        label:i
                                    }
                                )
                            }
                            else if(info['group'] == '上海外包' && info['status'] == "离职"){
                                member_list[1]["children"][1]["children"].push(
                                    {
                                        value:i,
                                        label:i
                                    }
                                )
                            }
                           
    
                        }
                        zhget_data.zh_kgoptions = member_list
                        })
                }
                // 客观数据评价功能
                const kgget_data = reactive(
                    {
                        kgselect:"",
                        kgoptions:[],
                        kg_datetime:"",
                        kg_show:false,
                        kg_tag:false,
                        kg_dialogVisible:false,
                        kg_bugtable_input:"",
                        kg_starttime:"",
                        kg_endtime:"",
                        kg_data_list:[],
                        kg_member_info:{},
                        kg_member_bugdata:{},
                        kg_member_bugdata_all:{},
                        kg_member_bugdata_add:{},
                        kg_member_bugdata_delay:{},
                        kg_member_bugdata_close:{},
                        kg_member_bugdata_return:{},
                        kg_member_bugdata_restart:{},
                        kg_bug_list_cache:[],
                        kg_bug_list_cache_length:"",
                        kg_bug_current_page:1,
                        kg_bug_info_list:"",
                        kg_bug_info_name:"",
                        kg_titleshow:true,
                        kg_titleshow_all:true,
                        kg_issue_pie:{
                         
                        },
                        kg_bugtableData:[],
                        kg_echars1_data:{
                            title: {
                                text: '个人需求统计图',
                               
                                left: 'center'
                            },
                            tooltip: {
                                trigger: 'item'
                            },
                            legend: {
                                orient: 'vertical',
                                left: 'left'
                            },
                            // color:["#79bbff","#529b2e90","#eebe77","#f89898"],
                            series: [
                                {
                                name: '需求图',
                                type: 'pie',
                                radius: '70%',
                                data: [
    
                                ],
                                label: {
                                    normal: {
                                        show: true,
                                        formatter: '{b}: {c}'
                                    }
                                },
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
                        kg_echars2_data:{
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                type: 'cross',
                                crossStyle: {
                                    color: '#999'
                                }
                                }
                            },
                            dataZoom: [
                                {
                                    orient: "horizontal",
                                    show: true,//控制滚动条显示隐藏
                                    realtime: true, //拖动滚动条时是否动态的更新图表数据
                                    height: 15, //滚动条高度
                                    start: 0, //滚动条开始位置（共100等份）
                                    end: 70,//滚动条结束位置
                                    top:353,
                              
                                    zoomLock: false, //控制面板是否进行缩放
                                },
                                // {
                                //     type: 'inside',
                                //     brushSelect: true,
                                //     start: 0,
                                //     end: 10,
                                //     xAxisIndex: [0],
                                // }
                                ],
                            grid: {
                                top: '50px',
                                left: '1%',
                                right: '1%',
                                bottom: '3%',
                                containLabel: true
                            },
                           
                            legend: {
                                data: ['需求总数', '需求延迟数', '需求分数']
                            },
                            xAxis: [
                                {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                axisPointer: {
                                    type: 'shadow'
                                }
                                }
                            ],
                            yAxis: [
                                {
                                type: 'value',
                                name: '分数',
                                min: 0,
                                max: 180,
                                interval: 30,
                                axisLabel: {
                                    formatter: '{value}分'
                                }
                                },
                                {
                                type: 'value',
                                name: '个',
                                min: 0,
                                max: 150,
                                interval: 25,
                                axisLabel: {
                                    formatter: '{value} 个'
                                }
                                }
                            ],
                            series: [
                                {
                                name: '需求总数',
                                
                                type: 'bar',
                                barWidth : 40,
                                itemStyle:{
                                    normal:{
                                        color:' #95d475'
                                    },
                                },
                                
                                label: {
                                    show: true,
                                    position: 'inside'
                                },
                                tooltip: {
                                    valueFormatter: function (value) {
                                    return value + ' 个';
                                    }
                                },
                                data: [
                                   
                                ]
                                },
                                {
                                name: '需求延迟数',
                                type: 'bar',
                                itemStyle:{
                                    normal:{
                                        color:' #f89898'
                                    }
                                },
                                barWidth : 25,
                                tooltip: {
                                    valueFormatter: function (value) {
                                    return value + '个';
                                    }
                                },
                                label: {
                                    show: true,
                                    position: 'inside'
                                },
                                data: [
                                   
                                ]
                                },
                                {
                                name: '需求分数',
                                type: 'line',
                                yAxisIndex: 1,
                                itemStyle:{
                                    normal:{
                                        color:' #79bbff'
                                    }
                                },
                                label: {
                                    show: true,
                                    position: 'inside'
                                },
                                tooltip: {
                                    valueFormatter: function (value) {
                                    return value + '分';
                                    }
                                },
                                data: []
                                }
                            ]
                            },
                        kg_echars3_data:{
                            title: {
                                text: '成员名下需求数量',
                               
                                top:"10px",
                                left: '10px'
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                type: 'shadow'
                                }
                            },
                            dataZoom: [
                                {
                                    orient: "horizontal",
                                    show: true,//控制滚动条显示隐藏
                                    realtime: true, //拖动滚动条时是否动态的更新图表数据
                                    height: 15, //滚动条高度
                                    start: 0, //滚动条开始位置（共100等份）
                                    end: 50,//滚动条结束位置
                                    top:353,
                                    zoomLock: false, //控制面板是否进行缩放
                                },
                                // {
                                //     type: 'inside',
                                //     brushSelect: true,
                                //     start: 0,
                                //     end: 10,
                                //     xAxisIndex: [0],
                                // }
                                ],
                            label: {
                                    show: true,
                                    position: 'inside'
                                },
                            xAxis: {
                                type: 'category',
                                data: []
                            },
                            yAxis: {
                                type: 'value'
                            },
                            grid: {
                                top: '100px',
                                left: '1%',
                                right: '1%',
                                bottom: '3%',
                                containLabel: true
                            },
                            series: [
                                {
                                data: [],
                                type: 'bar',
                                barGap:'2%',
                                barWidth : 30,
                                itemStyle:{
                                    normal:{
                                        color:' #79bbff'
                                    }
                                },
                                }
                            ]
                            },
                        kg_echars4_data:{
                            title: {
                                text: '个人BUG统计图',
                               
                                left: 'center'
                            },
                            tooltip: {
                                trigger: 'item'
                            },
                            // color:[" #eebe77","#f89898"," #79bbff"," #337ecc"," #95d475"],
                            legend: {
                                top: '5%',
                                orient: 'vertical',
                                left: 'left'
                            },
                            series: [
                                {
                                name: 'BUG',
                                type: 'pie',
                                
                                radius: ['40%', '70%'],
                                avoidLabelOverlap: false,
                                label: {
                                    normal: {
                                        show: true,
                                        formatter: '{b}: {c}'
                                    },
                                    show: false,
                                    position: 'center'
                                },
                               
                                labelLine: {
                                    show: false
                                },
                                data: [
                                   
                                ]
                                }
                            ]
                        },
                        kg_echars5_data:{
                            title: {
                                text: '成员名下需求统计(上海)',
                                subtext:"",
                                top:"10px",
                                left: '10px'
                            },
                            tooltip: {
                                trigger: 'item',
                                
                                formatter:'{c}%',
                                axisPointer: {
                                type: 'shadow'
                                }
                            },
                            
                            dataZoom: [
                                {
                                    orient: "horizontal",
                                    show: true,//控制滚动条显示隐藏
                                    realtime: true, //拖动滚动条时是否动态的更新图表数据
                                    height: 15, //滚动条高度
                                    start: 0, //滚动条开始位置（共100等份）
                                    end: 50,//滚动条结束位置
                                    top:353,
                                    zoomLock: true, //控制面板是否进行缩放
                                },
                                {
                                    type: 'inside',
                                    brushSelect: true,
                                    start: 0,
                                    end: 10,
                                    xAxisIndex: [0],
                                }
                                ],
                            label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{b}\n{c}%'
                                },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            grid: {
                                top: '100px',
                                left: '1%',
                                right: '1%',
                                bottom: '3%',
                                containLabel: true
                            },
                            series: [
                                {
                                data:  [120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130,150, 80, 70, 110, 130],
                                type: 'bar',
                                barGap:'2%',
                                barWidth : 30,
                                itemStyle:{
                                    normal:{
                                        color:'#79bbff'
                                    }
                                },
                                }
                            ]
                        },
                        kg_echars6_data:{
                            title: {
                                text: '成员bug提交统计(上海)',
                                subtext:'',
                                top:"10px",
                                left: '10px'
                            },
                            dataZoom: [
                                {
                                    orient: "horizontal",
                                    show: true,//控制滚动条显示隐藏
                                    realtime: true, //拖动滚动条时是否动态的更新图表数据
                                    height: 15, //滚动条高度
                                    start: 0, //滚动条开始位置（共100等份）
                                    end: 50,//滚动条结束位置
                                    top:353,
                                    zoomLock: true, //控制面板是否进行缩放
                                },
                                {
                                    type: 'inside',
                                    brushSelect: true,
                                    start: 0,
                                    end: 10,
                                    xAxisIndex: [0],
                                }
                                ],
                            tooltip: {
                                trigger: 'item',
                                formatter:'{c}%',
                                axisPointer: {
                                type: 'shadow'
                                }
                            },
                            label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{b}\n{c}%'
                                },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            grid: {
                                top: '100px',
                                left: '1%',
                                right: '1%',
                                bottom: '3%',
                                containLabel: true
                            },
                            series: [
                                {
                                data:  [120, 200, 150, 80, 70, 110, 130],
                                type: 'bar',
                                barGap:'2%',
                                barWidth : 30,
                                itemStyle:{
                                    normal:{
                                        color:' #79bbff'
                                    }
                                },
                                }
                            ]
                        },
                        kg_echars7_data:{
                            title: {
                                text: '成员名下需求统计(深圳)',
                                subtext:'',
                                top:"10px",
                                left: '10px'
                            },
                            tooltip: {
                                trigger: 'item',
                                
                                formatter:'{c}%',
                                axisPointer: {
                                type: 'shadow'
                                }
                            },
                            
                            dataZoom: [
                                {
                                    orient: "horizontal",
                                    show: true,//控制滚动条显示隐藏
                                    realtime: true, //拖动滚动条时是否动态的更新图表数据
                                    height: 15, //滚动条高度
                                    start: 0, //滚动条开始位置（共100等份）
                                    end: 100,//滚动条结束位置
                                    top:353,
                                    zoomLock: true, //控制面板是否进行缩放
                                },
                                {
                                    type: 'inside',
                                    brushSelect: true,
                                    start: 0,
                                    end: 10,
                                    xAxisIndex: [0],
                                }
                                ],
                            label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{b}\n{c}%'
                                },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            grid: {
                                top: '100px',
                                left: '1%',
                                right: '1%',
                                bottom: '3%',
                                containLabel: true
                            },
                            series: [
                                {
                                data:  [120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130,150, 80, 70, 110, 130],
                                type: 'bar',
                                barGap:'2%',
                                barWidth : 30,
                                itemStyle:{
                                    normal:{
                                        color:'#79bbff'
                                    }
                                },
                                }
                            ]
                        },
                        kg_echars8_data:{
                            title: {
                                text: '成员bug提交统计(深圳)',
                                subtext:'',
                                top:"10px",
                                left: '10px'
                            },
                            dataZoom: [
                                {
                                    orient: "horizontal",
                                    show: true,//控制滚动条显示隐藏
                                    realtime: true, //拖动滚动条时是否动态的更新图表数据
                                    height: 15, //滚动条高度
                                    start: 0, //滚动条开始位置（共100等份）
                                    end: 100,//滚动条结束位置
                                    top:353,
                                    zoomLock: true, //控制面板是否进行缩放
                                },
                                {
                                    type: 'inside',
                                    brushSelect: true,
                                    start: 0,
                                    end: 10,
                                    xAxisIndex: [0],
                                }
                                ],
                            tooltip: {
                                trigger: 'item',
                                formatter:'{c}%',
                                axisPointer: {
                                type: 'shadow'
                                }
                            },
                            label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{b}\n{c}%'
                                },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            grid: {
                                top: '100px',
                                left: '1%',
                                right: '1%',
                                bottom: '3%',
                                containLabel: true
                            },
                            series: [
                                {
                                data:  [120, 200, 150, 80, 70, 110, 130],
                                type: 'bar',
                                barGap:'2%',
                                barWidth : 30,
                                itemStyle:{
                                    normal:{
                                        color:' #79bbff'
                                    }
                                },
                                }
                            ]
                        },
                        kg_echars10_data:{
                            title: {
                                text: '成员bug提交统计(深圳|上海)',
                                subtext:'',
                                top:"10px",
                                left: '10px'
                            },
                            dataZoom: [
                                {
                                    orient: "horizontal",
                                    show: true,//控制滚动条显示隐藏
                                    realtime: true, //拖动滚动条时是否动态的更新图表数据
                                    height: 15, //滚动条高度
                                    start: 0, //滚动条开始位置（共100等份）
                                    end: 50,//滚动条结束位置
                                    top:353,
                                    zoomLock: true, //控制面板是否进行缩放
                                },
                                {
                                    type: 'inside',
                                    brushSelect: true,
                                    start: 0,
                                    end: 10,
                                    xAxisIndex: [0],
                                }
                                ],
                            tooltip: {
                                trigger: 'item',
                                formatter:'{c}%',
                                axisPointer: {
                                type: 'shadow'
                                }
                            },
                            label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{b}\n{c}%'
                                },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            grid: {
                                top: '100px',
                                left: '1%',
                                right: '1%',
                                bottom: '3%',
                                containLabel: true
                            },
                            series: [
                                {
                                data:  [120, 200, 150, 80, 70, 110, 130],
                                type: 'bar',
                                barGap:'2%',
                                barWidth : 30,
                                itemStyle:{
                                    normal:{
                                        color:' #79bbff'
                                    }
                                },
                                }
                            ]
                        },
                        kg_echars9_data:{
                            title: {
                                text: '成员bug提交统计(深圳|上海)',
                                subtext:'',
                                top:"10px",
                                left: '10px'
                            },
                            dataZoom: [
                                {
                                    orient: "horizontal",
                                    show: true,//控制滚动条显示隐藏
                                    realtime: true, //拖动滚动条时是否动态的更新图表数据
                                    height: 15, //滚动条高度
                                    start: 0, //滚动条开始位置（共100等份）
                                    end: 50,//滚动条结束位置
                                    top:353,
                                    zoomLock: true, //控制面板是否进行缩放
                                },
                                {
                                    type: 'inside',
                                    brushSelect: true,
                                    start: 0,
                                    end: 10,
                                    xAxisIndex: [0],
                                }
                                ],
                            tooltip: {
                                trigger: 'item',
                                formatter:'{c}%',
                                axisPointer: {
                                type: 'shadow'
                                }
                            },
                            label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{b}\n{c}%'
                                },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            grid: {
                                top: '100px',
                                left: '1%',
                                right: '1%',
                                bottom: '3%',
                                containLabel: true
                            },
                            series: [
                                {
                                data:  [120, 200, 150, 80, 70, 110, 130],
                                type: 'bar',
                                barGap:'2%',
                                barWidth : 30,
                                itemStyle:{
                                    normal:{
                                        color:' #79bbff'
                                    }
                                },
                                }
                            ]
                        },
                        
                    }
                )
               
                const shortcuts = [
                    {
                        text: 'Last week',
                        value: () => {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                        return [start, end]
                        },
                    },
                    {
                        text: 'Last month',
                        value: () => {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                        return [start, end]
                        },
                    },
                    {
                        text: 'Last 3 months',
                        value: () => {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                        return [start, end]
                        },
                    },
                    ]
                
                function kg_member_check(){
                    
                    kgget_data.kg_starttime=moment(kgget_data.kg_datetime[0],"yyyy-MM-DD").format().split('T')[0]
                    kgget_data.kg_endtime=moment(kgget_data.kg_datetime[1],"yyyy-MM-DD").format().split('T')[0]
                   
                    if (kgget_data.kgselect[2]==null || kgget_data.kg_datetime[0]==null || kgget_data.kg_datetime[1]==null) {
                        ElMessage({
                            showClose: true,
                            message: '请填写全部参数',
                            type: 'error',
                        })
                    }
                    else{
                        kgget_data.kg_show=true
                        kgget_data.kg_tag=true
                       
                        
                        
                        // show_false()
                        axios({
                            url: '/api/v1/ObjectiveKpiInfo/',
                            method:'get',
                            params:{
                                    member:kgget_data.kgselect[2],
                                    start:kgget_data.kg_starttime,
                                    end:kgget_data.kg_endtime
                                }
                            }).then(res => {
                                var issue_pie = [
                                    {
                                        value:res.data.data.cancel,
                                        name:"需求取消数"
                                    },
                                    {
                                        value:res.data.data.completed,
                                        name:"完成需求数"
                                    },
                                    {
                                        value:res.data.data.ongoing,
                                        name:"进行中的需求"
                                    },
                                    {
                                        value:res.data.data.delay,
                                        name:"延期需求数"
                                    }
                                ]
                                kgget_data.kg_echars1_data.series[0].data=issue_pie
                                kgget_data.kg_issue_pie=res.data.data
                                kgget_data.kg_issue_pie["completed_percentage"]=(parseFloat(res.data.data.completed/res.data.data.all)*100).toFixed(2)
                                kgget_data.kg_issue_pie["cancel_percentage"]=(parseFloat(res.data.data.cancel/res.data.data.all)*100).toFixed(2)
                                kgget_data.kg_issue_pie["delay_percentage"]=(parseFloat(res.data.data.delay/res.data.data.all)*100).toFixed(2)
                                kgget_data.kg_issue_pie["ongoing_percentage"]=(parseFloat(res.data.data.ongoing/res.data.data.all)*100).toFixed(2)
                                var issue_three_list=[]
                                var issue_three_count=[]
                                var issue_three_delay=[]
                                var issue_three_source=[]
                                for(var i in res.data.score_chart){
                                    console.log(i);
                                    for(var j in res.data.score_chart[i]){
                                        issue_three_list.push(i+"_"+j)
                                        issue_three_count.push(res.data.score_chart[i][j]["count"])
                                        issue_three_delay.push(res.data.score_chart[i][j]["delay"])
                                        issue_three_source.push(res.data.score_chart[i][j]["source"])
                                        // console.log(res.data.chart[i][j]);
                                    }
                                    // console.log(res.data.chart[res.data.chart[i]]);
                                }
                                if(issue_three_count.length<9){
                                    kgget_data.kg_echars2_data.dataZoom[0]['end']=100
                                }
                                else{
                                    kgget_data.kg_echars2_data.dataZoom[0]['end']=70
                                }
                                kgget_data.kg_echars2_data.xAxis[0].data=issue_three_list
                                kgget_data.kg_echars2_data.series[0].data=issue_three_count
                                kgget_data.kg_echars2_data.series[1].data=issue_three_delay
                                kgget_data.kg_echars2_data.series[2].data=issue_three_source
                                var project_chart_name=[]
                                var project_chart_number=[]
                                for(var i in res.data.project_chart){
                                  
                                    project_chart_name.push(i)
                                    project_chart_number.push(res.data.project_chart[i])
                                }
                                console.log();
                                if(project_chart_number.length<9){
                                    kgget_data.kg_echars3_data.dataZoom[0]['end']=100
                                }
                                else{
                                    kgget_data.kg_echars3_data.dataZoom[0]['end']=50
                                }
                                kgget_data.kg_echars3_data.xAxis.data=project_chart_name
                                kgget_data.kg_echars3_data.series[0].data=project_chart_number
                                
                                
                                var sh_issue = kg_echars_math(res.data.all_member_issues['上海'])
                                kgget_data.kg_echars5_data.title.subtext=`${kgget_data.kg_starttime}~${kgget_data.kg_endtime}|需求总数：${sh_issue[2]}`
                                kgget_data.kg_echars5_data.xAxis.data=sh_issue[0]
                                kgget_data.kg_echars5_data.series[0].data=sh_issue[1]

                                var sh_bug = kg_echars_math(res.data.all_member_bugs['上海'])
                               
                                kgget_data.kg_echars6_data.title.subtext=`${kgget_data.kg_starttime}~${kgget_data.kg_endtime}|BUG总数：${sh_bug[2]}`
                                kgget_data.kg_echars6_data.xAxis.data=sh_bug[0]
                                kgget_data.kg_echars6_data.series[0].data=sh_bug[1]

                                var sz_issue = kg_echars_math(res.data.all_member_issues['深圳'])
                                
                                kgget_data.kg_echars7_data.title.subtext=`${kgget_data.kg_starttime}~${kgget_data.kg_endtime}|需求总数：${sz_issue[2]}`
                                kgget_data.kg_echars7_data.xAxis.data=sz_issue[0]
                                kgget_data.kg_echars7_data.series[0].data=sz_issue[1]
                                
                                var sz_bug = kg_echars_math(res.data.all_member_bugs['深圳'])
                                
                                kgget_data.kg_echars8_data.title.subtext=`${kgget_data.kg_starttime}~${kgget_data.kg_endtime}|BUG总数：${sz_bug[2]}`
                                kgget_data.kg_echars8_data.xAxis.data=sz_bug[0]
                                kgget_data.kg_echars8_data.series[0].data=sz_bug[1]

                                var all_issue_cache=res.data.all_member_issues['上海']
                                
                                for (var i in res.data.all_member_issues['深圳']){
                                    res.data.all_member_issues['上海'][i]=res.data.all_member_issues['深圳'][i]
                                }
                                var all_issue = kg_echars_math(all_issue_cache)
                                kgget_data.kg_echars9_data.title.subtext=`${kgget_data.kg_starttime}~${kgget_data.kg_endtime}|需求总数：${all_issue[2]}`
                                kgget_data.kg_echars9_data.xAxis.data=all_issue[0]
                                kgget_data.kg_echars9_data.series[0].data=all_issue[1]
                                if(all_issue[1].length<9){
                                    kgget_data.kg_echars9_data.dataZoom[0]['end']=100
                                }
                                else{
                                    kgget_data.kg_echars9_data.dataZoom[0]['end']=50
                                }
                               


                                var all_bugs_cache=res.data.all_member_bugs['上海']
                                
                                for (var i in res.data.all_member_bugs['深圳']){
                                    res.data.all_member_bugs['上海'][i]=res.data.all_member_bugs['深圳'][i]
                                }
                                var all_bugs = kg_echars_math(all_bugs_cache)
                                kgget_data.kg_echars10_data.title.subtext=`${kgget_data.kg_starttime}~${kgget_data.kg_endtime}|需求总数：${all_bugs[2]}`
                                kgget_data.kg_echars10_data.xAxis.data=all_bugs[0]
                                kgget_data.kg_echars10_data.series[0].data=all_bugs[1]
                                if(all_bugs[1].length<9){
                                    kgget_data.kg_echars10_data.dataZoom[0]['end']=100
                                }
                                else{
                                    kgget_data.kg_echars10_data.dataZoom[0]['end']=50
                                }
                              
                                kg_member_projectbug()
                                kg_member_issue_echars()
                                kg_memberchart()
                                kg_member_issue_contrast()
                                kg_member_bug_contrast()
                                kgsz_member_issue_contrast()
                                kgsz_member_bug_contrast()
                                kg_member_issue_all()
                                kg_member_bug_all()
                                
                              
                               
                                kgget_data.kg_titleshow_all=false
                             
                                // document.getElementById("kg_titleid_all").className='animate__animated animate__backOutLeft'
                            
                                // setTimeout(() => {
                                //     kgget_data.kg_titleshow_all=false
                                
                                // }, 1000);
                                
                            })
                            
                           
                            
                            
                            kg_member_bug_echars()
                           
                           
                            }
                            
                        }
                function kg_test(){
                  
                       if(kgget_data.kg_titleshow==true){
                            document.getElementById("kg_titleid").className='animate__animated animate__fadeOutUp'
                            
                            setTimeout(() => {
                                kgget_data.kg_titleshow=false
                                
                               
                            }, 700);
                            setTimeout(() => {
                                document.getElementById("kg_titleid_all").className='animate__animated animate__backInRight'
                                kgget_data.kg_titleshow_all=true
                            }, 300);
                            
                       }
                       else{
                        document.getElementById("kg_titleid_all").className='animate__animated animate__backOutRight'
                            setTimeout(() => {
                                kgget_data.kg_titleshow_all=false
                                
                            }, 700);
                            setTimeout(() => {
                                document.getElementById("kg_titleid").className='animate__animated animate__fadeInDown'
                                kgget_data.kg_titleshow=true
                            }, 300);
                        
                              
                          
                        
                    
                           
                        
                       }
                       
                        // kg_member_check()
                   
                }
                function kg_echars_math(data){ 
                    var all_member_issues_name=[]
                    var all_member_issues_number=[]
                    for (var i in data){
                        
                        all_member_issues_name.push(i)
                        all_member_issues_number.push(data[i])
                    }
                    
                    for(var i=0;i<all_member_issues_number.length;i++){
                        for (var j=0;j<all_member_issues_number.length-i-1;j++){
                            // console.log(all_member_issues_number);
                            if (all_member_issues_number[j]<all_member_issues_number[j+1]){
                                all_member_issues_number[j]=[all_member_issues_number[j+1],all_member_issues_number[j+1]=all_member_issues_number[j]][0]
                                all_member_issues_name[j]=[all_member_issues_name[j+1],all_member_issues_name[j+1]=all_member_issues_name[j]][0]
                            }
                        }
                    }
                    var sh_issue_count = 0
                    
                    for (var i in all_member_issues_number){
                        sh_issue_count+=all_member_issues_number[i]
                    }
                    
                    for(var i in all_member_issues_number){
                        all_member_issues_number[i] = Math.round((all_member_issues_number[i]/sh_issue_count)*100)
                    }
                    for(var i=0;i<all_member_issues_name.length;i++){
                        
                        if(all_member_issues_name[i]==kgget_data.kgselect[2]){
                            var num = all_member_issues_number[i]
                            all_member_issues_number[i]={
                                "value":num,
                                "itemStyle":{
                                    "color":"#a90000"
                                }
                            }
                        }
                    }
                   
                    var result = []
                    result.push(all_member_issues_name,all_member_issues_number,sh_issue_count)
                    return result
                }
                function show_false(){
                    // setTimeout(() => {
                    //     kgget_data.kg_titleshow_all=false
                    // }, 2000);
                }
                function kg_member_issue_all(){
                    var kg_echars9 = echarts.getInstanceByDom(document.getElementById("kg_echars_9"))
                        if (kg_echars9 == null) { // 如果不存在，就进行初始化
                            kg_echars9 = echarts.init(document.getElementById("kg_echars_9"));
                        }
                        kg_echars9.setOption(kgget_data.kg_echars9_data,true);
                }
                function kg_member_bug_all(){
                    var kg_echars10 = echarts.getInstanceByDom(document.getElementById("kg_echars_10"))
                        if (kg_echars10 == null) { // 如果不存在，就进行初始化
                            kg_echars10 = echarts.init(document.getElementById("kg_echars_10"));
                        }
                        kg_echars10.setOption(kgget_data.kg_echars10_data,true);
                }   
                function kg_bug_table_check(list,name){
                    kgget_data.kg_bugtable_input=""
                    kgget_data.kg_bug_current_page=1
                    var data = []
                    kgget_data.kg_dialogVisible=true
                    var count = 1
                    for(var i in kgget_data[list][name]){
                        kgget_data[list][name][i]["list_id"]=count
                        count+=1
                    }
                    for (var i=0;i<10;i++){
                        if(kgget_data[list][name][i]!=undefined){
                            data.push(kgget_data[list][name][i])
                        }
                        
                    }
                    kgget_data.kg_bugtableData=data
                    kgget_data.kg_bug_list_cache=kgget_data[list][name]
                    kgget_data.kg_bug_list_cache_length = kgget_data[list][name.split("_")[0]]
                    kgget_data.kg_bug_info_list=list
                    kgget_data.kg_bug_info_name = name
                    // console.log(kgget_data[list][name]);
                }
                function kg_bughandleSizeChange(val){
                    console.log(val);
                }
                function kg_bughandleCurrentChange(val){
                    
                    var data = []
                    var num = parseInt(val.toString()+"0")
          
                    for(var i=num-10;i<num;i++){
                        console.log(i);
                        if(kgget_data.kg_bug_list_cache[i]!=undefined){
                            data.push(kgget_data.kg_bug_list_cache[i])
                        }
                    }
                    console.log(data);
                    kgget_data.kg_bugtableData=data
                    kgget_data.kg_bug_current_page = val
                   
                }
                function kg_handleEnterKeyFilter(){
                    kgget_data.kg_bug_current_page=1
                    
                    var data_list = []
                    if(kgget_data.kg_bugtable_input != ""){
                        for(var i in kgget_data.kg_bug_list_cache){
                            var data = kgget_data.kg_bug_list_cache[i]['title']
                            if (data.indexOf(kgget_data.kg_bugtable_input) != -1){
                                data_list.push(kgget_data.kg_bug_list_cache[i])
                            }
                        }
                        kgget_data.kg_bugtableData=data_list
                        kgget_data.kg_bug_list_cache_length=data_list.length
                    }
                    else{
                        kg_bug_table_check(kgget_data.kg_bug_info_list,kgget_data.kg_bug_info_name)
                    }
                }
                function kg_member_issue_contrast(){
                   
                        var kg_echars5 = echarts.getInstanceByDom(document.getElementById("kg_echars_5"))
                        if (kg_echars5 == null) { // 如果不存在，就进行初始化
                            kg_echars5 = echarts.init(document.getElementById("kg_echars_5"));
                        }
                        kg_echars5.setOption(kgget_data.kg_echars5_data,true);
        
                }
                function kgsz_member_issue_contrast(){
                   
                   var kg_echars7 = echarts.getInstanceByDom(document.getElementById("kg_echars_7"))
                   if (kg_echars7 == null) { // 如果不存在，就进行初始化
                       kg_echars7 = echarts.init(document.getElementById("kg_echars_7"));
                   }
                   kg_echars7.setOption(kgget_data.kg_echars7_data,true);
   
                }
                function kg_member_bug_contrast(){
                   
                        var kg_echars6 = echarts.getInstanceByDom(document.getElementById("kg_echars_6"))
                        if (kg_echars6 == null) { // 如果不存在，就进行初始化
                            kg_echars6 = echarts.init(document.getElementById("kg_echars_6"));
                        }
                        kg_echars6.setOption(kgget_data.kg_echars6_data,true);
              
                }
                function kgsz_member_bug_contrast(){
                   
                   var kg_echars8 = echarts.getInstanceByDom(document.getElementById("kg_echars_8"))
                   if (kg_echars8 == null) { // 如果不存在，就进行初始化
                       kg_echars8 = echarts.init(document.getElementById("kg_echars_8"));
                   }
                   kg_echars8.setOption(kgget_data.kg_echars8_data,true);
         
                }
                function kg_deleteRow(val){
                    console.log(val.url);
                    window.open(val.url,"_blank")
                }
                function kg_member_issue_echars(){
                        var kg_echars1 = echarts.getInstanceByDom(document.getElementById("kg_echars_1"))
                        if (kg_echars1 == null) { // 如果不存在，就进行初始化
                            kg_echars1 = echarts.init(document.getElementById("kg_echars_1"));
                        }
                        kg_echars1.setOption(kgget_data.kg_echars1_data,true);
                }
                function kg_memberchart(){
                        var kg_echars2 = echarts.getInstanceByDom(document.getElementById("kg_echars_2"))
                        if (kg_echars2 == null) { // 如果不存在，就进行初始化
                            kg_echars2 = echarts.init(document.getElementById("kg_echars_2"));
                            }
                            kg_echars2.setOption(kgget_data.kg_echars2_data,true);
                    }
                function kg_member_projectbug(){
                    
                    setTimeout(() => {
                        var kg_echars3 = echarts.getInstanceByDom(document.getElementById("kg_echars_3"))
                        if (kg_echars3 == null) { // 如果不存在，就进行初始化
                            kg_echars3 = echarts.init(document.getElementById("kg_echars_3"));
                        }
                        kg_echars3.setOption(kgget_data.kg_echars3_data,true);
                    }, 300);
                }
                function kg_member_bug_echars(){
                    axios({
                        url: '/api/v1/BugStatistics/',
                        method:'get',
                        params:{
                            project:"all",
                            start:kgget_data.kg_starttime,
                            end:kgget_data.kg_endtime,
                            _type:"fx",
                            member:kgget_data.kgselect[2],
                            iteration:"所有迭代"
                            }
                        })
                        .then(res => {
                            var data = []
                            kgget_data.kg_member_bugdata=res.data.data
                            kgget_data.kg_member_bugdata_all=res.data.data["BUG总数"]
                            kgget_data.kg_member_bugdata_add=res.data.data["新增BUG数"]
                            kgget_data.kg_member_bugdata_delay=res.data.data["遗留BUG数"]
                            kgget_data.kg_member_bugdata_close=res.data.data["关闭BUG数"]
                            kgget_data.kg_member_bugdata_return=res.data.data["BUG回归失败"]
                            kgget_data.kg_member_bugdata_restart=res.data.data["BUG重启"]
                            for(var i in res.data.data){
                                if (i != "BUG总数"){
                                    data.push(
                                    {
                                        "value":res.data.data[i]["sum"],
                                        "name":i
                                    }
                                    )
                                }
                            }
                            

                            kgget_data.kg_echars4_data.series[0]["data"]=data
                            var kg_echars4 = echarts.getInstanceByDom(document.getElementById("kg_echars_4"))
                            if (kg_echars4 == null) { // 如果不存在，就进行初始化
                                kg_echars4 = echarts.init(document.getElementById("kg_echars_4"));
                                }
                            kg_echars4.setOption(kgget_data.kg_echars4_data,true);
                        })
                        
                    }
                function kg_datatime_choice(){
                    kgget_data.kg_titleshow=true
                    kgget_data.kg_titleshow_all=true
                    kgget_data.kg_tag=false
                    kgget_data.kg_show=false
                }
                function kg_member_choice(){
                    kgget_data.kg_titleshow=true
                    kgget_data.kg_titleshow_all=true
                    kgget_data.kg_tag=false
                    kgget_data.kg_show=false
                    axios({
                        url: '/api/v1/AdminConfig/',
                        method:'get',
                        params:{
                                type:"member"
                            }
                        }).then(res => {
                            var member_list = [
                            {
                                value:"所有在职",
                                label:"在职",
                                children:[
                                    {
                                        value:"上海正职",
                                        label:"上海正职",
                                        children:[
                                            
                                        ]
                                    },
                                    {
                                        value:"上海外包",
                                        label:"上海外包",
                                        children:[
    
                                        ]
                                    },
                                    {
                                        value:"深圳正职",
                                        label:"深圳正职",
                                        children:[
                                            
                                        ]
                                    },
                                    {
                                        value:"深圳外包",
                                        label:"深圳外包",
                                        children:[
    
                                        ]
                                    },
                                ]
                            },
                            {
                                value:"所有离职",
                                label:"离职",
                                children:[
                                    {
                                        value:"上海正职",
                                        label:"上海正职",
                                        children:[
                                            
                                        ]
                                    },
                                    {
                                        value:"上海外包",
                                        label:"上海外包",
                                        children:[
    
                                        ]
                                    },
                                    {
                                        value:"深圳正职",
                                        label:"深圳正职",
                                        children:[
                                            
                                        ]
                                    },
                                    {
                                        value:"深圳外包",
                                        label:"深圳外包",
                                        children:[
    
                                        ]
                                    },
                                ]
                            }
                        
                        ]
                        for (var i in res.data.data){
                            var info = res.data.data[i]
                        
                            if (info['group'] == '上海外包' && info['status'] == "在职"){
                                member_list[0]["children"][1]["children"].push(
                                    {
                                        value:i,
                                        label:i
                                    }
                                )
                            }
                            else if(info['group'] == '上海正职' && info['status'] == "在职"){
                                member_list[0]["children"][0]["children"].push(
                                    {
                                        value:i,
                                        label:i
                                    }
                                )
                            }
                            else if(info['group'] == '深圳正职' && info['status'] == "在职"){
                                member_list[0]["children"][2]["children"].push(
                                    {
                                        value:i,
                                        label:i
                                    }
                                )
                            }else if(info['group'] == '深圳外包' && info['status'] == "在职"){
                                member_list[0]["children"][3]["children"].push(
                                    {
                                        value:i,
                                        label:i
                                    }
                                )
                            }
                            else if(info['group'] == '上海正职' && info['status'] == "离职"){
                                member_list[1]["children"][0]["children"].push(
                                    {
                                        value:i,
                                        label:i
                                    }
                                )
                            }
                            else if(info['group'] == '上海外包' && info['status'] == "离职"){
                                member_list[1]["children"][1]["children"].push(
                                    {
                                        value:i,
                                        label:i
                                    }
                                )
                            }
                            else if(info['group'] == '深圳正职' && info['status'] == "离职"){
                                member_list[1]["children"][2]["children"].push(
                                    {
                                        value:i,
                                        label:i
                                    }
                                )
                            }
                            else if(info['group'] == '深圳外包' && info['status'] == "离职"){
                                member_list[1]["children"][3]["children"].push(
                                    {
                                        value:i,
                                        label:i
                                    }
                                )
                            }
    
                        }
                        console.log(member_list);
                        kgget_data.kgoptions = member_list
                        })
                }
                const router = useRouter();
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
                            zgtable_change_show:false,
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
                            testdata:111,
                            piechart_options:{
                                    title: {
                                        text: '',
                                        subtext: '',
                                        left: 'left',
                                        top:"1%",
                                       
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
                                            formatter:function(data){
                                               
                                                return data.name + ":" + data.value + "分" + "\n" 
                                                + "占比" + ":" + ((data.value * 100) /60).toFixed(2)+"%"
                                            }
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
                 
                    if (flag == 0){
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
                           
                            if (get_data.tableData.length == 0){
                                ElMessage({
                                        message: "整表删除成功",
                                        type: 'success',
                                    })
                                setTimeout(() => {
                                    location.reload()
                                }, 300);
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
                        console.log(data_len[i]);
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
    
                        console.log(score_1);
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
                        
                        
                        var myDate = new Date();
                        var year = myDate.getFullYear(); //获取当前年份(2位)
                        console.log(year);
                        var Last_month = new Date().getMonth();
                        Last_month = ((Last_month == 0) ? (12) : (Last_month));
                        console.log(Last_month);
                        axios({
                        url: '/api/v1/SubjectiveKpi/',
                        method:'get',
                        params:{
                                date:year+"-"+Last_month
                            }
                        }).then(res => {
                            console.log(res.data.data.kpi);
                        })
                        
                        setTimeout(() => {
                            var zh_rank_e = echarts.getInstanceByDom(document.getElementById("zh_rank_echars"))
                            if (zh_rank_e == null) { // 如果不存在，就进行初始化
                                zh_rank_e = echarts.init(document.getElementById("zh_rank_echars"));
                            }
                            zh_rank_e.setOption(zhget_data.zh_rank_echars_data,true);
                        }, 500);
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
                            console.log(get_data.shwb,111);
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
                  
                }
                function ztimechange(){
                    get_data.tableData=[]
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
                            }
                            else if (res.data.code==10290){
                                get_data.butshow3class= "animate__animated animate__backOutLeft"
                                get_data.zgtable_show=true;
                                get_data.group_leader=res.data.data.members
                                get_data.zgtable_change_show=true
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
                     get_data.piechart_length=get_data.tableData.length
                    if (get_data.zgtable == true){
                        get_data.zgecharts = true
                        get_data.show_333=true
                        get_data.zgtable = false
                        setTimeout(() => {
                            for(var i=0; i < get_data.piechart_length;i++){
                      
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
                            console.log(lis);
                            // lis.pop()
                            // console.log(lis);
                        
                        }
                        // lis.pop()
                        options.series[0].data = lis
                        options.title.text=name
                        options.title.subtext=echartstitle
                        
                        chart.setOption(options,true)
                        
                    }
                        }, 300);
                    }
                    else{
                        get_data.zgtable = true
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
                            delete lis["创新性"]
                        }
                        lis.pop()
                        options.series[0].data = lis
                        options.title.text=name
                        options.title.subtext=echartstitle
                        chart1.setOption(options,true)
                        
                    }
                    }, 300);
                }
                function refresh(){
                    // router.push({path:'/qa/jump'})
                    get_data.zgtable_show=false
                    get_data.zgtable=true
                    get_data.zgecharts=false
                    get_data.time_value1=[]
                    get_data.group_leader_1=[]
                    get_data.checkList=[]
                    get_data.butshow3class= "animate__animated animate__backInLeft"
                    get_data.butshow3=true
                    // piechart()
                }
                return{ 
                    ...toRefs(get_data),
                    ...toRefs(kgget_data),
                    ...toRefs(zhget_data),
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
                    refresh,
                    kg_member_choice,
                    kg_member_check,
                    shortcuts,
                    kg_datatime_choice,
                    kg_member_issue_echars,
                    kg_memberchart,
                    kg_member_bug_echars,
                    kg_member_projectbug,
                    kg_bug_table_check,
                    kg_bughandleCurrentChange,
                    kg_bughandleSizeChange,
                    kg_handleEnterKeyFilter,
                    kg_deleteRow,
                    kg_member_issue_contrast,
                    kg_member_bug_contrast,
                    kgsz_member_issue_contrast,
                    kgsz_member_bug_contrast,
                    kg_test,
                    kg_member_issue_all,
                    kg_member_bug_all,
                    show_false,
                    zh_test,
                    zh_member_choice,
                    zh_setting,
                    zh_close
                }
            }
        }
    
    </script>
    <style scoped >
    .demo-date-picker {
      display: flex;
      width: 100%;
      padding: 0;
      flex-wrap: wrap;
    }
    .demo-date-picker .block {
      padding: 30px 0;
      text-align: center;
      border-right: solid 1px var(--el-border-color);
      flex: 1;
    }
    .demo-date-picker .block:last-child {
      border-right: none;
    }
    .demo-date-picker .demonstration {
      display: block;
      color: var(--el-text-color-secondary);
      font-size: 14px;
      margin-bottom: 20px;
    }
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
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
    }
    
    .text {
      font-size: 14px;
    }
    
    .item {
      margin-bottom: 18px;
    }
    
    .box-card {
      width: 100%;
    }
    .demo-date-picker {
      display: flex;
      width: 100%;
      padding: 0;
      flex-wrap: wrap;
    }
    
    .demo-date-picker .block {
      padding: 30px 0;
      text-align: center;
      border-right: solid 1px var(--el-border-color);
      flex: 1;
    }
    .demo-date-picker .block:last-child {
      border-right: none;
    }
    
    .demo-date-picker .container {
      flex: 1;
      border-right: solid 1px var(--el-border-color);
    }
    .demo-date-picker .container .block {
      border-right: none;
    }
    .demo-date-picker .container .block:last-child {
      border-top: solid 1px var(--el-border-color);
    }
    .demo-date-picker .container:last-child {
      border-right: none;
    }
    
    .demo-date-picker .demonstration {
      display: block;
      color: var(--el-text-color-secondary);
      font-size: 14px;
      margin-bottom: 20px;
    }
    .card_css{
        margin: 20px;
    }
    .kg_bug_title{
        font-size:17px;
        float: left;
    }
    .kg_bug_text{
        font-size:14px;
        float: left;
        margin:5px 0px 5px 0px
    }
    .kg_bug_stage{
        font-size:14px;
        float: left;
        margin:5px 0px 5px 0px
    }
    .box{
        box-shadow:0px -5px 5px #88888830,-5px 0px 5px #88888830,5px 0px 5px #88888830,0px 5px 5px #88888830;
        flex:0 0 28%;
        margin:20px;
        display:flex;
        flex-direction:column;
        padding:10px;
        height: 120px;
    }
    .kg_bug_stageinfo{
        color:#5f6e82;
        font-size:14px;
        cursor:pointer;
    }
    .kg_bug_stageinfo:hover{
        color:  #f89898;
    }
    .kg_bug_stageinfo_title:hover{
        color: #a0cfff;
    }
    .scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}

    </style>
    