import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckoutForm = ({ booking }) => {
	const [error, setError] = useState();
	const [transactionId, setTransactionId] = useState("");
	const [processing, setProcessing] = useState("");
	const [clientSecret, setClientSecret] = useState("");
	const navigate = useNavigate();
	const stripe = useStripe();
	const elements = useElements();
	const { price } = booking;

	useEffect(() => {
		fetch("http://localhost:5000/create-payment-intent", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				authorization: `bearer ${localStorage.getItem("accessToken")}`,
			},
			body: JSON.stringify({
				price,
			}),
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, [price]);
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (card == null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			setError(error.message);
			console.log("[error]", error);
		} else {
			console.log("[PaymentMethod]", paymentMethod);
			setError("");
		}
		setProcessing(true);
		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						email: booking.email,
						name: booking?.name,
					},
				},
			});

		if (confirmError) {
			setError(confirmError.message);
		}

		if (paymentIntent.status === "succeeded") {
			setTransactionId(paymentIntent.id);
			const currentPayment = {
				booking: booking?._id,
				email: booking?.email,
				transactionId: paymentIntent.id,
				productId: booking.productid,
			};
			try {
				const { data } = await axios.post(
					"http://localhost:5000/payments",
					currentPayment,
					{
						headers: {
							"content-type": "application/json",
							authorization: `bearer ${localStorage.getItem("accessToken")}`,
						},
					}
				);
				console.log(data);
				toast.success("congrates? your payment is successfully");
				navigate("/dashboard/myorders");
			} catch (error) {
				console.log(error.message);
			}
		}
		setProcessing(false);
	};
	return (
		<>
			<form className="" onSubmit={handleSubmit}>
				<CardElement
					className="min-w-[400px] overflow-scroll"
					options={{
						style: {
							base: {
								fontSize: "16px",
								color: "#424770",
								"::placeholder": {
									color: "#aab7c4",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				<button
					type="submit"
					className="btn btn-primary btn-sm mt-5"
					disabled={!stripe || !clientSecret || processing}
				>
					Pay
				</button>
			</form>
			<p className="text-red-500">{error}</p>
		</>
	);
};

export default CheckoutForm;
