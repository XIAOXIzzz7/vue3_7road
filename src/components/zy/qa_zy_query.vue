//查询页面
<template>
<div class="divbackground">
  <h5 class="h5title" style="margin-top:0px">自研项目数据查询&对比</h5>
  
    <div class="row" align="left" style="margin:5px">
      <section class="col-lg-12">
          <div class="container-fluid">
              <div class="card direct-chat direct-chat-primary">
                <div class="card-body row">

                  <div class="col-sm-6">
                    <br>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label>项目1:</label>
                        <select class="form-control" v-model="project_one.project" @change="changeProject(1)">
                          <option id="choose_project_1" selected>请选择项目</option>
                          <option v-for="(project,index) in projects" :key="index">{{project}}</option>
                          <!-- {% for project in projects %}
                          <option>{{project}}</option>
                          {% endfor %} -->
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label>迭代:</label>
                        <select class="form-control" v-model="project_one.iteration" :disabled="project_one.iteration_disable" @change="changeIteration(1)">
                          <option>所有迭代</option>
                          <option v-for="iteration,index in project_one.iterations" :key="index">{{iteration}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <!-- select -->
                      <div class="form-group">
                        <label>开始时间:</label><br>
                        <input type="date" class="form-control" 
                        :min="project_one.start_min" 
                        :max="project_one.start_max" 
                        :value="project_one.start"  
                        :disabled="project_one.start_disable">
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <!-- select -->
                      <div class="form-group">
                        <label>结束时间:</label><br>
                        <input type="date" class="form-control" 
                        :min="project_one.end_min" 
                        :max="project_one.end_max" 
                        :value="project_one.end"  
                        :disabled="project_one.end_disable">
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label>查询自然周:</label>
                        <div class="row">
                          <select  class="form-control col-sm-3" style="margin-left:10px;width:763px" id="year_1" v-model="project_one.year" :disabled="project_one.year_disable" @change="changeYear(1)">
                            <option id="choose_year_1" >请选择年份</option>
                            <option v-for="year,index in project_one.year_list" :key="index">{{year}}年</option>
                          </select>
                          <div  class="col-sm-1"></div>
                          <select style="margin-left:10px;width:763px" class="form-control col-sm-3" id="month_1" v-model="project_one.month" :disabled="project_one.month_disable" @change="changeMonth(1)">
                            <option id="choose_month_1">请选择月份</option>
                            <option v-for="month,index in project_one.month_list" :key="index">{{month}}月</option>
                          </select>
                          <div class="col-sm-1"></div>
                          <select class="form-control col-sm-3" style="margin-left:10px;width:763px" id="week_1" v-model="project_one.week" :disabled="project_one.week_disable" @change="changeWeek(1)">
                            <option id="choose_week_1">请选择周数</option>
                            <option v-for="(week,index) in project_one.week_list" :key="index">第{{week}}周</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div style="margin-top:50px">
                      <router-link :to="'/qa/query_info/' + project_one.project + '/' + project_one.iteration + '/'+ project_one.start + '/'+ project_one.end ">
                      <el-button  id="query_1" class="btn bg-gradient-primary" :disabled="project_one.query_button" style="float: left;">查询</el-button>
                      </router-link>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <br>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label>项目2:</label>
                        <select class="form-control" id="project_2" v-model="project_two.project" @change="changeProject(2)">
                          <option id="choose_project_2" selected disabled>请选择项目</option>
                          <option v-for="(project,index) in projects" :key="index">{{project}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label>迭代:</label>
                        <select class="form-control" v-model="project_two.iteration"  :disabled="project_two.iteration_disable" @change="changeIteration(2)">
                          <option>所有迭代</option>
                          <option v-for="iteration,index in project_two.iterations" :key="index">{{iteration}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <!-- select -->
                      <div class="form-group">
                        <label>开始时间:</label><br>
                        <input type="date" class="form-control" 
                        :min="project_two.start_min" 
                        :max="project_two.start_max" 
                        :value="project_two.start"  
                        :disabled="project_two.start_disable">
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <!-- select -->
                      <div class="form-group">
                        <label>结束时间:</label><br>
                        <input type="date" class="form-control" 
                        :min="project_two.end_min" 
                        :max="project_two.end_max" 
                        :value="project_two.end"  
                        :disabled="project_two.end_disable">
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label>查询自然周:</label>
                        <div class="row">
                          <select class="form-control col-sm-3" id="year_2" style="margin-left:10px;width:763px" v-model="project_two.year" :disabled="project_two.year_disable" @change="changeYear(2)">
                            <option id="choose_year_2">请选择年份</option>
                            <option v-for="year,index in project_two.year_list" :key="index">{{year}}年</option>
                          </select>
                          <div class="col-sm-1"></div>
                          <select class="form-control col-sm-3" style="margin-left:10px;width:763px" id="month_2" v-model="project_two.month" :disabled="project_two.month_disable" @change="changeMonth(2)">
                            <option id="choose_month_2">请选择月份</option>
                            <option v-for="month,index in project_two.month_list" :key="index">{{month}}月</option>
                          </select>
                          <div class="col-sm-1"></div>
                          <select class="form-control col-sm-3" style="margin-left:10px;width:763px" id="week_2" v-model="project_two.week" :disabled="project_two.week_disable" @change="changeWeek(2)">
                            <option id="choose_week_2">请选择周数</option>
                            <option v-for="(week,index) in project_two.week_list" :key="index">第{{week}}周</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    &nbsp;&nbsp;
<!--                    <router-link :to="'/qa/query_info/' + project_two.project + '/' + project_two.iteration + '/'+ project_two.start + '/'+ project_two.end ">-->
                    <!-- <router-link to="/qa/query_info">
                    <button type="button" id="query_2" class="btn bg-gradient-primary" :disabled="project_two.query_button" style="float: left;">查询</button>
                    </router-link> -->
                  </div>

                  <div class="col-sm-12" style="text-align:center">
                    <br>
                    <br>
                    <button type="button" id="compared" class="btn bg-gradient-primary" disabled @click="compared()">项目对比</button>
                    <br>
                    <br>
                  </div>
                </div>
              </div>
          </div>
      </section>
    </div>
</div>
    
</template>

<script>
import {hgaxios as axios} from "../../utils/request"
// import axios from "axios"
export default {
    name: 'qa_zy_preview',
    // props:{
    //     projects: {
    //         type: Array
    //     }
    // },
    data() {
        return {
            projects:[],
            project_one:{
                project: "请选择项目",
                iterations:[],
                iteration: "所有迭代",
                start:"",
                start_min:"",
                start_max:"",
                end:"",
                end_min:"",
                end_max:"",
                iteration_disable:true,
                start_disable:true,
                end_disable:true,
                year_disable:true,
                month_disable:true,
                week_disable:true,
                year_list:[],
                month_list:[],
                week_list:[],
                year:'请选择年份',
                month:'请选择月份',
                week:'请选择周数',
                query_button:true
            },
            project_two:{
                project: "请选择项目",
                iterations:[],
                iteration: "所有迭代",
                start:"",
                start_min:"",
                start_max:"",
                end:"",
                end_min:"",
                end_max:"",
                iteration_disable:true,
                start_disable:true,
                end_disable:true,
                year_disable:true,
                month_disable:true,
                week_disable:true,
                year_list:[],
                month_list:[],
                week_list:[],
                year:'请选择年份',
                month:'请选择月份',
                week:'请选择周数',
                query_button:true
            },
        }
    },
    components: {
    },
    computed: {
    },
    methods: {
        changeProject(_id){
            let obj = _id==1?this.$data.project_one:this.$data.project_two
            if(obj.project != "请选择项目"){
                obj.iteration_disable=false
                obj.start_disable=false
                obj.end_disable=false
                obj.year_disable=false
                // obj.month=false
                // obj.week=false
                axios({
                    url: '/api/v1/IterationList/',
                    method:'get',
                    params:{project:obj.project}
                    }).then(res => {
                        obj.iterations=res.data.data.iteration_list
                        obj.iteration="所有迭代"
                    }
                )
                axios({
                    url: '/api/v1/IterationDate/',
                    method:'get',
                    params:{project:obj.project, iteration:"所有迭代"}
                    }).then(res => {
                        obj.start=res.data.data.start
                        obj.end=res.data.data.end
                        obj.start_min=res.data.data.start
                        obj.start_max=res.data.data.end
                        obj.end_min=res.data.data.start
                        obj.end_max=res.data.data.end
                        obj.query_button=false
                    }
                )
                axios({
                    url: '/api/v1/WeekChoose/',
                    method:'get',
                    params:{project:obj.project}
                    }).then(res => {
                        obj.year_list=res.data.data.year
                    }
                )
            }
        },
        changeIteration(_id){
            let obj = _id==1?this.$data.project_one:this.$data.project_two
            axios({
                    url: '/api/v1/IterationDate/',
                    method:'get',
                    params:{project:obj.project, iteration:obj.iteration}
                    }).then(res => {
                        obj.start=res.data.data.start
                        obj.end=res.data.data.end
                        obj.start_min=res.data.data.start
                        obj.start_max=res.data.data.end
                        obj.end_min=res.data.data.start
                        obj.end_max=res.data.data.end
                        obj.year_disable=true
                        obj.query_button=false
                    }
                )
        },
        changeYear(_id){
            let obj = _id==1?this.$data.project_one:this.$data.project_two
            if(obj.year != "请选择年份"){
                axios({
                    url: '/api/v1/WeekChoose/',
                    method:'get',
                    params:{project:obj.project, year:obj.year}
                    }).then(res => {
                  console.log(res.data);
                  obj.month_list=res.data.data.month
                        obj.month_disable=false
                        obj.iteration_disable=true
                        obj.start_disable=true
                        obj.end_disable=true
                        obj.query_button=true
                        obj.month="请选择月份"
                    }
                )
            }
            else{
                obj.month_disable=true
                obj.iteration_disable=false
                obj.start_disable=false
                obj.end_disable=false
                obj.query_button=false
                obj.month_disable=true
                obj.week_disable=true
                obj.month="请选择月份"
                obj.week="请选择周数"
                obj.iterations.pop("week")
                obj.iterations.pop("week")
            }
        },
        changeMonth(_id){
            let obj = _id==1?this.$data.project_one:this.$data.project_two
            if(obj.month != "请选择月份"){
                axios({
                    url: '/api/v1/WeekChoose/',
                    method:'get',
                    params:{project:obj.project, year:obj.year, month:obj.month}
                    }).then(res => {
                        obj.week_list=res.data.data.week
                        obj.week_disable=false
                        obj.week="请选择周数"
                    }
                )
            }
            else{
                obj.week="请选择周数"
                obj.week_disable=true
            }
        },
        changeWeek(_id){
            let obj = _id==1?this.$data.project_one:this.$data.project_two
            if(obj.week != "请选择周数"){
                axios({
                    url: '/api/v1/WeekChoose/',
                    method:'get',
                    params:{project:obj.project, year:obj.year, month:obj.month, week:obj.week}
                    }).then(res => {
                        obj.query_button=false
                        obj.start=res.data.data.date.start
                        obj.end=res.data.data.date.end
                        obj.iterations.push("week")
                        obj.iteration="week"
                    }
                )
            }
            else{
                obj.query_button=true
            }
        }
    },
    beforeCreate(){

            axios({
              url: '/api/v1/sidebar/',
              method:'get'
            }).then(res => {
              console.log(res);
              this.$data.projects = res.data.data.projects
              // this.$data.last_week.start = res.data.data.start
              // this.$data.last_week.end = res.data.data.end
            })
          }
    }
</script>

<style scoped>
.h5title{
    color:#00000097;
    text-align: left;
    font-size:18px;
    padding: 15px;
    margin: 20px;
    background:#fff;
    font-weight:bolder

}
/* .divbackground{
   background-color:	#C0C0C020	;
} */
</style>