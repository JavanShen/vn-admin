import type { RouteRecordRaw } from 'vue-router'
import type { Role } from './user'

type Meta = Partial<{
    title: string
    icon: string
    roles: Role[]
    group: string
}>

type Router = RouteRecordRaw & {
    hidden?: boolean
    meta?: {
        title: string
        icon: string
        roles: Role[]
        group?: Meta
    }
    children?: Router[]
}

export { Router, Meta }
