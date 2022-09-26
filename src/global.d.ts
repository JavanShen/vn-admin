import { useMessage, useLoadingBar } from 'naive-ui'

declare global {
    interface Window {
        $message: ReturnType<typeof useMessage>
        $loadingBar: ReturnType<typeof useLoadingBar>
    }
}
