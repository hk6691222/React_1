import React from 'react'

const NewsFile = (props) => {
    let { title, description } = props;
    return (
        <div>
            <div className="container my-5">
            <div className="card" style={{width: "500px", height: "300px", marginLeft: "20px"}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Hello World</h5>
                <p className="card-text">I am still learning</p>
                <a href="/newsDetails" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>

            <div className="container justify-content-evenly">
            <div className="card my-2" style={{ maxWidth: "440px", maxHeight: "180px", marginLeft: "700px", marginTop: "-600px" }}>
                <div className="row">
                    <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body" style={{textAlign: "center"}}>
                        <h5 className="card-title">Hello World</h5>
                        <p className="card-text">I am still Learning</p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <hr />
            
            <div className="container my-5">
                <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/newsDetails" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
    </div>
)
}

export default NewsFile;