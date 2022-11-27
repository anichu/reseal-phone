import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "../../Shared/Card/Card";
import Loader from "../../Shared/Loader/Loader";
const AdvertisedItems = () => {
	const { data: advertisedProducts = [], isLoading } = useQuery({
		queryKey: ["products", "advertised"],
		queryFn: async (req, res) => {
			const { data } = await axios.get(
				"http://localhost:5000/products/advertised"
			);
			console.log(data);
			return data;
		},
	});
	console.log(advertisedProducts);
	return (
		<>
			{isLoading && <Loader></Loader>}
			{advertisedProducts.length > 0 && (
				<div className="mx-10">
					<h1 className="text-xl text-primary font-semibold my-5 capitalize">
						advertised items
					</h1>
					<div className="grid grid-cols-3 gap-5">
						{advertisedProducts.map((product) => (
							<Card product={product} key={product._id}></Card>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default AdvertisedItems;
