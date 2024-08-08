import { configureStore } from "@reduxjs/toolkit";
import { NewsReducer } from "../reducer/news.reducer";
import createSagaMiddleware from "redux-saga";
import { news } from "../saga/news.saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: NewsReducer,
    middleware: [sagaMiddleware],
    devTools: process.env.NODE_ENV !== "production" ? true : false
})

sagaMiddleware.run(news);

export default store;