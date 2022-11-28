import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../Shared/Loader/Loader";
import BookModal from "../../Shared/BookModal/BookModal";
const MyWishList = () => {
	const [booking, setBooking] = useState(null);

	const { data: wishLists = [], isLoading } = useQuery({
		queryKey: ["wishList"],
		queryFn: async () => {
			const { data } = await axios.get(
				"http://localhost:5000/user/mywishlist",
				{
					headers: {
						authorization: `bearer ${localStorage.getItem("accessToken")}`,
					},
				}
			);
			return data;
		},
	});

	if (isLoading) {
		return <Loader></Loader>;
	}

	if (wishLists.length === 0) {
		return (
			<div className="my-10">
				<h1 className="text-center text-success text-xl font-semibold">
					There is no wishList in wishList
				</h1>
			</div>
		);
	}

	const bookHandler = (currentBooking) => {
		setBooking({
			name: currentBooking.title,
			_id: currentBooking.productId,
			resealprice: currentBooking.price,
			image: currentBooking.image,
		});
	};

	return (
		<div className="m-10">
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Image</th>
							<th>Title</th>
							<th>Price</th>
							<th>Phonenumber</th>
							<th>Book</th>
						</tr>
					</thead>
					<tbody>
						{wishLists &&
							wishLists.map((wishList, index) => {
								return (
									<tr>
										<th>{index + 1}</th>

										<td>
											<div className="avatar">
												<div className="w-24 rounded-full">
													<img src={wishList.image} alt="" />
												</div>
											</div>
										</td>

										<td>{wishList.title}</td>
										<td>$ {wishList.price}</td>
										<td>{wishList.phonenumber}</td>

										<td>
											<label
												onClick={() => bookHandler(wishList)}
												className="btn btn-success btn-sm"
												htmlFor="my-booking-modal"
											>
												Book Now
											</label>
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
			{booking && (
				<BookModal booking={booking} setBooking={setBooking}></BookModal>
			)}
		</div>
	);
};

export default MyWishList;
