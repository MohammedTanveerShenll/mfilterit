import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import PageLoader from "./PageLoader";

// App pages
const ThreeSixtyDegree = lazy(() => import("./views/app/360-degree"));
const Dashboard = lazy(() => import("./views/app/dashboard"));
const DemoPages = lazy(() => import("./views/app/demo"));
const Issues = lazy(() => import("./views/app/issues"));
const Packages = lazy(() => import("./views/app/packages"));
const Reports = lazy(() => import("./views/app/reports"));
const TicketingSystem = lazy(() => import("./views/app/ticketing-system"));
const Tickets = lazy(() => import("./views/app/tickets"));
const Users = lazy(() => import("./views/app/users"));
const Verification = lazy(() => import("./views/app/verification"));
const WebFraudDashboard = lazy(() => import("./views/app/web-fraud-dashboard"));
const ChangePassword = lazy(() => import("./views/app/changepassword"));
const ErrorPage = lazy(() => import("./views/app/errors"));

export default function AppPages() {

    return (
        <Suspense fallback={<PageLoader />}>
            <Switch>
                {
                    <Redirect exact from="/" to="/dashboard" />
                }
                <ContentRoute path="/360-degree" component={ThreeSixtyDegree} />
                <ContentRoute path="/dashboard" component={Dashboard} />
                <ContentRoute path="/demo" component={DemoPages} />
                <ContentRoute path="/issues" component={Issues} />
                <ContentRoute path="/packages" component={Packages} />
                <ContentRoute path="/reports" component={Reports} />
                <ContentRoute path="/ticketing-system" component={TicketingSystem} />
                <ContentRoute path="/tickets" component={Tickets} />
                <ContentRoute path="/users" component={Users} />
                <ContentRoute path="/verification" component={Verification} />
                <ContentRoute path="/web-fraud-dashboard" component={WebFraudDashboard} />
                <ContentRoute path="/changepassword" component={ChangePassword} />
                <Redirect to="errors" />
            </Switch>
        </Suspense>
    );
}