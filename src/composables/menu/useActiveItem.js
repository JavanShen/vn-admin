import { useRoute } from 'vue-router';
import { onMounted, ref, watch } from 'vue';

export default function useActiveItem() {
    const selectedKey = ref(null);
    const menuRef = ref(null);

    const route = useRoute()

    selectedKey.value = getKey(route.path)
    onMounted(() => {
        menuRef.value?.showOption(getKey(route.path))
    })

    watch(() => route.path, (path) => {
        selectedKey.value = getKey(path)
        menuRef.value?.showOption(getKey(path))
    })

    return {
        selectedKey,
    }
}

function getKey(path) {
    let arr = path.split('/')
    return arr[arr.length - 1]
}