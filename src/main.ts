import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'xe-utils'
import 'animate.css';
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import ElementPlus from 'element-plus'
import * as echarts from 'echarts'
import 'element-plus/theme-chalk/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueUeditorWrap from 'vue-ueditor-wrap';
import 'element-plus/theme-chalk/display.css'
// import ViewUIPlus from 'view-ui-plus'
// import 'view-ui-plus/dist/styles/viewuiplus.css'
import CKEditor from '@ckeditor/ckeditor5-vue';



const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(store).use(router).use(ElementPlus,{locale: zhCn,}).use(VXETable).use(VueUeditorWrap).use( CKEditor )
app.config.globalProperties.$echarts = echarts
app.mount("#app")
// createApp(App).use(store).use(router).mount('#app')
