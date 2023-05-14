import { Container, Typography } from "@mui/material";
import Link from "next/link";
import styles from "./about.module.scss";
import AboutTileController from "@/components/AboutTile/AboutTileController";
import { ExampleSectionProps } from "@/components/AboutTile/types";

const exampleSections: ExampleSectionProps[] = [
	{
		title: "Hobbies",
		blocks: [
			{
				title: "Photography",
				description:
					"Theres something about taking a still photo of a sprinting dog, speeding car, or the vibrant colors of the foliage at the peak of fall that makes me feel like I'm capturing a moment in time that will never be the same again.",
			},
			{
				title: "Dog Lover",
				description:
					"I have two Beautiful Australian Shepherds named Aspen and Campbell along with being a foster home and trainer for puppies waiting for a new forever home",
			},
			{
				title: "Builder & Maker",
				description:
					"Along with being able to build software, I also enjoy building things with my hands. I recently finished renovating my office to be a more productive work space that can both provide a vast amount of storage for my miscellaneous cables but also be a home for a micro cluster of computers that host a number of containers that manage my house's automation, laptop and desktop backups and zoning audio for each room",
			},
			{
				title: "Automotive",
				description:
					"I enjoy working on both cars and motorcycles. My most recent project is upgrading the fuel system on my 2008 BMW 1 series to sustain 700 Horse Power.",
			},
		],
	},
	{
		title: "Work Experience",
		blocks: [
			{
				subtitle: "Full Stack Developer E2",
				title: "Hometap Equity Partners LLC",
				linkName: "Hometap Equity Partners LLC",
				linkDestination: "https://www.hometap.com/",
				description:
					"I currently work at Hometap Equity Partners LLC as a Full Stack Engineer E2 where I champion multiple projects that are used and benefited by both internal and external users.",
				chips: ["React", "Django", "GraphQL", "AWS"],
			},
			{
				subtitle: "Computer Engineer E1",
				title: "Assured Information Security",
				linkName: "Assured Information Security",
				linkDestination: "https://www.ainfosec.com/",
				description:
					"TS Clearance. I worked at Assured Information Security as a computer engineer E1 where I was apart of a number of teams  working on customer facing products implementing new ground breaking features. I also worked on Internal Research and development projects.",
				chips: ["React", "GRPC", "Electron", "Python", "C++", "GO Lang"],
			},
			{
				subtitle: "Software Engineer",
				title: "Reserve Technology",
				linkName: "Reserve Technology",
				linkDestination: "https://www.reservetechnology.com/",
				description:
					"I worked at Reserve Technology as a software engineer where I worked within the PHP Laravel framework to develop A brand new Bidding platform.",
				chips: ["PHP", "Laravel", "MySQL", "Vue.js", "AWS"],
			},
		],
	},
	{
		title: "Education",
		blocks: [
			{
				title: "Roger Williams University",
				subtitle: "Bristol, Rhode Island",
				linkName: "Roger Williams University",
				linkDestination: "https://www.rwu.edu/",
				description: `• BS Computer Science, AS Cyber security, Specialization in mathematics
					• Played on the soccer team as the Goal keeper
					• Dean's List 2015-2018`,
			},
			{
				title: "Westborough High School",
				subtitle: "Massachusetts",
				linkName: "Westborough High School",
				linkDestination: "https://www.westboroughk12.org/whs",
			},
		],
	},
];

const About = () => (
	<Container maxWidth="md">
		<div className={styles.AboutContainerRow}>
			<div className={styles.AboutInformationContainer}>
				<Typography variant="h2">Hey There! I&apos;m Jason Giroux</Typography>
				<Typography
					variant="body1"
					className={styles.AboutInformationTypographyBody}
				>
					Hey there, fellow internet wanderer! Welcome to my personal portfolio,
					where I showcase my passion for software engineering and all things
					tech.
				</Typography>
				<Typography
					variant="body1"
					className={styles.AboutInformationTypographyBody}
				>
					Let me introduce myself. I&apos;m a Full stack developer who graduated
					from{" "}
					<Link href="https://www.rwu.edu/">Roger Williams University</Link>{" "}
					with a BS in Computer Science, an AS in Cyber Security, and
					specialization in Mathematics.
				</Typography>
			</div>
		</div>
		<div style={{ marginTop: 20 }}>
			<AboutTileController sections={exampleSections} />
		</div>
	</Container>
);

export default About;
