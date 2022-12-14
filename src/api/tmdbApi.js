import apiConfig from "./apiConfig";
import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    getMovieList: (type, params) => {
        const url = 'movie/' + movieType[type]
        return axiosClient.get(url, {params: {...params, api_key: apiConfig.apiKey}})
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type]
        return axiosClient.get(url, {params: {...params, api_key: apiConfig.apiKey}})
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos'
        return axiosClient.get(url, {params: {api_key: apiConfig.apiKey}})
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate]
        return axiosClient.get(url, {params: {...params, api_key: apiConfig.apiKey}})
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id
        return axiosClient.get(url, {params: {...params, api_key: apiConfig.apiKey}})
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits'
        return axiosClient.get(url, {params: {api_key: apiConfig.apiKey}})
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar'
        return axiosClient.get(url, {params: {api_key: apiConfig.apiKey}})
    }
}

export default tmdbApi