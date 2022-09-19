import { useRouterStore, useUserStore } from '@/store'
import { isIntersect } from '@/utils/validate'

import type { App } from 'vue'

const remove = (el: HTMLElement) => {
    if (el.parentNode) {
        el.parentNode.removeChild(el)
    }
}

const permissionDirective = {
    install(app: App) {
        app.directive('permission', {
            mounted(el: HTMLElement, binding) {
                const userStore = useUserStore()
                const routerStore = useRouterStore()

                if (binding.arg) {
                    const role = (routerStore.meta[binding.arg] || []) as unknown[]
                    if (!isIntersect(userStore.roles, role)) {
                        remove(el)
                    }
                }
            }
        })
    }
}

export default permissionDirective
