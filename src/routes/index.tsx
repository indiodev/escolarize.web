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

  const IS_ADMINISTRATOR_ACCESS = auth.token && auth.access === "ADMINISTRATOR";
  const IS_RESPONSIBLE_ACCESS = auth.token && auth.access === "RESPONSIBLE";

  React.useEffect(() => {
    if (IS_ADMINISTRATOR_ACCESS && location.pathname === "/") {
      navigate("/app/administrator/dashboard");
      return;
    }

    if (IS_RESPONSIBLE_ACCESS && location.pathname === "/") {
      navigate("/app/responsible/dashboard");
      return;
    }

    // if (auth.token) {
    //   navigate(location?.pathname.concat(location.search));
    //   return;
    // }

    if (!auth.token && !location.pathname.includes("auth")) {
      auth.clear();
      // navigate("/");
      navigate("/auth/sign-in/administrator");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Auth />
      <App />
    </React.Fragment>
  );
}
