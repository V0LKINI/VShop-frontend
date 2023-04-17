import {createRouter, createWebHistory} from 'vue-router'

import TheHome from '../components/pages/TheHome.vue'
import TheRecipeDetail from '../components/pages/TheRecipeDetail.vue'


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
        path: '/recipes/:id',
        name: 'TheRecipeDetail',
        component: TheRecipeDetail,
        meta: {
            layout: 'TheDefault',
            header: 'Детальная страница рецепта',
            breadCrumbs: [
                {
                    title: 'Детальная страница рецепта',
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