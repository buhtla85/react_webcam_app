import * as React from 'react';
import { HomePage } from "./pages/Home";
import { PhotosPage } from "./pages/Photos";
import { Switch, Route } from "react-router-dom";

export const App = (): JSX.Element => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage}/>
			<Route exact path="/photos/" component={PhotosPage}/>
		</Switch>
	)
}
