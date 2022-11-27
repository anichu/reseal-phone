import React from "react";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";
import Banner from "../Banner/Banner";
import LatestProducts from "../LatestProducts/LatestProducts";
import ProductCategories from "../ProductCatories/ProductCategories";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<AdvertisedItems></AdvertisedItems>
			<ProductCategories></ProductCategories>
			<LatestProducts></LatestProducts>
		</div>
	);
};

export default Home;
