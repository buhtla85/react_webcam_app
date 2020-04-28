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

    removeEntry = (idx: number) => () => this.setState({entries: this.state.entries.filter((entry: IEntry, entryIdx: number) => idx !== entryIdx)});

    render() {
        return (
            <InnerContainer>
                <div className="container">
                    {this.state.loading ? <Spinner /> : ""}
                    <div className="row">
                        {this.state.entries.map((entry: IEntry, idx: number) => {
                            return (
                                <>
                                    <SingleEntry singleEntry={entry} index={idx} removeEntry={this.removeEntry(idx)} key={idx}/>
                                </>
                            )
                        })}
                    </div>
                </div>
            </InnerContainer>
        )
    }
}