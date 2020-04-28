import * as React from "react";
import { Link } from "react-router-dom";

interface IHeaderProps {
    customClass: string
}

export const Header = (props: IHeaderProps): JSX.Element => {
    return (
        <header className={props.customClass}>
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