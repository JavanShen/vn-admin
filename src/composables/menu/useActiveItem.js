import { onMounted, ref, watch } from 'vue';
import { useRouterStore } from '@/store';

export default function useActiveItem() {
    const selectedKey = ref(null);
    const menuRef = ref(null);

    const store = useRouterStore()

    selectedKey.value = store.path
    onMounted(() => {
        menuRef.value?.showOption(store.path)
    })

    watch(() => store.path, (path) => {
        selectedKey.value = path
        menuRef.value?.showOption(path)
    })

    return {
        selectedKey,
    }
}