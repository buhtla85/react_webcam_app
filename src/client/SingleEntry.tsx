import * as React from "react";
import { IEntry } from "./DisplayEntries";

const defaultIMG = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"; 

interface ISingleEntryProps {
    singleEntry: IEntry,
    index: number,
    removeEntry: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const SingleEntry = (props: ISingleEntryProps) => {
    return (
        <div className="col-sm-6 mb-3">
            <div className="card" >
                <img src={props.singleEntry.imgSrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                            <h5 className="card-title">Photo mood: </h5>
                            <p className="card-text">{props.singleEntry.mood}</p>
                            <button type="button" className="btn btn-warning" onClick={props.removeEntry}>Delete entry</button>
                    </div>
            </div>
        </div>
    )
};