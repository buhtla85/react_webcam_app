import * as React from 'react';
import { HomePage } from "./pages/Home";
import { PhotosPage } from "./pages/Photos";
import { Switch, Route } from "react-router-dom";

export const App = (): JSX.Element => {
	return (
		<Switch>
			<Route path="/photos/" component={PhotosPage}/>
			<Route exact path="/" component={HomePage}/>
		</Switch>
	)
}
