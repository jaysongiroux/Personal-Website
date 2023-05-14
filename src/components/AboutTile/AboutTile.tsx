import React from "react";
import { Typography } from "@mui/material";
import cx from "classnames";
import Link from "next/link";
import { AboutTileProps } from "./types";
import styles from "./AboutTile.module.scss";

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
			</div>
		</div>
	);
};

export default AboutTile;
