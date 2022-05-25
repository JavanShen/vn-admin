import router from '@/router';
import {usePermissionStore,useUserStore} from '@/store'

import { getToken } from '@/utils/auth';

router.beforeEach(async (to, from, next) => {
    window.$loadingBar.start();
    if (to.path === '/login') {
        next();
    } else {
        const token = getToken();
        if (token === undefined) {
            next({ name: 'Login' });
        } else {
            const permission = usePermissionStore()
            const user = useUserStore()

            if (user.roles?.length > 0) {
                next();
            } else {
                try {
                    const {roles} = await user.getUserInfo(token)
                    const routes = await permission.generateRoutes(roles)

                    routes.forEach(route => router.addRoute(route))
                    router.addRoute(
                        {
                            path: '/:pathMatch(.*)',
                            name: 'NotFound',
                            component: () => import('@/views/notFound.vue'),
                        }
                    )

                    next({ ...to, replace: true });
                } catch (e) {
                    console.log(e)
                    next({ name: 'Login' });
                }
            }
        }
    }
});

router.afterEach(() => {
    window.$loadingBar.finish()
})

export default router;