import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Demo = ({ match }) => (
    <Suspense>
        <Switch>
            {<Redirect exact={true} from="/tickets" to="/tickets/list" />}
            <Route path={`${match.url}/list`} component={lazy(() => import(`./list`))} />
        </Switch>
    </Suspense>
);

export default Demo;