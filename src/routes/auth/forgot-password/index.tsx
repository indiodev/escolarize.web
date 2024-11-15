import React from "react";
import { Route, Routes } from "react-router-dom";

const SendEmailPage = React.lazy(async function () {
  const module = await import("@/pages/auth/forgot-password/send-email");
  return {
    default: module.SendEmail,
  };
});

const VerifyTokenPage = React.lazy(async function () {
  const module = await import ("@/pages/auth/forgot-password/verify-token");
  return {
    default: module.VerifyToken,
  }
})

// const ResetPasswordPage = React.lazy(async function () {
// 	const module = await import('@pages/auth/forgot-password/reset');
// 	return {
// 		default: module.ResetPassword,
// 	};
// });

// const PasswordSuccessPage = React.lazy(async function () {
// 	const module = await import('@pages/auth/forgot-password/password-success');
// 	return {
// 		default: module.PasswordSuccess,
// 	};
// });

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route 
        index 
        element={<SendEmailPage />} 
      />

      <Route 
        path="verify-token" 
        element={<VerifyTokenPage />} 
      />

      {/* <Route
				path="/reset"
				element={<ResetPasswordPage />}
			/>

			<Route
				path="/password-success"
				element={<PasswordSuccessPage />}
			/> */}
    </Routes>
  );
}
