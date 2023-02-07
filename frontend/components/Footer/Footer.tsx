import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>Events 2023</p>
			<Link href="/about">About Events</Link>
		</footer>
	);
}
