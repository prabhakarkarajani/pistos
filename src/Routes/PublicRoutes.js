import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../components/Layout";
const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user")).token ? (
        <Redirect
          to={{ pathname: "/dashboard", state: { from: props.location } }}
        />
      ) : (
        <Layout {...rest}>
          <Component {...props} />
        </Layout>
      )
    }
  />
);
export default PublicRoute;
