import * as React from "react";
import { InnerContainer } from "./utils/InnerCont";
import Webcam from "react-webcam";

interface IState {
    mood: string,
    imgSrc: string,
    errMsg: string
}

//this is from offical doc on react-webcam
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

export class InputSection extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {mood: "", imgSrc: "", errMsg: ""}
    }


    render () {
        return (
            <InnerContainer>
                <h1 className="cover-heading">Take a photo app.</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, sit.</p>
                <form action="">
                    <div>
                        <Webcam videoConstraints={videoConstraints} audio={false} height={350} screenshotFormat="image/jpeg" width={350} />
                        <p className="lead">
                            <button className="btn btn-lg btn-secondary">Capture photo</button>
                        </p>
                    </div>
                </form>
            </InnerContainer>
        )
    }
};