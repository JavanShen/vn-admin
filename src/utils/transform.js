import { isExternal } from '@/utils/validate.js'

export function routesToMenus(routes, menus, baseUrl = '') {
    let groups = new Map()
    routes.forEach(route => {
        if ((!route.hidden) && route.meta) {
            let fullPath = isExternal(route.path) ? route.path : (isExternal(baseUrl) ? baseUrl : baseUrl + '/' + route.path)
            let menu = {
                label: route.meta.title,
                path: fullPath,
                iconName: route.meta.icon,
                key: fullPath,
            }
            if (route.children) {
                menu.path = null
                menu.children = []
                routesToMenus(route.children, menu.children, fullPath)
            }

            if (route.meta.group) {
                let key = baseUrl + '-' + route.meta.group
                if (!groups.has(key)) {
                    groups.set(key, {
                        type: 'group',
                        label: route.meta.group,
                        key,
                        children: [menu]
                    })
                    menus.push(groups.get(key))
                } else {
                    groups.get(key).children.push(menu)
                }
            } else {
                menus.push(menu)
            }
        }
    })
}