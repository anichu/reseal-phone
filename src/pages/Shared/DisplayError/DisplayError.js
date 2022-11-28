import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContetxt/AuthProvider";

const DisplayError = () => {
	const { logOut } = useContext(AuthContext);
	const error = useRouteError();
	const navigate = useNavigate();

	const handleLogOut = () => {
		logOut()
			.then(() => {
				navigate("/login");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<p className="text-red-500 text-center">Something went wrong!!!</p>
			<p className="text-red-400 text-center">
				{error.statusText || error.message}
			</p>
			<h4 className="text-3xl text-center">
				{" "}
				Please <button onClick={handleLogOut}>Sign out</button> and log back in
			</h4>
		</div>
	);
};

export default DisplayError;
