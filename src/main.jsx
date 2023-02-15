import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Wrapper from "./components/Wrapper/Wrapper";
import "./index.css";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<React.StrictMode>
			<Wrapper />
		</React.StrictMode>
	</Provider>
);
