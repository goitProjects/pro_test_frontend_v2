import { lazy, Suspense, useEffect } from "react";
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router";
import Layout from "../layout/Layout";
import {
  getUserGoogle,
  refreshToken,
} from "../../redux/operations/authOperations";
import routers from "../../routers/routers";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader";

import queryString from "query-string";
function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const isAuth = useSelector((state) => !!state.auth.token);

  useEffect(() => {
    // dispatch(refreshToken());
    const params = queryString.parse(location.search);
    const keysArray = Object.keys(params);

    if (keysArray.length > 0) {
      dispatch(getUserGoogle(params));
      history.push("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Layout>
        <div className="App">
          <Suspense fallback={<Loader />}>
            {isAuth ? (
              <Switch>
                <Route
                  path={routers.mainPage}
                  exact
                  component={lazy(() => import("../pages/mainPage/MainPage"))}
                />
                <Route
                  path={routers.contactsPage}
                  exact
                  component={lazy(() =>
                    import("../pages/contactsPage/ContactsPage ")
                  )}
                />
                <Route
                  path={routers.test}
                  exact
                  component={lazy(() => import("../pages/test/Test"))}
                />
                <Route
                  path={routers.results}
                  exact
                  component={lazy(() => import("../pages/results/Results"))}
                />
                <Route
                  path={routers.usefulInfo}
                  exact
                  component={lazy(() =>
                    import("../pages/UsefulInfo/UsefulInfo")
                  )}
                />
                <Redirect to="/" />
              </Switch>
            ) : (
              <Switch>
                <Route
                  path={routers.authPage}
                  exact
                  component={lazy(() => import("../pages/authPage/AuthPage"))}
                />
                <Route
                  path={routers.contactsPage}
                  exact
                  component={lazy(() =>
                    import("../pages/contactsPage/ContactsPage ")
                  )}
                />
                <Redirect to="/auth" />
              </Switch>
            )}
          </Suspense>
        </div>
      </Layout>
    </div>
  );
}

export default App;
