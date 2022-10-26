import { createRouter, createWebHistory } from 'vue-router'

import mainpage from '../views/mainpage/homepage.vue'
import home_content from "../components/homepage_tools/home_content.vue"
import test from "../components/test.vue"
import test_appointment from "../views/mainpage/test_appointment.vue"
import share from "../views/mainpage/share.vue"
import reserveproject from "../components/reservepage_tools/project.vue"
import reservemember from "../components/reservepage_tools/member.vue"
import reserveinfo from "../components/reservepage_tools/info.vue"
import login from "../views/mainpage/login.vue"
import shareinfo from "../components/sharepage_tools/infopage.vue"
import sharetools from "../components/sharepage_tools/toolspage.vue"
import share_info_details from "../components/sharepage_tools/share_info_details.vue"
import share_tools_details from "../components/sharepage_tools/share_tools_details.vue"
import test_main_page from "../views/testpage/test_main_page.vue"
import apitest from "../components/autotest_tools/apitest.vue"
import apireport from "../components/autotest_tools/apireport.vue"
import autotest from "../components/autotest_tools/autotest.vue"
import adminconfig from "../views/configpage/adminconfig.vue"
import qa_config_info from "../components/config_tools/configinfo.vue"
import qa_home from "../views/zk_home/home.vue"
import QaZyQueryInfo from '../components/zy/qa_zy_query_info.vue'
import QaZyPreview from '../components/zy/qa_zy_preview.vue'
import QaZyQuery from '../components/zy/qa_zy_query.vue'
import issueinfo from "../components/issue_item/issue_info.vue"
import issueBug from "../components/issue_item/issue_bug.vue"
import cost from "../views/cost/home_page.vue"
import cost_home from "../components/cost_statistics/home.vue"
import cost_project from "../components/cost_statistics/project.vue"
import cost_member from "../components/cost_statistics/member.vue"
import cost_work from "../components/cost_statistics/work.vue"
import qa_calendar from "../components/zy/qa_calendar.vue"
import qa_zy from "../components/zy/qa_zy.vue"
import qa_issue from "../../src/components/issue_item/qa_issue.vue"
import qa_zy_bug from "../components/zy/qa_zy_bug.vue"
import qa_bug_issue from "../components/issue_item/qa_bug_issue.vue"
import qa_member_list from "../components/zy/qa_member_list.vue"
import qa_member_echart from "../components/zy/qa_member_echart.vue"
import road7login from "../components/7roadlogin.vue"
import yh from "../components/zy/yh.vue"
import zy_project_bug from "../components/zy/zy_project_bug.vue"
import issue_okr from "../components/issue_item/issue_okr.vue"
import issue_okr_2 from "../components/issue_item/issue_okr_2.vue"
import issue_okr_3 from "../components/issue_item/issue_okr_3.vue"
import jump from "../components/jump.vue"

const routes = [
  {
    path: '/login/',
    component: road7login
  },
  {
    path: '/test12',
    component: test
  },
  {
    path: '/issueokr/2',
    name: '/issueokr/2',
    component: issue_okr_2,
    meta:{
      KeepAlive:true
    }
  },
  {
  path: '/',
  name: '/',
  component: mainpage,
  children:[
    {
      path: '/reserve',
      component: test_appointment,
      children:[
        {
          path:'/reserve/zk_project',
          component: reserveproject,
        },
        {
          path:'/reserve/zk_member',
          component: reservemember,
        },
        {
          path:'/reserve/zk_info',
          component: reserveinfo,
        }
      ]
    },
    {
      path:"/cost_statistics",
      component:cost,
      children:[
        {
          path:"/cost_statistics",
          component:cost_home
        },
        {
          path:"project",
          component:cost_project
        },
        {
          path:"member",
          component:cost_member
        },
        {
          path:"work",
          component:cost_work,
          meta:{
            KeepAlive:true
          }
        },
      ]
    },
    {
      path: '/share',
      component: share,
      children:[
        {
          path:'/share/zk_info',
          component: shareinfo,
        },
        {
          path:'/share/zk_tools',
          component: sharetools,
        },
        {
          path:"/share/zk_info/:id",
          component: share_info_details,
        },
        {
          path:"/share/zk_tools/:id",
          component: share_tools_details,
        }
      ]
    },
    {
      path: '/',
      component: home_content,
    },
    {
      path:"/test/automatic",
      component:test_main_page,
      children:[
        {
          path: '/test/automatic/_apitest',
          component: apitest,
        },
        {
          path: '/test/automatic/_apireport',
          component: apireport,
        },
        {
          path: '/test/automatic/_autotest',
          component: autotest,
        }
      ]
    },
    {
      path:"/qa_config",
      component:adminconfig,
      children:[
        {
          path: 'qa_config_info/:id',
          component: qa_config_info,
        }
      ]
    }    
  ]
},
  {
    path: '/auth/login',
    component: login,
  },
  {
    path:"/qa",
    component:qa_home,
    redirect: '/qa/preview',
    children:[
      {
        path: 'query_info/:project/:iteration/:start/:end',
        name: 'QueryInfo',
        component: QaZyQueryInfo
      },
      {
        path: 'preview',
        name: 'Preview',
        component: QaZyPreview,
      },
      {
        path: 'query',
        name: 'Query',
        component: QaZyQuery
      },
      {
        path: 'issueinfo',
        name: 'issueinfo',
        component: issueinfo,
        meta:{
          KeepAlive:true
        }
      },
      {
        path: 'issueokr',
        name: 'issueokr',
        component: issue_okr,
        meta:{
          KeepAlive:true
        }
      },
      {
        path: 'jump',
        name: 'jump',
        component: jump,
      },
      {
        path: 'issueokr/3',
        name: 'issueokr/3',
        component: issue_okr_3,
        meta:{
          KeepAlive:true
        }
      },
      {
        path: 'issueBug',
        name: 'issueBug',
        component: issueBug,
        meta:{
          KeepAlive:true
        }
      },
      {
        path:"qa_calendar",
        component:qa_calendar
      },
      {
        path:"qa_zy",
        component:qa_zy
      },
      {
        path:"qa_issue",
        component:qa_issue
      },
      {
        path:"qa_zy_bug",
        component:qa_zy_bug
      },
      {
        path:"qa_bug_issue",
        component:qa_bug_issue
      },
      {
        path:"query_info/:project/:type",
        component:yh,
        meta:{
          KeepAlive:true
        }
        
      },
      {
        path:"query_info/:project/bug",
        component:zy_project_bug,
        meta:{
          KeepAlive:true
        }
        
      },
      {
        path: 'qa_member_list',
        name: 'qa_member_list',
        component: qa_member_list,
      },
      {
        path: 'qa_member_chart/:name/:year',
        component: qa_member_echart
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
