import React, { useEffect } from "react";
import Image from "/src/logo.png";

const BB = () => {
	const widgetLink =
		"https://www.escapekit.co/5zlc9w06/leaderboards/1/?cache=false&room=5542";
	const escapeRate = "45.8%";

	useEffect(() => {
		const reloadIntervalId = setInterval(() => {
			window.location.reload();
		}, 60000); // 60 seconds

		// Clear intervals
		return () => {
			clearInterval(reloadIntervalId);
		};
	}, []);

	return (
		<div className="mt-3">
			<iframe
				src={widgetLink}
				title="Embedded Content"
				style={{ width: "100%", height: "80vh", border: "none" }}
			></iframe>
			<div
				className="stats d-flex justify-content-center align-items-center flex-column"
				style={{ width: "100%", height: "20vh" }}
			>
				<h1 className="text-white mb-2" style={{ fontSize: "58px" }}>
					Escape Rate: {escapeRate}
				</h1>
				<img
					src={Image}
					alt="escapeworks logo"
					style={{ width: "auto", height: "40%" }}
				/>
			</div>
		</div>
	);
};

export default BB;
