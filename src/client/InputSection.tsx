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

    myRef: React.RefObject<Webcam> = React.createRef();

    handleMoodInput = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({mood: e.target.value});

    capturePhoto = () => {
        const scrShoot = this.myRef.current!.getScreenshot();
        console.log(scrShoot);
        this.setState({imgSrc: scrShoot});
    }


    render () {
        return (
            <InnerContainer>
                <h1 className="cover-heading">Take a photo app.</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, sit.</p>
                <form action="">
                    <div>
                        <Webcam ref={this.myRef as any} videoConstraints={videoConstraints} audio={false} height={350} screenshotFormat="image/jpeg" width={350} />
                        <p className="lead">
                            <button className="btn btn-secondary" type="button" onClick={this.capturePhoto}>Capture photo</button>
                        </p>
                    </div>
                    <label htmlFor="myInput">Enter your mood!</label>
                    <div>
                        <input type="text" name="mood" value={this.state.mood} id="myInput" placeholder="Your mood goes here..." onChange={this.handleMoodInput} />
                    </div>
                    <p className="lead">
                        <button className="btn btn-lg btn-primary" type="submit">Submit!</button>
                    </p>
                </form>
            </InnerContainer>
        )
    }
};