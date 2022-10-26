import axios from "axios"
import store from '../store/index'
import router from '../router/index'
import { ElMessage } from 'element-plus'

// const inst = axios.create({
    
//     timeout: 3000,
// })
// const adinst = axios.create({

//     timeout: 3000,

// })
const homead = axios.create({

    timeout: 60000,

})


// inst.interceptors.response.use(response => {
    
   
    
// return response;
// },error => {
//     if (error && error.response) {
//         switch (error.response.status) {
//             // case 400:
//             //     error.message = "错误请求";
//             //     break;
//             // case 401:
//             //     error.message = "未授权，请重新登录";
//             //     break;
//             case 403:
//                 error.message = "请重新登录";
//                 // window.location.href = "/";
//                 // location.reload();
//                 store.state.user_info=null
//                 store.state.showlogin=true,
//                 store.state.showname=false
//                 store.state.zyshow=false
//                 break;
//             // case 404:
//             //     error.message = "请求错误,未找到该资源";
//             //     window.location.href = "/NotFound";
//             //     break;
//             // case 405:
//             //     error.message = "请求方法未允许";
//             //     break;
//             // case 408:
//             //     error.message = "请求超时";
//             //     break;
//             // case 500:
//             //     error.message = "服务器端出错";
//             //     break;
//             // case 501:
//             //     error.message = "网络未实现";
//             //     break;
//             // case 502:
//             //     error.message = "网络错误";
//             //     break;
//             // case 503:
//             //     error.message = "服务不可用";
//             //     break;
//             // case 504:
//             //     error.message = "网络超时";
//             //     break;
//             // case 505:
//             //     error.message = "http版本不支持该请求";
//             //     break;
//             default:
//                 error.message = `连接错误：${error}`;
//         }
        
//     } 
//     else if(error.message.includes('timeout')){   // 判断请求异常信息中是否含有超时timeout字符串
//         if (document.getElementsByClassName('el-message').length === 0){
//             ElMessage.error("网络响应超时,请刷新页面后重试");}
//       }
//       else if(error.message.includes("Network")){
//         if (document.getElementsByClassName('el-message').length === 0){
//             ElMessage.error("网络请求失败,请刷新页面后重试");}
//        }
//     else {
//         if (JSON.stringify(error).includes("timeout")) {
//             ElMessage.error("服务器响应超时，请刷新当前页面。");
//         }
//             ElMessage.error("连接服务器失败");
//     }
//     if (document.getElementsByClassName('el-message').length === 0){
//             ElMessage.error(error.message);}
            
//             // console.log("error",error.response.status);
// return Promise.reject(error);
// });


// adinst.interceptors.response.use(response => {                  
//     setTimeout(() => {
//         axios({
//             url: '/api/v1/AdminConfig/',
//             method:'get',
//             params:{
//                     type:"admin"
//                 }
//             }).then(ress => {
 
//                 if (ress.data.data.indexOf(store.state.adname) == -1) {
//                     if (document.getElementsByClassName('el-message').length === 0){
//                         ElMessage.error('错误，权限认证失败!')
//                         store.state.zyshow=false
//                         router.push({path: "/"})
//                     }
                   
//                 }
//                 else{
//                     store.state.zyshow=true
//                 }
               
//             })
//     }, 100);
   
// return response;
// },error => {
//     console.log("error",error);
//     if (error && error.response) {
//         switch (error.response.status) {
//             case 403:
//                 // window.location.href = "/";
//                 error.message = "请重新登录";
//                 router.push({path: "/"})
//                 // // location.reload();
//                 store.state.user_info=null
//                 store.state.showlogin=true,
//                 store.state.showname=false
//                 store.state.zyshow=false
//                 break;
//             default:
//                 error.message = `连接错误：${error}`;
//         }
        
//     }
//     else if(error.message.includes('timeout')){   // 判断请求异常信息中是否含有超时timeout字符串
//         if (document.getElementsByClassName('el-message').length === 0){
//             ElMessage.error("网络响应超时,请刷新页面后重试");}
//       }
//       else if(error.message.includes("Network")){
//         if (document.getElementsByClassName('el-message').length === 0){
//             ElMessage.error("网络请求失败,请刷新页面后重试");}
//        }
//     else {
//         if (JSON.stringify(error).includes("timeout")) {
//             ElMessage.error("服务器响应超时，请刷新当前页面。");
//         }
//             ElMessage.error("连接服务器失败");
//     }
//     if (document.getElementsByClassName('el-message').length === 0){
//             ElMessage.error(error.message);}
//             // setTimeout(() => {
//             //     window.location.href = "/";
//             // }, 500);
// return Promise.reject(error);
// });

// homead.interceptors.request.use(config => {
//     console.log("config",config);
// return config;
// // },error => {
// // // Do something with request error
// // return Promise.reject(error);
// });
homead.interceptors.response.use(response => {
    // store.state.zyshow = true
    setTimeout(() => {
        
        var flag = null
        if(response.data.code==10000){
            store.state.showname = true
            store.state.adname = response.data.user.cn_name
            store.state.showlogin = false
        }
        else if(response.data.code===10001 || response.data.code===10002  || response.data.code===10003 || response.data.code===10004 || response.data.code===10005){
            store.state.showname = false
            store.state.showlogin = true
            store.state.zyshow = false
        }

        if(response.data.code==10000 && store.state.user_info["permission"]==1 && store.state.user_info["group"]=="测试"){
            store.state.zyshow = true
            flag = 0
        }
        else if(response.data.code===10000 && store.state.user_info["permission"]==1){
            if(store.state.user_info["group"]=="银魂"){
                store.state.noadminurl.push("/qa/query_info/银魂/issue")
                store.state.noadminurl.push("/qa/query_info/银魂/bug")
                store.state.noadminurl.push("/qa/query_info/%E9%93%B6%E9%AD%82/issue")
                store.state.noadminurl.push("/qa/query_info/%E9%93%B6%E9%AD%82/bug")
                store.state.noadminurl.push("/qa/preview")
            }
            else if(store.state.user_info["group"]=="游客组"){
                store.state.noadminurl.push("/qa/issueokr")
                store.state.noadminurl.push("/qa/preview")
                store.state.noadminurl.push("/qa/issueBug")
            }
            flag = 1
            store.state.zyshow = true
        }
        else if(response.data.code===10000 && store.state.user_info["permission"]==0){
            flag = 2  
        }
        // console.log(flag);
        if(flag == 1){
            if(store.state.noadminurl.indexOf(store.state.path_) == -1){
                if (document.getElementsByClassName('el-message').length === 0){
                    ElMessage.error('错误,权限认证失败!')                            
                }
                router.push({path: "/"})
            }
        }
        else if(flag == 2){
            store.state.zyshow = false
            if(store.state.noadminurl.indexOf(store.state.path_) == -1){
                if (document.getElementsByClassName('el-message').length === 0){
                    ElMessage.error('错误,权限认证失败!')
                }
                router.push({path: "/"})
            }
        }
       
    }, 100);
    // console.log("response",response);
    // setTimeout(() => {
    //     if(response.data.code===10000){
    //         store.state.user_info=response.data.user
    //         store.state.adname = response.data.user.cn_name
    //         store.state.showname = true
    //         store.state.showlogin = false
            
    //     }
    //     else if(response.data.code===10001 || response.data.code===10002  || response.data.code===10003 || response.data.code===10004 || response.data.code===10005){
    //         store.state.showname = false
    //         store.state.showlogin = true
    //         store.state.user_info=null
    //         store.state.adname=null
    //         store.state.zyshow = false
    //         if(store.state.noadminurl.indexOf(store.state.path_) == -1){
    //             if (document.getElementsByClassName('el-message').length === 0){
    //                 ElMessage.error('错误，权限认证失败!')
    //             }
    //             router.push({path: "/"})
    //         }
    //     }
    //     // if(response.data.code===10210){
    //     //     store.state.adminlist=response.data.data
    //     // }
    //     // var count = 0
    //     console.log(store.state.user_info);
    //     if(store.state.login_status == true){
    //         // store.state.zyshow = true
    //         if(store.state.user_info["permission"]=="1"){
    //             if(store.state.user_info["group"]=="银魂"){
    //                 store.state.noadminurl.push("/qa/query_info/银魂/issue")
    //                 store.state.noadminurl.push("/qa/query_info/银魂/bug")
                    
    //                 // store.state.noadminurl.push("/qa/preview")
    //             }
    //             store.state.zyshow = true
    //         }
    //         else{
    //             store.state.zyshow = false
    //             if (document.getElementsByClassName('el-message').length === 0){
    //                 ElMessage.error('错误，权限认证失败!')
    //             }
    //             router.push({path: "/"})
    //         }
    //         console.log(store.state.noadminurl);
            
    //         // console.log("response");
    //         // if(count == 0){
    //         //     console.log("11",store.state.user_info);
    //         //     var userlist = store.state.userlist
    //         //     for (var i in userlist){
    //         //        if (userlist[i]["cn_name"] == store.state.user_info["cn_name"]){
    //         //             if (userlist[i]["permission"]=="1") {
    //         //                 if (userlist[i]["project"]=="技术部"){
    //         //                     store.state.temporary.push(userlist[i]["cn_name"])
    //         //                     store.state.noadminurl.push("/qa/query_info/银魂/issue")
    //         //                     store.state.noadminurl.push("/qa/query_info/银魂/bug")
    //         //                     store.state.noadminurl.push("/qa/preview")
    //         //                     // store.state.noadminurl.push("qa")
    //         //                 }
                            
    //         //             }
    //         //        }
                    
    //         //     }
    //         //     count = count + 1
    //         // }
    //         // console.log(store.state.path_);
    //         // if(store.state.noadminurl.indexOf(store.state.path_) != -1){
    //         //     if(store.state.adminlist.indexOf(store.state.adname) != -1 || store.state.temporary.indexOf(store.state.adname) != -1){
    //         //         store.state.zyshow = true
    //         //     }
    //         //     else{
    //         //         store.state.zyshow = false
    //         //     }
    //         // }
    //         // else if(store.state.noadminurl.indexOf(store.state.path_) == -1){
    //         //     if(store.state.adminlist.indexOf(store.state.adname) != -1){
    //         //         store.state.zyshow = true
    //         //     }
    //         //     else{
    //         //         store.state.zyshow = false
    //         //         if (document.getElementsByClassName('el-message').length === 0){
    //         //             ElMessage.error('错误，权限认证失败!')
    //         //         }
    //         //         router.push({path: "/"})
    //         //     }
    
    //         // }
            
    //     }
        
    //     // else if(store.state.login_status == true && response.data.code===10006){
    //     //     console.log("99000");
    //     // }
    // }, 200);
    
    // if(response.data.code===10210){
    //     store.state.adminlist=response.data.data
    //     // setTimeout(() => {
    //         // if (store.state.adminlist != ""){
    //             // 当前路由地址是否需要权限功能 
    //             if(store.state.noadminurl.indexOf(store.state.path_) != -1)
    //             // 这个人是不是admin
                
    //                 if(store.state.adminlist.indexOf(store.state.adname) != -1){
    //                     store.state.zyshow = true
    //                     console.log(1);
                
    //                 }
    //                 else{
                        
    //                     store.state.zyshow = false
    //                     console.log(2);
                
    //             }
    //             else if(store.state.noadminurl.indexOf(store.state.path_) == -1)
    //                 if(store.state.adminlist.indexOf(store.state.adname) != -1){
    //                     store.state.zyshow = true
    //                     console.log(3);
                    
    //                 }
    //                 else{
    //                     store.state.zyshow = false
    //                     if (document.getElementsByClassName('el-message').length === 0){
    //                         ElMessage.error('错误，权限认证失败!')
    //                     }
    //                     router.push({path: "/"})
    //                     console.log(4);
            
    //         }   
    //         // } 
    //     // }, 10);
    // }
    // setTimeout(() => {
    //     if(store.state.adminlist == "" && store.state.noadminurl.indexOf(store.state.path_) == -1){
    //         store.state.zyshow = false
    //         if (document.getElementsByClassName('el-message').length === 0){
    //             ElMessage.error('错误，权限认证失败!')
    //         }
    //         router.push({path: "/"})
    //         console.log(5);
    //     }
    // }, 100);
    
    return response;
},error => {
    // console.log("error",error);
    if (error && error.response) {
        switch (error.response.status) {
            case 403:
                if(store.state.noadminurl.indexOf(store.state.path_) != -1){
                    error.message = "登录异常，请重新登录后查看";
                    // router.push({path: "/"})
                    // // location.reload();
                    store.state.user_info=null
                    store.state.showlogin=true,
                    store.state.showname=false
                    store.state.zyshow=false
                    break;
                }
                else{
                    error.message = "登录异常，请重新登录后查看";
                    router.push({path: "/"})
                    // // location.reload();
                    store.state.user_info=null
                    store.state.showlogin=true,
                    store.state.showname=false
                    store.state.zyshow=false
                    break;
                }
                   
                // var this_path = decodeURIComponent(window.location.pathname)
                // if(this_path != "/"){
                //     this_path = decodeURIComponent(window.location.pathname).split("/")[1]
                // }
                // var not_admin_url=["/","reserve","share","auth"]
                // if (not_admin_url.indexOf(this_path) != -1){
                //     store.state.user_info=null
                //     store.state.showlogin=true,
                //     store.state.showname=false
                //     store.state.zyshow=false
                //     break;
                // }
                // else{
                //     error.message = "请重新登录";
                //     router.push({path: "/"})
                //     // // location.reload();
                //     store.state.user_info=null
                //     store.state.showlogin=true,
                //     store.state.showname=false
                //     store.state.zyshow=false
                //     break;
                // }
                // window.location.href = "/";
               
            default:
                error.message = `连接错误：${error}`;
        }
        
    }
    else if(error.message.includes('timeout')){   // 判断请求异常信息中是否含有超时timeout字符串
        if (document.getElementsByClassName('el-message').length === 0){
            ElMessage.error("网络响应超时,请刷新页面后重试");}
      }
      else if(error.message.includes("Network")){
        if (document.getElementsByClassName('el-message').length === 0){
            ElMessage.error("网络请求失败,请刷新页面后重试");}
       }
    else {
        if (JSON.stringify(error).includes("timeout")) {
            ElMessage.error("服务器响应超时，请刷新当前页面。");
        }
            ElMessage.error("连接服务器失败");
    }
    if (document.getElementsByClassName('el-message').length === 0){
            ElMessage.error(error.message);}
            // setTimeout(() => {
            //     window.location.href = "/";
            // }, 500);
return Promise.reject(error);
});

// export function axioss(url,params){
//     return inst(url,params)
// }

// export function adpaxios(url, params){
//     return adinst.post(url,params)
// }
// export function adgaxios(url, params){
//     return adinst(url,params)
// }
export function hpaxios(url, params){
    return homead.post(url,params)
}
export function hgaxios(url, params){
    return homead(url,params)
}
export function hdaxios(url, params){
    return homead.delete(url,params)
}
export function hputaxios(url, params){
    return homead.put(url,params)
}

