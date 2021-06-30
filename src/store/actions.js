import apiRequest from "@/api/request";

export async function getForecastsFiveDays({ commit, state }) {
    commit("setErrorMessage" , "")
    try {
   await apiRequest(`forecasts/v1/daily/5day/${state.keyCitySelect}`)
   .then(res => {
     commit("setFiveDaysForecasts", res.data.DailyForecasts);
   })
 }catch (error) {
        commit("setErrorMessage" , "An error occurred. Please try again in a few minutes")
 }
}
export async function getCurrentCondition({ commit, state } ) {
    commit("setErrorMessage" , "")
   try {
   await apiRequest(`currentconditions/v1/${state.keyCitySelect}`)
   .then(res => {
       commit("setCurrentCondition", res.data[0]);
   })
 } catch (error)
    {
       commit("setErrorMessage" , "An error occurred. Please try again in a few minutes")
    }
}
export function getIsFavorite({ commit }) {

       if(localStorage.getItem("favorites").length){
           if((JSON.parse(localStorage.getItem("favorites")).some(favoriteItem => favoriteItem.key === this.state.keyCitySelect))){
               commit("setIsFavorite" , true)
           }else{
               commit("setIsFavorite" , false)
           }
       }
 }
export function getFavoriteItems({ commit }) {

    // let data = [
    //     {
    //         'country'
    //             :
    //             "", 'date'
    //             :
    //             "2021-06-29T16:11:00+03:00", 'icon'
    //             :
    //             2, 'iconPhrase'
    //             :
    //             "Mostly sunny", 'key'
    //             :
    //             "215854", 'name'
    //             :
    //             "Tel Aviv",
    //         'temperature'
    //             :
    //             {
    //                 'Imperial'
    //                     :
    //                     {
    //                         'Unit'
    //                             :
    //                             "F", 'UnitType'
    //                             :
    //                             18, 'Value'
    //                             :
    //                             89
    //                     }
    //                 ,
    //                 'Metric'
    //                     :
    //                     {
    //                         'Unit'
    //                             :
    //                             "C",
    //                         'UnitType'
    //                             :
    //                             17,
    //                         'Value'
    //                             :
    //                             31.9
    //                     }
    //             }
    //     }
    // ];
    //commit("setFavoritesItems" , data);

    if(localStorage.getItem("favorites").length){
        let tempFavoritesItems = [];
        commit("setLoading", true);

        JSON.parse(localStorage.getItem("favorites")).forEach( item => {
                 apiRequest(`currentconditions/v1/${item.key}`)
                .then(({data}) => {
                    tempFavoritesItems.push({
                        key: item.key,
                        name: item.name,
                        country: item.country,
                        date: data[0].LocalObservationDateTime,
                        temperature: data[0].Temperature,
                        icon: data[0].WeatherIcon,
                        iconPhrase: data[0].WeatherText
                    })
                    commit("setLoading", false);
                })
        })
                commit("setFavoriteItems", tempFavoritesItems);

    }
 }
export function addOrRemoveFavorites({ commit, state }, add ) {

    let tempFavorites = state.favorites;
    if(add){
        if(!(tempFavorites.some(favoriteItem => favoriteItem.key === this.state.keyCitySelect)) && tempFavorites.push({
            key:this.state.keyCitySelect,
            name:this.state.cityName,
            country:this.state.country
        }));
    }else {
        tempFavorites = tempFavorites.filter(favoriteItem => favoriteItem.key !== this.state.keyCitySelect);
        localStorage.removeItem('favorites');
    }
    localStorage.setItem("favorites" , JSON.stringify(tempFavorites));
    commit("setFavorites", tempFavorites);
}
export function getTemperature ({ commit } , celsius) {
    commit("setCelsius", celsius);
}
export function changeTheme ({ commit } , light) {
    commit("setThemeLight", light);
}


