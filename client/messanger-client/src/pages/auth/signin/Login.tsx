import React, { useState } from "react";
import { LoginData } from "./Login.interface";
import PATH from "../../../paths/paths";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
	const [userInformation, setUserInformation] = useState<LoginData>({
		username: "",
		password: "",
	});
	const [passwordType, setPasswordType] = useState<string>("password");

	const showPassword = () => {
		setPasswordType(passwordType === "input" ? "password" : "input");
	};

	return (
		<div className="h-screen w-full bg-slate-900 text-white">
			<div className="mx-auto max-w-sm h-full pt-28">
				<div className="text-center space-y-5">
					<h1 className="font-extrabold text-4xl">Messanger</h1>
					<h2 className="font-bold text-2xl">Login To Your Accunt</h2>
				</div>
				<div className="flex flex-col mt-10 space-y-16 p-8 ">
					<div className="space-y-3">
						<div className="flex flex-col justify-center text-left">
							<label className="text-base font-bold" htmlFor="email">
								Enter Email/Username
							</label>
							<input
								className="bg-gray-800 rounded-md  w-full py-5 px-3 outline-none"
								onChange={(event) =>
									setUserInformation({
										...userInformation,
										username: event.target.value,
									})
								}
								type="text"
								value={userInformation.username}
								id="email"
							/>
						</div>
						<div className="relative flex flex-col justify-center text-left">
							<label className="text-base font-bold" htmlFor="password">
								Enter Password
							</label>
							<input
								className="bg-gray-800 rounded-md  w-full py-5 px-3 outline-none"
								onChange={(event) =>
									setUserInformation({
										...userInformation,
										password: event.target.value,
									})
								}
								type={passwordType}
								value={userInformation.password}
								id="password"
							/>
							<span className="absolute top-12 right-5" onClick={showPassword}>
								{passwordType === "input" ? (
									<AiFillEyeInvisible />
								) : (
									<AiFillEye />
								)}
							</span>
						</div>
					</div>
					<div className="flex flex-col space-y-3">
						<button className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md w-full py-5 px-3">
							Login to your accunt
						</button>
						<div className="flex justify-start items-center font-medium">
							<Link to={PATH.auth.signUp}>
								<span>Create Account?</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
