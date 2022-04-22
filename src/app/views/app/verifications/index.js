import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Verifications = ({ match }) => (
    <Suspense>
        <Switch>
            {<Redirect exact={true} from="/verifications" to="/verifications/bulk-verification" />}
            <Route path={`${match.url}/edit`} component={lazy(() => import(`./edit`))} />
            <Route path={`${match.url}/bulk-verification`} component={lazy(() => import(`./bulkverfication`))} />
            <Route path={`${match.url}/world-watch-screening`} component={lazy(() => import(`./worldwatchstreaming`))} />
            <Route path={`${match.url}/vehicle-detail`} component={lazy(() => import(`./vechicledetails`))} />
            <Route path={`${match.url}/policy`} component={lazy(() => import(`./policy`))} />
            <Route path={`${match.url}/phone`} component={lazy(() => import(`./phone`))} />
            <Route path={`${match.url}/passport-check`} component={lazy(() => import(`./passportcheck`))} />
            <Route path={`${match.url}/pan-gst-check`} component={lazy(() => import(`./pangstcheck`))} />
            <Route path={`${match.url}/pan-card-check`} component={lazy(() => import(`./pancardcheck`))} />
            <Route path={`${match.url}/number-data-check`} component={lazy(() => import(`./numberdatacheck`))} />
            <Route path={`${match.url}/location`} component={lazy(() => import(`./location`))} />
            <Route path={`${match.url}/email`} component={lazy(() => import(`./email`))} />

        </Switch>
    </Suspense>
);

export default Verifications;