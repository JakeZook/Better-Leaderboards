import React, { useEffect } from "react";

//Speakeasy 5546
const Leaderboard = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.async = true;
		script.type = "text/javascript";
		script.src = "https://www.escapekit.co/lbwidget.js?lid=5zlc9w06&room=5546";

		document.body.appendChild(script);

		const timeoutId = setTimeout(() => {
			document.body.removeChild(script);
			window.location.reload();
		}, 60000); // 60 seconds

		return () => {
			clearTimeout(timeoutId);
			document.body.removeChild(script);
		};
	}, []);
};

export default Leaderboard;
