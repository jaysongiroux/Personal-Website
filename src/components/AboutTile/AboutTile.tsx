import React from "react";
import { ImageList, ImageListItem, Typography } from "@mui/material";
import cx from "classnames";
import Link from "next/link";
import { AboutTileProps } from "./types";
import { styled } from "@mui/material/styles";
import styles from "./AboutTile.module.scss";
import { InsertPhoto } from "@mui/icons-material";
import Image from "next/image";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(() => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: "#f5f5f9",
		maxWidth: "unset",
		border: "1px solid #dadde9",
	},
}));

const AboutTile = (props: AboutTileProps) => {
	return (
		<div className={styles.AboutTileContainer}>
			<div className={styles.AboutTileGraphicsContainer}>
				<div
					className={styles.AboutTileCircle}
					style={{ height: props.last ? "15px" : "17px" }}
				/>
				{!props.last && <div className={cx(styles.AboutTileLine)} />}
			</div>
			<div className={styles.AboutTileTextContent}>
				<span className={styles.AboutTileTitleContainer}>
					<Typography variant="h6" className={styles.AboutTileTitle}>
						{props.title}{" "}
						<span className={styles.AboutTileSubtitle}>
							{props.subtitle && `- ${props.subtitle}`}
						</span>
					</Typography>
					{props.linkDestination && (
						<Link href={props.linkDestination} className={styles.AboutTileLink}>
							{props.linkName}
						</Link>
					)}
				</span>
				<Typography variant="body1" className={styles.AboutTileDescription}>
					{props?.description}
				</Typography>
				<div className={styles.AboutTileChipsContainer}>
					{props?.chips?.map((chip, chipIndex) => (
						<span key={chipIndex} className={styles.AboutTileChip}>
							{chip}
						</span>
					))}
				</div>

				{props?.image && (
					<>
						<HtmlTooltip
							arrow={true}
							style={{ maxWidth: "none" }}
							title={
								<div className={styles.AboutTileImageContainer}>
									<ImageList>
										{props?.image?.map((image, key) => (
											<ImageListItem key={key}>
												<Image
													key={key}
													className={styles.AboutTileImage}
													width={175}
													height={150}
													alt={"image"}
													src={image}
												/>
											</ImageListItem>
										))}
									</ImageList>
								</div>
							}
						>
							<div className={styles.imagesContainer}>
								<InsertPhoto />
								<Typography variant="body2">Images</Typography>
							</div>
						</HtmlTooltip>
					</>
				)}
			</div>
		</div>
	);
};

export default AboutTile;
