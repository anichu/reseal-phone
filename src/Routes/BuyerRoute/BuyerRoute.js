import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContetxt/AuthProvider";
import useRole from "../../hooks/useRole";
import Loader from "../../pages/Shared/Loader/Loader";

const BuyerRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const [role, roleLoading] = useRole(user?.email);
	const location = useLocation();
	console.log(role);
	if (loading || roleLoading) {
		return <Loader></Loader>;
	}
	if (user && role === "buyer") {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
