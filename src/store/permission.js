import { fixedRoutes, asyncRoutes } from '@/router/routes.js'
import { defineStore } from 'pinia'

import { routesToMenus } from '@/utils/transform.js';

// 检查是否有权限
function hasPermission(roles, route) {
    if (route.meta?.roles) {
        return roles.some(role => route.meta.roles.includes(role));
    } else {
        return true;
    }
}

// 递归遍历进行路由筛选
function getRoutes(roles, routes) {
    let res = []
    routes.forEach(route => {
        if (route.children) {
            route.children = getRoutes(roles, route.children)
        }

        if (hasPermission(roles, route)) {
            res.push({ ...route })
        }
    })
    return res
}

const state = () => {
    return {
        routes: [],
        addRoutes: []
    }
}

const getters = {
    menus: state => {
        let menus = []
        routesToMenus(state.routes, menus)
        return menus
    }
}

const actions = {
    setRoutes(routes) {
        this.addRoutes = routes
        this.routes = fixedRoutes.concat(routes[0]?.name === 'Layout' ? routes[0].children : routes)
    },
    clearRoutes() {
        this.routes = []
        this.addRoutes = []
    },
    generateRoutes(roles) {
        return new Promise(resolve => {
            // admin角色可以访问所有路由
            let accessedRoutes = roles.includes('admin') ? asyncRoutes : getRoutes(roles, asyncRoutes)
            this.setRoutes(accessedRoutes)
            resolve(accessedRoutes)
        })
    }
}

const usePermissionStore = defineStore('permission', {
    state,
    getters,
    actions
})

export default usePermissionStore