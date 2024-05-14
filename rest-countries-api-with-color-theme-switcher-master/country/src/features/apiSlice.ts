import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const countryApi = createApi(
    {
        reducerPath: "countryApi",
        baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.eu/rest/v2/" }),
        endpoints: (builder) => ({
            getCountries: builder.query({
                query: () => "all",
            }),
        }),
    }
)

export const { useCountryQuery } = countryApi