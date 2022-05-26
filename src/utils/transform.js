import { isExternal } from '@/utils/validate.js'

export function routesToMenus(routes, menus, baseUrl = '') {
    routes.forEach(route => {
        if ((!route.hidden) && route.meta) {
            let fullPath = isExternal(route.path) ? route.path : (isExternal(baseUrl) ? baseUrl : baseUrl + '/' + route.path)
            let menu = {
                label: route.meta.title,
                path: fullPath,
                iconName: route.meta.icon,
                key: route.path,
            }
            if (route.children) {
                menu.path = null
                menu.children = []
                routesToMenus(route.children, menu.children, fullPath)
            }

            menus.push(menu)
        }
    })
}