<template>
    <div v-if="$route.params.id=='PerfDog'" class="di">
        <div>
            <h5 class="title">PerfDog</h5>
            <h5 class="url">详情内容:
                <a href="http://doc.sh7road.com/pages/viewpage.action?pageId=20190826" target="_black" >http://doc.sh7road.com/pages/viewpage.action?pageId=20190826</a>
            </h5>
        </div>
    </div>
     <div v-if="$route.params.id=='QNET'" class="di">
        <div>
            <h5 class="title">QNET</h5>
            <h5 class="url">详情内容:
                <a href="http://doc.sh7road.com/pages/viewpage.action?pageId=20190867" target="_black" >http://doc.sh7road.com/pages/viewpage.action?pageId=20190867</a>
            </h5>
        </div>
    </div>
     <div v-if="$route.params.id=='Win弱网'" class="di">
        <div>
            <h5 class="title">Win弱网</h5>
            <h5 class="url">详情内容:
                <a href="http://doc.sh7road.com/pages/viewpage.action?pageId=27394314" target="_black" >http://doc.sh7road.com/pages/viewpage.action?pageId=27394314</a>
            </h5>
        </div>
    </div>
    <div v-if="$route.params.id=='自动化'" class="di">
        <div>
            <h5 class="title">自动化</h5>
            <h5 class="url">详情内容:
                <a href="http://doc.sh7road.com/pages/viewpage.action?pageId=35127794" target="_black" >http://doc.sh7road.com/pages/viewpage.action?pageId=35127794</a>
            </h5>
        </div>
    </div>
    <div v-if="$route.params.id=='数据抓取'" class="di">
        <div>
            <h5 class="title">数据抓取</h5>
            <h5 class="url">详情内容:
                <a href="http://doc.sh7road.com/pages/viewpage.action?pageId=20189353" target="_black" >http://doc.sh7road.com/pages/viewpage.action?pageId=20189353</a>
            </h5>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
    // watch:{
    //     $route:{
    //     handler(){  
           
    //     }
    //     }
        
    // },
}
</script>
<style scoped>
.url{
    font-size:17px;
    text-align: left;
}
.di{
    margin:20px 20px 20px 50px
}
.title{
    
    font-size: 20px;
    text-align: left;
}
</style>