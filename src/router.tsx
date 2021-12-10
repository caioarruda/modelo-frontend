import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/login';
import Pets from './pages/pets';
import Robopets from './pages/robopets';
import Errors from './pages/errors';
import * as AddPet from './pages/pets/add';
import * as AddRobopet from './pages/robopets/add';

import { shallowEqual, useSelector } from 'react-redux';

type props = {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
};

//if logged in, redirect to dashboard
const PrivateRoute: React.FC<props> = ({
  component: Component,
  path,
  exact,
  children
}) => {
  const user: IUser = useSelector(
    (state: UserState) => state.user,
    shallowEqual
  );
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        user?.id ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Pets} />
        <PrivateRoute exact path="/pets" component={Pets} />
        <PrivateRoute exact path="/pets/add" component={AddPet.default} />
        <PrivateRoute exact path="/robopets" component={Robopets} />
        <PrivateRoute
          exact
          path="/robopets/add"
          component={AddRobopet.default}
        />
        <Route exact path="/404">
          <Errors code="404" />
        </Route>
        <Route exact path="/500">
          <Errors code="500" />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
