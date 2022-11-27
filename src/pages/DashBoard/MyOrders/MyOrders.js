import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../../contexts/AuthContetxt/AuthProvider";
import Loader from "../../Shared/Loader/Loader";
import { Link } from "react-router-dom";
const MyOrders = () => {
	const { user } = useContext(AuthContext);
	const {
		data: orders = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["bookings"],
		queryFn: async (req, res) => {
			const { data } = await axios.get(
				`http://localhost:5000/user/buyer/bookings?email=${user?.email}`,
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
	console.log(orders);
	return (
		<div className="m-10">
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>image</th>
							<th>title</th>
							<th>price</th>
							<th>pay</th>
							<th>date</th>
						</tr>
					</thead>
					<tbody>
						{orders &&
							orders?.map((order, index) => {
								return (
									<tr key={index}>
										<th>{index + 1}</th>
										<td>
											<div className="avatar">
												<div className="w-24 rounded-full">
													<img src={order?.image} alt={order?.name} />
												</div>
											</div>
										</td>
										<td>{order.productname}</td>
										<td>${order.price}</td>
										<td>
											{order?.isPaid ? (
												<div className="badge badge-success">paid</div>
											) : (
												<Link to={`/dashboard/product/payment/${order?._id}`}>
													<button className="btn btn-primary btn-sm">
														pay now
													</button>
												</Link>
											)}
										</td>
										<td>
											<div className="badge badge-success">
												{order?.created.substring(0, 10)}
											</div>
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

export default MyOrders;
