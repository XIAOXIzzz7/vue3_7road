<template>
<!--<div class="col-12 col-sm-6 col-md-3">-->
<!--  <el-row>-->
    <el-col :span="6">
      <div class="small-box">
        <!--        <div class="inner">-->
        <!--            <h4>{{name}}:</h4>-->
        <!--            <p>日期：{{start}} / {{end}}</p>-->
        <!--            <div class="row">-->
        <!--                <div class="col-12 col-sm-6" :class="col_md" v-for="(item,index) in data.data" :key="index">-->
        <!--                    <h5>{{item.name}}：-->
        <!--                        <span :class="item.class">-->
        <!--                            <a type="button" >{{item.num}}个</a>-->
        <!--                        </span>-->
        <!--                    </h5>-->
        <!--                </div>-->
        <!--            </div>-->
        <el-card>
          <template #header>
            <div>
              <h3>{{name}}:</h3>
              <h5>{{start}}/{{end}}</h5>
            </div>
          </template>
          <div  style="min-height: 150px">
            <el-row style="min-height: 100px" :gutter="20">
              <el-col :span="col_md"  v-for="(item,index) in data.data" :key="index">
                <h5>{{item.name}}:
                  <span :class="item.class">
                        <a type="button" style="background-color: #28a745;padding:5px">{{item.num}}个</a>
                    </span>
                </h5>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <!--        </div>-->
      </div>
    </el-col>
<!--  </el-row>-->

<!--</div>-->
</template>

<script>

export default {
    name:"issue_state_summary",
    data(){
        return {
            col_md: 12,
        }
    },
    components: {
    },
    props:[
        "name", "start", "end", "data"
    ],
    computed: {
    },
    watch: {},
    methods: {
  },
  beforeMount(){
      if(this.$props.data.len <= 4){
          this.$data.col_md = 24
      }
      else{
          this.$data.col_md = 12
      }
  }
}
</script>

<style lang='stylus' scoped>
  
</style>