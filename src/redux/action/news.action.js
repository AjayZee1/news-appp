import { GET_ALL_NEWS_ERROR, GET_ALL_NEWS_START, GET_ALL_NEWS_SUCCESS, GET_CATEGORY_NEWS_ERROR, GET_CATEGORY_NEWS_START, GET_CATEGORY_NEWS_SUCCESS } from "../constants/news.constant";

export const getAllNewsStart = () => ({
    type: GET_ALL_NEWS_START
})

export const getAllNewsSuccess = (data) => ({
    type: GET_ALL_NEWS_SUCCESS,
    payload: data
})

export const getAllNewsError = (error) => ({
    type: GET_ALL_NEWS_ERROR,
    payload: error
})

export const getCategoryNewsStart = (id) => ({
    type: GET_CATEGORY_NEWS_START,
    payload: id
})

export const getCategoryNewsSuccess = (data) => ({
    type: GET_CATEGORY_NEWS_SUCCESS,
    payload: data
})

export const getCategoryNewsError = (error) => ({
    type: GET_CATEGORY_NEWS_ERROR,
    payload: error
})