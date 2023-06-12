import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            layout: 'Default',
            header: 'Главная',
            breadCrumbs: [
                {
                    title: 'Главная',
                    linkName: null,
                    current: true
                }
            ]
        }
    },
    {
        path: '/catalog/',
        name: 'Catalog',
        component: Catalog,
        meta: {
            layout: 'Default',
            header: 'Каталог',
            breadCrumbs: [
                {
                    title: 'Каталог',
                    linkName: null,
                    current: true
                }
            ]
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;