import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useRole = (email) => {
	const [role, setRole] = useState("");
	const [roleLoading, setRoleLoading] = useState(true);
	useEffect(() => {
		if (email) {
			fetch(`http://localhost:5000/user?email=${email}`)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setRole(data.role);
					setRoleLoading(false);
				})
				.catch((err) => {
					console.log(err);
					setRoleLoading(false);
					toast.error(err.message);
				});
		}
	}, [email]);

	return [role, roleLoading];
};

export default useRole;
