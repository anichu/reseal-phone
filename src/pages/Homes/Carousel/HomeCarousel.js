import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import sl1 from "../../../images/slide-1.jpg";
import sl2 from "../../../images/slide-2.jpg";
import sl3 from "../../../images/slide-3.jpg";
const HomeCarousel = () => {
	return (
		<div>
			<div className="carousel w-full">
				<div id="slide1" className="carousel-item max-h-[80vh] relative w-full">
					<img src={sl2} alt="" className="w-full" />
					<div className="absolute course   md:top-[30%] sm:top-[10%] top-[30%] left-[50%] translate-x-[-50%] ">
						<h1 className="text-center course-title  w-full font-semibold sm:text-4xl text-2xl text-white">
							WelCome to <span className="text-indigo-600">Reseal</span> phone{" "}
							<br className="carousel-title-br" /> website.
						</h1>
						<p className="text-center sm:text-xl course-title-p text-sm mt-5   text-white">
							Are You want to <span className="text-indigo-600">buy</span>{" "}
							second hand phone? This is a right place for you.Check our product
							and confirm the booked.Happy Buying!!!
						</p>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide3" className="btn btn-circle">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item h-[80vh] relative w-full">
					<img src={sl1} alt="" className="w-full" />
					<div className="absolute course  md:top-[30%] sm:top-[10%] top-[30%] left-[50%] translate-x-[-50%] ">
						<h1 className="text-center w-full course-title font-semibold sm:text-4xl text-2xl text-white">
							WelCome to <span className="text-indigo-600">Reseal</span> phone{" "}
							<br className="carousel-title-br" /> website.
						</h1>
						<p className="text-center sm:text-xl course-title-p text-sm mt-5   text-white">
							Are You want to <span className="text-indigo-600">sell</span> your
							used phone? This is a right place for you.Add the product as
							requirement.Happy selling!!!
						</p>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" className="btn btn-circle">
							❮
						</a>
						<a href="#slide3" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item h-[80vh] relative w-full">
					<img src={sl3} alt="" className="w-full" />

					<div className="absolute course md:top-[30%] sm:top-[10%] top-[30%]  left-[50%] translate-x-[-50%] ">
						<h1 className="text-center course-title w-full font-semibold sm:text-4xl text-2xl text-white">
							Good to <span className="text-indigo-600">See</span> you{" "}
							<br className="carousel-title-br" /> friend.
						</h1>
						<p className="text-center sm:text-xl text-sm mt-5 course-title-p   text-white">
							Are You want to <span className="text-indigo-600">business</span>{" "}
							with us? This is a right place for you.Create a seller account and
							add product.Happy Selling!!!
						</p>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" className="btn btn-circle">
							❮
						</a>
						<a href="#slide1" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeCarousel;
