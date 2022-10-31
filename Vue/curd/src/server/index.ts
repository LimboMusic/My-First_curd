import axios from 'axios'
import { DataType } from '../interface'

axios.defaults.baseURL = 'http://localhost:3000'


export const addUser = (data: any) => axios.post('/user', data)
    .then(res => {
        console.log('添加成功！', res)
        return res.data
    })

export const getUser = (data: any) => axios.get('/user', { params: data })
    .then(res => {
        console.log('获取成功！', res)
        return res.data
    })

export const delUser = (data: any) => axios.delete(`/user/${data.id}`)
    .then(res => {
        console.log('删除成功！', res)
        return res.data
    })

export const updateUser = (data: any) => axios.patch(`/user/${data.id}`, data)
    .then(res => {
        console.log('更新成功', res)
        return res.data
    })