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
      <el-sub-menu v-if="zyshow==1" index="1">
        <template #title>
          
          <span  class="menutitle"><el-icon><FolderOpened /></el-icon>质控部 自研管控数据</span>
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
       <el-sub-menu index="2" v-if="fxshow==1">
        <template #title>
          
          <span class="menutitle"><el-icon><PartlyCloudy /></el-icon>发行项目</span>
        </template>
        <el-menu-item-group>
            <router-link v-if="fxshow1==1" to="/qa/issueinfo" >
                <el-menu-item index="2-1" class="menuitem"><el-icon><Folder /></el-icon>发行项目需求</el-menu-item>
            </router-link>
            <router-link v-if="fxshow2==1" to="/qa/issueBug">
                <el-menu-item index="2-2" class="menuitem"><el-icon><Folder /></el-icon> 发行项目BUG </el-menu-item>
            </router-link>
            <router-link v-if="fxshow2==1" to="/qa/issuesendemail">
                <el-menu-item index="2-3" class="menuitem"><el-icon><Folder /></el-icon> 项目邮件发送 </el-menu-item>
            </router-link>
            <router-link v-if="fxshow1==1" to="/qa/issueemailconfig">
                <el-menu-item index="2-4" class="menuitem"><el-icon><Folder /></el-icon> 项目邮件配置 </el-menu-item>
            </router-link>
        </el-menu-item-group>
      </el-sub-menu>
       <el-sub-menu index="3" v-if="memshow==1">
        <template #title>
          
          <span class="menutitle"><el-icon><Reading /></el-icon>质控部人员数据统计</span>
        </template>
        <el-menu-item-group>
            <router-link v-if="memshow1==1" to="/qa/qa_calendar">
                <el-menu-item  index="3-1" class="menuitem"><el-icon><Calendar /></el-icon>质控 QA排期表</el-menu-item>
            </router-link>
            <!-- <el-menu-item index="3-2" class="menuitem"><i class="el-icon-menu" style="margin-right:10px"></i>质控 测试需求</el-menu-item> -->
            <el-sub-menu v-if="memshow2==1" index="3-2" class="menuitem">
                <template #title>
                    <span  class="menutitle"><el-icon><Folder /></el-icon>质控 测试需求</span>
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
            <el-sub-menu v-if="memshow3==1" index="3-3">
                <template #title> 
                    <span  class="menutitle"><el-icon><Files /></el-icon>质控 BUG提交</span>
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
            <router-link v-if="memshow4==1" to="/qa/qa_member_list">
                <el-menu-item  index="3-4" class="menuitem"><el-icon><UserFilled /></el-icon>质控 人员统计</el-menu-item>
            </router-link>
            <router-link to="/qa/issueokr">
                <el-menu-item v-if="memshow5==1" index="3-5" class="menuitem"><el-icon><WindPower /></el-icon>质控 OKR数据库</el-menu-item>
            </router-link>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
    </el-aside>
    <el-container>
        <el-header class="header">
            <Header></Header>
        </el-header>
        <el-main class="main" style="padding:0px">
            <router-view v-slot="{ Component }">
                <keep-alive>
                <component :is="Component" />
                </keep-alive>
            </router-view>
         </el-main>
    </el-container>
</el-container>
</template>
<script>
import { List } from 'echarts'
import Header from '../../components/Header.vue'
import {hgaxios as axios} from "../../utils/request"
export default {
    setup() {
        
    },
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
            zyshow:0,
            fxshow:0,
            fxshow1:1,
            fxshow2:1,
            memshow:0,
            memshow1:1,
            memshow2:1,
            memshow3:1,
            memshow4:1,
            memshow5:1,
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
                "/qa/issuesendemail":"2-3",
                "/qa/issueemailconfig":"2-4",
                "/qa/qa_zy_bug":"3-3-1",
                "/qa/qa_bug_issue":"3-3-2",
                "/qa/qa_member_list":"3-4",
                "/qa/issueokr":"3-5"
            }
        }
        },
    components: {
            Header
        },
    methods:{
        beforeunloadFn(e) {
            console.log('刷新或关闭')
            // ...
            }
    },
    //  watch:{
    //     $route:{
    //     handler(){
    //       this.showlist = this.route_list[this.$route.path]
        
          
    //     }
    //   }
        
    // },
    created(){
        console.log(this.$route.path);
        this.showlist = this.route_list[this.$route.path]
        console.log(this.showlist);
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
                if (this.$store.state.user_info["group"] == "银魂") {
                    this.zyshow = 1
                
                }
                else if (this.$store.state.user_info["group"] == "游客组"){
                    this.memshow = 1
                    this.fxshow=1
                    this.memshow1=0
                    this.memshow2=0
                    this.memshow3=0
                    this.memshow4=0
                    this.fxshow1=0
                }
                else{
                    this.zyshow = 1
                    this.fxshow = 1
                    this.memshow = 1
                }
            }
            // else{
            //     this.zyshow = 1
            //     this.fxshow = 1
            //     this.memshow = 1
            // }
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
        axios({
              url: '/api/v1/sidebar/',
              method:'get'
            }).then(res => {
                for (var i in res.data.data.projects){
                   
                    if ( res.data.data.projects[i] == "银魂"){
                        
                        lis.push(res.data.data.projects[i])
                    }
                   
                }
              
             this.$data.projects = lis
            })
             
    },
    
        
    
}
</script>
<style scoped>
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