import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../LayOut/DashBoardLayout/DashBoardLayout";
import Main from "../../LayOut/Main/Main";
import NotFoundRoute from "../../NotFounRoute/NotFoundRoute";
import CategoryProduct from "../../pages/CategoryProduct/CategoryProduct";
import AddProduct from "../../pages/DashBoard/AddProduct/AddProduct";
import AllBuyers from "../../pages/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../../pages/DashBoard/AllSelers/AllSellers";
import DashBoard from "../../pages/DashBoard/DashBoard/DashBoard";
import DashBoardChildren from "../../pages/DashBoard/DashBoardChildren/DashBoardChildren";
import MyOrders from "../../pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../pages/DashBoard/MyProducts/MyProducts";
import Home from "../../pages/Homes/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";
import SellerRoute from "../SellerRoute/SellerRoute";
import axios from "axios";
import ReportedItems from "../../pages/DashBoard/ReportedItems/ReportedItems";
import Payment from "../../pages/DashBoard/Payment/Payment";
import MyWishList from "../../pages/DashBoard/MyWishList/MyWishList";

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
			{
				path: "/category/:category",
				element: <CategoryProduct></CategoryProduct>,
				loader: ({ params }) =>
					axios.get(`http://localhost:5000/products/${params.category}`),
			},
		],
	},
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<DashBoardLayout></DashBoardLayout>
			</PrivateRoute>
		),
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
				element: (
					<AdminRoute>
						<AllBuyers></AllBuyers>
					</AdminRoute>
				),
			},
			{
				path: "/dashboard/allsellers",
				element: (
					<AdminRoute>
						<AllSellers></AllSellers>
					</AdminRoute>
				),
			},
			{
				path: "/dashboard/myproducts",
				element: (
					<SellerRoute>
						<MyProducts></MyProducts>
					</SellerRoute>
				),
			},
			{
				path: "/dashboard/myorders",
				element: (
					<BuyerRoute>
						<MyOrders></MyOrders>
					</BuyerRoute>
				),
			},
			{
				path: "/dashboard/addproduct",
				element: (
					<SellerRoute>
						<AddProduct></AddProduct>
					</SellerRoute>
				),
			},
			{
				path: "/dashboard/reporteditems",
				element: (
					<AdminRoute>
						<ReportedItems></ReportedItems>
					</AdminRoute>
				),
			},
			{
				path: "/dashboard/product/payment/:id",
				element: <Payment></Payment>,
				loader: ({ params }) =>
					axios.get(`http://localhost:5000/user/buyer/bookings/${params.id}`),
			},
			{
				path: "/dashboard/mywishlist",
				element: (
					<BuyerRoute>
						<MyWishList></MyWishList>
					</BuyerRoute>
				),
			},
		],
	},
	{
		path: "*",
		element: <NotFoundRoute></NotFoundRoute>,
	},
]);

export default router;
