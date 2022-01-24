import React from "react";
import { Routes, Route } from "react-router-dom";
import PATH from "./paths/paths";
import Login from "./pages/auth/signin/Login";
import SignUp from "./pages/auth/signup/SignUp";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path={PATH.auth.login} element={<Login />} />
			<Route path={PATH.auth.signUp} element={<SignUp />} />
		</Routes>
	);
};

export default Router;
