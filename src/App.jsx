import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import BB from "./Components/BB";
import CH from "./Components/CH";
import OB from "./Components/OB";
import SP from "./Components/SP";
import VH from "./Components/VH";
import ET from "./Components/ET";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Blackbeard" element={<BB />} />
				<Route path="/Casino" element={<CH />} />
				<Route path="/Outbreak" element={<OB />} />
				<Route path="/Speakeasy" element={<SP />} />
				<Route path="/Vampire" element={<VH />} />
				<Route path="/Egypt" element={<ET />} />
			</Routes>
		</Router>
	);
};

export default App;
