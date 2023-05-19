import React from "react";

import styles from "./Footer.module.scss";
import { Button, IconButton, Typography } from "@mui/material";
import { EmailOutlined, GitHub, LinkedIn } from "@mui/icons-material";
import cx from "classnames";
import jsLogo from "../../assets/jg_logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className={styles.FooterContainer}>
			<div className={styles.FooterCTABubble}>
				<Typography variant="h4" className={styles.FooterCTABubbleSection}>
					Start a Project
				</Typography>
				<Typography variant="body1" className={styles.FooterCTABubbleSection}>
					If you have any ideas or projects you&apos;d like to collaborate on,
					please reach out!
				</Typography>
				<Button
					variant="outlined"
					className={cx(
						styles.FooterCTABubbleSection,
						styles.FooterCTABubbleButton
					)}
				>
					Let&apos;s Chat
				</Button>
			</div>
			<Image
				src={jsLogo}
				width={75}
				height={75}
				alt={"JG logo"}
				className={styles.FooterJGLogo}
			/>
			<div>
				<Typography variant="h4" className={styles.FooterQuote}>
					<pre>{"Crafting code\nbuilding dreams"}</pre>
				</Typography>
			</div>
			<div className={styles.FooterSocialButtonContainer}>
				<IconButton className={styles.FooterSocialMediaIconButton}>
					<Link href="https://github.com/jaysongiroux">
						<GitHub
							sx={{
								color: "white",
								fontSize: "30px",
							}}
						/>
					</Link>
				</IconButton>

				<IconButton className={styles.FooterSocialMediaIconButton}>
					<Link href="https://www.linkedin.com/in/jasongiroux/">
						<LinkedIn sx={{ color: "white", fontSize: "30px" }} />
					</Link>
				</IconButton>

				<IconButton className={styles.FooterSocialMediaIconButton}>
					<Link href="mailto:jaysongiroux@gmail.com">
						<EmailOutlined sx={{ color: "white", fontSize: "30px" }} />
					</Link>
				</IconButton>
			</div>

			<div className={styles.FooterMetaSections}>
				<Typography variant="body1">
					Made with{" "}
					<Link
						href={"https://nextjs.org/"}
						className={styles.FooterAccentText}
					>
						Next.js
					</Link>
					{" - "}
					Deployed on{" "}
					<Link href={"https://vercel.com"} className={styles.FooterAccentText}>
						Vercel
					</Link>
				</Typography>
			</div>
		</div>
	);
};

export default Footer;
