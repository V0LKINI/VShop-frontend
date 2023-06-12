import {defineStore} from 'pinia'
import axios from "axios";
import {ref} from 'vue';

export const useCatalogStore = defineStore('catalogStore', () => {
    const categoryGroups = ref([]);

    const getCategoryGroups = async (params = null, url = '/categoryGroups/list/') => {
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
        getCategoryGroups,
    }
})
