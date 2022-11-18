import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReportsPage from "./pages/ReportsPage";
import NotificationPage from "./pages/NotificationPage";
import ParkingPage from "./pages/ParkingPage";
import LoginPage from "./pages/LoginPage";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/login">
                <LoginPage  />
            </Route>
            <Route exact path="/parkings">
            <ParkingPage/>
            </Route>
            <Route exact path="/reports">
                <ReportsPage/>
            </Route>
            <Route exact path="/notfications">
            <NotificationPage/>
            </Route>
        </Switch>
    );
};

export default Routes;
