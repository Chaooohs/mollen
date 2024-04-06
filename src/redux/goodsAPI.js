import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const goodsAPI = createApi({
  reducerPath: 'goodsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://65f0c8d3da8c6584131c698d.mockapi.io/mollen/' }),
  endpoints: (build) => ({
    getData: build.query({
      query: ({ category, subcategory, page, color, size, sortby, order }) => ({
        url: `catalog?`,
        params: {
          category: category,
          subcategory: subcategory,
          page: page ? page : page = '1',
          limit: 9,
          color: color,
          size: size,
          sortby: sortby,
          order: order,
        }
      }),
    }),
    getSingleProduct: build.query({
      query: (query = '') => ({
        url: query,
      })
    }),
    getPopularGoods: build.query({
      query: () => ({
        url: 'catalog',
        params: {
          page: 1,
          limit: 9,
          sortby: "rating",
          order: "desc",
        }
      })
    }),
    getSearchGoods: build.query({
      query: ({search, page}) => ({
        url: 'catalog',
        params: {
          search: search,
          page: page ? page : page = '1',
          limit: 6,
        }
      })
    })
  }),
})

export const { useGetDataQuery, useGetSingleProductQuery, useGetPopularGoodsQuery, useGetSearchGoodsQuery } = goodsAPI