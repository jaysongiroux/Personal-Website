export interface AboutTileProps {
	title: string;
	subtitle?: string;
	description?: string;
	linkName?: string;
	linkDestination?: string;
	chips?: string[];
	last?: boolean;
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
