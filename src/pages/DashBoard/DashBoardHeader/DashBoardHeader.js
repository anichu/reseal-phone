import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContetxt/AuthProvider";
import useRole from "../../../hooks/useRole";

const DashBoardHeader = () => {
	const { user } = useContext(AuthContext);
	const [role] = useRole(user?.email);
	console.log(role);
	return (
		<div className="w-full ">
			<div className="tabs py-3 tabs-boxed w-full flex-wrap justify-center">
				{role && role === "admin" && (
					<>
						<NavLink
							to="/dashboard/allbuyers"
							className={({ isActive }) =>
								isActive ? "tab tab-active" : "tab"
							}
						>
							All Buyers
						</NavLink>
						<NavLink
							to="/dashboard/allsellers"
							className={({ isActive }) =>
								isActive ? "tab tab-active" : "tab"
							}
						>
							All Sellers
						</NavLink>
					</>
				)}

				{role && role === "seller" && (
					<>
						{" "}
						<NavLink
							to="/dashboard/addproduct"
							className={({ isActive }) =>
								isActive ? "tab tab-active" : "tab"
							}
						>
							Add A Product
						</NavLink>
						<NavLink
							to="/dashboard/myproducts"
							className={({ isActive }) =>
								isActive ? "tab tab-active" : "tab"
							}
						>
							My Products
						</NavLink>
					</>
				)}

				{role && role === "buyer" && (
					<>
						<NavLink
							to="/dashboard/myorders"
							className={({ isActive }) =>
								isActive ? "tab tab-active" : "tab"
							}
						>
							My Orders
						</NavLink>
						<NavLink
							to="/dashboard/mywishlist"
							className={({ isActive }) =>
								isActive ? "tab tab-active" : "tab"
							}
						>
							My WishList
						</NavLink>
					</>
				)}
			</div>
		</div>
	);
};

export default DashBoardHeader;
