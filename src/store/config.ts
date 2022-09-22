import { defineStore } from 'pinia'
import type { GlobalTheme, NLocale, NDateLocale } from 'naive-ui'

type Theme = GlobalTheme | null
type Language = {
    locale: NLocale
    dateLocale: NDateLocale
} | null
type State = {
    theme: Theme
    language: Language
}
const useConfigStore = defineStore('config', {
    state: () =>
        <State>{
            theme: null,
            language: null
        },
    getters: {
        locale: state => state.language && state.language.locale,
        dateLocale: state => state.language && state.language.dateLocale
    },
    actions: {
        setTheme(theme: Theme) {
            this.theme = theme
        },
        setLanguage(language: Language) {
            this.language = language
        }
    }
})

export default useConfigStore
