import * as React from "react";
import { InnerContainer } from "./utils/InnerCont";

interface IStateEntries {
    entries: []
}

const defaultIMG = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"

export class DisplayEntries extends React.Component<{}, IStateEntries> {
    constructor(props: any) {
        super(props);
        this.state = {
            entries: []
        }
    }

    render() {
        return (
            <InnerContainer>
                <div className="card-columns">
                    <div className="card" style={{ width: "18rem"}}>
                        <img src={defaultIMG} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                </div>
            </InnerContainer>
        )
    }
}