import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import axios from "axios";
import toast from "react-hot-toast";

const Allsellers = () => {
	const {
		data: sellers = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["seller"],
		queryFn: async () => {
			const { data } = await axios.get("http://localhost:5000/allsellers", {
				headers: {
					authorization: `bearer ${localStorage.getItem("accessToken")}`,
				},
			});
			console.log(data);
			return data;
		},
	});
	const deleteHandler = async (id) => {
		try {
			const { data } = await axios.delete(
				`http://localhost:5000/user/seller/${id}`
			);
			console.log(data);
			if (data.deletedCount > 0) {
				toast.success("seller is deleted successfully");
				refetch();
			}
		} catch (err) {
			toast.error(err.message);
		}
	};

	const verifyHandler = async (id) => {
		console.log("sina", id);
		console.log(localStorage.getItem("accessToken"));
		try {
			const { data } = await axios.put(
				`http://localhost:5000/user/seller/verify/${id}`,
				{},
				{
					headers: {
						authorization: `bearer ${localStorage.getItem("accessToken")}`,
					},
				}
			);
			console.log(data);
			if (data.modifiedCount > 0) {
				toast.success("seller is verified successfully");
				refetch();
			}
		} catch (err) {
			toast.error(err.message);
		}
	};
	if (isLoading) {
		return <Loader></Loader>;
	}
	return (
		<div className="w-full px-10">
			<h1 className="text-4xl w-full text-center text-primary my-5">
				All Sellers
			</h1>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>email</th>
							<th>verify</th>
							<th>delete</th>
						</tr>
					</thead>
					<tbody>
						{sellers &&
							sellers.map((seller, index) => {
								return (
									<tr>
										<th>{index + 1}</th>
										<td>{seller.name}</td>
										<td>{seller.email}</td>
										<td>
											{seller?.isVerified ? (
												<div className="badge badge-primary">verified</div>
											) : (
												<div>
													<button
														onClick={() => verifyHandler(seller._id)}
														className="btn btn-success btn-sm"
													>
														verify
													</button>
												</div>
											)}
										</td>
										<td>
											<button
												className="btn btn-error btn-sm"
												onClick={() => deleteHandler(seller._id)}
											>
												delete
											</button>
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Allsellers;
