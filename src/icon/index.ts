import type { App } from 'vue'

import IconSvg from './SvgIcon.vue'

export default {
    install(app: App) {
        app.component('svg-icon', IconSvg)
    }
}
