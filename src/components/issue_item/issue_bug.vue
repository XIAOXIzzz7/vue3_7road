<template>

<div id="pronbit" ref="pronbit"></div>
<!-- <el-button @click="membutton()">test</el-button> -->
<!-- <el-button  style="float:left;margin-left:0px;padding:20px;border:none;margin:10px" @click="showtable = !showtable" @mousemove="enter()" @mouseout="leave()" ><h5 v-if="seen" style="font-size:10px;float:center;margin:0px" @mousemove="enter()" @mouseout="leave()">编辑</h5></el-button>
<el-button  style="float:left;margin-left:0px;padding:20px;border:none;margin:10px"  @click="addtext()" @mousemove="enter2()" @mouseout="leave2()"><h5 v-if="seen2"  style="font-size:10px;float:center;margin:0px"  @mousemove="enter2()" @mouseout="leave2()">添加</h5></el-button>
<el-button  style="float:left;margin-left:0px;padding:20px;border:none;margin:10px"  @click="deletetext()" @mousemove="enter3()" @mouseout="leave3()"> <h5 v-if="seen3" style="font-size:10px;float:center;margin:0px" @mousemove="enter3()" @mouseout="leave3()">删除</h5></el-button> -->
<div id="pdf-demo" >
    <div id="demo" >

    <div class="block" style="display:flex;justify-content:center">
        <!-- 选择项目与时间判断查询 -->
        <el-select v-if="downloadbutton" v-model="value" @change="peojectmenu()" @click="optionspull()" placeholder="请选择需要查询的项目" style="margin:15px"> 
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <div class="example-block" style="margin:15px" v-if="downloadbutton">
            
            <el-cascader
            style="width:250px"
            v-model="memvalue"
            @visible-change="membermenu($event)"
            :options="memoptions"
            :props="props"
            
            collapse-tags
          
            
            @remove-tag="membermenu($event)"
            placeholder="人员列表
            "
            />
        </div>
        <!-- <el-select v-if="downloadbutton" multiple collapse-tags @change="mem_choice"  @visible-change="membermenu($event);"  v-model="memvalue" placeholder="请选择成员" style="margin:15px"> 
            <el-option
            v-for="item in memoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select> -->
        <el-date-picker v-if="downloadbutton" @change="stimemenu()" style="margin:15px;float:center"
        v-model="timevalue1"
     
        
        placeholder="开始时间">
        </el-date-picker>
        
        <el-date-picker v-if="downloadbutton" @change="etimemenu()" style="margin:15px"
        v-model="timevalue2"
        placeholder="结束时间">
        </el-date-picker>
        <el-button v-if="downloadbutton" style="margin:15px" :disabled="value!='' && memvalue!='' && timevalue1!='' && timevalue2!=''?false:true" @click="query()">查询</el-button>
        <el-button v-if="downloadbutton" style="margin:15px" @click="downshow();handleDown()">下载</el-button>
        
    </div>
    <h5 class="h5title" style="padding-left:110px;margin-top:0px;font-size:20px;display:flex;justify-content:center" @click="restore()" v-if="nodownshow">{{value_name}}</h5>
    <div v-if="show2">
        <el-divider content-position="right" >Issue Bug</el-divider>
        <!-- <h5 class="nonetitle">请先选择所要查询的项目与时间</h5> -->
    </div>
    <hr v-if="showtable">
    <div v-if="showtable" style="background-color:#00b44e;border:1px solid #DCDFE6;">
        <h5 style="font-size:17px;margin:8px;color:white">{{value}}-{{timevalue1}}/{{timevalue2}}</h5>
    </div>       
    <div v-if="showtable" style="display:flex;flex-dorection:row;">
        
        <div style="display:flex;background-color:#33CC66;width:200px;flex-direction:column;justify-content:center">
            <h5 style="float:center;font-size:17px;color:white">数据总结</h5>
        </div>
        <div style="width:100%">
            <!-- <div v-for="i of textnumber" :key="i">
                <el-input v-if="showtable" @keydown.enter="text()" autosize placeholder="请输入内容" v-model="textarea1[i]" ></el-input>
            </div> -->
            
            <div class="inputDeep" v-for="i of textnumber" :key="i">
                <el-input placeholder="请输入内容" v-model="textarea1[i]"></el-input>
            </div>
            
        </div>
    </div>
    <!-- <el-input v-if="showtable" @keydown.enter="text()" v-model="texttitle" ></el-input>
     -->
    
    <div v-if="show">
        <div style="display:flex;flex-direction:column">
    <div class="h5title"  style="padding: 5px 15px 5px 15px;display: flex;margin-bottom:0px;border-bottom:1px solid #dcdfe6;animation:mymove 1s forwards" v-if="report_search_show">
        <div  style="display:flex;flex-direction:column;flex:0 0 40%">
            <div style="display:flex;">

            <h5 style="font-weight:bolder;font-size:25px">
                筛选条件
                
            </h5>
            <el-tooltip
                    class="box-item"
                    effect="dark"
                    content="筛选条件非必选"
                    placement="right-start"
                >
                <svg t="1657785387229" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6477" width="30" height="30"><path d="M544 789.333333h105.173333a10.666667 10.666667 0 0 0 10.666667-10.666666v-0.362667l-3.232-94.304a32 32 0 0 1 14.293333-27.765333C750.933333 603.189333 800 513.792 800 416c0-159.061333-128.938667-288-288-288S224 256.938667 224 416c0 97.813333 49.098667 187.232 129.141333 240.266667a32 32 0 0 1 14.314667 25.578666l3.338667 97.184a10.666667 10.666667 0 0 0 10.666666 10.304H480V572.693333l-76.64-81.429333a32 32 0 0 1 46.613333-43.861333l63.36 67.328 72.693334-68.661334a32 32 0 0 1 43.946666 46.528L544 573.792V789.333333z m320-373.333333a351.530667 351.530667 0 0 1-142.826667 283.146667l2.634667 76.96A74.666667 74.666667 0 0 1 649.173333 853.333333h-267.733333a74.666667 74.666667 0 0 1-74.624-72.106666l-2.784-81.194667A351.541333 351.541333 0 0 1 160 416C160 221.6 317.6 64 512 64s352 157.6 352 352zM416 960a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64H416z" p-id="6478" fill="#409EFF"></path></svg>
                </el-tooltip>
            
        </div>
        <div style="display:flex">
            <el-divider  content-position="left">select</el-divider>
            <!-- <h5 style="flex: 0 0 10%"></h5>
            <h5 style="font-size: 30px;text-shadow: 0 0 2px black;color: white;">Quality Management & Technical Support</h5> -->
        </div>
        <div>
            <el-select clearable @change="report_search_template_info()" v-model="report_search_template"  placeholder="模板名称" style="width:20%;padding:0px 5px 0px 5px;margin-left:10px" size="small">
                <el-option
                v-for="item in report_search_template_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                />
            </el-select>
       
        
        </div>
        <div style="margin-top:10px">
             <el-input
                    v-model="report_search_year"
                    size="small"
                    placeholder="年份"
                    :prefix-icon="Search"
                    style="width:20%;padding:0px 5px 0px 5px;margin:0px 0px 0px 10px;font-size:14px"
                    
                />
            <el-input
                    v-model="report_search_month"
                    size="small"
                    placeholder="月份"
                    :prefix-icon="Search"
                    style="width:20%;padding:0px 5px 0px 5px;margin:0px 0px 0px 10px;font-size:14px"
                   
                />
            <el-input
                    v-model="report_search_day"
                    size="small"
                    placeholder="日期"
                    :prefix-icon="Search"
                    style="width:20%;padding:0px 5px 0px 5px;margin:0px 0px 0px 10px;font-size:14px"
                    
                />
            <el-input
                    v-model="report_search_project"
                    size="small"
                    placeholder="项目"
                    :prefix-icon="Search"
                    style="width:20%;padding:0px 5px 0px 5px;margin:0px 0px 0px 10px;font-size:14px"
                   
                />
        </div>
        </div>
        <div style="flex:0 0 5%">
            
        </div>
        <div style="display:flex;justify-content:center">
            <h5 class="before" style="font-weight:600;margin-top:6%;font-size: 42px" text="Quality Management & Technical Support">Quality Management & Technical Support</h5>
        </div>
    </div>
    <div class="h5title" style="padding: 5px 15px 5px 15px;display: flex;margin-top:0px" v-if="edit_table_show">
            <el-button text style="width:3%;padding:0px 5px 0px 5px" size="small" type="info" plain @click="edit_table(data_set_show_1),show_rich_text()">
              <h3 style="font-size:5px;height:3px">打开编辑</h3>
            </el-button>
            <el-button text :disabled="data_set_show_1==false" style="width:3%;padding:0px 5px 0px 5px" size="small" type="info" plain @click="change_table();" >
              <h3 style="font-size:5px;height:3px">预览报告</h3>
            </el-button>
            <el-button text  style="width:3%;padding:0px 5px 0px 5px" size="small" type="info" plain @click="rtf_add_show = true" >
              <h3 style="font-size:5px;height:3px">新建模板</h3>
            </el-button>
            <el-button text  style="width:3%;padding:0px 5px 0px 5px" size="small" type="info" plain @click="rtf_up_show = true" >
              <h3 style="font-size:5px;height:3px">上传报告</h3>
            </el-button>
            <el-popconfirm title="是否删除该报告？" @confirm="rtf_delete()">
                <template #reference>
                    <el-button text  style="width:3%;padding:0px 5px 0px 5px" size="small" type="info" plain  >
                        <h3 style="font-size:5px;height:3px">删除</h3>
                    </el-button>
                </template>
            </el-popconfirm>
            
             
             <el-select v-model="template_select_data"  placeholder="模板库" style="width:6%;padding:0px 5px 0px 5px;margin-left:10px" size="small" @change="template_select_change()">
                <el-option
                v-for="item in template_select_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                />
            </el-select>
            <el-cascader v-if="rtf_version_show" placeholder="报告库" v-model="cascader_data"  @visible-change="cascader_membermenu($event)" style="width:6%;padding:0px 5px 0px 5px;margin-left:10px" size="small" :props="table_props" />
           
                <el-input
                    v-model="template_input_data"
                    size="small"
                    placeholder="搜索报告"
                    :prefix-icon="Search"
                    style="width:10%;padding:0px 5px 0px 5px;margin:0px 0px 0px 10px;font-size:14px"
                    @keyup.enter.native="template_input_enter()"
                />
                <el-button style="width:3%;padding:0px 5px 0px 5px" size="small" type="info" plain @click="template_input_enter_search()">
                    <h3 style="font-size:5px;height:3px">搜索</h3>
                </el-button>
                <svg t="1657780394605" @click="report_search_show =! report_search_show" style="margin: 3px 0px 0px 3px;cursor:pointer" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3794" width="17" height="17"><path d="M577.499296 1023.99875a99.999878 99.999878 0 0 1-47.999942-11.999985l-131.999839-72.999911a99.999878 99.999878 0 0 1-51.999936-87.999893V431.999473a19.999976 19.999976 0 0 0-7.99999-15.999981L32.499961 171.99979l-3.999995-3.999995C0.5 138.99983-6.499991 96.999882 9.499989 59.999927S60.499927 0 100.499878 0h821.998997c39.999951 0 75.999907 22.999972 91.999887 59.999927s8.999989 77.999905-17.999978 107.999868l-3.999995 3.999995-307.999624 246.999699a19.999976 19.999976 0 0 0-6.999991 15.99998v488.999403a99.999878 99.999878 0 0 1-99.999878 99.999878zM84.499897 111.999863l302.999631 241.999705a98.999879 98.999879 0 0 1 37.999953 77.999905v418.999488a19.999976 19.999976 0 0 0 9.999988 17.999978l131.999839 71.999912a19.999976 19.999976 0 0 0 29.999963-17.999978V434.999469a99.999878 99.999878 0 0 1 36.999955-77.999905l303.999629-244.999701a19.999976 19.999976 0 0 0-15.99998-31.999961H100.499878a19.999976 19.999976 0 0 0-15.999981 31.999961z m881.998924 28.999965z" fill="#409EFF" p-id="3795"></path><path d="M983.4988 520.999364H757.499076a39.999951 39.999951 0 0 1 0-79.999902h225.999724a39.999951 39.999951 0 0 1 0 79.999902zM983.4988 670.999181H757.499076a39.999951 39.999951 0 0 1 0-79.999902h225.999724a39.999951 39.999951 0 0 1 0 79.999902zM983.4988 819.998999H757.499076a39.999951 39.999951 0 0 1 0-79.999902h225.999724a39.999951 39.999951 0 0 1 0 79.999902z" fill="#409EFF" p-id="3796"></path></svg>
            <span style="width:25%;padding:0px 5px 0px 5px;margin-left:10px;font-size:14px" v-if="report_show">{{template_value}}_{{year_value}}_{{month_value}}_{{day_value}}_{{report_value}}</span>
            <span style="width:10%;padding:0px 5px 0px 5px;margin-left:10px;font-size:14px" v-if="template_show">{{template_select_data}}</span>
            <span style="width:25%;padding:0px 5px 0px 5px;margin-left:10px;font-size:14px" v-if="search_show">{{template_value}}_{{update_year}}_{{update_month}}_{{update_day}}_{{report_value}}</span>
          <!-- <el-button style="width:3%;padding:0px 5px 0px 5px" size="small" type="primary" plain @click="add_set()">
              <h3 style="font-size:5px;height:3px">+</h3>
          </el-button>
          <el-button style="width:3%;padding:0px 5px 0px 5px" size="small" type="info" plain @click="del_set()">
              <h3 style="font-size:5px;height:3px">-</h3>
          </el-button>
          <el-button style="width:3%;padding:0px 5px 0px 5px" size="small" type="primary" plain @click="add_set_2()">
              <h3 style="font-size:5px;height:3px">++</h3>
          </el-button>
          <el-button style="width:3%;padding:0px 5px 0px 5px" size="small" type="info" plain @click="del_set_2()">
              <h3 style="font-size:5px;height:3px">- -</h3>
          </el-button>
          <el-button style="width:3%;padding:0px 5px 0px 5px" size="small" type="info" plain @click="del_set_all()">
              <h3 style="font-size:5px;height:3px">x</h3>
          </el-button> -->
      </div>
    
        <el-drawer
            v-model="rtf_drawer"
            title="报告搜索"
            direction="rtl"
      
        >
         <!-- <el-divider style="margin: 0px 0px 20px 0px" content-position="right">Report search</el-divider> -->
            <el-radio-group v-model="msg">
                <el-radio v-for="item in report_search_options"  
                @change="report_search_change(item.template,item.year,item.month,item.day,item.project,item.report)"
                :label="item.label" size="large" border>{{item.template}}_{{item.year}}_{{item.month}}_{{item.day}}_{{item.project}}_{{item.report}}
                </el-radio>
                
            </el-radio-group>
            <template #footer>
                <el-divider content-position="right">Report Search {{report_search_count}}份</el-divider>
            </template>
        </el-drawer>
        <el-dialog
            v-model="rtf_add_show"
            
            width="35%"
            @close="rtf_add_close()"
        >
            <div style="display:flex">
                <span style="font-size:20px;">新建模板</span>
                <el-tooltip
                    class="box-item"
                    effect="dark"
                    content="创建全新的项目模板"
                    placement="right-start"
                >
                    <svg t="1657594265350" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2257" width="25" height="25"><path d="M533.333333 896C332.8 896 170.666667 733.866667 170.666667 533.333333S332.8 170.666667 533.333333 170.666667 896 332.8 896 533.333333 733.866667 896 533.333333 896z m0-42.666667c174.933333 0 320-145.066667 320-320S708.266667 213.333333 533.333333 213.333333 213.333333 358.4 213.333333 533.333333 358.4 853.333333 533.333333 853.333333z m21.333334-170.666666v42.666666h-42.666667v-42.666666h42.666667z m0-341.333334v298.666667h-42.666667V341.333333h42.666667z" fill="#409EFF" p-id="2258"></path></svg>
                </el-tooltip>
            </div>
            <el-divider content-position="right">Create template</el-divider>
            <div style="display:flex;">
                <div style="flex:0 0 30%;box-shadow: 2px 0 9px rgb(190 202 218 / 24%);">
                    <h5 style="text-align:left;font-size: 15px;margin:10px 0px 10px 0px;padding: 3px;">模板名称：</h5>
                </div>
                <div style="flex:0 0 60%;margin-left: 20px;box-shadow: 2px 0 9px rgb(190 202 218 / 24%);display: flex;flex-direction: column;">
                    <el-input style="flex:0 0 50%;margin:5px 0px 5px 20px;width:70%" v-model="add_template"/>    
                </div>
            </div>
            <hr>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="rtf_add_show = false">取消</el-button>
                <el-button type="primary" @click="rtf_add_y()"
                >确认</el-button
                >
            </span>
            </template>
        </el-dialog>

        <el-dialog
            
            v-model="rtf_up_show"
            width="35%"
            @close="rtf_up_close()"
        >
            <div style="display:flex">
                <span style="font-size:20px;">文件上传</span>
                <el-tooltip
                    class="box-item"
                    effect="dark"
                    content="上传报告至指定目录"
                    placement="right-start"
                >
                    <svg t="1657594265350" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2257" width="25" height="25"><path d="M533.333333 896C332.8 896 170.666667 733.866667 170.666667 533.333333S332.8 170.666667 533.333333 170.666667 896 332.8 896 533.333333 733.866667 896 533.333333 896z m0-42.666667c174.933333 0 320-145.066667 320-320S708.266667 213.333333 533.333333 213.333333 213.333333 358.4 213.333333 533.333333 358.4 853.333333 533.333333 853.333333z m21.333334-170.666666v42.666666h-42.666667v-42.666666h42.666667z m0-341.333334v298.666667h-42.666667V341.333333h42.666667z" fill="#409EFF" p-id="2258"></path></svg>
                </el-tooltip>
            </div>
            <el-divider content-position="right">update report</el-divider>
            <div style="display:flex;">
                <div style="flex:0 0 30%;box-shadow: 2px 0 9px rgb(190 202 218 / 24%);">
                    <h5 style="text-align:left;font-size: 15px;margin:10px 0px 20px 0px;padding: 3px;">模板名称：</h5>
                    <h5 style="text-align:left;font-size: 15px;margin:10px 0px 20px 0px;padding: 3px;">报告年份：</h5>
                    <h5 style="text-align:left;font-size: 15px;margin:10px 0px 20px 0px;padding: 3px;">报告月份：</h5>
                    <h5 style="text-align:left;font-size: 15px;margin:10px 0px 20px 0px;padding: 3px;">报告日期：</h5>
                    <h5 style="text-align:left;font-size: 15px;margin:10px 0px 20px 0px;padding: 3px;">报告项目：</h5>
                    <h5 style="text-align:left;font-size: 15px;margin:10px 0px 20px 0px;padding: 3px;">报告简称：</h5>
                </div>
                <div style="flex:0 0 60%;margin-left: 20px;box-shadow: 2px 0 9px rgb(190 202 218 / 24%);display: flex;flex-direction: column;">
                    <el-input style="flex:0 0 10%;margin:5px 0px 5px 20px;width:70%;" v-model="template_value"/>
                    <el-input style="flex:0 0 10%;margin:5px 0px 10px 20px;width:70%" v-model="update_year"/>
                    <el-input style="flex:0 0 10%;margin:5px 0px 10px 20px;width:70%" v-model="update_month"/>
                    <el-input style="flex:0 0 10%;margin:5px 0px 8px 20px;width:70%" v-model="update_day"/>
                    <el-input style="flex:0 0 10%;margin:5px 0px 8px 20px;width:70%" v-model="project_value"/>
                    <el-input style="flex:0 0 10%;margin:5px 0px 8px 20px;width:70%" v-model="up_report"/>
                    
                </div>
            </div>
            <hr>
            <!-- <span style="display: flex;justify-content: center;margin:10px"><h5 style="text-align:center;font-size: 15px;margin:8px 0px 0px 0px">名称：</h5><el-input style="flex:0 0 50%" v-model="template_value"/></span>
            <span style="display: flex;justify-content: center;margin:10px"><h5 style="text-align:center;font-size: 15px;margin:8px 0px 0px 0px">年份：</h5><el-input style="flex:0 0 50%" v-model="year_value"/></span>
            <span style="display: flex;justify-content: center;margin:10px"><h5 style="text-align:center;font-size: 15px;margin:8px 0px 0px 0px">月份：</h5><el-input style="flex:0 0 50%" v-model="month_value"/></span>
            <span style="display: flex;justify-content: center;margin:10px"><h5 style="text-align:center;font-size: 15px;margin:8px 0px 0px 0px">日期：</h5><el-input style="flex:0 0 50%" v-model="day_value"/></span>
            <span style="display: flex;justify-content: center;margin:10px"><h5 style="text-align:center;font-size: 15px;margin:8px 0px 0px 0px">项目：</h5><el-input style="flex:0 0 50%" v-model="project_value"/></span>
            <span style="display: flex;justify-content: center;margin:10px"><h5 style="text-align:center;font-size: 15px;margin:8px 0px 0px 0px">简介：</h5><el-input style="flex:0 0 50%" v-model="report_value"/></span> -->
            <template #footer>
           
            <span class="dialog-footer">
                <el-button @click="rtf_up_show = false">取消</el-button>
                <el-button type="primary"  @click="rtf_up_y()">确认</el-button
                >
            </span>
            </template>
        </el-dialog>
      <div v-if="data_set_show_1" style="display:flex;margin:0px 20px 0px 20px">
        <vue-ueditor-wrap  style="width: 86.5%;" v-model="msg" :config="editorConfig" editor-id="editor-demo-01"></vue-ueditor-wrap>
      <!-- <div style="background-color:white;display:flex;flex:0 0 90%;flex-direction:column">
        <div>
            <el-table :header-cell-style="{ 'text-align': 'center' }" border :data="tableData_set" style="width: 100%" :header-row-style="{color:'#409EFF'}" >
              <el-table-column label="测试项" min-width="10">
              <template v-slot="scope">
              <el-input
              
              style="padding:0px !important"
              v-model="scope.row.job"
              :rows="1"
              type="textarea"
              placeholder=""
              />
              </template>
              </el-table-column>
              <el-table-column label="状态描述" min-width="50">
              <template v-slot="scope">
              <el-input
              style="padding:0px !important"
              v-model="scope.row.status"
              :autosize="{ minRows: 1, maxRows: 5 }"
              type="textarea"
              placeholder=""
              />
              </template>
              </el-table-column>
          </el-table>
        </div>
        <div>
          <el-table border :header-cell-style="{ 'text-align': 'center' }" :data="tableData_set_2" style="width: 100%" :header-row-style="{color:'#409EFF'}">
              <el-table-column label="未开始项" min-width="10">
              <template v-slot="scope">
              <el-input
              style="padding:0px !important"
              v-model="scope.row.n_st"
              :rows="1"
              type="textarea"
              placeholder=""
              />
              </template>
              </el-table-column>
              <el-table-column label="状态描述" min-width="50">
              <template v-slot="scope">
              <el-input
              style="padding:0px !important"
              v-model="scope.row.status"
              :rows="1"
              type="textarea"
              placeholder=""
              />
              </template>
              </el-table-column>
          </el-table>
        </div>
      </div> -->
      <!-- <div style="flex:0 0 10%;display:flex;z-index:100">

          <el-table border :header-cell-style="{ 'text-align': 'center' }" :data="tableData_2_set" style="width: 100%;height:100%" :header-row-style="{color:'#409EFF'}">
          <el-table-column  label="风险预警" min-width="30">
          <template v-slot="scope">
              <el-input
              id="p1"
              style="padding:0px !important"
              v-model="scope.row.warn"
              type="textarea"
              placeholder=""
          />
          </template>
          </el-table-column>
          </el-table>
      </div> -->
  </div>
  <!-- {{msg}} -->
    <div v-if="htmlshow" style="display:flex;">

        <div  style="flex: 0 0 97.7%;margin:0px 20px 0px 20px;background-color:white;" v-html="msg"></div>

        
    </div>
  </div>
        <!-- <div style="display:flex;flex-direction:column">
          <div class="h5title" style="padding:5px 15px 5px 15px">
                <el-button style="width:3%;padding:0px 5px 0px 5px" size="small" type="primary" plain @click="add_set()">
                    <h3 style="font-size:5px;height:3px">++</h3>
                </el-button>
                <el-button style="width:3%;padding:0px 5px 0px 5px" size="small" type="info" plain @click="del_set()">
                    <h3 style="font-size:5px;height:3px">- -</h3>
                </el-button>
            </div>
            <div style="display:flex;margin:0px 20px 0px 20px">
                <div style="background-color:white;display:flex;flex:0 0 90%;">
                <el-table border :data="tableData_set" style="width: 100%">
                <el-table-column label="测试项" min-width="10">
                <template v-slot="scope">
                <el-input
                v-model="scope.row.job"
                autosize
                type="textarea"
                placeholder="Please input"
                />
                </template>
                </el-table-column>
                <el-table-column label="状态描述" min-width="50">
                <template v-slot="scope">
                <el-input
                v-model="scope.row.status"
                autosize
                type="textarea"
                placeholder="Please input"
                />
                </template>
                </el-table-column>
            </el-table>
            </div>
            <div style="flex:0 0 10%;display:flex;">

                <el-table border :data="tableData_2_set" style="width: 100%;height:100%">
                <el-table-column  label="风险预警" min-width="30">
                <template v-slot="scope">
                    <el-input
                    id="p1"
                    v-model="scope.row.warn"
                    
                    type="textarea"
                    placeholder="Please input"
                />
                </template>
                </el-table-column>
                </el-table>
            </div>
        </div>
        shit mountain
        
        </div> -->
        <h5 class="h5title">{{timevalue1}}/{{timevalue2}}:BUG总数统计</h5>
        <div style="margin:20px" v-loading="loading" element-loading-text="拼命加载中">
            <el-row :gutter="12" class="rowcard">
                <el-col :span="8">
                    <el-card shadow="hover">
                    <h4 class="h4card">BUG总数:</h4>
                    <h5 class="h5card">日期:{{timevalue1}}/{{timevalue2}}</h5>
                    <h4 class="h4card">总计：{{allbugnumber.sum}}个</h4>
                    <div class="cardbo">
                        <h5 class="cardboh5"><h5 class="cardboh52">S级:{{allbugnumber.fatal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">A级:{{allbugnumber.serious}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">B级:{{allbugnumber.normal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">C级:{{allbugnumber.prompt}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">D级:{{allbugnumber.advice}}</h5></h5>
                    </div>
                    
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                    <h4 class="h4card">新增BUG数:</h4>
                    <h5 class="h5card">日期:{{timevalue1}}/{{timevalue2}}</h5>
                    <h4 class="h4card">总计：{{addbugnumber.sum}}个</h4>
                    <div class="cardbo">
                        <h5 class="cardboh5"><h5 class="cardboh52">S级:{{addbugnumber.fatal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">A级:{{addbugnumber.serious}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">B级:{{addbugnumber.normal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">C级:{{addbugnumber.prompt}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">D级:{{addbugnumber.advice}}</h5></h5>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                    <h4 class="h4card">遗留BUG数:&nbsp;&nbsp;(包含挂起)</h4>
                    <h5 class="h5card">日期:{{timevalue1}}/{{timevalue2}}</h5>
                    <h4 class="h4card">总计：{{staybugnumber.sum}}个</h4>
                    <div class="cardbo">
                        <h5 class="cardboh5"><h5 class="cardboh52">S级:{{staybugnumber.fatal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">A级:{{staybugnumber.serious}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">B级:{{staybugnumber.normal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">C级:{{staybugnumber.prompt}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">D级:{{staybugnumber.advice}}</h5></h5>
                    </div>
                    </el-card>
                </el-col>
            </el-row >
            <el-row :gutter="12" class="rowcard">
                <el-col :span="8">
                    <el-card shadow="hover">
                    <h4 class="h4card">关闭BUG数:</h4>
                    <h5 class="h5card">日期:{{timevalue1}}/{{timevalue2}}</h5>
                    <h4 class="h4card">总计：{{closebugnumber.sum}}个</h4>
                     <div class="cardbo">
                         <h5 class="cardboh5"><h5 class="cardboh52">S级:{{closebugnumber.fatal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">A级:{{closebugnumber.serious}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">B级:{{closebugnumber.normal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">C级:{{closebugnumber.prompt}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">D级:{{closebugnumber.advice}}</h5></h5>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                    <h4 class="h4card">BUG回归失败:</h4>
                    <h5 class="h5card">日期:{{timevalue1}}/{{timevalue2}}</h5>
                    <h4 class="h4card">总计：{{failbugnumber.sum}}个</h4>
                     <div class="cardbo">
                        <h5 class="cardboh5"><h5 class="cardboh52">S级:{{failbugnumber.fatal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">A级:{{failbugnumber.serious}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">B级:{{failbugnumber.normal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">C级:{{failbugnumber.prompt}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">D级:{{failbugnumber.advice}}</h5></h5>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                    <h4 class="h4card">BUG重启:</h4>
                    <h5 class="h5card">日期:{{timevalue1}}/{{timevalue2}}</h5>
                    <h4 class="h4card">总计：{{restartbugnumber.sum}}个</h4>
                    <div class="cardbo">
                        <h5 class="cardboh5"><h5 class="cardboh52">S级:{{restartbugnumber.fatal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">A级:{{restartbugnumber.serious}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">B级:{{restartbugnumber.normal}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">C级:{{restartbugnumber.prompt}}</h5></h5>
                        <h5 class="cardboh5"><h5 class="cardboh52">D级:{{restartbugnumber.advice}}</h5></h5>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        
    </div>
    <!-- bug统计饼图 -->
    <div  v-loading="loading" element-loading-text="拼命加载中" style="height:400px; min-height:400px;margin:20px;margin-top:20px;background-color:white" id="BUGStatistics"></div>
        <div v-if="show">
        <div v-if="allshow">
        <h5 class="h5title">{{timevalue1}}/{{timevalue2}}:{{value}}BUG所在模块分布</h5>
        
        <!-- bug分布模块 -->
        <el-row :gutter="12" style="margin:20px;background-color:white" v-loading="loading" element-loading-text="拼命加载中">
            
        <el-col :span="8">
            <h5 style="text-align: left;font-size:18px;padding:15px">总BUG模块分布 TOP5:</h5>
            <el-table
                :data="tableDataa"
                border
                style="width: 100%">
                <el-table-column
                prop="count"
                label="#"
                width="70">
                </el-table-column>
                <el-table-column
                prop="key"
                label="模块名"
                width="300">
                </el-table-column>
                <el-table-column
                prop="value"
                label="BUG数"
                >
                </el-table-column>
            </el-table>
        </el-col>
        <el-col :span="8">
            <h5 style="text-align: left;font-size:18px;padding:15px">S级A级BUG模块分布 TOP5:</h5>
            <el-table
                :data="tableDataaa"
                border
                style="width: 100%">
                <el-table-column
                prop="count"
                label="#"
                width="70">
                </el-table-column>
                <el-table-column
                prop="key"
                label="模块名"
                width="300">
                </el-table-column>
                <el-table-column
                prop="value"
                label="BUG数"
                >
                </el-table-column>
            </el-table>
        </el-col>
        <el-col :span="8">
            <h5 style="text-align: left;font-size:18px;padding:15px">遗留BUG模块分布 TOP5:</h5>
            <el-table
                :data="tableDataaaa"
                border
                style="width: 100%">
                <el-table-column
                prop="count"
                label="#"
                width="70">
                </el-table-column>
                <el-table-column
                prop="key"
                label="模块名"
                width="300">
                </el-table-column>
                <el-table-column
                prop="value"
                label="BUG数"
                >
                </el-table-column>
            </el-table>
        </el-col>
        </el-row >  
        </div>
    </div>
    
        <div v-if="show" >
       
        <h5 v-if="value != 'all'" class="h5title" style="font-weight: bolder">{{timevalue1}}/{{timevalue2}}:{{value}}BUG追踪</h5>
        <h5 v-if="value == 'all'" class="h5title" style="font-weight: bolder">{{timevalue1}}/{{timevalue2}}:所有项目BUG追踪</h5>
            
  
        <!-- BUG等级追踪 -->
        <div style="margin:20px;background-color:white;display:flex" v-loading="loading" element-loading-text="拼命加载中">
            <!-- <h5 style="text-align: left;font-size:18px">总BUG模块分布 TOP5:</h5> -->
            <el-table
                :data="trackbug"
                border
                border-righ
                >
                <el-table-column
                prop="rank"
                label="BUG等级"
                min-width="30"
                >
                </el-table-column>
                <el-table-column
                prop="SUM"
                label="BUG总数"
                min-width="35"
                >
                </el-table-column>
                <el-table-column label="操作" min-width="30">   
                    <template #default="scope">
                    <el-button style="padding:0px;border:none !important" @click="dialogTableVisible = true;bugnumberbutton(scope.row)">详情</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                prop="not_closed"
                label="未关闭BUG数量"
               min-width="50"
                >
                </el-table-column>
                <el-table-column label="操作" min-width="30">   
                    <template #default="scope">
                    <el-button style="padding:0px;border:none !important" @click="dialogVisible = true;notclosedbutton(scope.row)">详情</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                prop="wait_process"
                label="待处理BUG数量"
                min-width="50"
                >
                </el-table-column>
                <el-table-column label="操作" min-width="30">
                    <template #default="scope">
                    <el-button style="padding:0px;border:none !important" @click="dialogVisiblea = true;waitmanagebutton(scope.row)">详情</el-button>
                    </template>
                </el-table-column>
                 <el-table-column
                prop="wait_return"
                label="待回归BUG数量"
                min-width="50"
                >
                </el-table-column>
                <el-table-column label="操作" min-width="30">
                    <template #default="scope">
                    <el-button style="padding:0px;border:none !important" @click="dialogVisibleaa = true;waitreturnbutton(scope.row)">详情</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                prop="hang_up"
                label="挂起数量"
                min-width="40"
                >
                </el-table-column>
                <el-table-column label="操作" min-width="30">
                    <template #default="scope">
                    <el-button style="padding:0px;border:none !important" @click="dialogVisibleaaaa = true;hangupbutton(scope.row)">详情</el-button>
                    </template>
                </el-table-column>
                 <el-table-column
                prop="stuck"
                label="卡死BUG数量"
                min-width="50"
                >
                </el-table-column>
                <el-table-column label="操作" min-width="30">
                    <template #default="scope">
                    <el-button style="padding:0px;border:none !important" @click="dialogVisibleaaab = true;stuckbutton(scope.row)">详情</el-button>
                    </template>
                </el-table-column>
                 <el-table-column
                prop="closed"
                label="已关闭BUG数量"
                min-width="50"
                >
                </el-table-column>
                <el-table-column label="操作" min-width="30">
                    <template #default="scope">
                    <el-button style="padding:0px;border:none !important" @click="dialogVisibleaaa = true;closedbutton(scope.row)">详情</el-button>
                    </template>
                </el-table-column>
                 <el-table-column
                prop="percent"
                label="未关闭BUG占比"
                min-width="50"
                >
                </el-table-column>
            </el-table>
            <!-- 此部分为bug最终表格中的详情弹窗，为了避免bug所以拿出来了 -->
            <!-- 总计 -->
                     <el-dialog
                    title="BUG详情界面"
                    v-model="dialogTableVisible"
                    width="70%"
                    @close="this.currentPage=1,this.page=1"
                    >
                    <div style="display:flex;justify-content:space-between">
                        <el-select
                            v-model="page_size"
                            @change="changecard()"
                            style="float: left;margin:30px;max-width:200px">
                            <el-option
                                v-for="item in page_size_options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input
                            placeholder="请输入"
                            prefix-icon="el-icon-search"
                            v-model="input"
                            @input="search_value_info()"
                            style="max-width:200px;margin:30px">
                        </el-input>
                    </div>
                    <div style="display:flex">
                    <el-table :data="tableData" style="min-height:500px" v-loading="loading_table" element-loading-text="拼命加载中">
                            <el-table-column
                                prop="table_id"
                                label="#"
                                min-width="20">
                            </el-table-column>
                            <el-table-column
                                prop="bug_id"
                                label="ID"
                               
                               min-width="50">
                            </el-table-column>
                            <el-table-column
                                prop="title"
                                label="标题"
                                min-width="250">
                            </el-table-column>
                            <el-table-column
                                prop="severity_name"
                                label="严重程度"
                                min-width="50">
                            </el-table-column>
                            <el-table-column
                                prop="reporter"
                            
                                min-width="50"
                                label="创建人">
                            </el-table-column>
                            <el-table-column
                                prop="created"
                                label="开始时间"
                                
                                min-width="50">
                                
                            </el-table-column>
                            <el-table-column
                                label="结束时间"
                                min-width="50">
                                <template v-slot="scope">
                                    <span v-if="scope.row.closed">{{scope.row.closed}}</span>
                                    <span v-if="!(scope.row.closed)" >-- -- -- --</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="状态"
                                min-width="50">
                                <template v-slot="scope">
                                    <button  :class="(scope.row.status_name=='新')?'new':(scope.row.status_name=='已关闭')?'closed':'reselve'">{{scope.row.status_name}}</button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="详情">
                                <template v-slot="scope">
                                <button class="reselve"><a :href="scope.row.url" style="color: white" target="_blank">详情</a></button>
                                </template>
                            </el-table-column>
                        </el-table>
                        
                    </div>
                        <div class="block">
                            <span class="demonstration">数据来自{{timevalue1}}至{{timevalue2}}合计{{bugdetails}}条数据</span>
                            <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-size="page_size"
                            layout=" prev, pager, next, jumper"
                            :total="total"
                            background>
                        </el-pagination>
                        </div>
                    </el-dialog>
            <!-- 未关闭 -->
            <el-dialog
                    title="未关闭BUG详情界面"
                    v-model="dialogVisible"
                    width="70%"
                    @close="this.notclosedcurrentPage=1;this.notclosedpage=1"
                    >
                    <div style="display:flex;justify-content:space-between">
                        <el-select
                            v-model="notclosedpage_size"
                            @change="notclosedchangecard()"
                            style="float: left;margin:30px;max-width:200px">
                            <el-option
                                v-for="item in notclosedpage_size_options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input
                            placeholder="请输入"
                            prefix-icon="el-icon-search"
                            v-model="notclosedinput"
                            @input="notclosedsearch"
                            style=";margin:30px;max-width:200px">
                        </el-input>
                    </div>
                    <div style="display:flex">
                    <el-table :data="notcloseddata" style="min-height:500px" v-loading="loading_table" element-loading-text="拼命加载中">
                            <el-table-column
                                prop="table_id"
                                label="#"
                                min-width="20">
                            </el-table-column>
                            <el-table-column
                                prop="bug_id"
                                label="ID"
                               
                               min-width="50">
                            </el-table-column>
                            <el-table-column
                                prop="title"
                                label="标题"
                                min-width="250">
                            </el-table-column>
                            <el-table-column
                                prop="severity_name"
                                label="严重程度"
                                min-width="50">
                            </el-table-column>
                            <el-table-column
                                prop="reporter"
                            
                                min-width="50"
                                label="创建人">
                            </el-table-column>
                            <el-table-column
                                prop="created"
                                label="开始时间"
                                
                                min-width="50">
                                
                            </el-table-column>
                            <el-table-column
                                label="结束时间"
                                min-width="50">
                                <template v-slot="scope">
                                    <span v-if="scope.row.closed">{{scope.row.closed}}</span>
                                    <span v-if="!(scope.row.closed)" >-- -- -- --</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="状态"
                                min-width="50">
                                <template v-slot="scope">
                                    <button  :class="(scope.row.status_name=='新')?'new':(scope.row.status_name=='已关闭')?'closed':'reselve'">{{scope.row.status_name}}</button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="详情">
                                <template v-slot="scope">
                                <button class="reselve"><a :href="scope.row.url" style="color: white" target="_blank">详情</a></button>
                                </template>
                            </el-table-column>
                        </el-table>
                        
                    </div>
                    
                        <div class="block">
                            <span class="demonstration">数据来自{{timevalue1}}至{{timevalue2}}合计{{notclosedbugdetails}}条数据</span>
                            <el-pagination
                            @size-change="notclosedhandleSizeChange"
                            @current-change="notclosedhandleCurrentChange"
                            :current-page="notclosedcurrentPage"
                            :page-size="notclosedpage_size"
                            layout=" prev, pager, next, jumper"
                            :total="notclosedtotal"
                            background>
                        </el-pagination>
                        </div>
                    </el-dialog>
                    <!-- 待处理 -->
                     <el-dialog
                    title="待处理BUG详情界面"
                    v-model="dialogVisiblea"
                    width="70%"
                    @close="this.waitmanagecurrentPage=1;this.waitmanagepage=1"
                    >
                    <div style="display:flex;justify-content:space-between">
                        <el-select
                            v-model="waitmanagepage_size"
                            @change="waitmanagechangecard()"
                            style="float: left;margin:30px;max-width:200px">
                            <el-option
                                v-for="item in waitmanagepage_size_options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input
                            placeholder="请输入"
                            prefix-icon="el-icon-search"
                            v-model="waitmanageinput"
                            @input="waitmanagesearch"
                            style="margin:30px;max-width:200px">
                        </el-input>
                    </div>
                     <div style="display:flex">
                    <el-table :data="waitmanagedata" style="min-height:500px" v-loading="loading_table" element-loading-text="拼命加载中">
                            <el-table-column
                                prop="table_id"
                                label="#"
                                min-width="20">
                            </el-table-column>
                            <el-table-column
                                prop="bug_id"
                                label="ID"
                               
                               min-width="50">
                            </el-table-column>
                            <el-table-column
                                prop="title"
                                label="标题"
                                min-width="250">
                            </el-table-column>
                            <el-table-column
                                prop="severity_name"
                                label="严重程度"
                                min-width="50">
                            </el-table-column>
                            <el-table-column
                                prop="reporter"
                            
                                min-width="50"
                                label="创建人">
                            </el-table-column>
                            <el-table-column
                                prop="created"
                                label="开始时间"
                                
                                min-width="50">
                                
                            </el-table-column>
                            <el-table-column
                                label="结束时间"
                                min-width="50">
                                <template v-slot="scope">
                                    <span v-if="scope.row.closed">{{scope.row.closed}}</span>
                                    <span v-if="!(scope.row.closed)" >-- -- -- --</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="状态"
                                min-width="50">
                                <template v-slot="scope">
                                    <button  :class="(scope.row.status_name=='新')?'new':(scope.row.status_name=='已关闭')?'closed':'reselve'">{{scope.row.status_name}}</button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="详情">
                                <template v-slot="scope">
                                <button class="reselve"><a :href="scope.row.url" style="color: white" target="_blank">详情</a></button>
                                </template>
                            </el-table-column>
                        </el-table>
                     </div>
                        <div class="block">
                            <span class="demonstration">数据来自{{timevalue1}}至{{timevalue2}}合计{{waitmanagebugdetails}}条数据</span>
                            <el-pagination
                            @size-change="waitmanagehandleSizeChange"
                            @current-change="waitmanagehandleCurrentChange"
                            :current-page="waitmanagecurrentPage"
                            :page-size="waitmanagepage_size"
                            layout=" prev, pager, next, jumper"
                            :total="waitmanagetotal"
                            background>
                        </el-pagination>
                        </div>
                    </el-dialog>
                    <!-- 待回归 -->
                     <el-dialog
                    title="待回归BUG详情界面"
                    v-model="dialogVisibleaa"
                    width="70%"
                    @close="this.waitreturncurrentPage=1;this.waitreturnpageage=1"
                    >
                    <div style="display:flex;justify-content:space-between">
                        <el-select
                            v-model="waitreturnpage_size"
                            @change="waitreturnchangecard()"
                            style="float: left;margin:30px;max-width:200px">
                            <el-option
                                v-for="item in waitreturnpage_size_options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input
                            placeholder="请输入"
                            prefix-icon="el-icon-search"
                            v-model="waitreturninput"
                            @input="waitreturnsearch"
                            style="margin:30px;max-width:200px">
                        </el-input>
                    </div>
                    <div style="display:flex">
                    <el-table :data="waitreturndata" style="min-height:500px" v-loading="loading_table" element-loading-text="拼命加载中">
                            <el-table-column
                                prop="table_id"
                                label="#"
                                min-width="20">
                            </el-table-column>
                            <el-table-column
                                prop="bug_id"
                                label="ID"
                               
                               min-width="50">
                            </el-table-column>
                            <el-table-column
                                prop="title"
                                label="标题"
                                min-width="250">
                            </el-table-column>
                            <el-table-column
                                prop="severity_name"
                                label="严重程度"
                                min-width="50">
                            </el-table-column>
                            <el-table-column
                                prop="reporter"
                            
                                min-width="50"
                                label="创建人">
                            </el-table-column>
                            <el-table-column
                                prop="created"
                                label="开始时间"
                                
                                min-width="50">
                                
                            </el-table-column>
                            <el-table-column
                                label="结束时间"
                                min-width="50">
                                <template v-slot="scope">
                                    <span v-if="scope.row.closed">{{scope.row.closed}}</span>
                                    <span v-if="!(scope.row.closed)" >-- -- -- --</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="状态"
                                min-width="50">
                                <template v-slot="scope">
                                    <button  :class="(scope.row.status_name=='新')?'new':(scope.row.status_name=='已关闭')?'closed':'reselve'">{{scope.row.status_name}}</button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="详情">
                                <template v-slot="scope">
                                <button class="reselve"><a :href="scope.row.url" style="color: white" target="_blank">详情</a></button>
                                </template>
                            </el-table-column>
                        </el-table>
                     </div>
                   
                        <div class="block">
                            <span class="demonstration">数据来自{{timevalue1}}至{{timevalue2}}合计{{waitreturnbugdetails}}条数据</span>
                            <el-pagination
                            @size-change="waitreturnhandleSizeChange"
                            @current-change="waitreturnhandleCurrentChange"
                            :current-page="waitreturncurrentPage"
                            :page-size="waitreturnpage_size"
                            layout=" prev, pager, next, jumper"
                            :total="waitreturntotal"
                            background>
                        </el-pagination>
                        </div>
                    </el-dialog>
                    <!-- 已关闭 -->
                     <el-dialog
                    title="已关闭BUG详情界面"
                    v-model="dialogVisibleaaa"
                    width="70%"
                    @close="this.closedcurrentPage=1;this.closedpage=1"
                    >
                    <div style="display:flex;justify-content:space-between">
                        <el-select
                            v-model="closedpage_size"
                            @change="closedchangecard()"
                            style="float: left;margin:30px;max-width:200px">
                            <el-option
                                v-for="item in closedpage_size_options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input
                            placeholder="请输入"
                            prefix-icon="el-icon-search"
                            v-model="closedinput"
                            @input="closedsearch"
                            style="margin:30px;max-width:200px">
                        </el-input>
                    </div>
                    <div style="display:flex"> 
                    <el-table :data="closeddata" style="min-height:500px" v-loading="loading_table" element-loading-text="拼命加载中">
                            <el-table-column
                                prop="table_id"
                                label="#"
                                min-width="20">
                            </el-table-column>
                            <el-table-column
                                prop="bug_id"
                                label="ID"
                               
                               min-width="50">
                            </el-table-column>
                            <el-table-column
                                prop="title"
                                label="标题"
                                min-width="250">
                            </el-table-column>
                            <el-table-column
                                prop="severity_name"
                                label="严重程度"
                                min-width="50">
                            </el-table-column>
                            <el-table-column
                                prop="reporter"
                            
                                min-width="50"
                                label="创建人">
                            </el-table-column>
                            <el-table-column
                                prop="created"
                                label="开始时间"
                                
                                min-width="50">
                                
                            </el-table-column>
                            <el-table-column
                                label="结束时间"
                                min-width="50">
                                <template v-slot="scope">
                                    <span v-if="scope.row.closed">{{scope.row.closed}}</span>
                                    <span v-if="!(scope.row.closed)" >-- -- -- --</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="状态"
                                min-width="50">
                                <template v-slot="scope">
                                    <button  :class="(scope.row.status_name=='新')?'new':(scope.row.status_name=='已关闭')?'closed':'reselve'">{{scope.row.status_name}}</button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="详情">
                                <template v-slot="scope">
                                <button class="reselve"><a :href="scope.row.url" style="color: white" target="_blank">详情</a></button>
                                </template>
                            </el-table-column>
                        </el-table>
                     </div>
                  
                        <div class="block">
                            <span class="demonstration">数据来自{{timevalue1}}至{{timevalue2}}合计{{closedbugdetails}}条数据</span>
                            <el-pagination
                            @size-change="closedhandleSizeChange"
                            @current-change="closedhandleCurrentChange"
                            :current-page="closedcurrentPage"
                            :page-size="closedpage_size"
                            layout=" prev, pager, next, jumper"
                            :total="closedtotal"
                            background>
                        </el-pagination>
                        </div>
                    </el-dialog>
                <!-- 卡死 -->
                     <el-dialog
                    title="卡死BUG详情界面"
                    v-model="dialogVisibleaaab"
                    width="70%"
                    @close="this.stuckcurrentPage=1;this.stuckpage=1"
                    >
                    <div style="display:flex;justify-content:space-between">
                        <el-select
                            v-model="stuckpage_size"
                            @change="stuckchangecard()"
                            style="float: left;margin:30px;max-width:200px">
                            <el-option
                                v-for="item in stuckpage_size_options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input
                            placeholder="请输入"
                            prefix-icon="el-icon-search"
                            v-model="stuckinput"
                            @input="stucksearch"
                            style="margin:30px;max-width:200px">
                        </el-input>
                    </div>
                     <div style="display:flex">
                    <el-table :data="stuckdata" style="min-height:500px" v-loading="loading_table" element-loading-text="拼命加载中">
                            <el-table-column
                                prop="table_id"
                                label="#"
                                min-width="20">
                            </el-table-column>
                            <el-table-column
                                prop="bug_id"
                                label="ID"
                               
                               min-width="50">
                            </el-table-column>
                            <el-table-column
                                prop="title"
                                label="标题"
                                min-width="250">
                            </el-table-column>
                            <el-table-column
                                prop="severity_name"
                                label="严重程度"
                                min-width="50">
                            </el-table-column>
                            <el-table-column
                                prop="reporter"
                            
                                min-width="50"
                                label="创建人">
                            </el-table-column>
                            <el-table-column
                                prop="created"
                                label="开始时间"
                                
                                min-width="50">
                                
                            </el-table-column>
                            <el-table-column
                                label="结束时间"
                                min-width="50">
                                <template v-slot="scope">
                                    <span v-if="scope.row.closed">{{scope.row.closed}}</span>
                                    <span v-if="!(scope.row.closed)" >-- -- -- --</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="状态"
                                min-width="50">
                                <template v-slot="scope">
                                    <button  :class="(scope.row.status_name=='新')?'new':(scope.row.status_name=='已关闭')?'closed':'reselve'">{{scope.row.status_name}}</button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="详情">
                                <template v-slot="scope">
                                <button class="reselve"><a :href="scope.row.url" style="color: white" target="_blank">详情</a></button>
                                </template>
                            </el-table-column>
                        </el-table>
                     </div>
                    
                        <div class="block">
                            <span class="demonstration">数据来自{{timevalue1}}至{{timevalue2}}合计{{stuckbugdetails}}条数据</span>
                            <el-pagination
                            @size-change="stuckhandleSizeChange"
                            @current-change="stuckhandleCurrentChange"
                            :current-page="stuckcurrentPage"
                            :page-size="stuckpage_size"
                            layout=" prev, pager, next, jumper"
                            :total="stucktotal"
                            background>
                        </el-pagination>
                        </div>
                    </el-dialog>
                    <!-- 挂起 -->
            <el-dialog
                    title="挂起BUG详情界面"
                    v-model="dialogVisibleaaaa"
                    width="70%"
                    @close="this.hangupcurrentPage=1;this.hanguppage=1"
                    >
                    <div style="display:flex;justify-content:space-between">
                        <el-select
                            v-model="hanguppage_size"
                            @change="hangupchangecard()"
                            style="float: left;margin:30px;max-width:200px">
                            <el-option
                                v-for="item in hanguppage_size_options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input
                            placeholder="请输入"
                            prefix-icon="el-icon-search"
                            v-model="hangupinput"
                            @input="hangupsearch"
                            style="margin:30px;max-width:200px">
                        </el-input>
                    </div>
                     <div style="display:flex">
                    <el-table :data="hangupdata" style="min-height:500px" v-loading="loading_table" element-loading-text="拼命加载中">
                            <el-table-column
                                prop="table_id"
                                label="#"
                                min-width="20">
                            </el-table-column>
                            <el-table-column
                                prop="bug_id"
                                label="ID"
                               
                               min-width="50">
                            </el-table-column>
                            <el-table-column
                                prop="title"
                                label="标题"
                                min-width="250">
                            </el-table-column>
                            <el-table-column
                                prop="severity_name"
                                label="严重程度"
                                min-width="50">
                            </el-table-column>
                            <el-table-column
                                prop="reporter"
                            
                                min-width="50"
                                label="创建人">
                            </el-table-column>
                            <el-table-column
                                prop="created"
                                label="开始时间"
                                
                                min-width="50">
                                
                            </el-table-column>
                            <el-table-column
                                label="结束时间"
                                min-width="50">
                                <template v-slot="scope">
                                    <span v-if="scope.row.closed">{{scope.row.closed}}</span>
                                    <span v-if="!(scope.row.closed)" >-- -- -- --</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="状态"
                                min-width="50">
                                <template v-slot="scope">
                                    <button  :class="(scope.row.status_name=='新')?'new':(scope.row.status_name=='已关闭')?'closed':'reselve'">{{scope.row.status_name}}</button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="详情">
                                <template v-slot="scope">
                                <button class="reselve"><a :href="scope.row.url" style="color: white" target="_blank">详情</a></button>
                                </template>
                            </el-table-column>
                        </el-table>
                     </div>
                   
                        <div class="block">
                            <span class="demonstration">数据来自{{timevalue1}}至{{timevalue2}}合计{{hangupbugdetails}}条数据</span>
                            <el-pagination
                            @size-change="hanguphandleSizeChange"
                            @current-change="hanguphandleCurrentChange"
                            :current-page="hangupcurrentPage"
                            :page-size="hanguppage_size"
                            layout=" prev, pager, next, jumper"
                            :total="hanguptotal"
                            background>
                        </el-pagination>
                        </div>
                    </el-dialog>
                    <!-- 此部分为bug最终表格中的详情弹窗，为了避免bug所以拿出来了 -->
        </div> 
    </div>

    <div style="margin:20px;background-color:white">
        <div v-if="show" style="margin:30px">
        <div v-if="edit_table_show">
            <el-button type="info" plain @click="Legacybug()" style="margin-top:20px">查看每日BUG趋势分布</el-button>
            <el-button type="info" plain @click="buglevel()" style="margin-top:20px">查看每日BUG等级</el-button>
            <el-button type="info" plain @click="buginfo()" style="margin-top:20px">查看每日BUG遗留分析</el-button>
        </div>
        </div>
        
        <div>
            <div v-loading="loading" element-loading-text="拼命加载中" style="height:400px; min-height:400px;width:100%" id="Legacybug"></div>
        </div>
        </div>
        <h5 v-if="allshow" class="h5title" @click="fenxi111 =! fenxi111" >
        <span v-show="fenxi111">
            {{value}}-项目版本数据分析:
           
                <el-select
                v-if="edit_table_show"
                v-model="Project_analysis_value"
                multiple
                @remove-tag="Project_analysis_change($event);"
                collapse-tags
                @visible-change="Project_analysis_change($event);"
                placeholder="默认版本"
                style="width: 250px"
                >
                <el-option
                    v-for="item in Project_analysis_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                </el-select>
                <el-select
                v-if="edit_table_show"
                v-model="Project_status_value"
                multiple
                collapse-tags
                @remove-tag="Project_status_change($event);"
                @visible-change="Project_status_change($event);"
                placeholder="默认状态"
                style="width: 200px;margin-left:20px"
               
                >
                <el-option
                    v-for="item in Project_status_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                </el-select>
        </span>
            
        </h5>
        <div v-show="fenxi111">
            
             <div  style="margin:20px;background-color:white">
                <div v-loading="loading_report" element-loading-text="拼命加载中"  v-if="allshow" style="height:400px; min-height:400px;width:100%" id="Projectanalysis"></div>
            </div>
            <el-dialog  width="72%" v-model="data_analysis_dialog" title="数据分析BUG详情">
                <el-table style="min-height:600px" :data="kpitabledata">
                <el-table-column property="id" label="#" min-width="10"/>
                <el-table-column property="bug_id" label="ID"  min-width="40"/>
                <el-table-column property="title" label="标题" min-width="130"/>
                <el-table-column property="severity" label="严重程度" min-width="20"/>
                <el-table-column property="reporter" label="创建人" min-width="20"/>
                <el-table-column property="created" label="开始时间" min-width="40"/>
                <el-table-column property="closed" label="结束时间" min-width="40"/>
                <el-table-column
                    label="详情" min-width="22">
                    <template v-slot="scope">
                    <el-button><a :href="scope.row.url" style="color: black;text-decoration:none" target="_blank">详情</a></el-button>
                    </template>
                </el-table-column>
                 
                </el-table>
                <el-pagination
                    v-model:currentPage="kpitablepage"
                    :page-size="10"
                    :small="kpitablesmall"
                    :disabled="kpitabledisabled"
                    :background="kpitablebackground"
                    layout="total, prev, pager, next"
                    :total="kpitabletotal"
                    @current-change="kpitablechange()"
                   
                    />
            </el-dialog>
        <h5 v-if="allshow" class="h5title"  >{{value}}-数据预警结果:
        <el-button v-if="edit_table_show" text style="width:3%;padding:0px 5px 0px 5px" size="small" type="info" plain @click="yjconfig();earlywarning_show = true">
              <h3 style="font-size:5px;height:3px">配置</h3>
            </el-button>
        </h5>
        <div v-if="allshow" style="margin:20px;background-color:white;display:flex;flex-direction:column">
            <h5 v-for="i,item in warning_data" style="text-align:left;margin:10px 0px 10px 20px;font-size: 17px;">{{item+1}}、{{i}}。</h5>
            <h5 v-loading="loading_report" style="text-align:left;margin:10px 0px 10px 20px;font-size: 17px;">建议：预留出时间做版本全量回归，提前做好版本时间风险预估，根据以往版本预计在{{average}}天为合理区间。</h5>
        </div>
        <el-drawer
            v-model="earlywarning_show"
            title="预警结果配置"
            direction="rtl"
      
        >
         <!-- <el-divider style="margin: 0px 0px 20px 0px" content-position="right">Report search</el-divider> -->
          <div style="display:flex;flex-direction: column;">
                <div class="warning_table">
                    <el-input  size="small" style="width:200px;float: left;" v-model="earlywarning_int.BUG总数">
                        <template #prepend>BUG总数></template>
                    </el-input>
                        <el-input  size="small" v-model="earlywarning_str.BUG总数" />
                </div>
                <div class="warning_table">
                    <el-input  size="small" style="width:200px;float: left;" v-model="earlywarning_int.遗留BUG数">
                        <template #prepend>遗留BUG数></template>
                    </el-input>
                        <el-input  size="small" v-model="earlywarning_str.遗留BUG数" />
                </div>
                <div class="warning_table">
                    <el-input  size="small" style="width:200px;float: left;" v-model="earlywarning_int.BUG回归失败">
                        <template #prepend>BUG回归失败></template>
                    </el-input>
                        <el-input  size="small" v-model="earlywarning_str.BUG回归失败" />
                </div>
                <div class="warning_table">
                    <el-input  size="small" style="width:200px;float: left;" v-model="earlywarning_int.BUG重启">
                        <template #prepend>BUG重启></template>
                    </el-input>
                        <el-input  size="small" v-model="earlywarning_str.BUG重启" />
                </div>
                <div class="warning_table">
                    <el-input  size="small" style="width:200px;float: left;" v-model="earlywarning_int.未关闭">
                        <template #prepend>未关闭></template>
                    </el-input>
                        <el-input  size="small" v-model="earlywarning_str.未关闭" />
                </div>
                <div class="warning_table">
                    <el-input  size="small" style="width:200px;float: left;" v-model="earlywarning_int.待处理">
                        <template #prepend>待处理></template>
                    </el-input>
                        <el-input  size="small" v-model="earlywarning_str.待处理" />
                </div>
                <div class="warning_table">
                    <el-input  size="small" style="width:200px;float: left;" v-model="earlywarning_int.待回归">
                        <template #prepend>待回归></template>
                    </el-input>
                        <el-input  size="small" v-model="earlywarning_str.待回归" />
                </div>
                <div class="warning_table">
                    <el-input  size="small" style="width:200px;float: left;" v-model="earlywarning_int.已关闭">
                        <template #prepend>已关闭></template>
                    </el-input>
                        <el-input  size="small" v-model="earlywarning_str.已关闭" />
                </div>
                <div class="warning_table">
                    <el-input  size="small" style="width:200px;float: left;" v-model="earlywarning_int.卡死">
                        <template #prepend>卡死></template>
                    </el-input>
                        <el-input  size="small" v-model="earlywarning_str.卡死" />
                </div>
                <div class="warning_table">
                    <el-input  size="small" style="width:200px;float: left;" v-model="earlywarning_int.挂起">
                        <template #prepend>挂起></template>
                    </el-input>
                        <el-input  size="small" v-model="earlywarning_str.挂起" />
                </div>
                <el-button @click="warning_chick();warning_chick_up()">确认</el-button>
          </div>
            <template #footer>
                <el-divider content-position="right">warning</el-divider>
            </template>
        </el-drawer>
        </div>
        <h5 v-if="show" class="h5title"  @click="banmanshowbutton()"><span v-if="bugmanshow">{{timevalue1}}/{{timevalue2}}:人员BUG统计</span></h5>
    <!-- <div @click="banmanshowbutton()" class="h5title" ><h5 > {{timevalue1}}/{{timevalue2}}:人员BUG统计</h5></div> -->
    <div  style="margin:20px;background-color:white">
        <div v-loading="loading" element-loading-text="拼命加载中" v-if="bugmanshow" style="height:400px; min-height:400px;width:100%" id="Bugman"></div>
        
    </div>
    </div>
    
</div>

    <!-- tpad列表 -->
    <!-- <div v-if="show">
        <h1 class="h1">BUG详情:</h1>
        <div>
            <el-select
                v-model="page_size"
                @change="changecard"
                style="float: left;margin:30px">
                <el-option
                    v-for="item in page_size_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-input
                placeholder="请输入"
                prefix-icon="el-icon-search"
                v-model="input"
                @input="search"
                style="max-width:300px;float: right;margin:30px">
            </el-input>
        </div>
        <div>
             <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                    prop="table_id"
                    label="#"
                    width="55">
                </el-table-column>
                <el-table-column
                    prop="bug_id"
                    label="ID"
                    sortable
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="title"
                    label="标题"
                    width="700">
                </el-table-column>
                <el-table-column
                    prop="severity_name"
                    label="严重程度">
                </el-table-column>
                <el-table-column
                    prop="reporter"
                    sortable
                    width="100"
                    label="创建人">
                </el-table-column>
                <el-table-column
                    prop="created"
                    label="开始时间"
                    sortable
                    width="100">
                    
                </el-table-column>
                <el-table-column
                    label="结束时间"
                    width="100">
                    <template v-slot="scope">
                        <span v-if="scope.row.closed">{{scope.row.closed}}</span>
                        <span v-if="!(scope.row.closed)" >-- -- -- --</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="状态"
                    width="100">
                    <template v-slot="scope">
                        <button  :class="(scope.row.status_name=='新')?'new':(scope.row.status_name=='已关闭')?'closed':'reselve'">{{scope.row.status_name}}</button>
                    </template>
                </el-table-column>
                <el-table-column
                    label="详情">
                    <template v-slot="scope">
                    <button class="reselve"><a type="button" :href="scope.row.url" style="color: white" target="_blank">详情</a></button>
                    </template>
                </el-table-column>
                </el-table>
        </div>
        <div class="block"> -->
            <!-- <span class="demonstration">数据取自{{start}}至{{end}}</span> -->
            <!-- <span class="demonstration">数据来自{{timevalue1}}至{{timevalue2}}合计{{bugdetails}}条数据</span>
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="page_size"
            layout=" prev, pager, next, jumper"
            :total="total"
            background>
        </el-pagination>
        </div>
    </div> -->
</template>
<script >
import moment from "moment"
import {hgaxios as axios} from "../../utils/request"
import {hpaxios} from "../../utils/request"
import {hdaxios} from "../../utils/request"
// import axios from "axios"
 import { toRaw } from '@vue/reactivity';
 import { ElMessage } from 'element-plus'

import * as echarts from 'echarts'
import htmlToPdf from '@/unit/htmlToPdf'
import { defineComponent, ref, watchEffect, nextTick, onMounted} from 'vue'
import { reactive, toRefs } from '@vue/reactivity'
import { Search } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
// let myChart
let charObj
let Legacybugmychart
let Bugm
let project_fx
export default defineComponent({
 name:'issue_bug',
    setup(){
        const data_set = reactive(
          {
            rtf_version_show:true,
            warn_len:"31",
            edit_table_flag:true,
            template:[],
            template_value:[],
            year:[],
            year_value:[],
            month:[],
            month_value:[],
            day:[],
            day_value:[],
            project:[],
            project_value:[],
            report:[],
            report_value:[],
            data:[],
            data_value:[],
            search:[],
            search_value:[],
            cascader_data:[],
            rtf_add_show:false,
            rtf_up_show:false,
            up_report:[],
            add_template:[],
            msg:'',
            update_year:"",
            update_month:"",
            update_day:"",
            template_select_data:[],
            template_select_options:[],
            report_show:false,
            template_show:false,
            search_show:false,
            template_input_data:"",
            rtf_drawer:false,
            report_search_options:[],
            report_search_data:[],
            report_search_show:false,
            report_search_template_options:[],
            report_search_template:[],
            report_search_year:[],
            report_search_month:[],
            report_search_day:[],
            report_search_project:[],
            report_search_count:"",
            fenxi111:true

           
            // <table data-sort="sortDisabled" align="center"><tbody><tr class="firstRow"><td valign="middle" rowspan="1" colspan="3" style="border-width: 1px; border-style: solid; background-color: rgb(217, 236, 255);" align="center"><br/></td></tr><tr><td width="237" valign="middle" style="word-break: break-all; border-width: 1px; border-style: solid; background-color: rgb(217, 236, 255);" align="center"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">测试项</span></strong></td><td width="1051" valign="middle" style="word-break: break-all; border-width: 1px; border-style: solid; background-color: rgb(217, 236, 255);" align="center"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">状态描述</span></strong></td><td width="236" valign="middle" style="word-break: break-all; border-width: 1px; border-style: solid; background-color: rgb(217, 236, 255);" align="center"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">风险预警</span></strong></td></tr><tr><td width="237" valign="middle" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">功能测试</span></strong></td><td width="1051" valign="middle" style="border-width: 1px; border-style: solid;" align="left"><br/></td><td width="236" valign="middle" style="border-width: 1px; border-style: solid;" rowspan="16" colspan="1" align="left"><br/></td></tr><tr><td width="237" valign="middle" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">运营活动测试</span></strong></td><td width="1051" valign="middle" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td width="237" valign="middle" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">模拟器兼容</span></strong></td><td width="1051" valign="middle" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">画质</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">客户端中断</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid; word-break: break-all;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">服务器中断测试</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">弱网</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid; word-break: break-all;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">覆盖安装</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">充值测试</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">性能回归测试</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">提审测试</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid; background-color: rgb(217, 236, 255);" align="center"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">未开始项</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid; background-color: rgb(217, 236, 255);" align="center"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">状态描述</span></strong></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">压测</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">热更新</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr></tbody></table><p><br/></p>
            // data_set_show_1:false
          }
        )
        // function data_set_show(){
        //     data_set.data_set_show_1 == true
        // }
        const add_set = ()=>{
          data_set.tableData_set.push(
            {
              job: '',
              status: '',
            }
          )
        //   data_set.warn_len = (parseInt(data_set.warn_len)+3).toString()
          console.log(data_set.tableData_set.length*48);
          document.getElementById("p1").style.height = String(data_set.tableData_set.length*48 + data_set.tableData_set_2.length*48 +23)+"px"
        }
        const add_set_2 = ()=>{
          data_set.tableData_set_2.push(
            {
              n_st: '',
              status: ' ',
            }
          )
        //   data_set.warn_len = (parseInt(data_set.warn_len)+3).toString()
          // document.getElementById("p1")?.style.height
          document.getElementById("p1").style.height = String(data_set.tableData_set.length*48 + data_set.tableData_set_2.length*48 +23)+"px"
        }

        function del_set(){
          if (data_set.tableData_set.length > 1){
              data_set.tableData_set.pop()
          }
          data_set.warn_len = (parseInt(data_set.warn_len)-3).toString()
          document.getElementById("p1").style.height = String(data_set.tableData_set.length*48 + data_set.tableData_set_2.length*48 +23)+"px"
        }
        function del_set_2(){
          if (data_set.tableData_set_2.length > 1){
              data_set.tableData_set_2.pop()
          }
          data_set.warn_len = (parseInt(data_set.warn_len)-3).toString()
          document.getElementById("p1").style.height = String(data_set.tableData_set.length*48 + data_set.tableData_set_2.length*48 +23)+"px"
        }
        function del_set_all(){
          
            // 119px
            document.getElementById("p1").style.height = "648px"

        }
        function edit_table(data_set_show_1){
             this.editorConfig = {
                UEDITOR_HOME_URL: '/UEditor/', // 访问 UEditor 静态资源的根路径，可参考常见问题1
                serverUrl: '', // 服务端接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
                };
            // if (data_set.edit_table_flag){
            //     setTimeout(() => {
            //         document.getElementById("p1").style.height = "648px"
            //     }, 300);
             
            // }
            // else{
            //     if(data_set_show_1==false){
            //         setTimeout(() => {
            //         document.getElementById("p1").style.height = String(data_set.tableData_set.length*48 + data_set.tableData_set_2.length*48 +23)+"px"

            //     }, 100);
            //     }
            // }
            data_set.edit_table_flag=false
        }
        // var msg = ref('<table data-sort="sortDisabled" align="center"><tbody><tr class="firstRow"><td valign="middle" rowspan="1" colspan="3" style="border-width: 1px; border-style: solid; background-color: rgb(217, 236, 255);" align="center"><br/></td></tr><tr><td width="237" valign="middle" style="word-break: break-all; border-width: 1px; border-style: solid; background-color: rgb(217, 236, 255);" align="center"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">测试项</span></strong></td><td width="1051" valign="middle" style="word-break: break-all; border-width: 1px; border-style: solid; background-color: rgb(217, 236, 255);" align="center"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">状态描述</span></strong></td><td width="236" valign="middle" style="word-break: break-all; border-width: 1px; border-style: solid; background-color: rgb(217, 236, 255);" align="center"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">风险预警</span></strong></td></tr><tr><td width="237" valign="middle" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">功能测试</span></strong></td><td width="1051" valign="middle" style="border-width: 1px; border-style: solid;" align="left"><br/></td><td width="236" valign="middle" style="border-width: 1px; border-style: solid;" rowspan="16" colspan="1" align="left"><br/></td></tr><tr><td width="237" valign="middle" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">运营活动测试</span></strong></td><td width="1051" valign="middle" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td width="237" valign="middle" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">模拟器兼容</span></strong></td><td width="1051" valign="middle" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">画质</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">客户端中断</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid; word-break: break-all;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">服务器中断测试</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">弱网</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid; word-break: break-all;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">覆盖安装</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">充值测试</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">性能回归测试</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">提审测试</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid; background-color: rgb(217, 236, 255);" align="center"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">未开始项</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid; background-color: rgb(217, 236, 255);" align="center"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">状态描述</span></strong></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">压测</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="word-break: break-all; border-width: 1px; border-style: solid;" align="left"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">热更新</span></strong></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr><tr><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td><td valign="middle" colspan="1" rowspan="1" style="border-width: 1px; border-style: solid;" align="left"><br/></td></tr></tbody></table><p><br/></p>')
        const table_props = {
            lazy: true,
            lazyLoad ( node, resolve ) {
            const { level } = node
            // var res = ["a","b"]
            setTimeout(() => {
                if ( node.level === 0 ) {
                const nodes = data_set.template.map(item => ({
                    value: item,
                    label: item ,
                    // leaf: node.level >= 4
                }));
                // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                resolve(nodes);
               
                }

                if ( node.level === 1 ) {
                axios({
                url: '/api/v1/ReportTemplates/',
                method:'get',
                params:{
                    template_type:toRaw(node["value"]),
                    request_type:"year"
                    
                    }
                })
                .then(res => {
                    data_set.template_value=toRaw(node["value"])
                    data_set.year=toRaw(res.data.data)
                    const nodes = data_set.year.map(item => ({
                    value: item,
                    label: item ,
                    // leaf: node.level >= 4
                }));

                // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                 
                resolve(nodes);
                 
                })  
                    
                
                }

                if ( node.level === 2 ) {
                axios({
                    url: '/api/v1/ReportTemplates/',
                    method:'get',
                    params:{
                        template_type:data_set.template_value,
                        year:toRaw(node["value"]),
                        request_type:"month",
                        }
                    })
                    .then(res => {
                        console.log(res,"pppp");
                        data_set.month=toRaw(res.data.data)
                        data_set.year_value=toRaw(node["value"])
                        const nodes = data_set.month.map(item => ({
                        value: item,
                        label: item ,
                        // leaf: node.level >= 4
                    }));

                    // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                    
                    resolve(nodes);
                   
                })
                }
                if ( node.level === 3 ) {
                axios({
                    url: '/api/v1/ReportTemplates/',
                    method:'get',
                    params:{
                        template_type:data_set.template_value,
                        year:data_set.year_value,
                        month:toRaw(node["value"]),
                        request_type:"day",
                        }
                    })
                    .then(res => {
                        data_set.day=toRaw(res.data.data)
                        data_set.month_value=toRaw(node["value"])
                        const nodes = data_set.day.map(item => ({
                        value: item,
                        label: item ,
                        // leaf: node.level >= 4
                    }));

                    // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                    
                    resolve(nodes);
                })
                }
                if ( node.level === 4 ) {
                axios({
                    url: '/api/v1/ReportTemplates/',
                    method:'get',
                    params:{
                        template_type:data_set.template_value,
                        year:data_set.year_value,
                        month:data_set.month_value,
                        day:toRaw(node["value"]),
                        request_type:"project",
                        }
                    })
                    .then(res => {
                        data_set.project=toRaw(res.data.data)
                        data_set.day_value=toRaw(node["value"])
                        const nodes = data_set.project.map(item => ({
                        value: item,
                        label: item ,
                        // leaf: node.level >= 4
                    }));

                    // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                    
                    resolve(nodes);
                })
                }
                if ( node.level === 5 ) {
                axios({
                    url: '/api/v1/ReportTemplates/',
                    method:'get',
                    params:{
                        template_type:data_set.template_value,
                        year:data_set.year_value,
                        month:data_set.month_value,
                        day:data_set.day_value,
                        project:toRaw(node["value"]),
                        request_type:"report",
                        }
                    })
                    .then(res => {
                        
                        data_set.report=toRaw(res.data.data)
                       
                        data_set.project_value=toRaw(node["value"])
                        const nodes = data_set.report.map(item => ({
                        value: item,
                        label: item ,
                        leaf: node.level >= 5
                    }));

                    // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                    resolve(nodes);
                    // setTimeout(() => {
                    //     console.log(node,"sdsdsd");
                    // }, 3000);
                   
                        //  axios({
                        //     url: '/api/v1/ReportTemplates/',
                        //     method:'get',
                        //     params:{
                        //         template_type:data_set.template_value,
                        //         year:data_set.year_value,
                        //         month:data_set.month_value,
                        //         day:data_set.day_value,
                        //         project:data_set.project_value,
                        //         report:toRaw(nodes)[0]["value"],
                        //         request_type:"data",
                        //         }
                        //     })
                        //     .then(res => {
                        //         data_set.data=[toRaw(res.data.data)]
                        //         console.log(data_set.data,"1312313");
                            
                        //     resolve(nodes);
                        // })
                })
                }
                // if ( node.level === 6 ) {
                //     console.log(66);
                // axios({
                //     url: '/api/v1/ReportTemplates/',
                //     method:'get',
                //     params:{
                //         template_type:data_set.template_value,
                //         year:data_set.year_value,
                //         month:data_set.month_value,
                //         day:data_set.day_value,
                //         project:data_set.project_value,
                //         report:toRaw(node["value"]),
                //         request_type:"data",
                //         }
                //     })
                //     .then(res => {
                //         data_set.data=[toRaw(res.data.data)]
                //         data_set.project_value=toRaw(node["value"])
                //         console.log(data_set.data,"1312313");
                //     //     const nodes = data_set.data.map(item => ({
                //     //     value: item,
                //     //     label: item ,
                //     //     leaf: node.level >= 6
                //     // }));

                //     // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                    
                //     resolve(nodes);
                // })
                // }
              
            }, 200)
            
            }
            }
        function project_name(){
             axios({
                url: '/api/v1/ReportTemplates/',
                method:'get',
                params:{
                    // template_type:"template",
                    request_type:"template"
                    
                    }
                })
                .then(res => {
                    data_set.template=toRaw(res.data.data)
                    var lis = []
                    for (var i in data_set.template){
                        lis.push(
                            {
                                "value":data_set.template[i],
                                "label":data_set.template[i]
                            }
                        )
                    }
                    data_set.report_search_template_options=lis
                        
                        })
                  
        }
        function cascader_membermenu(val){
         if(val==false){
           
            if (data_set.cascader_data.length==6){
                console.log(this.memvalue,12312);
                console.log(data_set.cascader_data,11111);
                data_set.report_value=data_set.cascader_data[5]
                setTimeout(() => {
                    axios({
                        url: '/api/v1/ReportTemplates/',
                        method:'get',
                        params:{
                            template_type:data_set.template_value,
                            year:data_set.year_value,
                            month:data_set.month_value,
                            day:data_set.day_value,
                            project:data_set.project_value,
                            report:data_set.report_value,
                            request_type:"data",
                            }
                        })
                        .then(res => {
                           
                            data_set.data=(res.data.data)
                            data_set.msg=res.data.data.data
                            console.log(res.data.data.data);
                            this.value = res.data.data.info.project
                            this.memvalue = res.data.data.info.member
                            this.timevalue1 = res.data.data.info.start
                            this.timevalue2 = res.data.data.info.end
                     
                            this.loading=true
                            setTimeout(() => {
                                this.query()
                            }, 200);


                    })
                }, 300);
                data_set.report_show=true
                data_set.template_show=false
                data_set.search_show=false
            }
            // else if (typeof data_set.template_value == "string"){
            //       axios({
            //             url: '/api/v1/ReportTemplates/',
            //             method:'get',
            //             params:{
            //                 template_type:data_set.template_value,
            //                 request_type:"template_data",
            //                 }
            //             })
            //             .then(res => {
            //                 data_set.msg=res.data.data
            //             })
            // }
            data_set.rtf_version_show=false
            nextTick(()=>{
            //写入操作
                data_set.rtf_version_show = true
            })

                data_set.cascader_data=[]
                project_name()
                rft_up_time()
         }
         if(val == true){
             // 格式化
                project_name()
                data_set.template=[],
                data_set.template_value=[],
                data_set.year=[],
                data_set.year_value=[],
                data_set.month=[],
                data_set.month_value=[],
                data_set.day=[],
                data_set.day_value=[],
                data_set.project=[],
                data_set.project_value=[],
                data_set.report=[],
                data_set.report_value=[],
                data_set.data=[],
                data_set.data_value=[],
                data_set.search=[],
                data_set.search_value=[],
                data_set.template_select_data=[],
                data_set.report_show=false,
                data_set.template_show=false,
                data_set.search_show=false
                
         }
        }
        onMounted(()=>{
            project_name()
            var lis = []
            axios({
                url: '/api/v1/ReportTemplates/',
                method:'get',
                params:{
                    // template_type:"template",
                    request_type:"template"
                    
                    }
                })
                .then(res => {
                    
                   for(var i in res.data.data){
                        lis.push(
                        {
                            "value":res.data.data[i],
                            "label":res.data.data[i]
                        }
                        )
                   }
                    console.log(lis);
                })
            data_set.template_select_options=lis
        })
        function add_table(){

        }
        function rtf_add_close(){
            console.log("close");
            
        }
        function rtf_up_close(){
            data_set.up_report=[]
        }
        function rtf_up_y(){
            if(data_set.msg.length>=1){
                hpaxios("/api/v1/ReportTemplates/",{
                template_type:data_set.template_value,
                year:data_set.update_year,
                month:data_set.update_month,
                day:data_set.update_day,
                project:data_set.project_value,
                report:data_set.up_report,
                request_type:"report",
                data:{
                    info:{
                        project:this.value,
                        member:this.memvalue,
                        start:this.timevalue1,
                        end:this.timevalue2
                    },
                    data:data_set.msg
                }
                
            })
                .then(res => {
                    
                    if(res.data.data=="报告已存在"){
                        ElMessage({
                            message: '报告已存在，请修改报告简介',
                            type: 'warning',
                        })
                        data_set.up_report=[]
                    }
                    else if(res.data.data=="新增报告成功"){
                        ElMessage({
                            message: '新增报告成功',
                            type: 'success',
                        })
                        data_set.rtf_up_show=false
                        data_set.up_report=[]
                    }
                    else{
                         ElMessage({
                            showClose: true,
                            message: res.data.data,
                            type: 'error',
                        })
                    }
                })
            }
            else{
                ElMessage({
                    showClose: true,
                    message: '未查询到数据',
                    type: 'error',
                })
            }
            
        }
        function rtf_delete(){
            hdaxios("/api/v1/ReportTemplates/",{
                data:{
                    template_type:data_set.template_value,
                    year:data_set.year_value,
                    month:data_set.month_value,
                    day:data_set.day_value,
                    project:data_set.project_value,
                    report:data_set.report_value,
                    request_type:"report",
                    }
            })
                .then(res => {
                    console.log(res.data.data);
                    if(res.data.data=="报告不存在"){
                        ElMessage({
                            message: '报告不存在',
                            type: 'warning',
                        })
                        
                    }
                    else if(res.data.data=="删除报告成功"){
                        ElMessage({
                            message: '删除报告成功',
                            type: 'success',
                        })
                        data_set.msg="",
                        data_set.report_show=false
                    }
                    else{
                         ElMessage({
                            showClose: true,
                            message: res.data.data,
                            type: 'error',
                        })
                    }
                })
        }
        function rtf_add_y(){
            if(data_set.msg.length>=1){
                hpaxios("/api/v1/ReportTemplates/",{
                    request_type:"template",
                    template_type:data_set.add_template,
                    data:data_set.msg
                
            })
                .then(res => {
                    if(res.data.data=="模板类型已存在"){
                        hdaxios("/api/v1/ReportTemplates/",{
                            data:{
                                request_type:"template",
                                template_type:data_set.add_template,
                                data:data_set.msg
                                }
                        }).then(res=>{
                            hpaxios("/api/v1/ReportTemplates/",{
                            request_type:"template",
                            template_type:data_set.add_template,
                            data:data_set.msg
                
                        })
                        }),
                       
                        ElMessage({
                            message: '新增模板成功',
                            type: 'success',
                        })
                        
                        data_set.rtf_add_show=false
                    }
                    else if(res.data.data=="新增模板成功"){
                        ElMessage({
                            message: '新增模板成功',
                            type: 'success',
                        })
                        data_set.rtf_add_show=false
                   
                    }
                    else{
                         ElMessage({
                            showClose: true,
                            message: res.data.data,
                            type: 'error',
                        })
                    }
                })
            }
            else{
                ElMessage({
                    showClose: true,
                    message: '未查询到数据',
                    type: 'error',
                })
            }
        }
        function rft_up_time(){
            var myDate = new Date();
            data_set.update_year = String(myDate.getFullYear())
            data_set.update_month = String(myDate.getMonth() + 1)
            data_set.update_day = String(myDate.getDate())   
            // console.log(data_set.update_year,data_set.update_month,data_set.update_day);     
        }
        function template_select_change(){
           axios({
                url: '/api/v1/ReportTemplates/',
                method:'get',
                params:{
                    template_type:data_set.template_select_data,
                    request_type:"template_data",
                    }
                })
                .then(res => {
                    data_set.template_value=data_set.template_select_data
                    data_set.msg=res.data.data
                    rft_up_time()
                })
                data_set.template_value=[],
                data_set.year_value=[],
                data_set.month_value=[],
                data_set.day_value=[],
                data_set.project_value=[],
                data_set.report_value=[],
                data_set.data_value=[],
                data_set.report_show=false
                data_set.search_show=false
                data_set.template_show=true
        }
        function template_input_enter(){
            if (data_set.template_input_data.length!=0 ||data_set.report_search_template!=0 ||data_set.report_search_year!=0 ||data_set.report_search_month!=0 ||data_set.report_search_day!=0||data_set.report_search_project!=0){
                if(data_set.template_input_data.length!=0){
                    data_set.template_input_data = data_set.template_input_data.split(" ").join("");
                }
                    axios({
                    url: '/api/v1/ReportTemplates/',
                    method:'get',
                    params:{
                        template_type:data_set.report_search_template,
                        year:data_set.report_search_year,
                        month:data_set.report_search_month,
                        day:data_set.report_search_day,
                        project:data_set.report_search_project,
                        search:data_set.template_input_data,
                        request_type:"search",
                        }
                    })
                    .then(res => {
                        if (res.data.data.length == 0){
                            ElNotification({
                                title: '错误',
                                message: '未查询到相关信息',
                                type: 'warning',
                            })
                        }
                        else{
                            
                            var lis = []
                            var count = 0
                            for (var i in res.data.data){
                                lis.push(
                                    {
                                        "label":res.data.data[i]["data"],
                                        "template":res.data.data[i]["template_type"],
                                        "year":res.data.data[i]["year"],
                                        "month":res.data.data[i]["month"],
                                        "day":res.data.data[i]["day"],
                                        "project":res.data.data[i]["project"],
                                        "report":res.data.data[i]["report"],
                                    }
                                )
                                count = count + 1
                            }
                            data_set.report_search_options=lis
                            data_set.rtf_drawer=true
                            data_set.report_search_count=count
                        }
                    })
            }
            
        }
        function report_search_change(template,year,month,day,project,report){
            rft_up_time()
            data_set.template_value=template
            // data_set.update_year=year
            // data_set.update_month=month
            // data_set.update_day=day
            data_set.project_value=project
            data_set.report_value=report
            data_set.report_show=false
            data_set.template_show=false
            data_set.search_show=true
            setTimeout(() => {
                data_set.rtf_drawer=false
            }, 300);
        }
        function report_search_template_info(){
            
        }
        function template_input_enter_search(){
            template_input_enter()
        }
        return{
            ...toRefs(data_set),
            add_set,
            del_set,
            add_set_2,
            del_set_2,
            del_set_all,
            edit_table,
            table_props,
            project_name,
            cascader_membermenu,
            rtf_add_close,
            rtf_up_close,
            rtf_up_y,
            rtf_delete,
            rtf_add_y,
            rft_up_time,
            template_select_change,
            template_input_enter,
            Search,
            report_search_change,
            report_search_template_info,
            template_input_enter_search
        //   data_set_show
        }
        },
//  setup(){
//       const data_set = reactive(
//         {
//           tableData_set:[
//             {
//               job: '功能测试',
//               status: '测试完成，没有问题',
//             },
           
//           ],
//           tableData_2_set:[
//             {
//               warn:""
//             }
//           ]
//         }
//       )

//       const add_set = ()=>{
//         data_set.tableData_set.push(
//           {
//             job: '',
//             status: '',
//           }
//         )
//         document.getElementById("p1").style.height = String(data_set.tableData_set.length*33+(24*(data_set.tableData_set.length-1)))+"px"
//       }

//       function del_set(){
//         data_set.tableData_set.pop()
//         document.getElementById("p1").style.height = String(data_set.tableData_set.length*33+(24*(data_set.tableData_set.length-1)))+"px"
//       }
//     //   watchEffect(add_set,del_set,()=>{
//     //       if(data_set.tableData_set.length){
//     //       setTimeout(() => {
//     //             document.getElementById("p1").style.height = String(data_set.tableData_set.length*33+(24*(data_set.tableData_set.length-1)))+"px"
//     //       }, 500);
//     //     }
//     //   })
//       // watchEffect(()=>{
//       //   console.log(data.tableData.length+"------"+data.len);
//       //   data.len = data.tableData.length*2.4
//       // })

//       return{
//         ...toRefs(data_set),
//         add_set,
//         del_set,
//       }
//     },
 data(){
      return{
        kpitablename:"",
        kpitabletype:"",
        kpitablesmall:false,
        kpitablebackground:false,
        kpitabledisabled:false,
        kpitabledata:[],
        kpitablepage:1,
        kpitabletotal:1,
        project_fx:[],
        data_analysis_data:[],
        data_analysis_dialog:false,
        value_name:"",
        quit_list_info:[],
        member_choice_list:[],
        loading_table:false,
        loading:false,
        timevalue1:"",
        timevalue2:"",
        options: [

        ],
        edit_table_show:true,
        data_set_show_1:false,
        htmlshow:false,
        value:"",
        notclosedrank:"",
        dialogTableVisible: false,
        dialogVisible: false,
        dialogVisiblea: false,
        dialogVisibleaa:false,
        dialogVisibleaaab:false,
        dialogVisibleaaa:false,
        dialogVisibleaaaa:false,
        waitmanagedata:[],
        waitmanagedrank:"",
        waitmanagetotal:100,
        waitmanagepage:1,
        waitmanagepage_size:10,
        waitmanagecurrentPage:1,
        waitmanageinput:"",
        waitmanagepagebugdetails:"",
        waitmanagebugdetails:"",
        waitmanagepage_size_options:[{
            value:10,
            label:'每页10条'},{
            value:20,
            label:'每页20条'},{
            value:50,
            label:'每页50条'},{
            value:100,
            label:'每页100条'}],
        waitreturndata:[],
        waitreturnrank:"",
        waitreturntotal:100,
        waitreturnpage:1,
        waitreturnpage_size:10,
        waitreturncurrentPage:1,
        waitreturninput:"",
        waitreturnpagebugdetails:"",
        waitreturnbugdetails:"",
        waitreturnpage_size_options:[{
            value:10,
            label:'每页10条'},{
            value:20,
            label:'每页20条'},{
            value:50,
            label:'每页50条'},{
            value:100,
            label:'每页100条'}],
        stuckdata:[],
        stuckrank:"",
        stucktotal:100,
        stuckpage:1,
        stuckpage_size:10,
        stuckcurrentPage:1,
        stuckinput:"",
        stuckpagebugdetails:"",
        stuckbugdetails:"",
        stuckpage_size_options:[{
            value:10,
            label:'每页10条'},{
            value:20,
            label:'每页20条'},{
            value:50,
            label:'每页50条'},{
            value:100,
            label:'每页100条'}],
        closeddata:[],
        closedrank:"",
        closedtotal:100,
        closedpage:1,
        closedpage_size:10,
        closedcurrentPage:1,
        closedinput:"",
        closedpagebugdetails:"",
        closedbugdetails:"",
        closedpage_size_options:[{
            value:10,
            label:'每页10条'},{
            value:20,
            label:'每页20条'},{
            value:50,
            label:'每页50条'},{
            value:100,
            label:'每页100条'}],
        hangupdata:[],
        hanguprank:"",
        hanguptotal:100,
        hanguppage:1,
        hanguppage_size:10,
        hangupcurrentPage:1,
        hangupinput:"",
        hanguppagebugdetails:"",
        hangupbugdetails:"",
        hanguppage_size_options:[{
            value:10,
            label:'每页10条'},{
            value:20,
            label:'每页20条'},{
            value:50,
            label:'每页50条'},{
            value:100,
            label:'每页100条'}],
        notcloseddata:[],
        notclosedtotal:100,
        notclosedpage:1,
        notclosedpage_size:10,
        notclosedcurrentPage:1,
        notclosedinput:"",
        notclosedbugdetails:"",
        notclosedpage_size_options:[{
            value:10,
            label:'每页10条'},{
            value:20,
            label:'每页20条'},{
            value:50,
            label:'每页50条'},{
            value:100,
            label:'每页100条'}],
        show:false,
        show2:true,
        allshow:false,
        notclosedif:true,
        page_size:10,//每页的数据条数
        currentPage:1, //默认的页数
        page:1,
        total:100, //默认的总页数
        bugdetails:"",
        page_size_options:[{
            value:10,
            label:'每页10条'},{
            value:20,
            label:'每页20条'},{
            value:50,
            label:'每页50条'},{
            value:100,
            label:'每页100条'}],
        input:"",
        tableData:[], //列表所获取的数据来源
        // bugcard
        bugnumber:"",
        addbugnumber:{},
        staybugnumber:{},
        closebugnumber:{},
        failbugnumber:{},
        restartbugnumber:{},
        queryinfo:{},
        queryinfocode:"",
        bugnumberrank:"",
        downloadbutton:true,
        nodownshow:false,
        tableDataa: [],
        tableDataaa: [],
        tableDataaaa: [],
        trackbug:[],
        trackbuglist:[],
        showtable:false,
        textnumber:1,
        texttitle:"",
        textarea1: ref([]),
        textarea2: ref([]),
        textinput:"1",
        seen: false,
        seen2: false,
        seen3: false,
        menulist:[],
        bugmanname:[],
        bugmannum:{},
        bugcard:{S:[],
                 A:[],
                 B:[],
                 C:[],
                 D:[]
        },
        bugcard2:{
            reg:[],
            res:[]
        },
        charobjname:[],
        charobjnum:[],
        bugmanshow:true,
        memoptions:[],
        props : { multiple: true },
        memvalue:[],
        memvalues:"",
        allbugnumber:{},
        code:"",
        countname:"",
       
        Project_analysis_show:false,
        loading_report:false,
        Project_analysis_value:"",
        Project_status_value:"",
        Project_status_value_data:"",
        Project_analysis_value_data:[],
        earlywarning_str:{
                "BUG总数":"",
                "遗留BUG数":"",
                "BUG回归失败":"",
                "BUG重启":"",
                "未关闭":"",
                "待处理":"",
                "待回归":"",
                "已关闭":"",
                "卡死":"",
                "挂起":""
                },

        earlywarning_int:{
                "BUG总数":null,
                "遗留BUG数":null,
                "BUG回归失败":null,
                "BUG重启":null,
                "未关闭":null,
                "待处理":null,
                "待回归":null,
                "已关闭":null,
                "卡死":null,
                "挂起":null
        },
        
        earlywarning_data:{}
            
        ,
        kpidata_value:{},
        warning_data:[],
        kpidata:
                {
               
                },

            
        earlywarning_show:false,
        Project_analysis_options:[
            
        ],
        average:[],
        
        Project_status_options:[
            {
                "value":"未关闭",
                "label":"未关闭"
            },
            {
                "value":"待处理",
                "label":"待处理"
            },
            {
                "value":"待回归",
                "label":"待回归"
            },
            {
                "value":"已关闭",
                "label":"已关闭"
            },
            {
                "value":"卡死",
                "label":"卡死"
            },
            {
                "value":"挂起",
                "label":"挂起"
            },
        ],
        Project_analysis_Data_2:{

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
                toolbox: {
                    feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                    }
                },
                xAxis: [
                    {
                    type: 'category',
                    data:[]
                    }
                ],
                yAxis: [
                    {
                    type: 'value'
                    }
                ],
                series: [
                
                ]
                },
        Project_analysis_Data:
                        {
                legend: {},
                tooltip: {},
                grid:{"left":"3%","right":"4%","bottom":"3%","containLabel":"true"},
                
                dataset: {
                    dimensions: [],
                    source: [
                        
                    ]
                },
                xAxis: { type: 'category' },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: []
                },
       
      }
    },
    watch:{
        value(){
            if (this.value == 'all'){
                this.allshow = false
            }
            else{
                
                this.allshow = true
            } 
        },
         data_analysis_dialog(){
                console.log(1111);
               
            }
        // 已经第一次查询过只需要选择新的项目就可以自动改变
    //     value(){
    //         if (this.queryinfocode == 10050){
    //         let starttime = moment(this.timevalue1,"yyyy-MM-DD").format().split('T')[0]
    //         let endtime = moment(this.timevalue2,"yyyy-MM-DD").format().split('T')[0]
    //         this.timevalue1 = starttime
    //         this.timevalue2 = endtime
    //         axios({
    //         url: '/api/v1/QueryInfo/',
    //         method:'get',
    //         params:{
    //             project:this.value,
    //             start:this.timevalue1,
    //             end:this.timevalue2,
    //             data_type:"fx"
    //             }
    //         })
    //         .then(res => {
    //             this.show=true
    //             this.show2=false
    //             this.queryinfo=res.data.data
    //             this.bugnumber=this.queryinfo.bug_statistics_dict.BUG总数.sum
    //             this.addbugnumber=this.queryinfo.bug_statistics_dict.新增BUG数.sum
    //             this.staybugnumber=this.queryinfo.bug_statistics_dict.遗留BUG数.sum
    //             this.closebugnumber=this.queryinfo.bug_statistics_dict.关闭BUG数.sum
    //             this.failbugnumber=this.queryinfo.bug_statistics_dict.BUG回归失败.sum
    //             this.restartbugnumber=this.queryinfo.bug_statistics_dict.BUG重启.sum
    //             this.bugcard2.reg = this.queryinfo.bug_statistics_dict.BUG回归失败
    //             this.bugcard2.res = this.queryinfo.bug_statistics_dict.BUG重启
    //             this.currentPage=1 
    //             // bug统计饼图
    //             charObj = echarts.getInstanceByDom(document.getElementById("BUGStatistics"))
    //                 // Legacybugmychart = echarts.getInstanceByDom(document.getElementById("Legacybug"))
    //                 if (charObj == null) { // 如果不存在，就进行初始化
    //                     charObj = echarts.init(document.getElementById("BUGStatistics"));
    //                 }
    //                 // if (Legacybugmychart == null) { // 如果不存在，就进行初始化
    //                 //     Legacybugmychart = echarts.init(document.getElementById("Legacybug"));
    //                 // }
    //             var num = []
    //             var name = []
    //             for (var i=0;i<6;i++){
    //             var key = this.queryinfo.bug_statistics_chart.series[0].data[i].name.split(':')[0]
    //            var va = this.queryinfo.bug_statistics_chart.series[0].data[i].name.split(':')[1].split('个')[0]
    //             num.push(va)
    //             name.push(key)
    //             }
    //             this.charobjname = name
    //             this.charobjnum = num
    //             var reqnum = {"BUG情况":this.charobjnum}
    //              axios({
    //                     url: '/api/v1/Echarts/',
    //                     method:'get',
    //                     params:{
    //                         title:this.queryinfo.bug_statistics_chart.title.text,
    //                         echarts_type:'bar',
    //                         series_option:{"smooth": "True", "seriesLayoutBy": "row","barWidth" : 60},
    //                         series_data:JSON.stringify(reqnum),
    //                         xAxis:JSON.stringify(this.charobjname),
    //                         yAxis:"个",
    //                         color:JSON.stringify(['#409EFF90', '#F2CF61', '#318C80', "#51D9B5", '#A6E582'])
    //                         }
    //                     })
    //                     .then(res => {
    //                         charObj.setOption(res.data.data);
    //                     })
                   
    //                 // Legacybugmychart.setOption(this.queryinfo.bug_day_chart);
    //                 this.currentPage=1 
    //                 this.$store.state.queryinfocode=this.queryinfocode
    //             })
    //         let project_list = [this.value]
    //         adpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1, data_type:"fx",end:this.timevalue2, projects: project_list,iteration:"bug".iteration,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
    //             .then(res => {
    //                     this.tableData=res.data.data.page_data
    //                     this.total=res.data.data.search_sum
    //                     this.bugdetails=res.data.data.search_sum
    //             })
    //         // 获取TOP5BUG统计数据
    //         axios({
    //         url: '/api/v1/BugModuleTop/',
    //         method:'get',
    //         params:{
    //             project:this.value,
    //             start:this.timevalue1,
    //             end:this.timevalue2,
    //             member:this.memvalue,
    //             data_type:"fx",
    //             }
    //         })
    //         .then(res => {
    //             let statisticslist=[]
    //             for(var i=0;i<5;i++){
    //                 for (var x in res.data.data[i]){
    //                 statisticslist.push({"count":i+1,"key":x,"value":res.data.data[i][x]})
    //                 }
    //             }
    //             this.tableDataa=statisticslist              
    //         }),
    //         // 人员bug数量
    //          axios({
    //                     url: '/api/v1/AddedBugMember/',
    //                     method:'get',
    //                     params:{
    //                         project:this.value,
    //                         start:this.timevalue1,
    //                         end:this.timevalue2,
    //                         }
    //                     })
    //                     .then(res => {
                           
    //                         this.bugmanname = res.data.data.member_list
    //                         this.bugmannum = res.data.data.added_data
    //                         axios({
    //                             url: '/api/v1/Echarts/',
    //                             method:'get',
    //                             params:{
    //                                  title:this.value+"人员Bug数量",
    //                                 echarts_type:'bar',
    //                                 series_option:{"smooth": "True", "seriesLayoutBy": "row", "barWidth" : 60},
    //                                 series_data:this.bugmannum,
    //                                 xAxis:JSON.stringify(this.bugmanname),
    //                                 yAxis:"个",
    //                                 color:JSON.stringify(['#409EFF90', '#409EFF', '#318C80', "#51D9B5", '#A6E582'])
    //                                 }
    //                             })
    //                             .then(res => {
    //                                     var dataa = res.data.data
    //                                     Bugm.setOption(dataa) 
    //                                 })
                            
    //                     })
    //         // 获取S/A级别bugTOP5
    //         axios({
    //         url: '/api/v1/BugModuleTop/',
    //         method:'get',
    //         params:{
    //             project:this.value,
    //             start:this.timevalue1,
    //             end:this.timevalue2,
    //             member:this.memvalue,
    //             data_type:"fx",
    //             level:"yes"
    //             }
    //         })
    //         .then(res => {
    //             let statisticslist=[]
    //             for(var i=0;i<5;i++){
    //                 for (var x in res.data.data[i]){
    //                 statisticslist.push({"count":i+1,"key":x,"value":res.data.data[i][x]})
    //                 }
    //             }
    //             this.tableDataaa=statisticslist               
    //         })
    //          // 获取未关闭bugTOP5
    //         axios({
    //         url: '/api/v1/BugModuleTop/',
    //         method:'get',
    //         params:{
    //             project:this.value,
    //             start:this.timevalue1,
    //             end:this.timevalue2,
    //             member:this.memvalue,
    //             data_type:"fx",
    //             not_close:"yes"
    //             }
    //         })
    //         .then(res => {
    //             let statisticslist=[]
    //             for(var i=0;i<5;i++){
    //                 for (var x in res.data.data[i]){
    //                 statisticslist.push({"count":i+1,"key":x,"value":res.data.data[i][x]})
    //                 }
    //             }
    //             this.tableDataaaa=statisticslist               
    //         })
    //         // 获取BUG追踪数据
    //         axios({
    //         url: '/api/v1/BugStatisticalDistribution/',
    //         method:'get',
    //         params:{
    //             data_type:"fx",
    //             start:this.timevalue1,
    //             end:this.timevalue2,
    //             project:this.value,
    //             }
    //         })
    //         .then(res => {
    //             let lis = []
    //             for (var i in res.data.data){
    //                 if(i == "SUM"){
    //                     let data = res.data.data[i]
    //                     data["rank"] = "合计"
    //                     lis.push(data) 
    //                 }
    //                 else{
    //                     let data = res.data.data[i]
    //                     data["rank"] = i
    //                     lis.push(data) 
    //                 }
    //             }
    //             this.bugcard.S = res.data.data.致命
    //             this.bugcard.A = res.data.data.严重
    //             this.bugcard.B = res.data.data.一般
    //             this.bugcard.C = res.data.data.提示
    //             this.bugcard.D = res.data.data.建议
    //             this.trackbug=lis
    //         })
    //         }
    //     },
    //     // 已经第一次查询过只需要选择新的开始时间就可以自动改变
    //     timevalue1(){
    //         if (this.queryinfocode == 10050){
    //         let starttime = moment(this.timevalue1,"yyyy-MM-DD").format().split('T')[0]
    //         let endtime = moment(this.timevalue2,"yyyy-MM-DD").format().split('T')[0]
    //         this.timevalue1 = starttime
    //         this.timevalue2 = endtime
    //         axios({
    //         url: '/api/v1/QueryInfo/',
    //         method:'get',
    //         params:{
    //             project:this.value,
    //             start:this.timevalue1,
    //             end:this.timevalue2,
    //             data_type:"fx",
    //             }
    //         })
    //         .then(res => {
    //             this.show=true
    //             this.show2=false
    //             this.queryinfo=res.data.data
    //             this.bugnumber=this.queryinfo.bug_statistics_dict.BUG总数.sum
    //             this.addbugnumber=this.queryinfo.bug_statistics_dict.新增BUG数.sum
    //             this.staybugnumber=this.queryinfo.bug_statistics_dict.遗留BUG数.sum
    //             this.closebugnumber=this.queryinfo.bug_statistics_dict.关闭BUG数.sum
    //             this.failbugnumber=this.queryinfo.bug_statistics_dict.BUG回归失败.sum
    //             this.restartbugnumber=this.queryinfo.bug_statistics_dict.BUG重启.sum
    //             this.bugcard2.reg = this.queryinfo.bug_statistics_dict.BUG回归失败
    //                 this.bugcard2.res = this.queryinfo.bug_statistics_dict.BUG重启
    //             this.currentPage=1 
    //             // bug统计饼图
    //             charObj = echarts.getInstanceByDom(document.getElementById("BUGStatistics"))
    //                 // Legacybugmychart = echarts.getInstanceByDom(document.getElementById("Legacybug"))
    //                 if (charObj == null) { // 如果不存在，就进行初始化
    //                     charObj = echarts.init(document.getElementById("BUGStatistics"));
    //                 }
    //                 // if (Legacybugmychart == null) { // 如果不存在，就进行初始化
    //                 //     Legacybugmychart = echarts.init(document.getElementById("Legacybug"));
    //                 // }
    //            var num = []
    //             var name = []
    //             for (var i=0;i<6;i++){
    //             var key = this.queryinfo.bug_statistics_chart.series[0].data[i].name.split(':')[0]
    //             var va = this.queryinfo.bug_statistics_chart.series[0].data[i].name.split(':')[1].split('个')[0]
    //             num.push(va)
    //             name.push(key)
    //             }
    //             this.charobjname = name
    //             this.charobjnum = num
    //             var reqnum = {"BUG情况":this.charobjnum}
    //              axios({
    //                     url: '/api/v1/Echarts/',
    //                     method:'get',
    //                     params:{
    //                         title:this.queryinfo.bug_statistics_chart.title.text,
    //                         echarts_type:'bar',
    //                         series_option:{"smooth": "True", "seriesLayoutBy": "row","barWidth" : 60},
    //                         series_data:JSON.stringify(reqnum),
    //                         xAxis:JSON.stringify(this.charobjname),
    //                         yAxis:"个",
    //                         color:JSON.stringify(['#409EFF90', '#F2CF61', '#318C80', "#51D9B5", '#A6E582'])
    //                         }
    //                     })
    //                     .then(res => {
    //                         charObj.setOption(res.data.data);
    //                     })
                
    //                 // Legacybugmychart.setOption(this.queryinfo.bug_day_chart);
    //                 this.currentPage=1 
    //                 this.$store.state.queryinfocode=this.queryinfocode
    //             })
    //         let project_list = [this.value]
    //         adpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,data_type:"fx",end:this.timevalue2, projects: project_list,iteration:"bug".iteration,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
    //             .then(res => {
    //                 if (this.queryinfocode == 10050){
    //                     this.tableData=res.data.data.page_data
    //                     this.total=res.data.data.search_sum
    //                     this.bugdetails=res.data.data.search_sum
    //                 }
    //             })
    //         // 获取TOP5BUG统计数据
    //         axios({
    //         url: '/api/v1/BugModuleTop/',
    //         method:'get',
    //         params:{
    //             project:this.value,
    //             start:this.timevalue1,
    //             end:this.timevalue2,
    //             member:this.memvalue,
    //             data_type:"fx",
    //             }
    //         })
    //         .then(res => {
    //             let statisticslist=[]
    //             for(var i=0;i<5;i++){
    //                 for (var x in res.data.data[i]){
    //                 statisticslist.push({"count":i+1,"key":x,"value":res.data.data[i][x]})
    //                 }
    //             }
    //             this.tableDataa=statisticslist              
    //         }),
    //          axios({
    //                     url: '/api/v1/AddedBugMember/',
    //                     method:'get',
    //                     params:{
    //                         project:this.value,
    //                         start:this.timevalue1,
    //                         end:this.timevalue2,
    //                         }
    //                     })
    //                     .then(res => {
                           
    //                         this.bugmanname = res.data.data.member_list
    //                         this.bugmannum = res.data.data.added_data
    //                         axios({
    //                             url: '/api/v1/Echarts/',
    //                             method:'get',
    //                             params:{
    //                                  title:this.value+"人员Bug数量",
    //                                 echarts_type:'bar',
    //                                 series_option:{"smooth": "True", "seriesLayoutBy": "row", "barWidth" : 60},
    //                                 series_data:this.bugmannum,
    //                                 xAxis:JSON.stringify(this.bugmanname),
    //                                 yAxis:"个",
    //                                 color:JSON.stringify(['#409EFF90', '#409EFF', '#318C80', "#51D9B5", '#A6E582'])
    //                                 }
    //                             })
    //                             .then(res => {
    //                                     var dataa = res.data.data
    //                                     Bugm.setOption(dataa) 
    //                                 })
                            
    //                     }),
    //         // 获取S/A级别bugTOP5
    //         axios({
    //         url: '/api/v1/BugModuleTop/',
    //         method:'get',
    //         params:{
    //             project:this.value,
    //             start:this.timevalue1,
    //             end:this.timevalue2,
    //             data_type:"fx",
    //             member:this.memvalue,
    //             level:"yes"
    //             }
    //         })
    //         .then(res => {
    //             let statisticslist=[]
    //             for(var i=0;i<5;i++){
    //                 for (var x in res.data.data[i]){
    //                 statisticslist.push({"count":i+1,"key":x,"value":res.data.data[i][x]})
    //                 }
    //             }
    //             this.tableDataaa=statisticslist               
    //         })
    //          // 获取未关闭bugTOP5
    //         axios({
    //         url: '/api/v1/BugModuleTop/',
    //         method:'get',
    //         params:{
    //             project:this.value,
    //             start:this.timevalue1,
    //             end:this.timevalue2,
    //             data_type:"fx",
    //             member:this.memvalue,
    //             not_close:"yes"
    //             }
    //         })
    //         .then(res => {
    //             let statisticslist=[]
    //             for(var i=0;i<5;i++){
    //                 for (var x in res.data.data[i]){
    //                 statisticslist.push({"count":i+1,"key":x,"value":res.data.data[i][x]})
    //                 }
    //             }
    //             this.tableDataaaa=statisticslist               
    //         })
    //         // 获取BUG追踪数据
    //         axios({
    //         url: '/api/v1/BugStatisticalDistribution/',
    //         method:'get',
    //         params:{
    //             data_type:"fx",
    //             start:this.timevalue1,
    //             end:this.timevalue2,
    //             project:this.value,
    //             }
    //         })
    //         .then(res => {
    //             let lis = []
    //             for (var i in res.data.data){
    //                 if(i == "SUM"){
    //                     let data = res.data.data[i]
    //                     data["rank"] = "合计"
    //                     lis.push(data) 
    //                 }
    //                 else{
    //                     let data = res.data.data[i]
    //                     data["rank"] = i
    //                     lis.push(data) 
    //                 }
    //             }
    //               this.bugcard.S = res.data.data.致命
    //             this.bugcard.A = res.data.data.严重
    //             this.bugcard.B = res.data.data.一般
    //             this.bugcard.C = res.data.data.提示
    //             this.bugcard.D = res.data.data.建议
    //             this.trackbug=lis
    //         })
    //         }
    //     },
    //      // 已经第一次查询过只需要选择新的结束时间就可以自动改变
    //     timevalue2(){
    //         if (this.queryinfocode == 10050){
    //         let starttime = moment(this.timevalue1,"yyyy-MM-DD").format().split('T')[0]
    //         let endtime = moment(this.timevalue2,"yyyy-MM-DD").format().split('T')[0]
    //         this.timevalue1 = starttime
    //         this.timevalue2 = endtime
    //         axios({
    //         url: '/api/v1/QueryInfo/',
    //         method:'get',
    //         params:{
    //             project:this.value,
    //             start:this.timevalue1,
    //             end:this.timevalue2,
    //             data_type:"fx",
    //             }
    //         })
    //         .then(res => {
    //             this.show=true
    //             this.show2=false
    //             this.queryinfo=res.data.data
    //             this.bugnumber=this.queryinfo.bug_statistics_dict.BUG总数.sum
    //             this.addbugnumber=this.queryinfo.bug_statistics_dict.新增BUG数.sum
    //             this.staybugnumber=this.queryinfo.bug_statistics_dict.遗留BUG数.sum
    //             this.closebugnumber=this.queryinfo.bug_statistics_dict.关闭BUG数.sum
    //             this.failbugnumber=this.queryinfo.bug_statistics_dict.BUG回归失败.sum
    //             this.restartbugnumber=this.queryinfo.bug_statistics_dict.BUG重启.sum
    //             this.bugcard2.reg = this.queryinfo.bug_statistics_dict.BUG回归失败
    //                 this.bugcard2.res = this.queryinfo.bug_statistics_dict.BUG重启
    //             this.currentPage=1 
    //             // bug统计饼图
    //             charObj = echarts.getInstanceByDom(document.getElementById("BUGStatistics"))
    //                 // Legacybugmychart = echarts.getInstanceByDom(document.getElementById("Legacybug"))
    //                 if (charObj == null) { // 如果不存在，就进行初始化
    //                     charObj = echarts.init(document.getElementById("BUGStatistics"));
    //                 }
    //                 // if (Legacybugmychart == null) { // 如果不存在，就进行初始化
    //                 //     Legacybugmychart = echarts.init(document.getElementById("Legacybug"));
    //                 // }
    //             var num = []
    //             var name = []
    //             for (var i=0;i<6;i++){
    //             var key = this.queryinfo.bug_statistics_chart.series[0].data[i].name.split(':')[0]
    //           var va = this.queryinfo.bug_statistics_chart.series[0].data[i].name.split(':')[1].split('个')[0]
    //             num.push(va)
    //             name.push(key)
    //             }
    //             this.charobjname = name
    //             this.charobjnum = num
    //             var reqnum = {"BUG情况":this.charobjnum}
    //              axios({
    //                     url: '/api/v1/Echarts/',
    //                     method:'get',
    //                     params:{
    //                         title:this.queryinfo.bug_statistics_chart.title.text,
    //                         echarts_type:'bar',
    //                         series_option:{"smooth": "True", "seriesLayoutBy": "row","barWidth" : 60},
    //                         series_data:JSON.stringify(reqnum),
    //                         xAxis:JSON.stringify(this.charobjname),
    //                         yAxis:"个",
    //                         color:JSON.stringify(['#409EFF90', '#F2CF61', '#318C80', "#51D9B5", '#A6E582'])
    //                         }
    //                     })
    //                     .then(res => {
    //                         charObj.setOption(res.data.data);
    //                     })
                  
    //                 // charObj.setOption(this.queryinfo.bug_statistics_chart);
    //                 // Legacybugmychart.setOption(this.queryinfo.bug_day_chart);
    //                 this.currentPage=1 
    //                 this.$store.state.queryinfocode=this.queryinfocode
    //             })
            
    //         // 获取TOP5BUG统计数据
    //         axios({
    //         url: '/api/v1/BugModuleTop/',
    //         method:'get',
    //         params:{
    //             project:this.value,
    //             start:this.timevalue1,
    //             end:this.timevalue2,
    //             member:this.memvalue,
    //             data_type:"fx",
    //             }
    //         })
    //         .then(res => {
    //             let statisticslist=[]
    //             for(var i=0;i<5;i++){
    //                 for (var x in res.data.data[i]){
    //                 statisticslist.push({"count":i+1,"key":x,"value":res.data.data[i][x]})
    //                 }
    //             }
    //             this.tableDataa=statisticslist              
    //         })
    //         // 获取S/A级别bugTOP5
    //         axios({
    //         url: '/api/v1/BugModuleTop/',
    //         method:'get',
    //         params:{
    //             project:this.value,
    //             start:this.timevalue1,
    //             end:this.timevalue2,
    //             member:this.memvalue,
    //             data_type:"fx",
    //             level:"yes"
    //             }
    //         })
    //         .then(res => {
    //             let statisticslist=[]
    //             for(var i=0;i<5;i++){
    //                 for (var x in res.data.data[i]){
    //                 statisticslist.push({"count":i+1,"key":x,"value":res.data.data[i][x]})
    //                 }
    //             }
    //             this.tableDataaa=statisticslist               
    //         })
    //          axios({
    //                     url: '/api/v1/AddedBugMember/',
    //                     method:'get',
    //                     params:{
    //                         project:this.value,
    //                         start:this.timevalue1,
    //                         end:this.timevalue2,
    //                         }
    //                     })
    //                     .then(res => {
                          
    //                         this.bugmanname = res.data.data.member_list
    //                         this.bugmannum = res.data.data.added_data
    //                         axios({
    //                             url: '/api/v1/Echarts/',
    //                             method:'get',
    //                             params:{
    //                                  title:this.value+"人员Bug数量",
    //                                 echarts_type:'bar',
    //                                 series_option:{"smooth": "True", "seriesLayoutBy": "row", "barWidth" : 60},
    //                                 series_data:this.bugmannum,
    //                                 xAxis:JSON.stringify(this.bugmanname),
    //                                 yAxis:"个",
    //                                 color:JSON.stringify(['#409EFF90', '#409EFF', '#318C80', "#51D9B5", '#A6E582'])
    //                                 }
    //                             })
    //                             .then(res => {
    //                                     var dataa = res.data.data
    //                                     Bugm.setOption(dataa) 
    //                                 })
                            
    //                     })
    //          // 获取未关闭bugTOP5
    //         axios({
    //         url: '/api/v1/BugModuleTop/',
    //         method:'get',
    //         params:{
    //             project:this.value,
    //             start:this.timevalue1,
    //             end:this.timevalue2,
    //             data_type:"fx",
    //             member:this.memvalue,
    //             not_close:"yes"
    //             }
    //         })
    //         .then(res => {
    //             let statisticslist=[]
    //             for(var i=0;i<5;i++){
    //                 for (var x in res.data.data[i]){
    //                 statisticslist.push({"count":i+1,"key":x,"value":res.data.data[i][x]})
    //                 }
    //             }
    //             this.tableDataaaa=statisticslist               
    //         })
    //         // 获取BUG追踪数据
    //         axios({
    //         url: '/api/v1/BugStatisticalDistribution/',
    //         method:'get',
    //         params:{
    //             data_type:"fx",
    //             start:this.timevalue1,
    //             end:this.timevalue2,
    //             project:this.value,
    //             }
    //         })
    //         .then(res => {
    //             let lis = []
    //             for (var i in res.data.data){
    //                 if(i == "SUM"){
    //                     let data = res.data.data[i]
    //                     data["rank"] = "合计"
    //                     lis.push(data) 
    //                 }
    //                 else{
    //                     let data = res.data.data[i]
    //                     data["rank"] = i
    //                     lis.push(data) 
    //                 }
    //             }
    //               this.bugcard.S = res.data.data.致命
    //             this.bugcard.A = res.data.data.严重
    //             this.bugcard.B = res.data.data.一般
    //             this.bugcard.C = res.data.data.提示
    //             this.bugcard.D = res.data.data.建议
    //             this.trackbug=lis
    //         })
    //         }
    //     },
    },
    mounted(){
        
        document.getElementById("pronbit").scrollIntoView({
        behavior: "smooth",  // 平滑过渡
        block:    "start"  // 上边框与视窗顶部平齐。默认值
})

    },
    created(){
        
        // this.project_name()
        // var myDate = new Date();
        // this.timevalue2=myDate.toLocaleDateString()
        // let year1=this.timevalue2.split('/')[0]
        // let month1=this.timevalue2.split('/')[1]
        // if (month1<10){
        //     month1 = "0"+month1
        // }
        // let day1=this.timevalue2.split('/')[2]
        // if (day1<10){
        //     day1 = "0"+day1
        // }
        // this.timevalue2 = year1+"-"+month1+"-"+day1
        // this.timevalue1 = myDate.toLocaleDateString()
        
        // var a = myDate.setDate(myDate.getDate() - 6)
        // console.log("sdsadada",a);
        // var dateArray = ""
        // var dateTemp
        // var flag = 1
        // for (var i = 0; i < 7; i++) {
        // dateTemp = (myDate.getMonth() + 1) + '-' + myDate.getDate()
        // if (i == 0){
        //     dateArray = dateTemp
        // }
        // myDate.setDate(myDate.getDate() + flag)
        // }
        
        // let year=this.timevalue1.split('/')[0]
        // let time = year+"-"+dateArray
        // this.timevalue1=time
        // this.value="all"
        // this.memvalue={0:"all"}
        // this.optionspull()
        setTimeout(() => {
            this.mem()
        }, 200);
        
        // setTimeout(() => {
        //     this.query()
        // }, 200);
        // const lis = []
        // console.log(this.memvalue,"232131");
        // for (var i in this.memvalue){
        //     lis.push(this.memvalue[i])
        // }
        // if(lis.length == 1){
        //     this.memvalues = lis.toString()
        // }
        // else{
        //     var namestr = lis.toString()
        //     namestr = namestr.replace(/,/g,"&")
            
        //     // var namestr = ""
        //     // for(var name in lis){
        //     //    namestr = lis[name] +"&"+namestr
        //     // }
        //     this.memvalues = namestr
            
        //     }
           
        // this.memvalues="all"
        // this.value="all"
        
        // console.log(this.timevalue1);
        
      
    },
    methods:{
        yjconfig(){
             axios({
                url: '/api/v1/BugKPIConfig/',
                method:'get',
                })
                .then(res => {
                    console.log(res.data.data);
                    this.earlywarning_str = res.data.data["config"]["str"]
                    this.earlywarning_int = res.data.data["config"]["int"]
                })
        },
        kpitablechange(){
            
                axios({
                url: '/api/v1/BugKPITable/',
                method:'get',
                params:{
                    project:this.value,
                    version:this.kpitablename,
                    project_type:"fx",
                    bug_type:this.kpitabletype,
                    page:this.kpitablepage,
                    page_size:10,
                    search:""
                        }
                })
                .then(res => {
                    this.kpitabletotal=res.data.data.page_sum
                    this.kpitabledata=res.data.data.page_data
                    
                })
        },
        warning_chick(){
            var lis = []
            for (var i in this.earlywarning_int){
                if (this.earlywarning_int[i] != null && this.earlywarning_str[i].length != 0){
                    if (this.kpidata[i] > this.earlywarning_int[i]){
                        lis.push(this.earlywarning_str[i])
                    }
                }
            }
            this.warning_data = lis
            this.earlywarning_show = false
            
        },
        warning_chick_up(){
            var dic={
               "config":{
                    
               }
            }
            dic["config"]["str"] = this.earlywarning_str
            dic["config"]["int"] = this.earlywarning_int
            console.log(dic);
            hpaxios("/api/v1/BugKPIConfig/",{
                    config:JSON.stringify(dic)
            
                })
                .then(res => {
                    console.log(res);
                })
            
        },
        Project_status_change(val){
            console.log(val);
            if (val==false || this.Project_status_value_data.indexOf(val)!=-1){
                this.loading_report=true
                // this.Project_analysis_Data.dataset.source=[]
                axios({
                    url: '/api/v1/BugKPI/',
                    method:'get',
                    params:{
                            "project":this.value,
                            "versions":JSON.stringify(this.Project_analysis_value),
                            "status":JSON.stringify(this.Project_status_value)
                        }
                    })
                    .then(res => { 
                        var data_name=[]
                                for (var i in res.data.data.echarts){
                                    data_name.push(
                                        i
                                    )
                                }
                                this.Project_analysis_Data_2.xAxis[0]["data"]=data_name
                                var data_info = res.data.data.echarts
                                var data = {}
                                for (var i in data_info){
                                    for(var j in data_info[i]){
                                       data[j]=[]
                                    }
                                    break
                                }
                                
                                for (var i in data_info){
                                    for(var j in data_info[i]){
                                       for (var t in data){
                                        if (j==t){
                                            data[t].push(
                                                data_info[i][j]
                                            )
                                            break
                                        }
                                       }
                                    }
                                }
                                var series_data = []
                                for (var i in data){
                                        var lis = {}
                                        lis["name"]= i,
                                        lis["type"]='bar',
                                        
                                        
                                        lis["emphasis"]={
                                            focue:"series"
                                        },
                                         lis["label"]={
                                            show:true,
                                        },
                                        lis["data"]=data[i]
                                    if(i=="致命"||i=="严重"||i=="一般"||i=="提示"||i=="建议"){
                                        lis["stack"] = "st",
                                        lis["barWidth"]="15"
                                        }
                                    else{
                                        lis["barWidth"]="25"
                                    }
                                    series_data.push(lis)
                                   
                                }
                                for(var i in series_data){
                                    for(var j in series_data[i]){
                                        if(series_data[i]["name"]=='总数'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#3366FF"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='致命'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF0000"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='严重'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF6600"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='一般'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FFCC00"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='提示'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#CCFF99"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='建议'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#99CC66"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='遗留'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF9900"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='回归失败'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF6666"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='重启'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF9966 "
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='未关闭'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF33CC"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='待处理'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF9933"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='已关闭'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#999999"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='卡死'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#990000"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='挂起'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FFCCCC"
                                                }
                                            }
                                        }
                                    }
                                }
                                var options = []
                                for (var i in res.data.data.versions){
                                    options.push(
                                        {
                                            "value":res.data.data.versions[i],
                                            "label":res.data.data.versions[i]
                                        }
                                    )
                                }
                                 var infodist={}
                                for(var i in data_info){
                                    for (var j in data_info[i]){
                                        if (infodist[j] == null){
                                            infodist[j]=data_info[i][j]
                                        }
                                        else{
                                            if(infodist[j]<data_info[i][j]){
                                                infodist[j]=data_info[i][j]
                                            }
                                        }
                                    }
                                }
                                this.kpidata=infodist



                                this.Project_analysis_options=options
                                this.Project_analysis_Data_2.series=series_data
                                this.Project_status_value_data=this.Project_status_value
                                this.average = res.data.data.average
                                project_fx.setOption(this.Project_analysis_Data_2,true)
                                console.log(this.Project_analysis_Data_2);
                                setTimeout(() => {
                                    this.loading_report=false
                                }, 200);
                    //    this.Project_analysis_Data.dataset.dimensions=[]
                    //    this.Project_analysis_Data.dataset.source=[]
                    //     var source = []
                    //     var dic = {}
                    //     var series=[]
                    //     var num = 1
                    //     var dimensions=['product']
                    //     var kpi={
                    //                 "BUG总数":0,
                                
                    //                     "遗留BUG数":0,
                                
                    //                     "BUG回归失败":0,
                                    
                    //                     "BUG重启":0,
                                    
                    //                     "未关闭":0,
                                    
                    //                     "待处理":0,
                                    
                    //                     "待回归":0,
                                
                    //                     "已关闭":0,
                                
                    //                     "卡死":0,
                                    
                    //                     "挂起":0,
                    //                 }
                    //     var data = res.data.data.echarts
                    //     for(var i in data){
                            
                    //         dic["product"]=i
                    //         for(var j in data[i]){
                    //         if (num==1){
                    //                 dimensions.push(j)
                    //                  series.push(
                    //                     { type: 'bar',barWidth : 20 ,
                    //                          label: {
                    //                         show: true,
                    //                         position: 'top'
                    //                                     }, 
                    //                     }
                    //                 )
                    //         }
                    //             dic[j]=data[i][j]
                               
                    //             if (dic[j] > kpi[j]) {
                    //                 kpi[j]=data[i][j]
                    //             }
                    //         } 
                            
                    //         source.push(dic)
                    //         num = 0
                    //         dic={}
                    //     }
                        
                    //     // for(var i in source){
                    //     //     for(var j in sourceproject_fx[i]){
                    //     //        for (var data in this.kpidata){
                    //     //         if(this.kpidata[data][j])
                    //     //        }
                    //     //     }
                    //     // }
                        
                    //     console.log(source);
                    //     this.kpidata=kpi
                    //     this.Project_analysis_Data.dataset.dimensions = dimensions
                    //     this.Project_analysis_Data.dataset.source = source
                    //     this.Project_analysis_Data.series=series
                    //     this.average = res.data.data.average
                       
                        
                    //         project_fx.setOption(this.Project_analysis_Data,true)
                    //         setTimeout(() => {
                    //             this.loading_report=false
                    //         }, 200);
                            
                    })
            }
            this.yjconfig()
            setTimeout(() => {
                this.warning_chick()
            }, 200);
        },
        Project_analysis_change(val){

            if (val==false || this.Project_analysis_value_data.indexOf(val)!=-1){
                this.loading_report=true
                
                // this.Project_analysis_Data.dataset.source=[]
                axios({
                    url: '/api/v1/BugKPI/',
                    method:'get',
                    params:{
                            "project":this.value,
                            "versions":JSON.stringify(this.Project_analysis_value),
                            "status":JSON.stringify(this.Project_status_value)
                        }
                    })
                    .then(res => { 
                         var data_name=[]
                                for (var i in res.data.data.echarts){
                                    data_name.push(
                                        i
                                    )
                                }
                                this.Project_analysis_Data_2.xAxis[0]["data"]=data_name
                                var data_info = res.data.data.echarts
                                var data = {}
                                for (var i in data_info){
                                    for(var j in data_info[i]){
                                       data[j]=[]
                                    }
                                    break
                                }
                                
                                for (var i in data_info){
                                    for(var j in data_info[i]){
                                       for (var t in data){
                                        if (j==t){
                                            data[t].push(
                                                data_info[i][j]
                                            )
                                            break
                                        }
                                       }
                                    }
                                }
                                var series_data = []
                                for (var i in data){
                                        var lis = {}
                                        lis["name"]= i,
                                        lis["type"]='bar',
                                        lis["barWidth"]="20",
                                        
                                        lis["emphasis"]={
                                            focue:"series"
                                        },
                                         lis["label"]={
                                            show:true,
                                        },
                                        lis["data"]=data[i]
                                    if(i=="致命"||i=="严重"||i=="一般"||i=="提示"||i=="建议"){
                                        lis["stack"] = "st",
                                        lis["barWidth"]="15"
                                        }
                                    else{
                                        lis["barWidth"]="25"
                                    }
                                    series_data.push(lis)
                                   
                                }
                                for(var i in series_data){
                                    for(var j in series_data[i]){
                                        if(series_data[i]["name"]=='总数'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#3366FF"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='致命'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF0000"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='严重'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF6600"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='一般'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FFCC00"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='提示'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#CCFF99"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='建议'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#99CC66"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='遗留'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF9900"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='回归失败'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF6666"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='重启'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF9966 "
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='未关闭'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF33CC"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='待处理'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF9933"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='已关闭'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#999999"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='卡死'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#990000"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='挂起'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FFCCCC"
                                                }
                                            }
                                        }
                                    }
                                }


                                 var infodist={}
                                for(var i in data_info){
                                    for (var j in data_info[i]){
                                        if (infodist[j] == null){
                                            infodist[j]=data_info[i][j]
                                        }
                                        else{
                                            if(infodist[j]<data_info[i][j]){
                                                infodist[j]=data_info[i][j]
                                            }
                                        }
                                    }
                                }
                                this.kpidata=infodist
                                this.Project_analysis_Data_2.series=series_data
                                this.average = res.data.data.average
                                this.Project_analysis_value_data = this.Project_analysis_value
                                project_fx.setOption(this.Project_analysis_Data_2,true)
                                console.log(this.Project_analysis_Data_2);
                                setTimeout(() => {
                                    this.loading_report=false
                                }, 200);
                     
                //         var source = []
                //         var dic = {}
                //         var num = 1
                //         var kpi = {
                // "BUG总数":0,
               
                //     "遗留BUG数":0,
               
                //     "BUG回归失败":0,
                
                //     "BUG重启":0,
                
                //     "未关闭":0,
                 
                //     "待处理":0,
                
                //     "待回归":0,
               
                //     "已关闭":0,
               
                //     "卡死":0,
                
                //     "挂起":0,
                // }
                //         var dimensions=['product']
                //         var data = res.data.data.echarts
                //         var series=[]
                //         for(var i in data){
                            
                //             dic["product"]=i
                //             for(var j in data[i]){
                //             if (num==1){
                //                     series.push(
                //                         { type: 'bar',barWidth : 20,
                //                              label: {
                //                             show: true,
                //                             position: 'top'
                //                                         }, 
                //                         }
                //                     )
                //                     dimensions.push(j)
                //             }
                //                 dic[j]=data[i][j]
                //                 if (dic[j] > kpi[j]) {
                //                     kpi[j]=data[i][j]
                //                 }
                //             } 
                            
                //             source.push(dic)
                //             num = 0
                //             dic={}
                //         }
                //         this.kpidata=kpi
                //         this.Project_analysis_Data.dataset.dimensions = dimensions
                //         this.Project_analysis_Data.series=series
                //         this.Project_analysis_Data.dataset.source = source
                //         this.Project_analysis_value_data = this.Project_analysis_value
                //         this.average = res.data.data.average
                        
                //             project_fx.setOption(this.Project_analysis_Data,true)
                //             setTimeout(() => {
                //                 this.loading_report=false
                //             }, 200);
                            
                    })
            }
            this.yjconfig()
            setTimeout(() => {
                this.warning_chick()
            }, 200);
        },
        show_rich_text(){
            if (this.data_set_show_1 == false){
                this.htmlshow = false
                this.data_set_show_1 = true
            }
            else{
                this.htmlshow = false
                this.data_set_show_1 = false
            }
        },
        change_table(){
            if (this.htmlshow == false){
                this.htmlshow = true
                this.data_set_show_1 = false
            }
            else{
                this.htmlshow = false
                this.data_set_show_1 = true
            }
        //    if (this.data_set_show_1 == true){
        //      if (this.htmlshow == false){
        //         this.htmlshow = true
        //         this.data_set_show_1 = false
        //     }
            
        //    }
        //    else{
        //      if (this.htmlshow == true){
        //         this.htmlshow = false
        //         this.data_set_show_1 = true
        //     }
          
        //    }
        },
        membutton(){
            console.log(this.memvalue);
        },
        peojectmenu(){
            console.log(this.value);
            if (this.code == "10250"){
                this.query()
                this.loading=true

            }
        },
        membermenu(val){
            
            if (val == false){
                
                 if (this.code == "10250"){
               
                    this.query()
                    this.loading=true
               
                
                
            }
            }
        },
        stimemenu(){
             if (this.code == "10250"){
                this.query()
                this.loading=true
            }
        },
        etimemenu(){
             if (this.code == "10250"){
                this.query()
                this.loading=true
            }
        },
        mem_choice(val){
            var flag = 1

            // console.log(val,"0");
            if (val.indexOf("all") != -1 && this.member_choice_list.indexOf("all") == -1){
                var lis = []
                for(var i in this.memoptions){
                
                    if (this.memoptions[i]["label"] == "在职人员"  || this.memoptions[i]["label"] == "离职人员"){
                        for (var i in this.memoptions[i]["value"]){
                            console.log(this.memoptions[i]["value"]);
                            console.log(this.memoptions[i]["value"][i]);
                            // lis.push(
                            //     this.memoptions[i]["value"][i]
                            // )
                        }
                    }
                    lis.push(
                        this.memoptions[i]["value"]
                    )
                    // lis.push(
                    //     this.memoptions[i]["value"]
                    // )
                }
                this.memvalue = lis
                this.member_choice_list = lis
                console.log(this.memvalue,"mem_choice,memvalue");
              
            }
            // else if (val.indexOf("all") == -1 && this.member_choice_list.indexOf("all") != -1){
            //     this.memvalue=[]
            //     this.member_choice_list = []
               
            // }
           
            // else if (this.memvalue.length != this.memoptions.length){
            //     this.memvalue = val
            //     if (this.memvalue.indexOf("all") != -1){
            //         this.memvalue.splice(this.memvalue.indexOf("all"),1)
            //         this.member_choice_list.splice(this.member_choice_list.indexOf("all"),1)
            //     }
            // }
            // if (this.memvalue.length+1 >= this.memoptions.length){
            //     var lis = []
            //     for(var i in this.memoptions){
            //         lis.push(
            //             this.memoptions[i]["value"]
            //         )
            //     }
            //     this.memvalue = lis
            //     this.member_choice_list = lis
            // }
       
            //     // this.memvalue = val
            //     console.log(this.memvalue);
            //     if (this.memvalue.indexOf("all") != -1){
            //         this.memvalue.splice(this.memvalue.indexOf("all"),1)
            //         this.member_choice_list.splice(this.member_choice_list.indexOf("all"),1)
            //     }
            //     // this.memvalue.splice(this.memvalue.indexOf("all"),1)
            //     // this.member_choice_list.splice(this.member_choice_list.indexOf("all"),1)
            //     // if (flag==1){
            //     //     this.member_choice_list.splice(this.member_choice_list.indexOf("all"),1)
            //     //     flag = 0
            //     // }
            //     console.log("33333333333333333333");
            //     // this.memvalue = this.val
            //     // this.member_choice_list = this.val
            // }
            // else if(this.memvalue.length + 1 == this.memoptions.length ){
            //     var lis = []
            //     for(var i in this.memoptions){
            //         lis.push(
            //             this.memoptions[i]["value"]
            //         )
            //     }
            //     this.memvalue = lis
            //     this.member_choice_list = lis
            //     flag = 1
            //     console.log("4444444444444444444444");
            // }
            // console.log(this.memvalue,"1");
            // console.log(this.member_choice_list,"2");
            
        },
        mem(){
            var group = this.$store.state.user_info["group"]
            if (group == '游客组'){
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
                            member_list[0]["children"][0]["children"].push(
                                {
                                    value:i,
                                    label:i
                                }
                            )
                        }
                        else if(info['group'] == '深圳正职' && info['status'] == "在职"){
                            member_list[0]["children"][1]["children"].push(
                                {
                                    value:i,
                                    label:i
                                }
                            )
                        }else if(info['group'] == '深圳外包' && info['status'] == "在职"){
                            member_list[0]["children"][2]["children"].push(
                                {
                                    value:i,
                                    label:i
                                }
                            )
                        }
                        else if(info['group'] == '上海外包' && info['status'] == "离职"){
                            member_list[1]["children"][0]["children"].push(
                                {
                                    value:i,
                                    label:i
                                }
                            )
                        }
                        else if(info['group'] == '深圳正职' && info['status'] == "离职"){
                            member_list[1]["children"][1]["children"].push(
                                {
                                    value:i,
                                    label:i
                                }
                            )
                        }
                        else if(info['group'] == '深圳外包' && info['status'] == "离职"){
                            member_list[1]["children"][2]["children"].push(
                                {
                                    value:i,
                                    label:i
                                }
                            )
                        }
                        
                        }
                         console.log(member_list);
                    this.memoptions = member_list
                })
            }
            else{
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
                    this.memoptions = member_list

                })
                }
            
        },
        
        // 发行项目下拉列表
        optionspull(){
            // var menu = [1,2,3,4,5]
            axios({
            url: '/api/v1/sidebar/',
            method:'get',
            params:{
                data_type:"fx",
                }
            })
            .then(res => {
                let lis=[{value:"all",
                        label:"所有项目"},
                        ]
                var menu = []
                for (var i=0;i<res.data.data.projects.length;i++){
                    lis.push({"value":res.data.data.projects[i],"label":res.data.data.projects[i]})
                    menu.push(res.data.data.projects[i])
                    }
                this.menulist=menu
                this.options=lis
                // this.options = [{"value": "银魂", "label": "银魂"}]
                // console.log(this.$data.options);
            })
               
        },
        // 查询按钮
        test(a){
            console.log(a);
        },
        query(){
            this.loading=true
            this.loading_report=true
            let starttime = moment(this.timevalue1,"yyyy-MM-DD").format().split('T')[0]
            let endtime = moment(this.timevalue2,"yyyy-MM-DD").format().split('T')[0]
            this.timevalue1 = starttime
            this.timevalue2 = endtime
            var lis = []
            
            for (var i in this.memvalue){
             
                lis.push(this.memvalue[i][2])
               
            }
            var namestr = lis.toString()
            namestr = namestr.replace(/,/g,"&")
            this.memvalues = namestr
            // if(lis.indexOf("all") != -1){
            //     // lis.splice(lis.indexOf("all"),1)
            //     // this.memvalues = lis.toString()
            //     lis.splice(lis.indexOf("all"),1)
            //     var namestr = lis.toString()
            //     namestr = namestr.replace(/,/g,"&")
            //     this.memvalues = namestr
               
            // }
            
            // else{
            //     var namestr = lis.toString()
            //     namestr = namestr.replace(/,/g,"&")
                
            //     // var namestr = ""
            //     // for(var name in lis){
            //     //    namestr = lis[name] +"&"+namestr
            //     // }
            //     this.memvalues = namestr
            // }
            console.log(this.memvalues,"232131");
            // if (this.$store.state.loading_1 == 1){
            //     setTimeout(() => {
            //         console.log("loading1");
            //         this.loading=true
            //         this.$store.state.loading_1 = 2
            //     }, 500);
            // }
            // else{
            //     this.loading=true
            //     console.log("loading2");
            // }
            
            axios({
            url: '/api/v1/BugStatistics/',
            method:'get',
            params:{
                project:this.value,
                start:this.timevalue1,
                end:this.timevalue2,
                _type:"fx",
                member:this.memvalues,
                iteration:"所有迭代"
                }
            })
            .then(res => {
                
                if (res.data.code == 10250 ){
                    this.show=true
                    this.show2=false
                    
                    this.code = res.data.code
                    // this.queryinfo=res.data.data
                    // this.queryinfocode=res.data.code
                    var reqnum = {"数量":[res.data.data.BUG总数.sum,res.data.data.新增BUG数.sum,res.data.data.遗留BUG数.sum,res.data.data.关闭BUG数.sum,res.data.data.BUG回归失败.sum,res.data.data.BUG重启.sum]}
                    var charobjname = []
                    for (var i in res.data.data){
                        charobjname.push(i)
                        
                    }
                    this.allbugnumber=res.data.data.BUG总数
                    this.addbugnumber=res.data.data.新增BUG数
                    this.staybugnumber=res.data.data.遗留BUG数
                    this.closebugnumber=res.data.data.关闭BUG数
                    this.failbugnumber=res.data.data.BUG回归失败
                    this.restartbugnumber=res.data.data.BUG重启
                    // this.bugcard2.reg = this.queryinfo.bug_statistics_dict.BUG回归失败
                    // this.bugcard2.res = this.queryinfo.bug_statistics_dict.BUG重启
                    // bug统计饼图 每日bug遗留折线图
                    charObj = echarts.getInstanceByDom(document.getElementById("BUGStatistics"))
                    Legacybugmychart = echarts.getInstanceByDom(document.getElementById("Legacybug"))
                    // dayaddbug = echarts.getInstanceByDom(document.getElementById("addbug"))
                    if (charObj == null) { // 如果不存在，就进行初始化
                        charObj = echarts.init(document.getElementById("BUGStatistics"));
                    }
                    if (Legacybugmychart == null) { // 如果不存在，就进行初始化
                        Legacybugmychart = echarts.init(document.getElementById("Legacybug"));
                    }
                    if(this.allshow==true){
                        project_fx = echarts.getInstanceByDom(document.getElementById("Projectanalysis"))
                        if (project_fx == null) { // 如果不存在，就进行初始化
                            project_fx = echarts.init(document.getElementById("Projectanalysis"));
                            // project_fx = echarts.init(this.$refs.chartStock);
                            project_fx.on('click',(params)=>{
                                this.data_analysis_dialog=true
                                this.kpitablepage=1
                                this.kpitabletotal=1
                                this.kpitablename=params.name
                                this.kpitabletype=params.seriesName
                                 axios({
                                    url: '/api/v1/BugKPITable/',
                                    method:'get',
                                    params:{
                                        project:this.value,
                                        version:params.name,
                                        project_type:"fx",
                                        bug_type:params.seriesName,
                                        page:this.kpitablepage,
                                        page_size:10,
                                        search:""
                                            }
                                    })
                                    .then(res => {
                                        this.kpitabletotal=res.data.data.page_sum
                                        this.kpitabledata=res.data.data.page_data
                                        this.data_analysis_dialog=true
                                        console.log(this.kpitabledata);
                                    })
                                   
                                
                                
                               
                                })
                        }
                          
                           this.loading_report=true,
                           this.Project_analysis_value="",
                            this.Project_status_value="",
                            this.Project_analysis_value_data=[],
                // this.Project_analysis_Data.dataset.source=[]
                        axios({
                            url: '/api/v1/BugKPI/',
                            method:'get',
                            params:{
                                    "project":this.value,
                                    "versions":JSON.stringify(this.Project_analysis_value),
                                    "status":JSON.stringify(this.Project_status_value)
                                }
                            })
                            .then(res => { 
                                var data_name=[]
                                for (var i in res.data.data.echarts){
                                    data_name.push(
                                        i
                                    )
                                }
                                this.Project_analysis_Data_2.xAxis[0]["data"]=data_name
                                var data_info = res.data.data.echarts
                                var data = {}
                                for (var i in data_info){
                                    for(var j in data_info[i]){
                                       data[j]=[]
                                    }
                                    break
                                }
                                
                                for (var i in data_info){
                                    for(var j in data_info[i]){
                                       for (var t in data){
                                        if (j==t){
                                            data[t].push(
                                                data_info[i][j]
                                            )
                                            break
                                        }
                                       }
                                    }
                                }
                                var series_data = []
                                for (var i in data){
                                        var lis = {}
                                        lis["name"]= i,
                                        lis["type"]='bar',
                                        
                                        
                                        lis["emphasis"]={
                                            focue:"series"
                                        },
                                         lis["label"]={
                                            show:true,
                                        },
                                        lis["data"]=data[i]
                                    if(i=="致命"||i=="严重"||i=="一般"||i=="提示"||i=="建议"){
                                        lis["stack"] = "st",
                                        lis["barWidth"]="15"
                                        }
                                    else{
                                        lis["barWidth"]="25"
                                    }
                                    series_data.push(lis)
                                   
                                }

                                for(var i in series_data){
                                    for(var j in series_data[i]){
                                        if(series_data[i]["name"]=='总数'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#3366FF"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='致命'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF0000"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='严重'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF6600"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='一般'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FFCC00"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='提示'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#CCFF99"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='建议'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#99CC66"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='遗留'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF9900"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='回归失败'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF6666"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='重启'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF9966 "
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='未关闭'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF33CC"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='待处理'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FF9933"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='已关闭'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#999999"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='卡死'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#990000"
                                                }
                                            }
                                        }
                                        else if(series_data[i]["name"]=='挂起'){
                                            series_data[i]['itemStyle']={
                                                normal:{
                                                    color:"#FFCCCC"
                                                }
                                            }
                                        }
                                    }
                                }
                                console.log(2222,series_data);
                                var options = []
                                for (var i in res.data.data.versions){
                                    options.push(
                                        {
                                            "value":res.data.data.versions[i],
                                            "label":res.data.data.versions[i]
                                        }
                                    )
                                }
                                var infodist={}
                                for(var i in data_info){
                                    for (var j in data_info[i]){
                                        if (infodist[j] == null){
                                            infodist[j]=data_info[i][j]
                                        }
                                        else{
                                            if(infodist[j]<data_info[i][j]){
                                                infodist[j]=data_info[i][j]
                                            }
                                        }
                                    }
                                }
                                this.kpidata=infodist
                                this.Project_analysis_options=options
                                this.average = res.data.data.average
                                this.Project_analysis_Data_2.series=series_data
                                project_fx.setOption(this.Project_analysis_Data_2,true)
                                console.log(this.Project_analysis_Data_2);
                                setTimeout(() => {
                                    this.loading_report=false
                                }, 200);
                                this.yjconfig()
                                setTimeout(() => {
                                    this.warning_chick()
                                }, 1000);
                                // for (var i in data_info){
                                //     series.push(
                                //         {
                                //             name:"",
                                //             type:"",
                                //             emphasis: {
                                //                 focus: 'series'
                                //             },
                                //             data:[]
                                //         }
                                //     )
                                // }
                                // for (var i in data_info){
                                //      for(var j in data_info[i]){
                                //         if (j.index("BUG")!= -1){
                                            
                                //         }
                                //     }
                                // }
                //                 var options = []
                //                 var source = []
                //                 var series=[]
                //                 var dic = {}
                //                 var kpi = {
                // "BUG总数":0,
               
                //     "遗留BUG数":0,
               
                //     "BUG回归失败":0,
                
                //     "BUG重启":0,
                
                //     "未关闭":0,
                 
                //     "待处理":0,
                
                //     "待回归":0,
               
                //     "已关闭":0,
               
                //     "卡死":0,
                
                //     "挂起":0,
                // }
                //                 var num = 1
                //                 var dimensions=['product']
                //                 var data = res.data.data.echarts
                //                 for(var i in data){
                                    
                //                     dic["product"]=i
                //                     for(var j in data[i]){
                //                     if (num==1){
                //                             dimensions.push(j)
                //                              series.push(
                //                         { type: 'bar',barWidth : 20,
                //                         label: {
                //                             show: true,
                //                             position: 'top'
                //                                         }, 
                //                                                 }
                //                     )
                //                     }
                //                         dic[j]=data[i][j]
                //                         if (dic[j] > kpi[j]) {
                //                         kpi[j]=data[i][j]
                //                 }
                //                     } 
                                    
                //                     source.push(dic)
                //                     num = 0
                //                     dic={}
                //                 }
                                
                //                 for (var i in res.data.data.versions){
                //                     options.push(
                //                         {
                //                             "value":res.data.data.versions[i],
                //                             "label":res.data.data.versions[i]
                //                         }
                //                     )
                //                 }
                //                 this.kpidata=kpi
                //                 this.Project_analysis_Data.dataset.dimensions = dimensions
                //                 this.Project_analysis_options=options
                //                 this.Project_analysis_Data.series=series
                //                 this.Project_analysis_Data.dataset.source = source
                //                 this.average = res.data.data.average
                               

                                
                //                     project_fx.setOption(this.Project_analysis_Data,true)
                //                     setTimeout(() => {
                //                         this.loading_report=false
                //                     }, 200);
                                    
                            })
                                
                        
                        
                    }
                
                    // if (dayaddbug == null) { // 如果不存在，就进行初始化
                    //     dayaddbug = echarts.init(document.getElementById("addbug"));
                 axios({
                        url: '/api/v1/Echarts/',
                        method:'get',
                        params:{
                            title:"BUG情况",
                            echarts_type:'bar',
                            series_option:{"smooth": "True", "seriesLayoutBy": "row","barWidth" : 60},
                            series_data:reqnum,
                            xAxis:JSON.stringify(charobjname),
                            yAxis:"个",
                            color:JSON.stringify(['#409EFF90', '#F2CF61', '#318C80', "#51D9B5", '#A6E582'])
                            }
                        })
                        .then(res => {
                            // setTimeout(() => {
                            //     this.loading=false
                            // }, 1000);
                            charObj.setOption(res.data.data,true);
                            setTimeout(() => {
                                this.loading=false
                            }, 500);
                        })
                   
                    axios({
                        url: '/api/v1/BugStatisticsDay/',
                        method:'get',
                        params:{
                            project:this.value,
                            start:this.timevalue1,
                            end:this.timevalue2,
                            _type:"fx",
                            member:this.memvalues,
                            iteration:"所有迭代"
                            }
                        }).then(res => {
                            console.log("sdasdasdasdasd",res);
                            this.queryinfo=res.data.data
                            Legacybugmychart.setOption(this.queryinfo.bug_day_chart,true);
                             setTimeout(() => {
                                 this.loading=false
                             }, 500);
                        })
                    
                    // dayaddbug.setOption(this.queryinfo.bug_day_level_chart);
                    // setTimeout(() => {
                    //     this.loading=false
                    // }, 1000);
                    Bugm = echarts.getInstanceByDom(document.getElementById("Bugman"))
                    if (Bugm == null) { // 如果不存在，就进行初始化
                        Bugm = echarts.init(document.getElementById("Bugman"));
                    }
                    this.currentPage=1 
                    // this.$store.state.queryinfocode=this.queryinfocode
                    var div = document.getElementById('pdf-demo')
                    div.setAttribute("class", "pdf-demoo")
                }
            })
            var bug_member = []
           
            
            for (var member in this.memvalue){
                bug_member.push(this.memvalue[member][2])
            }
            // if (bug_member.indexOf("all") != -1){
            //     bug_member.splice(bug_member())
            // }
           
            axios({
                        url: '/api/v1/AddedBugMember/',
                        method:'get',
                        params:{
                            project:this.value,
                            start:this.timevalue1,
                            end:this.timevalue2,
                            member:JSON.stringify(bug_member)
                            }
                        })
                        .then(res => {
                            
                            // this.bugmanname = res.data.data.member_list
                            var bugmandata = {}
                            if (this.value == "all"){
                                for (var i in res.data.data.added_data){
                                    if (i.indexOf("all") == -1){
                                        bugmandata[i] = res.data.data.added_data[i]
                                    }
                                }
                                this.bugmanname = res.data.data.member_list
                            }
                            else{
                                var name = ""
                                var data =[]
                                for (var i in res.data.data.added_data){
                                    if (i.indexOf("所有项目BUG提交数") == -1){
                                        // bugmandata[i] = res.data.data.added_data[i]
                                        data.push(res.data.data.added_data[i])
                                        name = i
                                    }
                                }
                                var mem = res.data.data.member_list
                                var bug = data[0]
                                for (var i=0;i<bug.length;i++){
                                    for(var j=0;j<bug.length-i-1;j++){
                                        if (bug[j]<bug[j+1]){
                                            var data1 = bug[j]
                                            var data2 = bug[j+1]
                                            
                                            bug[j] = data2
                                            bug[j+1]=data1
                                           
                                            var data3 = mem[j]
                                            var data4 = mem[j+1]
                                          
                                            mem[j] = data4
                                            mem[j+1] = data3 
                                          
                                        }
                                    }
                                }
                                this.bugmanname = mem
                                bugmandata= {[name]:bug}
                               
                            }



                    
                            // var bugman_list = []
                            // var bugnumber_list = []
                            // var bug = []
                            // for (var n in bugmandata["所有项目BUG提交数"]){
                            //     var bugnum = bugmandata["所有项目BUG提交数"][n]
                            //     bugman_list.push(
                            //         {[n]:bugnum}
                            //     )
                            //     bugnumber_list.push(
                            //         {
                            //             [n]:res.data.data.member_list[n]
                            //         }
                            //     )
                            //     bug.push(
                            //         {[bugnum]:res.data.data.member_list[n]}
                            //     )
                                
                            // }
                         
                            // var arr = bugmandata["所有项目BUG提交数"]
                            // function sequence(a,b){
                            //     if (a<b) {
                            //     return 1;
                            //     }else if(a>b){
                            //     return -1
                            //     }else{
                            //     return 0;
                            //     }
                            // }
                            // var firnumber = arr.sort(sequence)
                       
                            // var number_name = []
                            // for (var i in firnumber){
                            //     for (var n=0;n<bug.length;n++){
                            //         // console.log(bug[n]);
                            //        if (firnumber[i] in bug[n]){
                            //         //    console.log(n);
                            //         //    console.log(bug[n][firnumber[i]]);
                            //            number_name.push(bug[n][firnumber[i]])
                            //            bug.splice(n,1)
                            //            continue
                            //        }
                            //     }
                               
                            // }
                            // this.bugmanname = number_name
                            // console.log(number_name,"123123");






                            // for (var i in firnumber){
                            //     console.log(firnumber[i]);
                            //     console.log(bug[i]);
                                
                            //     for (var n in bug[i]){
                            //         console.log(bug[i][n],"22");
                            //     }
                            //     // number_naaxios({me.push(
                            //     //     bug[i][firnumber[i]]
                            //     // )
                            // }
                            // console.log(number_name);







                            this.bugmannum = bugmandata
                            console.log( bugmandata,"23213");
                      
                            axios({
                                url: '/api/v1/Echarts/',
                                method:'get',
                                params:{
                                    title:this.value+"人员Bug数量",
                                    echarts_type:'bar',
                                    series_option:{"smooth": "True", "seriesLayoutBy": "row","barWidth" : 40},
                                    series_data:this.bugmannum,
                                    xAxis:JSON.stringify(this.bugmanname),
                                    yAxis:"个",
                                    color:JSON.stringify(['#409EFF90', '#409EFF', '#318C80', "#51D9B5", '#A6E582'])
                                    }
                                })
                                .then(res => {
                                        console.log(res.data.data,"9090");
                                        var dataa = res.data.data
                                        Bugm.setOption(dataa,true) 
                                         setTimeout(() => {
                                            this.loading=false
                                        }, 500);
                                    })
                            
                        })
            
            if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.tableData=res.data.data.page_data
                    this.total=res.data.data.search_sum
                    this.bugdetails=res.data.data.search_sum
                })
            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                 hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.tableData=res.data.data.page_data
                    this.total=res.data.data.search_sum
                    this.bugdetails=res.data.data.search_sum
                })
            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.tableData=res.data.data.page_data
                    this.total=res.data.data.search_sum
                    this.bugdetails=res.data.data.search_sum
                })
            }  
            else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                 hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.tableData=res.data.data.page_data
                    this.total=res.data.data.search_sum
                    this.bugdetails=res.data.data.search_sum
                })
            }    
           
            // 获取TOP5BUG统计数据
            axios({
            url: '/api/v1/BugModuleTop/',
            method:'get',
            params:{
                project:this.value,
                start:this.timevalue1,
                end:this.timevalue2,
                member:this.memvalues,
                data_type:"fx",
                }
            })
            .then(res => {
                let statisticslist=[]
                for(var i=0;i<5;i++){
                    for (var x in res.data.data[i]){
                    statisticslist.push({"count":i+1,"key":x,"value":res.data.data[i][x]})
                    }
                }
                this.tableDataa=statisticslist               
            })
            // 获取S/A级别bugTOP5
            axios({
            url: '/api/v1/BugModuleTop/',
            method:'get',
            params:{
                project:this.value,
                start:this.timevalue1,
                end:this.timevalue2,
                data_type:"fx",
                member:this.memvalues,
                level:"yes"
                }
            })
            .then(res => {
                let statisticslist=[]
                for(var i=0;i<5;i++){
                    for (var x in res.data.data[i]){
                    statisticslist.push({"count":i+1,"key":x,"value":res.data.data[i][x]})
                    }
                }
                this.tableDataaa=statisticslist               
            })
             // 获取未关闭bugTOP5
            axios({
            url: '/api/v1/BugModuleTop/',
            method:'get',
            params:{
                project:this.value,
                start:this.timevalue1,
                end:this.timevalue2,
                data_type:"fx",
                member:this.memvalues,
                not_close:"yes"
                }
            })
            .then(res => {
                let statisticslist=[]
                for(var i=0;i<5;i++){
                    for (var x in res.data.data[i]){
                    statisticslist.push({"count":i+1,"key":x,"value":res.data.data[i][x]})
                    }
                }
                this.tableDataaaa=statisticslist               
            })
            
            // 获取BUG追踪数据
            axios({
            url: '/api/v1/BugStatisticalDistribution/',
            method:'get',
            params:{
                data_type:"fx",
                start:this.timevalue1,
                end:this.timevalue2,
                project:this.value,
                member:this.memvalues
                }
            })
            .then(res => {
                let lis = []
                let levellis = []
                for (var i in res.data.data){
                    if(i == "SUM"){
                        let data = res.data.data[i]
                        data["rank"] = "合计"
                        lis.push(data) 
                    }
                    else{
                        let data = res.data.data[i]
                        data["rank"] = i
                        lis.push(data) 
                    }
                    levellis.push(i)
                }
                this.bugcard.S = res.data.data.致命
                this.bugcard.A = res.data.data.严重
                this.bugcard.B = res.data.data.一般
                this.bugcard.C = res.data.data.提示
                this.bugcard.D = res.data.data.建议
               
                this.trackbug=lis
                this.trackbuglist=levellis
            })
           
        },
        // 选择每页显示多少条数据
        changecard(){
            this.page=1
            this.currentPage=1
            if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2,severity:this.bugnumberrank,status:["新","接受/处理","已解决","已验证","重新打开","已关闭","已拒绝","挂起"], data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this.total=res.data.data.search_sum
                    this.tableData=res.data.data.page_data
                    // this.currentPage=1 
            })}
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2,severity:this.bugnumberrank,status:["新","接受/处理","已解决","已验证","重新打开","已关闭","已拒绝","挂起"], data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this.total=res.data.data.search_sum
                    this.tableData=res.data.data.page_data
                    // this.currentPage=1 
            })}
            else if(this.value != "all" && this.memvalues == "all"){
                 let project_list = [this.value]
                    hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2,severity:this.bugnumberrank,status:["新","接受/处理","已解决","已验证","重新打开","已关闭","已拒绝","挂起"], data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this.total=res.data.data.search_sum
                    this.tableData=res.data.data.page_data
                    // this.currentPage=1 
            })
            }
            else if(this.value != "all" && this.memvalues != "all"){
                 let project_list = [this.value]
                    hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2,severity:this.bugnumberrank,status:["新","接受/处理","已解决","已验证","重新打开","已关闭","已拒绝","挂起"], data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this.total=res.data.data.search_sum
                    this.tableData=res.data.data.page_data
                    // this.currentPage=1 
            })
            }
        },
        // 未关闭BUG追踪选择每页显示多少条数据
        notclosedchangecard(){
            this.notclosedpage=1
            this.notclosedcurrentPage=1
             if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.notclosedrank,status:["新","接受/处理","已解决","已验证","重新打开","已拒绝"],data_type:"fx",projects: project_list,page:this.notclosedpage,page_size:this.notclosedpage_size,search:this.notclosedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.notcloseddata=res.data.data.page_data
                            this.notclosedtotal=res.data.data.search_sum
                            
                            
                        }
                    })
            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                 hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.notclosedrank,status:["新","接受/处理","已解决","已验证","重新打开","已拒绝"],data_type:"fx",projects: project_list,page:this.notclosedpage,page_size:this.notclosedpage_size,search:this.notclosedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.notcloseddata=res.data.data.page_data
                            this.notclosedtotal=res.data.data.search_sum
                            
                            
                        }
                    })
            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.notclosedrank,status:["新","接受/处理","已解决","已验证","重新打开","已拒绝"],data_type:"fx",projects: project_list,page:this.notclosedpage,page_size:this.notclosedpage_size,search:this.notclosedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.notcloseddata=res.data.data.page_data
                            this.notclosedtotal=res.data.data.search_sum               
                        }
                    })
            }   
            else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                 hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.notclosedrank,status:["新","接受/处理","已解决","已验证","重新打开","已拒绝"],data_type:"fx",projects: project_list,page:this.notclosedpage,page_size:this.notclosedpage_size,search:this.notclosedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.notcloseddata=res.data.data.page_data
                            this.notclosedtotal=res.data.data.search_sum               
                        }
                    })
            }  
        },
        banmanshowbutton(){
            if(this.bugmanshow==true){
                this.bugmanshow=false
            }
            else{
                this.bugmanshow=true
                setTimeout(() => {
                    // setTimeout(() => {
                    //     this.loading=false
                    // }, 1000);
                     Bugm = echarts.getInstanceByDom(document.getElementById("Bugman"))
                    if (Bugm == null) { // 如果不存在，就进行初始化
                        Bugm = echarts.init(document.getElementById("Bugman"));
                        var bug_member = []
                        for (var member in this.memvalue){
                            bug_member.push(this.memvalue[member][2])
                        }
                        axios({
                        url: '/api/v1/AddedBugMember/',
                        method:'get',
                        params:{
                            project:this.value,
                            start:this.timevalue1,
                            end:this.timevalue2,
                            member:JSON.stringify(bug_member)
                            }
                        })
                        .then(res => {
                            
                            var bugmandata = {}
                            if (this.value == "all"){
                                for (var i in res.data.data.added_data){
                                    if (i.indexOf("all") == -1){
                                        bugmandata[i] = res.data.data.added_data[i]
                                    }
                                }
                                this.bugmanname = res.data.data.member_list
                            }
                            else{
                                var name = ""
                                var data =[]
                                for (var i in res.data.data.added_data){
                                    if (i.indexOf("所有项目BUG提交数") == -1){
                                        // bugmandata[i] = res.data.data.added_data[i]
                                        data.push(res.data.data.added_data[i])
                                        name = i
                                    }
                                }
                                var mem = res.data.data.member_list
                                var bug = data[0]
                                for (var i=0;i<bug.length;i++){
                                    for(var j=0;j<bug.length-i-1;j++){
                                        if (bug[j]<bug[j+1]){
                                            var data1 = bug[j]
                                            var data2 = bug[j+1]
                                            
                                            bug[j] = data2
                                            bug[j+1]=data1
                                           
                                            var data3 = mem[j]
                                            var data4 = mem[j+1]
                                          
                                            mem[j] = data4
                                            mem[j+1] = data3 
                                          
                                        }
                                    }
                                }
                                this.bugmanname = mem
                                bugmandata= {[name]:bug}
                               
                            }
                            
                            this.bugmannum = bugmandata
                            // if (this.value=="all"){
                            //     let value ="所有项目"
                            //     this.countname = value
                            // }
                            // else{
                            //     this.countname = this.value
                            // }
                            axios({
                                url: '/api/v1/Echarts/',
                                method:'get',
                                params:{
                                     title:this.value+"人员Bug数量",
                                    echarts_type:'bar',
                                    series_option:{"smooth": "True", "seriesLayoutBy": "row", "barWidth" : 40},
                                    series_data:this.bugmannum,
                                    xAxis:JSON.stringify(this.bugmanname),
                                    yAxis:"个",
                                    color:JSON.stringify(['#409EFF90', '#409EFF', '#318C80', "#51D9B5", '#A6E582'])
                                    }
                                })
                                .then(res => {
                                        var dataa = res.data.data
                                        Bugm.setOption(dataa,true) 
                                        setTimeout(() => {
                                            this.loading=false
                                        }, 500);
                                    })
                            
                        })
                    }
                }, 1000);
              
            }
        },
        // 待处理BUG追踪选择每页显示多少条数据
        waitmanagechangecard(){
            this.waitmanagepage=1
            this.waitmanagecurrentPage=1
             if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.waitmanagerank,status:["新","接受/处理","重新打开"],data_type:"fx",projects: project_list,page:this.waitmanagepage,page_size:this.waitmanagepage_size,search:this.waitmanageinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.waitmanagedata=res.data.data.page_data
                            this.waitmanagetotal=res.data.data.search_sum
                            
                            
                        }
                    })
            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                 hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.waitmanagerank,status:["新","接受/处理","重新打开"],data_type:"fx",projects: project_list,page:this.waitmanagepage,page_size:this.waitmanagepage_size,search:this.waitmanageinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.waitmanagedata=res.data.data.page_data
                            this.waitmanagetotal=res.data.data.search_sum
                            
                            
                        }
                    })
            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.waitmanagerank,status:["新","接受/处理","重新打开"],data_type:"fx",projects: project_list,page:this.waitmanagepage,page_size:this.waitmanagepage_size,search:this.waitmanageinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.waitmanagedata=res.data.data.page_data
                            this.waitmanagetotal=res.data.data.search_sum
                            
                            
                        }
                    })
            }
            else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.waitmanagerank,status:["新","接受/处理","重新打开"],data_type:"fx",projects: project_list,page:this.waitmanagepage,page_size:this.waitmanagepage_size,search:this.waitmanageinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.waitmanagedata=res.data.data.page_data
                            this.waitmanagetotal=res.data.data.search_sum
                            
                            
                        }
                    })
            }    
        },
        // 待回归BUG追踪选择每页显示多少条数据
        waitreturnchangecard(){
            this.waitreturnpage=1
            this.waitreturncurrentPage=1
            if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                  hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.waitreturnrank,status:["已解决","已拒绝"],data_type:"fx",projects: project_list,page:this.waitreturnpage,page_size:this.waitreturnpage_size,search:this.waitreturninput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.waitreturndata=res.data.data.page_data
                            this.waitreturntotal=res.data.data.search_sum   
                        }
                    })
            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                  hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.waitreturnrank,status:["已解决","已拒绝"],data_type:"fx",projects: project_list,page:this.waitreturnpage,page_size:this.waitreturnpage_size,search:this.waitreturninput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.waitreturndata=res.data.data.page_data
                            this.waitreturntotal=res.data.data.search_sum   
                        }
                    })
            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.waitreturnrank,status:["已解决","已拒绝"],data_type:"fx",projects: project_list,page:this.waitreturnpage,page_size:this.waitreturnpage_size,search:this.waitreturninput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.waitreturndata=res.data.data.page_data
                            this.waitreturntotal=res.data.data.search_sum   
                        }
                    })
            }  
            else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                 hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.waitreturnrank,status:["已解决","已拒绝"],data_type:"fx",projects: project_list,page:this.waitreturnpage,page_size:this.waitreturnpage_size,search:this.waitreturninput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.waitreturndata=res.data.data.page_data
                            this.waitreturntotal=res.data.data.search_sum   
                        }
                    })
            }    
              
        },
         // 卡死BUG追踪选择每页显示多少条数据
        stuckchangecard(){
            this.stuckpage=1
            this.stuckcurrentPage=1

              if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                   hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.stuckrank,keywords:{"title":"卡死","name":"卡死"},data_type:"fx",projects: project_list,page:this.stuckpage,page_size:this.stuckpage_size,search:this.stuckinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.stuckdata=res.data.data.page_data
                            this.stucktotal=res.data.data.search_sum   
                        }
                    })
            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                   hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.stuckrank,keywords:{"title":"卡死","name":"卡死",reporter:this.memvalues},data_type:"fx",projects: project_list,page:this.stuckpage,page_size:this.stuckpage_size,search:this.stuckinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.stuckdata=res.data.data.page_data
                            this.stucktotal=res.data.data.search_sum   
                        }
                    })
            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                  hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.stuckrank,keywords:{"title":"卡死","name":"卡死"},data_type:"fx",projects: project_list,page:this.stuckpage,page_size:this.stuckpage_size,search:this.stuckinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.stuckdata=res.data.data.page_data
                            this.stucktotal=res.data.data.search_sum   
                        }
                    })
            } 
            else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                  hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.stuckrank,keywords:{"title":"卡死","name":"卡死",reporter:this.memvalues},data_type:"fx",projects: project_list,page:this.stuckpage,page_size:this.stuckpage_size,search:this.stuckinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.stuckdata=res.data.data.page_data
                            this.stucktotal=res.data.data.search_sum   
                        }
                    })
            }       
              
        },
        // 已关闭BUG追踪选择每页显示多少条数据
        closedchangecard(){
            this.closedpage=1
            this.closedcurrentPage=1
           
              if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                    hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.closedrank,status:["已关闭"],data_type:"fx",projects: project_list,page:this.closedpage,page_size:this.closedpage_size,search:this.closedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.closeddata=res.data.data.page_data
                            this.closedtotal=res.data.data.search_sum   
                        }
                    })
            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                    hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.closedrank,status:["已关闭"],data_type:"fx",projects: project_list,page:this.closedpage,page_size:this.closedpage_size,search:this.closedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.closeddata=res.data.data.page_data
                            this.closedtotal=res.data.data.search_sum   
                        }
                    })
            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                   hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.closedrank,status:["已关闭"],data_type:"fx",projects: project_list,page:this.closedpage,page_size:this.closedpage_size,search:this.closedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.closeddata=res.data.data.page_data
                            this.closedtotal=res.data.data.search_sum   
                        }
                    })
            }    
             else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                   hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.closedrank,status:["已关闭"],data_type:"fx",projects: project_list,page:this.closedpage,page_size:this.closedpage_size,search:this.closedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.closeddata=res.data.data.page_data
                            this.closedtotal=res.data.data.search_sum   
                        }
                    })
            }   
              
        },
        // 挂起BUG追踪选择每页显示多少条数据
        hangupchangecard(){
            this.hanguppage=1
            this.hangupcurrentPage=1
           
              if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                    hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.hanguprank,status:["挂起"],data_type:"fx",projects: project_list,page:this.hanguppage,page_size:this.hanguppage_size,search:this.hangupinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.hangupdata=res.data.data.page_data
                            this.hanguptotal=res.data.data.search_sum   
                        }
                    })
            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                    hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.hanguprank,status:["挂起"],data_type:"fx",projects: project_list,page:this.hanguppage,page_size:this.hanguppage_size,search:this.hangupinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.hangupdata=res.data.data.page_data
                            this.hanguptotal=res.data.data.search_sum   
                        }
                    })
            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                  hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.hanguprank,status:["挂起"],data_type:"fx",projects: project_list,page:this.hanguppage,page_size:this.hanguppage_size,search:this.hangupinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.hangupdata=res.data.data.page_data
                            this.hanguptotal=res.data.data.search_sum   
                        }
                    })
            }  
            else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                  hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.hanguprank,status:["挂起"],data_type:"fx",projects: project_list,page:this.hanguppage,page_size:this.hanguppage_size,search:this.hangupinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.hangupdata=res.data.data.page_data
                            this.hanguptotal=res.data.data.search_sum   
                        }
                    })
            }   
               
        },
        // 选择进入第几页
        handleCurrentChange(val) {
            this.currentPage=val
            this.page=this.currentPage
            console.log(`当前页: ${val}`);
           
             if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                   hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2,severity:this.bugnumberrank,status:["新","接受/处理","已解决","已验证","重新打开","已关闭","已拒绝","挂起"], data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                this.total=res.data.data.search_sum
                this.tableData=res.data.data.page_data
                })

            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                   hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2,severity:this.bugnumberrank,status:["新","接受/处理","已解决","已验证","重新打开","已关闭","已拒绝","挂起"], data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                this.total=res.data.data.search_sum
                this.tableData=res.data.data.page_data
                })

            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2,severity:this.bugnumberrank,status:["新","接受/处理","已解决","已验证","重新打开","已关闭","已拒绝","挂起"], data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                this.total=res.data.data.search_sum
                this.tableData=res.data.data.page_data
                })

            }   
             else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                 hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2,severity:this.bugnumberrank,status:["新","接受/处理","已解决","已验证","重新打开","已关闭","已拒绝","挂起"], data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                this.total=res.data.data.search_sum
                this.tableData=res.data.data.page_data
                })

            }   
            
        },
        // 未关闭BUG追踪选择进入第几页
        notclosedhandleCurrentChange(val) {
            this.notclosedcurrentPage=val
            this.notclosedpage=this.notclosedcurrentPage
            console.log(`当前页: ${val}`);
           
               if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.notclosedrank,status:["新","接受/处理","已解决","已验证","重新打开","新","已拒绝"],data_type:"fx",projects: project_list,page:this.notclosedpage,page_size:this.notclosedpage_size,search:this.notclosedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.notcloseddata=res.data.data.page_data
                    this.notclosedtotal=res.data.data.search_sum
                    
                })

            }
            if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                 hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.notclosedrank,status:["新","接受/处理","已解决","已验证","重新打开","新","已拒绝"],data_type:"fx",projects: project_list,page:this.notclosedpage,page_size:this.notclosedpage_size,search:this.notclosedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.notcloseddata=res.data.data.page_data
                    this.notclosedtotal=res.data.data.search_sum
                    
                })

            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.notclosedrank,status:["新","接受/处理","已解决","已验证","重新打开","新","已拒绝"],data_type:"fx",projects: project_list,page:this.notclosedpage,page_size:this.notclosedpage_size,search:this.notclosedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.notcloseddata=res.data.data.page_data
                    this.notclosedtotal=res.data.data.search_sum
                    
                })

            }    
             else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                 hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.notclosedrank,status:["新","接受/处理","已解决","已验证","重新打开","新","已拒绝"],data_type:"fx",projects: project_list,page:this.notclosedpage,page_size:this.notclosedpage_size,search:this.notclosedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.notcloseddata=res.data.data.page_data
                    this.notclosedtotal=res.data.data.search_sum
                    
                })

            }  
           

        },
        // 待处理BUG追踪选择进入第几页
        waitmanagehandleCurrentChange(val) {
            this.waitmanagecurrentPage=val
            this.waitmanagepage=this.waitmanagecurrentPage
            console.log(`当前页: ${val}`);
            
            if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.waitmanagerank,status:["新","接受/处理","重新打开"],data_type:"fx",projects: project_list,page:this.waitmanagepage,page_size:this.waitmanagepage_size,search:this.waitmanageinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.waitmanagedata=res.data.data.page_data
                    this.waitmanagetotal=res.data.data.search_sum
                })

            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.waitmanagerank,status:["新","接受/处理","重新打开"],data_type:"fx",projects: project_list,page:this.waitmanagepage,page_size:this.waitmanagepage_size,search:this.waitmanageinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.waitmanagedata=res.data.data.page_data
                    this.waitmanagetotal=res.data.data.search_sum
                })

            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.waitmanagerank,status:["新","接受/处理","重新打开"],data_type:"fx",projects: project_list,page:this.waitmanagepage,page_size:this.waitmanagepage_size,search:this.waitmanageinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.waitmanagedata=res.data.data.page_data
                    this.waitmanagetotal=res.data.data.search_sum
                })

            }    
            else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.waitmanagerank,status:["新","接受/处理","重新打开"],data_type:"fx",projects: project_list,page:this.waitmanagepage,page_size:this.waitmanagepage_size,search:this.waitmanageinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.waitmanagedata=res.data.data.page_data
                    this.waitmanagetotal=res.data.data.search_sum
                })

            }    
           
           
        },
         // 待回归BUG追踪选择进入第几页
        waitreturnhandleCurrentChange(val) {
            this.waitreturncurrentPage=val
            this.waitreturnpage=this.waitreturncurrentPage
            console.log(`当前页: ${val}`);
           
            if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.waitreturnrank,status:["已解决","已拒绝"],data_type:"fx",projects: project_list,page:this.waitreturnpage,page_size:this.waitreturnpage_size,search:this.waitreturninput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this.waitreturndata=res.data.data.page_data
                    this.waitreturntotal=res.data.data.search_sum
                })

            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.waitreturnrank,status:["已解决","已拒绝"],data_type:"fx",projects: project_list,page:this.waitreturnpage,page_size:this.waitreturnpage_size,search:this.waitreturninput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this.waitreturndata=res.data.data.page_data
                    this.waitreturntotal=res.data.data.search_sum
                })

            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.waitreturnrank,status:["已解决","已拒绝"],data_type:"fx",projects: project_list,page:this.waitreturnpage,page_size:this.waitreturnpage_size,search:this.waitreturninput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this.waitreturndata=res.data.data.page_data
                    this.waitreturntotal=res.data.data.search_sum
                })

            }    
             else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.waitreturnrank,status:["已解决","已拒绝"],data_type:"fx",projects: project_list,page:this.waitreturnpage,page_size:this.waitreturnpage_size,search:this.waitreturninput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this.waitreturndata=res.data.data.page_data
                    this.waitreturntotal=res.data.data.search_sum
                })

            }    
           
        },
         // 卡死BUG追踪选择进入第几页
        stuckhandleCurrentChange(val) {
            this.stuckcurrentPage=val
            this.stuckpage=this.stuckcurrentPage
            console.log(`当前页: ${val}`);
            if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.stuckrank,keywords:{"title":"卡死","name":"卡死"},data_type:"fx",projects: project_list,page:this.stuckpage,page_size:this.stuckpage_size,search:this.stuckinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this.stuckdata=res.data.data.page_data
                    this.stucktotal=res.data.data.search_sum
                })

            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.stuckrank,keywords:{"title":"卡死","name":"卡死",reporter:this.memvalues},data_type:"fx",projects: project_list,page:this.stuckpage,page_size:this.stuckpage_size,search:this.stuckinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this.stuckdata=res.data.data.page_data
                    this.stucktotal=res.data.data.search_sum
                })

            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.stuckrank,keywords:{"title":"卡死","name":"卡死"},data_type:"fx",projects: project_list,page:this.stuckpage,page_size:this.stuckpage_size,search:this.stuckinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this.stuckdata=res.data.data.page_data
                    this.stucktotal=res.data.data.search_sum
                })

            }    
            else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.stuckrank,keywords:{"title":"卡死","name":"卡死",reporter:this.memvalues},data_type:"fx",projects: project_list,page:this.stuckpage,page_size:this.stuckpage_size,search:this.stuckinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this.stuckdata=res.data.data.page_data
                    this.stucktotal=res.data.data.search_sum
                })

            }   
           
        },
        // 已关闭BUG追踪选择进入第几页
        closedhandleCurrentChange(val) {
            this.closedcurrentPage=val
            this.closedpage=this.closedcurrentPage
            console.log(`当前页: ${val}`);
            if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.closedrank,status:["已关闭"],data_type:"fx",projects: project_list,page:this.closedpage,page_size:this.closedpage_size,search:this.closedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this.closeddata=res.data.data.page_data
                    this.closedtotal=res.data.data.search_sum
                })

            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.closedrank,status:["已关闭"],data_type:"fx",projects: project_list,page:this.closedpage,page_size:this.closedpage_size,search:this.closedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this.closeddata=res.data.data.page_data
                    this.closedtotal=res.data.data.search_sum
                })

            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.closedrank,status:["已关闭"],data_type:"fx",projects: project_list,page:this.closedpage,page_size:this.closedpage_size,search:this.closedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this.closeddata=res.data.data.page_data
                    this.closedtotal=res.data.data.search_sum
                })

            }    
            else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.closedrank,status:["已关闭"],data_type:"fx",projects: project_list,page:this.closedpage,page_size:this.closedpage_size,search:this.closedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this.closeddata=res.data.data.page_data
                    this.closedtotal=res.data.data.search_sum
                })

            }    
            
        },
        // 挂起BUG追踪选择进入第几页
        hanguphandleCurrentChange(val) {
            this.hangupcurrentPage=val
            this.hanguppage=this.hangupcurrentPage
            console.log(`当前页: ${val}`);
              if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.hanguprank,status:["挂起"],data_type:"fx",projects: project_list,page:this.hanguppage,page_size:this.hanguppage_size,search:this.hangupinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                        .then(res => {
                    this.hangupdata=res.data.data.page_data
                    this.hanguptotal=res.data.data.search_sum
                })

            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.hanguprank,status:["挂起"],data_type:"fx",projects: project_list,page:this.hanguppage,page_size:this.hanguppage_size,search:this.hangupinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                        .then(res => {
                    this.hangupdata=res.data.data.page_data
                    this.hanguptotal=res.data.data.search_sum
                })

            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.hanguprank,status:["挂起"],data_type:"fx",projects: project_list,page:this.hanguppage,page_size:this.hanguppage_size,search:this.hangupinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                        .then(res => {
                    this.hangupdata=res.data.data.page_data
                    this.hanguptotal=res.data.data.search_sum
                })

            }    
            else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.hanguprank,status:["挂起"],data_type:"fx",projects: project_list,page:this.hanguppage,page_size:this.hanguppage_size,search:this.hangupinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                        .then(res => {
                    this.hangupdata=res.data.data.page_data
                    this.hanguptotal=res.data.data.search_sum
                })

            }    
           
        },
        handleSizeChange(val) {
             this.pagesize=val
             },
        notclosedhandleSizeChange(val){
            this.notclosedpagesize=val
        },
        waitmanagehandleSizeChange(val){
            console.log("val",val);
            this.waitmanagepagesize=val
        },
        waitreturnhandleSizeChange(val){
            this.waitreturnpagesize=val
        },
        stuckhandleSizeChange(val){
            this.stuckpagesize=val
        },
        closedhandleSizeChange(val){
            this.waitreturnpagesize=val
        },
        hanguphandleSizeChange(val){
            this.hanguppagesize=val
        },
        // 关键词查询
        search_value_info(){
            console.log(123);
            this.page=1
            this.currentPage=1
              if(this.value == "all" && this.memvalues =="all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2,severity:this.bugnumberrank,status:["新","接受/处理","已解决","已验证","重新打开","已关闭","已拒绝","挂起"], data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.tableData=res.data.data.page_data
                    this.total=res.data.data.search_sum
                    this.bugdetails=res.data.data.search_sum
                })

            }
            else if(this.value == "all" && this.memvalues !="all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2,severity:this.bugnumberrank,status:["新","接受/处理","已解决","已验证","重新打开","已关闭","已拒绝","挂起"], data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.tableData=res.data.data.page_data
                    this.total=res.data.data.search_sum
                    this.bugdetails=res.data.data.search_sum
                })

            }
            else if(this.value != "all" && this.memvalues =="all"){
                let project_list = [this.value]
               hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2,severity:this.bugnumberrank,status:["新","接受/处理","已解决","已验证","重新打开","已关闭","已拒绝","挂起"], data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.tableData=res.data.data.page_data
                    this.total=res.data.data.search_sum
                    this.bugdetails=res.data.data.search_sum
                })

            }    
            else if(this.value != "all" && this.memvalues !="all"){
                let project_list = [this.value]
               hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,keywords:{reporter:this.memvalues},end:this.timevalue2,severity:this.bugnumberrank,status:["新","接受/处理","已解决","已验证","重新打开","已关闭","已拒绝","挂起"], data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.tableData=res.data.data.page_data
                    this.total=res.data.data.search_sum
                    this.bugdetails=res.data.data.search_sum
                })

            }    
            
        },
        // 未关闭BUG追踪关键词查询
        notclosedsearch(){
            console.log(123);
            this.notclosedpage=1
            this.notclosedcurrentPage=1
             if(this.value == "all" && this.memvalues =="all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.notclosedrank,status:["新","接受/处理","已解决","已验证","重新打开","新","已拒绝"],data_type:"fx",projects: project_list,page:this.notclosedpage,page_size:this.notclosedpage_size,search:this.notclosedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.notcloseddata=res.data.data.page_data
                    this.notclosedtotal=res.data.data.search_sum
                    this.notclosedbugdetails=res.data.data.search_sum
                })

            }
            else if(this.value == "all" && this.memvalues !="all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.notclosedrank,status:["新","接受/处理","已解决","已验证","重新打开","新","已拒绝"],data_type:"fx",projects: project_list,page:this.notclosedpage,page_size:this.notclosedpage_size,search:this.notclosedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.notcloseddata=res.data.data.page_data
                    this.notclosedtotal=res.data.data.search_sum
                    this.notclosedbugdetails=res.data.data.search_sum
                })

            }
            else if(this.value != "all" && this.memvalues =="all"){
                let project_list = [this.value]
               hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.notclosedrank,status:["新","接受/处理","已解决","已验证","重新打开","新","已拒绝"],data_type:"fx",projects: project_list,page:this.notclosedpage,page_size:this.notclosedpage_size,search:this.notclosedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.notcloseddata=res.data.data.page_data
                    this.notclosedtotal=res.data.data.search_sum
                    this.notclosedbugdetails=res.data.data.search_sum
                })

            }    
            else if(this.value != "all" && this.memvalues !="all"){
                let project_list = [this.value]
               hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.notclosedrank,status:["新","接受/处理","已解决","已验证","重新打开","新","已拒绝"],data_type:"fx",projects: project_list,page:this.notclosedpage,page_size:this.notclosedpage_size,search:this.notclosedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    this.notcloseddata=res.data.data.page_data
                    this.notclosedtotal=res.data.data.search_sum
                    this.notclosedbugdetails=res.data.data.search_sum
                })

            }   
           
        },
        // 待处理BUG追踪关键词查询
        waitmanagesearch(){
            this. waitmanagepage=1
            this. waitmanagecurrentPage=1
            if(this.value == "all" && this.memvalues =="all"){
                let project_list = this.menulist
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.waitmanagerank,status:["新","接受/处理","重新打开"],data_type:"fx",projects: project_list,page:this.waitmanagepage,page_size:this.waitmanagepage_size,search:this.waitmanageinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. waitmanagedata=res.data.data.page_data
                    this. waitmanagetotal=res.data.data.search_sum
                    this. waitmanagebugdetails=res.data.data.search_sum
                })
            }
            else if(this.value == "all" && this.memvalues !="all"){
                let project_list = this.menulist
                 hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.waitmanagerank,status:["新","接受/处理","重新打开"],data_type:"fx",projects: project_list,page:this.waitmanagepage,page_size:this.waitmanagepage_size,search:this.waitmanageinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. waitmanagedata=res.data.data.page_data
                    this. waitmanagetotal=res.data.data.search_sum
                    this. waitmanagebugdetails=res.data.data.search_sum
                })
            }
            else if(this.value != "all" && this.memvalues =="all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.waitmanagerank,status:["新","接受/处理","重新打开"],data_type:"fx",projects: project_list,page:this.waitmanagepage,page_size:this.waitmanagepage_size,search:this.waitmanageinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. waitmanagedata=res.data.data.page_data
                    this. waitmanagetotal=res.data.data.search_sum
                    this. waitmanagebugdetails=res.data.data.search_sum
                })

            }    
            else if(this.value != "all" && this.memvalues !="all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.waitmanagerank,status:["新","接受/处理","重新打开"],data_type:"fx",projects: project_list,page:this.waitmanagepage,page_size:this.waitmanagepage_size,search:this.waitmanageinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. waitmanagedata=res.data.data.page_data
                    this. waitmanagetotal=res.data.data.search_sum
                    this. waitmanagebugdetails=res.data.data.search_sum
                })

            }    
           
        },
        // 待回归BUG追踪关键词查询
        waitreturnsearch(){
            this. waitreturnpage=1
            this. waitreturncurrentPage=1
            if(this.value == "all" && this.memvalues =="all"){
                let project_list = this.menulist
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.waitreturnrank,status:["已解决","已拒绝"],data_type:"fx",projects: project_list,page:this.waitreturnpage,page_size:this.waitreturnpage_size,search:this.waitreturninput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. waitreturndata=res.data.data.page_data
                    this. waitreturntotal=res.data.data.search_sum
                    this. waitreturnbugdetails=res.data.data.search_sum
                })
            }
            if(this.value == "all" && this.memvalues !="all"){
                let project_list = this.menulist
                 hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.waitreturnrank,status:["已解决","已拒绝"],data_type:"fx",projects: project_list,page:this.waitreturnpage,page_size:this.waitreturnpage_size,search:this.waitreturninput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. waitreturndata=res.data.data.page_data
                    this. waitreturntotal=res.data.data.search_sum
                    this. waitreturnbugdetails=res.data.data.search_sum
                })
            }
            else if(this.value != "all" && this.memvalues =="all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.waitreturnrank,status:["已解决","已拒绝"],data_type:"fx",projects: project_list,page:this.waitreturnpage,page_size:this.waitreturnpage_size,search:this.waitreturninput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. waitreturndata=res.data.data.page_data
                    this. waitreturntotal=res.data.data.search_sum
                    this. waitreturnbugdetails=res.data.data.search_sum
                })

            }    
            else if(this.value != "all" && this.memvalues !="all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.waitreturnrank,status:["已解决","已拒绝"],data_type:"fx",projects: project_list,page:this.waitreturnpage,page_size:this.waitreturnpage_size,search:this.waitreturninput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. waitreturndata=res.data.data.page_data
                    this. waitreturntotal=res.data.data.search_sum
                    this. waitreturnbugdetails=res.data.data.search_sum
                })

            } 
            
        },
        // 已关闭BUG追踪关键词查询
        closedsearch(){
            this. closedpage=1
            this. closedcurrentPage=1
             if(this.value == "all"  && this.memvalues =="all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.closedrank,status:["已关闭"],data_type:"fx",projects: project_list,page:this.closedpage,page_size:this.closedpage_size,search:this.closedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. closeddata=res.data.data.page_data
                    this. closedtotal=res.data.data.search_sum
                    this. closedbugdetails=res.data.data.search_sum
                })
            }
            else if(this.value == "all"  && this.memvalues !="all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.closedrank,status:["已关闭"],data_type:"fx",projects: project_list,page:this.closedpage,page_size:this.closedpage_size,search:this.closedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. closeddata=res.data.data.page_data
                    this. closedtotal=res.data.data.search_sum
                    this. closedbugdetails=res.data.data.search_sum
                })
            }
            else if(this.value != "all"  && this.memvalues =="all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.closedrank,status:["已关闭"],data_type:"fx",projects: project_list,page:this.closedpage,page_size:this.closedpage_size,search:this.closedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. closeddata=res.data.data.page_data
                    this. closedtotal=res.data.data.search_sum
                    this. closedbugdetails=res.data.data.search_sum
                })

            }    
            else if(this.value != "all"  && this.memvalues !="all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.closedrank,status:["已关闭"],data_type:"fx",projects: project_list,page:this.closedpage,page_size:this.closedpage_size,search:this.closedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. closeddata=res.data.data.page_data
                    this. closedtotal=res.data.data.search_sum
                    this. closedbugdetails=res.data.data.search_sum
                })

            }    
            
        },
        // 卡死BUG追踪关键词查询
        stucksearch(){
            this. stuckpage=1
            this. stuckcurrentPage=1
             if(this.value == "all" && this.memvalues =="all"){
                let project_list = this.menulist
               hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.stuckrank,keywords:{"name":"卡死","title":"卡死"},data_type:"fx",projects: project_list,page:this.stuckpage,page_size:this.stuckpage_size,search:this.stuckinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. stuckdata=res.data.data.page_data
                    this. stucktotal=res.data.data.search_sum
                    this. stuckbugdetails=res.data.data.search_sum
                })
            }
            if(this.value == "all" && this.memvalues !="all"){
                let project_list = this.menulist
               hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.stuckrank,keywords:{"name":"卡死","title":"卡死",reporter:this.memvalues},data_type:"fx",projects: project_list,page:this.stuckpage,page_size:this.stuckpage_size,search:this.stuckinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. stuckdata=res.data.data.page_data
                    this. stucktotal=res.data.data.search_sum
                    this. stuckbugdetails=res.data.data.search_sum
                })
            }
            else if(this.value != "all" && this.memvalues =="all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.stuckrank,keywords:{"name":"卡死","title":"卡死"},data_type:"fx",projects: project_list,page:this.stuckpage,page_size:this.stuckpage_size,search:this.stuckinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. stuckdata=res.data.data.page_data
                    this. stucktotal=res.data.data.search_sum
                    this. stuckbugdetails=res.data.data.search_sum
                })

            }    
            else if(this.value != "all" && this.memvalues !="all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.stuckrank,keywords:{"name":"卡死","title":"卡死",reporter:this.memvalues},data_type:"fx",projects: project_list,page:this.stuckpage,page_size:this.stuckpage_size,search:this.stuckinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. stuckdata=res.data.data.page_data
                    this. stucktotal=res.data.data.search_sum
                    this. stuckbugdetails=res.data.data.search_sum
                })

            }    
            
        },
        // 挂起BUG追踪关键词查询
        hangupsearch(){
            this. hanguppage=1
            this. hangupcurrentPage=1
            if(this.value == "all" && this.memvalues =="all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.hanguprank,status:["挂起"],data_type:"fx",projects: project_list,page:this.hanguppage,page_size:this.hanguppage_size,search:this.hangupinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. hangupdata=res.data.data.page_data
                    this. hanguptotal=res.data.data.search_sum
                    this. hangupbugdetails=res.data.data.search_sum
                })
            }
            if(this.value == "all" && this.memvalues !="all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.hanguprank,status:["挂起"],data_type:"fx",projects: project_list,page:this.hanguppage,page_size:this.hanguppage_size,search:this.hangupinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. hangupdata=res.data.data.page_data
                    this. hanguptotal=res.data.data.search_sum
                    this. hangupbugdetails=res.data.data.search_sum
                })
            }
            else if(this.value != "all" && this.memvalues =="all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:this.hanguprank,status:["挂起"],data_type:"fx",projects: project_list,page:this.hanguppage,page_size:this.hanguppage_size,search:this.hangupinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. hangupdata=res.data.data.page_data
                    this. hanguptotal=res.data.data.search_sum
                    this. hangupbugdetails=res.data.data.search_sum
                })

            }    
            else if(this.value != "all" && this.memvalues !="all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:this.hanguprank,status:["挂起"],data_type:"fx",projects: project_list,page:this.hanguppage,page_size:this.hanguppage_size,search:this.hangupinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    this. hangupdata=res.data.data.page_data
                    this. hanguptotal=res.data.data.search_sum
                    this. hangupbugdetails=res.data.data.search_sum
                })

            }    
           
        },
        // 总BUG查询列表
        bugnumberbutton(row){
            this.loading_table=true
            if(this.value == "all" && this.memvalues=="all"){
                let project_list = this.menulist
                 hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2,severity:row["rank"],status:["新","接受/处理","已解决","已验证","重新打开","已关闭","已拒绝","挂起"], data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                        this.bugnumberrank=row['rank']
                        this.tableData=res.data.data.page_data
                        this.total=res.data.data.search_sum
                        this.bugdetails=res.data.data.search_sum 
                        this.loading_table=false
                })
            }
            else if(this.value == "all" && this.memvalues !="all"){
                let project_list = this.menulist
                
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2,severity:row["rank"],status:["新","接受/处理","已解决","已验证","重新打开","已关闭","已拒绝","挂起"], data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                        this.bugnumberrank=row['rank']
                        this.tableData=res.data.data.page_data
                        this.total=res.data.data.search_sum
                        this.bugdetails=res.data.data.search_sum 
                        this.loading_table=false
                })

            }
            else if(this.value != "all" && this.memvalues =="all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2,severity:row["rank"],status:["新","接受/处理","已解决","已验证","重新打开","已关闭","已拒绝","挂起"], data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                        this.bugnumberrank=row['rank']
                        this.tableData=res.data.data.page_data
                        this.total=res.data.data.search_sum
                        this.bugdetails=res.data.data.search_sum 
                        this.loading_table=false
                })

            }
            else if(this.value != "all" && this.memvalues !="all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2,severity:row["rank"],status:["新","接受/处理","已解决","已验证","重新打开","已关闭","已拒绝","挂起"], data_type:"fx",projects: project_list,page:this.page,page_size:this.page_size,search:this.input,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                        this.bugnumberrank=row['rank']
                        this.tableData=res.data.data.page_data
                        this.total=res.data.data.search_sum
                        this.bugdetails=res.data.data.search_sum 
                        this.loading_table=false
                })

            }
            // this.loading_table=false
           
        },
        // 未关闭BUG查询列表
        notclosedbutton(row){ 
            this.loading_table=true
                if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:row["rank"],status:["新","接受/处理","已解决","已验证","重新打开","新","已拒绝"],data_type:"fx",projects: project_list,page:this.notclosedpage,page_size:this.notclosedpage_size,search:this.notclosedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.notcloseddata=res.data.data.page_data
                            this.notclosedtotal=res.data.data.search_sum
                            this.notclosedbugdetails=res.data.data.search_sum
                            this.notclosedrank=row['rank']
                            this.loading_table=false
                        }
                    })
            }
             else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:row["rank"],status:["新","接受/处理","已解决","已验证","重新打开","新","已拒绝"],data_type:"fx",projects: project_list,page:this.notclosedpage,page_size:this.notclosedpage_size,search:this.notclosedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                        {
                            this.notcloseddata=res.data.data.page_data
                            this.notclosedtotal=res.data.data.search_sum
                            this.notclosedbugdetails=res.data.data.search_sum
                            this.notclosedrank=row['rank']
                            this.loading_table=false
                        }
                    })
            }
            else if(this.value != "all" && this.memvalues == "all"){
                    let project_list = [this.value]
                    hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:row["rank"],status:["新","接受/处理","已解决","已验证","重新打开","新","已拒绝"],data_type:"fx",projects: project_list,page:this.notclosedpage,page_size:this.notclosedpage_size,search:this.notclosedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                        .then(res => {
                            {
                                this.notcloseddata=res.data.data.page_data
                                this.notclosedtotal=res.data.data.search_sum
                                this.notclosedbugdetails=res.data.data.search_sum
                                this.notclosedrank=row['rank']
                                this.loading_table=false
                            }
                        })

                }    
            else if(this.value != "all" && this.memvalues != "all"){
                    let project_list = [this.value]
                    hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:row["rank"],status:["新","接受/处理","已解决","已验证","重新打开","新","已拒绝"],data_type:"fx",projects: project_list,page:this.notclosedpage,page_size:this.notclosedpage_size,search:this.notclosedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                        .then(res => {
                            {
                                this.notcloseddata=res.data.data.page_data
                                this.notclosedtotal=res.data.data.search_sum
                                this.notclosedbugdetails=res.data.data.search_sum
                                this.notclosedrank=row['rank']
                                this.loading_table=false
                            }
                        })

                }    
                // this.loading_table=false
        },
         // 待处理BUG查询列表
        waitmanagebutton(row){
            this.loading_table=true
              if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
               hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2,severity:row["rank"],status:["新","接受/处理","重新打开"],data_type:"fx",projects: project_list,page:this.waitmanagepage,page_size:this.waitmanagepage_size,search:this.waitmanageinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    {
                        this.waitmanagedata=res.data.data.page_data
                        this.waitmanagetotal=res.data.data.search_sum
                        this.waitmanagebugdetails=res.data.data.search_sum
                        this.waitmanagerank=row['rank']
                        this.loading_table=false
                    }
                })
            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
               hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2,severity:row["rank"],status:["新","接受/处理","重新打开"],data_type:"fx",projects: project_list,page:this.waitmanagepage,page_size:this.waitmanagepage_size,search:this.waitmanageinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    {
                        this.waitmanagedata=res.data.data.page_data
                        this.waitmanagetotal=res.data.data.search_sum
                        this.waitmanagebugdetails=res.data.data.search_sum
                        this.waitmanagerank=row['rank']
                        this.loading_table=false
                    }
                })
            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2,severity:row["rank"],status:["新","接受/处理","重新打开"],data_type:"fx",projects: project_list,page:this.waitmanagepage,page_size:this.waitmanagepage_size,search:this.waitmanageinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    {
                        this.waitmanagedata=res.data.data.page_data
                        this.waitmanagetotal=res.data.data.search_sum
                        this.waitmanagebugdetails=res.data.data.search_sum
                        this.waitmanagerank=row['rank']
                        this.loading_table=false
                    }
                })

            }    
             else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2,severity:row["rank"],status:["新","接受/处理","重新打开"],data_type:"fx",projects: project_list,page:this.waitmanagepage,page_size:this.waitmanagepage_size,search:this.waitmanageinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    {
                        this.waitmanagedata=res.data.data.page_data
                        this.waitmanagetotal=res.data.data.search_sum
                        this.waitmanagebugdetails=res.data.data.search_sum
                        this.waitmanagerank=row['rank']
                        this.loading_table=false
                    }
                })

            }    
                // this.loading_table=false
        },
        // 待回归BUG查询列表
        waitreturnbutton(row){
            this.loading_table=true
            if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:row["rank"],status:["已解决","已拒绝"],data_type:"fx",projects: project_list,page:this.waitreturnpage,page_size:this.waitreturnpage_size,search:this.waitreturninput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    {
                        this.waitreturndata=res.data.data.page_data
                        this.waitreturntotal=res.data.data.search_sum
                        this.waitreturnbugdetails=res.data.data.search_sum
                        this.waitreturnrank=row['rank']
                        this.loading_table=false
                    }
                })
            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:row["rank"],status:["已解决","已拒绝"],data_type:"fx",projects: project_list,page:this.waitreturnpage,page_size:this.waitreturnpage_size,search:this.waitreturninput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    {
                        this.waitreturndata=res.data.data.page_data
                        this.waitreturntotal=res.data.data.search_sum
                        this.waitreturnbugdetails=res.data.data.search_sum
                        this.waitreturnrank=row['rank']
                        this.loading_table=false
                    }
                })
            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:row["rank"],status:["已解决","已拒绝"],data_type:"fx",projects: project_list,page:this.waitreturnpage,page_size:this.waitreturnpage_size,search:this.waitreturninput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    {
                        this.waitreturndata=res.data.data.page_data
                        this.waitreturntotal=res.data.data.search_sum
                        this.waitreturnbugdetails=res.data.data.search_sum
                        this.waitreturnrank=row['rank']
                        this.loading_table=false
                    }
                })

            }    
             else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:row["rank"],status:["已解决","已拒绝"],data_type:"fx",projects: project_list,page:this.waitreturnpage,page_size:this.waitreturnpage_size,search:this.waitreturninput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    {
                        this.waitreturndata=res.data.data.page_data
                        this.waitreturntotal=res.data.data.search_sum
                        this.waitreturnbugdetails=res.data.data.search_sum
                        this.waitreturnrank=row['rank']
                        this.loading_table=false
                    }
                })

            }    
            // this.loading_table=false
        },
        // 卡死bug查询列表
        stuckbutton(row){
            this.loading_table=true
             if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:row["rank"],keywords:{"name":"卡死","title":"卡死"},data_type:"fx",projects: project_list,page:this.stuckpage,page_size:this.stuckpage_size,search:this.stuckinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    {
                        this.stuckdata=res.data.data.page_data
                        this.stucktotal=res.data.data.search_sum
                        this.stuckbugdetails=res.data.data.search_sum
                        this.stuckrank=row['rank']
                        this.loading_table=false
                    }
                })
            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:row["rank"],keywords:{"name":"卡死","title":"卡死",reporter:this.memvalues},data_type:"fx",projects: project_list,page:this.stuckpage,page_size:this.stuckpage_size,search:this.stuckinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    {
                        this.stuckdata=res.data.data.page_data
                        this.stucktotal=res.data.data.search_sum
                        this.stuckbugdetails=res.data.data.search_sum
                        this.stuckrank=row['rank']
                        this.loading_table=false
                    }
                })
            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:row["rank"],keywords:{"name":"卡死","title":"卡死"},data_type:"fx",projects: project_list,page:this.stuckpage,page_size:this.stuckpage_size,search:this.stuckinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    {
                        this.stuckdata=res.data.data.page_data
                        this.stucktotal=res.data.data.search_sum
                        this.stuckbugdetails=res.data.data.search_sum
                        this.stuckrank=row['rank']
                        this.loading_table=false
                    }
                })

            }   
            else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
                hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:row["rank"],keywords:{"name":"卡死","title":"卡死",reporter:this.memvalues},data_type:"fx",projects: project_list,page:this.stuckpage,page_size:this.stuckpage_size,search:this.stuckinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    {
                        this.stuckdata=res.data.data.page_data
                        this.stucktotal=res.data.data.search_sum
                        this.stuckbugdetails=res.data.data.search_sum
                        this.stuckrank=row['rank']
                        this.loading_table=false
                    }
                })

            }     
            // this.loading_table=false
        },
        // 已关闭BUG查询列表
        closedbutton(row){
            this.loading_table=true
            if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
               hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:row["rank"],status:["已关闭"],data_type:"fx",projects: project_list,page:this.closedpage,page_size:this.closedpage_size,search:this.closedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    {
                        this.closeddata=res.data.data.page_data
                        this.closedtotal=res.data.data.search_sum
                        this.closedbugdetails=res.data.data.search_sum
                        this.closedrank=row['rank']
                        this.loading_table=false
                    }
                })
            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
               hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:row["rank"],status:["已关闭"],data_type:"fx",projects: project_list,page:this.closedpage,page_size:this.closedpage_size,search:this.closedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    {
                        this.closeddata=res.data.data.page_data
                        this.closedtotal=res.data.data.search_sum
                        this.closedbugdetails=res.data.data.search_sum
                        this.closedrank=row['rank']
                        this.loading_table=false
                    }
                })
            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
               hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:row["rank"],status:["已关闭"],data_type:"fx",projects: project_list,page:this.closedpage,page_size:this.closedpage_size,search:this.closedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    {
                        this.closeddata=res.data.data.page_data
                        this.closedtotal=res.data.data.search_sum
                        this.closedbugdetails=res.data.data.search_sum
                        this.closedrank=row['rank']
                        this.loading_table=false
                    }
                })

            }    
             else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
               hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:row["rank"],status:["已关闭"],data_type:"fx",projects: project_list,page:this.closedpage,page_size:this.closedpage_size,search:this.closedinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                    .then(res => {
                    {
                        this.closeddata=res.data.data.page_data
                        this.closedtotal=res.data.data.search_sum
                        this.closedbugdetails=res.data.data.search_sum
                        this.closedrank=row['rank']
                        this.loading_table=false
                    }
                })

            }    
                // this.loading_table=false
        },
        // 挂起BUG查询列表
        hangupbutton(row){
            this.loading_table=true
             if(this.value == "all" && this.memvalues == "all"){
                let project_list = this.menulist
              hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:row['rank'],status:["挂起"],data_type:"fx",projects: project_list,page:this.hanguppage,page_size:this.hanguppage_size,search:this.hangupinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    {
                        this.hangupdata=res.data.data.page_data
                        this.hanguptotal=res.data.data.search_sum
                        this.hangupbugdetails=res.data.data.search_sum
                        this.hanguprank=row['rank']
                        this.loading_table=false
                    }
                })
            }
            else if(this.value == "all" && this.memvalues != "all"){
                let project_list = this.menulist
              hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:row['rank'],status:["挂起"],data_type:"fx",projects: project_list,page:this.hanguppage,page_size:this.hanguppage_size,search:this.hangupinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    {
                        this.hangupdata=res.data.data.page_data
                        this.hanguptotal=res.data.data.search_sum
                        this.hangupbugdetails=res.data.data.search_sum
                        this.hanguprank=row['rank']
                        this.loading_table=false
                    }
                })
            }
            else if(this.value != "all" && this.memvalues == "all"){
                let project_list = [this.value]
               hpaxios("/api/v1/DataTable/",{type:"bug",start:this.timevalue1,end:this.timevalue2, severity:row['rank'],status:["挂起"],data_type:"fx",projects: project_list,page:this.hanguppage,page_size:this.hanguppage_size,search:this.hangupinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    {
                        this.hangupdata=res.data.data.page_data
                        this.hanguptotal=res.data.data.search_sum
                        this.hangupbugdetails=res.data.data.search_sum
                        this.hanguprank=row['rank']
                        this.loading_table=false
                    }
                })

            }    
             else if(this.value != "all" && this.memvalues != "all"){
                let project_list = [this.value]
               hpaxios("/api/v1/DataTable/",{type:"bug",keywords:{reporter:this.memvalues},start:this.timevalue1,end:this.timevalue2, severity:row['rank'],status:["挂起"],data_type:"fx",projects: project_list,page:this.hanguppage,page_size:this.hanguppage_size,search:this.hangupinput,fields:["id","title","severity","reporter","created","closed","status", "url"]})
                .then(res => {
                    {
                        this.hangupdata=res.data.data.page_data
                        this.hanguptotal=res.data.data.search_sum
                        this.hangupbugdetails=res.data.data.search_sum
                        this.hanguprank=row['rank']
                        this.loading_table=false
                    }
                })

            }  
                // this.loading_table=false
        },
        Legacybug(){
            Legacybugmychart = echarts.getInstanceByDom(document.getElementById("Legacybug"))
            if (Legacybugmychart == null) { // 如果不存在，就进行初始化
                Legacybugmychart = echarts.init(document.getElementById("Legacybug"));
            }
            Legacybugmychart.setOption(this.queryinfo.bug_day_chart,true);
        },
        buglevel(){
            Legacybugmychart = echarts.getInstanceByDom(document.getElementById("Legacybug"))
            if (Legacybugmychart == null) { // 如果不存在，就进行初始化
                Legacybugmychart = echarts.init(document.getElementById("Legacybug"));
            }
            Legacybugmychart.setOption(this.queryinfo.bug_day_level_chart,true);
        },
        buginfo(){
            Legacybugmychart = echarts.getInstanceByDom(document.getElementById("Legacybug"))
            if (Legacybugmychart == null) { // 如果不存在，就进行初始化
                Legacybugmychart = echarts.init(document.getElementById("Legacybug"));
            }
            Legacybugmychart.setOption(this.queryinfo.bug_day_yl_chart,true);
        },
        downshow(){
             if(this.value=="all"){
                this.value_name="所有项目"
            }
            else{
                this.value_name = this.value
            }
            this.downloadbutton=false
            this.nodownshow=true
            this.edit_table_show=false
         
        },
        restore(){
            this.downloadbutton=true
            this.nodownshow=false
        
            this.edit_table_show=true
            
        },
        handleDown(){
                //导出PDF

                setTimeout(() => {
                    htmlToPdf.downloadPDF( document.querySelector('#demo'),this.value_name+"总结报告");
                }, 2000);
                
                
            },
        table(){
            this.showtable=true
        },
        text(){
            console.log(this.texttest);
        },
        addtext(){
            this.textnumber++
        },
        deletetext(){
            if (this.textnumber > 1){
                this.textnumber--
            }
            else{
                this.$store.state.queryinfocode=this.queryinfocode
                    this.$notify.error({
                    title: '错误',
                    message: '无法删除',
                    })
            }
        },
        enter() {
				
                 this.seen = true;
			},
        leave() {
                this.seen = false;
        },
        enter2() {
				this.seen2 = true;
			},
        leave2() {
                this.seen2 = false;
        },
        enter3() {
				this.seen3 = true;
			},
        leave3() {
                this.seen3 = false;
        }
           
    }   
})

</script>
<style scoped>
.timechoice{
    margin: 20px;
}
.divtitle2{
    background:#00b44e;
    height: 35px;
    margin: 20px;
    margin-left: 0px;
    margin-right: 0px;
}
.h5title{
    color:#00000097;
    text-align: left;
    font-size:18px;
    padding: 15px;
    margin: 20px;
    background:#fff;
    font-weight:bolder
}
.text {
    font-size: 14px;
  }

.item {
    padding: 18px 0;
  }

.h4card {
      font-size: 20px;
      text-align: left;
      margin:5px;
      font-weight: normal;
  }
.h5card{
    font-size: 15px;
    text-align: left;
    margin:5px;
    font-weight: normal;
}
.rowcard{
    margin: 20px;
}
.h1{
    font-size: 30px;
    text-align: left;
    margin: 20px;
}
.nonetitle{
   color: #909399;
}
.my_class{
        color:black;
    }
    .fl{
  float: left;
  margin-right:20px;
}
.fr{
  float: left;
  margin-left: 1150px;
  
}
.fy{
  text-align:right;
  margin-top:30px;
}
.title{
  height:100%;
}
.new{
background-color: #00bfff;
  color: white;
  border-radius: 30px;
  border: none;
}
.closed{
  background-color: #5d6974;
  color: white;
  border-radius: 30px;
  border: none;
}
.reselve{
  background-color: #00b44e;
  color: white;
  border-radius: 30px;
  border: none;
}
.badge{
    padding:0px;
    background-color:#00b44e
}
/* .el-table--fit{
  border-color:#808080;
  border-left-color: #EBEEF5;
} */
.new{
background-color: #00bfff;
  color: white;
  border-radius: 30px;
  border: none;
}
.closed{
  background-color: #5d6974;
  color: white;
  border-radius: 30px;
  border: none;
}
.reselve{
  background-color: #00b44e;
  color: white;
  border-radius: 30px;
  border: none;
}
.badge{
    padding:0px;
    background-color:#00b44e
}
.demonstration{
    float: left;
}
.el-input__inner{
    height: 25px !important;
}
.inputDeep>>>.el-input__inner{
     border: 0;
   

}
.inputDeep{
    width: 98%;
}
.inputtext>>>.el-input__inner{
    border: 0;
    height: 30px;
    
}
.inputtext{
    width: 98%;
    height: 30px;
}
.pdf-demoo{
    background-color:	#C0C0C020	;
    width:100%;
}
.cardbo{
    margin-top: 10px;
    display: flex;
}
.cardboh5{
    margin:0px 10px 0px 5px;
    display: flex;
    font-weight: normal;
}
.cardboh52{
    color:#666666;
    font-weight: normal;
    margin:0px;
    font-size: 18px;
}

div/deep/ .el-drawer__header{
    margin:0px 0px 0px 0px;
    border-bottom:1px solid #dcdfe6;
    padding-bottom:10px;
    font-weight:bolder
    

}
div/deep/.el-drawer {
      width: 360px !important;
    }
div/deep/.el-radio-group{
  width:300px;

}
div/deep/.el-radio{
  margin: 10px 0px 10px 0px;
}
.before{
        position: relative;
        color: #409EFF;
    }
    .before:before{
        content: attr(text);
        position: absolute;
        z-index: 10;
        color: #d9ecff;
        -webkit-mask:linear-gradient(to left, red, transparent );
    }

@keyframes mymove
{
	0%   {opacity:0.1;}
	25%  {opacity:0.3;}
	75%  {opacity:0.7;}
	100% {opacity:1.0;}
}
.warning_table{
    display:flex;
    flex-direction: column;
    margin-bottom: 20px;
}
</style>
