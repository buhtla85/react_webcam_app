import * as React from "react";
import { InnerContainer } from "./utils/InnerCont";
import { SingleEntry } from "./SingleEntry";

interface IStateEntries {
    entries: []
}
//don't forget to define interface for array values

const defaultIMG = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"; 

export class DisplayEntries extends React.Component<{}, IStateEntries> {
    constructor(props: any) {
        super(props);
        this.state = {
            entries: []
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
                        <SingleEntry />
                        <SingleEntry />
                        <SingleEntry />
                    </div>
                </div>
            </InnerContainer>
        )
    }
}