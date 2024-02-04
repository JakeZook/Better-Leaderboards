import React from "react";

import Image from "/src/logo.png";

const Home = () => {
	const buttonStyle = {
		width: "200px",
	};

	return (
		<div
			className="text-white p-5 d-flex flex-column align-items-center justify-content-center"
			style={{ minHeight: "100vh" }}
		>
			<img
				src={Image}
				alt=""
				className="img-fluid mx-auto"
				style={{ maxHeight: "20vh" }}
			/>
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
