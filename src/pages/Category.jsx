import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getCategoryNewsStart } from '../redux/action/news.action';
import Card from '../components/Card';

export default function Category() {
    let { id } = useParams();

    let categoryNews = useSelector(state => state.categoryNews)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryNewsStart(id))
    }, [id, categoryNews.length])
    return (
        <div className='row'>
            {
                  categoryNews.length > 0 && categoryNews.map((item,index) => (
                    <Card item={item} key={index}/>
                ))
            }
        </div>
    )
}
