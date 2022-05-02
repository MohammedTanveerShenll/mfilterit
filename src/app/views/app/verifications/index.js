import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Verifications = ({ match }) => (
    <Suspense>
        <Switch>
            {<Redirect exact={true} from="/verifications" to="/verifications/address" />}
            <Route path={`${match.url}/address`} component={lazy(() => import(`./address`))} />
            <Route path={`${match.url}/bank-verification`} component={lazy(() => import(`./bankverfication`))} />
            <Route path={`${match.url}/basic-epfo`} component={lazy(() => import(`./basicepfo`))} />
            <Route path={`${match.url}/company-search`} component={lazy(() => import(`./companysearch`))} />
            <Route path={`${match.url}/court-case`} component={lazy(() => import(`./courtcase`))} />
            <Route path={`${match.url}/ip-detail`} component={lazy(() => import(`./ipdetail`))} />
            <Route path={`${match.url}/ip-location`} component={lazy(() => import(`./iplocation`))} />
            <Route path={`${match.url}/pan-to-gst`} component={lazy(() => import(`./pantogst`))} />
            <Route path={`${match.url}/verify-aadhar`} component={lazy(() => import(`./verifyaadthar`))} />
            <Route path={`${match.url}/verify-domain`} component={lazy(() => import(`./verifydomain`))} />
            <Route path={`${match.url}/verify-email`} component={lazy(() => import(`./verifyemail`))} />
            <Route path={`${match.url}/verify-pan`} component={lazy(() => import(`./verifypan`))} />
            <Route path={`${match.url}/verify-passport`} component={lazy(() => import(`./verifypassport`))} />
            <Route path={`${match.url}/verify-voteid`} component={lazy(() => import(`./verifyvoteid`))} />
            <Route path={`${match.url}/verify-vehicle-rc`} component={lazy(() => import(`./verifyvechiclerc`))} />
            <Route path={`${match.url}/world-watch-risk-screening`} component={lazy(() => import(`./worldwatch`))} />
            <Route path={`${match.url}/epfo-employee`} component={lazy(() => import(`./epfoemployee`))} />
            <Route path={`${match.url}/verify-driving-license`} component={lazy(() => import(`./verifydrivinglicense`))} />
            <Route path={`${match.url}/bulk-bank-verification`} component={lazy(() => import(`./bulkbankverification`))} />
        </Switch>
    </Suspense>
);

export default Verifications;
