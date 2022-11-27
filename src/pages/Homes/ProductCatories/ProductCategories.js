import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../Shared/Loader/Loader";
import Category from "../Category/Category";
const ProductCategories = () => {
	const { data: categories = [], isLoading } = useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			const { data } = await axios.get("http://localhost:5000/categories");
			console.log(data);
			return data;
		},
	});
	return (
		<div className="mx-10 mb-10">
			<h1 className="text-xl text-primary font-semibold my-5">Categories</h1>
			{isLoading && <Loader></Loader>}
			<div className="flex justify-around flex-wrap">
				{categories.map((category, index) => (
					<Category category={category} index={index} key={index}></Category>
				))}
			</div>
		</div>
	);
};

export default ProductCategories;
