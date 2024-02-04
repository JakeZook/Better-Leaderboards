import React, { useEffect } from "react";
import Image from "/src/logo.png";

//ET 5544
const Leaderboard = () => {
	useEffect(() => {
		//Create main container
		const mainContainer = document.createElement("div");
		mainContainer.style.border = "none";
		mainContainer.style.height = "80vh";
		mainContainer.style.overflow = "hidden";
		mainContainer.style.marginTop = "3vh";

		// Create widget container
		const widgetContainer = document.createElement("div");

		// Create script element for the widget
		const script = document.createElement("script");
		script.async = true;
		script.type = "text/javascript";
		script.src = "https://www.escapekit.co/lbwidget.js?lid=5zlc9w06&room=5544";

		const img = document.createElement("img");
		img.src = Image;
		img.style.maxHeight = "8vh";
		img.style.maxWidth = "26vh";

		// Append script to widget container
		widgetContainer.appendChild(script);

		// Append widget container to main container
		mainContainer.appendChild(widgetContainer);

		// Append main container to body
		document.body.appendChild(mainContainer);

		const reloadIntervalId = setInterval(() => {
			window.location.reload();
		}, 60000); // 60 seconds

		// Create header element
		const header = document.createElement("h1");
		header.textContent = "Escape Rate: 34.3%";
		header.style.color = "white";
		header.style.backgroundColor = "#181818";
		header.style.textAlign = "center";
		header.style.paddingTop = "2vh";
		header.style.marginBottom = "2vh";
		header.style.fontSize = "3rem";
		header.style.display = "flex";
		header.style.flexDirection = "column";
		header.style.alignItems = "center";

		// Append header to body
		document.body.appendChild(header);
		header.appendChild(img);

		// Clear intervals and remove main container and header from body
		return () => {
			clearInterval(reloadIntervalId);
			document.body.removeChild(mainContainer);
			document.body.removeChild(header);
		};
	}, []);

	return null; // Render nothing in the component, as the content is added dynamically.
};

export default Leaderboard;
