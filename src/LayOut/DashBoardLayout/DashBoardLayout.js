import React from "react";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import DashBoardHeader from "../../pages/DashBoard/DashBoardHeader/DashBoardHeader";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/Footer/Footer";

const DashBoardLayout = () => {
	return (
		<div>
			<Navbar></Navbar>
			<DashBoardHeader></DashBoardHeader>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default DashBoardLayout;
