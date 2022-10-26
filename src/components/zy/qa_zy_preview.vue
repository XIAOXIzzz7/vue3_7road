//自研项目质量总量页面
<template>
<div class="divbackground">
<!-- <div class="content-header" align="left">
    <div class="container-fluid">
    <div class="row mb-2">
        <div class="col-sm-6">
        <h1 class="m-0 text-dark ">自研项目总览</h1>
        </div>
    </div>
    </div>
</div> -->
<h5 class="h5title" style="margin-top:0px">自研项目总览</h5>

<div class="row" align="left" style="margin:5px">
    <section class="col-lg-12">
        <div class="container-fluid">
            <div class="direct-chat direct-chat-primary">
            <div class="row">

                <!-- 项目测试调优期-->
                <div class="col-md-12">
                    <div class="card card-success">
                        <div class="card-header" style="background-color:white">
                            <h3 class="card-title" style="color:#00000097;font-weight:bolder">项目测试调优期</h3>
                            <div class="card-tools">
                            </div>
                        </div>
                        <div class="inner" >
                            <div class="row">
                                <div class="col-12 col-sm-6 col-md-12">&nbsp;</div>
                              <div class="inner">
                              <el-space wrap :size="30" >
                                <el-card class="box-card" style="width: 350px;height: 280px" v-for="index in test_dataList" :key="index">
                                  <template #header>
                                    <div >
                                      <h3>{{index.name}}</h3>
                                    <p>{{index.date}}</p>
                                    </div>
                                  </template>
                                  <div>
                                    <el-select  v-model="option" >
                                      <el-option v-for="option in options" :key="option" :label="option" :value="option"></el-option>
                                    </el-select>
                                    <h5>项目健康度:</h5>
                                    <h1 ><span  :class="(index.grade==='高')?'badge_success':(index.grade==='低')?'badge_danger':'badge_warning'">{{index.grade}}</span></h1>
                                  </div>

                                </el-card>
                              </el-space>
                                </div>
                                <!--银魂-->
<!--                                <div class="col-12 col-sm-6 col-md-3">-->
<!--                    <div class="small-box">-->
<!--                        <div class="inner">-->
<!--                            <h4 style="cursor:pointer">银魂:<br></h4>-->
<!--                            <p style="cursor:pointer" >2021-05-12 / 2021-05-19</p>-->
<!--                            <select class="form-control" style="width: 60%">-->
<!--                                <option>版本稳定期</option>-->
<!--                                <option>版本密集期</option>-->
<!--                            </select>-->
<!--                            <br>-->
<!--                            <h5 style="cursor:pointer">项目健康度：<br></h5>-->
<!--                            <h1 style="cursor:pointer"><span class="badge badge-warning">中</span></h1>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->

                    <!--HelloKitty-->
<!--                    <div class="col-12 col-sm-6 col-md-3">-->
<!--                    <div class="small-box">-->
<!--                        <div class="inner">-->
<!--                            <h4 style="cursor:pointer" >HelloKitty:<br></h4>-->
<!--                            <p style="cursor:pointer" o>2021-05-12 / 2021-05-19</p>-->
<!--                            <select class="form-control" style="width: 60%">-->
<!--                                <option>版本密集期</option>-->
<!--                                <option>版本稳定期</option>-->
<!--                            </select>-->
<!--                            <br>-->
<!--                            <h5 style="cursor:pointer" >项目健康度：<br></h5>-->
<!--                            <h1 style="cursor:pointer" ><span class="badge badge-success">高</span></h1>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    &lt;!&ndash;项目一&ndash;&gt;-->
<!--                        <div class="col-12 col-sm-6 col-md-3">-->
<!--                        <div class="small-box" style="cursor:pointer">-->
<!--                            <div class="inner">-->
<!--                                <h4>项目一:<br></h4>-->
<!--                                <p>2021-05-12 / 2021-05-19</p>-->
<!--                                <select class="form-control" style="width: 60%">-->
<!--                                    <option>版本密集期</option>-->
<!--                                    <option>版本稳定期</option>-->
<!--                                </select>-->
<!--                                <br>-->
<!--                                <h5 >项目健康度：<br></h5>-->
<!--                                <h1 ><span class="badge badge-danger">低</span></h1>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    &lt;!&ndash;项目二&ndash;&gt;-->
<!--                        <div class="col-12 col-sm-6 col-md-3">-->
<!--                            <div class="small-box" style="cursor:pointer">-->
<!--                                <div class="inner">-->
<!--                                    <h4>项目二:<br></h4>-->
<!--                                    <p>2021-05-12 / 2021-05-19</p>-->
<!--                                    <select class="form-control" style="width: 60%">-->
<!--                                        <option>版本密集期</option>-->
<!--                                        <option>版本稳定期</option>-->
<!--                                    </select>-->
<!--                                    <br>-->
<!--                                    <h5 >项目健康度：<br></h5>-->
<!--                                    <h1 ><span class="badge badge-success">高</span></h1>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    &lt;!&ndash;项目三&ndash;&gt;-->
<!--                        <div class="col-12 col-sm-6 col-md-3">-->
<!--                            <div class="small-box" style="cursor:pointer">-->
<!--                                <div class="inner">-->
<!--                                    <h4>项目三:<br></h4>-->
<!--                                    <p>2021-05-12 / 2021-05-19</p>-->
<!--                                    <select class="form-control" style="width: 60%">-->
<!--                                        <option>版本密集期</option>-->
<!--                                        <option>版本稳定期</option>-->
<!--                                    </select>-->
<!--                                    <br>-->
<!--                                    <h5 >项目健康度：<br></h5>-->
<!--                                    <h1 ><span class="badge badge-danger">低</span></h1>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    &lt;!&ndash;项目四&ndash;&gt;-->
<!--                        <div class="col-12 col-sm-6 col-md-3">-->
<!--                            <div class="small-box" style="cursor:pointer" >-->
<!--                                <div class="inner">-->
<!--                                    <h4>项目四:<br></h4>-->
<!--                                    <p>2021-05-12 / 2021-05-19</p>-->
<!--                                    <select class="form-control" style="width: 60%">-->
<!--                                        <option>版本密集期</option>-->
<!--                                        <option>版本稳定期</option>-->
<!--                                    </select>-->
<!--                                    <br>-->
<!--                                    <h5 >项目健康度：<br></h5>-->
<!--                                    <h1 ><span class="badge badge-warning">中</span></h1>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    &lt;!&ndash;项目五&ndash;&gt;-->
<!--                        <div class="col-12 col-sm-6 col-md-3">-->
<!--                            <div class="small-box" style="cursor:pointer" >-->
<!--                                <div class="inner">-->
<!--                                    <h4>项目五:<br></h4>-->
<!--                                    <p>2021-05-12 / 2021-05-19</p>-->
<!--                                    <select class="form-control" style="width: 60%">-->
<!--                                        <option>版本密集期</option>-->
<!--                                        <option>版本稳定期</option>-->
<!--                                    </select>-->
<!--                                    <br>-->
<!--                                    <h5 >项目健康度：<br></h5>-->
<!--                                    <h1 ><span class="badge badge-success">高</span></h1>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

                        </div>
                        </div>
                        <br>
                    </div>
                </div>

                <!-- 项目研发期-->
                <div class="col-md-12">
                    <div class="card card-success">
                        <div class="card-header" style="margin:5px;background-color:white" >
                            <h3 class="card-title" style="color:#00000097;font-weight:bolder">项目研发期</h3>
                            <div class="card-tools">
                            </div>
                        </div>
                        <div class="inner">
                            <div class="row">
                                <div class="col-12 col-sm-6 col-md-12">&nbsp;</div>
                              <el-space wrap :size="30">
                                <el-card class="box-card" style="width: 350px;height: 280px" v-for="index in dev_datalist" :key="index">
                                  <template #header>
                                    <div >
                                      <h3>{{index.name}}</h3>
                                      <p>{{index.date}}</p>
                                    </div>
                                  </template>
                                  <div>
                                    <el-select  v-model="option" >
                                      <el-option v-for="option in options" :key="option" :label="option" :value="option"></el-option>
                                    </el-select>
                                    <h5>项目健康度:</h5>
                                    <h1 ><span  :class="(index.grade==='高')?'badge_success':(index.grade==='低')?'badge_danger':'badge_warning'">{{index.grade}}</span></h1>
                                  </div>

                                </el-card>
                              </el-space>
                                <!--项目六-->
<!--                                    <div class="col-12 col-sm-6 col-md-3">-->
<!--                                        <div class="small-box" style="cursor:pointer">-->
<!--                                            <div class="inner" >-->
<!--                                                <h4>项目六:<br></h4>-->
<!--                                                <p>2021-05-12 / 2021-05-19</p>-->
<!--                                                <select class="form-control" style="width: 60%">-->
<!--                                                    <option>版本密集期</option>-->
<!--                                                    <option>版本稳定期</option>-->
<!--                                                </select>-->
<!--                                                <br>-->
<!--                                                <h5 >项目健康度：<br></h5>-->
<!--                                                <h1 ><span class="badge badge-danger">低</span></h1>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->

<!--                                &lt;!&ndash;项目七&ndash;&gt;-->
<!--                                    <div class="col-12 col-sm-6 col-md-3">-->
<!--                                        <div class="small-box" style="cursor:pointer" >-->
<!--                                            <div class="inner">-->
<!--                                                <h4>项目七:<br></h4>-->
<!--                                                <p>2021-05-12 / 2021-05-19</p>-->
<!--                                                <select class="form-control" style="width: 60%">-->
<!--                                                    <option>版本密集期</option>-->
<!--                                                    <option>版本稳定期</option>-->
<!--                                                </select>-->
<!--                                                <br>-->
<!--                                                <h5 >项目健康度：<br></h5>-->
<!--                                                <h1 ><span class="badge badge-success">高</span></h1>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->

<!--                                &lt;!&ndash;项目八&ndash;&gt;-->
<!--                                    <div class="col-12 col-sm-6 col-md-3">-->
<!--                                        <div class="small-box" style="cursor:pointer">-->
<!--                                            <div class="inner">-->
<!--                                                <h4>项目八:<br></h4>-->
<!--                                                <p>2021-05-12 / 2021-05-19</p>-->
<!--                                                <select class="form-control" style="width: 60%">-->
<!--                                                    <option>版本密集期</option>-->
<!--                                                    <option>版本稳定期</option>-->
<!--                                                </select>-->
<!--                                                <br>-->
<!--                                                <h5 >项目健康度：<br></h5>-->
<!--                                                <h1 ><span class="badge badge-success">高</span></h1>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->

                            </div>
                        </div>
                        <br>
                    </div>
                </div>

                <!-- 项目运营期-->
                <div class="col-md-12">
                    <div class="card card-success">
                        <div class="card-header" style="margin:5px;background-color:white" >
                            <h3 class="card-title" style="color:#00000097;font-weight:bolder"> 项目运营期</h3>
                            <div class="card-tools">
                            </div>
                        </div>
                        <div class="inner">
                            <div class="row">
                                <div class="col-12 col-sm-6 col-md-12">&nbsp;</div>
                                <!--项目九-->
                              <el-space wrap :size="30">
                                <el-card class="box-card" style="width: 350px;height: 280px" v-for="index in app_datalist" :key="index">
                                  <template #header>
                                    <div >
                                      <h3>{{index.name}}</h3>
                                      <p>{{index.date}}</p>
                                    </div>
                                  </template>
                                  <div>
                                    <el-select  v-model="option" >
                                      <el-option v-for="option in options" :key="option" :label="option" :value="option"></el-option>
                                    </el-select>
                                    <h5>项目健康度:</h5>
                                    <h1 ><span  :class="(index.grade==='高')?'badge_success':(index.grade==='低')?'badge_danger':'badge_warning'">{{index.grade}}</span></h1>
                                  </div>

                                </el-card>
                              </el-space>
<!--                                    <div class="col-12 col-sm-6 col-md-3">-->
<!--                                        <div class="small-box" style="cursor:pointer">-->
<!--                                            <div class="inner">-->
<!--                                                <h4>项目九:<br></h4>-->
<!--                                                <p>2021-05-12 / 2021-05-19</p>-->
<!--                                                <select class="form-control" style="width: 60%">-->
<!--                                                    <option>版本密集期</option>-->
<!--                                                    <option>版本稳定期</option>-->
<!--                                                </select>-->
<!--                                                <br>-->
<!--                                                <h5 >项目健康度：<br></h5>-->
<!--                                                <h1 ><span class="badge badge-success">高</span></h1>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->

<!--                                &lt;!&ndash;项目十&ndash;&gt;-->
<!--                                <div class="col-12 col-sm-6 col-md-3">-->
<!--                                    <div class="small-box" style="cursor:pointer" >-->
<!--                                        <div class="inner">-->
<!--                                            <h4>项目十:<br></h4>-->
<!--                                            <p>2021-05-12 / 2021-05-19</p>-->
<!--                                            <select class="form-control" style="width: 60%">-->
<!--                                                <option>版本密集期</option>-->
<!--                                                <option>版本稳定期</option>-->
<!--                                            </select>-->
<!--                                            <br>-->
<!--                                            <h5 >项目健康度：<br></h5>-->
<!--                                            <h1 ><span class="badge badge-danger">低</span></h1>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->

                            </div>
                        </div>
                        <br>
                    </div>
                </div>

            </div>
            </div>
        </div>
    </section>
</div>
</div>
</template>

<script>

export default {
name: 'qa_zy_preview',
  data(){
  return {
    test_dataList: [
      {name: '银魂', date: '2021-05-12/2021-05-19', grade: '中'},
      {name: 'HelloKitty', date: '2021-05-12/2021-05-19', grade: '高'},
      {name: '项目一', date: '2021-05-12/2021-05-19', grade: '高'},
      {name: '项目二', date: '2021-05-12/2021-05-19', grade: '低'},
      {name: '项目三', date: '2021-05-12/2021-05-19', grade: '低'},
      {name: '项目四', date: '2021-05-12/2021-05-19', grade: '中'},
      {name: '项目五', date: '2021-05-12/2021-05-19', grade: '高'},
    ],
    dev_datalist: [
      {name: '项目六', date: '2021-05-12/2021-05-19', grade: '低'},
      {name: '项目七', date: '2021-05-12/2021-05-19', grade: '高'},
      {name: '项目八', date: '2021-05-12/2021-05-19', grade: '高'},
    ],
    app_datalist: [
      {name: '项目九', date: '2021-05-12/2021-05-19', grade: '高'},
      {name: '项目十', date: '2021-05-12/2021-05-19', grade: '低'},
    ],

    options: [
      '版本密集期', '版本稳定期'
    ],
    option: '',
  }
  },
components: {

},
computed: {


},
methods: {

}
}
</script>

<style scoped>
/* .divbackground{
    background-color:	#C0C0C020	;
} */
.h5title{
    color:#00000097;
    text-align: left;
    font-size:18px;
    padding: 15px;
    margin: 20px;
    background:#fff;
    font-weight:bolder
}
.badge_warning{
  color: #1f2d3d;
  background-color: #ffc107;
  font-size: 30px;
  font-weight: bolder;
  padding:7.5px 12px 7.5px 12px
}
.badge_success{
  color: #fff;
  background-color: #28a745;
  font-size: 30px;
  font-weight: bolder;
  padding:7.5px 12px 7.5px 12px
}
.badge_danger{
  color: #fff;
  background-color: #dc3545;
  font-size: 30px;
  font-weight: bolder;
  padding:7.5px 12px 7.5px 12px
}
</style>