<template>
    <div v-if="$route.params.id=='TOP榜'" class="di">
        <div>
            <h5 class="title">手机TOP排行榜</h5>
            <h5 class="url">详情内容:
                <a href="http://doc.sh7road.com/pages/viewpage.action?pageId=20190820" target="_black" >http://doc.sh7road.com/pages/viewpage.action?pageId=20190820</a>
            </h5>
        </div>
    </div>
     <div v-if="$route.params.id=='白皮书'" class="di">
        <div>
            <h5 class="title">质量管理白皮书</h5>
            <h5 class="url">详情内容:
                <a href="http://doc.sh7road.com/pages/viewpage.action?pageId=27394055" target="_black" >http://doc.sh7road.com/pages/viewpage.action?pageId=27394055</a>
            </h5>
        </div>
    </div>
     <div v-if="$route.params.id=='发行流程'" class="di">
        <div>
            <h5 class="title">发行流程</h5>
            <h5 class="url">详情内容:
                <a href="http://doc.sh7road.com/pages/viewpage.action?pageId=9700733" target="_black" >http://doc.sh7road.com/pages/viewpage.action?pageId=9700733</a>
            </h5>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
    
    
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