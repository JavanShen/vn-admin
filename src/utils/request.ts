import axios from 'axios'
import { getToken } from '@/utils/auth'

const service = axios.create({
    timeout: 1000
})

service.interceptors.request.use(config => {
    const token = getToken()
    if (token && config?.headers) {
        config.headers.Authorization = token
    }
    return config
})

export default service
