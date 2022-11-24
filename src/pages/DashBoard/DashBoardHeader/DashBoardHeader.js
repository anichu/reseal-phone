import React from "react";
import { Link, NavLink } from "react-router-dom";

const DashBoardHeader = () => {
	return (
		<div className="w-full">
			<div className="tabs tabs-boxed w-full flex-wrap justify-center">
				<NavLink
					to="/dashboard/allbuyers"
					className={({ isActive }) => (isActive ? "tab tab-active" : "tab")}
				>
					All Buyers
				</NavLink>
				<NavLink
					to="/dashboard/allsellers"
					className={({ isActive }) => (isActive ? "tab tab-active" : "tab")}
				>
					All Sellers
				</NavLink>
				<NavLink
					to="/dashboard/addproduct"
					className={({ isActive }) => (isActive ? "tab tab-active" : "tab")}
				>
					Add A Product
				</NavLink>
				<NavLink
					to="/dashboard/myproducts"
					className={({ isActive }) => (isActive ? "tab tab-active" : "tab")}
				>
					My Products
				</NavLink>
				<NavLink
					to="/dashboard/myorders"
					className={({ isActive }) => (isActive ? "tab tab-active" : "tab")}
				>
					My Orders
				</NavLink>
			</div>
		</div>
	);
};

export default DashBoardHeader;
