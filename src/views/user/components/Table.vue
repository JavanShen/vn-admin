<template>
    <n-data-table
        class="table"
        :columns="columnsFinal"
        :data="tableData"
        :pagination="pagination"
        :loading="loading"
    />
</template>

<script setup lang="tsx">
import { computed, toRaw } from 'vue'

import type { UserItem } from '@/types/request/user'
import type { PaginationProps } from 'naive-ui'

interface Column {
    title: string
    key: string
    minWidth: number
}

interface Props {
    tableData: UserItem[]
    columns: Column[]
    pagination: PaginationProps
    loading: boolean
    isEdit: boolean
}

const props = withDefaults(defineProps<Props>(), {
    tableData: () => [],
    columns: () => [],
    pagination: () => ({}),
    loading: false,
    isEdit: false
})

const emits = defineEmits(['edit'])

const edit = (row: UserItem) => {
    emits('edit', toRaw(row))
}

const columnsFinal = computed(() => {
    const columns = props.columns

    if (props.isEdit) {
        const actionCol = {
            title: '操作',
            key: 'action',
            render(row: UserItem) {
                return (
                    <n-button
                        size="small"
                        onClick={() => {
                            edit(row)
                        }}
                    >
                        编辑
                    </n-button>
                )
            }
        }

        return [...columns, actionCol]
    }
    return columns
})
</script>
