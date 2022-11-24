import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../LayOut/DashBoardLayout/DashBoardLayout";
import Main from "../../LayOut/Main/Main";
import NotFoundRoute from "../../NotFounRoute/NotFoundRoute";
import AllBuyers from "../../pages/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../../pages/DashBoard/AllSelers/AllSellers";
import DashBoard from "../../pages/DashBoard/DashBoard/DashBoard";
import DashBoardChildren from "../../pages/DashBoard/DashBoardChildren/DashBoardChildren";
import Home from "../../pages/Homes/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/signup",
				element: <SignUp></SignUp>,
			},
		],
	},
	{
		path: "/dashboard",
		element: <DashBoardLayout></DashBoardLayout>,
		children: [
			{
				path: "/dashboard",
				element: <DashBoard></DashBoard>,
			},
			{
				path: "/dashboard/children",
				element: <DashBoardChildren></DashBoardChildren>,
			},
			{
				path: "/dashboard/allbuyers",
				element: <AllBuyers></AllBuyers>,
			},
			{
				path: "/dashboard/allsellers",
				element: <AllSellers></AllSellers>,
			},
		],
	},
	{
		path: "*",
		element: <NotFoundRoute></NotFoundRoute>,
	},
]);

export default router;
