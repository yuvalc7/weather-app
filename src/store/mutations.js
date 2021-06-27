import apiRequest from "@/api/request";

export async function getCountriesListByFirstLetter({ commit, state }, city ) {
    try {
        let request = apiRequest("locations/v1/cities/autocomplete");
        let response = await request.get("" , {
            apikey:process.env.API_KEY,
            q: city
        });
        commit("setCountryList", response.data, { root: true });
        return response;
    } catch (e) {}
}