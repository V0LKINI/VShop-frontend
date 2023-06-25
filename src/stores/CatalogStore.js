import {defineStore} from 'pinia'
import axios from "axios";
import {ref} from 'vue';

export const useCatalogStore = defineStore('catalogStore', () => {
    const categoryGroups = ref([]);

    const getCategories = async (params = null, url = '/categories/list/') => {
        let config = {
            params: params,
        }

        await axios.get(url, config)
            .then((r) => {
                categoryGroups.value = r.data.data;
            }).catch((e) => {
                console.log(e);
            })
    };

    return {
        categoryGroups,
        getCategories,
    }
})
