import { FC } from "react";

export function validateURL(str: string) {
	const pattern = new RegExp(
		"^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
		"i",
	); // fragment locator
	return !!pattern.test(str);
}

export function random(to: number) {
	return Math.round(Math.random() * to);
}

export function invertColor(hex: string, bw?: boolean) {
	if (hex.indexOf("#") === 0) {
		hex = hex.slice(1);
	}
	// convert 3-digit hex to 6-digits.
	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}
	if (hex.length !== 6) {
		throw new Error("Invalid HEX color.");
	}

	let r: number | string = parseInt(hex.slice(0, 2), 16);
	let g: number | string = parseInt(hex.slice(2, 4), 16);
	let b: number | string = parseInt(hex.slice(4, 6), 16);
	if (bw) {
		// http://stackoverflow.com/a/3943023/112731
		return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
	}
	// invert color components
	r = (255 - r).toString(16);
	g = (255 - g).toString(16);
	b = (255 - b).toString(16);
	// pad each with zeros and return
	return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str: string | number, len = 2) {
	const zeros = new Array(len).join("0");
	return (zeros + str).slice(-len);
}

export const renderObjectItem = <T,>(Item: FC, props?: T) => (
	<Item {...props} />
);

export const setLocalStorageItem = <T,>(key: string, item: T) =>
	localStorage.setItem(key, JSON.stringify(item));

export const exportFile = (content: string, filename: string) => {
	const element = document.createElement("a");
	element.setAttribute(
		"href",
		"data:text/json;charset=utf-8," + encodeURIComponent(content),
	);
	element.setAttribute("download", filename);

	element.style.display = "none";
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
};
