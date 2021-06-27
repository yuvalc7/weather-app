import axios from "axios";
import {Globals} from "@/constant/constants";

export default function apiRequest(path, key){

    return axios.get(Globals.ACCU_WEATHER_ENDPOINT + path, {
            params: {
                apikey: 'hfLt2c8RaTAhwLjemo21X5WQCIyIRPSE',
                ...(key ? { q: key } : {})
            }
        });
}