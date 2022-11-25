import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContetxt/AuthProvider";
import useRole from "../../hooks/useRole";
import Loader from "../../pages/Shared/Loader/Loader";

const AdminRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const [role, roleLoading] = useRole(user?.email);
	const location = useLocation();
	if (loading || roleLoading) {
		return <Loader></Loader>;
	}

	if (user && role === "admin") {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
