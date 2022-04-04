export const convertCSSVar = (colorString) => {
	return colorString.substring(0, 6) === "var(--"
		? getComputedStyle(document.documentElement)
				.getPropertyValue(colorString.substring(4, colorString.length - 1))
				.trim()
		: colorString;
};
