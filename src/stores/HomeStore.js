import {defineStore} from 'pinia'
import axios from "axios";
import {ref} from 'vue';

export const useHomeStore = defineStore('homeStore', () => {
    const banner = ref('');
    const offers = ref([]);

    const getData = async (params = null, url = '/home/') => {
        let config = {
            params: params,
        }

        await axios.get(url, config)
            .then((r) => {
                offers.value = r.data.data.offers;
                banner.value = r.data.data.settings.banner;
            }).catch((e) => {
                console.log(e);
            })
    };

    return {
        banner,
        offers,
        getData,
    }
})
