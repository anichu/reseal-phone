import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContetxt/AuthProvider";
import useToken from "../../hooks/useToken";
import Alert from "../Shared/Alert/Alert";

const Login = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [loginEmail, setLoginEmail] = useState("");
	const [error, setError] = useState("");
	const [token] = useToken(loginEmail);

	// const from = location?.state?.from?.pathname || "/";
	const from = "/";
	if (token) {
		navigate(from, { replace: true });
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { signIn, handleGoogleSignIn } = useContext(AuthContext);

	const onSubmit = (data) => {
		const { email, password } = data;
		// signin with emaill and password
		signIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				toast.success("user login");
				setLoginEmail(data.email);
			})
			.catch((error) => {
				console.log(error.message);
				setError(error.message);
			});

		// console.log(email, password);
	};

	const googleSignIn = () => {
		handleGoogleSignIn()
			.then((result) => {
				const user = result.user;
				fetch("https://resale-phone-server.vercel.app/users/google", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify({
						email: user.email,
						role: "buyer",
						name: user.displayName,
						isVerified: false,
					}),
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.acknowledged) {
							setLoginEmail(user.email);
							toast.success("user login");
							setError("");
						}
					})
					.catch((err) => {
						setError(err.message);
					});
			})
			.catch((error) => {
				console.error("error: ", error);
				setError(error.message);
			});
	};
	// console.log(errors);
	return (
		<div className="my-10">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="md:w-[50%] sm:w-[80%] w-[95%] mx-auto border shadow-2xl rounded-2xl p-5 mt-5"
			>
				{error && <Alert message={error}></Alert>}

				<h1 className="text-center text-5xl my-5 text-primary">Login</h1>
				<div className="sm:w-3/4 w-full mx-auto">
					<input
						type="email"
						placeholder="your email"
						{...register("email", { required: "Email is required" })}
						className="input input-bordered focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
					/>
					{errors.email && (
						<span className="text-red-800 font-semibold mt-2">
							{errors?.email?.message}
						</span>
					)}
				</div>
				<div className="sm:w-3/4 w-full mx-auto mt-5">
					<input
						type="password"
						placeholder="your password"
						{...register("password", {
							required: "Password is required",
							minLength: {
								value: 6,
								message: "Password should be at least six character",
							},
						})}
						className="input input-bordered focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
					/>
					{errors.password && (
						<span className="text-red-800 font-semibold mt-2">
							{errors?.password?.message}
						</span>
					)}
				</div>
				<div className="text-center mt-5 sm:w-3/4 w-full mx-auto">
					<button className="btn btn-primary block w-full" type="submit">
						{" "}
						Login{" "}
					</button>
				</div>

				<div className="flex items-center mt-2 sm:w-3/4 w-full mx-auto">
					<p className="w-full h-[1px] bg-gray-400"></p>
					<p className="uppercase mx-2">or</p>
					<p className="w-full h-[1px] bg-gray-400"></p>
				</div>

				<div className="text-center mt-3 sm:w-3/4 w-full mx-auto mb-3">
					<button
						type="button"
						onClick={googleSignIn}
						className="btn btn-primary block w-full"
					>
						login with google
					</button>
				</div>
				<p className="mt-5 text-xl mx-auto sm:w-3/4 w-full capitalize font-semibold text-left">
					New to Resale phone?
					<Link
						to="/signup"
						className="btn btn-sm btn-primary rounded-3xl ml-2"
					>
						Register
					</Link>{" "}
				</p>
			</form>
		</div>
	);
};

export default Login;
