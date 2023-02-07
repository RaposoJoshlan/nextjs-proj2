import Image from "next/image";
import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { EventProps } from "../Props/EventProp";
import styles from "./EventDetails.module.css";

export default function EventDetails({ event }: EventProps) {
	const deleteEvent = () => {
		console.log("delete");
	};

	return (
		<div className={styles.event}>
			<div className={styles.controls}>
				<Link href={`/events/edit/${event.id}`}>
					<FaPencilAlt /> Edit Event
				</Link>
				<a href="#" className={styles.delete} onClick={deleteEvent}>
					<FaTimes /> Delete Event
				</a>
			</div>
			<span>
				{new Date(event.attributes.date).toLocaleDateString("en-US")} at{" "}
				{event.attributes.time}
			</span>
			<h1>{event.attributes.name}</h1>
			{event.attributes.image && (
				<div className={styles.image}>
					<Image
						src={event.attributes.image.data.attributes.formats.thumbnail.url}
						alt={event.attributes.name}
						width={960}
						height={600}
					/>
				</div>
			)}
			<h3>Performers:</h3>
			<p>{event.attributes.performers}</p>
			<h3>Description:</h3>
			<p>{event.attributes.description}</p>
			<h3>Venue:</h3>
			<p>{event.attributes.address}</p>
			<Link href="/events" className={styles.back}>
				{"<"} Go Back
			</Link>
		</div>
	);
}
