<template>
<div class="master">
    <div style="padding-left:10px">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>配置信息</el-breadcrumb-item>
        <el-breadcrumb-item>{{cnname}}</el-breadcrumb-item>
        <!-- <el-breadcrumb-item v-if="$route.params.id =='member'">人员</el-breadcrumb-item>
        <el-breadcrumb-item v-if="$route.params.id =='project'">项目</el-breadcrumb-item> -->


    </el-breadcrumb>
    </div>
    <div style="padding-left:10px">
       
        <h6 style="text-align:left;margin-top:20px;font-size:14px">{{cnname}}设置</h6>
    </div>
    <div style="display:flex;justify-content:space-between;padding-left:10px">
        <div style="display:flex;margin-top:20px">
            <el-button @click="add()" v-if="$route.params.id =='member' || $route.params.id =='project'" size="mini" style="padding:7px;height:30px" type="primary" plain ><h6 style="margin:0px;font-size:12px">添加{{cnname}}</h6></el-button>
            <el-button @click="membercount()" v-if="$route.params.id =='member'" size="mini" style="padding:7px;height:30px" type="primary" plain ><h6 style="margin:0px;font-size:12px">人员数量</h6></el-button>
            <el-button @click="admin()" v-if="$route.params.id =='member'" size="mini" style="padding:7px;height:30px;min-width:64px" type="primary" plain ><h6 style="margin:0px;font-size:12px">管理员</h6></el-button>
        </div>
        <div style="text-align:right;margin-top:15px;margin-bottom:10px">
            <el-input v-if="$route.params.id =='member'" style="width:130px;margin-right:50px;text-align:right" v-model="input" @input="inputchange()"  placeholder="搜索人员"   prefix-icon="el-icon-search"> </el-input> 
            <el-input v-if="$route.params.id =='project'" style="width:130px;margin-right:50px;text-align:right" v-model="input" @input="inputchange()"  placeholder="搜索项目"  prefix-icon="el-icon-search"></el-input>
        </div>
    </div>
    <div style="background-color:#C0C0C015;height:50px;border-bottom:1px solid #C0C0C050;border-top:1px solid #C0C0C050;width:100%">
        <div style="display:flex;padding-left:10px">
            <h6 style="margin:0px;font-size:13px;margin-top:18px">项目分类</h6>
            <el-button size="small" :class="{active:shows=1}" style="padding:5px;margin-left:30px;margin-top:9px;border:none">所有</el-button>
        </div>
    </div>
    <div style="padding-left:10px;display:flex">
        <el-table  :data="tableData">
            <el-table-column  label="id" min-width="10">
                <template v-slot="scope">
                    <h6 style="text-align:left;width:70px;padding:5px;font-size:14px;margin:0px;font-weight: normal">{{scope.row.id}}</h6>
                </template>
            </el-table-column>
             <el-table-column   v-if="$route.params.id =='project'" label="项目归属" min-width="10">
                <template v-slot="scope">
                    <h6  style="text-align:left;width:70px;padding:5px;font-size:14px;margin:0px;font-weight: normal">{{scope.row.fa}}</h6>
                </template>
            </el-table-column>
             <el-table-column  :label="cnname+'名称'" min-width="10">
                <template v-slot="scope">
                    <h6  style="text-align:left;width:200px;padding:5px;font-size:14px;margin:0px;font-weight: normal">{{scope.row.name}}</h6>
                </template>
            </el-table-column>
            <el-table-column v-if="$route.params.id =='group'" label="部门" min-width="10">
                <template v-slot="scope">
                    <h6  style="text-align:left;width:200px;padding:5px;font-size:14px;margin:0px;font-weight: normal">{{scope.row.project}}</h6>
                </template>
            </el-table-column>
            <el-table-column v-if="$route.params.id =='group'" label="分组" min-width="10">
                <template v-slot="scope">
                    <h6  style="text-align:left;width:200px;padding:5px;font-size:14px;margin:0px;font-weight: normal">{{scope.row.group}}</h6>
                </template>
            </el-table-column>
            <el-table-column v-if="$route.params.id =='group'" label="权限" min-width="10">
                <template v-slot="scope">
                    <h6  style="text-align:left;width:200px;padding:5px;font-size:14px;margin:0px;font-weight: normal">{{scope.row.permission}}</h6>
                </template>
            </el-table-column>
            <el-table-column   v-if="$route.params.id =='member'" label="部门" min-width="10">
                <template v-slot="scope">
                    <h6  style="text-align:left;width:70px;padding:5px;font-size:14px;margin:0px;font-weight: normal">{{scope.row.group}}</h6>
                </template>
            </el-table-column>
             <el-table-column   v-if="$route.params.id =='member'" label="人员情况" min-width="10">
                <template v-slot="scope">
                    <h6  style="text-align:left;width:70px;padding:5px;font-size:14px;margin:0px;font-weight: normal">{{scope.row.status}}</h6>
                </template>
            </el-table-column>
             <el-table-column   v-if="$route.params.id =='project'" label="项目ID" min-width="10">
                <template v-slot="scope">
                    <h6  style="text-align:left;width:200px;padding:5px;font-size:14px;margin:0px;font-weight: normal">{{scope.row.project_id}}</h6>
                </template>
            </el-table-column>
             <el-table-column label="操作" min-width="10">
                 <template v-slot="scope">
                  <el-popover
                        placement="bottom-start"
                       
                        :width="50"
                        trigger="hover"
                      
                    >
                    <div><h6 style="font-size:13px;font-weight:bold;color:C0C0C015;margin:0px;font-weight: normal">{{cnname}}操作</h6></div>
                    <div style="display:flex;flex-direction:column">
                        <el-button @click="permission(scope.row)" size="small" style="border:none;padding:0px;width:100px;margin:0px;font-weight: normal"><h6 style="font-size:13px;margin:0px;font-weight: normal">编辑{{cnname}}</h6></el-button>
                        <!-- <el-button @click="edit(scope.row)" size="small" style="border:none;padding:0px;width:100px;margin:0px;font-weight: normal"><h6 style="font-size:13px;margin:0px;font-weight: normal">编辑{{cnname}}</h6></el-button>
                        <el-button @click="del (scope.row)" size="small" style="border:none;padding:0px;width:100px;margin:0px;margin:0px;font-weight: normal"><h6 style="font-size:13px;margin:0px;font-weight: normal;margin:0px;font-weight: normal">移除{{cnname}}</h6></el-button> -->
                    </div>
                        <template #reference>
                        <el-button style="padding:0px;border:none">
                            <svg t="1636596983884" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2996" width="20" height="20"><path d="M512 814.545455c-39.563636 0-69.818182-30.254545-69.818182-69.818182s30.254545-69.818182 69.818182-69.818182 69.818182 30.254545 69.818182 69.818182-30.254545 69.818182-69.818182 69.818182z m0-232.727273c-39.563636 0-69.818182-30.254545-69.818182-69.818182s30.254545-69.818182 69.818182-69.818182 69.818182 30.254545 69.818182 69.818182-30.254545 69.818182-69.818182 69.818182z m0-232.727273c-39.563636 0-69.818182-30.254545-69.818182-69.818182s30.254545-69.818182 69.818182-69.818182 69.818182 30.254545 69.818182 69.818182-30.254545 69.818182-69.818182 69.818182z" fill="#C0C0C0" p-id="2997"></path></svg>
                        </el-button>
                        </template>
                    </el-popover>
                <!-- <template v-slot="scope">
                    <el-button></el-button>
                </template> -->
                 </template>
            </el-table-column>
             

        </el-table>
            <!-- 项目的拓展栏，通过route判断展示内容 -->
            <el-dialog
                v-model="edits"
                width="30%"
               
                >
                <div><h6 style="min-height:20px">{{editsname}}</h6></div>
                <hr style="color:#C0C0C0">
                <!-- <div v-if="$route.params.id =='member'" style="margin-top:50px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">成员昵称：</h6> 
                    <div style="margin-left:100px"><el-input v-model="editsname" size="small" :placeholder="editsname"></el-input></div>
                </div> -->
                <!-- <div  v-if="$route.params.id =='member'" style="margin-top:10px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">部门：</h6> 
                    <div style="margin-left:128px"><el-input v-model="editsinfo" size="small" :placeholder="editsinfo"></el-input></div>
                </div> -->
                <div  v-if="$route.params.id =='member'" style="margin-top:10px;display:flex;flex-direction:column">
                   <div style="margin-top:10px;display:flex">
                        <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:12px">部门：</h6> 
                        <div style="margin-left:128px">
                            <el-select v-model="editsgroup" placeholder="请选择">
                                <el-option
                                v-for="item in editsoption"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </div>
                   </div>
                   <div style="margin-top:20px;display:flex">
                        <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:12px">人员情况：</h6> 
                        <div style="margin-left:100px">
                            <el-select v-model="editsstatus" placeholder="请选择">
                                <el-option
                                v-for="item in editsstatusoption"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </div>
                   </div>
                    
                </div>
                 <!-- <div v-if="$route.params.id =='project'" style="margin-top:50px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">项目归属：</h6> 
                    <div style="margin-left:100px"><el-input v-model="editsfa" size="small" :placeholder="editsfa"></el-input></div>
                </div> -->
                 <div v-if="$route.params.id =='project'" style="margin-top:50px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">项目归属：</h6> 
                    <div style="margin-left:100px">
                        <div style="width:200px">
                            <el-select v-model="editsfa" size="small" placeholder="请选择">
                            <el-option
                            v-for="item in addsoption2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            >
                            </el-option>
                        </el-select>
                        </div>
                    </div>
                </div>
                 <div  v-if="$route.params.id =='project'" style="margin-top:10px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">项目名称：</h6> 
                    <div style="margin-left:100px"><el-input v-model="editsname" size="small" :placeholder="editsname"></el-input></div>
                </div>
                 <div  v-if="$route.params.id =='project'" style="margin-top:10px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">项目id：</h6> 
                    <div style="margin-left:118px"><el-input v-model="editspid" size="small" ></el-input></div>
                </div>
                    <div style="margin-top:100px;margin-left:300px">
                        <span class="dialog-footer">
                            <el-button size="small" @click="test()">取 消</el-button>
                            <el-button size="small" type="primary" @click="editsyes()">确 定</el-button>
                        </span>
                    </div>
             </el-dialog>
             <!-- 删除拓展栏 -->
             <el-dialog
                v-model="dels"
                width="20%"
               
                >
                <div><h6><svg t="1636622032894" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3981" width="25" height="25"><path d="M1001.661867 796.544c48.896 84.906667 7.68 157.013333-87.552 157.013333H110.781867c-97.834667 0-139.050667-69.504-90.112-157.013333l401.664-666.88c48.896-87.552 128.725333-87.552 177.664 0l401.664 666.88zM479.165867 296.533333v341.333334a32 32 0 1 0 64 0v-341.333334a32 32 0 1 0-64 0z m0 469.333334v42.666666a32 32 0 1 0 64 0v-42.666666a32 32 0 1 0-64 0z" fill="#FAAD14" p-id="3982"></path></svg>&nbsp;&nbsp;&nbsp;&nbsp;警告&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6></div>
                <hr style="color:#C0C0C0">
                <div>是否删除--{{delsinfo}}--{{delsname}}</div>
                <div style="margin-top:30px;margin-left:150px">
                        <span class="dialog-footer">
                            <el-button size="small" @click="delsno()">取 消</el-button>
                            <el-button size="small" type="primary" @click="delsyes()">确 定</el-button>
                        </span>
                    </div>
             </el-dialog>
             <!-- 修改权限拓展栏 -->
             <el-dialog
                v-model="permission1"
                width="20%"
                >
                <div><h6><svg t="1636622032894" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3981" width="25" height="25"><path d="M1001.661867 796.544c48.896 84.906667 7.68 157.013333-87.552 157.013333H110.781867c-97.834667 0-139.050667-69.504-90.112-157.013333l401.664-666.88c48.896-87.552 128.725333-87.552 177.664 0l401.664 666.88zM479.165867 296.533333v341.333334a32 32 0 1 0 64 0v-341.333334a32 32 0 1 0-64 0z m0 469.333334v42.666666a32 32 0 1 0 64 0v-42.666666a32 32 0 1 0-64 0z" fill="#FAAD14" p-id="3982"></path></svg>&nbsp;&nbsp;&nbsp;&nbsp;修改人员所在项目组&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6></div>
                <hr style="color:#C0C0C0">
                <div  style="margin-top:50px;display:flex">
                    <h6 style="text-align:left;margin-left:50px;font-size:14px;margin-bottom:0px;margin-top:7px;width:100px">分组：</h6> 
                    <div style="margin-left:50px"><el-input v-model="addpermission" size="small" placeholder="部门名称">{{row.group}}</el-input></div>
                </div>
                <div style="margin-top:30px;margin-left:150px">
                        <span class="dialog-footer">
                            <el-button size="small" @click="permission1no()">取 消</el-button>
                            <el-button size="small" type="primary" @click="permission1yes()">确 定</el-button>
                        </span>
                    </div>
             </el-dialog>
             <!-- 添加拓展栏 -->
             <el-dialog
                v-model="adds"
                width="30%"
                @close="this.addsno()"
               
                >
                <div v-if="$route.params.id =='member'"><h6>添加成员</h6></div>
                <div v-if="$route.params.id =='project'"><h6>添加项目</h6></div>
                <hr style="color:#C0C0C0">
                <div v-if="$route.params.id =='member'" style="margin-top:50px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">成员昵称：</h6> 
                    <div style="margin-left:100px"><el-input v-model="addsname" size="small" placeholder="成员昵称"></el-input></div>
                </div>
                <!-- <div  v-if="$route.params.id =='member'" style="margin-top:10px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">部门：</h6> 
                    <div style="margin-left:128px"><el-input v-model="addsinfo" size="small" placeholder="成员部门"></el-input></div>
                </div> -->
                <div  v-if="$route.params.id =='member'" style="margin-top:10px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">部门：</h6> 
                    <div style="margin-left:128px">
                        <div style="width:200px">
                            <el-select v-model="addsinfo" size="small" placeholder="请选择">
                            <el-option
                            v-for="item in editsoption"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            >
                            </el-option>
                        </el-select>
                        </div>
                    </div>
                </div>
                 <!-- <div v-if="$route.params.id =='project'" style="margin-top:50px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">项目归属：</h6> 
                    <div style="margin-left:100px"><el-input v-model="addsfa" size="small" placeholder="项目归属"></el-input></div>
                </div> -->
                 <div v-if="$route.params.id =='project'" style="margin-top:50px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">项目归属：</h6> 
                    <div style="margin-left:100px">
                        <div style="width:200px">
                            <el-select v-model="addsfa" size="small" placeholder="请选择">
                            <el-option
                            v-for="item in addsoption2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            >
                            </el-option>
                        </el-select>
                        </div>
                    </div>
                </div>
                <div  v-if="$route.params.id =='project'" style="margin-top:10px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">项目名称：</h6> 
                    <div style="margin-left:100px"><el-input v-model="addsname" size="small" placeholder="项目名称"></el-input></div>
                </div>
                 <div  v-if="$route.params.id =='project'" style="margin-top:10px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">项目id：</h6> 
                    <div style="margin-left:118px"><el-input v-model="addspid" size="small" placeholder="项目id"></el-input></div>
                </div>
                    <div style="margin-top:100px;margin-left:300px">
                        <span class="dialog-footer">
                            <el-button size="small" @click="addsno()">取 消</el-button>
                            <el-button size="small" type="primary" @click="addsyes()">确 定</el-button>
                        </span>
                    </div>
             </el-dialog>
             <!-- 人员数量拓展栏 -->
             <el-dialog
                v-model="memcount"
                width="30%"
                @close="this.memcountclose()"
               
                >
                <div><h6>人员数量</h6></div>
                <hr style="color:#C0C0C0">
                <div style="margin-top:10px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">发行：</h6> 
                    <div style="margin-left:100px"><el-input v-model="fxcount" type="number" size="small" min="0"></el-input></div>
                </div>
                <div style="margin-top:10px;display:flex">
                    <h6 style="text-align:left;margin-left:100px;font-size:14px;margin-bottom:0px;margin-top:7px">自研：</h6> 
                    <div style="margin-left:100px"><el-input v-model="zycount" type="number" size="small" min="0"></el-input></div>
                </div>
                <div style="margin-top:30px;margin-left:150px">
                        <span class="dialog-footer">
                            <el-button size="small" @click="countno()">取 消</el-button>
                            <el-button size="small" type="primary" @click="countyes()">确 定</el-button>
                        </span>
                    </div>
             </el-dialog>
             <!-- 管理员拓展栏 -->
             <el-dialog
                v-model="adminlist"
                width="32%"
                >
                <div><h6>管理员信息</h6></div>
                <hr style="color:#C0C0C0">
                <div style="margin-left:20px">
                    <div style="text-align:left">
                        <el-button @click="addadmin()" size="mini" style="padding:7px;height:30px;margin:0px;font-weight: normal" type="primary" plain ><h6 style="margin:0px;font-size:12px;margin:0px;font-weight: normal">添加管理员</h6></el-button>
                    </div>
                    <el-table :data="admintable" style="width: 100%">
                        <!-- <el-table-column prop="date" label="日期" min-width="170"> </el-table-column> -->
                        <el-table-column prop="admin" label="姓名" min-width="400"> </el-table-column>
                        <el-table-column label="操作" min-width="120">
                            <template v-slot="scope">
                            <el-popover
                                    placement="bottom-start"
                                
                                    :width="50"
                                    trigger="hover"
                                
                                >
                                <div><h6 style="font-size:13px;font-weight:bold;color:C0C0C015">{{cnname}}操作</h6></div>
                                <div style="display:flex;flex-direction:column">
                                    <!-- <el-button @click="editadmin(scope.row)" size="small" style="border:none;padding:0px;width:100px"><h6 style="font-size:13px">编辑{{cnname}}</h6></el-button> -->
                                    <el-button @click="deladmin (scope.row)" size="small" style="border:none;padding:0px;width:100px;margin:0px"><h6 style="font-size:13px;margin:0px;font-weight: normal">移除{{cnname}}</h6></el-button>
                                </div>
                                    <template #reference>
                                    <el-button style="padding:0px;border:none">
                                        <svg t="1636596983884" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2996" width="20" height="20"><path d="M512 814.545455c-39.563636 0-69.818182-30.254545-69.818182-69.818182s30.254545-69.818182 69.818182-69.818182 69.818182 30.254545 69.818182 69.818182-30.254545 69.818182-69.818182 69.818182z m0-232.727273c-39.563636 0-69.818182-30.254545-69.818182-69.818182s30.254545-69.818182 69.818182-69.818182 69.818182 30.254545 69.818182 69.818182-30.254545 69.818182-69.818182 69.818182z m0-232.727273c-39.563636 0-69.818182-30.254545-69.818182-69.818182s30.254545-69.818182 69.818182-69.818182 69.818182 30.254545 69.818182 69.818182-30.254545 69.818182-69.818182 69.818182z" fill="#C0C0C0" p-id="2997"></path></svg>
                                    </el-button>
                                    </template>
                                </el-popover>
                            <!-- <template v-slot="scope">
                                <el-button></el-button>
                            </template> -->
                            </template>
                        </el-table-column>
                    
                    </el-table>
                </div>
                <!-- <div style="margin-top:30px;margin-left:150px">
                        <span class="dialog-footer">
                            <el-button size="small" @click="adminno()">取 消</el-button>
                            <el-button size="small" type="primary" @click="adminyes()">确 定</el-button>
                        </span>
                    </div> -->
             </el-dialog>
             <!-- 添加管理员拓展栏 -->
             <el-dialog
                v-model="addadminlist"
                width="20%"
                @close="this.addadminno()"
                >
                <div><h6>添加管理员</h6></div>
                <hr style="color:#C0C0C0">
               
                <div style="margin-top:10px;display:flex">
                    <h6 style="text-align:left;width:100px;margin-left:80px;font-size:14px;margin-bottom:0px;margin-top:7px">姓名：</h6> 
                    <div style="margin-left:40px"><el-input v-model="adminname" size="small" ></el-input></div>
                </div>
                <div style="margin-top:30px;margin-left:190px">
                    <span class="dialog-footer">
                        <el-button size="small" @click="addadminno()">取 消</el-button>
                        <el-button size="small" type="primary" @click="addadminyes()">确 定</el-button>
                    </span>
                </div>
                   
             </el-dialog>
             <!-- 删除管理员拓展栏 -->
             <el-dialog
                v-model="deladminlist"
                width="20%"
               
                >
                <div><h6><svg t="1636622032894" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3981" width="25" height="25"><path d="M1001.661867 796.544c48.896 84.906667 7.68 157.013333-87.552 157.013333H110.781867c-97.834667 0-139.050667-69.504-90.112-157.013333l401.664-666.88c48.896-87.552 128.725333-87.552 177.664 0l401.664 666.88zM479.165867 296.533333v341.333334a32 32 0 1 0 64 0v-341.333334a32 32 0 1 0-64 0z m0 469.333334v42.666666a32 32 0 1 0 64 0v-42.666666a32 32 0 1 0-64 0z" fill="#FAAD14" p-id="3982"></path></svg>&nbsp;&nbsp;&nbsp;&nbsp;警告&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6></div>
                <hr style="color:#C0C0C0">
                <div style="display:flex"><span style="margin-left:70px;font-weight: normal">是否移除管理员：</span><span style="margin-left:60px">{{delname['admin']}}</span></div>
          
                <div style="margin-top:30px;margin-left:190px">
                    <span class="dialog-footer">
                        <el-button size="small" @click="deladminno()">取 消</el-button>
                        <el-button size="small" type="primary" @click="deladminyes()">确 定</el-button>
                    </span>
                </div>
                   
             </el-dialog>
    </div>
    

   
</div>
</template>
<script>
import {hgaxios as axios} from "../../utils/request"
import {hpaxios} from "../../utils/request"
// import axios from "axios"
import { ElMessage } from 'element-plus'
// import { onBeforeRouteUpdate } from "vue-router";
export default {
    name:'qa_bug_zy',
    data(){
        return{
           name:"",
           cnname:"",
           input:"",
           tableData:[],
           shows:1,
           huan:"",
           permission1:false,
           edits:false,
           dels:false,
           adds:false,
           group2:{},
           editsname:"",
           editsfa:"",
           editspid:"",
           editsgroup:"",
           editsfaen:"",
           editsinfo:"",
           editsstatus:"",
            radio1: '',
            perchoice:[
                {
                value: '1',
                label: '1',
            },
            {
                value: '0',
                label: '0',
            },
            ],
           editsoption:[
          {
            value: '上海外包',
            label: '上海外包',
          },
          {
            value: '上海正职',
            label: '上海正职',
          },
          {
            value: '深圳外包',
            label: '深圳外包',
          },
          {
            value: '深圳正职',
            label: '深圳正职',
          },
        ],
        editsstatusoption:[
            {
            value: '在职',
            label: '在职',
          },
          {
            value: '离职',
            label: '离职',
          },
        ],
           delsname:"",
           delsinfo:"",
           delsfaen:"",
           delspid:"",
           addsname:"",
           addpermission:"",
           addsfa:"",
           addspid:"",
           addsinfo:"",
           addsoption2:[
        {
            value: '发行',
            label: '发行',
          },
          {
            value: '自研',
            label: '自研',
          },
           ],
           memcount:false,
           adminlist:false,
           addadminlist:false,
           deladminlist:false,
           fxcount:0,
           zycount:0,
           admintable: [],
           adminname:"",
           delname:"",
           delstatus:"",
           delgroup:"",
           usernameinfo:""
        }
    },
    methods:{
        mem(){
            axios({
            url: '/api/v1/AdminConfig/',
            method:'get',
            params:{
                    type:this.name
                }
            }).then(res => {
                var lis = []
                var count = 0
                for (var i in res.data.data){
                    count = count+1
                    var info = res.data.data[i]
                    
                    lis.push({  "id":count,
                                "name":i,
                                "group":info['group'],
                                "status":info['status']         })
                    
                }
                
                this.tableData = lis
            })
        },
        group(){
            axios({
            url: '/api/v1/SetAuth/',
            method:'get',
            }).then(res => {
                var lis = []
                var count = 0
                console.log(res.data.data);
                for (var i in res.data.data){
                    count = count+1
                    console.log(i);
                    var info = res.data.data[i]
                    
                    lis.push({  "id":count,
                                "name":info["cn_name"],
                                "project":info["project"],
                                "permission":info["permission"],
                                "group":info['group'],
                                                    })
                    
                }
                this.tableData = lis
            })
        },
        pro(){
              
                 axios({
                url: '/api/v1/AdminConfig/',
                method:'get',
                params:{
                        type:this.name
                    }
                }).then(res => {
                    var lis = []
                    var count = 0
                    var data = res.data.data
                    var new_data={}
                    for (var item in data){
                        if (item =="fx"){
                            new_data["发行"] = data[item]
                        }
                        else if (item =="zy"){
                            new_data["自研"] = data[item]
                        }
                    
                    }
                
                
                    for (var i in new_data){
                        for (var n in new_data[i]){                
                            count = count +1
                            lis.push(
                                {
                                    "id":count,
                                    "fa":i,
                                    "name":n,
                                    "project_id":new_data[i][n]
                                }
                            )

                        }
                    }
                    this.tableData = lis
                })
         
        },
     
        inputchange(){
            if (this.input){
                var lis=[]
                var data = this.tableData
                for (var item in data){
                    if (data[item]["name"].indexOf(this.input) != -1) {
                        lis.push(data[item])
                    }
                }
                this.tableData = lis
            }
            else{
                if (this.$route.params.id == "member"){
                this.cnname = "人员"
             
                this.mem()
                }
                 else if(this.$route.params.id == "project"){
                    this.cnname = "项目"
                    this.pro()
          }
        }
            
        },
        edit(row){
            axios({
            url: '/api/v1/AdminConfig/',
            method:'get',
            params:{
                    type:this.name
                }})
            this.edits=true
            
            this.editsfa = row.fa
            this.editspid = row.project_id
            this.editsname = row.name
            this.editsgroup =  row.group
            this.editsstatus =  row.status
            if (this.editsfa =="发行"){
                this.editsfaen="fx"
            }
            else if (this.editsfa =="自研"){
                this.editsfaen="zy"
            }

        },
        permission(row){
            this.permission1 = true
            if (row.group != ""){
                this.group2 = row
            }
            console.log(this.group2);
        },
        add(){
            axios({
            url: '/api/v1/AdminConfig/',
            method:'get',
            params:{
                    type:this.name
                }})
            this.adds=true
            
            

        },
        del(row){
            axios({
            url: '/api/v1/AdminConfig/',
            method:'get',
            params:{
                    type:this.name
                }})
    
            this.dels=true
            this.delsname=row.name
            this.delsinfo = row.info
            this.delsfa = row.fa
            this.delstatus = row.status
            this.delspid = row.project_id
            if (this.delsfa =="发行"){
                this.delsfaen="fx"
            }
            else if (this.delsfa =="自研"){
                this.delsfaen="zy"
            }
        },
        permission1no(){
            this.permission1 = false
        },
        permission1yes(){
            // if (this.addpermission=='') {
            // ElMessage.warning({
            //         message: '警告，组名不能为空',
            //         type: 'warning',
            //     })
                    // }
            console.log(this.addpermission);
            console.log(this.group2);
        },
        editsyes(){
            if (this.$route.params.id == "member"){
                const name = this.editsname
                const group = this.editsgroup
                const status = this.editsstatus
                hpaxios("/api/v1/AdminConfig/",{type:"member",edit:"update",data:{[name]:{"group":group,"status":status}}})
                        .then(res => {
                           
                            if (res.data.msg=="人员配置更新成功"){
                                    ElMessage.success({
                                            message: '成功，人员信息已更新',
                                            type: 'success',
                                        })
                                    this.edits=false
                                    this.mem()
                            }
                            else{
                                ElMessage.error('错误，未更新成功')
                            }
                        })
                }
                 else if(this.$route.params.id == "project"){
                    const name = this.editsname
                    if (this.editsfa =="发行"){
                        this.editsfaen="fx"
                        const fa = this.editsfaen
                        var id = this.editspid
                        hpaxios("/api/v1/AdminConfig/",{type:"project",edit:"update",data:{[fa]:{[name]:parseInt(id)}}})
                            .then(res => {
                              
                                if (res.data.msg=="项目配置更新成功"){
                                        ElMessage.success({
                                                message: '成功，项目信息已更新',
                                                type: 'success',
                                            })
                                        this.edits=false
                                        this.pro()
                                }
                                else{
                                    ElMessage.error('错误，未更新成功')
                                }
                            })
                    }
                    else if (this.editsfa =="自研"){
                        this.editsfaen="zy"
                        const fa = this.editsfaen
                        const id = this.editspid
                        hpaxios("/api/v1/AdminConfig/",{type:"project",edit:"update",data:{[fa]:{[name]:id}}})
                            .then(res => {
                              
                                if (res.data.msg=="项目配置更新成功"){
                                        ElMessage.success({
                                                message: '成功，项目信息已更新',
                                                type: 'success',
                                            })
                                        this.edits=false
                                        this.pro()
                                }
                                else{
                                    ElMessage.error('错误，未更新成功')
                                }
                            })
                     }
                    else{
                        ElMessage.warning({
                        message: '警告，项目归属只可以为 发行 或 自研',
                        type: 'warning',
                        
                    })
                    }
                    
          }
        },
        test(){
            this.edits=false
        },
        
        delsyes(){
             if (this.$route.params.id == "member"){
                const name = this.delsname
                const group = this.delgroup
                const status = this.delstatus
                hpaxios("/api/v1/AdminConfig/",{type:"member",edit:"del",data:{[name]:{"group":group,"status":status}}})
                        .then(res => {
                            if (res.data.msg=="人员配置删除成功"){
                                    ElMessage.success({
                                            message: '成功，人员已删除',
                                            type: 'success',
                                        })
                                    this.dels=false
                                    this.mem()
                            }
                            else{
                                ElMessage.error('错误，未删除成功')
                            }
                        })
                        
                             
                }
                 else if(this.$route.params.id == "project"){
                    const name = this.delsname
                    const fa = this.delsfaen
                    var id = this.delspid
                    hpaxios("/api/v1/AdminConfig/",{type:"project",edit:"del",data:{[fa]:{[name]:id}}})
                        .then(res => {
                           
                            if (res.data.msg=="项目配置删除成功"){
                                    ElMessage.success({
                                            message: '成功，项目已删除',
                                            type: 'success',
                                        })
                                    this.dels=false
                                    this.pro()
                            }
                            else{
                                ElMessage.error('错误，未删除成功')
                            }
                        })
          }
        },
        delsno(){
            this.dels=false
        },
        addsyes(){
            if (this.$route.params.id == "member"){
                if (this.addsname=='') {
                        ElMessage.warning({
                                message: '警告，用户名称不能为空',
                                type: 'warning',
                            })
                    }
                else if(this.addsinfo==''){
                        ElMessage.warning({
                            message: '警告，用户部门不能为空',
                            type: 'warning',
                        })
                }
                else{
                    const name = this.addsname
                    var info = this.addsinfo

                    hpaxios("/api/v1/AdminConfig/",{type:"member",edit:"add",data:{[name]:{"group":info,"status":"在职"}}})
                        .then(res => {
                            if (res.data.msg=="人员配置新增成功"){
                                    ElMessage.success({
                                            message: '成功，人员已添加',
                                            type: 'success',
                                        })
                                    this.addsname=""
                                    this.addsinfo=""
                                    this.adds=false
                                    this.mem()
                            }
                            else{
                                ElMessage.error('错误，未添加成功')
                            }
                        })
                        
                }
                }
            else if(this.$route.params.id == "project"){
              
                if (this.addsfa=='') {
                        ElMessage.warning({
                                message: '警告，项目归类不能为空',
                                type: 'warning',
                            })
                    }
               else if(this.addsname==''){
                        ElMessage.warning({
                            message: '警告，项目名称不能为空',
                            type: 'warning',
                        })
                }
                else if(this.addspid==''){
                        ElMessage.warning({
                            message: '警告，项目id不能为空',
                            type: 'warning',
                        })
                }
                else{
                    if (this.addsfa =="发行"){
                        this.addsfaen="fx"
                        const name = this.addsname
                        const fa = this.addsfaen
                        const id = this.addspid
                        hpaxios("/api/v1/AdminConfig/",{type:"project",edit:"add",data:{[fa]:{[name]:id}}})
                            .then(res => {
                           
                                if (res.data.msg=="项目配置新增成功"){
                                        ElMessage.success({
                                                message: '成功，项目已添加',
                                                type: 'success',
                                            })
                                        this.addsname=""
                                        this.addsfa=""
                                        this.addspid=""
                                        this.adds=false
                                        this.pro()
                                }
                                else{
                                    ElMessage.error('错误，未添加成功')
                                }
                            })
                    }
                    else if (this.addsfa =="自研"){
                        this.addsfaen="zy"
                        const name = this.addsname
                        const fa = this.addsfaen
                        const id = this.addspid
                        hpaxios("/api/v1/AdminConfig/",{type:"project",edit:"add",data:{[fa]:{[name]:id}}})
                            .then(res => {
                              
                                if (res.data.msg=="项目配置新增成功"){
                                        ElMessage.success({
                                                message: '成功，项目已添加',
                                                type: 'success',
                                            })
                                        this.addsname=""
                                        this.addsfa=""
                                        this.addspid=""
                                        this.adds=false
                                        this.pro()
                                }
                                else{
                                    ElMessage.error('错误，未添加成功')
                                }
                            })
                    }
                    else{
                         ElMessage.warning({
                        message: '警告，项目归属只可以为 发行 或 自研',
                        type: 'warning',
                        
                    })
                    }
                    
                        
                }
        
                }
           
        },
        addsno(){
            this.addsname=""
            this.addsinfo=""
            this.addsfa=""
            this.addspid=""
            this.adds=false
        },
        membercount(){
            this.memcount=true
            axios({
                url: '/api/v1/AdminConfig/',
                method:'get',
                params:{
                        type:"count"
                    }
                }).then(res => {
                   
                    this.fxcount=res.data.data.fx
                    this.zycount=res.data.data.zy
                })

        },
        admin(){
            this.adminlist=true
            axios({
                url: '/api/v1/AdminConfig/',
                method:'get',
                params:{
                        type:"admin"
                    }
                }).then(res => {
              
                    const data = res.data.data
                    var datalist = []
                    for (const item in data){
                        datalist.push({admin:data[item]})
                    }
                 
                    this.admintable=datalist
               
                   
                    // console.log(this.adminlist);
                    // console.log(typeof(this.adminlist));
                   
                })
        },
        addadmin(){
            this.addadminlist=true
        },

        addadminno(){
            this.adminname=""
            this.addadminlist=false
        },
        addadminyes(){
            var adname = this.adminname
            hpaxios("/api/v1/AdminConfig/",{type:"admin",edit:"add",data:{"admin":adname}})
            .then(res => {
                if (res.data.msg=="添加管理员权限成功"){
                                ElMessage.success({
                                        message: '成功，添加管理员权限成功',
                                        type: 'success',
                                    })
                                this.addadminlist=false
                                this.admin()
                                
                        }
                        else{
                            ElMessage.error('错误，添加管理员权限失败')
                        }
            })
        },
        deladmin(row){
            this.delname=row
            this.deladminlist=true
        },
        deladminno(){
            this.deladminlist=false
        },
        deladminyes(){
            var dename = this.delname['admin']
            hpaxios("/api/v1/AdminConfig/",{type:"admin",edit:"del",data:{"admin":dename}})
            .then(res => {
              
                if (res.data.msg=="删除管理员权限成功"){
                                ElMessage.success({
                                        message: '成功，删除管理员权限成功',
                                        type: 'success',
                                    })
                                    this.deladminlist=false
                                        this.admin()
                                    // if (dename == this.usernameinfo) {
                                    //     this.$router.go(0);
                                    // }
                                    // else{
                                    //     this.deladminlist=false
                                    //     this.admin()
                                    // }      
                        }
                        else{
                            ElMessage.error('错误，删除管理员权限失败')
                        }
            })
        },
        memcountclose(){
            this.countno()
        },
        countno(){
            this.memcount=false
        },
        countyes(){
            var fx = this.fxcount
            var zy = this.zycount
            hpaxios("/api/v1/AdminConfig/",{type:"count",edit:"update",data:{"fx":parseInt(fx),"zy":parseInt(zy)}})
                    .then(res => {
                        if (res.data.msg=="人员数配置更新成功"){
                                ElMessage.success({
                                        message: '成功，人员数配置更新成功',
                                        type: 'success',
                                    })
                                this.memcount=false
                                
                        }
                        else{
                            ElMessage.error('错误，人员数配置更新失败')
                        }
                    })
        }


       
    },
    mounted(){
        //  axios({
        //     url: '/api/v1/AdminConfig/',
        //     method:'get',
        //     params:{
        //             type:this.name
        //         }
        //     }).then(res => {
        //         var count = 0
        //         for (var i in res.data.data){
        //             console.log(i);
        //             count = count+1
        //             this.tableData.push({"id":count,
        //                                   "name":i,
        //                                   "info":res.data.data[i]         })
        //         }
        //     })
    },
    watch:{
       
        $route:{
        handler(){
            this.name = this.$route.params.id
            
            if (this.$route.params.id == "member"){
                this.cnname = "人员"
             
                this.mem()
            }
            else if(this.$route.params.id == "project"){
                this.cnname = "项目"
                this.pro()
            }
            else if(this.$route.params.id == "group"){
                this.cnname = "人员权限"
                this.group()
            }

        },
        immediate:true
        }
        
    },


}
</script>
<style scoped>
.master{
    margin:10px;
    margin-top:0px;
    padding: 0px;
    padding-top: 10px;
    /* padding-left:10px; */
    background-color: #ffffff;
    min-height: 900px;

}
.active{
  color: #3a8ee6;
  background-color: #ecf5ff;
  outline: 0;
}
.input{
    width:100px
}
</style>