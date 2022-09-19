import type { RouteRecordRaw } from 'vue-router'
import type { Role } from './request/login'

type Meta = Partial<{
    title: string
    icon: string
    roles: Role[]
    group: string
    keepAlive: boolean
    [key: string]: unknown
}>

type Router = RouteRecordRaw & {
    hidden?: boolean
    meta?: Meta
    children?: Router[]
}

export type { Router, Meta }
