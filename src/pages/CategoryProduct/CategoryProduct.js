import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookModal from "../Shared/BookModal/BookModal";
import Card from "../Shared/Card/Card";

const CategoryProduct = () => {
	const { data: products = [] } = useLoaderData();
	const [booking, setBooking] = useState(null);

	return (
		<div>
			<div className="grid grid-cols-2 gap-5 m-10">
				{products.map((product) => (
					<Card
						key={product._id}
						setBooking={setBooking}
						product={product}
					></Card>
				))}
			</div>
			{booking && (
				<BookModal booking={booking} setBooking={setBooking}></BookModal>
			)}
		</div>
	);
};

export default CategoryProduct;
