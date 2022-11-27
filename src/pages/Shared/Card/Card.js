import React from "react";
import useRole from "../../../hooks/useRole";
import { HiOutlineCheck } from "react-icons/hi";

const Card = ({ product }) => {
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
	const bookHandler = (id) => {
		console.log(id);
	};

	return (
		<div className="card w-96  bg-base-100 shadow-xl mx-auto">
			<figure>
				<img src={image} alt={name} className="w-[350px] h-[300px] rounded" />
			</figure>
			<div className="card-body p-5">
				<h2 className="card-title capitalize">
					{name}
					<div className="badge badge-primary">{condition}</div>
				</h2>
				<p className="text-justify">{description}</p>
				<div className="card-actions justify-end">
					<div className="badge badge-primary">{category}</div>
				</div>
				<div className="flex justify-between my-2">
					<div>
						<strong className="">Original price:</strong>{" "}
						<b className="text-primary">${price}</b>
					</div>
					<div>
						<strong className="">Reseal price:</strong>{" "}
						<b className="text-primary">${resealprice}</b>
					</div>
				</div>
				<div className="flex justify-between">
					<div className=" text-base font-semibold ">
						Purchase: <span className="text-primary">{purchasedate}</span>
					</div>
					<div className=" text-base font-semibold ">
						Posted:{" "}
						<span className="text-primary">{createdDate.substring(0, 10)}</span>
					</div>
				</div>
				<div className="flex justify-between">
					<h2 className=" text-base font-semibold  flex items-center">
						<span className="text-2xl mr-1">Seller:</span>{" "}
						<span className="text-primary text-2xl font-semibold capitalize">
							{username}
						</span>{" "}
						{isVerified && (
							<span className="rounded-full bg-blue-600 w-4 h-4 flex text-white items-center justify-center">
								<HiOutlineCheck className="w-3 h-3"></HiOutlineCheck>
							</span>
						)}
					</h2>
				</div>

				<div className="flex justify-between my-2">
					<div className="flex">
						<strong className="">Address:</strong>{" "}
						<b className="text-primary">{location}</b>
					</div>
					<div className="flex ml-2">
						<strong className="">Phone:</strong>{" "}
						<b className="text-primary">{phonenumber}</b>
					</div>
				</div>

				<div className="card-buttom flex items-center justify-between my-5">
					<div>
						<label htmlFor="">
							<button
								className="btn btn-sm btn-primary"
								onClick={() => bookHandler(_id)}
							>
								Book Now
							</button>
						</label>
					</div>
					<div>
						<button className="btn btn-sm btn-error">report</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
