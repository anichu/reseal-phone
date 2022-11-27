import React from "react";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";
import Banner from "../Banner/Banner";
import HomeCarousel from "../Carousel/HomeCarousel";
import LatestProducts from "../LatestProducts/LatestProducts";
import ProductCategories from "../ProductCatories/ProductCategories";

const Home = () => {
	return (
		<div>
			<HomeCarousel></HomeCarousel>
			<AdvertisedItems></AdvertisedItems>
			<ProductCategories></ProductCategories>
			<LatestProducts></LatestProducts>
		</div>
	);
};

export default Home;
