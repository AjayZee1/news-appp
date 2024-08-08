import { put, takeLatest } from 'redux-saga/effects';
import { GET_ALL_NEWS_START, GET_CATEGORY_NEWS_START } from '../constants/news.constant';
import { getNewsByApi } from '../services/news.service';
import { getAllNewsError, getAllNewsSuccess, getCategoryNewsError, getCategoryNewsSuccess } from '../action/news.action';

function* getNews() {
    try {
        let data =   yield getNewsByApi();
        yield put(getAllNewsSuccess(data));
    } catch (error) {
        yield put(getAllNewsError(error))
    }
}

function* getCategoryNews({payload}) {
    try {
        let data =   yield getNewsByApi(payload);
        yield put(getCategoryNewsSuccess(data));
    } catch (error) {
        yield put(getCategoryNewsError(error))
    }
}

export function* news() {
    yield takeLatest(GET_ALL_NEWS_START, getNews);
    yield takeLatest(GET_CATEGORY_NEWS_START, getCategoryNews);

}

