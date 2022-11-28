import { useEffect, useState } from "react";

const useToken = (email) => {
	const [token, setToken] = useState("");
	useEffect(() => {
		if (email) {
			fetch(`https://resale-phone-server.vercel.app/user/jwt?email=${email}`)
				.then((res) => res.json())
				.then((data) => {
					if (data.accessToken) {
						localStorage.setItem("accessToken", data.accessToken);
						setToken(data.accessToken);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [email]);

	return [token];
};

export default useToken;
