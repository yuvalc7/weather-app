export const setKeyNameCityAndCountry = (state, payload) => {
    state.country = payload.country;
    state.keyCitySelect = payload.cityKey;
    state.cityName = payload.selectedCity;
};
export const setFiveDaysForecasts = (state, payload) => {
    state.fiveDaysForecasts = payload;
};
export const setCurrentCondition = (state, payload) => {
    state.currentCondition = payload;
};
export const setFavorites = (state, payload) => {
    state.favorites = payload;
};
export const setFavoritesItems = (state, payload) => {
    console.log(payload)
    state.favoritesItems = payload;
};