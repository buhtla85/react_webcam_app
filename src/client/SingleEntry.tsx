import * as React from "react";

const defaultIMG = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"; 


export const SingleEntry = () => {
    return (
        <div className="col-sm-6 mb-3">
            <div className="card" >
                <img src={defaultIMG} className="card-img-top" alt="..." />
                    <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>
        </div>
    )
};