import axios from "axios"
import store from '../store/index'
import router from '../router/index'
import { ElMessage } from 'element-plus'

const inst = axios.create({
    
    timeout: 3000,
})
const adinst = axios.create({

    timeout: 3000,

})
const hadinst = axios.create({

    timeout: 3000,

})

inst.interceptors.response.use(response => {
    
   
    
return response;
},error => {
    if (error && error.response) {
        switch (error.response.status) {
            // case 400:
            //     error.message = "错误请求";
            //     break;
            // case 401:
            //     error.message = "未授权，请重新登录";
            //     break;
            case 403:
                error.message = "请重新登录";
                // window.location.href = "/";
                // location.reload();
                store.state.user_info=null
                store.state.showlogin=true,
                store.state.showname=false
                store.state.zyshow=false
                break;
            // case 404:
            //     error.message = "请求错误,未找到该资源";
            //     window.location.href = "/NotFound";
            //     break;
            // case 405:
            //     error.message = "请求方法未允许";
            //     break;
            // case 408:
            //     error.message = "请求超时";
            //     break;
            // case 500:
            //     error.message = "服务器端出错";
            //     break;
            // case 501:
            //     error.message = "网络未实现";
            //     break;
            // case 502:
            //     error.message = "网络错误";
            //     break;
            // case 503:
            //     error.message = "服务不可用";
            //     break;
            // case 504:
            //     error.message = "网络超时";
            //     break;
            // case 505:
            //     error.message = "http版本不支持该请求";
            //     break;
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
            
            // console.log("error",error.response.status);
return Promise.reject(error);
});


adinst.interceptors.response.use(response => {                  
    setTimeout(() => {
        axios({
            url: '/api/v1/AdminConfig/',
            method:'get',
            params:{
                    type:"admin"
                }
            }).then(ress => {
 
                if (ress.data.data.indexOf(store.state.adname) == -1) {
                    if (document.getElementsByClassName('el-message').length === 0){
                        ElMessage.error('错误，权限认证失败!')
                        store.state.zyshow=false
                        router.push({path: "/"})
                    }
                   
                }
                else{
                    store.state.zyshow=true
                }
               
            })
    }, 100);
   
return response;
},error => {
    console.log("error",error);
    if (error && error.response) {
        switch (error.response.status) {
            case 403:
                // window.location.href = "/";
                error.message = "请重新登录";
                router.push({path: "/"})
                // // location.reload();
                store.state.user_info=null
                store.state.showlogin=true,
                store.state.showname=false
                store.state.zyshow=false
                break;
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


hadinst.interceptors.response.use(response => {                  
    setTimeout(() => {
        axios({
            url: '/api/v1/AdminConfig/',
            method:'get',
            params:{
                    type:"admin"
                }
            }).then(ress => {
 
                if (ress.data.data.indexOf(store.state.adname) == -1) {        
                    store.state.zyshow=false                   
                }
                else{
                    store.state.zyshow=true
                }
               
            })
    }, 100);
    if(store.state.showname != null){
        store.state.showname = false
        store.state.showlogin = true
    }
    else{
        store.state.showname = true
        store.state.showlogin = false
    }
return response;
},error => {
    console.log("error",error);
    if (error && error.response) {
        switch (error.response.status) {
            case 403:
                // window.location.href = "/";
                error.message = "请重新登录";
                router.push({path: "/"})
                // // location.reload();
                store.state.user_info=null
                store.state.showlogin=true,
                store.state.showname=false
                store.state.zyshow=false
                break;
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

export function axioss(url,params){
    return inst(url,params)
}

export function adpaxios(url, params){
    return adinst.post(url,params)
}
export function adgaxios(url, params){
    return adinst(url,params)
}
export function hadpaxios(url, params){
    return hadinst.post(url,params)
}
export function hadgaxios(url, params){
    return hadinst(url,params)
}

