import React from "react";

const Home = () => {
	const buttonStyle = {
		width: "200px",
	};

	return (
		<div className="text-white p-5" style={{ minHeight: "100vh" }}>
			<h1 className="d-flex justify-content-center">Select Game:</h1>
			<div className="d-flex align-items-center flex-column">
				<a href="/Blackbeard">
					<button className="btn btn-primary m-2" style={buttonStyle}>
						Blackbeard
					</button>
				</a>
				<a href="/Egypt">
					<button className="btn btn-info m-2" style={buttonStyle}>
						Egypt
					</button>
				</a>
				<a href="/Casino">
					<button className="btn btn-success m-2" style={buttonStyle}>
						Casino
					</button>
				</a>
				<a href="/Speakeasy">
					<button className="btn btn-warning m-2" style={buttonStyle}>
						Speakeasy
					</button>
				</a>
				<a href="/Outbreak">
					<button className="btn btn-danger m-2" style={buttonStyle}>
						Outbreak
					</button>
				</a>
				<a href="/Vampire">
					<button className="btn btn-danger m-2" style={buttonStyle}>
						Vampire
					</button>
				</a>
			</div>
		</div>
	);
};

export default Home;
