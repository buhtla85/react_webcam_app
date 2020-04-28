import * as React from "react";
import { Header } from "../Header";
import { InputSection } from "../InputSection";

export const HomePage = (): JSX.Element => {
    return (
        <div className="text-center">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <Header customClass="masthead mb-auto" />
                <InputSection />
            </div>
        </div>
    )
};