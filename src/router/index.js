import {createRouter, createWebHistory} from 'vue-router'

import TheHome from '../components/pages/TheHome.vue'
import TheCatalog from '../components/pages/TheCatalog.vue'

const routes = [
    {
        path: '/',
        name: 'TheHome',
        component: TheHome,
        meta: {
            layout: 'TheDefault',
            header: 'Рецепты',
            breadCrumbs: [
                {
                    title: 'Рецепты',
                    linkName: null,
                    current: true
                }
            ]
        }
    },
    {
        path: '/catalog/',
        name: 'TheCatalog',
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