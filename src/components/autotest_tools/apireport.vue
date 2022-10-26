<template>
<el-breadcrumb separator="/" style="margin-top:5px;margin-bottom:10px">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>测试服务</el-breadcrumb-item>
  <el-breadcrumb-item>接口报告</el-breadcrumb-item>
</el-breadcrumb>
<div class="master">
    <div style="display:flex;width:100%;flex-direction:column">
        <h5 style="font-weight:bolder;font-size:25px:color:#00000090;font-weight: normal;font-size:22px">接口测试报告</h5>
            <div style="width:200px;margin-bottom:20px;margin-left:30px;display:flex">
            <el-select v-model="apipage_size" placeholder="每页十条"  @change="apichange()">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            
            >
            </el-option>
            </el-select>
       </div>
       <div style="display:flex">
         <el-table v-loading="loading" element-loading-text="拼命加载中" :data="tableData"  :header-cell-style="{padding:'27px'}">
    <el-table-column  label="id" min-width="30">
         <template v-slot="scope">
            <h6 style="text-align:center;width:70px;padding:5px;font-size:14px;margin:0px;font-weight: normal">{{scope.row.id}}</h6>
        </template>
    </el-table-column>
    <el-table-column  label="接口名称" min-width="50">
         <template v-slot="scope">
            <h6 style="text-align:center;width:100px;padding:5px;margin-left:5px;margin:0px;font-weight: normal">{{scope.row.api_name}}</h6>
        </template>
    </el-table-column>
    <el-table-column prop="building" label="构建" min-width="50">
         <template v-slot="scope">
            <h6 style="text-align:center;width:90px;padding:5px;font-size:14px;margin:0px;font-weight: normal">{{scope.row.building}}</h6>
        </template>
    </el-table-column>
    <el-table-column label="结果" min-width="50" >
        <template v-slot="scope">
            <h6 style="text-align:center;width:70px;padding-top:2px;padding-bottom:2px;font-size:14px;margin:0px;font-weight: normal" :class="(scope.row.result=='成功')?'success':(scope.row.result=='失败')?'failuer':(scope.row.result=='正在构建')?'jenkinsbuild':(scope.row.result=='不稳定')?'unstable':(scope.row.result=='中止')?'aborted':'reselve'">{{scope.row.result}}</h6>
        </template>
    </el-table-column>
    <el-table-column label="开始时间" min-width="50" >
        <template v-slot="scope">
             <h6 style="text-align:center;width:150px;padding:5px;font-size:14px;margin:0px;font-weight: normal">{{scope.row.start_time}}</h6>
        </template>
    </el-table-column>
    <el-table-column prop="duration" label="构建耗时" min-width="50">
         <template v-slot="scope">
            <h6 style="text-align:center;width:90px;padding:5px;margin-left:13px;margin:0px;font-weight: normal">{{scope.row.duration}}</h6>
        </template>
    </el-table-column>
     <el-table-column
        label="测试报告"
        min-width="50">
        <template v-slot="scope">
        <el-button class="reselve" style="padding:5px;margin-left:30px;font-weight: normal"><a type="button" :href="scope.row.allure_url" style="color: white" target="_blank"><h6 style="color:#00000090;margin:0px;font-size:14px">查看</h6></a></el-button>
        </template>
    </el-table-column>
  </el-table>
       </div>
       <div class="block" style="margin-top:20px">
 
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:currentPage="apipage"
      :current-page= apipage
      :page-size= apipage_size
      layout="total, prev, pager, next"
      :total= api_sum
    >
    </el-pagination>
    </div>
       </div>
  

       

</div>
</template>
<script>
// import store from '../../../store/index'
import {hgaxios as axios} from "../../utils/request"
// import axios from "axios"
export default {
    name:'autofile',
    data(){
        return{
             loading: true,
             tableData:[],
             api_state:"",
             apipage:1,
             apipage_size:10,
              options: [{
            value:10,
            label:'每页10条'},{
            value:20,
            label:'每页20条'},{
            value:50,
            label:'每页50条'},{
            value:100,
            label:'每页100条'}],
            api_sum:0,
            buildcount:"",
            buildstate:"",
            bu:""
        
        }
    },
    

    beforeMount(){
        // this.$router.go(0)
        this.apiresponse()
    },
    methods:{
        build(){
             axios({
                    url: '/api/v1/JenkinsInfo/',
                    method:'get',
                    params:{
                            page:JSON.stringify(this.apipage),
                            page_size:JSON.stringify(this.apipage_size),
                        }
                    })
                    .then(res => {
                        this.buildstate=res.data.data.page_data[0].building
                        this.buildcount=res.data.data.page_data[0].id
                    })
        },
        apiresponse(){
            axios({
            url: '/api/v1/JenkinsInfo/',
            method:'get',
            params:{
                    page:JSON.stringify(this.apipage),
                    page_size:JSON.stringify(this.apipage_size),
                }
            })
            .then(res => {
                var newdata = res.data.data.page_data
                          
                    console.log(res);
                for (var i in newdata){
 
                    if (newdata[i].building == false){
                        newdata[i].building = '构建完成'
                    }
                    if (newdata[i].building == true){
                        newdata[i].building = '构建中'
                        newdata[i].result = '正在构建'
                    }
                    if (newdata[i].result == "SUCCESS"){
                        newdata[i].result = '成功'
                    }
                    if (newdata[i].result == "FAILURE"){
                        newdata[i].result = '失败'
                    }
                    if (newdata[i].result == "UNSTABLE"){
                        newdata[i].result = '不稳定'
                    }
                    if (newdata[i].result == "ABORTED"){
                        newdata[i].result = '中止'
                    }
                    if (newdata[i].api_name=="None"){
                        newdata[i].api_name="全链路"
                    }

                }
                this.api_state=newdata[0]["result"]
                this.api_sum = res.data.data["search_sum"]
                this.bu = res.data.data.page_data[0].id
                this.tableData = newdata
                this.loading = false
             
            })
        },
        apichange(){
            this.apipage = 1
            // console.log(this.apipage_size);
            this.loading=true
            this.apiresponse()
        },
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`)
            this.loading=true
            this.apiresponse()
        },
    },
    mounted(){
        // var interval = setInterval(()=>{
        //     if(this.$store.state.jenkinsbuild==="1"){
        //         this.build()
        //         if(this.buildstate=="true"){
        //             this.loading=true
        //             this.apiresponse()
        //             this.$store.state.jenkinsbuild==="0"
        //             clearInterval(interval);
        //         }

        //     }
        // }, 5000);
        // setInterval(() => {
        // var newapicount = this.api_state
        // var nr = this.$router.currentRoute._value.fullPath
        //     if (nr == "/autotest/infafile" && newapicount == "正在构建"){
        //             this.loading=true
        //             this.apiresponse()
        //             }
             
        // }, 1000);
        //  axios({
        //             url: '/api/v1/JenkinsInfo/',
        //             method:'get',
        //             params:{
        //                     page:1,
        //                     page_size:1
        //                 }
        //             })
        //             .then(res => {
        //                 console.log("ssss",res);
        //             })
        
        // setTimeout(() => {
        //     if (store.state.jenkinsbuild == "build_success"){
               
        //         // setInterval(() => {
                    
        //         // }, 1000);
        //     }
        // }, 3000);
        
        
    }
}
</script>
<style scoped>
.master{
    margin-left:10px;
    background-color: #fff;
    min-height: 975px;

}
.success{
    background-color:#73ff8290;
    border-radius: 30px;
    border: none;
    
}
.failuer{
    background-color:#ff4d4d90;
    border-radius: 30px;
    border: none;
    
}
.jenkinsbuild{
    background-color:#73ff8290;
    border-radius: 30px;
    border: none;
    
}
.unstable{
    background-color:#ff9b4a90;
    border-radius: 30px;
    border: none;
}
.aborted{
    background-color:#9c9c9c90;
    border-radius: 30px;
    border: none;
}
.has-gutter>>>.el-table_9_column_52{
    padding:0px
}
</style>