<template>
    <n-cascader
        :value="region"
        check-strategy="child"
        placeholder="选择地区"
        :show-path="true"
        remote
        :options="options"
        label-field="name"
        value-field="id"
        :on-update:show="handelOpen"
        :on-update:value="handelChange"
    >
        <template #empty>
            <n-spin />
        </template>
    </n-cascader>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import getRegionsPickerData from '@/utils/regions'
import type { PickerProvinceItem } from '@/interface/picker/regionsPicker'
import type { CascaderOption } from 'naive-ui'

interface Props {
    region: string | null
}

const options = ref<PickerProvinceItem[]>([])

withDefaults(defineProps<Props>(), {
    region: null
})

const emits = defineEmits(['update:region'])

const handelOpen = (type: Boolean) => {
    if (type && options.value.length === 0) {
        getRegionsPickerData().then(res => {
            if (res) {
                options.value = res
            }
        })
    }
}

function joinPath(path: CascaderOption[], connector = ' ') {
    return path[0].name + connector + path[1]?.name + connector + path[2]?.name
}

const handelChange = (val: unknown, option: unknown, pathVal: CascaderOption[]) => {
    emits('update:region', joinPath(pathVal))
}
</script>
