import { lazy, Suspense, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import Layout from "../layout/Layout";
import { getCurUser } from "../../redux/operations/authOperations";
import routers from "../../routers/routers";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader";
import { getIsAuth } from "../../redux/selectors/authSelector";

const App = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(getIsAuth);

  useEffect(() => {
    isAuth && dispatch(getCurUser());
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
                <Redirect to={routers.mainPage} />
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
                <Redirect to={routers.authPage} />
              </Switch>
            )}
          </Suspense>
        </div>
      </Layout>
    </div>
  );
};

export default App;
