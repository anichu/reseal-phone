import React, { useContext, useState } from "react";
import useRole from "../../../hooks/useRole";
import { HiOutlineCheck } from "react-icons/hi";
import { AuthContext } from "../../../contexts/AuthContetxt/AuthProvider";
import { useNavigate } from "react-router-dom";
const Card = ({ product, setBooking }) => {
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);
	const {
		name,
		image,
		condition,
		price,
		resealprice,
		purchasedate,
		description,
		category,
		createdDate,
		email,
		location,
		_id,
		phonenumber,
	} = product;
	const [role, roleLoading, isVerified, username] = useRole(email);
	const bookHandler = async () => {
		if (!user) {
			navigate("/login");
		}
	};

	return (
		<>
			<div className="card w-96  bg-base-100 shadow-xl mx-auto">
				<figure>
					<img src={image} alt={name} className="w-[350px] h-[300px] rounded" />
				</figure>
				<div className="card-body p-5">
					<div className="">
						<h2 className="card-title capitalize">{name}</h2>
						<div className="badge mt-1">{condition}</div>
						<div className=" ml-2 badge ">{category}</div>
					</div>
					<p className="text-justify">{description.substring(0, 200)} </p>
					<div className="flex justify-between ">
						<div>
							<span className="mr-2 font-bold">Original-price:</span>
							<span>${price}</span>
						</div>
						<div>
							<span className="mr-2 font-bold">Reseal-price:</span>{" "}
							<span className="">${resealprice}</span>
						</div>
					</div>
					<div className="flex justify-between">
						<div className=" text-base font-semibold ">
							<span className="mr-2 font-bold">Purchase:</span>{" "}
							<span className="">{purchasedate}</span>
						</div>
						<div className=" text-base font-semibold ">
							<span className="mr-2 font-bold">Posted:</span>{" "}
							<span className="">{createdDate.substring(0, 10)}</span>
						</div>
					</div>
					<div className="flex justify-between my-2">
						<div className=" text-base font-semibold ">
							<span className="font-bold">Address:</span>{" "}
							<span className="">{location}</span>
						</div>
						<div className=" text-base font-semibold ">
							<span className=" font-bold">Phone:</span>{" "}
							<span className="">{phonenumber}</span>
						</div>
					</div>
					<div className="flex justify-between">
						<h2 className=" text-base font-semibold  flex items-center">
							<span className=" mr-1 font-bold text-xl">seller:</span>{" "}
							<span className="text-indigo-900 text-xl capitalize">
								{username}
							</span>{" "}
							{isVerified && (
								<span className="rounded-full bg-blue-600 w-4 h-4 mx-1 mt-1 flex text-white items-center justify-center">
									<HiOutlineCheck className="w-4 h-4"></HiOutlineCheck>
								</span>
							)}
						</h2>
					</div>

					<div className="card-buttom flex items-center justify-between my-5">
						<div>
							<label
								htmlFor="my-booking-modal"
								onClick={() => setBooking(product)}
								className="btn bg-indigo-900 btn-sm"
							>
								book now
							</label>
						</div>
						<div>
							<button className="btn btn-sm btn-error">report</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
