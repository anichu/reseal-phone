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

	const from = location?.state?.from?.pathname || "/";
	if (token) {
		navigate(from, { replace: true });
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { signIn } = useContext(AuthContext);

	const onSubmit = (data) => {
		const { email, password } = data;
		// signin with emaill and password
		signIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				toast.success("user login");
				fetch(`http://localhost:5000/user?email=${user.email}`)
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						localStorage.setItem("resale-user-role", data.role);
					})
					.catch((err) => {
						console.log(err);
						setError(err.message);
					});
				setLoginEmail(data.email);
			})
			.catch((error) => {
				console.log(error.message);
				setError(error.message);
			});

		// console.log(email, password);
	};
	// console.log(errors);
	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-[50%] mx-auto border shadow-2xl rounded-2xl p-5 mt-5"
			>
				{error && <Alert message={error}></Alert>}

				<h1 className="text-center text-5xl my-5 text-primary">Login</h1>
				<div className="w-3/4 mx-auto">
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
				<div className="w-3/4 mx-auto mt-5">
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
				<div className="text-center mt-5 w-3/4 mx-auto">
					<button className="btn btn-primary block w-full" type="submit">
						{" "}
						Login{" "}
					</button>
				</div>

				<div className="flex items-center mt-2 w-3/4 mx-auto">
					<p className="w-full h-[1px] bg-gray-400"></p>
					<p className="uppercase mx-2">or</p>
					<p className="w-full h-[1px] bg-gray-400"></p>
				</div>

				<div className="text-center mt-3 w-3/4 mx-auto mb-3">
					<button type="button" className="btn btn-primary block w-full">
						login with google
					</button>
				</div>
				<p className="mt-5 text-xl mx-auto w-3/4 capitalize font-semibold text-left">
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
