import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../Shared/Loader/Loader";
import Category from "../Category/Category";
const ProductCategories = () => {
	const { data: categories = [], isLoading } = useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			const { data } = await axios.get(
				"https://resale-phone-server.vercel.app/categories"
			);
			console.log(data);
			return data;
		},
	});
	return (
		<div className="mx-10 mb-10">
			<h1 className="text-xl text-primary font-semibold my-5">Categories</h1>
			{isLoading && <Loader></Loader>}
			<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
				{categories.map((category, index) => (
					<Category category={category} index={index} key={index}></Category>
				))}
			</div>
		</div>
	);
};

export default ProductCategories;
