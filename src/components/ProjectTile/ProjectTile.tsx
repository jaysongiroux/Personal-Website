import Image from "next/image";
import styles from "./projectTile.module.scss";
import Link from "next/link";

interface ProjectTileProps {
	key: number;
	isMobile: boolean;
	width: string;
	number: number | string;
	title: string;
	image: string;
	technologies: string[];
	description: string;
	links: {
		icon: string | React.ReactNode | Element;
		url: string;
	}[];
}

const ProjectTile = (props: ProjectTileProps) => {
	const githubLink =
		props.links.find((link) => link.url.includes("github"))?.url ??
		props.links[0].url;

	return (
		<div
			className={styles.ProjectTileContainer}
			style={{ width: props.isMobile ? "100%" : props.width }}
		>
			<div className={styles.ProjectTileTitle}>
				<span className={styles.ProjectTileNumber}>{props.number}.</span>
				{props.title}
			</div>
			<Link className={styles.ProjectTileImage} href={githubLink}>
				<Image
					className={styles.ProjectTileImage}
					width={300}
					height={300}
					src={props.image}
					alt={props.title}
				/>
			</Link>
			<p className={styles.ProjectTileDescription}>{props.description}</p>
			<div className={styles.ProjectTileTechnologies}>
				{props.technologies.map((technology: string, key: number) => (
					<div key={key} className={styles.ProjectTileTechnology}>
						<span className={styles.ProjectTileArrow}>»</span>
						{technology}
					</div>
				))}
			</div>
			<div className={styles.ProjectTileLinks}>
				{props.links.map((link: any, key: number) => (
					<Link
						key={key}
						href={link.url}
						style={{ color: "black" }}
						className={styles.ProjectTileLink}
					>
						{link.icon}
					</Link>
				))}
			</div>
		</div>
	);
};

ProjectTile.defaultProps = {
	width: "100%",
};

export default ProjectTile;
