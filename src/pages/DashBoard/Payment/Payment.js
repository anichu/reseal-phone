import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useNavigation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Loader from "../../Shared/Loader/Loader";
const stripePromise = loadStripe(
	"pk_test_51I6DRFCNUaJFevFCvVGOBtsMQabijQNqbRdlCEfSewyHXnuvpVvcH1PXpKcVsKWcEZiNBDm2SypkKjP2jJAqmybg00zObg7jl7"
);
const Payment = () => {
	const { data } = useLoaderData();

	const navigation = useNavigation();

	if (navigation.state === "loading") {
		return <Loader></Loader>;
	}

	console.log(data);
	return (
		<div>
			<h1 className="text-xl capitalize mt-5 text-center">
				payment for{" "}
				<span className="text-primary font-semibold">{data?.productname}</span>{" "}
			</h1>
			<h4 className="text-center text-xl">please,pay ${data?.price}</h4>
			<div className="w-96 my-5 mx-auto">
				<Elements stripe={stripePromise}>
					<CheckoutForm booking={data} />
				</Elements>
			</div>
		</div>
	);
};

export default Payment;
