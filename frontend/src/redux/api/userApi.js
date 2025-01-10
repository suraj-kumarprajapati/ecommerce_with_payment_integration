



import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuthenticated, setUser } from "../features/userSlice";






export const userApi = createApi({

    reducerPath : "userApi",

    baseQuery : fetchBaseQuery({
        baseUrl : '/api/v1',
    }),

    endpoints : (build) => ({
        getMyProfile : build.query({
            query : () => ({
                url : '/me',
            }),

            // transform the response after getting response
            transformResponse : (response) => response.user,

            // set the auth reducer after getting response 
            async onQueryStarted(args, {dispatch, queryFulfilled})  {
                try {
                    const {data} = await queryFulfilled;
                    dispatch(setUser(data));
                    dispatch(setIsAuthenticated(true));
                }
                catch(error) {
                    console.log(error);
                }
            }



        }),
    }),

})




export const { useGetMyProfileQuery } = userApi;