import React, { useEffect } from "react";

//BB 5542
const Leaderboard = () => {
	useEffect(() => {
		//Create script element
		const script = document.createElement("script");
		script.async = true;
		script.type = "text/javascript";
		script.src = "https://www.escapekit.co/lbwidget.js?lid=5zlc9w06&room=5542";

		//Append script to body and reload after 60 seconds
		const intervalId = setInterval(() => {
			//Check if script has already been appended
			if (document.readyState === "complete") {
				clearInterval(intervalId);

				document.body.appendChild(script);

				const reloadIntervalId = setInterval(() => {
					window.location.reload();
				}, 60000); // 60 seconds

				//Clear intervals and remove script from body
				return () => {
					clearInterval(reloadIntervalId);
					document.body.removeChild(script);
				};
			}
		}, 100);

		return () => {
			clearInterval(intervalId);
		};
	}, []);
};

export default Leaderboard;
