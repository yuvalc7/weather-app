import Vuex from 'vuex';
import Vue from "vue";
import *  as actions from "./actions";
import * as mutations from "./mutations";


Vue.use(Vuex);

export default new Vuex.Store({

    state:{
       keyCitySelect : "215854",// tel aviv
       cityName:"Tel Aviv",
       fiveDaysForecasts: [],
       currentCondition: [],
    },
    actions,
    mutations


})
