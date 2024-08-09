"use strict";

document.addEventListener("DOMContentLoaded", function (e) {
	let height = window.innerHeight;
	const header = document.querySelector("header");

	const init = () => {
		let headerHeight = header.offsetHeight;
		let headerImgSize = Math.ceil(height - headerHeight);

		document.documentElement.style.setProperty(
			"--header-imageSize",
			headerImgSize + "px"
		);
	};
	init();
});
