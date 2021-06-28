

import apiRequest from "@/api/request";

export async function getForecastsFiveDays({ commit, state }) {
    try {
   await apiRequest(`forecasts/v1/daily/5day/${state.keyCitySelect}`)
   .then(res => {
       console.log(res.data.DailyForecasts);
     commit("setFiveDaysForecasts", res.data.DailyForecasts);
     return res.data.DailyForecasts;
   })
 }catch (error) {
   console.log(error)
 }
}
export async function getCurrentCondition({ commit, state }) {
    try {
   await apiRequest(`currentconditions/v1/${state.keyCitySelect}`)
   .then(res => {
       console.log(res.data, commit);
      commit("setCurrentCondition", res.data);
      return res.data;
   })
 }catch (error) {
   console.log(error)
 }
}


