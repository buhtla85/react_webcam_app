import * as React from "react";

export const Spinner = (): JSX.Element => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
};