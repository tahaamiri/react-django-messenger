import React, { useState } from "react";
import { SignUpNewUser } from "./SignUp.interface";
import PATH from "../../../paths/paths";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignUp = () => {
	const [newUser, setNewUser] = useState<SignUpNewUser>({
		email: "",
		username: "",
		password: "",
		re_password: "",
	});
	const [passwordType, setPasswordType] = useState<string>("password");
	const showPassword = () => {
		setPasswordType(passwordType === "input" ? "password" : "input");
	};

	return (
		<div className="h-screen w-full bg-slate-900 text-white">
			<div className="mx-auto max-w-sm h-full py-16">
				<div className="text-center space-y-5">
					<h1 className="font-extrabold text-4xl">Messanger</h1>
					<h2 className="font-bold text-2xl">Create New Accunt</h2>
				</div>
				<div className="flex flex-col mt-10 space-y-16 p-8 ">
					<div className="space-y-3">
						<div className="flex flex-col justify-center text-left">
							<label className="text-base font-bold" htmlFor="email">
								Email:
							</label>
							<input
								className="bg-gray-800 rounded-md  w-full py-5 px-3 outline-none"
								onChange={(event) =>
									setNewUser({ ...newUser, email: event.target.value })
								}
								value={newUser.email}
								type="text"
								id="email"
							/>
						</div>
						<div className="flex flex-col justify-center text-left">
							<label className="text-base font-bold" htmlFor="username">
								Username:
							</label>
							<input
								className="bg-gray-800 rounded-md  w-full py-5 px-3 outline-none"
								onChange={(event) =>
									setNewUser({ ...newUser, username: event.target.value })
								}
								value={newUser.username}
								type="text"
								id="username"
							/>
						</div>
						<div className="relative flex flex-col justify-center text-left">
							<label className="text-base font-bold" htmlFor="password">
								Password:
							</label>
							<input
								className="bg-gray-800 rounded-md  w-full py-5 px-3 outline-none"
								onChange={(event) =>
									setNewUser({ ...newUser, password: event.target.value })
								}
								value={newUser.password}
								type={passwordType}
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
						<div className="relative flex flex-col justify-center text-left">
							<label className="text-base font-bold" htmlFor="password-repeat">
								Repeat Password:
							</label>
							<input
								className="bg-gray-800 rounded-md  w-full py-5 px-3 outline-none"
								onChange={(event) =>
									setNewUser({ ...newUser, re_password: event.target.value })
								}
								value={newUser.re_password}
								type={passwordType}
								id="password-repeat"
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
					<div className="flex flex-col justify-center space-y-3">
						<button className="font-bold bg-gradient-to-r from-pink-500 to-yellow-500 rounded-md w-full py-5 px-3">
							Create Account
						</button>
						<div className="flex justify-start items-center font-medium">
							<Link to={PATH.auth.login}>
								<div className="flex items-center">
									<span className="mr-2">Back To Login Page </span>
									<AiOutlineArrowRight style={{ color: "white" }} />
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
