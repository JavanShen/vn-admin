import { defineStore } from 'pinia'

const state = () => ({
    theme: null,
    language: null,
})

const getters = {
    locale: state => state.language && state.language.locale,
    dateLocale: state => state.language && state.language.dateLocale,
}

const actions = {
    setTheme(theme) {
        this.theme = theme
    },
    setLanguage(language) {
        this.language = language
    }
}

const useConfigStore = defineStore('config', {
    state,
    getters,
    actions
})

export default useConfigStore