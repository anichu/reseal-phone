import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import axios from "axios";
import toast from "react-hot-toast";

const AllBuyers = () => {
	const {
		data: buyers = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["buyer"],
		queryFn: async () => {
			const { data } = await axios.get("http://localhost:5000/allbuyers", {
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
				`http://localhost:5000/user/buyer/${id}`
			);
			console.log(data);
			if (data.deletedCount > 0) {
				toast.success("buyer is deleted successfully");
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
				All Buyers
			</h1>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>email</th>
							<th>delete</th>
						</tr>
					</thead>
					<tbody>
						{buyers &&
							buyers.map((buyer, index) => {
								return (
									<tr>
										<th>{index + 1}</th>
										<td>{buyer.name}</td>
										<td>{buyer.email}</td>
										<td>
											<button
												className="btn btn-error btn-sm"
												onClick={() => deleteHandler(buyer._id)}
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

export default AllBuyers;
