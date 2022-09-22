import { isExternal } from '@/utils/validate.js'
import savePathMeta from '@/utils/storage'
import cloneDeep from 'lodash/cloneDeep'

import type { Router } from '@/interface/router'
import type { MenuOption } from 'naive-ui'

/**
 *
 * @param {Array} routes 路由列表
 * @param {Array} menus 菜单列表
 * @param {Boolean} [save=false] 是否保存映射关系
 * @param {String} [baseUrl=""] 基础路径
 */
export default function routesToMenus(
    routes: Router[],
    menus: MenuOption[],
    save = false,
    baseUrl = ''
) {
    const groups = new Map()
    routes.forEach(route => {
        if (!route.hidden && route.meta) {
            let fullPath = ''
            if (isExternal(route.path)) {
                fullPath = route.path
            } else if (isExternal(baseUrl)) {
                fullPath = baseUrl
            } else {
                fullPath = `${baseUrl}/${route.path}`
            }

            const menu: MenuOption = {
                label: route.meta.title,
                path: fullPath,
                iconName: route.meta.icon,
                key: fullPath
            }

            if (save) {
                const meta = cloneDeep(route.meta)
                if (!route.children) meta.isLeaf = true
                savePathMeta(fullPath, meta)
            }

            if (route.children) {
                menu.path = null
                menu.children = []
                routesToMenus(route.children, menu.children, save, fullPath)
            }

            if (route.meta.group) {
                const key = `${baseUrl}-${route.meta.group}`
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
