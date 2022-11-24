import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../../pages/Homes/Home/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
		],
	},
]);

export default router;
