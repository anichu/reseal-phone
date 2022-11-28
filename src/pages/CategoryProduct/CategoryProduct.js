import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import BookModal from "../Shared/BookModal/BookModal";
import Card from "../Shared/Card/Card";
import Loader from "../Shared/Loader/Loader";

const CategoryProduct = () => {
	const { data: products = [] } = useLoaderData();
	const [booking, setBooking] = useState(null);

	const navigation = useNavigation();

	if (navigation.state === "loading") {
		return <Loader></Loader>;
	}

	return (
		<div className="sm:mx-10 mx-5 my-10">
			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
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
