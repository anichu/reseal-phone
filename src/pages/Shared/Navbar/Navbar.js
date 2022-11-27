import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContetxt/AuthProvider";
import useRole from "../../../hooks/useRole";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const [role] = useRole(user?.email);
	const menuItems = (
		<>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/">Blog</Link>
			</li>
			{user?.uid && (
				<li>
					<Link
						to={`/dashboard/${
							role === "buyer"
								? "myorders"
								: role === "seller"
								? "myproducts"
								: "allbuyers"
						}`}
					>
						Dashboard
					</Link>
				</li>
			)}
		</>
	);
	const logOutHandler = () => {
		logOut()
			.then(() => {
				toast.success("user logout");
			})
			.catch((err) => {
				toast.error(err.message);
				console.log(err);
			});
	};
	return (
		<div className="navbar text-white bg-indigo-800">
			<div className="">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						{menuItems}
					</ul>
				</div>
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					ResealPhone
				</Link>
			</div>
			<div className="navbar-start w-full hidden lg:flex">
				<ul className="menu menu-horizontal p-0">{menuItems}</ul>
			</div>
			{user ? (
				<div className="text-right w-full justify-end ">
					<div className="mx-5">{user.displayName}</div>
					<button onClick={logOutHandler} className="btn btn-error btn-sm">
						Logout
					</button>
				</div>
			) : (
				<div className="text-right w-full justify-end ">
					<Link to="/login" className="btn btn-error btn-sm">
						Login
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
