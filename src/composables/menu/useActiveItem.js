import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

export default function useActiveItem() {
    const selectedKey = ref(null);
    const route = useRoute()

    selectedKey.value = getKey(route.path)

    watch(() => route.path, (path) => {
        selectedKey.value = getKey(path)
    })

    return {
        selectedKey,
    }
}

function getKey(path) {
    let arr = path.split('/')
    return arr[arr.length - 1]
}