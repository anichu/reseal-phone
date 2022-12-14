import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category, index }) => {
	return (
		<div className="w-full">
			<Link
				to={`/category/${category.name}`}
				className="bg-black px-20 block w-full rounded-lg py-5 shadow-xl hover:bg-indigo-900 duration-300 transition-all"
			>
				<div className="flex flex-col">
					<img
						src={category?.image}
						className="w-20 h-20 mx-auto rounded-full	"
						alt=""
					/>
					<h3 className="text-white text-center mt-2">{category?.name}</h3>
				</div>
			</Link>
		</div>
	);
};

export default Category;
