import { fixedRoutes, asyncRoutes } from '@/router/routes.js'
import { defineStore } from 'pinia'

import { routesToMenus } from '@/utils/transform.js'
import cloneDeep from 'lodash/cloneDeep'

import type { Router } from '@/interface/router'
import type { Role } from '@/interface/user'
import type { MenuOption } from 'naive-ui'

// 检查是否有权限
function hasPermission(roles: Role[], route: Router) {
    if (route.meta?.roles) {
        return roles.some(role => route.meta?.roles?.includes(role))
    }
    return true
}

// 递归遍历进行路由筛选
function getRoutes(roles: Role[], routes: Router[]) {
    const cloneRoutes = cloneDeep(routes)
    const filter = (r: Role[], t: Router[]) => {
        const res: Router[] = []
        t.forEach(route => {
            if (route.children) {
                route.children = getRoutes(r, route.children)
            }

            if (hasPermission(r, route)) {
                res.push({ ...route })
            }
        })
        return res
    }
    return filter(roles, cloneRoutes)
}

type State = {
    [key in 'routes' | 'addRoutes']: Router[]
}
const usePermissionStore = defineStore('permission', {
    state: () => {
        return <State>{
            routes: [],
            addRoutes: []
        }
    },
    getters: {
        menus: state => {
            const menus: MenuOption[] = []
            routesToMenus(state.routes, menus, true)
            return menus
        }
    },
    actions: {
        setRoutes(routes: Router[]) {
            this.addRoutes = routes
            this.routes = fixedRoutes.concat(
                routes[0]?.name === 'Layout' ? (routes[0].children as Router[]) : routes
            )
        },
        generateRoutes(roles: Role[]) {
            return new Promise(resolve => {
                // admin角色可以访问所有路由
                const accessedRoutes = roles.includes('admin')
                    ? asyncRoutes
                    : getRoutes(roles, asyncRoutes)
                this.setRoutes(accessedRoutes)
                resolve(accessedRoutes)
            })
        }
    }
})

export default usePermissionStore
