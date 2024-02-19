import React, { useEffect } from "react";

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
				style={{ width: "100%", height: "800px", border: "none" }}
			></iframe>
		</div>
	);
};

export default Leaderboard;
