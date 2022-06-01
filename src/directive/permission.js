import { useRouterStore, useUserStore } from "@/store"
import { isIntersect } from "@/utils/validate"

const permissionDirective = {
    install(app) {
        app.directive('permission', {
            mounted(el, binding) {
                const userStore = useUserStore()
                const routerStore = useRouterStore()

                if (binding.arg) {
                    if (!isIntersect(userStore.roles, routerStore.meta[binding.arg])) {
                        remove(el)
                    }
                }
            }
        })
    }
}

function remove(el) {
    if (el.parentNode) {
        el.parentNode.removeChild(el)
    }
}

export default permissionDirective