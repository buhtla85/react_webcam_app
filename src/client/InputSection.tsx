import * as React from "react";
import { InnerContainer } from "./utils/InnerCont";
import Webcam from "react-webcam";
// import img from "./noimage-cover.jpg";

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

//maybe it should be allowed for the user to submit the form even if he/she did not click "capture photo" button, 
//what if he/she does not want to take photo  https://discountpartner.co.uk/uploads/stores/noimage-cover.jpg

export class InputSection extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {mood: "", imgSrc: "", errMsg: ""}
    }

    myRef: React.RefObject<any> = React.createRef(); //this had to be anotated as "any" - <Webcam> type resulted in namespace error

    handleMoodInput = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({mood: e.target.value});

    capturePhoto = () => {
        const scrShoot = this.myRef.current!.getScreenshot();
        console.log(scrShoot);
        if (scrShoot === null) {
            this.setState({imgSrc: "https://discountpartner.co.uk/uploads/stores/noimage-cover.jpg"});
        } else {
            this.setState({imgSrc: scrShoot});
        }
    }

    submitValues = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (this.state.imgSrc.length < 1 || this.state.mood.length < 1 ) {
            this.setState({errMsg: "Please make sure to enter a value or to click a capture button."})
            setTimeout(() => {
                this.setState({errMsg: ""})
            }, 5000)
        }
        const { imgSrc, mood } = this.state;
        const postVals = { imgSrc, mood }
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                'Accept': 'application/json, text/plain, */*'
            },
            body: JSON.stringify(postVals)
        }
        const response = await fetch("http://localhost:3000/", options);
        const json = await response.json();
        console.log(json);
    }


    render () {
        return (
            <InnerContainer>
                <h1 className="cover-heading">Record this moment...</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, sit.</p>
                {this.state.errMsg.length === 0 ? "" : <div className="alert alert-danger" role="alert">{this.state.errMsg}</div>}
                <form action="" onSubmit={this.submitValues}>
                    <div>
                        <Webcam ref={this.myRef as any} videoConstraints={videoConstraints} audio={false} height={300} screenshotFormat="image/jpeg" width={288} />
                        <p className="lead">
                            <button className="btn btn-secondary" type="button" onClick={this.capturePhoto}>Capture photo</button>
                        </p>
                    </div>
                    <label htmlFor="myInput">Enter your mood!</label>
                    <div>
                        <input type="text" name="mood" value={this.state.mood} id="myInput" onChange={this.handleMoodInput} />
                    </div>
                    <p className="lead">
                        <button className="btn btn-lg btn-primary mt-2" type="submit">Submit!</button>
                    </p>
                </form>
            </InnerContainer>
        )
    }
};