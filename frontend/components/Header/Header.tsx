import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href="/">Events</Link>
			</div>
			<nav>
				<ul>
					<li>
						<Link href="/events">All Events</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
