<template>
    <n-cascader :value="region" check-strategy="child" placeholder="选择地区" :show-path="true" remote :options="options"
    label-field="name" value-field="id" :on-update:show="handelOpen" :on-update:value="handelChange" >
        <template #empty>
            <n-spin />
        </template>
    </n-cascader>
</template>

<script setup>
import { ref } from 'vue';
import { getRegionsData } from '@/utils/regions.js'

const options = ref([]);

defineProps({
    region: {
        type: String,
        default: null,
    }
})

const emits=defineEmits(['update:region'])

const handelOpen = (type) => {
    if(type && options.value.length===0) {
        getRegionsData().then(res => {
            options.value = res;
        });
    }
}

const handelChange = (val,option,pathVal) => {
    emits('update:region', joinPath(pathVal));
}

function joinPath(path,connector=' ') {
    return path[0].name+connector+path[1]?.name+connector+path[2]?.name
}
</script>