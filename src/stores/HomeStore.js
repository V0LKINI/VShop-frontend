import {defineStore} from 'pinia'
import axios from "axios";
import {ref} from 'vue';

export const useHomeStore = defineStore('homeStore', () => {
    const banner = ref('');

    const getData = async (params = null, url = '/home/') => {
        let config = {
            params: params,
        }

        await axios.get(url, config)
            .then((r) => {
                banner.value = r.data.data.settings.banner;
            }).catch((e) => {
                console.log(e);
            })
    };

    return {
        banner,
        getData,
    }
})
