import React, { useEffect } from "react";

const Leaderboard = () => {
	useEffect(() => {
		// Create container element
		const container = document.createElement("div");
		container.style.height = "85vh"; // Set container height to 50% of viewport height
		container.style.overflow = "hidden"; // Hide overflow to display only the top half

		// Create script element
		const script = document.createElement("script");
		script.async = true;
		script.type = "text/javascript";
		script.src = "https://www.escapekit.co/lbwidget.js?lid=5zlc9w06&room=5544";

		// Append script to container
		container.appendChild(script);

		// Append container to body
		document.body.appendChild(container);

		const reloadIntervalId = setInterval(() => {
			window.location.reload();
		}, 60000); // 60 seconds

		// Clear intervals and remove container from body
		return () => {
			clearInterval(reloadIntervalId);
			document.body.removeChild(container);
		};
	}, []);

	return null; // Render nothing in the component, as the content is added dynamically.
};

export default Leaderboard;
