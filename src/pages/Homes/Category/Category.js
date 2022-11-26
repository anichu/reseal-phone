import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category, index }) => {
	return (
		<div className="flex-1 mx-10 flex">
			<Link
				className={`btn ${
					index % 2 === 0 ? "btn-primary" : "btn-success"
				} w-full py-10`}
			>
				{category.name}
			</Link>
		</div>
	);
};

export default Category;
