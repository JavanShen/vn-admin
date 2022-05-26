<template>
    <Table :columns="columns" :table-data="tableData" :loading="loading" :isEdit="true" />
</template>

<script setup>
import Table from "./components/Table";
import columns from "./utils/columns";
import useTableData from '@/composables/user/useTableData';

const {tableData, getData, loading} = useTableData();
</script>

<style scoped>
.pagination {
    margin-top: 20px;
}
</style>