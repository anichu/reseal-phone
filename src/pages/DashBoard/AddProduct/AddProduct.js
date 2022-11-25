import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthContetxt/AuthProvider";
const AddProduct = () => {
	const { user } = useContext(AuthContext);
	console.log(user);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		const {
			condition,
			resealprice,
			phonenumber,
			location,
			price,
			purchasedate,
			name,
			description,
			category,
		} = data;
		const image = data.image[0];
		const formData = new FormData();
		formData.append("image", image);
		const imageHostKey = process.env.REACT_APP_imgbb_key;
		const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((imgData) => {
				if (imgData.success) {
					console.log(imgData.data.url);

					const currentProduct = {
						condition,
						resealprice,
						phonenumber,
						location,
						price,
						email: user?.email,
						image: imgData.data.url,
						purchasedate,
						name,
						description,
						category,
					};

					fetch("http://localhost:5000/products", {
						method: "POST",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify(currentProduct),
					})
						.then((res) => res.json())
						.then((result) => {
							console.log(result);
							toast.success("product added successfully");
						})
						.catch((err) => {
							toast.error(err.message);
						});
				}
			})
			.catch((err) => {
				toast.error(err.message);
				console.log(err);
			});
		console.log(image);

		console.log(data);
	};
	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-[50%] mx-auto border shadow-2xl rounded-2xl p-5 my-5"
			>
				<h1 className="text-center text-5xl my-5 text-primary">
					Create a Product
				</h1>
				{/* name */}
				<div className="w-3/4 mx-auto">
					<input
						type="text"
						placeholder="product name"
						{...register("name", { required: "Product name is required" })}
						className="input input-bordered focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
					/>
					{errors.name && (
						<span className="text-red-800 font-semibold mt-2">
							{errors?.name?.message}
						</span>
					)}
				</div>
				{/* Company name */}

				<div className="w-3/4 mx-auto mt-5">
					<select
						{...register("category", {
							required: "Product category is required",
						})}
						className="input input-bordered cursor-pointer focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
					>
						<option value="" disabled selected>
							Choose Mobile Company categories
						</option>
						<option value="samsung">samsung</option>
						<option value="iphone">iphone</option>
						<option value="realme">realme</option>
						<option value="xiamoi">xiamoi</option>
					</select>
					{errors.category && (
						<span className="text-red-800 font-semibold mt-2">
							{errors?.category?.message}
						</span>
					)}
				</div>
				{/* price */}
				<div className="w-3/4 mx-auto mt-5">
					<input
						type="number"
						placeholder="original price"
						{...register("price", { required: "Price is required" })}
						className="input input-bordered focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
					/>
					{errors.price && (
						<span className="text-red-800 font-semibold mt-2">
							{errors?.price?.message}
						</span>
					)}
				</div>
				{/* product condition */}
				<div className="w-3/4 mx-auto mt-5">
					<select
						{...register("condition", {
							required: "Product condition is required",
						})}
						className="input input-bordered cursor-pointer focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
					>
						<option value="" disabled selected>
							Choose mobile condition type?
						</option>
						<option value="excellent">Excellent</option>
						<option value="good">Good</option>
						<option value="fair">Fair</option>
					</select>
					{errors.condition && (
						<span className="text-red-800 font-semibold mt-2">
							{errors?.condition?.message}
						</span>
					)}
				</div>
				{/* mobile number */}
				<div className="w-3/4 mx-auto mt-5">
					<input
						type="text"
						placeholder="phone number"
						{...register("phonenumber", {
							required: "phonenumber is required",
						})}
						className="input input-bordered focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
					/>
					{errors.phonenumber && (
						<span className="text-red-800 font-semibold mt-2">
							{errors?.phonenumber?.message}
						</span>
					)}
				</div>
				{/* location */}
				<div className="w-3/4 mx-auto mt-5">
					<input
						type="text"
						placeholder="location"
						{...register("location", {
							required: "location is required",
						})}
						className="input input-bordered focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
					/>
					{errors.location && (
						<span className="text-red-800 font-semibold mt-2">
							{errors?.location?.message}
						</span>
					)}
				</div>
				{/* reseal price */}
				<div className="w-3/4 mx-auto mt-5">
					<input
						type="number"
						placeholder="reseal price"
						{...register("resealprice", {
							required: "resealprice is required",
						})}
						className="input input-bordered focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
					/>
					{errors.resealprice && (
						<span className="text-red-800 font-semibold mt-2">
							{errors?.resealprice?.message}
						</span>
					)}
				</div>

				{/* purchase date*/}
				<div className="w-3/4 mx-auto mt-5">
					<label
						htmlFor=""
						className="text-sm py-3 block text-primary font-semibold"
					>
						Purchase Date
					</label>
					<input
						type="date"
						{...register("purchasedate", {
							required: "purchase date is required",
						})}
						className="input input-bordered focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
					/>
					{errors.purchasedate && (
						<span className="text-red-800 font-semibold mt-2">
							{errors?.purchasedate?.message}
						</span>
					)}
				</div>
				{/* image */}
				<div className="w-3/4 mx-auto mt-5">
					<label
						htmlFor=""
						className="text-sm py-3 block text-primary font-semibold"
					>
						Product Image
					</label>
					<input
						type="file"
						{...register("image", {
							required: "product image is required",
						})}
						className="file-input file-input-bordered  w-full focus:outline-none hover:border-gray-500 transition-all  hover:outline-none "
					/>
					{errors.image && (
						<span className="text-red-800 font-semibold mt-2">
							{errors?.image?.message}
						</span>
					)}
				</div>
				{/* description */}
				<div className="w-3/4 mx-auto mt-5">
					<textarea
						className="textarea textarea-bordered focus:outline-none hover:border-gray-500 transition-all  hover:outline-none w-full"
						placeholder="product description"
						{...register("description", {
							required: "description is required",
						})}
					></textarea>
					{errors.description && (
						<span className="text-red-800 font-semibold mt-2">
							{errors?.description?.message}
						</span>
					)}
				</div>
				<div className="text-center mt-5 w-3/4 mx-auto">
					<button className="btn btn-primary block w-full" type="submit">
						{" "}
						AddProduct{" "}
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddProduct;
