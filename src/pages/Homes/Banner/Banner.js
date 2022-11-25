import React from "react";
import bg from "../../../images/bg.jpg";
import { TbArrowNarrowDown } from "react-icons/tb";
const Banner = () => {
	return (
		<div
			className="banner-bg w-full h-[95vh]"
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className="flex w-full overlay-bg items-center justify-center h-full">
				<div>
					<h1 className="text-5xl text-white font-medium text-center leading-[60px] ">
						Welcome to <span className="text-purple-800">Reseal</span> <br />{" "}
						<span className="text-purple-800"> Phone </span> website
					</h1>
					<p className="text-gray-300 text-xl text-center capitalize font-semibold mt-5">
						Have you old phone?This is right place for you. <br /> you can sell
						any mobile phone via this website.Create an account as a seller
						.Happy selling
					</p>
					<div className="text-center mt-5">
						<button className="btn btn-primary btn-sm ">
							<TbArrowNarrowDown className="w-6 h-6 animate-bounce"></TbArrowNarrowDown>
							<span>Scroll Down</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
