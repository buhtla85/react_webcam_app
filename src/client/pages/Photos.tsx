import * as React from "react";
import { Header } from "../Header";
import { DisplayEntries } from "../DisplayEntries";

export const PhotosPage = (): JSX.Element => {
    return (
        <div className="text-center">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <Header />
                <DisplayEntries />
            </div>
        </div>
    )
};