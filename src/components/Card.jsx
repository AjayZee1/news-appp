import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({item}) {
    return (
        <div className='col-sm-3 mb-2'>
            <div className="card">
                <img src={item.urlToImage} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <Link to={item.url} className="btn btn-primary" target='_blank'>Read more</Link>
                    </div>
            </div>
        </div>
    )
}
