<template>
  <div style="height: 1700px;">1</div>
  <el-button @click="te()">111</el-button>
  <div class="animate__animated animate__zoomInDown">
    123123
  </div>
  <el-backtop :right="100" :bottom="100" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
//引入路由
import { useRouter } from 'vue-router'
//element plus图标引入
import { DocumentChecked } from '@element-plus/icons-vue'

//定义路由
const router = useRouter()

//定义要传递的参数


//提交按钮
//这是query传参，params传参需要添加name
function te(){
	router.push({
		path:'/qa', //B页面的路径

	})
}
</script>

