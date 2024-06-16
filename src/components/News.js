import React from 'react'
import NewsFile from './NewsFile';

const News = ()=> {
    return (
    <div className='container my-3'>
        <h1>PocketNews - Top Headlines</h1>
        <div className="row">
            <div className="col-md-4">
                <NewsFile title="myTitle" desc="myDesc"/>
            </div>
    </div>
    </div>
)
}

export default News;