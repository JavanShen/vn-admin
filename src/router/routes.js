export const fixedRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login'),
        hidden: true,
    }
]

import Layout from '@/layout'
import RouterView from '@/layout/components/AppMain.vue'

export const asyncRoutes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: 'statistics',
                name: 'Statistics',
                component: () => import('@/views/statistics'),
                meta:{title: '统计',icon: 'statistics', roles: ['admin','editor','user']}
            },
            {
                path: 'edit',
                name: 'Edit',
                component: () => import('@/views/empty.vue'),
                meta: {title: '创作', icon: 'edit', roles: ['admin','editor']}
            },
            {
                path: 'assets',
                name: 'Assets',
                component: RouterView,
                meta: {title: '资产', icon: 'wallet', roles: ['admin']},
                children:[
                    {
                        path: 'assets-list',
                        name: 'assertsList',
                        component: () => import('@/views/empty.vue'),
                        meta: {title: '资产列表', roles: ['admin']}
                    }
                ]
            },
            {
                path: 'user',
                name: 'User',
                component: () => import('@/views/empty.vue'),
                meta: {title: '用户', icon: 'user', roles: ['admin']}
            },
            {
                path: 'todo',
                name: 'Todo',
                component: () => import('@/views/empty.vue'),
                meta: {title: '待办', icon: 'todo', roles: ['admin']}
            },
            {
                path: 'nester',
                name: 'Nester',
                component: RouterView,
                meta: {title: '嵌套测试', icon: 'permission', roles: ['admin']},
                children: [
                    {
                        path: 'nester/nested',
                        name: 'Nested',
                        component: () => import('@/views/empty.vue'),
                        meta: {title: '子元素1', roles: ['admin'], group: 'first'}
                    },
                    {
                        path: 'nested2',
                        name: 'Nested2',
                        component: () => import('@/views/empty.vue'),
                        meta: {title: '子元素2', roles: ['admin'], group: 'first'}
                    },
                    {
                        path: 'nested3',
                        name: 'Nested3',
                        component: () => import('@/views/empty.vue'),
                        meta: {title: '子元素3',roles: ['admin']}
                    },
                    {
                        path: 'nested4',
                        name: 'Nested4',
                        component: () => import('@/views/empty.vue'),
                        meta: {title: '子元素4', roles: ['admin'], group: 'second'}
                    },
                    {
                        path: 'nested5',
                        name: 'Nested5',
                        component: RouterView,
                        meta: {title: '子元素5', roles: ['admin'], group: 'second'},
                        children: [
                            {
                                path: 'nested6',
                                name: 'Nested6',
                                component: () => import('@/views/empty.vue'),
                                meta: {title: '子元素6', roles: ['admin']}
                            }
                        ]
                    }
                ]
            },{
                path: 'https://github.com/JavanShen/vn-admin',
                name: 'ExternalLink',
                meta: {title: 'github', icon: 'github'}
            }
        ]
    }
]