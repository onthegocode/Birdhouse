document.addEventListener("DOMContentLoaded", (event) => {
	gsap.registerPlugin(ScrollTrigger);

	gsap.to(".aboutContainer", {
		scrollTrigger: {
			trigger: ".aboutContainer",
			start: "top 35%", // Trigger when the top of the element is 80% from the top of the viewport
			toggleClass: "animate", // Add the "in-view" class when in view
			once: true, // Only trigger once
		},
	});

	gsap.to(".meetContainer", {
		scrollTrigger: {
			trigger: ".meetContainer",
			start: "top 35%", // Trigger when the top of the element is 80% from the top of the viewport
			toggleClass: "animate", // Add the "in-view" class when in view
			once: true, // Only trigger once
		},
	});

	gsap.to(".approachContainer", {
		scrollTrigger: {
			trigger: ".approachContainer",
			start: "top 35%", // Trigger when the top of the element is 80% from the top of the viewport
			toggleClass: "animate", // Add the "in-view" class when in view
			once: true, // Only trigger once
		},
	});

	gsap.to(".CTAContent", {
		scrollTrigger: {
			trigger: ".CTAContent",
			start: "top 60%", // Trigger when the top of the element is 80% from the top of the viewport
			toggleClass: "animateFade", // Add the "in-view" class when in view
			once: true, // Only trigger once
		},
	});
});
