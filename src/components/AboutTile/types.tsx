import { StaticImageData } from "next/image";

export interface AboutTileProps {
	title: string;
	subtitle?: string;
	description?: string;
	linkName?: string;
	linkDestination?: string;
	chips?: string[];
	last?: boolean;
	image?: StaticImageData[];
}

export interface AboutTileControllerProps {
	sections: {
		title: string;
		blocks: AboutTileProps[];
	}[];
}

export interface ExampleSectionProps {
	title: string;
	blocks: AboutTileProps[];
}
