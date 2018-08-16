import axios from 'axios'
import qs from 'qs'
import $router from '@/router'
import $store from '@/store'

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  $store.dispatch('OPPEN_ERROR', error.message);
  return Promise.resolve(error.response)
})

const checkStatus = response => {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data
  }
  return {
    status: -404,
    msg: '网络异常'
  }
}

const checkCode = response => {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (response.code === 1) {
    $store.dispatch('OPPEN_ERROR', `服务器响应失败:)${response.message}`);
  }
  if (response.isAuthorized === 0) { 
    //console.log('请先登录') 
    $router.push('/login');
  }
  if (response.data) {
    // console.log('请求成功')
  }
  return response;
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: '',
      url,
      data: data,
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      transformRequest: [function (data) {
        return qs.stringify(data);
      }],
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: '',
      url,
      params,
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}
