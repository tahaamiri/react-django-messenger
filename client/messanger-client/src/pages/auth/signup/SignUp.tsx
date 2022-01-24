import React from "react";
import PATH from "../../../paths/paths";
import SignIn from "../../../assets/images/signin.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
	const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<div className="p-10 h-screen my-auto md:grid md:grid-cols-2">
			<div className="hidden md:block w-full py-20">
				<img src={SignIn} alt="Signin to your account" width={500} />
			</div>
			<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<div>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create new accunt</h2>
					</div>
					<form onSubmit={formSubmitHandler} className="mt-8 space-y-5" action="#" method="POST">
						<input type="hidden" name="remember" value="true" />
						<div className="rounded-md shadow-sm space-y-2">
							<div>
								<label htmlFor="email-address" className="">
									Email address
								</label>
								<input
									id="email-address"
									name="email"
									type="text"
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Email address"
								/>
							</div>
							<div>
								<label htmlFor="username" className="">
									Username
								</label>
								<input
									id="username"
									name="username"
									type="text"
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="user name"
								/>
							</div>
							<div>
								<label htmlFor="password" className="">
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Password"
								/>
							</div>
							<div>
								<label htmlFor="r-password" className="">
									Repeat Password
								</label>
								<input
									id="r-password"
									name="r-password"
									type="password"
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Repeat Password"
								/>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Submit
							</button>
						</div>
						<div>
							<Link to={PATH.auth.login}>
								<button
									type="submit"
									className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									Back to login page
								</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
