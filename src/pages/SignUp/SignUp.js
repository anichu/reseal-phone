import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContetxt/AuthProvider";
import useToken from "../../hooks/useToken";
import Alert from "../Shared/Alert/Alert";

const SignUp = () => {
	const { createUser, updateUserProfile, handleGoogleSignIn } =
		useContext(AuthContext);
	const [emailToken, setEmailtoken] = useState("");
	const [token] = useToken(emailToken);
	const navigate = useNavigate();
	const location = useLocation();
	const [error, setError] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const from = location?.state?.from?.pathname || "/";

	if (token) {
		navigate(from, { replace: true });
	}

	const onSubmit = (data) => {
		const { email, password, username, role } = data;
		createUser(email, password)
			.then((result) => {
				const user = result.user;
				const email = user.email;
				// update user profile name
				handleUpdateUserProfile(username);
				// create user in mongodb
				fetch("http://localhost:5000/users", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify({
						email,
						role,
						name: username,
					}),
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.acknowledged) {
							setEmailtoken(email);
							toast.success("user created");
						}
						setError("");
					})
					.catch((err) => {
						setError(err.message);
					});

				setError("");
			})
			.catch((err) => {
				setError(err.message);
				console.log(err);
			});
	};

	const handleUpdateUserProfile = (name) => {
		const profile = {
			displayName: name,
		};

		updateUserProfile(profile)
			.then(() => {})
			.catch((error) => {
				setError(error.message);
				console.error(error);
			});
	};
	// console.log(errors);
	// google signup
	const googleSignIn = () => {
		handleGoogleSignIn()
			.then((result) => {
				const user = result.user;
				// create user in mongodb
				fetch("http://localhost:5000/users/google", {
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
							setEmailtoken(user.email);
							toast.success("user created");
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

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-[50%] mx-auto border shadow-2xl rounded-2xl p-5 mt-5"
			>
				{error && <Alert message={error}></Alert>}
				<h1 className="text-center text-5xl my-5 text-primary">SignUp</h1>

				{/* username */}
				<div className="w-3/4 mx-auto mb-5">
					<input
						type="text"
						placeholder="your name"
						{...register("username", { required: "username is required" })}
						className="input input-bordered focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
					/>
					{errors.username && (
						<span className="text-red-800 font-semibold mt-2">
							{errors?.username?.message}
						</span>
					)}
				</div>
				{/* email */}
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
				{/* password */}
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
				{/* select user types */}
				<div className="w-3/4 mx-auto mt-5">
					<select
						{...register("role", {
							required: "User type is required",
						})}
						className="input input-bordered cursor-pointer focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
					>
						<option value="" disabled selected>
							Choose user type?
						</option>
						<option value="buyer">Buyer</option>
						<option value="seller">Seller</option>
					</select>
					{errors.role && (
						<span className="text-red-800 font-semibold mt-2">
							{errors?.role?.message}
						</span>
					)}
				</div>
				{/* button */}
				<div className="text-center mt-5 w-3/4 mx-auto">
					<button className="btn btn-primary block w-full" type="submit">
						{" "}
						SignUp{" "}
					</button>
				</div>

				<div className="flex items-center mt-2 w-3/4 mx-auto">
					<p className="w-full h-[1px] bg-gray-400"></p>
					<p className="uppercase mx-2">or</p>
					<p className="w-full h-[1px] bg-gray-400"></p>
				</div>

				<div className="text-center mt-3 w-3/4 mx-auto mb-3">
					<button
						type="button"
						onClick={googleSignIn}
						className="btn btn-primary block w-full"
					>
						signup with google
					</button>
				</div>
				<p className="mt-5 text-xl mx-auto w-3/4 capitalize font-semibold text-left">
					Already have an account?
					<Link to="/login" className="btn btn-sm btn-primary rounded-3xl ml-2">
						Login
					</Link>{" "}
				</p>
			</form>
		</div>
	);
};

export default SignUp;
