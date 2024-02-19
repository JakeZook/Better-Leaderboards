import React, { useEffect } from "react";
import Image from "/src/logo.png";

const Leaderboard = () => {
	const widgetLink =
		"https://www.escapekit.co/5zlc9w06/leaderboards/1/?cache=false&room=5544";
	const escapeRate = "34.3%";

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
		<div>
			<iframe
				src={widgetLink}
				title="Embedded Content"
				style={{ width: "100%", height: "80vh", border: "none" }}
			></iframe>
			<div
				className="stats d-flex justify-content-center align-items-center flex-column"
				style={{ width: "100%", height: "20vh" }}
			>
				<h2 className="text-white">Escape Rate: {escapeRate}</h2>
				<img
					src={Image}
					alt="escapeworks logo"
					style={{ width: "auto", height: "50%" }}
				/>
			</div>
		</div>
	);
};

export default Leaderboard;
