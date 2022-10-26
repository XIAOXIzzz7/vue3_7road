<template>
  <div class="divbackground">
    <h5 class="h5title" style="margin-top:0px">{{title_str}}</h5>
    <div class="container-fluid" >

        <!--排期表&健康度-->
        <div class="row" style="margin:20px;margin-top:0px;background-color:white">
            <!-- <div v-if="false" class="col-md-12">
              <FullCalendar
                class='demo-app-calendar'
                :options='calendarOptions'
                >
                </FullCalendar>
            </div> -->

            <!-- <div  v-if="calendarShow" class="col-md-12">
                <br>
                <br>
            </div> -->

            <!--项目健康度-->
            <div style="display:flex">
                <div  class="info-box" style="flex:0 0 24%;min-height: 160px;box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);margin-left:20px">
                    <span class="info-box-icon bg-info elevation-1"><i class="fas fa-cog"></i></span>
                    <h4>项目健康度：<span class="badge bg-danger">高风险</span></h4>
                    <div class="info-box-content">
                    </div>
                </div>
                 <div  class="info-box"  style="flex:0 0 24%;min-height: 160px;box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);margin-left:20px">
                      <span class="info-box-icon bg-success elevation-1"><i class="fas fa-cog"></i></span>
                      <div >
                        <h4>需求健康度：<span class="badge bg-warning">中风险</span></h4>
                        <div class="main">
                          <span class="badge bg-warning" style="display: inline;float:left">延期总时间 5天: 中风险</span><br>
                          <span class="badge bg-success" style="display: inline;float:left">新增需求总数 1个: 低风险</span><br>
                        </div>
                      </div>
                  </div>
                  <div  class="info-box"  style="flex:0 0 24%;min-height: 160px;box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);margin-left:20px">
                    <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-bug"></i></span>
                    <div class="info-box-content">
                      <h4>缺陷健康度：<span class="badge bg-danger">高风险</span></h4>
                        <div class="main">
                          <span class="badge bg-danger" style="display: inline;float:left">S级: 总数2个 / 遗留1个</span><br>
                          <span class="badge bg-warning" style="display: inline;float:left">A级: 总数3个 / 遗留1个</span><br>
                          <span class="badge bg-primary" style="display: inline;float:left">B级: 总数10个 / 遗留3个</span><br>
                          <span class="badge bg-success" style="display: inline;float:left">C级: 总数7个 / 遗留2个</span><br>
                        </div>
                    </div>
                  </div>
                  <div  class="info-box"  style="flex:0 0 24%;min-height: 160px;box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);margin-left:20px">
                      <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-bug"></i></span>
                      <div class="info-box-content">
                        <h4>专项健康度：<span class="badge bg-success">低风险</span></h4>
                        <div class="main"> 
                            <span class="badge bg-success" style="display: inline;float:left">弱网测试: 低风险</span><br>
                            <span class="badge bg-success" style="display: inline;float:left">服务器压测: 低风险</span><br>
                            <span class="badge bg-success" style="display: inline;float:left">热更新测试: 低风险</span><br>
                            <span class="badge bg-success" style="display: inline;float:left">客户端性能: 低风险</span><br>
                        </div>
                      </div>
                  </div>

<!--                <div class="info-box" style="min-height: 150px">-->
              <!-- <el-row :gutter="20">
                <el-col :span="6" style="box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);">
                    <div  class="info-box" style="min-height: 160px">
                      <span class="info-box-icon bg-info elevation-1"><i class="fas fa-cog"></i></span>
                      <h4>项目健康度：<span class="badge bg-danger">高风险</span></h4>
                      <div class="info-box-content">
                      </div>
                    </div>
                </el-col>


                <el-col :span="6" style="box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);margin-ledt:10px">
                    <div  class="info-box"  style="min-height: 160px">
                      <span class="info-box-icon bg-success elevation-1"><i class="fas fa-cog"></i></span>
                      <div class="info-box-content">
                        <h4>需求健康度：<span class="badge bg-warning">中风险</span></h4>
                        <span class="badge bg-warning" style="display: inline">延期总时间 5天: 中风险</span><br>
                        <span class="badge bg-success" style="display: inline">新增需求总数 1个: 低风险</span><br>
                      </div>
                    </div>
                </el-col>

                <el-col :span="6" style="border: none;box-shadow: none;box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);">
                    <div  class="info-box"  style="min-height: 160px">
                      <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-bug"></i></span>
                      <div class="info-box-content">
                        <h4>缺陷健康度：<span class="badge bg-danger">高风险</span></h4>
                        <span class="badge bg-danger" style="display: inline">S级: 总数2个 / 遗留1个</span><br>
                        <span class="badge bg-warning" style="display: inline">A级: 总数3个 / 遗留1个</span><br>
                        <span class="badge bg-primary" style="display: inline">B级: 总数10个 / 遗留3个</span><br>
                        <span class="badge bg-success" style="display: inline">C级: 总数7个 / 遗留2个</span><br>
                      </div>
                    </div>
                </el-col>

                <el-col :span="6">
                    <div  class="info-box"  style="min-height: 160px;box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);">
                      <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-bug"></i></span>
                      <div class="info-box-content">
                        <h4><span>专项健康度:</span><span class="badge bg-success">低风险</span></h4>
                        <span class="badge bg-success" style="display: inline">弱网测试: 低风险</span><br>
                        <span class="badge bg-success" style="display: inline">服务器压测: 低风险</span><br>
                        <span class="badge bg-success" style="display: inline">热更新测试: 低风险</span><br>
                        <span class="badge bg-success" style="display: inline">客户端性能: 低风险</span><br>
                      </div>
                    </div>
                </el-col>
              </el-row> -->


<!--                    <span class="info-box-icon bg-info elevation-1"><i class="fas fa-cog"></i></span>-->
<!--                    <div class="info-box-content">-->
<!--                        <span class="info-box-text">项目健康度:</span>-->
<!--                        <h3><span class="badge bg-danger">高风险</span></h3>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

            <!--需求健康度-->
<!--            <div class="col-md-3" align="left">-->


<!--                <div class="info-box mb-3" style="min-height: 150px">-->

<!--                    <span class="info-box-icon bg-success elevation-1"><i class="fas fa-cog"></i></span>-->
<!--                    <div class="info-box-content">-->
<!--                        <span class="info-box-text">需求健康度:&nbsp;&nbsp;<span class="badge bg-warning">中风险</span></span>-->
<!--                        <span class="badge bg-warning" style="display: inline">延期总时间 5天: 中风险</span><br>-->
<!--                        <span class="badge bg-success" style="display: inline">新增需求总数 1个: 低风险</span><br>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

            <!--缺陷健康度-->
<!--            <div class="col-md-3" align="left">-->



<!--                <div class="info-box mb-3" style="min-height: 150px">-->
<!--                    <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-bug"></i></span>-->
<!--                    <div class="info-box-content">-->
<!--                        <span class="info-box-text">缺陷健康度:&nbsp;&nbsp;<span class="badge bg-danger">高风险</span></span>-->
<!--                        <span class="badge bg-danger" style="display: inline">S级: 总数2个 / 遗留1个</span><br>-->
<!--                        <span class="badge bg-warning" style="display: inline">A级: 总数3个 / 遗留1个</span><br>-->
<!--                        <span class="badge bg-primary" style="display: inline">B级: 总数10个 / 遗留3个</span><br>-->
<!--                        <span class="badge bg-success" style="display: inline">C级: 总数7个 / 遗留2个</span><br>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

            <!--专项健康度-->
<!--              <div class="col-md-3" align="left">-->

<!--          <el-card>-->
<!--            <template #header>-->
<!--              <div >-->
<!--                <h3>专项健康度：</h3>-->
<!--                <h3><span class="badge bg-success">低风险</span></h3>-->
<!--              </div>-->
<!--            </template>-->
<!--            <div  class="info-box"  style="min-height: 150px">-->
<!--              <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-bug"></i></span>-->
<!--              <div class="info-box-content">-->
<!--                <span class="badge bg-success" style="display: inline">弱网测试: 低风险</span><br>-->
<!--                <span class="badge bg-success" style="display: inline">服务器压测: 低风险</span><br>-->
<!--                <span class="badge bg-success" style="display: inline">热更新测试: 低风险</span><br>-->
<!--                <span class="badge bg-success" style="display: inline">客户端性能: 低风险</span><br>-->
<!--              </div>-->
<!--            </div>-->
<!--          </el-card>-->
<!--                <div class="info-box mb-3" style="min-height: 150px">-->
<!--                    <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-bug"></i></span>-->
<!--                    <div class="info-box-content">-->
<!--                        <span class="info-box-text">专项健康度:&nbsp;&nbsp;<span class="badge bg-success">低风险</span></span>-->
<!--                        <span class="badge bg-success" style="display: inline">弱网测试: 低风险</span><br>-->
<!--                        <span class="badge bg-success" style="display: inline">服务器压测: 低风险</span><br>-->
<!--                        <span class="badge bg-success" style="display: inline">热更新测试: 低风险</span><br>-->
<!--                        <span class="badge bg-success" style="display: inline">客户端性能: 低风险</span><br>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </div>

        <!--SVN重复提单-->
        <h5 class="h5title">{{start}} / {{end}}: SVN提单量</h5>
        <div class="col-md-12" align="left" style="width:98.6%;margin:12px">
            <div class="card card-success">
                
                <div class="card-body">
                    <div class="row">
                        <!--程序重复提单-->
                      <el-row :gutter="20">
                        <el-col :span="8">
                          <div>
                            <el-card>
                              <template #header>
                                <div >
                                  <h3>程序SVN提单量：</h3>
                                  <h5>日期：{{start}} / {{end}}</h5>
                                </div>
                              </template>
                              <div>
                                <h5>10 条</h5>
                              </div>
                            </el-card>
                          </div>
                        </el-col>


                        <el-col :span="8">
                          <div>
                            <el-card>
                              <template #header>
                                <div >
                                  <h3>美术SVN提单量：</h3>
                                  <h5>日期：{{start}} / {{end}}</h5>
                                </div>
                              </template>
                              <div>
                                <h5>20 条</h5>
                              </div>
                            </el-card>
                          </div>
                        </el-col>


                          <el-col :span="8">
                            <div>
                              <el-card>
                                <template #header>
                                  <div >
                                    <h3>策划SVN提单量：</h3>
                                    <h5>日期：{{start}} / {{end}}</h5>
                                  </div>
                                </template>
                                <div>
                                  <h5>30 条</h5>
                                </div>
                              </el-card>
                            </div>
                          </el-col>
                        </el-row>

<!--                        <div class="col-12 col-sm-6 col-md-4">-->
<!--                            <div class="small-box">-->
<!--                                <div class="inner">-->
<!--                                    <h4>程序SVN提单量:</h4>-->
<!--                                    <p>日期：{{start}} / {{end}}</p>-->
<!--                                    <h5>10 条</h5>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

                        <!--美术重复提单-->
<!--                        <div class="col-12 col-sm-6 col-md-4">-->
<!--                            <div class="small-box">-->
<!--                                <div class="inner">-->
<!--                                    <h4>美术SVN提单量:</h4>-->
<!--                                    <p>日期：{{start}} / {{end}}</p>-->
<!--                                    <h5>20 条</h5>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

                        <!--策划重复提单-->
<!--                        <div class="col-12 col-sm-6 col-md-4">-->
<!--                            <div class="small-box">-->
<!--                                <div class="inner">-->
<!--                                    <h4>策划SVN提单量:</h4>-->
<!--                                    <p>日期：{{start}} / {{end}}</p>-->
<!--                                    <h5>30 条</h5>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
                    </div>
                </div>
                <br>
            </div>
        </div>

        <!--需求状况汇总-->
        <h5 class="h5title">{{start}} / {{end}}: 需求状况汇总</h5>
        <div class="col-md-12" align="left" style="width:98.6%;margin:12px">
            <div class="card card-success">
                <div class="card-body">
                  <el-row :gutter="20">
                    <el-col>
                      <issueStateSummary v-if="issue_state_summary_data.version" name="当前版本" :start="start" :end="end" :data="issue_state_summary_data.version"></issueStateSummary>
                      <issueStateSummary v-if="issue_state_summary_data.next_version" name="下个版本" :start="start" :end="end" :data="issue_state_summary_data.next_version"></issueStateSummary>
                      <issueStateSummary v-if="issue_state_summary_data.version_delay" name="当前版本延期项" :start="start" :end="end" :data="issue_state_summary_data.version_delay"></issueStateSummary>
                      <issueStateSummary v-if="issue_state_summary_data.next_version_delay" name="下版本延期项" :start="start" :end="end" :data="issue_state_summary_data.next_version_delay"></issueStateSummary>
                    </el-col>
                  </el-row>




<!--                  <div>-->
<!--                    <el-space>-->
<!--                      <el-card v-for="datalist in all_demand" :key="datalist">-->
<!--                        <template #header>-->
<!--                          <h3>{{datalist.name}}:</h3>-->
<!--                          <h4>日期： {{datalist.date}}</h4>-->
<!--                        </template>-->
<!--                        <div></div>-->
<!--                      </el-card>-->
<!--                    </el-space>-->
<!--                  </div>-->
                </div>
                <br>
            </div>
        </div>

        <!--需求研发进度-->
        <h5 class="h5title">{{start}} / {{end}}: 需求研发进度</h5>
        <div class="col-md-12" align="left" style="width:98.6%;margin:12px">
            <div class="card card-success">
                <div class="card-body">
                    <div class="row">
                        <issueCard 
                            v-if="loading"
                            name="需求总数" 
                            :start="start" 
                            :end="end" 
                            :num="page_info.dev_progress_dict.功能开发需求总数" 
                            :button="true" 
                            :table_dict="page_info.table_info"
                            table_type="issue"
                            
                            :html="page_info.issue_html.功能开发需求总数"
                            >
                        </issueCard>
                        <issueCard
                            v-if="loading"
                            name="原有需求数" 
                            :start="start" 
                            :end="end" 
                            :num="page_info.dev_progress_dict.功能开发需求总数" 
                            :button="false"
                            :html="page_info.issue_html.功能开发需求总数">
                        </issueCard>
                        <issueCard 
                            v-if="loading"
                            name="新增需求数" 
                            :start="start" 
                            :end="end" 
                            :num="page_info.dev_progress_dict.新增功能需求数" 
                            :button="false"
                            :html="page_info.issue_html.新增功能需求数">
                        </issueCard>
                        <issueCard 
                            v-if="loading"
                            name="需求Delay数" 
                            :start="start" 
                            :end="end" 
                            :num="page_info.dev_progress_dict.功能需求Delay数" 
                            :button="false" 
                            color="color:red"
                            :html="page_info.issue_html.功能需求Delay数">
                        </issueCard>
                        <issueCard 
                            v-if="loading"
                            name="需求取消数" 
                            :start="start" 
                            :end="end" 
                            :num="page_info.dev_progress_dict.功能需求取消数" 
                            :button="false"
                            :html="page_info.issue_html.功能需求取消数">
                        </issueCard>
                        <issueCard
                            v-if="loading"
                            name="需求已完成数" 
                            :start="start" 
                            :end="end" 
                            :num="page_info.dev_progress_dict.功能需求已完成数" 
                            :button="false"
                            :html="page_info.issue_html.功能需求已完成数">
                        </issueCard>
                        <div class="col-12 col-sm-6 col-md-12">
                            <div class="chart" id="dev_progress_chart" style="height:400px; min-height:400px"></div>
                        </div>
                    </div>
                </div>
                <br>

            </div>
        </div>

        <!--每日需求统计-->
         <h5 class="h5title">{{start}} / {{end}}: 每日需求统计 </h5>
        <div class="col-md-12">
            <div class="card card-success" style="width:98.6%;margin:12px">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-12">
                            <div class="chart" id="issue_day_chart" style="height:400px; min-height:400px"></div>
                        </div>
                    </div>
                </div>
                <br>
            </div>
        </div>

        <!--BUG总数统计-->
        <h5 class="h5title">{{start}} / {{end}}: BUG总数统计</h5>
        <div class="col-md-12" align="left" style="width:98.6%;margin:12px">
            <div class="card card-success">
                <div class="card-body">
                    <div class="row">
                        <issueBugCard 
                            v-if="loading"
                            name="BUG总数" 
                            :start="start" 
                            :end="end" 
                            :num="page_info.bug_statistics_dict.BUG总数.sum" 
                            :button="true" 
                            :table_dict="page_info.table_info"
                            table_type="bug"
                            fields='["id","title","severity","reporter","created","closed","status", "url"]'
                            :html="page_info.bug_html.BUG总数"
                            >
                        </issueBugCard>
                        <issueBugCard 
                            v-if="loading"
                            name="新增BUG数" 
                            :start="start" 
                            :end="end" 
                            :num="page_info.bug_statistics_dict.新增BUG数.sum" 
                            :button="false"
                            :html="page_info.bug_html.新增BUG数">
                            >
                        </issueBugCard>
                        <issueBugCard 
                            v-if="loading"
                            name="遗留BUG数" 
                            :start="start" 
                            :end="end" 
                            :num="page_info.bug_statistics_dict.遗留BUG数.sum" 
                            :button="false"
                            :html="page_info.bug_html.遗留BUG数">
                        </issueBugCard>
                        <issueBugCard 
                            v-if="loading"
                            name="关闭BUG数" 
                            :start="start" 
                            :end="end" 
                            :num="page_info.bug_statistics_dict.关闭BUG数.sum" 
                            :button="false" 
                            :html="page_info.bug_html.关闭BUG数">
                        </issueBugCard>
                        <issueBugCard 
                            v-if="loading"
                            name="BUG回归失败" 
                            :start="start" 
                            :end="end" 
                            :num="page_info.bug_statistics_dict.BUG回归失败.sum" 
                            :button="false"
                            :html="page_info.bug_html.BUG回归失败">
                        </issueBugCard>
                        <issueBugCard 
                            v-if="loading"
                            name="BUG重启" 
                            :start="start" 
                            :end="end" 
                            :num="page_info.bug_statistics_dict.BUG重启.sum" 
                            :button="false"
                            :html="page_info.bug_html.BUG重启">
                        </issueBugCard>
                        <!--功能需求开发进度图表-->
                        <div class="col-12 col-sm-6 col-md-12">
                            <div class="chart" id="bug_statistics_chart" style="height:400px; min-height:400px"></div>
                        </div>
                    </div>
                </div>
                <br>

            </div>
        </div>

        <!--BUG所在模块分布统计-->
        <h5 class="h5title">{{start}} / {{end}}: BUG所在模块分布统计 </h5>
        <div class="col-md-12" style="width:98.6%;margin:12px">
            <div class="card card-success" >
                <div class="card-body">
                       <el-row :gutter="20">
                         <el-col :span="8">
                           <h4>总BUG数模块分布 TOP5：</h4>
                           <br>
                           <table class="table table-bordered">
                             <thead>
                             <tr>
                               <th style="width: 10%">#</th>
                               <th style="width: 70%">模块名</th>
                               <th style="width: 20%">BUG数</th>
                             </tr>
                             </thead>
                             <tbody>
                             <tr>
                               <td>1.</td>
                               <td>UI界面</td>
                               <td>20个</td>
                             </tr>
                             <tr>
                               <td>2.</td>
                               <td>副本战斗</td>
                               <td>15个</td>
                             </tr>
                             <tr>
                               <td>3.</td>
                               <td>登录</td>
                               <td>12个</td>
                             </tr>
                             <tr>
                               <td>4.</td>
                               <td>注册帐号</td>
                               <td>10个</td>
                             </tr>
                             <tr>
                               <td>5.</td>
                               <td>SDK</td>
                               <td>5个</td>
                             </tr>
                             </tbody>
                           </table>
                         </el-col>
                         <el-col :span="8">
                           <h4>S级A级BUG模块分布 TOP5：</h4>
                           <br>
                           <table class="table table-bordered">
                             <thead>
                             <tr>
                               <th style="width: 10%">#</th>
                               <th style="width: 70%">模块名</th>
                               <th style="width: 20%">BUG数</th>
                             </tr>
                             </thead>
                             <tbody>
                             <tr>
                               <td>1.</td>
                               <td>UI界面</td>
                               <td>20个</td>
                             </tr>
                             <tr>
                               <td>2.</td>
                               <td>副本战斗</td>
                               <td>15个</td>
                             </tr>
                             <tr>
                               <td>3.</td>
                               <td>登录</td>
                               <td>12个</td>
                             </tr>
                             <tr>
                               <td>4.</td>
                               <td>注册帐号</td>
                               <td>10个</td>
                             </tr>
                             <tr>
                               <td>5.</td>
                               <td>SDK</td>
                               <td>5个</td>
                             </tr>
                             </tbody>
                           </table>
                         </el-col >

                         <el-col :span="8">
                           <h4>遗留BUG数模块分布 TOP5：</h4>
                           <br>
                           <table class="table table-bordered">
                             <thead>
                             <tr>
                               <th style="width: 10%">#</th>
                               <th style="width: 70%">模块名</th>
                               <th style="width: 20%">BUG数</th>
                             </tr>
                             </thead>
                             <tbody>
                             <tr>
                               <td>1.</td>
                               <td>UI界面</td>
                               <td>20个</td>
                             </tr>
                             <tr>
                               <td>2.</td>
                               <td>副本战斗</td>
                               <td>15个</td>
                             </tr>
                             <tr>
                               <td>3.</td>
                               <td>登录</td>
                               <td>12个</td>
                             </tr>
                             <tr>
                               <td>4.</td>
                               <td>注册帐号</td>
                               <td>10个</td>
                             </tr>
                             <tr>
                               <td>5.</td>
                               <td>SDK</td>
                               <td>5个</td>
                             </tr>
                             </tbody>
                           </table>
                         </el-col>
                       </el-row>






                    </div>
                </div>
                <br>
            </div>
        </div>

        <!--BUG详细数据统计-->
        <h5 class="h5title">{{start}} / {{end}}: BUG详细数据统计</h5>
        <div class="col-md-12" style="width:98.6%;margin:12px">
                <div class="card card-success">
                    <div class="card-body">
                        <div class="row">

                            <!--BUG分级统计-->
                            <div class="col-12 col-sm-6 col-md-6">
                                <div class="chart" id="bug_level_chart" style="height:400px; min-height:400px"></div>
                            </div>

                            <!--BUG每日趋势统计-->
                            <div class="col-12 col-sm-6 col-md-6">
                                <div class="chart" id="bug_day_chart" style="height:400px; min-height:400px"></div>
                            </div>

                            <!--空行-->
                            <div class="col-12 col-sm-6 col-md-12">&nbsp;</div>

                            <!--BUG每日遗留统计-->
                            <div class="col-12 col-sm-6 col-md-6">
                                <div class="chart" id="bug_day_yl_chart" style="height:400px; min-height:400px"></div>
                            </div>

                            <!--BUG每日等级统计-->
                            <div class="col-12 col-sm-6 col-md-6">
                                <div class="chart" id="bug_day_level_chart" style="height:400px; min-height:400px"></div>
                            </div>

                        </div>
                    </div>
                    <br>

                </div>
        </div>

    </div>
<!--    </div>-->
</template>

<script>
// import axios from "axios"
import {hgaxios as axios} from "../../utils/request"
import FullCalendar from '@fullcalendar/vue3'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import issueCard from "./issue_card.vue"
import issueStateSummary from './issue_state_summary.vue'
import issueBugCard from './issue_bug_card.vue'

let charObj
export default {
    name:"qa_zy_query_info",
    components: {
        FullCalendar, issueStateSummary, issueBugCard, issueCard
    },
    data(){
        return {
            project:"",
            iteration: "",
            start: "",
            end: "",
            calendarShow:false,
            title:"",
            issue_state_summary_data:{},
            page_info:{},
            loading:false,
            calendarOptions: {
                buttonText: {
                    today: '今天',
                    month: '月视图',
                    prev: '上月排期',
                    next: '下月排期',
                },
                schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
                now: '2021-07-13',
                plugins: [
                resourceTimelinePlugin,
                interactionPlugin
                ],
                locale: 'zh-cn',
                slotLabelFormat: [
                    // {month: "numeric"},
                    {day: 'numeric'},
                    {weekday: 'short'},
                ],
                dayMinWidth: 100,
                editable: true,
                selectable: true,
                aspectRatio: 5,
                scrollTime: '00:00',
                fixedWeekCount: false,
                initialView: 'resourceTimelineMonth',
                headerToolbar: {
                left: 'prev,next',
                center: 'title',
                right: 'resourceTimelineMonth'
                },
                navLinks: false,
                resourceAreaWidth: '8%',
                resourceAreaHeaderContent: '成员',
                resources: [],
                events: [],
              //   all_demand:[
              //     {name:'当前版本',date:'',data:[]},
              //     {name:'下个版本',date: '',data:[]},
              //     {name:'当前版本延期项',date: '',data:[]},
              //     {name:'当前版本',date: '',data:[]},
              //   ],
              // data:[
              //   {id:1,name:'UI界面',number:"20个"},
              //   {id:2,name:'副本战斗',number:"15个"},
              //   {id:3,name:'登录',number:"12个"},
              //   {id:4,name:'注册账号',number:"10个"},
              //   {id:5,name:'SDK',number:"5个"},
              // ]
            },
      }
    },
    computed: {
            title_str:{
                get(){
                    let iteration_name = ''
                    if(this.$data.iteration == "last_week"){
                        iteration_name = "最近一周"
                    }
                    else if(this.$data.iteration == "week"){
                        iteration_name = "所有迭代"
                    }
                    else{
                        iteration_name = this.$data.iteration
                    }
                    return this.$data.project+ ' ' + iteration_name + ' ' + this.$data.start  + '/' + this.$data.end +  ' 质量数据'
                }  
            },
    },
    watch: {
            $route(to){
                this.$data.project = this.$route.params.project
                this.$data.iteration = this.$route.params.iteration
                this.$data.start = this.$route.params.start
                this.$data.end = this.$route.params.end
                this.$data.calendarShow = this.$route.params.iteration == 'last_week'? true:false
                if(to.params.iteration == 'last_week'){
                    axios({
                        url: '/api/v1/QueryInfo/',
                        method:'get',
                        params:{
                            project:this.$route.params.project, 
                            iteration:this.$route.params.iteration,
                            start:this.$route.params.start,
                            end:this.$route.params.end,
                            }
                        }).then(res => {
                      console.log(res);
                      this.$data.page_info = res.data.data
                            // this.$data.calendarOptions.resources = res.data.data.full_calendar_data.resources
                            // this.$data.calendarOptions.events = res.data.data.full_calendar_data.events
                            this.$data.calendarOptions.resources = []
                            this.$data.calendarOptions.events = []
                        }
                    )
                }
            },
            page_info(){
                this.$data.loading = true
                console.log(this.$data.page_info);
                const version = {
                    len:0,
                    data:[
                        {name:"需求总数",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.功能开发需求总数},
                        {name:"需求新数",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                        {name:"开发需求",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                        {name:"策划验收",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                        {name:"开发测试",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                        {name:"主干测试",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                        {name:"发布测试",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                        {name:"专项测试",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数}
                    ]
                }
                const next_version = {
                    len:0,
                    data:[
                        {name:"需求总数",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.功能开发需求总数},
                        {name:"需求新数",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                        {name:"开发需求",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                        {name:"策划验收",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                        {name:"开发测试",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                        {name:"主干测试",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                        {name:"发布测试",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                        {name:"专项测试",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数}
                    ]
                }
                const version_delay = {
                    len:0,
                    data:[
                        {name:"开发延期（开发中）",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.功能开发需求总数},
                        {name:"测试延期（测试中）",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                        {name:"配置延期（进行中）",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                        {name:"美术延期（制作中）",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                    ]
                }
                const next_version_delay = {
                    len:0,
                    data:[
                        {name:"开发延期（开发中）",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.功能开发需求总数},
                        {name:"测试延期（测试中）",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                        {name:"配置延期（进行中）",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                        {name:"美术延期（制作中）",
                        class: "badge badge-success",
                        num: this.$data.page_info.dev_progress_dict.新增功能需求数},
                    ]
                }
                version.len = version.data.length
                next_version.len = next_version.data.length
                version_delay.len = version_delay.data.length
                next_version_delay.len = next_version_delay.data.length
                this.$data.issue_state_summary_data = {version:version, next_version:next_version, version_delay:version_delay, next_version_delay:next_version_delay}
                this.drawLine(this.$data.page_info.dev_progress_chart, "dev_progress_chart")
                this.drawLine(this.$data.page_info.issue_day_chart, "issue_day_chart")
                this.drawLine(this.$data.page_info.bug_statistics_chart, "bug_statistics_chart")
                this.drawLine(this.$data.page_info.bug_level_chart, "bug_level_chart")
                this.drawLine(this.$data.page_info.bug_day_chart, "bug_day_chart")
                this.drawLine(this.$data.page_info.bug_day_yl_chart, "bug_day_yl_chart")
                this.drawLine(this.$data.page_info.bug_day_level_chart, "bug_day_level_chart")
            }
    },
    methods: {
        drawLine(options, chart_name){
            if (document.getElementById(chart_name) != null) {
                this.$echarts.dispose(document.getElementById(chart_name))
            }
            charObj = this.$echarts.init(document.getElementById(chart_name))
            charObj.setOption(options)
            }
    },
    beforeMount(){
      // console.log(this.$route.params.project);
        this.$data.project = this.$route.params.project
        this.$data.iteration = this.$route.params.iteration
        this.$data.start = this.$route.params.start
        this.$data.end = this.$route.params.end
        this.$data.calendarShow = this.$route.params.iteration == 'last_week'? true:false
        axios({
            url: '/api/v1/QueryInfo/',
            method:'get',
            params:{
                project:this.$route.params.project,
                iteration:this.$route.params.iteration,
                start:this.$route.params.start,
                end:this.$route.params.end,
                }
            }).then(res => {
                console.log(res.data.data);
                this.$data.page_info = res.data.data
                this.$data.calendarOptions.resources = []
                this.$data.calendarOptions.events = []
                // this.$data.calendarOptions.resources = res.data.data.full_calendar_data.resources
                // this.$data.calendarOptions.events = res.data.data.full_calendar_data.events
            }
        )
    },

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
.divbackground{
  background-color:	#C0C0C020	;
}
.main{
  margin-left:20%;
}
</style>
