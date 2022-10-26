<template>
    <div style="background-color:#C0C0C020">
        <div class="fa">
            <div class="menu1">
                <div style="margin-top:20px" >
                    <svg t="1639463713396" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25300" width="20" height="20"><path d="M410.67 544H133.33A69.33 69.33 0 0 0 64 613.33v277.34A69.33 69.33 0 0 0 133.33 960h277.34A69.33 69.33 0 0 0 480 890.67V613.33A69.33 69.33 0 0 0 410.67 544zM402 842a40 40 0 0 1-40 40H182a40 40 0 0 1-40-40V662a40 40 0 0 1 40-40h180a40 40 0 0 1 40 40zM890.67 544H613.33A69.33 69.33 0 0 0 544 613.33v277.34A69.33 69.33 0 0 0 613.33 960h277.34A69.33 69.33 0 0 0 960 890.67V613.33A69.33 69.33 0 0 0 890.67 544zM882 842a40 40 0 0 1-40 40H662a40 40 0 0 1-40-40V662a40 40 0 0 1 40-40h180a40 40 0 0 1 40 40zM410.67 64H133.33A69.33 69.33 0 0 0 64 133.33v277.34A69.33 69.33 0 0 0 133.33 480h277.34A69.33 69.33 0 0 0 480 410.67V133.33A69.33 69.33 0 0 0 410.67 64zM402 362a40 40 0 0 1-40 40H182a40 40 0 0 1-40-40V182a40 40 0 0 1 40-40h180a40 40 0 0 1 40 40zM694.49 456.18a81.35 81.35 0 0 0 115 0l126.69-126.67a81.35 81.35 0 0 0 0-115L809.51 87.82a81.35 81.35 0 0 0-115 0L567.82 214.49a81.35 81.35 0 0 0 0 115z" fill="#858ea9" p-id="25301"></path></svg>
                </div>
                <div @click="apitest(icon[0])" style=";cursor:pointer">
                    <h5 style="margin-top:20px;margin-bottom:0px;font-size:12px">接口</h5>
                    <div  style="margin:0px 20px 0px 20px" >
                    <svg t="1639463954981" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26235" width="20" height="20"><path d="M512 898.844444A386.844444 386.844444 0 1 1 512 125.155556a386.844444 386.844444 0 0 1 0 773.688888z m0-56.888888A329.955556 329.955556 0 1 0 512 182.044444a329.955556 329.955556 0 0 0 0 659.911112z" p-id="26236" fill="#858ea9"></path><path d="M682.951111 338.488889c-40.334222-40.277333-101.546667-44.714667-136.476444-9.784889L453.802667 421.376c-18.147556 18.204444-25.429333 43.463111-22.755556 69.233778a23.779556 23.779556 0 0 0-38.968889-7.509334L330.296889 544.881778c-34.929778 34.929778-30.492444 96.142222 9.841778 136.533333 40.334222 40.277333 101.546667 44.714667 136.476444 9.784889l92.672-92.672c18.147556-18.204444 25.429333-43.463111 22.755556-69.233778a23.836444 23.836444 0 0 0 38.968889 7.509334l61.781333-61.781334c34.929778-34.929778 30.492444-96.142222-9.841778-136.533333z m-24.177778 102.513778l-61.781333 61.781333a23.779556 23.779556 0 0 0-6.769778 15.644444 113.095111 113.095111 0 0 0-30.776889-56.32 24.064 24.064 0 0 0-34.019555 33.962667c21.219556 21.219556 25.713778 52.565333 9.841778 68.494222L442.595556 657.180444c-15.928889 15.928889-47.217778 11.377778-68.494223-9.784888-21.219556-21.219556-25.713778-52.622222-9.784889-68.494223L426.097778 517.12a23.722667 23.722667 0 0 0 6.769778-15.644444c4.266667 20.138667 14.392889 39.992889 30.776888 56.32a24.064 24.064 0 0 0 34.019556-33.962667c-21.219556-21.219556-25.713778-52.565333-9.841778-68.494222l92.672-92.615111c15.928889-15.928889 47.217778-11.377778 68.494222 9.784888 21.219556 21.219556 25.713778 52.622222 9.784889 68.494223z" p-id="26237" fill="#858ea9"></path></svg>
                    </div>
                </div>
                <!-- <div @click="apitest(icon[1])" style=";cursor:pointer">
                    <h5 style="margin-top:20px;margin-bottom:0px;font-size:12px">自动化</h5>
                    <div  style="margin:0px 20px 0px 20px;cursor:pointer" @click="apitest(icon[1])">
                    <svg t="1639466522271" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30934" width="20" height="20"><path d="M716.8 648.533333v170.666667h-170.666667v-170.666667h170.666667z m136.533333 68.266667v68.266667h-102.4v-68.266667h102.4z m-375.466666 0v68.266667H170.666667v-68.266667h307.2z m0-290.133333v170.666666H307.2v-170.666666h170.666667z m-204.8 68.266666v68.266667H170.666667v-68.266667h102.4z m580.266666 0v68.266667h-307.2v-68.266667h307.2zM716.8 204.8v170.666667h-170.666667V204.8h170.666667z m136.533333 68.266667v68.266666h-102.4V273.066667h102.4zM477.866667 273.066667v68.266666H170.666667V273.066667h307.2z" fill="#858ea9" p-id="30935"></path></svg>
                    </div>
                </div> -->
            </div>
            <div class="menu2">
                <div class="api" id="api">
                    <h5 class="menu2title">接口测试</h5>
                    <h6 class="menu2h6" @click="jump(url[0])">接口测试</h6>
                    <!-- <h6 class="menu2h6" @click="jump(url[1])">接口测试报告</h6> -->
                </div>
                <div class="auto" id="auto">
                    <h5 class="menu2title">自动化测试</h5>
                    <h6 class="menu2h6" @click="alert();jump(url[2])">自动化测试</h6>
                    <h6 class="menu2h6" @click="alert();jump(url[2])">自动化测试报告</h6>
                </div>
            </div>
        <!-- <div class="left">
            <div>
                <el-menu
                style="min-height:1000px;padding:10px;background-color:#202a36"
                :default-openeds="showlist"
                class="el-menu-vertical-demo"
                
                >
                <div>
                    <h6 class="menu_title">自助测试平台</h6>
                </div>
                <el-submenu index="1" >
                    <template #title >
                        <div style="display:flex">
                            <span style="margin-left:15%">
                                <svg t="1638868083918" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3315" width="20" height="20"><path d="M997.76 494.72l-133.12-76.8 128-72.32a32 32 0 0 0 0-55.68L704 123.52a32 32 0 0 0-32 0L512 213.76 346.88 118.4a32 32 0 0 0-32 0L26.24 284.8a32 32 0 0 0 0 55.68l133.76 76.8-128 72.32a32 32 0 0 0 0 55.68L192 635.52v114.56a32 32 0 0 0 16 27.52l288 166.4a32 32 0 0 0 32 0l288-166.4a32 32 0 1 0-32-55.68L512 880l-256-147.84v-59.52l64 39.04a32 32 0 0 0 32 0L512 620.8l166.4 96a32 32 0 0 0 32 0l106.24-64 181.12-105.6a32 32 0 0 0 0-55.68zM512 288l224 128L512 547.2l-224-128L384 362.88z m172.8-99.84l224 128-108.8 64L576 250.88z m-353.92-5.12L448 250.88l-91.52 53.12L224 380.16 106.24 312.32zM114.56 517.12l108.8-64L320 512l128 71.68-108.8 64z m579.2 135.04L576 583.68 700.16 512l99.84-57.6 117.12 67.84z" fill="#1e2b3b" p-id="3316"></path></svg>
                            </span>
                            <span style="margin-left:10%" class="leftname">测试服务</span>
                        </div>
                    
                    </template>
                    <el-menu-item-group>
                        <el-menu-item  :class="{leftlist:show==0}" @click="leftlist(0);jump(url[0])" index="1-1"><h5 class="leftnameinfo">接口测试</h5></el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2" style="padding:0px">
                    <template #title style="padding:0px">
                  
                    <div style="display:flex">
                            <span style="margin-left:15%">
                                <svg t="1638868380931" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4333" width="20" height="20"><path d="M512.0181274414062 140.7236328125c-125.93957519531247 0-228.48156738281247 102.50326538085938-228.48156738281247 228.48074340820312 0 125.90167236328126 102.46701049804688 228.44448852539062 228.48156738281247 228.44448852539062 125.97665405273438 0 228.517822265625-102.54199218749999 228.517822265625-228.44448852539062 0-125.97747802734375-102.54116821289061-228.48074340820312-228.517822265625-228.48074340820312z" fill="#1e2b3b" p-id="4334"></path><path d="M688.11962890625 592.4355773925781c-48.68206787109375 38.48208618164063-109.30682373046875 62.32461547851563-176.10150146484375 62.32461547851563-66.79550170898438 0-127.38153076171872-23.915863037109375-176.17565917968753-62.32461547851563C243.4666748046875 651.2484130859374 179.14804077148432 754.5303344726562 170.31338500976562 874.1483764648438c32.343475341796875 4.396728515625001 89.89892578124999 9.127990722656248 172.03436279296875 9.127990722656248h339.1916198730469c82.17333984375 0 139.7650451660156-4.731262207031249 172.14724731445312-9.127990722656248-8.762145996093748-119.69384765625-73.07995605468749-222.89996337890622-165.5669860839844-281.71279907226557z" fill="#1e2b3b" p-id="4335"></path></svg>
                            </span>
                            <span style="margin-left:10%" class="leftname">测试报告</span>
                        </div>
                    </template>
                    <el-menu-item-group>
                    <el-menu-item :class="{leftlist:show==1}" @click="leftlist(1);jump(url[1])" index="2-1"><h5 class="leftnameinfo">测试报告</h5></el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                </el-menu>
            </div> -->
        <!-- </div> -->
        <div class="right">
                <router-view></router-view>      
        </div>
    </div>
    </div>
</template>
<script>
import { ElMessage } from 'element-plus'
export default {
    setup() {
        
    },
    data(){
        return{
            show:0,
            showlist:this.$store.state.apitest,
            left:{
                "_apitest":"api",
                "_apireport":"api",
                "_autotest":"auto"
                },
            url:{
                0:"_apitest",
                1:"_apireport",
                2:"_autotest",
                3:"_autotest"
            },
            icon:{
                0:"api",
                1:"auto"
            }

        }
    },
    methods:{
        jump(index){
            this.$router.push({path: '/test/automatic'+"/"+index})
        },
        apitest(index){
            for(var i in this.icon){
                document.getElementById(this.icon[i]).style.display = "none";
            }
            document.getElementById(index).style.display = "flex";
            
        },
        alert(){
            ElMessage('暂未开放')
        }
    },
    mounted(){
        var path_ = this.$route.path.split("/")[3]
        for(var i in this.left){
            if (i == path_){
                document.getElementById(this.left[path_]).style.display = "flex";
            }
        }
    },
    // watch:{
    //     $route:{
    //     handler(){
    //         var path_ = this.$route.path.split("/")[3]
    //         this.show = this.leftmemnu[path_]
    //         setTimeout(() => {
    //              this.showlist = this.leftmemnu_info[path_]
    //         }, 1000);
    //         console.log(this.show);
    //         console.log(this.showlist);
    //     }
    //   }
        
    // },
}
   

</script>
<style scoped>
.fa{
    min-height:1000px;
    display:flex;
    /* margin:10px */
}
.left{
    
    flex:0 0 13%;
}
.right{
    margin-left:10px;
    /* margin-right:10px; */
    flex:0 0 87%
}
.menu_title{
    font-size: 20px;
    margin: 15px;
    padding:15px;
    border-bottom:1px solid rgb(138, 138, 138);
    color:rgb(138, 138, 138);
    font-weight:bold
}
.active{
    color: #409EFF;
    background-color: #ecf5ff

}
.leftlist{
    color: #409EFF;
    background-color: #ecf5ff
}
.leftname{
    font-size: 17px;
    
}
.leftnameinfo{
    padding-left:9%;
    font-size:13px;
    margin:0px;
    font-weight: normal
}
.menu1{
    background:#202a36 ;
    color:#858ea9;
    border-right:1px solid #000;
    flex:0 0 3%;
    display: flex;
    flex-direction: column;
}
.menu2{
    flex:0 0 9.2%;
    background: #17222f;
}
.border{
    border-bottom: 1px solid rgba(255,255,255,.1);
    border:none;
}
/* .menuicon{
    border:none;
    background: transparent;
    padding:0px;
    width:20px;
    display: flex;
    justify-content: center;
} */
.menu2title{
    color:#fff;
    font-weight: normal;
    font-size: 15px;
    text-align: left;
    margin:20px 10px 10px 20px
}
.menu2h6{
    color: hsla(0,0%,100%,.65);
    text-align: left;
    margin:10px 10px 0px 25px;
    cursor:pointer;
    font-size:14px

}
h6:hover{
    color:#fff;
}
.api{
    display: none;
    flex-direction: column;
}
.auto{
    display: none;
    flex-direction: column;
}

</style>