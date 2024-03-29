import axios from 'axios'
import { getToken } from '@/utils/auth'

import type { Response } from '@/types/request/common'
import type { Axios, AxiosRequestConfig, AxiosPromise } from 'axios'

type Res<T = unknown> = AxiosPromise<Response<T>>

interface Service extends Axios {
    <T>(config: AxiosRequestConfig): Res<T>
    <T>(url: string, config?: AxiosRequestConfig): Res<T>
}

const service: Service = axios.create({
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
