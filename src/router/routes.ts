import RouterView from '@/layout/components/AppMain.vue'

import type { Router } from '@/types/router'

export const fixedRoutes: Router[] = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
        hidden: true
    }
]

export const asyncRoutes: Router[] = [
    {
        path: '/',
        redirect: '/statistics',
        name: 'Layout',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: 'statistics',
                name: 'Statistics',
                component: () => import('@/views/empty.vue'),
                meta: { title: '统计', icon: 'statistics', roles: ['admin', 'editor', 'user'] }
            },
            {
                path: 'edit',
                name: 'Edit',
                component: () => import('@/views/empty.vue'),
                meta: { title: '创作', icon: 'edit', roles: ['admin', 'editor'], keepAlive: true }
            },
            {
                path: 'assets',
                name: 'Assets',
                component: RouterView,
                meta: { title: '资产', icon: 'wallet', roles: ['admin'] },
                children: [
                    {
                        path: 'assets-list',
                        name: 'assertsList',
                        component: () => import('@/views/empty.vue'),
                        meta: { title: '资产列表', roles: ['admin'] }
                    }
                ]
            },
            {
                path: 'user',
                name: 'User',
                component: () => import('@/views/user/index.vue'),
                meta: { title: '用户', icon: 'user', roles: ['admin'] }
            },
            {
                path: 'todo',
                name: 'Todo',
                component: () => import('@/views/empty.vue'),
                meta: { title: '待办', icon: 'todo', roles: ['admin'] }
            },
            {
                path: 'nester',
                name: 'Nester',
                component: RouterView,
                meta: { title: '嵌套测试', icon: 'permission', roles: ['admin'] },
                children: [
                    {
                        path: 'nested',
                        name: 'Nested',
                        component: () => import('@/views/empty.vue'),
                        meta: { title: '子元素1', roles: ['admin'], group: 'first' }
                    },
                    {
                        path: 'nested2',
                        name: 'Nested2',
                        component: () => import('@/views/empty.vue'),
                        meta: { title: '子元素2', roles: ['admin'], group: 'first' }
                    },
                    {
                        path: 'nested3',
                        name: 'Nested3',
                        component: () => import('@/views/empty.vue'),
                        meta: { title: '子元素3', roles: ['admin'] }
                    },
                    {
                        path: 'nested4',
                        name: 'Nested4',
                        component: () => import('@/views/empty.vue'),
                        meta: { title: '子元素4', roles: ['admin'], group: 'second' }
                    },
                    {
                        path: 'nested5',
                        name: 'Nested5',
                        component: RouterView,
                        meta: { title: '子元素5', roles: ['admin'], group: 'second' },
                        children: [
                            {
                                path: 'nested6',
                                name: 'Nested6',
                                component: () => import('@/views/empty.vue'),
                                meta: { title: '子元素6', roles: ['admin'] }
                            }
                        ]
                    }
                ]
            },
            {
                path: 'permission',
                name: 'Permission',
                component: () => import('@/views/permission/index.vue'),
                meta: {
                    title: '权限测试',
                    icon: 'permission',
                    roles: ['admin', 'editor', 'user'],
                    selfDestructBtn: ['admin']
                }
            },
            {
                path: 'https://github.com/JavanShen/vn-admin',
                name: 'ExternalLink',
                // ts限制要有一个component属性,否则会判定为重定向
                component: () => import('@/views/login/index.vue'),
                meta: { title: 'github', icon: 'github' }
            }
        ]
    }
]
