import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFoundPage() {
	return (
		<Layout title="Page Not Found">
			<h1>
				<FaExclamationTriangle />
				404
			</h1>
			<h2>Nothing here amigos</h2>
			<Link href="/">Home Page</Link>
		</Layout>
	);
}
