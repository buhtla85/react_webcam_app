import * as React from "react";
import { InnerContainer } from "./utils/InnerCont";
import { SingleEntry } from "./SingleEntry";
import { Spinner } from "./Spinner";

interface IStateEntries {
    entries: IEntry[],
    loading: boolean
}

export interface IEntry {
    mood: string,
    imgSrc: string,
    _id: string,
    date: string,
    _v: number
}

interface ApiResponse {
    count: number,
    data: IEntry[],
    success: boolean
}

//use the default _id from DB and use it in the app to delete entries
//also, maybe add spinner component and loading value for the state


export class DisplayEntries extends React.Component<{}, IStateEntries> {
    constructor(props: any) {
        super(props);
        this.state = {
            entries: [],
            loading: false
        }
    }

    async componentDidMount() {
        this.setState({loading: true});
        try {
            let hitMyApi = await fetch("/photos");
            let entry: ApiResponse = await hitMyApi.json();
            this.setState({entries: entry.data, loading: false});
        } catch (error) {
            console.log(error);
        }
    }

    removeEntry =  (id: string) => async () => {
        let options = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                'Accept': 'application/json, text/plain, */*'
            }
        }

        const sendReq = await fetch(`http://localhost:3000/photos/${id}`, options);
        this.setState({entries: this.state.entries.filter((entry: IEntry) => id !== entry._id)});

        const json = await sendReq.json();
        console.log(json);
    }

    render() {
        return (
            <InnerContainer>
                <div className="container">
                    {this.state.loading ? <Spinner /> : ""}
                    <div className="row">
                        {this.state.entries.map((entry: IEntry, idx: number) => {
                            return (
                                <>
                                    <SingleEntry singleEntry={entry} index={idx} removeEntry={this.removeEntry(entry._id)} key={entry._id}/>
                                </>
                            )
                        })}
                    </div>
                </div>
            </InnerContainer>
        )
    }
}