import { Typography } from "@mui/material";
import React from "react";
import AboutTile from "./AboutTile";
import { AboutTileControllerProps } from "./types";

const AboutTileController = (props: AboutTileControllerProps) => {
	return (
		<>
			{props.sections.map((section, sectionIndex) => (
				<div key={sectionIndex}>
					<Typography variant="h5" sx={{ marginBottom: 1 }}>
						{section.title}
					</Typography>
					{section.blocks.map((block, blockIndex) => {
						const isLast = blockIndex === section.blocks.length - 1;
						return (
							<div key={blockIndex}>
								<AboutTile {...block} last={isLast} />
							</div>
						);
					})}
				</div>
			))}
		</>
	);
};

export default AboutTileController;
