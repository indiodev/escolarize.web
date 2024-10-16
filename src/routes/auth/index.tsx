import { Layout } from "@/layouts";
import React from "react";
import { Route, Routes } from "react-router-dom";

// const SingInRouter = React.lazy(async function () {
// 	const module = await import('./sign-in');
// 	return {
// 		default: module.Router,
// 	};
// });

// const SingUpRouter = React.lazy(async function () {
// 	const module = await import('./sign-up');
// 	return {
// 		default: module.Router,
// 	};
// });

// const ForgotPasswordRouter = React.lazy(async function () {
// 	const module = await import('./forgot-password');
// 	return {
// 		default: module.Router,
// 	};
// });

// const ForgotPasswordAdminRouter = React.lazy(async function () {
// 	const module = await import('./forgot-password/admin');
// 	return {
// 		default: module.Router,
// 	};
// });

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/auth/*" element={<Layout.Auth />}>
        {/* <Route
					path="sign-up/*"
					element={<SingUpRouter />}
				/>

				<Route
					path="sign-in/*"
					element={<SingInRouter />}
				/> */}

        {/* <Route path="forgot-password/*" element={<ForgotPasswordRouter />} /> */}

        {/* <Route
          path="forgot-password/admin*"
          element={<ForgotPasswordAdminRouter />}
        /> */}
      </Route>
    </Routes>
  );
}
