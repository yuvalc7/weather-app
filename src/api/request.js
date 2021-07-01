import axios from "axios";

export default function apiRequest(path, key){

    return axios.get('http://dataservice.accuweather.com/' + path, {
            params: {
                apikey: process.env.VUE_APP_API_KEY,
                ...(key ? { q: key } : {})
            }
        });
}