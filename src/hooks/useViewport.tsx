import { useEffect, useState } from "react";

const useViewport = () => {
	const [width, setWindowWidth] = useState(0);
	useEffect(() => {
		updateDimensions();
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);
	const updateDimensions = () => {
		const width = window.innerWidth;
		setWindowWidth(width);
	};

	return { width };
};

export default useViewport;
