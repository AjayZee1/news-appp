import { GET_ALL_NEWS_SUCCESS, GET_CATEGORY_NEWS_SUCCESS } from "../constants/news.constant"

const intialState = {
    news: [],
    categoryNews: [],
    categories: [
        "war",
        "government",
        "politics",
        "education",
        "health",
        "environment",
        "economy",
        "business",
        "fashion",
        "entertainment",
        "sport"
    ]
}

export const NewsReducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_ALL_NEWS_SUCCESS:
            return {
                ...state,
                news: [...action.payload]
            }

        case GET_CATEGORY_NEWS_SUCCESS:
            return {
                ...state,
                categoryNews: [...action.payload]
            }
    
        default:
            return state
    }
}