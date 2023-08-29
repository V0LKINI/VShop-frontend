import {createRouter, createWebHistory} from 'vue-router'

import TheHome from '../components/pages/site/TheHome.vue'
import TheCatalog from '../components/pages/site/TheCatalog.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: TheHome,
        meta: {
            layout: 'TheDefault',
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
        component: TheCatalog,
        meta: {
            layout: 'TheDefault',
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