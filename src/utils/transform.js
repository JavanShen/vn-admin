import { isExternal } from '@/utils/validate.js'

/**
 * 
 * @param {Array} routes 路由列表
 * @param {Array} menus 菜单列表
 * @param {Boolean} [save=false] 是否保存映射关系
 * @param {String} [baseUrl=""] 基础路径
 */
export function routesToMenus(routes, menus, save = false, baseUrl = '') {
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

            if (save) {
                let meta = simpleDeepCopy(route.meta)
                if (!route.children) meta.isLeaf = true
                savePathMeta(fullPath, meta)
            }

            if (route.children) {
                menu.path = null
                menu.children = []
                routesToMenus(route.children, menu.children, save, fullPath)
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

let store=null
function savePathMeta(path, meta) {
    import('@/store').then(module => {
        if(store===null){
            store = module.useRouterStore()
        }
        store.setPathMeta(path, meta)
    })
}

// 简易的深拷贝
export function simpleDeepCopy(obj) {
    if (typeof obj !== 'object') {
        return obj
    }
    let newObj = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? simpleDeepCopy(obj[key]) : obj[key]
        }
    }
    return newObj
}