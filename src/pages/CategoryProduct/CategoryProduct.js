import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Shared/Card/Card";

const CategoryProduct = () => {
	const { data: products = [] } = useLoaderData();

	return (
		<div>
			<div className="grid grid-cols-2 gap-5 m-10">
				{products.map((product) => (
					<Card key={product._id} product={product}></Card>
				))}
			</div>
		</div>
	);
};

export default CategoryProduct;
