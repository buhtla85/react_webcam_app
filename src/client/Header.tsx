import * as React from "react";
import { Link } from "react-router-dom";

export const Header = (): JSX.Element => {
    return (
        <header className="masthead mb-auto">
            <div className="inner">
                <h3 className="masthead-brand">PhotoApp</h3>
                    <nav className="nav nav-masthead justify-content-center">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/photos/" className="nav-link">Photos</Link>
                    </nav>
            </div>
        </header>
    )
};