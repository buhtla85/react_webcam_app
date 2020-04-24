import * as React from "react";
import { InnerContainer } from "./utils/InnerCont";
import { SingleEntry } from "./SingleEntry";

interface IStateEntries {
    entries: IEntry[]
}

export interface IEntry {
    mood: string,
    photo: string
}

export class DisplayEntries extends React.Component<{}, IStateEntries> {
    constructor(props: any) {
        super(props);
        this.state = {
            entries: [{
                mood: "not found",
                photo: "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
            }, {
                mood: "not found",
                photo: "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
            }, {
                mood: "not found",
                photo: "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
            } ]
        }
    }

    // async componentDidMount() {
    //     try {
    //         let data = await fetch("/api/hello");
    //         let entry = await data.json();
    //         this.setState({entries: entry});
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    render() {
        return (
            <InnerContainer>
                <div className="container">
                    <div className="row">
                        {this.state.entries.map((entry: IEntry, idx: number) => {
                            return (
                                <SingleEntry singleEntry={entry} index={idx}/>
                            )
                        })}
                    </div>
                </div>
            </InnerContainer>
        )
    }
}