import { isExternal } from '@/utils/validate'

import type { MenuOption, MenuGroupOption } from 'naive-ui'
import type { VNodeChild } from 'vue'

export const renderMenuLabel = ({ path: link, label: name }: MenuOption | MenuGroupOption) => {
    if (!link) return name as VNodeChild
    if (isExternal(link as string)) {
        return (
            <a href={link as string} target="_blank" rel="noopener noreferrer">
                {name}
            </a>
        )
    }
    return <router-link to={link as string}>{name}</router-link>
}

export const renderMenuIcon = ({ iconName: name }: MenuOption) => {
    if (!(name as string)) return false
    return <svg-icon icon-class={name as string}></svg-icon>
}
