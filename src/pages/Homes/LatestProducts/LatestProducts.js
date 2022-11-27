import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../Shared/Loader/Loader";
import Card from "../../Shared/Card/Card";
import BookModal from "../../Shared/BookModal/BookModal";
const LatestProducts = () => {
	const { data: phones = [], isLoading } = useQuery({
		queryKey: "latestproducts",
		queryFn: async () => {
			const { data } = await axios.get("http://localhost:5000/latestproducts");
			return data;
		},
	});
	const [booking, setBooking] = useState(null);
	return (
		<div className="latest-product mx-10 my-10">
			<h1 className="text-xl text-primary font-semibold my-5 capitalize">
				Latest Products
			</h1>

			{isLoading && <Loader></Loader>}
			<div className="grid grid-cols-3 gap-5">
				{phones.map((product, index) => (
					<Card key={index} setBooking={setBooking} product={product}></Card>
				))}
			</div>
			{booking && (
				<BookModal booking={booking} setBooking={setBooking}></BookModal>
			)}
		</div>
	);
};

export default LatestProducts;
