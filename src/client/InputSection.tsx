import * as React from "react";
import { InnerContainer } from "./utils/InnerCont";

//interface for the state - errMsg, mood, photo

export class InputSection extends React.Component {
    render () {
        return (
            <InnerContainer>
                <h1 className="cover-heading">Take a photo app.</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, sit.</p>
            </InnerContainer>
        )
    }
};