import { useUserStore } from '@/store'
import router from '@/router';

const store = useUserStore()

const login = (nform) => {
    nform.validate(async (error) => {
        if (!error) {
            try {
                await store.login({ ...nform.model })
                router.push({ path: '/', replace: true }).catch(err => {
                    console.log('router error', err)
                })
            } catch (e) {
                console.log(e)
                window.$message.error(e)
            }
        }
    }).catch(() => {
        console.log('wrong info')
    });
}

export default login