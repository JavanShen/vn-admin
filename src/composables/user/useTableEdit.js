import {ref} from 'vue'

export default function useTableEdit() {
    const user = ref({
        name: '',
        birthday: null,
        address: '',
        email: '',
        phone: '',
    });
    
    const showModal = ref(false);
    
    const openEdit = (row) => {
        user.value = {...row};
        showModal.value = true
    }

    const editConfirm = (form) => {
        window.$message.success(`数据发生了变化: ${JSON.stringify(form)}`);
        console.log(form)
        showModal.value = false
    }

    return {
        user,
        showModal,
        openEdit,
        editConfirm,
    }
}
