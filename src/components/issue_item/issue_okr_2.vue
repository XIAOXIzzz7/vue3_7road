<template>
<el-container style="height:100%;">
    <el-aside :width="$store.state.len_" class="aside">
        
          <el-menu
            :default-active="showlist"
            class="el-menu-vertical-demo"
            style="height:100%"
            background-color="#343a40"
            unique-opened
            
            >
    <router-link to="/">
    <div style="border-bottom: 1px solid #4b545c;display:flex">
        <!-- <svg t="1639535995788" style="margin:18.5px 10px 18px 50px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2873" width="25" height="25"><path d="M873.0501875 494.675h-254.88749971a88.94999971 88.94999971 0 0 1-88.875-88.875V150.91250029c0-23.66250029 9.26250029-45.97499971 26.1-62.81250029A88.2 88.2 0 0 1 618.16268779 62h254.88749971a89.02500029 89.02500029 0 0 1 88.91250029 88.91250029v254.88749971a88.9875 88.9875 0 0 1-88.91250029 88.875z m38.54999971-343.76249971c0-21.2625-17.28749971-38.54999971-38.54999971-38.55000058h-254.88749971c-21.22499971 0-38.51250029 17.28749971-38.51250029 38.55000058v254.88749971a38.62500029 38.62500029 0 0 0 38.51250029 38.54999971h254.88749971c21.2625 0 38.54999971-17.28749971 38.54999971-38.54999971V150.91250029zM405.76268779 961.96249971H150.87518721A88.94999971 88.94999971 0 0 1 62.00018721 873.08749971v-254.88749971a88.9875 88.9875 0 0 1 88.875-88.91250029h254.88750058a89.02500029 89.02500029 0 0 1 88.91249942 88.91250029v254.88749971a88.9875 88.9875 0 0 1-88.91249942 88.875z m38.54999971-343.76249971c0-21.2625-17.28749971-38.54999971-38.54999971-38.54999971H150.87518721c-21.2625 0-38.54999971 17.28749971-38.54999971 38.54999971v254.88749971a38.62500029 38.62500029 0 0 0 38.54999971 38.55000058h254.88750058a38.62500029 38.62500029 0 0 0 38.54999971-38.55000058v-254.88749971z m-38.54999971-123.525H150.87518721A88.94999971 88.94999971 0 0 1 62.00018721 405.8V150.91250029A88.9875 88.9875 0 0 1 150.87518721 62h254.88750058c23.66250029 0 45.93750029 9.29999971 62.775 26.13750029a88.12500029 88.12500029 0 0 1 26.13749942 62.775v254.88749971a88.9875 88.9875 0 0 1-88.91249942 88.875z m38.54999971-343.76249971c0-21.2625-17.28749971-38.54999971-38.54999971-38.55000058H150.87518721c-21.2625 0-38.54999971 17.28749971-38.54999971 38.55000058v254.88749971a38.62500029 38.62500029 0 0 0 38.54999971 38.54999971h254.88750058a38.62500029 38.62500029 0 0 0 38.54999971-38.54999971V150.91250029z m173.85000029 378.37499942h254.88749971a89.02500029 89.02500029 0 0 1 88.91250029 88.91250029v254.88749971a88.9875 88.9875 0 0 1-88.91250029 88.875h-254.88749971a88.94999971 88.94999971 0 0 1-88.875-88.875v-254.88749971a88.9875 88.9875 0 0 1 88.875-88.91250029z m-38.51250029 343.8a38.62500029 38.62500029 0 0 0 38.51250029 38.55000058h254.88749971a38.62500029 38.62500029 0 0 0 38.54999971-38.55000058v-254.88749971c0-21.2625-17.28749971-38.54999971-38.51249942-38.54999971h-254.925c-21.22499971 0-38.51250029 17.28749971-38.51250029 38.54999971v254.88749971z" p-id="2874" fill="rgba(255,255,255,.8)"></path></svg> -->
        <!-- <img src="../../../public/7road.ico" /> -->
        <img style="margin:18.5px 10px 18px 50px" src="../../assets/images/7road.jpg" height="35" width="35">
        <h5 style="background-color:#343a40;margin:25px 0px 17px 0px;color:rgba(255,255,255,.8);font-size:21px;font-weight: normal">第七大道</h5>
    </div>
    </router-link>
      <el-sub-menu index="1">
        <template #title>
          
          <span class="menutitle"><el-icon><FolderOpened /></el-icon>质控部 自研管控数据</span>
        </template>
        <!-- <el-menu-item-group> -->
            <!-- <router-link to="/qa/yh">
                <el-menu-item index="1-1" class="menuitem"><i class="el-icon-menu" style="margin-right:15px"></i>银魂</el-menu-item>
            </router-link> -->
            <!-- <router-link to="/qa/preview">
                <el-menu-item index="1-1" class="menuitem"><i class="el-icon-menu" style="margin-right:15px"></i>自研项目质量总览</el-menu-item>
            </router-link> -->
            <!-- <router-link to='/qa/query'>
                <el-menu-item index="1-2" class="menuitem"><i class="el-icon-menu" style="margin-right:10px"></i> 自研项目数据查询&对比 </el-menu-item>
            </router-link> -->
        <!-- </el-menu-item-group> -->
        <router-link 
            v-for="(project,index) in projects"
            :key="index"  
            :to="'/qa/query_info/' + project + '/issue'">
            <el-menu-item class="menuitem" :index="project" >
                <el-icon><Folder /></el-icon>
            {{project}}
            </el-menu-item>
        </router-link>
        <!-- <el-submenu index="1-1">
                <template #title> 
                    <span class="menutitle"><i class="el-icon-menu" style="margin-right:15px"></i>质控 BUG提交</span>
                </template>
                    <router-link to="/qa/qa_zy_bug">
                        <el-menu-item index="/qa/qa_bug_zy"  class="menuitem">
                            <svg t="1635837425496" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1973" width="20" height="20"><path d="M792.9 482.2H405.8c-11.4 0-21.2 9.8-21.2 21.2 0 11.4 9.8 21.2 21.2 21.2h387.1c11.4 0 21.2-9.8 21.2-21.2 0-13-9.8-21.2-21.2-21.2z m0 178.1H405.8c-11.4 0-21.2 9.8-21.2 21.2s9.8 21.2 21.2 21.2h387.1c11.4 0 21.2-9.8 21.2-21.2s-9.8-21.2-21.2-21.2zM904 248.7H626.3l-4.9-13.1c-32.7-91.5-96.4-114.3-143.7-116H118.4c-31 0-55.5 24.5-55.5 53.9v681.1c0 29.4 24.5 53.9 55.5 53.9H904c31 0 55.5-24.5 55.5-53.9v-552c0-29.4-24.5-53.9-55.5-53.9z m-785.6-50.6c0-42.5 14.7-35.9 76.8-35.9h222.1c94.7 0 119.2 21.2 137.2 52.3l13.1 32.7H118.4v-49.1z m788.8 597.7c0 62.1-21.2 63.7-73.5 63.7H191.9c-63.7 0-73.5-4.9-73.5-73.5V299.3h728.4c68.6 0 60.4 26.1 60.4 73.5v423z m-699-329.9h68.6v68.6h-68.6v-68.6z m0 181.3h68.6v68.6h-68.6v-68.6z m0 0" p-id="1974" fill="#bfbfbf"></path></svg>&nbsp;&nbsp;自研BUG
                        </el-menu-item>
                    </router-link>
                    <router-link to="/qa/qa_bug_issue">
                    <el-menu-item index="/qa/qa_bug_issue"  class="menuitem">
                        <svg t="1635837511132" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2700" width="18" height="18"><path d="M896 896A128 128 0 0 1 768 1024H128A128 128 0 0 1 0 896V256a128 128 0 0 1 128-128A128 128 0 0 1 256 0h640A128 128 0 0 1 1024 128V768a128 128 0 0 1-128 128z m-832 0a64 64 0 0 0 64 64H768a64 64 0 0 0 64-64V448h-768V896z m0-640v128h768V256A64 64 0 0 0 768 192H128A64 64 0 0 0 64 256z m896-128a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64H768a128 128 0 0 1 128 128v576A64 64 0 0 0 960 768V128zM160 256h384a32 32 0 0 1 0 64h-384a32 32 0 0 1 0-64z m576 0a32 32 0 1 1 0 64 32 32 0 0 1 0-64z" p-id="2701" fill="#bfbfbf"></path></svg>&nbsp;&nbsp;发行BUG
                    </el-menu-item>
                    </router-link>
            </el-submenu> -->
      </el-sub-menu>
       <el-sub-menu index="2" v-if="show==1">
        <template #title>
          
          <span class="menutitle"><el-icon><PartlyCloudy /></el-icon>发行项目</span>
        </template>
        <el-menu-item-group>
            <router-link to="/qa/issueinfo">
                <el-menu-item index="2-1" class="menuitem"><el-icon><Folder /></el-icon>发行项目需求</el-menu-item>
            </router-link>
            <router-link to="/qa/issueBug">
                <el-menu-item index="2-2" class="menuitem"><el-icon><Folder /></el-icon> 发行项目BUG </el-menu-item>
            </router-link>
        </el-menu-item-group>
      </el-sub-menu>
       <el-sub-menu index="3" v-if="show==1">
        <template #title>
          
          <span class="menutitle"><el-icon><Reading /></el-icon>质控部人员数据统计</span>
        </template>
        <el-menu-item-group>
            <router-link to="/qa/qa_calendar">
                <el-menu-item index="3-1" class="menuitem"><el-icon><Calendar /></el-icon>质控 QA排期表</el-menu-item>
            </router-link>
            <!-- <el-menu-item index="3-2" class="menuitem"><i class="el-icon-menu" style="margin-right:10px"></i>质控 测试需求</el-menu-item> -->
            <el-sub-menu index="3-2" class="menuitem">
                <template #title>
                    <span class="menutitle"><el-icon><Folder /></el-icon>质控 测试需求</span>
                </template>
                <router-link to="/qa/qa_zy">
                    <el-menu-item index="3-2-1"  class="menuitem">
                            <svg t="1635837425496" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1973" width="20" height="20"><path d="M792.9 482.2H405.8c-11.4 0-21.2 9.8-21.2 21.2 0 11.4 9.8 21.2 21.2 21.2h387.1c11.4 0 21.2-9.8 21.2-21.2 0-13-9.8-21.2-21.2-21.2z m0 178.1H405.8c-11.4 0-21.2 9.8-21.2 21.2s9.8 21.2 21.2 21.2h387.1c11.4 0 21.2-9.8 21.2-21.2s-9.8-21.2-21.2-21.2zM904 248.7H626.3l-4.9-13.1c-32.7-91.5-96.4-114.3-143.7-116H118.4c-31 0-55.5 24.5-55.5 53.9v681.1c0 29.4 24.5 53.9 55.5 53.9H904c31 0 55.5-24.5 55.5-53.9v-552c0-29.4-24.5-53.9-55.5-53.9z m-785.6-50.6c0-42.5 14.7-35.9 76.8-35.9h222.1c94.7 0 119.2 21.2 137.2 52.3l13.1 32.7H118.4v-49.1z m788.8 597.7c0 62.1-21.2 63.7-73.5 63.7H191.9c-63.7 0-73.5-4.9-73.5-73.5V299.3h728.4c68.6 0 60.4 26.1 60.4 73.5v423z m-699-329.9h68.6v68.6h-68.6v-68.6z m0 181.3h68.6v68.6h-68.6v-68.6z m0 0" p-id="1974" fill="#bfbfbf"></path></svg>&nbsp;&nbsp;自研项目
                    </el-menu-item>
                </router-link>
                <router-link to="/qa/qa_issue">
                    <el-menu-item index="3-2-2"  class="menuitem">
                    <svg t="1635837511132" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2700" width="18" height="18"><path d="M896 896A128 128 0 0 1 768 1024H128A128 128 0 0 1 0 896V256a128 128 0 0 1 128-128A128 128 0 0 1 256 0h640A128 128 0 0 1 1024 128V768a128 128 0 0 1-128 128z m-832 0a64 64 0 0 0 64 64H768a64 64 0 0 0 64-64V448h-768V896z m0-640v128h768V256A64 64 0 0 0 768 192H128A64 64 0 0 0 64 256z m896-128a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64H768a128 128 0 0 1 128 128v576A64 64 0 0 0 960 768V128zM160 256h384a32 32 0 0 1 0 64h-384a32 32 0 0 1 0-64z m576 0a32 32 0 1 1 0 64 32 32 0 0 1 0-64z" p-id="2701" fill="#bfbfbf"></path></svg>&nbsp;&nbsp;发行项目
                    </el-menu-item>
                </router-link>
            </el-sub-menu>
            <!-- <el-menu-item index="3-3" class="menuitem"><i class="el-icon-menu" style="margin-right:10px"></i>质控 BUG提交</el-menu-item> -->
            <el-sub-menu index="3-3">
                <template #title> 
                    <span class="menutitle"><el-icon><Files /></el-icon>质控 BUG提交</span>
                </template>
                    <router-link to="/qa/qa_zy_bug">
                        <el-menu-item index="3-3-1"  class="menuitem">
                            <svg t="1635837425496" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1973" width="20" height="20"><path d="M792.9 482.2H405.8c-11.4 0-21.2 9.8-21.2 21.2 0 11.4 9.8 21.2 21.2 21.2h387.1c11.4 0 21.2-9.8 21.2-21.2 0-13-9.8-21.2-21.2-21.2z m0 178.1H405.8c-11.4 0-21.2 9.8-21.2 21.2s9.8 21.2 21.2 21.2h387.1c11.4 0 21.2-9.8 21.2-21.2s-9.8-21.2-21.2-21.2zM904 248.7H626.3l-4.9-13.1c-32.7-91.5-96.4-114.3-143.7-116H118.4c-31 0-55.5 24.5-55.5 53.9v681.1c0 29.4 24.5 53.9 55.5 53.9H904c31 0 55.5-24.5 55.5-53.9v-552c0-29.4-24.5-53.9-55.5-53.9z m-785.6-50.6c0-42.5 14.7-35.9 76.8-35.9h222.1c94.7 0 119.2 21.2 137.2 52.3l13.1 32.7H118.4v-49.1z m788.8 597.7c0 62.1-21.2 63.7-73.5 63.7H191.9c-63.7 0-73.5-4.9-73.5-73.5V299.3h728.4c68.6 0 60.4 26.1 60.4 73.5v423z m-699-329.9h68.6v68.6h-68.6v-68.6z m0 181.3h68.6v68.6h-68.6v-68.6z m0 0" p-id="1974" fill="#bfbfbf"></path></svg>&nbsp;&nbsp;自研BUG
                        </el-menu-item>
                    </router-link>
                    <router-link to="/qa/qa_bug_issue">
                    <el-menu-item index="3-3-2"  class="menuitem">
                        <svg t="1635837511132" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2700" width="18" height="18"><path d="M896 896A128 128 0 0 1 768 1024H128A128 128 0 0 1 0 896V256a128 128 0 0 1 128-128A128 128 0 0 1 256 0h640A128 128 0 0 1 1024 128V768a128 128 0 0 1-128 128z m-832 0a64 64 0 0 0 64 64H768a64 64 0 0 0 64-64V448h-768V896z m0-640v128h768V256A64 64 0 0 0 768 192H128A64 64 0 0 0 64 256z m896-128a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64H768a128 128 0 0 1 128 128v576A64 64 0 0 0 960 768V128zM160 256h384a32 32 0 0 1 0 64h-384a32 32 0 0 1 0-64z m576 0a32 32 0 1 1 0 64 32 32 0 0 1 0-64z" p-id="2701" fill="#bfbfbf"></path></svg>&nbsp;&nbsp;发行BUG
                    </el-menu-item>
                    </router-link>
            </el-sub-menu>
            <router-link to="/qa/qa_member_list">
                <el-menu-item index="3-4" class="menuitem"><el-icon><UserFilled /></el-icon>质控 人员统计</el-menu-item>
            </router-link>
            <router-link to="/qa/issueokr">
                <el-menu-item index="3-5" class="menuitem"><el-icon><WindPower /></el-icon>质控 OKR数据库</el-menu-item>
            </router-link>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
    </el-aside>
    <el-container>
        <el-header class="header">
            <div style="display:flex ; justify-content: space-between;">
                <h5 style="margin:30px 0px 0px 30px">质量管理数据后台</h5>
                <div style="margin:30px 80px 0px 0px;display: flex;">
                     <el-icon><Avatar /></el-icon><h5 style="margin-left:10px;font-size: 17px;">游客登录</h5>
                </div>
            </div>
        </el-header>
        <el-main class="main" style="padding:0px">
            <div class="title">
    <div class="title_l">

    </div>
    <div class="title_r">
        <span>
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
        <!-- <span>
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
        <span>
            <el-button
            style="margin-left: 20px;"
            :autofocus="true"
            key ="plain"
            type=""
            @click="title_name(2)"
            text>
            综合考评
            </el-button>
        </span> -->
    </div>
</div>
<el-divider content-position="left" style="margin-left:20px;margin-right:20px;width:97%;">{{titlename}}</el-divider>
<div class="main">
    <!-- 主观数据评价页面 -->
    <div v-show="titleshow1">
        <span style="width:100%;display: flex;">
        <el-input
        v-model="group_leader"
        class="w-50 m-2"
        size="small"
        @input="groupleader()"
        @keyup.enter.native="create()"
        :disabled="group_input==false"
        placeholder="请输入组长姓名并且以 、分隔"
        
        />
        <el-button style="margin-top:4px" :disabled="created_show==false"  @click="create()">确定</el-button>
        <el-button style="margin-top:4px" :disabled="add_show==false" @click="add(1);">添加</el-button>
        <el-button style="margin-top:4px" :disabled="delete_show==false"  @click="delet()">删除</el-button>
        <el-button style="margin-top:4px" @click="check()">check</el-button>
    </span>
    <el-table class="animate__animated animate__bounceInLeft" v-if="zgtable_show" :data="tableData" style="width: 100%" border 
            :row-style="{height:0+'px'}"
            :cell-style="{padding:0+'px'}"
            :header-cell-style="{'text-align':'center','font-weight':'bold'}"
           
           >
    
    <el-table-column label="姓名" min-width="15">
        <template v-slot="scope" >
            <el-input
                style="padding:5px 0px 5px 0px"
                autosize
                type="textarea"
                v-model="scope.row.name"
                size="small" 
                />
            
        </template>
    </el-table-column>
    <el-table-column label="积极主动性"  min-width="8" >
        <el-table-column
                v-for="(i,index) in prop_name.splice(1,name_length)"
                
                min-width="10"
               :label="i.label"
              
               >
               
              <template v-slot="scope" >
                <el-input
                    autosize
                    type="textarea"
                    
                    @change="input_change(scope.row)"
                    v-model="scope.row[i.prop]"
                    size="small" 
                 
                    />
             
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
                <el-input
                   
                    autosize
                type="textarea"
                    
                    @change="input_change(scope.row)"
                    v-model="scope.row[i.prop]"
                    size="small" 
                    />
             
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
                <el-input
                    autosize
                type="textarea"
                    
                    @change="input_change(scope.row)"
                    v-model="scope.row[i.prop]"
                    size="small" 
                    />
               
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
                <el-input
                    autosize
                type="textarea"
                    
                    @change="input_change(scope.row)"
                    v-model="scope.row[i.prop]"
                    size="small" 
                    />
                
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
                <el-input
                    autosize
                type="textarea"
                   
                    @change="input_change(scope.row)"
                    v-model="scope.row[i.prop]"
                    size="small" 
                    />
               
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
                <el-input
                    autosize
                    type="textarea"
                   
                   @change="input_change(scope.row)"
                    v-model="scope.row[i.prop]"
                    size="small" 
                    :input-style="{'box-sizing':'inherit'}"
                    
                   
                    />
               
              </template>
              
        </el-table-column>
    </el-table-column>
    <el-table-column label="综合得分" min-width="14">
        <template v-slot="scope" >
            <el-input
                autosize
                type="textarea"
               
                v-model="scope.row.score"
                size="small" 
                />
           
        </template>
    </el-table-column>
    <el-table-column label="打分描述" min-width="40">
        <template v-slot="scope" >
            <el-input
                autosize
                type="textarea"
                v-model="scope.row.info"
                size="small" 
                />
               
        </template>
    </el-table-column>
    </el-table>
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
         </el-main>
    </el-container>
</el-container>

</template>
<script>
import { reactive, toRefs } from '@vue/reactivity'
import {onMounted} from "vue"
import axios from "axios"
// import { isDark } from '~/composables/dark'
import { setup } from 'xe-utils/ctor'
import { List } from 'echarts'
import Header from '../../components/Header.vue'
    export default{
        data(){
        return{
            showlist:"1",
            projects: [],
            last_week: {
                start: '',
                end: '',
                adminlist:[],
                usernameinfo:"",
                
            },
            show:1,
            admin:[],
            name:"",
            route_list:{
                "/qa/query_info/%E9%93%B6%E9%AD%82/bug":"银魂",
                "/qa/query_info/%E9%93%B6%E9%AD%82/issue":"银魂",
                // "/qa/query_info/%E9%93%B6%E9%AD%82/bug":"/qa/query_info/银魂/bug",
                "/qa/issueinfo":"2-1",
                "/qa/issueBug":"2-2",
                "/qa/qa_calendar":"3-1",
                "/qa/qa_zy":"3-2-1",
                "/qa/qa_issue":"3-2-2",
                "/qa/qa_zy_bug":"3-3-1",
                "/qa/qa_bug_issue":"3-3-2",
                "/qa/qa_member_list":"3-4",
                "/qa/issueokr":"3-5"
            }
        }
        },
        methods:{
        beforeunloadFn(e) {
            console.log('刷新或关闭')
            // ...
            }
    },
         created(){
        console.log(this.$route.path);
        this.showlist = this.route_list[this.$route.path]
    },
    mounted(){
        // axios({
        //     url: '/api/v1/UserInfo/'
        //   }).then(res => {
        //       if (res.data.user["group"] != "测试") {
        //           this.show=0
        //       }
        //       else{
        //           this.show=1
        //       }
        //   })
        setTimeout(() => {
            // console.log(this.$store.state.user_info);
            console.log("user2");
            if(this.$store.state.user_info){
                if (this.$store.state.user_info["group"] != "测试") {
                this.show = 0
            }
            }
            else{
                this.show = 1
            }
        }, 100);
        
        // if (this.$store.state.user_info["group"] != "测试") {
        //     this.show = 0
        // }
        // else{
        //     this.show = 1
        // }
        // this.adminlist()
        // console.log("home");
        // setTimeout(() => {
        //     var admin_list = ["1","2"]
        //     var cn_name =this.$store.state.user_info["cn_name"]
        //     console.log(admin_list);
        //     console.log(cn_name);
        // }, 300);
        
        // console.log(typeof admin_list);
        // if(this.$store.state.adminlist.indexof(this.$store.state.user_info["cn_name"]) != -1){
        //     this.show==1
        // }
        // else{
        //     this.show==2
        // }
        var lis = []
        // axios({
        //       url: '/api/v1/sidebar/',
        //       method:'get'
        //     }).then(res => {
        //         for (var i in res.data.data.projects){
                   
        //             if ( res.data.data.projects[i] !== "质量管理跟进项目需求"){
                        
        //                 lis.push(res.data.data.projects[i])
        //             }
                   
        //         }
              
        //      this.$data.projects = lis
        //     })
             
    },
        setup(){
            // 主观数据评价功能
            const get_data = reactive(
                    { 
                        group_title:["积极主动性", "学习能力", "沟通能力", "经验、常识", "业务能力", "创新性"],
                        group_leader:[],
                        name_length:[],
                        aa:[],
                        created_show:false,
                        add_show:false,
                        zgtable_show:false,
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
                        zg_loading:false
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
                var group_name = get_data.group_leader.split("、")
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
                nl = get_data.group_leader.split("、").length
                get_data.name_length=nl
                get_data.group_length=gl
                lis.unshift(first_prop)
                const prop_list = lis.concat(last_prop)
                get_data.prop_name=prop_list 
                add(20)

                // get_data.zg_loading=false
            }
            function add(val){
                
                for (var item=0;item<val;item++){
                    var data = {"name":"","score":"","info":""}
                    var group_name = get_data.group_leader.split("、")
                    for (var i in get_data.group_title){
                        for(var j in group_name){
                            data[get_data.group_title[i]+"_"+ group_name[j]]=[]
                        }
                    }
                    
                        get_data.tableData.push(data)
                }
                
                
                
            }
            function delet(){
                get_data.tableData.pop()
            }
            function check(){
                console.log(get_data.tableData);
            }
            function input_change(val){
                val["score"] = 0
                var score_1 = 0
                var score_2 = 0
                var len = get_data.group_leader.split("、").length
                var data_len = [
                    [],[],[],[],[],[]
                ]
                var flag=true
                for (var i in val){
                        if (i.indexOf("积极主动性") != -1 && val[i].length != 0){
                            data_len[0].push(parseFloat(val[i]))
                        }
                        else if (i.indexOf("学习能力") != -1 && val[i].length != 0){
                            data_len[1].push(parseFloat(val[i]))
                        }
                        else if (i.indexOf("沟通能力") != -1 && val[i].length != 0){
                            data_len[2].push(parseFloat(val[i]))
                        }
                        else if (i.indexOf("经验") != -1 && val[i].length != 0){
                            data_len[3].push(parseFloat(val[i]))
                        }
                        else if (i.indexOf("业务") != -1 && val[i].length != 0){
                            data_len[4].push(parseFloat(val[i]))
                        }
                        else if (i.indexOf("创新性") != -1){
                            if(val[i].length != 0){
                                data_len[5].push(parseFloat(val[i]))
                            }
                            else{
                                data_len[5].push(0)
                            }
                            
                        }
                        
                }
                for(var i=0;i<5;i++){
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
                 for (var i in data_len[5]){
                    score_2+=data_len[5][i]
                }
                 console.log(score_2)
                val.score = (score_1+score_2).toFixed(2)
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
            })
            function title_name(val){
                if (val == 0){
                    get_data.titlename="主观数据评价"
                    get_data.titleshow1=true
                    get_data.titleshow2=false
                    get_data.titleshow3=false
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
            return{
                ...toRefs(get_data),
                create,
                add,
                check,
                delet,
                input_change,
                title_name,
                groupleader,
               
            }
        }
    }

</script>
<style scoped>
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
    height:1000px;
    
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
.header{
    padding:0px
}
.aside{
    background-color: #00000070;
    
    /* min-height: 1000px; */
    
}
.menuitem{
    color:#fff;
    text-align: left;
    /* margin-left:10px */
}
.menutitle{
    float: left;
    color:#fff;
    /* margin-left:10px */
}
.router-link-active {
  text-decoration: none;
  color: yellow;
}
a{
  text-decoration: none;
  color: white;
}
</style>
