<template>
    <Table
        :columns="columns"
        :table-data="tableData"
        :loading="loading"
        :isEdit="true"
        @edit="openEdit"
    />
    <n-modal style="width: 600px" v-model:show="showModal" preset="card">
        <EditForm :user="user" @confirm="editConfirm" />
    </n-modal>
</template>

<script setup lang="ts">
import useTableData from '@/composables/user/useTableData'
import useTableEdit from '@/composables/user/useTableEdit'

import Table from './components/Table.vue'
import EditForm from './components/EditForm.vue'
import columns from './utils/columns'

const { tableData, loading } = useTableData()

const { user, showModal, openEdit, editConfirm } = useTableEdit()
</script>

<style scoped>
.pagination {
    margin-top: 20px;
}
</style>
