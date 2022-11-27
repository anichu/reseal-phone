import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Alert from "../Alert/Alert";
import { AuthContext } from "../../../contexts/AuthContetxt/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const BookModal = ({ booking, setBooking }) => {
	const [error, setError] = useState();
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const username = form.username.value;
		const email = form.email.value;
		const location = form.location.value;
		const phonenumber = form.location.value;
		const currentBooking = {
			username,
			productname: name,
			productid: booking?._id,
			email,
			price: booking?.resealprice,
			location,
			phonenumber,
			image: booking?.image,
		};

		try {
			const { data } = await axios.post(
				"http://localhost:5000/booking",
				currentBooking,
				{
					headers: {
						"content-type": "application/json",
					},
				}
			);

			if (data.acknowledged) {
				toast.success("the item is booked");
			}
			console.log(data);
			setBooking(null);
			navigate("/dashboard/myorders");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<input type="checkbox" id="my-booking-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative">
					<label
						htmlFor="my-booking-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<form onSubmit={handleSubmit} className="w-[100%] mx-auto  p-5 mt-5">
						{error && <Alert message={error}></Alert>}

						<div className="w-3/4 mx-auto">
							<input
								type="text"
								value={user?.displayName}
								disabled
								name="username"
								className="input input-bordered focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
							/>
						</div>
						<div className="w-3/4 mx-auto mt-5">
							<input
								type="email"
								value={user?.email}
								disabled
								name="email"
								className="input input-bordered focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
							/>
						</div>
						<div className="w-3/4 mx-auto mt-5">
							<input
								type="text"
								name="name"
								value={booking?.name}
								disabled
								className="input input-bordered focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
							/>
						</div>
						<div className="w-3/4 mx-auto mt-5">
							<input
								type="text"
								value={`$${booking.resealprice}`}
								disabled
								name="resealprice"
								className="input input-bordered focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
							/>
						</div>
						<div className="w-3/4 mx-auto mt-5">
							<input
								type="text"
								placeholder="your phonenumber"
								name="phonenumber"
								required
								className="input input-bordered focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
							/>
						</div>
						<div className="w-3/4 mx-auto mt-5">
							<input
								type="text"
								placeholder="meeting location.."
								name="location"
								required
								className="input input-bordered focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
							/>
						</div>

						<div className="text-center mt-5 w-3/4 mx-auto">
							<button className="btn btn-primary block w-full" type="submit">
								book
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default BookModal;
