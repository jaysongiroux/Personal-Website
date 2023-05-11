import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import styles from "./Navbar.module.scss";

interface Props {
	window?: () => Window;
}

const drawerWidth = 240;

export default function Navbar(props: Props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const listItems = (
		<>
			<Link href="/" className={styles.NavbarItem}>
				<span className={styles.NavbarNumber}>01.</span>
				Home
			</Link>
			<Link href="/projects" className={styles.NavbarItem}>
				<span className={styles.NavbarNumber}>02.</span>
				Projects
			</Link>
			<Link href="/about" className={styles.NavbarItem}>
				<span className={styles.NavbarNumber}>03.</span>
				About
			</Link>
			<Link href="/contact" className={styles.NavbarItem}>
				<span className={styles.NavbarNumber}>04.</span>
				Contact
			</Link>
		</>
	);

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<List
				sx={{
					display: "flex",
					flexDirection: "column",
					textAlign: "left",
					padding: 2,
					gap: 3,
				}}
			>
				{listItems}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				component="nav"
				sx={{
					backgroundColor: "unset",
					boxShadow: "unset",
					position: { xs: undefined, sm: "sticky" },
				}}
			>
				<Toolbar sx={{ justifyContent: "flex-end" }}>
					<IconButton
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ display: { sm: "none" } }}
					>
						<MenuIcon sx={{ color: "black" }} />
					</IconButton>

					<Box
						sx={{
							display: { xs: "none", sm: "flex" },
							flexDirection: { xs: "unset", sm: "row" },
							gap: "1rem",
						}}
					>
						{listItems}
					</Box>
				</Toolbar>
			</AppBar>

			<Box component="nav">
				<Drawer
					anchor="right"
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}
