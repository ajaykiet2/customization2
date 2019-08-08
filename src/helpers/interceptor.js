import axios from 'axios';
import store from '../store/index'

axios.defaults.timeout = 5000

axios.interceptors.request.use(config => {
    let token = store.state.auth.token
    if (token) {
        config.headers.common['Authorization'] = `Bearer ${token}` 
    }
    return config
}, error => {
    //eslint-disable-next-line
    console.group('[Axios][Interceptor] Request Error')
    //eslint-disable-next-line
    console.log(error)
    //eslint-disable-next-line
    console.groupEnd()
    //eslint-disable-next-lines
    return Promise.reject(error)
})

export default axios
