<template>
	<n-data-table :columns="columnsFinal" :data="tableData" :pagination="pagination" :loading="loading" />
</template>

<script setup>
import { computed } from 'vue'

const props=defineProps({
	tableData: {
		type: Array,
		default: () => [],
	},
	columns: {
		type: Array,
		default: () => [],
	},
	pagination: {
		type: Object,
		default: () => ({}),
	},
	loading: {
		type: Boolean,
		default: false,
	},
	isEdit: {
		type: Boolean,
		default: false
	}
})

const emits=defineEmits(['edit'])

const columnsFinal = computed(() => {
	let columns = props.columns

	if(props.isEdit){
		let actionCol={
			title: '操作',
			key: 'action',
			render(row) {
				return (
					<n-button size="small" onClick={emits('edit',row)}>编辑</n-button>
				)
			}
		}

		return [...columns,actionCol]
	}else {
		return columns
	}
})
</script>