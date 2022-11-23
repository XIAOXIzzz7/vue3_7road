<template>

  <el-button @click="te()">111</el-button>
  <div class="animate__animated animate__zoomInDown">
    123123
  </div>

</template>
<script lang="ts" setup>
import { ref } from 'vue'

function te(){
  var kg_bug_data={
    "a":47,"b":47,"c":45,"d":45,"e":45,"f":44,"g":43,"h":43,"i":42,"j":41,"k":41}
    var bug_count = 1
                                    var bug_cache = 0
                                    var bug_cache_data = 0
                                    for(var i in kg_bug_data){
                                    
                                        
                                        
                                        if (bug_count==1){
                                            bug_cache=kg_bug_data[i]
                                            bug_cache_data=30
                                            kg_bug_data[i]=30
                                            console.log(bug_cache);
                                            console.log(kg_bug_data[i]);
                                            
                                            
                                        }
                                        else if(bug_count>=2 && bug_count<=4){
                                            if (kg_bug_data[i] == bug_cache){
                                                bug_cache=kg_bug_data[i]
                                                kg_bug_data[i] = bug_cache_data
                                            }
                                            else{
                                                bug_cache=kg_bug_data[i]
                                                bug_cache_data=25
                                                kg_bug_data[i]=25
                                            }
                                            console.log(bug_cache);
                                            console.log(kg_bug_data[i]);
                                            
                                        }
                                        else if(bug_count>=5 && bug_count<=7){
                                            if (kg_bug_data[i] == bug_cache){
                                                bug_cache=kg_bug_data[i]
                                                kg_bug_data[i] = bug_cache_data
                                            }
                                            else{
                                                bug_cache=kg_bug_data[i]
                                                bug_cache_data=23
                                                kg_bug_data[i]=23
                                            }
                                            console.log(bug_cache);
                                            console.log(kg_bug_data[i]);
                                        }
                                        else if(bug_count>=8 && bug_count<=10){

                                            if (kg_bug_data[i] == bug_cache){
                                                bug_cache=kg_bug_data[i]
                                                kg_bug_data[i] = bug_cache_data
                                            }
                                            else{
                                                bug_cache=kg_bug_data[i]
                                                bug_cache_data=20
                                                kg_bug_data[i]=20
                                            }
                                          
                                        }
                                        else{
                                            if (kg_bug_data[i] == bug_cache){
                                                bug_cache=kg_bug_data[i]
                                                kg_bug_data[i] = bug_cache_data
                                            }
                                            else{
                                                bug_cache=kg_bug_data[i]
                                                bug_cache_data=15
                                                kg_bug_data[i]=15
                                            }
                                            
                                        }
                                        bug_count+=1
                                    
                                    }
                                    console.log(kg_bug_data);
                                    
        

}
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
