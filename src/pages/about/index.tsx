import styles from "./about.module.scss";
import headshot from "../../assets/headshot.jpeg";
import dogs from "../../assets/car.jpeg";
import Image from "next/image";

const About = () => {
	return (
		<div className={styles.AboutContainer}>
			<div className={styles.AboutPictureHero}>
				<div className={styles.AboutPictureHero}>
					<div className={styles.AboutImage}>
						<Image src={headshot} height={400} width={400} alt="Jason Giroux" />
					</div>
					<div>
						<h2 className={styles.AboutHey}>Hey There!</h2>
						<p>
							Hey there, fellow internet wanderer! Welcome to my personal
							portfolio, where I showcase my passion for software engineering
							and all things tech.
						</p>
						<p>
							Let me introduce myself. I&apos;m a Full stack developer who
							graduated from Roger Williams University with a BS in Computer
							Science, an AS in Cyber Security, and specialization in
							Mathematics.
						</p>
					</div>
				</div>
			</div>
			<div className={styles.AboutPictureHero}>
				<div>
					<h2 className={styles.AboutSecond}>What About Free Time?</h2>
					<p>
						When I&apos;m not coding, you can find me indulging in my other
						hobbies. I&apos;m a huge car and motorcycle enthusiast, dog lover,
						tinker and DIY-er. I love attending seminars and keeping up with the
						latest trends in the tech world.
					</p>
					<p>
						On top of writing code, I love working with my hands especially on
						cars, motorcycles or taking on new home improvement projects.
					</p>
					<p>
						So, that&apos;s a little bit about me. Thanks for stopping by my
						portfolio, and I hope you enjoy exploring my projects and seeing my
						love for engineering in action!
					</p>
				</div>
				<div className={styles.AboutDogImage}>
					<Image src={dogs} height={400} width={400} alt="Jason Giroux" />
				</div>
			</div>
		</div>
	);
};

export default About;
