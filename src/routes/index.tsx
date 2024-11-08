/* eslint-disable react-hooks/exhaustive-deps */
import { AuthStore } from "@/store/auth.store";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Auth = React.lazy(async function () {
  const module = await import("./auth");
  return {
    default: module.Router,
  };
});

const App = React.lazy(async function () {
  const module = await import("./app");
  return {
    default: module.Router,
  };
});

export function Router(): React.ReactElement {
  const auth = AuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const pathnameWithQuery = location.pathname.concat(location.search);

  React.useEffect(() => {
    if (auth.token) {
      if (pathnameWithQuery === "/") {
        if (auth.access === "ADMINISTRATOR") {
          navigate("/app/administrator/payment");
          return;
        }

        if (auth.access === "RESPONSIBLE") {
          navigate("/app/responsible/payment");
          return;
        }

        return;
      }

      navigate(pathnameWithQuery);
      return;
    }

    if (!auth.token && !pathnameWithQuery.includes("auth")) {
      auth.clear();
      // navigate("/");
      navigate("/auth/sign-in/administrator");

      return;
    }
  }, []);

  return (
    <React.Fragment>
      <Auth />
      <App />
    </React.Fragment>
  );
}
