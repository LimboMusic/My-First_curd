<script setup lang="ts">
import { ref, reactive } from 'vue'
import { addUser, delUser, updateUser, getUser } from './server'

const searchInfo = reactive({
  keyWord: ""
})

let tableData = ref([])
let form = reactive({
  name: "",
  desc: "",
  id: 0,
})
let dialogVisible = ref<boolean>(false)
// 添加数据
const handleAdd = () => {
  dialogVisible.value = true
}
// 打开form表格
const handleEdit = (row: any) => {
  Object.assign(form,row)
  dialogVisible.value = true
}
// 关闭form表格
const handleExit = () => {
  dialogVisible.value = false
}
// 保存和修改表格数据
const handleSave = async () => {
  if (form.id) {
    await updateUser(form)
  } else {
    await addUser(form)
  }
  handleExit()
  init()
}
// 删除表格某一行数据
const handleDlete = async (row: any) => {
  await delUser({ id: row.id })
  init()
}
// 初始化表格数据 
const init = async () => {
  const list = await getUser(searchInfo)
  tableData.value = list
}
init()
</script>

<template>
  <div class="wrapper">
    <div>
      <el-input style="width: 300px;" v-model="searchInfo.keyWord"></el-input>
      <el-button type="primary" style="margin-left: 10px;" @click="init">搜索</el-button>
      <el-button type="primary" @click="handleAdd">添加</el-button>
    </div>
    <el-table border :data="tableData" stripe style="width: 50%; margin-top: 20px;">
      <el-table-column prop="id" label="Id" width="180" />
      <el-table-column prop="name" label="名字" width="180" />
      <el-table-column prop="desc" label="描述" width="180" />
      <el-table-column width="180">
        <template #default="scope">
          <el-button type="primary" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="danger" @click="handleDlete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <el-dialog v-model="dialogVisible" title="弹框" width="30%">
    <el-form :model="form">
      <el-form-item prop="name" label="名称">
        <el-input v-model="form.name" placeholder="名称" />
      </el-form-item>
      <el-form-item prop="desc" label="描述">
        <el-input v-model="form.desc" placeholder="描述" />
      </el-form-item>
      <el-form-item style="display: flex; flex-direction: row-reverse; width: 100%;">
        <el-button type="primary" @click="handleSave">保存</el-button>
        <el-button @click="handleExit">关闭</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<style scoped lang="less">
.wrapper {
  box-sizing: border-box;
  padding: 40px;
  width: 100%;
  height: 100vh;

}
</style>
