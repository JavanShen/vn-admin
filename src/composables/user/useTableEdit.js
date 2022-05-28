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
        console.log(form)
    }

    return {
        user,
        showModal,
        openEdit,
        editConfirm,
    }
}
