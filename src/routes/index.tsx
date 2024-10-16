import React from "react";

// import { AuthStore } from "@store/auth.store";

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
  // const auth = AuthStore();
  // const navigate = useNavigate();
  // const location = useLocation();

  // const pathnameWithQuery = location.pathname.concat(location.search);

  // React.useEffect(() => {
  //   if (auth.token) {
  //     if (
  //       pathnameWithQuery === "/" &&
  //       (auth.access === "company" ||
  //         auth.access === "patient" ||
  //         auth.access === "professional" ||
  //         auth.access === "clinic")
  //     ) {
  //       if (auth.access === "professional") {
  //         navigate(`/app/${auth.access}/signature`);
  //       } else if (auth.access === "clinic") {
  //         navigate(`/app/${auth.access}/professionals`);
  //       }
  //       navigate(`/app/${auth.access}/dashboard`);
  //       return;
  //     }

  //     navigate(pathnameWithQuery);
  //     return;
  //   }
  //   if (!auth.token && !pathnameWithQuery.includes("auth")) {
  //     auth.clear();
  //     navigate("/");
  //     return;
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <React.Fragment>
      {/* <Root /> */}
      <Auth />
      <App />
    </React.Fragment>
  );
}
