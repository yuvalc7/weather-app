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
export async function getCurrentCondition({ commit, state } ) {
   try {
   await apiRequest(`currentconditions/v1/${state.keyCitySelect}`)
   .then(res => {
       commit("setCurrentCondition", res.data[0]);

   })
 } catch (error)
    {
        console.log(error)
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
export function getFavoritesItems({ commit }) {
    // console.log(commit);
    //
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
                    console.log(tempFavoritesItems);
                })

        })
        commit("setFavoritesItems" , tempFavoritesItems);
    }
 }



