export const setKeyAndNameCitySelect = (state, payload) => {
    console.log(payload)
    state.keyCitySelect = payload.cityKey;
    state.cityName = payload.selectedCity;
};
export const setFiveDaysForecasts = (state, payload) => {
    state.fiveDaysForecasts = payload;
};
export const setCurrentCondition = (state, payload) => {
    state.currentCondition = payload;
};