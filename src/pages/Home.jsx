import React, { useEffect } from 'react'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNewsStart } from '../redux/action/news.action';

export default function Home() {
    const news = useSelector(state => state.news)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllNewsStart());
    }, [news.length])

    return (
        <div className='row'>
            {
                news.length > 0 && news.map((item,index) => (
                    <Card item={item} key={index}/>
                ))
            }
        </div>
    )
}
