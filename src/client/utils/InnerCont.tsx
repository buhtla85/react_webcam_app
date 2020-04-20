import * as React from "react";

export const InnerContainer: React.FunctionComponent = ({children}) => {
    return (
        <main role="main" className="inner cover">
            {children}
        </main>
    )
};