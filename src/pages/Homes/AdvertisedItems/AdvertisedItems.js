import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "../../Shared/Card/Card";
import Loader from "../../Shared/Loader/Loader";
import BookModal from "../../Shared/BookModal/BookModal";
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

	const [booking, setBooking] = useState(null);

	console.log(advertisedProducts);
	return (
		<>
			{isLoading && <Loader></Loader>}
			{advertisedProducts.length > 0 && (
				<div className="sm:mx-10 mx-4">
					<h1 className="text-xl text-primary font-semibold my-5 capitalize">
						advertised items
					</h1>
					<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
						{advertisedProducts.map((product) => {
							return (
								<>
									<Card
										product={product}
										setBooking={setBooking}
										key={product._id}
									></Card>
								</>
							);
						})}
					</div>
					{booking && (
						<BookModal setBooking={setBooking} booking={booking}></BookModal>
					)}
				</div>
			)}
		</>
	);
};

export default AdvertisedItems;
