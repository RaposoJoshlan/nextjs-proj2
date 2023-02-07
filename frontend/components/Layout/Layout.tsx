import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Showcase from "../Showcase/Showcase";
import styles from "./Layout.module.css";

interface LayoutProps {
	title: string;
	keywords: string;
	description: string;
	children: React.ReactNode | React.ReactNode[];
}

export default function Layout({
	title,
	keywords,
	description,
	children
}: LayoutProps) {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<Header />
			{router.pathname === "/" && <Showcase />}
			<div className={styles.container}>{children}</div>
			<Footer />
		</>
	);
}

Layout.defaultProps = {
	title: "Events | In house parties",
	keywords: "music, dj, edm, events",
	description: "Find latest events and parties"
};
